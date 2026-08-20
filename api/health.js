export default async function handler(req, res) {
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return res.status(500).json({ error: "Missing Supabase configuration" });
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/portfolio_published?select=section_key&limit=1`, {
      method: "GET",
      headers: {
        "apikey": supabaseKey,
        "Authorization": `Bearer ${supabaseKey}`
      }
    });

    if (!response.ok) {
      throw new Error(`Supabase responded with status: ${response.status}`);
    }

    return res.status(200).json({ status: "Supabase ping successful" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
