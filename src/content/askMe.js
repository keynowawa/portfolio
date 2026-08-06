export const heroComments = [
  "// hello world. I'm Kyann.",
  '// Computer Science student at Adamson University.',
  '// I build full-stack systems around real problems.',
  '// Curious about data, cryptography, and human-centered products.',
];

const answerIntents = [
  {
    terms: ['what is your name', 'what s your name', 'whats your name', 'your name', 'full name', 'what should i call you', 'nickname', 'name'],
    answers: [
      'I’m Jel Kyann J. Tagle, but Kyann works perfectly.',
      'My full name is Jel Kyann J. Tagle. Most people just call me Kyann.',
      'Kyann Tagle. Jel Kyann J. Tagle when paperwork gets involved.',
    ],
  },
  {
    terms: ['who are you', 'who is kyann', 'who s kyann', 'whos kyann', 'tell me about yourself', 'tell us about yourself', 'tell me something about yourself', 'about yourself', 'about you', 'introduce yourself', 'give me an intro', 'quick intro', 'short intro', 'elevator pitch', 'short bio', 'your bio', 'describe yourself', 'what do you do', 'what is your job', 'what s your job', 'whats your job', 'occupation', 'yourself'],
    answers: [
      'I’m Kyann. I’m 22, in my fourth year of Computer Science, and usually happiest when I’m turning a half-formed idea into something people can actually use.',
      'I’m Kyann, a 22-year-old Computer Science student from Manila and Cavite. I learn by building, asking too many questions, and making ideas work outside my head.',
      'I’m a fourth-year Computer Science student who likes useful software, thoughtful interfaces, and the point where a messy problem finally starts making sense.',
      'I’m Kyann, a fourth-year Computer Science student from Manila and Cavite. I build practical products, explore privacy and data, and listen more than I talk.',
      'Kyann here. I study Computer Science, build whatever idea refuses to leave me alone, and care a lot about making complicated things easier to use.',
    ],
  },
  {
    terms: ['hello', 'hey', 'hi', 'good morning', 'good afternoon', 'good evening', 'whats up', 'sup'],
    answers: [
      'Hey, I’m Kyann. Ask me about what I build, what I listen to, or anything else you’re curious about.',
      'Hi. You found the tiny version of me inside the terminal. What do you want to know?',
      'Hey there. I’m Kyann. Go ahead, I’m listening.',
    ],
  },
  {
    terms: ['thank you', 'thanks', 'thank u', 'salamat'],
    answers: ['Anytime. Thanks for being curious.', 'You’re welcome. Keep the questions coming.', 'Of course. Glad you asked.'],
  },
  {
    terms: ['anything', 'literally anything', 'ask you anything', 'whatever', 'surprise me', 'say anything'],
    answers: [
      'Anything? That is technically not a question, but I respect the confidence.',
      'You said anything, then made me choose. This already feels like a trap.',
      'Anything? Bold choice. I was emotionally prepared for a question.',
      'Okay, anything: every “quick nap” is just sleep with bad marketing.',
      'Anything? Fine. Your screen brightness is probably either perfect or a personal attack.',
      'Surprise: I can answer a lot here, but apparently I still need you to do the asking.',
    ],
  },
  {
    terms: ['how are you', 'how are u', 'how s it going', 'hows it going', 'you good', 'are you okay'],
    answers: [
      'Doing good. Running on curiosity, music, and a suspicious number of browser tabs.',
      'Pretty good. Still learning, still building, still adjusting spacing by two pixels.',
      'I’m good. This tiny terminal version of me is having a particularly productive day.',
    ],
  },
  {
    terms: ['goodbye', 'bye', 'see you', 'see ya', 'later', 'gotta go'],
    answers: [
      'Thanks for stopping by. Don’t leave without looking at the projects.',
      'See you. The terminal will be right here pretending it does not miss you.',
      'Later. Thanks for spending a little time with my work.',
    ],
  },
  {
    terms: ['tell me a joke', 'tell a joke', 'make me laugh', 'joke', 'another joke', 'say something funny'],
    answers: [
      'Every weekend I make ambitious plans. Then my bed submits a better proposal.',
      'I said “one episode” with the confidence of someone who has learned absolutely nothing.',
      'My screen-time report arrives every Sunday like it pays rent and has opinions.',
      'Nothing humbles you faster than waving back at someone who was not waving at you. New country, immediately.',
      'I’m not ignoring my alarm. I’m giving it time to reconsider what it asked of me.',
      'Being an adult is mostly carrying the same glass of water between rooms and never drinking it.',
      'I tried being spontaneous once. It was scheduled for 3 PM.',
      'My wallet and I are taking some space. Mostly because there is nothing between us.',
      'Philippine weather has two settings: air fryer and surprise swimming pool.',
      'I opened the fridge for emotional support. It had no new advice.',
    ],
  },
  {
    terms: ['tell me a funny story', 'tell a funny story', 'funny story', 'short story', 'tell me a story', 'story time'],
    answers: [
      'I once walked confidently in the wrong direction, checked my phone like I had received urgent new coordinates, then turned around. Nobody questioned it.',
      'I waved back at someone who was waving behind me. We both know what happened. I simply no longer live in that memory.',
      'I spent several minutes looking for my phone while holding it. The investigation had serious internal corruption.',
      'I cleaned my room by moving everything from the chair to the bed. At night, I moved it back. A complete operational cycle.',
      'I made iced coffee to become productive, then spent twenty minutes taking pictures of the iced coffee. Mission drift.',
    ],
  },
  {
    terms: ['can we go on a date', 'go on a date', 'date me', 'take you out', 'go out with me', 'would you date me', 'wanna date', 'want to date'],
    answers: [
      'Bold opening. This terminal handles interviews better than dates, so you’ll have to ask the real Kyann.',
      'I’m flattered, but I can’t schedule dates from inside a portfolio. You’ll have to ask the actual me.',
      'Maybe, but this version of me only commits code, not weekend plans.',
    ],
  },
  {
    terms: ['are you single', 'do you have a girlfriend', 'do you have a boyfriend', 'relationship status', 'are you dating', 'taken or single'],
    answers: [
      'That question is outside this portfolio’s clearance level. Ask the real me.',
      'The terminal has no permission to disclose that. Nice try, though.',
      'I keep some things off the source code. You’ll have to ask me yourself.',
    ],
  },
  {
    terms: ['i love you', 'love you', 'marry me', 'will you marry me', 'be mine'],
    answers: [
      'That escalated quickly. I appreciate the enthusiasm.',
      'Let’s start with the projects section and see where things go.',
      'Strong commitment for someone who may not have opened my GitHub yet.',
    ],
  },
  {
    terms: ['nice portfolio', 'cool portfolio', 'great portfolio', 'love your portfolio', 'nice website', 'cool website', 'great website', 'love your website', 'looks good', 'impressive'],
    answers: [
      'Thank you. I spent an unreasonable amount of time thinking about the spacing.',
      'Thanks. That makes all the tiny layout adjustments feel worth it.',
      'I appreciate that. The goal was clean, technical, and still unmistakably mine.',
    ],
  },
  {
    terms: ['age', 'old', 'how old'],
    answers: ['I’m 22 years old.', 'I’m 22. Old enough to have strong opinions about interface spacing.'],
  },
  {
    terms: ['birthday', 'birth date', 'birthdate', 'when were you born', 'when is your birthday'],
    answers: ['I haven’t added my birthday here. That one still belongs to the real-life conversation.', 'My birthday is not in this little knowledge base yet. Ask me directly.'],
  },
  {
    terms: ['where are you from', 'where do you live', 'based', 'location', 'manila', 'cavite', 'from'],
    answers: [
      'I’m from Manila and Cavite, Philippines. I move between both, so both feel like home.',
      'Manila and Cavite. That is the short answer, and both places are part of how I see home.',
    ],
  },
  {
    terms: ['favorite color', 'favourite color', 'fave color', 'fav color', 'favorite colour', 'favourite colour', 'fave colour', 'color', 'colour', 'blue'],
    answers: ['Blue, easily. Especially the deeper, electric kind.', 'Definitely blue. Dark, clean, and a little electric.', 'Blue. Calm when it needs to be, bright when it matters.'],
  },
  {
    terms: ['favorite food', 'favourite food', 'fave food', 'comfort food', 'comfort meal', 'food', 'meal', 'sinigang', 'sisig', 'kare kare'],
    answers: [
      'Sinigang, sisig, or kare-kare any day. I would happily rotate between the three.',
      'My comfort-food lineup is sinigang, sisig, and kare-kare. No complicated ranking needed.',
      'Sinigang, sisig, and kare-kare. Put any one of them in front of me and I’m good.',
    ],
  },
  {
    terms: ['coffee or tea', 'coffee tea', 'favorite drink', 'favourite drink', 'fave drink', 'drink', 'coffee', 'iced coffee', 'matcha', 'tea'],
    answers: [
      'Iced coffee with a strong coffee taste. I also love matcha, so choosing one depends on the day.',
      'Strong iced coffee first, but matcha is absolutely in the rotation.',
      'I like my iced coffee to actually taste like coffee. Matcha gets equal respect, though.',
    ],
  },
  {
    terms: ['what do you do on weekends', 'usually do on weekends', 'your weekend', 'weekends', 'weekend plans', 'day off'],
    answers: [
      'Honestly? Sleeeeep, then watch movies or catch up on a series.',
      'Weekends are mostly for sleeping and watching movies or series. Very ambitious, I know.',
      'I usually recover my sleep debt and disappear into a movie or series.',
    ],
  },
  {
    terms: ['games or sports', 'game', 'games', 'sport', 'sports', 'swimming', 'badminton', 'basketball', 'volleyball', 'volley', 'pickleball', 'roblox'],
    answers: [
      'I like swimming and badminton. I dabble in basketball and volleyball, and pickleball is next on the try list.',
      'Swimming and badminton are the easy answers. I play a little basketball and volleyball too, and I want to try pickleball.',
      'Mostly swimming and badminton, with occasional basketball or volleyball. Also, Roblox knows me as @kyann_spuderman.',
    ],
  },
  {
    terms: ['roblox username', 'roblox account', 'add you on roblox', 'find you on roblox', 'what is your roblox', 'what s your roblox', 'whats your roblox', 'kyann spuderman'],
    answers: [
      'Add me on Roblox: @kyann_spuderman. The Spider-Man influence is not subtle.',
      'I’m @kyann_spuderman on Roblox. Yes, the name is very intentional.',
    ],
  },
  {
    terms: ['favorite book', 'favourite book', 'fave book', 'book stayed with you', 'book', 'books', 'reading', 'read'],
    answers: [
      'Nothing in particular has stayed with me yet, but I do enjoy self-improvement books.',
      'I don’t have one defining book yet. I usually gravitate toward books about improving yourself.',
      'No all-time favorite yet. I like reading self-improvement books, so maybe the answer is still waiting for me.',
    ],
  },
  {
    terms: ['favorite marvel character', 'favourite marvel character', 'fave marvel character', 'marvel character', 'favorite superhero', 'favourite superhero', 'spider man', 'spiderman'],
    answers: [
      'Spider-Man, easily. You can also add my very serious alter ego on Roblox: @kyann_spuderman.',
      'Definitely Spider-Man. My Roblox username @kyann_spuderman probably gave that away.',
      'Spider-Man. There is supporting evidence in the form of my Roblox account, @kyann_spuderman.',
    ],
  },
  {
    terms: ['favorite song', 'favourite song', 'fave song', 'song on repeat', 'on repeat', 'currently listening', 'listening right now', 'tv by billie', 'frank ocean'],
    answers: [
      'My favorite is “TV” by Billie Eilish. Right now, anything by Frank Ocean, Malcolm Todd, or Steve Lacy is getting replayed.',
      '“TV” by Billie Eilish is the favorite. The current rotation is Frank Ocean, Malcolm Todd, and Steve Lacy. Yes, Steve Lacy.',
      'Billie’s “TV” is still the favorite, but lately I keep coming back to Frank Ocean, Malcolm Todd, and Steve Lacy.',
    ],
  },
  {
    terms: ['where do you want to travel', 'want to travel', 'travel destination', 'dream destination', 'dream trip', 'vacation', 'switzerland', 'travel'],
    answers: [
      'Somewhere laid-back. Switzerland is definitely on the list.',
      'I want somewhere calm and laid-back, and Switzerland is high on the list.',
      'Give me a laid-back place where I can slow down for a while. Switzerland sounds very right.',
    ],
  },
  {
    terms: ['music', 'singer', 'singers', 'artist', 'artists', 'listen to', 'playlist', 'genre', 'hip hop', 'hiphop', 'rnb', 'r b', 'billie', 'eilish', 'post malone', 'steve lacy', 'malcolm todd', 'pop'],
    answers: [
      'Billie Eilish is first on my list, then Post Malone. I listen to a lot of hip-hop and R&B too, plus Steve Lacy, Malcolm Todd, and whatever pop song has me hooked that week.',
      'My taste jumps around. Billie Eilish, Post Malone, hip-hop, R&B, Steve Lacy, Malcolm Todd, and plenty of pop all make the rotation.',
      'Billie Eilish is probably the fastest answer. Post Malone is up there too, then hip-hop, R&B, Steve Lacy, Malcolm Todd, and a lot of pop.',
    ],
  },
  {
    terms: ['movie', 'movies', 'film', 'films', 'cinema', 'marvel', 'a24', 'dead poets society', 'interstellar', 'parasite'],
    answers: [
      'I love Marvel and I’m usually interested when A24 is involved. My favorites are Dead Poets Society, Interstellar, and Parasite.',
      'Dead Poets Society, Interstellar, and Parasite are my top three. I’m also a Marvel fan and I like the kind of films A24 tends to put out.',
      'Give me a Marvel movie for fun or an A24 film when I want something stranger. Dead Poets Society, Interstellar, and Parasite are the favorites.',
    ],
  },
  {
    terms: ['series', 'tv', 'tv show', 'show', 'shows', 'sitcom', 'sitcoms', 'friends', 'big bang theory', 'brooklyn 99', 'brooklyn nine nine', 'breaking bad', 'lincoln lawyer', 'ted lasso'],
    answers: [
      'For sitcoms, Friends, The Big Bang Theory, and Brooklyn Nine-Nine are easy picks. I also love Breaking Bad, The Lincoln Lawyer, and Ted Lasso.',
      'My comfort-show side says Friends, The Big Bang Theory, and Brooklyn Nine-Nine. Then Breaking Bad, The Lincoln Lawyer, and Ted Lasso cover the rest of the mood range.',
      'I rotate between sitcom comfort and heavier stories: Friends, Brooklyn Nine-Nine, The Big Bang Theory, Breaking Bad, The Lincoln Lawyer, and Ted Lasso.',
    ],
  },
  {
    terms: ['how would your friends describe you', 'friends describe you', 'what do your friends think', 'around your friends'],
    answers: [
      'Probably introverted, but cool sometimes. I can be outgoing too. It really depends on the mood.',
      'My friends would probably say I’m quiet at first, occasionally cool, and surprisingly outgoing when the mood is right.',
      'Introverted most of the time, outgoing sometimes, and hopefully cool often enough to count.',
    ],
  },
  {
    terms: ['introvert or extrovert', 'introverted or extroverted', 'are you an introvert', 'are you introverted', 'are you extroverted', 'introvert', 'extrovert', 'ambivert'],
    answers: [
      'More introverted, or somewhere in the middle. It depends on the mood and the people around me.',
      'I lean introvert, but I can be outgoing when I feel comfortable.',
      'Somewhere between introvert and the occasional outgoing version of me.',
    ],
  },
  {
    terms: ['unusual or funny fact', 'unusual fact', 'funny fact about you', 'fun fact', 'something unusual', 'weird fact', 'random fact'],
    answers: [
      'I’ll tell you in person. This little terminal is already getting too personal.',
      'That one stays off the portfolio. Ask me in person.',
      'Nice try. I’m saving at least one fun fact for an actual conversation.',
    ],
  },
  {
    terms: ['favorite skill', 'favourite skill', 'fave skill', 'fav skill', 'best skill', 'enjoy doing', 'favorite thing to do'],
    answers: [
      'Full-stack problem-solving. I like understanding the system underneath and the experience people actually see.',
      'Turning a messy problem into a full-stack product that feels simple to use. That is the part I enjoy most.',
      'Probably connecting the technical pieces to the human problem. Good code matters, but I like knowing why I’m building it.',
    ],
  },
  {
    terms: ['hobby', 'hobbies', 'fun', 'free time', 'spare time', 'outside code', 'interests', 'interested in'],
    answers: [
      'Outside code, I’m usually listening to music, watching a film or series, or following a random idea until it becomes a side project.',
      'Music, movies, series, and side projects cover a lot of it. I like things that give me a new idea to chase afterward.',
      'I watch a lot of movies and series, keep music on constantly, and somehow turn free-time questions into things I want to build.',
    ],
  },
  {
    terms: ['personality', 'describe your personality', 'what are you like', 'kind of person'],
    answers: [
      'Curious, practical, and usually the person asking why a process is harder than it needs to be.',
      'I ask a lot of questions, learn by doing, and care about getting both the details and the people side right.',
      'I’m curious, persistent, and pretty calm when things get messy. I like listening first, then figuring out what actually needs fixing.',
    ],
  },
  {
    terms: ['project are you most proud of', 'project most proud', 'proudest project', 'favorite project', 'favourite project', 'best project'],
    answers: [
      'Definitely VERA. It brought together privacy, product thinking, and a problem I genuinely care about.',
      'VERA, without hesitation. It is the project that feels closest to the kind of work I want to keep exploring.',
      'I’m most proud of VERA. It pushed me beyond just building features and into thinking about trust, privacy, and the whole product.',
    ],
  },
  {
    terms: ['hardest technical problem', 'hardest problem', 'most difficult coding', 'memorable coding problem', 'coding made you cry', 'salary system', 'employee salary'],
    answers: [
      'The most memorable was a first-year employee salary system. We had no database, just arrays and lists linked across different forms. It was the first time coding made me cry, but I finished it.',
      'Not necessarily the hardest, but the employee salary system from first year stays with me. I barely understood data storage, so connecting arrays and lists across forms was painful. I cried, learned, and got it working.',
      'A first-year salary system. AI was not nearly as useful then, I did not know databases yet, and everything depended on arrays and lists across multiple forms. That project humbled me.',
    ],
  },
  {
    terms: ['technology do you enjoy', 'favorite technology', 'favourite technology', 'technology interest', 'technical interest', 'zero knowledge proof', 'zero knowledge proofs', 'zkp', 'zk proofs'],
    answers: [
      'Right now I’m really enjoying learning about zero-knowledge proofs. That is the technical rabbit hole I keep returning to.',
      'Zero-knowledge proofs are the topic pulling me in right now. Privacy without unnecessary disclosure is genuinely fascinating.',
      'I’m currently most interested in zero-knowledge proofs. The mix of cryptography, privacy, and practical trust is hard to ignore.',
    ],
  },
  {
    terms: ['skill are you improving', 'currently improving', 'learning right now', 'studying right now', 'getting better at', 'cybersecurity', 'cybersec', 'data science', 'datasci'],
    answers: [
      'I’m going deeper into cybersecurity and data science right now.',
      'Cybersecurity and data science are the two areas I’m actively trying to strengthen.',
      'Definitely cybersecurity and data science. Both keep opening new questions I want to understand properly.',
    ],
  },
  {
    terms: ['what kind of team', 'team do you work best with', 'ideal team', 'team environment', 'independent team', 'independent people'],
    answers: [
      'I work best with independent people who can own their part, communicate clearly, and come together when the work needs it.',
      'A team where everyone can move independently without disappearing. Own the work, communicate, then help each other when it matters.',
      'Independent teammates are ideal. I like people who take ownership and do not need to be chased for every next step.',
    ],
  },
  {
    terms: ['ideal internship', 'internship look like', 'dream internship', 'internship environment', 'what do you want from an internship'],
    answers: [
      'My ideal internship is somewhere I can learn a lot, work around people who inspire me, and leave better than I arrived.',
      'A place that teaches me a lot and makes me feel inspired by the people and the work around me.',
      'I want an internship where I can contribute for real, learn constantly, and see the kind of work I could grow into.',
    ],
  },
  {
    terms: ['what motivates you', 'motivation', 'project becomes difficult', 'when things get difficult', 'keep going', 'don t give up', 'finish your ai credits', 'ai credits'],
    answers: [
      'Sometimes the motivation is simple: I already spent the AI credits, so I’m finishing the thing.',
      'Honestly? I remember how many AI credits I already burned through and decide the project is getting finished.',
      'A mix of stubbornness, curiosity, and refusing to let the AI credits go to waste.',
    ],
  },
  {
    terms: ['who inspires you', 'professional inspiration', 'personal inspiration', 'role model', 'look up to'],
    answers: [
      'I don’t have one specific person. I just want to become successful and actually do something that matters.',
      'There is no single role model answer. I’m inspired by the idea of building a successful life around work that actually matters.',
      'Honestly, no one person. The goal itself inspires me: be successful, stay useful, and make something meaningful.',
    ],
  },
  {
    terms: ['remember after meeting you', 'remember about you', 'what should people remember', 'first impression', 'after meeting you'],
    answers: [
      'That I listen more than I talk.',
      'Hopefully that I listened. I tend to take in more than I say.',
      'I’d want them to remember that I paid attention. I usually listen more than I talk.',
    ],
  },
  {
    terms: ['what is vera', 'tell me about vera', 'vera extension', 'vera project', 'verified reviews', 'review verification', 'vera'],
    answers: [
      'VERA verifies genuine-purchase reviews while limiting personal-data exposure. We built the extension, landing page, and demo store.',
      'VERA is a privacy-minded review verification system delivered as a Chrome extension with its own demo shop.',
      'VERA helps prove a review came from a real purchase without exposing more buyer data than necessary.',
    ],
  },
  {
    terms: ['what is doubletime', 'tell me about doubletime', 'doubletime pos', 'matcha pos', 'matcha business', 'order tracker', 'doubletime'],
    answers: [
      'DoubleTime POS tracks our matcha-bar orders and exports them to spreadsheets.',
      'It is the order system I built around how our small home-based matcha business actually works.',
      'DoubleTime keeps orders organized and makes end-of-day spreadsheet reporting much easier.',
    ],
  },
  {
    terms: ['what is anosked', 'tell me about anosked', 'anosked project', 'schedule tracker', 'school schedule app', 'student planner', 'anosked'],
    answers: [
      'AnoSked turns a pasted school-portal schedule into a weekly planner with tasks.',
      'It removes the annoying part of rebuilding a class schedule by hand.',
      'AnoSked keeps a student’s classes and to-dos together after one quick schedule import.',
    ],
  },
  {
    terms: ['what is your thesis', 'tell me about your thesis', 'research topic', 'philsys research', 'verifiable credential', 'bbs signature', 'selective disclosure'],
    answers: [
      'My thesis uses zero-knowledge proofs so PhilSys users can prove facts without revealing their full identity data.',
      'I’m researching selective identity disclosure for PhilSys using zk-SNARKs and verifiable credentials.',
      'The goal is simple: prove only what is needed, such as age eligibility, and keep the rest private.',
    ],
  },
  {
    terms: ['what is metro mayhem', 'tell me about metro mayhem', 'metro mayhem'],
    answers: [
      'Metro Mayhem is a Unity rage-platformer about broken systems and public frustration in the Philippines.',
      'It is a deliberately frustrating parkour game inspired by inconsistency, neglect, and brutality in the Philippines.',
    ],
  },
  {
    terms: ['what is red shift', 'tell me about red shift', 'red shift'],
    answers: [
      'Red Shift is a story-driven Unity game about red-tagging in the Philippines.',
      'It explores red-tagging through a player’s choices, story, and consequences.',
    ],
  },
  {
    terms: ['what is coin clicker', 'tell me about coin clicker', 'coin clicker'],
    answers: [
      'Coin Clicker is a timed political game where passing laws can raise or lower the peso score.',
      'You act as president, answer law questions each round, and try to improve the country’s score.',
    ],
  },
  {
    terms: ['what is crazy little game called love', 'tell me about crazy little game called love', 'crazy little game called love', 'love game'],
    answers: [
      'It is an endless chase game about unreciprocated love. You keep catching up, but never quite reach them.',
      'Think Flappy Bird, except the obstacle is emotional availability.',
    ],
  },
  {
    terms: ['what is tetris but harder', 'tell me about tetris but harder', 'tetris but harder', 'hard tetris'],
    answers: [
      'Tetris, But Harder adds modes like reversed controls, limited visibility, and color chaos.',
      'It is regular Tetris after I asked, “What if this was less peaceful?”',
    ],
  },
  {
    terms: ['games have you made', 'games did you make', 'your game projects', 'metro mayhem', 'red shift', 'coin clicker', 'crazy little game called love', 'tetris but harder'],
    answers: [
      'I’ve made five strange little games about politics, frustration, love, and making Tetris unnecessarily difficult.',
      'My game shelf includes Metro Mayhem, Red Shift, Coin Clicker, Crazy Little Game Called Love, and Tetris, But Harder.',
      'Mostly Unity experiments with unusual mechanics and very specific feelings. None of them are boring.',
    ],
  },
  {
    terms: ['what is bubblewrap', 'tell me about bubblewrap', 'bubblewrap for mac', 'bubblewrap app'],
    answers: [
      'BubbleWrap is a native Mac stress toy with pressure, haptics, sound, and satisfying virtual bubbles.',
      'It is digital bubble wrap for macOS. No productivity claim, just tiny pops and peace.',
    ],
  },
  {
    terms: ['what is adamson payroll', 'tell me about adamson payroll', 'adamson payroll system', 'payroll project'],
    answers: [
      'Adamson Payroll was my first-year salary system, built with arrays and lists before I understood databases.',
      'It is the first coding project that made me cry, then taught me I could still finish it.',
    ],
  },
  {
    terms: ['what is sulyap palkon', 'tell me about sulyap palkon', 'sulyap palkon'],
    answers: [
      'Sulyap Palkon was an early YouTube-style site for Adamson-related videos.',
      'It was my early take on a video platform centered on the Adamson community.',
    ],
  },
  {
    terms: ['tell me about your portfolio', 'what is this portfolio', 'portfolio website', 'this website', 'this site'],
    answers: [
      'This is my terminal-inspired portfolio, built with React and Vite to make my work feel like me.',
      'The portfolio is part project archive, part introduction, and apparently part tiny Kyann chatbot.',
    ],
  },
  {
    terms: ['jpv motorcycles', 'motorcycle website', 'motorcycle rental', 'client website', 'live client work'],
    answers: [
      'JPV Motorcycles is a live website we built for a motorcycle rental company that uses it today.',
      'It is real client work: a public motorcycle-rental website currently used by the business.',
    ],
  },
  {
    terms: ['power bi dashboard', 'power bi dashboards', 'rapidminer', 'data cleaning project', 'analytics projects'],
    answers: [
      'My data work includes Power BI dashboards and RapidMiner cleaning workflows.',
      'I use Power BI for dashboards and RapidMiner to clean and prepare datasets.',
    ],
  },
  {
    terms: ['project', 'projects', 'built', 'build', 'building', 'made', 'make', 'created', 'developed', 'app', 'apps', 'application', 'portfolio', 'anosked', 'vera', 'doubletime'],
    answers: [
      'My main three are VERA, DoubleTime POS, and AnoSked. The work section has the rest.',
      'Start with VERA, DoubleTime, and AnoSked, then open the project folders for games, research, data, and client work.',
      'VERA is the privacy project, DoubleTime runs matcha orders, and AnoSked organizes school schedules.',
    ],
  },
  {
    terms: ['skill', 'skills', 'stack', 'technology', 'technologies', 'language', 'languages', 'framework', 'frameworks', 'code', 'coding', 'programming', 'tools'],
    answers: [
      'My core stack includes JavaScript, TypeScript, React, Next.js, Supabase, and PostgreSQL. I’ve also worked with Python, C#, Java, Swift, Unity, Assembly, Power BI, and RapidMiner.',
      'I reach for JavaScript, TypeScript, React, Next.js, Supabase, and PostgreSQL most often. My wider toolkit includes Python, C#, Java, Swift, Unity, Assembly, Power BI, and RapidMiner.',
    ],
  },
  {
    terms: ['experience', 'background', 'lead', 'led', 'leader', 'leadership', 'team', 'teams', 'organization', 'organizing', 'managed', 'management'],
    answers: [
      'I’ve led programs for more than 100 students and managed over ₱27,000 across six events, alongside building products with teams under real deadlines.',
      'My experience mixes software with student leadership. I’ve built products, led a program for 100+ students, and handled organization finances where every peso had to be accounted for.',
    ],
  },
  {
    terms: ['education', 'school', 'college', 'university', 'student', 'study', 'studying', 'adamson', 'degree', 'course', 'year level', 'what year are you', 'what year are you in', 'college year', 'fourth year', '4th year'],
    answers: ['I’m a fourth-year BS Computer Science student at Adamson University.', 'I’m currently in my fourth year of BS Computer Science at Adamson University.'],
  },
  {
    terms: ['certificate', 'certificates', 'certification', 'certifications', 'credential', 'credentials', 'qualified', 'qualification', 'qualifications'],
    answers: ['My credentials cover networking, databases, analytics, cybersecurity, testing, Agile, and project management.', 'I’ve collected credentials across technical work and product delivery, from databases and networking to cybersecurity, Agile, and project management.'],
  },
  {
    terms: ['hire', 'hiring', 'available', 'availability', 'internship', 'intern', 'collaborate', 'collaboration', 'opportunity', 'opportunities', 'contact', 'reach you'],
    answers: [
      'I’m open to internships and thoughtful collaborations where I can build, learn, and contribute to real products.',
      'Yes, I’m open to internships and collaborations. If the work involves learning fast and making something useful, I’d like to hear about it.',
    ],
    action: 'contact',
  },
  {
    terms: ['what is your email', 'what s your email', 'whats your email', 'your email', 'email address', 'contact details', 'contact you', 'message you', 'send you a message'],
    answers: ['Email is the quickest way to reach me.', 'You can reach me by email, or use LinkedIn if that is more convenient.'],
    action: 'contact',
  },
  {
    terms: ['what is your github', 'what s your github', 'whats your github', 'your github', 'github profile', 'github account', 'source code'],
    answers: ['My public work lives on GitHub under @keynowawa.', 'You can find me on GitHub as @keynowawa.'],
    action: 'github',
  },
  {
    terms: ['what is your linkedin', 'what s your linkedin', 'whats your linkedin', 'your linkedin', 'linkedin profile', 'linkedin account'],
    answers: ['Yes, I’m on LinkedIn. My profile has the professional version of the story.', 'You can find my experience and updates on LinkedIn.'],
    action: 'linkedin',
  },
  {
    terms: ['why hire', 'why should we hire', 'strength', 'strengths', 'offer', 'bring to the team', 'good fit'],
    answers: [
      'I bring hands-on full-stack building, calm team leadership, and the habit of following a problem until the details actually work.',
      'I can move between the product question, the technical details, and the people involved. I also care about finishing the thing, not just starting it.',
    ],
  },
  {
    terms: ['goal', 'goals', 'future', 'dream job', 'career', 'next'],
    answers: [
      'I want to keep getting better at building full-stack products around data, privacy, and problems that matter to real people.',
      'The goal is to join a team where I can learn quickly, take real ownership, and help ship products people actually want to use.',
    ],
  },
  {
    terms: ['resume', 'cv', 'download', 'timeline'],
    answers: ['My resume has the full timeline, leadership work, education, and credentials.', 'The resume is the quickest way to see my education, leadership work, credentials, and full timeline.'],
    action: 'resume',
  },
];

const contactFallbacks = [
  'I haven’t added that answer yet. Ask me directly and I’ll tell you.',
  'That is a good one. Ask me directly and I’ll give you the real answer.',
  'You found something I haven’t covered here yet. Send me a message and ask me yourself.',
  'I would rather answer that myself than make something up. Ask me directly.',
  'That answer is still missing from this little version of me. Ask the actual me and I’ll reply.',
  'Fair question. I haven’t taught this page that answer yet, so ask me directly.',
];

const variationState = new Map();

function questionHash(value) {
  return [...value].reduce((total, character) => ((total * 31) + character.charCodeAt(0)) >>> 0, 7);
}

function chooseVariation(value, question, intentKey) {
  if (!Array.isArray(value)) return value;
  const key = `${intentKey}:${question}`;
  const turn = variationState.get(key) ?? 0;
  variationState.set(key, turn + 1);
  return value[(questionHash(question) + turn) % value.length];
}

function normalizeQuestion(question) {
  return question
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\burself\b/g, 'yourself')
    .replace(/\bur\b/g, 'your')
    .replace(/\bu\b/g, 'you')
    .trim();
}

function containsPhrase(question, phrase) {
  const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|\\s)${escaped}(?=\\s|$)`).test(question);
}

export function findPersonalAnswer(question) {
  const normalized = normalizeQuestion(question);
  const words = new Set(normalized.split(' '));

  const ranked = answerIntents
    .map((intent, index) => ({
      ...intent,
      index,
      score: intent.terms.reduce((total, term) => {
        if (term.includes(' ')) return total + (containsPhrase(normalized, term) ? 5 : 0);
        if (words.has(term)) return total + 3;
        if (term.length > 5 && [...words].some((word) => word.startsWith(term.slice(0, -1)))) return total + 1;
        return total;
      }, 0),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index);

  if (!ranked[0]) {
    return {
      text: chooseVariation(contactFallbacks, normalized, 'fallback'),
      action: 'contact',
    };
  }

  return {
    ...ranked[0],
    text: chooseVariation(ranked[0].answers, normalized, ranked[0].index),
  };
}
