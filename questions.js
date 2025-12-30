// questions.js

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What core subjects or topics excite you the most?",
    type: "multi-select",
    max_options: 3,
    options: [
      { text: "Technology, Coding & AI", weights: { domain: ["Technology"], interests: ["coding", "computers", "ai", "software"] } },
      { text: "Medicine, Biology & Health", weights: { domain: ["Healthcare", "Science"], interests: ["biology", "medicine", "health", "anatomy"] } },
      { text: "Art, Design & Creativity", weights: { domain: ["Arts & Design", "Media & Marketing"], interests: ["art", "design", "creative", "visuals"] } },
      { text: "Business, Money & Finance", weights: { domain: ["Business", "Finance", "Sales", "Management"], interests: ["money", "business", "sales", "finance"] } },
      { text: "Law, Politics & Society", weights: { domain: ["Legal", "Government", "Social Service"], interests: ["law", "justice", "politics", "society"] } },
      { text: "Engineering & Mechanics", weights: { domain: ["Engineering", "Skilled Trade", "Transportation"], interests: ["mechanics", "machines", "physics", "building"] } }
    ]
  },
  {
    id: 2,
    question: "Which work environment do you prefer?",
    type: "multi-select",
    max_options: 2,
    options: [
      { text: "Corporate Office / Desk Job", weights: { work_style: ["office_based", "sedentary", "corporate"] } },
      { text: "Remote / Work from Home", weights: { work_style: ["remote_friendly", "home_office"] } },
      { text: "Outdoors / Field Work", weights: { work_style: ["field_work", "outdoor", "nature_based"] } },
      { text: "Laboratory / Clinic / Hospital", weights: { work_style: ["lab_based", "clinic_based", "hospital", "sterile"] } },
      { text: "Factory / Construction Site / Workshop", weights: { work_style: ["factory", "workshop", "construction_site", "industrial"] } },
      { text: "Traveling / On the Move", weights: { work_style: ["travel_heavy", "travel", "mobile"] } }
    ]
  },
  {
    id: 3,
    question: "How do you prefer to solve problems?",
    type: "multi-select",
    max_options: 2,
    options: [
      { text: "Using Logic, Data & Math", weights: { personality: ["analytical", "logical", "objective", "mathematical"], interests: ["math", "data", "statistics"] } },
      { text: "Using Creativity & Imagination", weights: { personality: ["creative", "imaginative", "visionary", "artistic"] } },
      { text: "By Communicating & Negotiating", weights: { personality: ["persuasive", "communicative", "diplomatic", "social"] } },
      { text: "By Fixing Things with My Hands", weights: { personality: ["practical", "tactile", "hands_on"], interests: ["fixing_things"] } },
      { text: "By Helping & Caring for Others", weights: { personality: ["empathetic", "patient", "caring", "supportive"] } },
      { text: "By Leading & Strategizing", weights: { personality: ["leader", "decisive", "strategic", "ambitious"] } }
    ]
  },
  {
    id: 4,
    question: "What is your preferred social interaction level?",
    type: "single-select", 
    max_options: 1,
    options: [
      { text: "I prefer working alone (Independent)", weights: { personality: ["introverted", "independent", "solitary"], work_style: ["independent", "solitary"] } },
      { text: "Small, tight-knit team collaboration", weights: { work_style: ["collaborative", "team_based"] } },
      { text: "High social interaction / Public facing", weights: { personality: ["extroverted", "social"], work_style: ["public_facing", "client_facing", "social"] } },
      { text: "I want to lead and manage people", weights: { personality: ["leader", "authoritative"], work_style: ["management", "leadership"] } }
    ]
  },
  {
    id: 5,
    question: "What is your educational goal or current status?",
    type: "single-select", 
    max_options: 1,
    options: [
      { text: "Vocational / Diploma / Skill-based (Quick entry)", weights: { education_level: ["diploma", "certificate", "license", "certification", "specialized", "none"] } },
      { text: "Bachelor's Degree (3-4 years)", weights: { education_level: ["bachelors", "license", "certification"] } },
      { text: "Master's / Specialized Degree", weights: { education_level: ["masters", "specialized"] } },
      { text: "Doctorate / PhD / Medical Specialist (Long study)", weights: { education_level: ["doctorate", "expert"] } }
    ]
  },
  {
    id: 6,
    question: "What motivates you the most?",
    type: "multi-select",
    max_options: 2,
    options: [
      { text: "High Earning Potential / Wealth", weights: { tags: ["High Pay", "Lucrative", "Wealth"] } },
      { text: "Job Stability & Security", weights: { tags: ["Stable", "Government", "Essential"] } },
      { text: "Helping Society / Social Impact", weights: { tags: ["Social Impact", "Helping People", "NGO", "Justice"] } },
      { text: "Innovation & Future Tech", weights: { tags: ["Future", "Tech", "Innovation", "AI"] } },
      { text: "Creativity & Expression", weights: { tags: ["Creative", "Art", "Design"] } },
      { text: "Adventure & Adrenaline", weights: { tags: ["Adventure", "Action", "Travel", "Danger"] } }
    ]
  },
  {
    id: 7,
    question: "Select your preferred physical activity level:",
    type: "single-select",
    max_options: 1,
    options: [
      { text: "Sedentary (Sitting at a desk/computer)", weights: { work_style: ["sedentary", "screen_heavy", "computer_based"] } },
      { text: "Lightly Active (Standing/Walking/Mixed)", weights: { work_style: ["active", "standing", "clinic", "classroom"] } },
      { text: "Physically Demanding (Lifting/Labor/Athletic)", weights: { work_style: ["physical", "heavy_labor", "athletic", "outdoor"] } }
    ]
  },
  {
    id: 8,
    question: "Are there specific fields you want to AVOID? (Deal Breakers)",
    type: "multi-select",
    max_options: 4,
    optional: true, // FIX: Added optional flag to prevent blocking users
    options: [
      { text: "I hate Math/Statistics", weights: { deal_breaker_avoid: ["math", "statistics", "numbers", "finance"] } },
      { text: "I can't stand Blood/Medical procedures", weights: { deal_breaker_avoid: ["blood", "surgery", "medical", "needles"] } },
      { text: "I don't want to do Coding/Programming", weights: { deal_breaker_avoid: ["coding", "programming", "software"] } },
      { text: "I dislike Sales/Cold Calling", weights: { deal_breaker_avoid: ["sales", "commission", "cold_calling"] } },
      { text: "I don't want Physical Labor", weights: { deal_breaker_avoid: ["physical_labor", "heavy_lifting", "manual_labor"] } },
      { text: "I hate Public Speaking", weights: { deal_breaker_avoid: ["public_speaking", "teaching", "performing"] } }
    ]
  },
  {
    id: 9,
    question: "Which Indian career paths appeal to you specifically?",
    type: "multi-select",
    max_options: 2,
    options: [
      { text: "Government Service (UPSC/SSC/Railways)", weights: { tags: ["Government", "Prestige", "Stable"], domain: ["Government"] } },
      { text: "Corporate / MNC Jobs", weights: { tags: ["Corporate", "Business", "Tech"] } },
      { text: "Startup / Entrepreneurship", weights: { tags: ["Startup", "Entrepreneur", "High Risk"] } },
      { text: "Creative Arts / Entertainment", weights: { tags: ["Creative", "Media", "Arts"] } },
      { text: "Medical / Healthcare", weights: { domain: ["Healthcare"] } },
      { text: "Defence / Uniformed Services", weights: { domain: ["Defense", "Public Service"] } }
    ]
  },
  {
    id: 10,
    question: "Pick a 'Superpower' skill you want to use daily:",
    type: "single-select",
    max_options: 1,
    options: [
      { text: "Building/Making things", weights: { interests: ["building", "craft", "mechanics"] } },
      { text: "Solving Puzzles/Mysteries", weights: { interests: ["puzzles", "investigation", "research"] } },
      { text: "Influencing/Persuading People", weights: { interests: ["negotiation", "sales", "leadership"] } },
      { text: "Organizing/Planning", weights: { interests: ["planning", "organizing", "logistics"] } },
      { text: "Teaching/Explaining", weights: { interests: ["teaching", "mentoring", "explaining"] } },
      { text: "Analyzing Data", weights: { interests: ["data", "analysis", "patterns"] } }
    ]
  }
];