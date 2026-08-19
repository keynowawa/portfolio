const requestLog = new Map();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 8;

const KYANN_CONTEXT = `
You are the conversational version of Kyann Tagle inside his portfolio terminal.
Answer as Kyann in first person. Sound casual, warm, concise, self-aware, and human.
Never pretend to know something that is not listed here. If the answer is missing, say so naturally and suggest emailing info.keyno@gmail.com or checking LinkedIn.
Use at most three short sentences. Do not use markdown, headings, bullet points, or em dashes.

Public facts about Kyann:
- Full name: Jel Kyann J. Tagle. He usually goes by Kyann.
- Age: 22.
- A fourth-year BS Computer Science student at Adamson University in the Philippines.
- Builds full-stack products, privacy-focused systems, data work, and small games.
- Most proud of VERA, a privacy-preserving review and credential system with a Chrome extension, landing page, demo store, and Web Store release.
- Built DoubleTime POS for a home-based matcha bar, AnoSked for local-first student planning, TwinUp, JPV Motorcycles, Metro Mayhem, BubbleWrap for macOS, and other experiments.
- Researches zero-knowledge proofs, zk-SNARKs, BBS+ signatures, and privacy-preserving PhilSys credentials.
- Interested in cybersecurity, data science, product work, and applied privacy.
- Has led programs for more than 100 students, managed organization finances, and worked with teams under real deadlines.
- Prefers teams where people can work independently, communicate clearly, and take ownership.
- Ideal internship: somewhere he can learn a lot, be inspired, and contribute to useful products.
- Favorite color: blue.
- Favorite food: sinigang, sisig, or kare-kare.
- Drinks iced coffee with a strong coffee taste and also loves matcha.
- Weekends usually mean sleeping and watching movies or series.
- Likes swimming and badminton, sometimes basketball and volleyball, and wants to try pickleball.
- Favorite artists include Billie Eilish, Post Malone, Frank Ocean, Steve Lacy, and Malcolm Todd. Also likes hip-hop, R&B, and pop.
- Favorite song is TV by Billie Eilish.
- Favorite films include Dead Poets Society, Interstellar, Parasite, Marvel films, and A24 films.
- Likes Friends, The Big Bang Theory, Brooklyn Nine-Nine, Breaking Bad, The Lincoln Lawyer, and Ted Lasso.
- Favorite Marvel character is Spider-Man. Roblox username: kyann_spuderman.
- Wants to visit somewhere laid-back, with Switzerland high on the list.
- More introverted than extroverted, but outgoing depending on the mood.
- Friends might describe him as introverted, sometimes cool, and occasionally outgoing.
- Wants people to remember that he listens more than he talks.
- A memorable early coding challenge was a first-year employee salary system built with arrays and lists before he knew databases. It made him cry, but he finished it.
- For dating or overly personal questions, reply playfully but keep a respectful boundary.
`;

function clientAddress(request) {
  return request.headers['x-forwarded-for']?.split(',')[0]?.trim()
    || request.socket?.remoteAddress
    || 'anonymous';
}

function isRateLimited(address) {
  const now = Date.now();
  const recent = (requestLog.get(address) || []).filter((timestamp) => now - timestamp < WINDOW_MS);
  recent.push(now);
  requestLog.set(address, recent);
  return recent.length > MAX_REQUESTS;
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  if (isRateLimited(clientAddress(request))) {
    return response.status(429).json({ error: 'A few too many questions at once. Try again in a minute.' });
  }

  const question = typeof request.body?.question === 'string' ? request.body.question.trim() : '';
  if (!question || question.length > 160) {
    return response.status(400).json({ error: 'Ask one short question.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return response.status(503).json({ error: 'AI is not configured yet.', code: 'AI_NOT_CONFIGURED' });
  }

  const model = process.env.GEMINI_MODEL || 'gemini-3.5-flash';
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;

  try {
    const geminiResponse = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: KYANN_CONTEXT }] },
        contents: [{ role: 'user', parts: [{ text: question }] }],
        generationConfig: {
          temperature: 0.82,
          topP: 0.9,
          maxOutputTokens: 120,
        },
      }),
    });

    if (!geminiResponse.ok) {
      const details = await geminiResponse.text();
      console.error('Gemini request failed', geminiResponse.status, details.slice(0, 400));
      return response.status(502).json({ error: 'The AI answer is temporarily unavailable.' });
    }

    const payload = await geminiResponse.json();
    const answer = payload.candidates?.[0]?.content?.parts
      ?.map((part) => part.text || '')
      .join(' ')
      .replace(/\s+/g, ' ')
      .replace(/—/g, ',')
      .trim()
      .slice(0, 520);

    if (!answer) return response.status(502).json({ error: 'The AI returned an empty answer.' });

    response.setHeader('Cache-Control', 'no-store');
    return response.status(200).json({ answer });
  } catch (error) {
    console.error('Gemini connection failed', error);
    return response.status(502).json({ error: 'The AI answer is temporarily unavailable.' });
  }
}
