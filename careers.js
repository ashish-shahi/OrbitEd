const CAREERS_DATA = [
  {
    "id": "tech_backend_engineer",
    "title": "Backend Software Engineer",
    "domain": "Technology",
    "slug": "backend-software-engineer",
    "match_profile": {
      "interests": ["coding", "systems_architecture", "logic", "problem_solving"],
      "personality": ["analytical", "introverted", "detail_oriented", "curious"],
      "work_style": ["sedentary", "remote_friendly", "independent", "screen_heavy"],
      "deal_breakers": ["manual_labor", "customer_service", "sales_pressure"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Computer Science",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 3000000,
      "display_range": "₹8L - ₹30L per year",
      "pay_structure": "Salary + Stocks"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Critical for cloud computing and AI infrastructure."
    },
    "content": {
      "short_desc": "Architects server-side logic and databases for web applications.",
      "long_desc": "Backend Engineers build the engine under the hood of web applications. You design APIs, manage databases, and ensure server security. It requires strong logical thinking and attention to system architecture.",
      "day_in_life": ["Design database schemas", "Write API endpoints in Python/Go", "Optimize server response times"],
      "tags": ["High Pay", "Tech", "Remote"]
    },
    "meta": {
      "popularity_rank": 15,
      "search_keywords": ["server", "database", "api", "programmer", "python"],
      "related_career_ids": ["tech_frontend_engineer", "tech_devops"]
    }
  },
  {
    "id": "tech_frontend_engineer",
    "title": "Frontend Software Engineer",
    "domain": "Technology",
    "slug": "frontend-software-engineer",
    "match_profile": {
      "interests": ["coding", "design", "user_experience", "visuals"],
      "personality": ["creative", "detail_oriented", "empathetic", "visual"],
      "work_style": ["sedentary", "remote_friendly", "collaborative", "screen_heavy"],
      "deal_breakers": ["manual_labor", "dirty_environment", "pure_math"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Computer Science or Bootcamp",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2500000,
      "display_range": "₹6L - ₹25L per year",
      "pay_structure": "Salary + Stocks"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Shift towards AI-assisted coding; focus on complex UI/UX logic."
    },
    "content": {
      "short_desc": "Builds interactive user interfaces for web and mobile apps.",
      "long_desc": "Frontend Engineers bridge the gap between design and technology. You use React, Vue, or Angular to create responsive, accessible, and beautiful interfaces that users interact with directly.",
      "day_in_life": ["Convert Figma designs to code", "Debug UI issues", "Optimize page load speed"],
      "tags": ["Tech", "Creative", "Remote"]
    },
    "meta": {
      "popularity_rank": 12,
      "search_keywords": ["react", "javascript", "web_design", "ui"],
      "related_career_ids": ["tech_backend_engineer", "creative_ui_ux_designer"]
    }
  },
  {
    "id": "tech_data_scientist",
    "title": "Data Scientist",
    "domain": "Technology",
    "slug": "data-scientist",
    "match_profile": {
      "interests": ["math", "statistics", "patterns", "coding"],
      "personality": ["analytical", "inquisitive", "logical", "skeptical"],
      "work_style": ["sedentary", "remote_friendly", "intellectual", "research_oriented"],
      "deal_breakers": ["sales", "subjectivity", "emotional_labor"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Data Science, Stats, or CS",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 3500000,
      "display_range": "₹10L - ₹35L per year",
      "pay_structure": "Salary + Performance Bonus"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Low",
      "future_trend": "Central role in the AI revolution; demand outstrips supply."
    },
    "content": {
      "short_desc": "Extracts insights from complex data using machine learning.",
      "long_desc": "Data Scientists combine mathematics, statistics, and programming to analyze large datasets. You build machine learning models to predict trends, automate decisions, or classify information.",
      "day_in_life": ["Clean and preprocess data", "Train ML models in Python", "Visualize results for stakeholders"],
      "tags": ["AI", "Data", "High Pay"]
    },
    "meta": {
      "popularity_rank": 3,
      "search_keywords": ["ai", "machine_learning", "analytics", "statistics"],
      "related_career_ids": ["tech_data_engineer", "tech_ai_researcher"]
    }
  },
  {
    "id": "tech_devops_engineer",
    "title": "DevOps Engineer",
    "domain": "Technology",
    "slug": "devops-engineer",
    "match_profile": {
      "interests": ["automation", "infrastructure", "efficiency", "coding"],
      "personality": ["reliable", "systematic", "calm_under_pressure", "problem_solver"],
      "work_style": ["sedentary", "remote_friendly", "on_call", "screen_heavy"],
      "deal_breakers": ["manual_labor", "public_speaking", "creative_writing"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Computer Science",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1200000,
      "max": 4000000,
      "display_range": "₹12L - ₹40L per year",
      "pay_structure": "Salary + Stocks"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Essential for maintaining scalable cloud infrastructure."
    },
    "content": {
      "short_desc": "Automates software delivery and manages cloud infrastructure.",
      "long_desc": "DevOps Engineers bridge the gap between development and operations. You use tools like Docker, Kubernetes, and AWS to ensure software runs smoothly, securely, and scales automatically.",
      "day_in_life": ["Configure CI/CD pipelines", "Monitor server health", "Automate cloud resource allocation"],
      "tags": ["Cloud", "High Pay", "Tech"]
    },
    "meta": {
      "popularity_rank": 8,
      "search_keywords": ["cloud", "aws", "kubernetes", "sysadmin"],
      "related_career_ids": ["tech_backend_engineer", "tech_cloud_architect"]
    }
  },
  {
    "id": "tech_product_manager",
    "title": "Product Manager",
    "domain": "Technology",
    "slug": "product-manager",
    "match_profile": {
      "interests": ["strategy", "user_psychology", "business", "technology"],
      "personality": ["leader", "empathetic", "decisive", "communicative"],
      "work_style": ["hybrid", "meeting_heavy", "collaborative", "high_responsibility"],
      "deal_breakers": ["isolation", "pure_coding", "repetitive_tasks"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS or MBA",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1500000,
      "max": 4500000,
      "display_range": "₹15L - ₹45L per year",
      "pay_structure": "Salary + Stocks"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Increasingly data-driven; requires understanding of AI capabilities."
    },
    "content": {
      "short_desc": "Guides the success of a product and leads cross-functional teams.",
      "long_desc": "Product Managers sit at the intersection of tech, business, and UX. You decide what features to build and why, influencing teams without direct authority to deliver products customers love.",
      "day_in_life": ["Prioritize feature backlog", "Interview users", "Coordinate with engineering and design"],
      "tags": ["Leadership", "Business", "Tech"]
    },
    "meta": {
      "popularity_rank": 5,
      "search_keywords": ["strategy", "management", "startup", "roadmap"],
      "related_career_ids": ["business_marketing_manager", "tech_engineering_manager"]
    }
  },
  {
    "id": "health_general_surgeon",
    "title": "General Surgeon",
    "domain": "Healthcare",
    "slug": "general-surgeon",
    "match_profile": {
      "interests": ["anatomy", "healing", "precision", "biology"],
      "personality": ["confident", "decisive", "resilient", "practical"],
      "work_style": ["on_site", "high_pressure", "irregular_hours", "sterile"],
      "deal_breakers": ["remote_work", "sedentary", "low_stakes"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "MBBS + MS (Surgery)",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1800000,
      "max": 6000000,
      "display_range": "₹18L - ₹60L+ per year",
      "pay_structure": "Salary + Private Practice"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Robotic-assisted surgery is becoming standard, but human skill remains vital."
    },
    "content": {
      "short_desc": "Performs operations to treat injuries, diseases, and deformities.",
      "long_desc": "Surgeons operate on patients to repair injuries or treat diseases. It is a high-stakes role requiring steady hands, immense knowledge, and the ability to make life-saving decisions instantly.",
      "day_in_life": ["Perform surgeries", "Conduct patient rounds", "Consult on complex cases"],
      "tags": ["High Status", "Medical", "High Impact"]
    },
    "meta": {
      "popularity_rank": 20,
      "search_keywords": ["doctor", "operation", "hospital", "medical"],
      "related_career_ids": ["health_physician", "health_anesthesiologist"]
    }
  },
  {
    "id": "health_registered_nurse",
    "title": "Registered Nurse",
    "domain": "Healthcare",
    "slug": "registered-nurse",
    "match_profile": {
      "interests": ["caregiving", "biology", "people", "medicine"],
      "personality": ["empathetic", "patient", "hardworking", "observant"],
      "work_style": ["on_site", "shift_work", "physical_stamina", "team_based"],
      "deal_breakers": ["desk_job", "isolation", "wealth_focus"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "B.Sc Nursing",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 900000,
      "display_range": "₹3L - ₹9L per year",
      "pay_structure": "Salary + Overtime"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Very Low",
      "future_trend": "Global shortage ensures high job security and international opportunities."
    },
    "content": {
      "short_desc": "Provides patient care and support in hospitals and clinics.",
      "long_desc": "Nurses are the heart of healthcare. You administer medication, monitor patient health, and offer emotional support. It is physically demanding but offers immense job satisfaction and stability.",
      "day_in_life": ["Monitor patient vitals", "Administer medications", "Assist doctors in procedures"],
      "tags": ["Essential", "Healthcare", "People"]
    },
    "meta": {
      "popularity_rank": 2,
      "search_keywords": ["hospital", "care", "medical", "nursing"],
      "related_career_ids": ["health_physician", "health_paramedic"]
    }
  },
  {
    "id": "health_pharmacist",
    "title": "Pharmacist",
    "domain": "Healthcare",
    "slug": "pharmacist",
    "match_profile": {
      "interests": ["chemistry", "medicine", "helping_people", "accuracy"],
      "personality": ["responsible", "detail_oriented", "ethical", "organized"],
      "work_style": ["on_site", "customer_facing", "structured", "indoor"],
      "deal_breakers": ["remote_work", "creative_chaos", "heavy_lifting"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "B.Pharm",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 800000,
      "display_range": "₹2.5L - ₹8L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Shift towards clinical consultancy as dispensing becomes automated."
    },
    "content": {
      "short_desc": "Dispenses medications and advises patients on usage.",
      "long_desc": "Pharmacists ensure patients receive the correct medication and understand how to use it safely. You check for drug interactions and advise on side effects. Accuracy is critical.",
      "day_in_life": ["Verify prescriptions", "Counsel patients", "Manage inventory"],
      "tags": ["Healthcare", "Chemistry", "Stable"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["drugs", "medicine", "chemist", "pharmacy"],
      "related_career_ids": ["health_medical_researcher", "science_biotechnologist"]
    }
  },
  {
    "id": "finance_investment_banker",
    "title": "Investment Banker",
    "domain": "Finance",
    "slug": "investment-banker",
    "match_profile": {
      "interests": ["money", "markets", "deal_making", "analysis"],
      "personality": ["ambitious", "competitive", "resilient", "high_energy"],
      "work_style": ["high_pressure", "long_hours", "corporate_office", "client_facing"],
      "deal_breakers": ["low_pay", "work_life_balance", "slow_pace"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "MBA Finance or CFA",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 1500000,
      "max": 6000000,
      "display_range": "₹15L - ₹60L+ per year",
      "pay_structure": "Salary + High Bonus"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Automation of lower-level analysis; focus shifting to relationship management."
    },
    "content": {
      "short_desc": "Advises corporations on mergers, acquisitions, and raising capital.",
      "long_desc": "Investment Bankers help companies raise money and grow. It involves financial modeling, valuation, and creating pitch decks. Expect 80-hour work weeks but significant financial rewards.",
      "day_in_life": ["Build financial models in Excel", "Prepare client presentations", "Client meetings"],
      "tags": ["High Pay", "Corporate", "Finance"]
    },
    "meta": {
      "popularity_rank": 9,
      "search_keywords": ["wall_street", "stocks", "mergers", "capital"],
      "related_career_ids": ["finance_private_equity", "finance_financial_analyst"]
    }
  },
  {
    "id": "finance_chartered_accountant",
    "title": "Chartered Accountant (CA)",
    "domain": "Finance",
    "slug": "chartered-accountant",
    "match_profile": {
      "interests": ["numbers", "law", "business", "auditing"],
      "personality": ["disciplined", "ethical", "detail_oriented", "logical"],
      "work_style": ["sedentary", "deadline_driven", "office_based", "analytical"],
      "deal_breakers": ["creative_ambiguity", "physical_labor", "instability"]
    },
    "requirements": {
      "education_level": "certification",
      "degree_field": "ICAI Certification",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 700000,
      "max": 2500000,
      "display_range": "₹7L - ₹25L per year",
      "pay_structure": "Salary or Practice Fees"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Routine auditing is automating; advisory and strategic roles are growing."
    },
    "content": {
      "short_desc": "Manages financial records, audits, and taxation for businesses.",
      "long_desc": "CAs are experts in accounting and tax law. You ensure companies comply with regulations and manage their money efficiently. The qualification process is rigorous but ensures high respect and stability.",
      "day_in_life": ["Audit financial statements", "File tax returns", "Advise on financial strategy"],
      "tags": ["Stable", "Finance", "Corporate"]
    },
    "meta": {
      "popularity_rank": 4,
      "search_keywords": ["tax", "audit", "accounts", "money"],
      "related_career_ids": ["finance_financial_analyst", "finance_tax_consultant"]
    }
  },
  {
    "id": "creative_graphic_designer",
    "title": "Graphic Designer",
    "domain": "Arts & Design",
    "slug": "graphic-designer",
    "match_profile": {
      "interests": ["art", "visuals", "technology", "branding"],
      "personality": ["creative", "imaginative", "perceptive", "adaptable"],
      "work_style": ["sedentary", "remote_friendly", "independent", "visual"],
      "deal_breakers": ["math_heavy", "rigid_routine", "ugly_environments"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Design or Fine Arts",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1200000,
      "display_range": "₹3L - ₹12L per year",
      "pay_structure": "Salary or Freelance Rates"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "High",
      "future_trend": "Shift towards art direction and AI-assisted design generation."
    },
    "content": {
      "short_desc": "Creates visual concepts to communicate ideas for brands and media.",
      "long_desc": "Graphic Designers communicate ideas through art. You use tools like Photoshop and Illustrator to design logos, social media posts, and layouts. A strong portfolio is your most valuable asset.",
      "day_in_life": ["Design social media creatives", "Edit photos", "Collaborate with marketing team"],
      "tags": ["Creative", "Design", "Remote"]
    },
    "meta": {
      "popularity_rank": 18,
      "search_keywords": ["artist", "logo", "photoshop", "ui"],
      "related_career_ids": ["creative_ui_ux_designer", "creative_art_director"]
    }
  },
  {
    "id": "creative_ui_ux_designer",
    "title": "UI/UX Designer",
    "domain": "Arts & Design",
    "slug": "ui-ux-designer",
    "match_profile": {
      "interests": ["design", "psychology", "technology", "problem_solving"],
      "personality": ["empathetic", "creative", "logical", "detail_oriented"],
      "work_style": ["sedentary", "remote_friendly", "collaborative", "iterative"],
      "deal_breakers": ["coding_heavy", "manual_labor", "isolation"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Design, HCI, or Bootcamp",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 2000000,
      "display_range": "₹5L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Growing demand for AR/VR interfaces and voice UI design."
    },
    "content": {
      "short_desc": "Designs intuitive and aesthetic digital experiences for users.",
      "long_desc": "UI/UX Designers focus on how an app looks (UI) and feels (UX). You conduct user research, create wireframes in Figma, and ensure digital products are easy and delightful to use.",
      "day_in_life": ["Create wireframes in Figma", "Conduct user testing", "Review designs with developers"],
      "tags": ["Tech", "Design", "High Pay"]
    },
    "meta": {
      "popularity_rank": 10,
      "search_keywords": ["app_design", "web_design", "figma", "user_research"],
      "related_career_ids": ["tech_frontend_engineer", "creative_product_designer"]
    }
  },
  {
    "id": "trade_electrician",
    "title": "Electrician",
    "domain": "Skilled Trade",
    "slug": "electrician",
    "match_profile": {
      "interests": ["circuits", "fixing_things", "manual_work", "systems"],
      "personality": ["practical", "cautious", "problem_solver", "independent"],
      "work_style": ["field_work", "hazardous", "physical_labor", "hands_on"],
      "deal_breakers": ["office_cubicle", "abstract_theory", "sedentary"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "ITI / Vocational Training",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 800000,
      "display_range": "₹2.5L - ₹8L per year",
      "pay_structure": "Wage + Gig Work"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Very Low",
      "future_trend": "High demand for green energy installations (solar, EV chargers)."
    },
    "content": {
      "short_desc": "Installs and repairs electrical wiring and systems.",
      "long_desc": "Electricians bring power to buildings. You install wiring, troubleshoot outages, and ensure safety compliance. It is a skilled trade that cannot be outsourced or easily automated.",
      "day_in_life": ["Read blueprints", "Install wiring and outlets", "Test systems for safety"],
      "tags": ["Trade", "Essential", "Hands-on"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["wiring", "power", "technician", "repair"],
      "related_career_ids": ["trade_solar_installer", "trade_hvac_technician"]
    }
  },
  {
    "id": "trade_plumber",
    "title": "Plumber",
    "domain": "Skilled Trade",
    "slug": "plumber",
    "match_profile": {
      "interests": ["mechanics", "fixing_things", "manual_work", "water"],
      "personality": ["practical", "patient", "reliable", "independent"],
      "work_style": ["field_work", "physical_labor", "travel_required", "hands_on"],
      "deal_breakers": ["office_job", "clean_only", "screen_heavy"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "ITI / Vocational Training",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 900000,
      "display_range": "₹2.5L - ₹9L per year",
      "pay_structure": "Wage + Gig Work"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Very Low",
      "future_trend": "Recession-proof career; essential for all construction and maintenance."
    },
    "content": {
      "short_desc": "Installs and repairs piping systems for water and gas.",
      "long_desc": "Plumbers are essential for modern sanitation. You install pipes, fix leaks, and maintain heating systems. It offers high independence and the potential to start your own business.",
      "day_in_life": ["Cut and assemble pipes", "Unclog drains", "Install sinks and toilets"],
      "tags": ["Trade", "Essential", "Hands-on"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["pipes", "repair", "water", "construction"],
      "related_career_ids": ["trade_welder", "trade_pipefitter"]
    }
  },
  {
    "id": "legal_corporate_lawyer",
    "title": "Corporate Lawyer",
    "domain": "Legal",
    "slug": "corporate-lawyer",
    "match_profile": {
      "interests": ["law", "business", "negotiation", "reading"],
      "personality": ["articulate", "analytical", "competitive", "resilient"],
      "work_style": ["office_based", "high_pressure", "long_hours", "intellectual"],
      "deal_breakers": ["manual_labor", "low_pay", "informal_environment"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "LLB / LLM",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2500000,
      "display_range": "₹6L - ₹25L per year",
      "pay_structure": "Salary + Billable Hours"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Routine contract review is automating; high-level strategy remains human."
    },
    "content": {
      "short_desc": "Advises companies on legal rights, contracts, and regulations.",
      "long_desc": "Corporate Lawyers ensure businesses stay on the right side of the law. You draft contracts, handle mergers, and advise on regulations. It involves heavy reading and negotiation.",
      "day_in_life": ["Draft commercial contracts", "Research case law", "Advise clients on compliance"],
      "tags": ["High Pay", "Corporate", "Law"]
    },
    "meta": {
      "popularity_rank": 25,
      "search_keywords": ["attorney", "legal", "contracts", "court"],
      "related_career_ids": ["legal_litigation_lawyer", "business_company_secretary"]
    }
  },
  {
    "id": "edu_university_professor",
    "title": "University Professor",
    "domain": "Education",
    "slug": "university-professor",
    "match_profile": {
      "interests": ["research", "teaching", "learning", "writing"],
      "personality": ["intellectual", "curious", "articulate", "patient"],
      "work_style": ["on_site", "autonomous", "stable", "public_speaking"],
      "deal_breakers": ["corporate_hustle", "sales", "no_intellectual_freedom"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "PhD in Subject",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 3000000,
      "display_range": "₹8L - ₹30L per year",
      "pay_structure": "Salary + Grants"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Online education is expanding reach, but prestige remains with institutions."
    },
    "content": {
      "short_desc": "Teaches advanced subjects and conducts academic research.",
      "long_desc": "Professors shape the minds of adults and push the boundaries of knowledge through research. You lecture students, grade papers, and publish findings in journals. Tenure offers high job security.",
      "day_in_life": ["Deliver lectures", "Supervise student research", "Write grant proposals"],
      "tags": ["Prestige", "Education", "Research"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["college", "teacher", "researcher", "academic"],
      "related_career_ids": ["science_scientist", "edu_school_teacher"]
    }
  },
  {
    "id": "sales_b2b_sales_manager",
    "title": "B2B Sales Manager",
    "domain": "Business",
    "slug": "b2b-sales-manager",
    "match_profile": {
      "interests": ["selling", "people", "money", "negotiation"],
      "personality": ["extroverted", "persuasive", "resilient", "confident"],
      "work_style": ["travel_heavy", "commission_based", "social", "high_energy"],
      "deal_breakers": ["isolation", "fixed_income_only", "backend_work"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "MBA or Any Degree",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2500000,
      "display_range": "₹6L - ₹25L+ (High Commission)",
      "pay_structure": "Base + Commission"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Transactional sales are automating; consultative selling is growing."
    },
    "content": {
      "short_desc": "Sells products or services to other businesses.",
      "long_desc": "Sales Managers drive company revenue. You identify potential business clients, pitch products, and negotiate contracts. It requires thick skin and the ability to build relationships.",
      "day_in_life": ["Cold calling/emailing leads", "Product demos", "Negotiating contract terms"],
      "tags": ["Business", "Sales", "High Pay"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["selling", "account_manager", "business_development", "revenue"],
      "related_career_ids": ["business_marketing_manager", "finance_real_estate_agent"]
    }
  },
  {
    "id": "mgmt_hr_manager",
    "title": "Human Resources (HR) Manager",
    "domain": "Management",
    "slug": "hr-manager",
    "match_profile": {
      "interests": ["people", "psychology", "culture", "management"],
      "personality": ["empathetic", "diplomatic", "organized", "approachable"],
      "work_style": ["office_based", "social", "administrative", "stable"],
      "deal_breakers": ["pure_numbers", "isolation", "technical_coding"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "MBA in HR",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1800000,
      "display_range": "₹6L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Focus shifting from admin to strategic talent management and culture."
    },
    "content": {
      "short_desc": "Oversees recruitment, employee relations, and company culture.",
      "long_desc": "HR Managers are the bridge between employees and management. You handle hiring, payroll, conflicts, and ensure a positive workplace environment. Soft skills are paramount.",
      "day_in_life": ["Interview candidates", "Resolve employee grievances", "Plan team building events"],
      "tags": ["Corporate", "People", "Management"]
    },
    "meta": {
      "popularity_rank": 25,
      "search_keywords": ["recruitment", "talent", "personnel", "culture"],
      "related_career_ids": ["mgmt_operations_manager", "business_recruiter"]
    }
  },
  {
    "id": "transport_commercial_pilot",
    "title": "Commercial Pilot",
    "domain": "Transportation",
    "slug": "commercial-pilot",
    "match_profile": {
      "interests": ["aviation", "travel", "physics", "machinery"],
      "personality": ["calm", "focused", "responsible", "adventurous"],
      "work_style": ["travel_heavy", "irregular_hours", "technical", "high_stakes"],
      "deal_breakers": ["9_to_5_desk", "staying_home", "low_pay"]
    },
    "requirements": {
      "education_level": "license",
      "degree_field": "CPL (Commercial Pilot License)",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 1500000,
      "max": 6000000,
      "display_range": "₹15L - ₹60L+ per year",
      "pay_structure": "Salary + Flying Allowance"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Severe pilot shortage globally ensuring high wages."
    },
    "content": {
      "short_desc": "Flies aircraft to transport passengers and cargo globally.",
      "long_desc": "Pilots operate complex aircraft systems and navigate the skies. It requires expensive training and perfect health, but offers travel, prestige, and a corner office in the clouds.",
      "day_in_life": ["Pre-flight checks", "Flying aircraft", "Navigating weather systems"],
      "tags": ["High Pay", "Travel", "Prestige"]
    },
    "meta": {
      "popularity_rank": 10,
      "search_keywords": ["plane", "flying", "airline", "captain"],
      "related_career_ids": ["transport_air_traffic_controller", "eng_aerospace_engineer"]
    }
  },
  {
    "id": "science_biotechnologist",
    "title": "Biotechnologist",
    "domain": "Science",
    "slug": "biotechnologist",
    "match_profile": {
      "interests": ["biology", "genetics", "research", "technology"],
      "personality": ["curious", "analytical", "patient", "innovative"],
      "work_style": ["lab_based", "research_oriented", "collaborative", "detail_heavy"],
      "deal_breakers": ["sales", "quick_results", "public_speaking"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "B.Tech / M.Sc Biotechnology",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Booming sector due to CRISPR, vaccines, and sustainable food tech."
    },
    "content": {
      "short_desc": "Uses biology to create products like medicines and biofuels.",
      "long_desc": "Biotechnologists manipulate living organisms to solve problems. You might develop new vaccines, disease-resistant crops, or eco-friendly fuels. It is cutting-edge science with real-world impact.",
      "day_in_life": ["Conduct lab experiments", "Analyze genetic data", "Write research reports"],
      "tags": ["Science", "Research", "Innovation"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["dna", "lab", "genetics", "pharma"],
      "related_career_ids": ["science_microbiologist", "health_pharmacist"]
    }
  },
  {
    "id": "eng_mechanical_engineer",
    "title": "Mechanical Engineer",
    "domain": "Engineering",
    "slug": "mechanical-engineer",
    "match_profile": {
      "interests": ["machines", "physics", "design", "how_things_work"],
      "personality": ["practical", "curious", "logical", "hands_on"],
      "work_style": ["hybrid", "field_work", "technical", "collaborative"],
      "deal_breakers": ["pure_theory", "sedentary_only", "ambiguity"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Mechanical Engineering",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Shift towards robotics, mechatronics, and EV manufacturing."
    },
    "content": {
      "short_desc": "Designs, builds, and maintains mechanical systems and machinery.",
      "long_desc": "Mechanical Engineers design everything from car engines to air conditioning systems. You work with CAD software to design parts and visit factories to oversee manufacturing. It is the broadest engineering discipline.",
      "day_in_life": ["Design parts in SolidWorks", "Test prototypes", " troubleshoot manufacturing issues"],
      "tags": ["Core", "Engineering", "Machines"]
    },
    "meta": {
      "popularity_rank": 12,
      "search_keywords": ["robotics", "automotive", "machines", "cad"],
      "related_career_ids": ["eng_civil_engineer", "eng_robotics_engineer"]
    }
  },
  {
    "id": "govt_ias_officer",
    "title": "IAS Officer / Civil Servant",
    "domain": "Government",
    "slug": "ias-officer",
    "match_profile": {
      "interests": ["public_service", "policy", "leadership", "social_change"],
      "personality": ["authoritative", "diplomatic", "responsible", "resilient"],
      "work_style": ["field_work", "high_power", "transferable", "bureaucratic"],
      "deal_breakers": ["instability", "corporate_profit_focus", "obscurity"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Any Degree (UPSC Exam)",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 700000,
      "max": 2500000,
      "display_range": "₹7L - ₹25L + Housing/Perks",
      "pay_structure": "Govt Salary + Benefits"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Very Low",
      "future_trend": "Permanent demand; role evolving to include digital governance."
    },
    "content": {
      "short_desc": "Administers government policies and manages districts.",
      "long_desc": "Civil Servants run the country's administration. As an IAS officer, you might head a district (Collector) or shape policy in a ministry. It requires cracking one of the world's toughest exams (UPSC) but offers immense power and prestige.",
      "day_in_life": ["Review public welfare schemes", "Handle law and order issues", "Meet with ministers"],
      "tags": ["Prestige", "Power", "Social Impact"]
    },
    "meta": {
      "popularity_rank": 1,
      "search_keywords": ["upsc", "district_collector", "government", "policy"],
      "related_career_ids": ["govt_police_officer", "govt_diplomat"]
    }
  },
  {
    "id": "health_clinical_psychologist",
    "title": "Clinical Psychologist",
    "domain": "Healthcare",
    "slug": "clinical-psychologist",
    "match_profile": {
      "interests": ["psychology", "mental_health", "listening", "human_behavior"],
      "personality": ["empathetic", "patient", "non_judgmental", "insightful"],
      "work_style": ["on_site", "one_on_one", "private", "emotionally_intense"],
      "deal_breakers": ["sales", "numbers_heavy", "impersonal_work"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "M.Phil / PhD in Psychology",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary or Hourly Rates"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Rising mental health awareness is creating massive demand."
    },
    "content": {
      "short_desc": "Diagnoses and treats mental health disorders through therapy.",
      "long_desc": "Psychologists help people navigate life's challenges. You diagnose disorders, provide talk therapy, and develop treatment plans. Unlike psychiatrists, you generally do not prescribe medicine (depending on laws).",
      "day_in_life": ["Conduct therapy sessions", "Write patient notes", "Develop treatment plans"],
      "tags": ["Healthcare", "Empathy", "Mental Health"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["therapy", "counseling", "mind", "doctor"],
      "related_career_ids": ["health_psychiatrist", "edu_counselor"]
    }
  },
  {
    "id": "eng_architect",
    "title": "Architect",
    "domain": "Architecture",
    "slug": "architect",
    "match_profile": {
      "interests": ["design", "buildings", "drawing", "physics"],
      "personality": ["creative", "visual", "detail_oriented", "visionary"],
      "work_style": ["hybrid", "project_based", "visual", "collaborative"],
      "deal_breakers": ["pure_math_without_art", "repetitive_tasks", "isolation"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "B.Arch",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Salary + Commission"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "AI is automating drafting, but creative design and site management remain human."
    },
    "content": {
      "short_desc": "Plans and designs buildings and structures.",
      "long_desc": "Architects blend art and engineering. You design functional spaces that look good and stand up. The job involves sketching, 3D modeling, and visiting muddy construction sites to ensure your vision is built correctly.",
      "day_in_life": ["Create 3D models", "Meet clients for design briefs", "Inspect construction progress"],
      "tags": ["Creative", "Engineering", "Design"]
    },
    "meta": {
      "popularity_rank": 28,
      "search_keywords": ["building", "design", "house", "cad"],
      "related_career_ids": ["eng_civil_engineer", "creative_interior_designer"]
    }
  },
  {
    "id": "media_content_writer",
    "title": "Content Writer",
    "domain": "Media & Marketing",
    "slug": "content-writer",
    "match_profile": {
      "interests": ["writing", "storytelling", "research", "creativity"],
      "personality": ["curious", "articulate", "adaptable", "imaginative"],
      "work_style": ["remote_friendly", "independent", "deadline_driven", "sedentary"],
      "deal_breakers": ["math", "public_speaking", "physical_labor"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "English, Journalism, or Marketing",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 800000,
      "display_range": "₹2.5L - ₹8L per year",
      "pay_structure": "Salary or Freelance"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "High",
      "future_trend": "Role shifting to 'AI Editor'—editing and humanizing AI-generated text."
    },
    "content": {
      "short_desc": "Writes engaging articles, blogs, and copy for the web.",
      "long_desc": "Content Writers create the text you read online. You research diverse topics and write articles that rank on Google (SEO). It offers great flexibility but faces pressure from AI tools.",
      "day_in_life": ["Research article topics", "Write blog posts", "Edit content for SEO"],
      "tags": ["Creative", "Writing", "Remote"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["blog", "copywriter", "freelance", "seo"],
      "related_career_ids": ["media_journalist", "business_marketing_manager"]
    }
  },
  {
    "id": "business_event_planner",
    "title": "Event Planner",
    "domain": "Business",
    "slug": "event-planner",
    "match_profile": {
      "interests": ["organizing", "parties", "decor", "people"],
      "personality": ["extroverted", "organized", "calm_under_pressure", "social"],
      "work_style": ["field_work", "irregular_hours", "high_energy", "travel"],
      "deal_breakers": ["routine_desk_job", "isolation", "silence"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Event Management or Hospitality",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1000000,
      "display_range": "₹3L - ₹10L per year",
      "pay_structure": "Salary or Project Fee"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Strong demand for corporate events and luxury weddings."
    },
    "content": {
      "short_desc": "Organizes weddings, conferences, and corporate events.",
      "long_desc": "Event Planners manage budgets, vendors, and logistics to make events happen. You need to be a master multitasker who can handle last-minute crises without panicking. It is high-stress but high-fun.",
      "day_in_life": ["Coordinate with florists/caterers", "Manage event budgets", "Oversee live event setup"],
      "tags": ["Social", "Creative", "Management"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["wedding", "party", "management", "hospitality"],
      "related_career_ids": ["hospitality_hotel_manager", "business_pr_specialist"]
    }
  },
  {
    "id": "govt_police_officer",
    "title": "Police Officer",
    "domain": "Government",
    "slug": "police-officer",
    "match_profile": {
      "interests": ["law", "fitness", "justice", "community"],
      "personality": ["brave", "disciplined", "authoritative", "alert"],
      "work_style": ["field_work", "hazardous", "shift_work", "team_based"],
      "deal_breakers": ["sedentary_life", "weak_constitution", "anarchy"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Any Degree + Police Exam",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Govt Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Very Low",
      "future_trend": "Increasing need for cyber-crime cells and tech-savvy officers."
    },
    "content": {
      "short_desc": "Maintains law and order and investigates crimes.",
      "long_desc": "Police Officers protect the community. You patrol areas, respond to emergencies, and investigate crimes. It is physically demanding and dangerous, but offers authority and a government pension.",
      "day_in_life": ["Patrol assigned area", "Register FIRs", "Investigate crime scenes"],
      "tags": ["Action", "Government", "Uniform"]
    },
    "meta": {
      "popularity_rank": 20,
      "search_keywords": ["cop", "security", "law", "crime"],
      "related_career_ids": ["govt_ias_officer", "tech_cybersecurity_analyst"]
    }
  },
  {
    "id": "finance_financial_analyst",
    "title": "Financial Analyst",
    "domain": "Finance",
    "slug": "financial-analyst",
    "match_profile": {
      "interests": ["stocks", "spreadsheets", "trends", "economy"],
      "personality": ["analytical", "rational", "focused", "cautious"],
      "work_style": ["sedentary", "data_heavy", "office_based", "independent"],
      "deal_breakers": ["creative_writing", "physical_labor", "guesswork"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Commerce, Economics, or MBA",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary + Bonus"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Basic reporting is automating; focus shifting to strategic interpretation."
    },
    "content": {
      "short_desc": "Analyzes financial data to guide business and investment decisions.",
      "long_desc": "Financial Analysts examine company accounts and market trends to recommend investments. You live in Excel, building models to predict future performance. It is a stepping stone to high finance roles.",
      "day_in_life": ["Update financial models", "Read market reports", "Present findings to management"],
      "tags": ["Finance", "Data", "Corporate"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["stocks", "excel", "money", "investment"],
      "related_career_ids": ["finance_investment_banker", "tech_data_scientist"]
    }
  },
  {
    "id": "hospitality_hotel_manager",
    "title": "Hotel Manager",
    "domain": "Hospitality",
    "slug": "hotel-manager",
    "match_profile": {
      "interests": ["service", "management", "luxury", "people"],
      "personality": ["charming", "organized", "patient", "diplomatic"],
      "work_style": ["on_site", "customer_facing", "24_7_operations", "social"],
      "deal_breakers": ["messiness", "introversion", "holidays_off"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Hotel Management",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Tourism is booming; high demand for managers in boutique luxury hotels."
    },
    "content": {
      "short_desc": "Oversees the daily operations of a hotel or resort.",
      "long_desc": "Hotel Managers ensure guests have a perfect stay. You manage the front desk, housekeeping, and food service teams. You are the face of the hotel and must solve guest complaints with a smile.",
      "day_in_life": ["Inspect rooms for cleanliness", "Review guest feedback", "Coordinate with department heads"],
      "tags": ["Management", "Travel", "Service"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["resort", "tourism", "manager", "hospitality"],
      "related_career_ids": ["hospitality_chef", "business_event_planner"]
    }
  },
  {
    "id": "health_veterinarian",
    "title": "Veterinarian",
    "domain": "Healthcare",
    "slug": "veterinarian",
    "match_profile": {
      "interests": ["animals", "biology", "medicine", "nature"],
      "personality": ["compassionate", "observant", "gentle", "resilient"],
      "work_style": ["clinic_based", "physical", "emotional", "hands_on"],
      "deal_breakers": ["animal_allergies", "clean_clothes_only", "desk_job"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "B.V.Sc & AH",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary or Private Practice"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Pet ownership is skyrocketing, leading to high demand for specialized care."
    },
    "content": {
      "short_desc": "Diagnoses and treats medical issues in animals.",
      "long_desc": "Vets are doctors for animals. You treat pets, livestock, or zoo animals. It requires a deep love for animals and emotional strength, as you must often deal with sick creatures who cannot speak.",
      "day_in_life": ["Perform checkups on pets", "Conduct surgeries", "Advise owners on pet care"],
      "tags": ["Animals", "Medical", "Care"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["dog", "cat", "doctor", "animals"],
      "related_career_ids": ["science_zoologist", "health_general_surgeon"]
    }
  },
  {
    "id": "social_social_worker",
    "title": "Social Worker",
    "domain": "Social Service",
    "slug": "social-worker",
    "match_profile": {
      "interests": ["justice", "helping_people", "community", "sociology"],
      "personality": ["altruistic", "patient", "tough", "empathetic"],
      "work_style": ["field_work", "emotionally_taxing", "people_focused", "low_pay"],
      "deal_breakers": ["luxury", "corporate_greed", "isolation"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "MSW (Master of Social Work)",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 600000,
      "display_range": "₹2.5L - ₹6L per year",
      "pay_structure": "Salary (NGO/Govt)"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Very Low",
      "future_trend": "Persistent need in NGOs and CSR wings of corporations."
    },
    "content": {
      "short_desc": "Supports vulnerable individuals and communities.",
      "long_desc": "Social Workers help people cope with poverty, abuse, or addiction. You connect clients with resources, provide counseling, and advocate for their rights. It is emotionally tough but incredibly meaningful.",
      "day_in_life": ["Visit community centers", "Counsel families", "Coordinate with government agencies"],
      "tags": ["Social Impact", "NGO", "Help"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["ngo", "charity", "help", "community"],
      "related_career_ids": ["health_clinical_psychologist", "edu_counselor"]
    }
  },
  {
    "id": "creative_fashion_designer",
    "title": "Fashion Designer",
    "domain": "Arts & Design",
    "slug": "fashion-designer",
    "match_profile": {
      "interests": ["clothing", "style", "art", "trends"],
      "personality": ["artistic", "trendsetter", "detail_oriented", "visionary"],
      "work_style": ["studio_based", "project_based", "competitive", "tactile"],
      "deal_breakers": ["uniforms", "math", "conservative_environment"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Fashion Design",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1500000,
      "display_range": "₹3L - ₹15L per year",
      "pay_structure": "Salary or Brand Revenue"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Sustainability and digital fashion (NFTs/Skins) are new growth areas."
    },
    "content": {
      "short_desc": "Designs clothing, accessories, and footwear.",
      "long_desc": "Fashion Designers create the clothes we wear. You sketch designs, select fabrics, and oversee production. It is a glamorous but highly competitive industry where only the unique survive.",
      "day_in_life": ["Sketch new designs", "Source fabrics", "Oversee fittings"],
      "tags": ["Creative", "Fashion", "Glamour"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["clothes", "style", "brand", "art"],
      "related_career_ids": ["creative_graphic_designer", "business_marketing_manager"]
    }
  },
  {
    "id": "transport_air_traffic_controller",
    "title": "Air Traffic Controller",
    "domain": "Transportation",
    "slug": "air-traffic-controller",
    "match_profile": {
      "interests": ["aviation", "systems", "order", "radar"],
      "personality": ["alert", "decisive", "calm_under_pressure", "focused"],
      "work_style": ["on_site", "high_stress", "sedentary", "monitoring"],
      "deal_breakers": ["distractions", "slow_pace", "creativity"]
    },
    "requirements": {
      "education_level": "specialized",
      "degree_field": "ATC Training / Science Degree",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 2500000,
      "display_range": "₹8L - ₹25L per year",
      "pay_structure": "Govt/Airport Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "AI assists, but human oversight remains mandatory for safety."
    },
    "content": {
      "short_desc": "Directs aircraft to prevent collisions and minimize delays.",
      "long_desc": "ATCs are the eyes of the sky. You sit in a tower watching radar screens, giving instructions to pilots to ensure safe takeoffs and landings. It is famous for being stressful but pays very well.",
      "day_in_life": ["Monitor radar screens", "Communicate with pilots via radio", "Manage flight paths"],
      "tags": ["Aviation", "High Pay", "High Stress"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["airport", "radar", "planes", "control"],
      "related_career_ids": ["transport_commercial_pilot", "tech_devops_engineer"]
    }
  },
  {
    "id": "tech_cybersecurity_analyst",
    "title": "Cybersecurity Analyst",
    "domain": "Technology",
    "slug": "cybersecurity-analyst",
    "match_profile": {
      "interests": ["hacking", "security", "puzzles", "coding"],
      "personality": ["suspicious", "detail_oriented", "proactive", "curious"],
      "work_style": ["sedentary", "remote_friendly", "high_pressure", "investigative"],
      "deal_breakers": ["naivety", "manual_labor", "public_glory"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS or Cyber Security Certs",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2200000,
      "display_range": "₹6L - ₹22L per year",
      "pay_structure": "Salary + Bounty"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Low",
      "future_trend": "Cyber warfare is increasing; defenders are needed more than ever."
    },
    "content": {
      "short_desc": "Protects computer networks and systems from cyber attacks.",
      "long_desc": "Cybersecurity Analysts are the digital bodyguards of companies. You monitor networks for breaches, perform ethical hacking (penetration testing) to find weaknesses, and respond to attacks.",
      "day_in_life": ["Monitor security logs", "Perform penetration tests", "Patch security vulnerabilities"],
      "tags": ["Tech", "Security", "High Pay"]
    },
    "meta": {
      "popularity_rank": 8,
      "search_keywords": ["hacker", "security", "network", "firewall"],
      "related_career_ids": ["tech_backend_engineer", "govt_police_officer"]
    }
  },
  {
    "id": "health_dentist",
    "title": "Dentist",
    "domain": "Healthcare",
    "slug": "dentist",
    "match_profile": {
      "interests": ["teeth", "health", "mechanics", "aesthetics"],
      "personality": ["precise", "friendly", "steady", "entrepreneurial"],
      "work_style": ["clinic_based", "manual_dexterity", "repetitive", "social"],
      "deal_breakers": ["shaky_hands", "blood_phobia", "remote_work"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "BDS / MDS",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 2000000,
      "display_range": "₹4L - ₹20L+ per year",
      "pay_structure": "Salary or Private Practice"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "High demand for cosmetic dentistry and implants."
    },
    "content": {
      "short_desc": "Diagnoses and treats problems with teeth and gums.",
      "long_desc": "Dentists care for oral health. You fill cavities, perform root canals, and improve smiles. It offers great work-life balance compared to surgeons, with high earning potential in private practice.",
      "day_in_life": ["Perform dental checkups", "Fill cavities", "Perform root canals"],
      "tags": ["Medical", "Stable", "Healthcare"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["teeth", "doctor", "smile", "clinic"],
      "related_career_ids": ["health_general_surgeon", "health_pharmacist"]
    }
  },
  {
    "id": "media_journalist",
    "title": "Broadcast Journalist",
    "domain": "Media & Marketing",
    "slug": "broadcast-journalist",
    "match_profile": {
      "interests": ["news", "investigation", "truth", "storytelling"],
      "personality": ["inquisitive", "brave", "articulate", "persistent"],
      "work_style": ["field_work", "deadline_driven", "public_facing", "unpredictable"],
      "deal_breakers": ["shy", "routine", "corporate_PR"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Journalism or Mass Comm",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1200000,
      "display_range": "₹3L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Medium",
      "future_trend": "Traditional TV declining; independent digital journalism growing."
    },
    "content": {
      "short_desc": "Investigates and reports news stories for TV or digital media.",
      "long_desc": "Journalists find the truth and tell it to the world. You interview sources, verify facts, and present stories on camera or in print. It requires a nose for news and ethics.",
      "day_in_life": ["Chase leads and sources", "Conduct interviews", "Present news on camera"],
      "tags": ["Media", "Public", "News"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["news", "reporter", "tv", "media"],
      "related_career_ids": ["media_content_writer", "legal_corporate_lawyer"]
    }
  },
  {
    "id": "science_agricultural_scientist",
    "title": "Agricultural Scientist",
    "domain": "Science",
    "slug": "agricultural-scientist",
    "match_profile": {
      "interests": ["farming", "plants", "nature", "science"],
      "personality": ["patient", "observant", "analytical", "nature_lover"],
      "work_style": ["hybrid", "field_work", "research", "slow_paced"],
      "deal_breakers": ["city_only_life", "instant_gratification", "corporate_suit"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "M.Sc Agriculture / Botany",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary (Govt/Private)"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Crucial for food security; vertical farming and GMOs are big trends."
    },
    "content": {
      "short_desc": "Improves farming methods and crop yields.",
      "long_desc": "Agricultural Scientists use biology to feed the world. You research soil health, develop better seeds, and help farmers grow more food sustainably. You work in labs and muddy fields.",
      "day_in_life": ["Test soil samples", "Analyze crop growth", "Advise farmers on techniques"],
      "tags": ["Nature", "Science", "Research"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["farming", "plants", "food", "research"],
      "related_career_ids": ["science_biotechnologist", "health_veterinarian"]
    }
  },
  {
    "id": "govt_army_officer",
    "title": "Army Officer",
    "domain": "Defense",
    "slug": "army-officer",
    "match_profile": {
      "interests": ["defense", "fitness", "leadership", "country"],
      "personality": ["brave", "disciplined", "loyal", "strategic"],
      "work_style": ["field_work", "hazardous", "regimented", "nomadic"],
      "deal_breakers": ["weakness", "comfort_seeking", "questioning_authority"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "NDA / CDS Exam",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 2500000,
      "display_range": "₹8L - ₹25L + Full Benefits",
      "pay_structure": "Govt Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Modern warfare requires tech-savvy leaders, but human command is irreplaceable."
    },
    "content": {
      "short_desc": "Leads soldiers and protects national security.",
      "long_desc": "Army Officers command units in the armed forces. It requires peak physical fitness, strict discipline, and leadership under fire. You serve the nation and live a life of adventure and honor.",
      "day_in_life": ["Lead physical training", "Plan tactical drills", "Inspect unit readiness"],
      "tags": ["Defense", "Leadership", "Honor"]
    },
    "meta": {
      "popularity_rank": 15,
      "search_keywords": ["soldier", "military", "war", "defense"],
      "related_career_ids": ["govt_police_officer", "transport_commercial_pilot"]
    }
  },
  {
    "id": "health_fitness_trainer",
    "title": "Fitness Trainer",
    "domain": "Health & Wellness",
    "slug": "fitness-trainer",
    "match_profile": {
      "interests": ["gym", "nutrition", "coaching", "anatomy"],
      "personality": ["energetic", "motivating", "disciplined", "social"],
      "work_style": ["on_site", "active", "social", "flexible_hours"],
      "deal_breakers": ["sedentary_life", "junk_food", "laziness"]
    },
    "requirements": {
      "education_level": "certification",
      "degree_field": "Fitness Certification (ACE/ISSA)",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1200000,
      "display_range": "₹3L - ₹12L per year",
      "pay_structure": "Salary or Hourly"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Shift towards online coaching and holistic wellness."
    },
    "content": {
      "short_desc": "Guides clients in exercise and nutrition to achieve fitness goals.",
      "long_desc": "Trainers help people get fit. You design workout plans, correct form, and motivate clients to push their limits. You need to look the part and have high energy all day.",
      "day_in_life": ["Lead personal training sessions", "Create diet plans", "Maintain gym equipment"],
      "tags": ["Health", "Active", "Social"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["gym", "workout", "coach", "health"],
      "related_career_ids": ["health_physiotherapist", "edu_primary_teacher"]
    }
  },
  {
    "id": "transport_cabin_crew",
    "title": "Cabin Crew / Flight Attendant",
    "domain": "Transportation",
    "slug": "cabin-crew",
    "match_profile": {
      "interests": ["travel", "service", "safety", "people"],
      "personality": ["charming", "calm", "patient", "groomed"],
      "work_style": ["travel_heavy", "shift_work", "public_facing", "glamorous"],
      "deal_breakers": ["fear_of_flying", "introversion", "homesickness"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "12th Pass + Training",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Salary + Flying Allowance"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Recovery in travel sector creates steady demand."
    },
    "content": {
      "short_desc": "Ensures passenger safety and comfort on flights.",
      "long_desc": "Cabin Crew are the face of an airline. You serve meals, manage safety emergencies, and ensure passengers are happy. You get to see the world, but suffer from jet lag and demanding customers.",
      "day_in_life": ["Conduct safety briefings", "Serve meals in-flight", "Assist passengers"],
      "tags": ["Travel", "Service", "Glamour"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["stewardess", "flight", "travel", "airline"],
      "related_career_ids": ["hospitality_hotel_manager", "business_event_planner"]
    }
  },
  {
    "id": "eng_civil_engineer",
    "title": "Civil Engineer",
    "domain": "Engineering",
    "slug": "civil-engineer",
    "match_profile": {
      "interests": ["construction", "physics", "infrastructure", "math"],
      "personality": ["practical", "responsible", "collaborative", "detail_oriented"],
      "work_style": ["hybrid", "field_work", "project_based", "team_based"],
      "deal_breakers": ["pure_sedentary", "abstract_art", "sales_pressure"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Civil Engineering",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Focus shifting to sustainable and green infrastructure."
    },
    "content": {
      "short_desc": "Designs and supervises infrastructure projects like roads and bridges.",
      "long_desc": "Civil Engineers plan and oversee construction. You split time between the office (CAD design) and the field (site inspection). Math and physics are used daily to ensure structural integrity and safety.",
      "day_in_life": ["Design blueprints in AutoCAD", "Visit construction sites", "Meet with project managers"],
      "tags": ["Engineering", "Core", "Construction"]
    },
    "meta": {
      "popularity_rank": 22,
      "search_keywords": ["building", "roads", "construction", "site_engineer"],
      "related_career_ids": ["eng_mechanical_engineer", "eng_architect"]
    }
  },
  {
    "id": "hospitality_head_chef",
    "title": "Head Chef",
    "domain": "Hospitality",
    "slug": "head-chef",
    "match_profile": {
      "interests": ["cooking", "food", "creativity", "leadership"],
      "personality": ["creative", "authoritative", "passionate", "sensory"],
      "work_style": ["on_site", "high_pressure", "shift_work", "physical_labor"],
      "deal_breakers": ["desk_job", "9_to_5_routine", "slow_pace"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Culinary Arts",
      "certification_required": false,
      "experience_level": "mid_to_expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1800000,
      "display_range": "₹5L - ₹18L per year",
      "pay_structure": "Salary + Service Charge"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Growth in luxury dining and specialized health-focused diets."
    },
    "content": {
      "short_desc": "Leads a kitchen team and creates culinary menus.",
      "long_desc": "Chefs oversee food preparation, menu planning, and kitchen staff. It is a high-pressure, creative environment requiring long hours on your feet, strict hygiene standards, and team leadership.",
      "day_in_life": ["Plan daily specials", "Supervise food prep", "Manage kitchen staff during service"],
      "tags": ["Creative", "Hands-on", "Leadership"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["cooking", "restaurant", "food", "kitchen"],
      "related_career_ids": ["hospitality_hotel_manager", "business_event_planner"]
    }
  },
  {
    "id": "edu_primary_teacher",
    "title": "Primary School Teacher",
    "domain": "Education",
    "slug": "primary-school-teacher",
    "match_profile": {
      "interests": ["teaching", "children", "mentoring", "social_impact"],
      "personality": ["patient", "empathetic", "organized", "nurturing"],
      "work_style": ["on_site", "routine_hours", "social_interaction", "structured"],
      "deal_breakers": ["corporate_politics", "high_risk", "isolation"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "B.Ed / Elementary Education",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Fixed Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Increasing focus on emotional intelligence and personalized learning."
    },
    "content": {
      "short_desc": "Educates young children and aids in their social development.",
      "long_desc": "Teachers prepare lesson plans, grade assignments, and manage classrooms. You shape the future of students by imparting foundational knowledge. Holidays are a perk, but extreme patience is mandatory.",
      "day_in_life": ["Conduct classroom lessons", "Grade homework", "Parent-teacher meetings"],
      "tags": ["Social Impact", "Stable", "Education"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["school", "kids", "education", "teaching"],
      "related_career_ids": ["edu_university_professor", "social_social_worker"]
    }
  },
  {
    "id": "business_digital_marketing_manager",
    "title": "Digital Marketing Manager",
    "domain": "Business",
    "slug": "digital-marketing-manager",
    "match_profile": {
      "interests": ["strategy", "social_media", "analytics", "trends"],
      "personality": ["persuasive", "creative", "social", "adaptable"],
      "work_style": ["office_or_hybrid", "collaborative", "dynamic", "screen_heavy"],
      "deal_breakers": ["isolation", "rigid_rules", "manual_labor"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Marketing or Business",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary + Performance Bonus"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Heavy reliance on AI tools for content generation and ad optimization."
    },
    "content": {
      "short_desc": "Plans and executes online strategies to promote brands.",
      "long_desc": "Marketing Managers analyze market trends and run campaigns to increase sales. The role blends creativity with data analysis. Success is measured by campaign ROI and brand visibility.",
      "day_in_life": ["Review ad campaign performance", "Brainstorm content strategy", "Coordinate with creative team"],
      "tags": ["Business", "Creative", "Growth"]
    },
    "meta": {
      "popularity_rank": 18,
      "search_keywords": ["ads", "social_media", "brand", "sales"],
      "related_career_ids": ["tech_product_manager", "media_content_writer"]
    }
  },
  {
    "id": "eng_aerospace_engineer",
    "title": "Aerospace Engineer",
    "domain": "Engineering",
    "slug": "aerospace-engineer",
    "match_profile": {
      "interests": ["aviation", "space", "physics", "design"],
      "personality": ["intellectual", "detail_oriented", "logical", "innovative"],
      "work_style": ["hybrid", "technical", "high_stakes", "research_oriented"],
      "deal_breakers": ["low_tech", "ambiguity", "customer_service"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Aerospace Engineering",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2500000,
      "display_range": "₹6L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Private space sector (SpaceX, etc.) driving massive innovation."
    },
    "content": {
      "short_desc": "Designs aircraft, spacecraft, and satellites.",
      "long_desc": "Aerospace Engineers develop flight technology. You work on aerodynamics, propulsion, and avionics. It is a high-tech field requiring advanced physics and math, often working for defense or space agencies.",
      "day_in_life": ["Simulate flight dynamics", "Test engine components", "Analyze wind tunnel data"],
      "tags": ["Space", "Engineering", "High Tech"]
    },
    "meta": {
      "popularity_rank": 21,
      "search_keywords": ["rocket", "plane", "nasa", "isro"],
      "related_career_ids": ["eng_mechanical_engineer", "transport_commercial_pilot"]
    }
  },
  {
    "id": "eng_biomedical_engineer",
    "title": "Biomedical Engineer",
    "domain": "Engineering",
    "slug": "biomedical-engineer",
    "match_profile": {
      "interests": ["medicine", "technology", "helping_people", "biology"],
      "personality": ["innovative", "empathetic", "analytical", "problem_solver"],
      "work_style": ["lab_based", "research_oriented", "collaborative", "technical"],
      "deal_breakers": ["sales", "pure_coding", "routine_maintenance"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Biomedical Engineering",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1800000,
      "display_range": "₹5L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Aging populations increasing demand for prosthetics and medical devices."
    },
    "content": {
      "short_desc": "Designs medical equipment, prosthetics, and health devices.",
      "long_desc": "Biomedical Engineers combine engineering with biology to create pacemakers, artificial limbs, and imaging machines. You work in R&D labs or hospitals, bridging the gap between technical design and patient care.",
      "day_in_life": ["Design medical device prototypes", "Conduct safety testing", "Collaborate with doctors"],
      "tags": ["Health", "Engineering", "Innovation"]
    },
    "meta": {
      "popularity_rank": 54,
      "search_keywords": ["medical", "prosthetics", "device", "health_tech"],
      "related_career_ids": ["science_biotechnologist", "tech_data_scientist"]
    }
  },
  {
    "id": "science_marine_biologist",
    "title": "Marine Biologist",
    "domain": "Science",
    "slug": "marine-biologist",
    "match_profile": {
      "interests": ["ocean", "animals", "conservation", "diving"],
      "personality": ["adventurous", "observant", "patient", "passionate"],
      "work_style": ["field_work", "outdoor", "research_oriented", "physical"],
      "deal_breakers": ["office_cubicle", "city_life", "dry_environments"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Marine Biology",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary or Grants"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Critical for climate change research and ocean conservation."
    },
    "content": {
      "short_desc": "Studies ocean life and marine ecosystems.",
      "long_desc": "Marine Biologists research sea creatures and ocean health. You spend time on boats, diving, and in labs. It is a niche scientific field requiring a deep passion for the sea and willingness to travel.",
      "day_in_life": ["Collect water samples", "Observe marine life behavior", "Analyze data in lab"],
      "tags": ["Nature", "Science", "Ocean"]
    },
    "meta": {
      "popularity_rank": 89,
      "search_keywords": ["fish", "sea", "ocean", "research"],
      "related_career_ids": ["science_agricultural_scientist", "health_veterinarian"]
    }
  },
  {
    "id": "health_physiotherapist",
    "title": "Physiotherapist",
    "domain": "Healthcare",
    "slug": "physiotherapist",
    "match_profile": {
      "interests": ["anatomy", "fitness", "healing", "helping_people"],
      "personality": ["encouraging", "patient", "energetic", "hands_on"],
      "work_style": ["on_site", "physical", "social", "active"],
      "deal_breakers": ["sedentary", "remote_work", "coding"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "BPT (Bachelor of Physiotherapy)",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1000000,
      "display_range": "₹3L - ₹10L per year",
      "pay_structure": "Salary or Consultation Fees"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "High demand due to sports injuries and aging population rehab."
    },
    "content": {
      "short_desc": "Helps patients recover movement and manage pain through exercise.",
      "long_desc": "Physiotherapists use exercise, massage, and technology to treat injuries. You work with athletes, the elderly, or accident victims. It is a physical job requiring deep anatomical knowledge.",
      "day_in_life": ["Assess patient mobility", "Demonstrate exercises", "Perform manual therapy"],
      "tags": ["Healthcare", "Active", "Rehab"]
    },
    "meta": {
      "popularity_rank": 64,
      "search_keywords": ["rehab", "sports", "muscle", "therapy"],
      "related_career_ids": ["health_fitness_trainer", "health_occupational_therapist"]
    }
  },
  {
    "id": "business_management_consultant",
    "title": "Management Consultant",
    "domain": "Business",
    "slug": "management-consultant",
    "match_profile": {
      "interests": ["problem_solving", "business", "strategy", "data"],
      "personality": ["analytical", "confident", "articulate", "adaptable"],
      "work_style": ["travel_heavy", "high_pressure", "project_based", "collaborative"],
      "deal_breakers": ["stagnation", "low_pay", "routine"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "MBA",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 1200000,
      "max": 4000000,
      "display_range": "₹12L - ₹40L per year",
      "pay_structure": "Salary + Bonus"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "AI is handling data crunching; consultants focus on change management and strategy."
    },
    "content": {
      "short_desc": "Advises organizations on how to improve performance and solve problems.",
      "long_desc": "Consultants are hired problem solvers. You analyze company data, interview employees, and present strategies to CEOs. It involves frequent travel and long hours but offers rapid career progression.",
      "day_in_life": ["Analyze client data", "Interview stakeholders", "Create strategy decks"],
      "tags": ["High Pay", "Strategy", "Corporate"]
    },
    "meta": {
      "popularity_rank": 14,
      "search_keywords": ["strategy", "mba", "business", "analysis"],
      "related_career_ids": ["finance_investment_banker", "tech_product_manager"]
    }
  },
  {
    "id": "finance_actuary",
    "title": "Actuary",
    "domain": "Finance",
    "slug": "actuary",
    "match_profile": {
      "interests": ["math", "statistics", "risk", "finance"],
      "personality": ["analytical", "logical", "introverted", "studious"],
      "work_style": ["sedentary", "data_heavy", "quiet", "intellectual"],
      "deal_breakers": ["sales", "guesswork", "chaos"]
    },
    "requirements": {
      "education_level": "certification",
      "degree_field": "Actuarial Science Exams",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 3000000,
      "display_range": "₹8L - ₹30L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Data science is overlapping, but regulatory requirement for actuaries remains."
    },
    "content": {
      "short_desc": "Calculates financial risk and uncertainty using mathematics.",
      "long_desc": "Actuaries work in insurance and finance to predict the future probability of events. It involves complex math and passing a series of difficult exams. It is a low-stress, high-pay desk job.",
      "day_in_life": ["Calculate insurance premiums", "Assess financial risk", "Prepare reports for regulators"],
      "tags": ["Math", "Finance", "High Pay"]
    },
    "meta": {
      "popularity_rank": 53,
      "search_keywords": ["risk", "insurance", "statistics", "math"],
      "related_career_ids": ["tech_data_scientist", "finance_financial_analyst"]
    }
  },
  {
    "id": "creative_interior_designer",
    "title": "Interior Designer",
    "domain": "Arts & Design",
    "slug": "interior-designer",
    "match_profile": {
      "interests": ["decor", "spaces", "aesthetics", "creative"],
      "personality": ["artistic", "visual", "organized", "social"],
      "work_style": ["hybrid", "client_facing", "visual", "project_based"],
      "deal_breakers": ["coding", "pure_desk_job", "lack_of_creativity"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Interior Design / Architecture",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1200000,
      "display_range": "₹3L - ₹12L per year",
      "pay_structure": "Salary or Project Fee"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Virtual Reality (VR) walkthroughs are becoming standard practice."
    },
    "content": {
      "short_desc": "Plans and decorates indoor spaces for functionality and beauty.",
      "long_desc": "Interior Designers make spaces usable and beautiful. You select furniture, lighting, and colors while managing budgets and contractors. It requires a portfolio and knowledge of design software.",
      "day_in_life": ["Meet clients", "Select materials and furniture", "Supervise site installation"],
      "tags": ["Creative", "Design", "Homes"]
    },
    "meta": {
      "popularity_rank": 68,
      "search_keywords": ["decor", "home", "furniture", "style"],
      "related_career_ids": ["eng_architect", "creative_fashion_designer"]
    }
  },
  {
    "id": "media_video_editor",
    "title": "Video Editor",
    "domain": "Media & Marketing",
    "slug": "video-editor",
    "match_profile": {
      "interests": ["film", "storytelling", "technology", "pacing"],
      "personality": ["patient", "creative", "detail_oriented", "introverted"],
      "work_style": ["sedentary", "remote_friendly", "screen_heavy", "solitary"],
      "deal_breakers": ["outdoor_work", "public_speaking", "math"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Film Editing / Portfolio",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1200000,
      "display_range": "₹3L - ₹12L per year",
      "pay_structure": "Salary or Freelance"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Creator economy is booming; high demand for YouTube/Social editors."
    },
    "content": {
      "short_desc": "Edits raw footage into polished videos for media.",
      "long_desc": "Video Editors tell stories by cutting and assembling clips. You use Premiere Pro or DaVinci Resolve to craft the narrative. YouTube and streaming have exploded demand for this role.",
      "day_in_life": ["Review raw footage", "Cut scenes and sync audio", "Color grade and add effects"],
      "tags": ["Creative", "Tech", "Media"]
    },
    "meta": {
      "popularity_rank": 31,
      "search_keywords": ["youtube", "film", "premiere", "cinema"],
      "related_career_ids": ["media_sound_engineer", "media_content_writer"]
    }
  },
  {
    "id": "trade_welder",
    "title": "Welder",
    "domain": "Skilled Trade",
    "slug": "welder",
    "match_profile": {
      "interests": ["metal", "fire", "building", "mechanics"],
      "personality": ["focused", "steady", "practical", "cautious"],
      "work_style": ["field_work", "hazardous", "physical_labor", "technical"],
      "deal_breakers": ["office_job", "soft_hands", "meetings"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "ITI Welding",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 800000,
      "display_range": "₹2.5L - ₹8L per year",
      "pay_structure": "Wage + Overtime"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Specialized welding (underwater, pipeline) commands very high pay."
    },
    "content": {
      "short_desc": "Fuses metal parts in construction and manufacturing.",
      "long_desc": "Welders use heat to join metal. It is a highly skilled trade used in construction, automotive, and aerospace. It requires hand-eye coordination and safety awareness. Underwater welding is a niche, high-pay option.",
      "day_in_life": ["Read blueprints", "Operate welding torch", "Inspect welds for strength"],
      "tags": ["Trade", "Construction", "Hands-on"]
    },
    "meta": {
      "popularity_rank": 95,
      "search_keywords": ["metal", "construction", "factory", "repair"],
      "related_career_ids": ["trade_plumber", "eng_mechanical_engineer"]
    }
  },
  {
    "id": "trade_carpenter",
    "title": "Carpenter",
    "domain": "Skilled Trade",
    "slug": "carpenter",
    "match_profile": {
      "interests": ["wood", "building", "design", "craft"],
      "personality": ["creative", "practical", "detail_oriented", "strong"],
      "work_style": ["field_work", "physical_labor", "dusty", "active"],
      "deal_breakers": ["computer_screens", "office_politics", "sedentary"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "ITI Carpentry / Apprenticeship",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 700000,
      "display_range": "₹2.5L - ₹7L per year",
      "pay_structure": "Wage + Project Fee"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Custom furniture and sustainable wood housing keeping demand high."
    },
    "content": {
      "short_desc": "Constructs and repairs building frameworks and furniture.",
      "long_desc": "Carpenters measure, cut, and shape wood. You might work on construction sites framing houses or in a workshop building custom cabinets. It combines math with manual skill.",
      "day_in_life": ["Measure and cut wood", "Assemble furniture/frames", "Install fixtures on site"],
      "tags": ["Trade", "Creative", "Hands-on"]
    },
    "meta": {
      "popularity_rank": 52,
      "search_keywords": ["wood", "furniture", "construction", "design"],
      "related_career_ids": ["creative_interior_designer", "trade_welder"]
    }
  },
  {
    "id": "media_sound_engineer",
    "title": "Sound Engineer",
    "domain": "Media & Marketing",
    "slug": "sound-engineer",
    "match_profile": {
      "interests": ["music", "technology", "physics", "acoustics"],
      "personality": ["perceptive", "technical", "creative", "patient"],
      "work_style": ["studio_based", "technical", "auditory", "collaborative"],
      "deal_breakers": ["noisy_environment", "simple_tasks", "bad_equipment"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Audio Engineering",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1000000,
      "display_range": "₹3L - ₹10L per year",
      "pay_structure": "Salary or Freelance"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "AI audio mastering is common, but live sound and creative mixing remain human."
    },
    "content": {
      "short_desc": "Records and mixes sound for music, film, and games.",
      "long_desc": "Sound Engineers handle the technical side of audio. You operate mixing desks in studios or live venues. It requires a 'good ear' and knowledge of physics and software.",
      "day_in_life": ["Record studio sessions", "Mix audio tracks", "Set up live event sound"],
      "tags": ["Creative", "Tech", "Music"]
    },
    "meta": {
      "popularity_rank": 78,
      "search_keywords": ["music", "audio", "studio", "recording"],
      "related_career_ids": ["media_video_editor", "creative_content_writer"]
    }
  },
  {
    "id": "science_geologist",
    "title": "Geologist",
    "domain": "Science",
    "slug": "geologist",
    "match_profile": {
      "interests": ["rocks", "earth", "travel", "history"],
      "personality": ["adventurous", "observant", "analytical", "patient"],
      "work_style": ["field_work", "remote_locations", "research", "physical"],
      "deal_breakers": ["office_only", "clean_clothes", "urban_life"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "M.Sc Geology",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Critical for finding rare earth metals needed for batteries and tech."
    },
    "content": {
      "short_desc": "Studies the earth's structure, rocks, and resources.",
      "long_desc": "Geologists examine rocks and soil to find minerals or understand earth history. You split time between labs and remote field locations. Essential for mining, energy, and environmental protection.",
      "day_in_life": ["Collect rock samples", "Map terrain", "Analyze samples in lab"],
      "tags": ["Science", "Nature", "Travel"]
    },
    "meta": {
      "popularity_rank": 92,
      "search_keywords": ["rocks", "mining", "earth", "nature"],
      "related_career_ids": ["eng_petroleum_engineer", "science_marine_biologist"]
    }
  },
  {
    "id": "finance_economist",
    "title": "Economist",
    "domain": "Finance",
    "slug": "economist",
    "match_profile": {
      "interests": ["money", "policy", "society", "data"],
      "personality": ["intellectual", "analytical", "rational", "big_picture"],
      "work_style": ["sedentary", "academic", "research_oriented", "independent"],
      "deal_breakers": ["manual_labor", "emotion_based_decisions", "sales"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "PhD Economics",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 2500000,
      "display_range": "₹8L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Data-heavy roles automating; policy and behavioral economics growing."
    },
    "content": {
      "short_desc": "Researches trends in the economy to advise on policy.",
      "long_desc": "Economists analyze data on employment, inflation, and interest rates. You advise governments or banks on policy. It involves heavy statistics and writing reports.",
      "day_in_life": ["Analyze economic data", "Write policy briefs", "Forecast market trends"],
      "tags": ["Finance", "Academic", "Policy"]
    },
    "meta": {
      "popularity_rank": 81,
      "search_keywords": ["money", "inflation", "bank", "policy"],
      "related_career_ids": ["finance_financial_analyst", "govt_ias_officer"]
    }
  },
  {
    "id": "health_radiologist",
    "title": "Radiologist",
    "domain": "Healthcare",
    "slug": "radiologist",
    "match_profile": {
      "interests": ["technology", "anatomy", "diagnosis", "puzzles"],
      "personality": ["observant", "analytical", "introverted", "decisive"],
      "work_style": ["hospital_based", "dark_room", "diagnostic", "low_patient_contact"],
      "deal_breakers": ["constant_socializing", "physical_labor", "ambiguity"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "MBBS + MD Radiology",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1200000,
      "max": 3500000,
      "display_range": "₹12L - ₹35L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "AI is becoming a 'second opinion' tool, increasing accuracy and speed."
    },
    "content": {
      "short_desc": "Diagnoses disease using X-rays, MRIs, and medical imaging.",
      "long_desc": "Radiologists are doctors who interpret medical images. You identify injuries and diseases hidden inside the body. It is technology-heavy and less patient-facing than other medical roles.",
      "day_in_life": ["Review X-ray/MRI scans", "Write diagnostic reports", "Consult with other doctors"],
      "tags": ["Medical", "Tech", "High Pay"]
    },
    "meta": {
      "popularity_rank": 41,
      "search_keywords": ["xray", "doctor", "scan", "hospital"],
      "related_career_ids": ["health_general_surgeon", "eng_biomedical_engineer"]
    }
  },
  {
    "id": "creative_industrial_designer",
    "title": "Industrial Designer",
    "domain": "Arts & Design",
    "slug": "industrial-designer",
    "match_profile": {
      "interests": ["products", "drawing", "invention", "functionality"],
      "personality": ["creative", "practical", "visual", "problem_solver"],
      "work_style": ["studio_based", "collaborative", "tactile", "visual"],
      "deal_breakers": ["pure_engineering", "pure_art", "repetitive_work"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Industrial Design",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1800000,
      "display_range": "₹5L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Sustainable materials and smart-device design driving demand."
    },
    "content": {
      "short_desc": "Designs physical products from cars to coffee makers.",
      "long_desc": "Industrial Designers decide how a product looks and feels. You sketch concepts, create 3D models, and prototype physical objects. It blends art, engineering, and user experience.",
      "day_in_life": ["Sketch product concepts", "Build physical prototypes", "Test usability"],
      "tags": ["Creative", "Design", "Innovation"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["product", "invention", "cad", "design"],
      "related_career_ids": ["eng_mechanical_engineer", "creative_graphic_designer"]
    }
  },
  {
    "id": "eng_petroleum_engineer",
    "title": "Petroleum Engineer",
    "domain": "Engineering",
    "slug": "petroleum-engineer",
    "match_profile": {
      "interests": ["energy", "geology", "machines", "money"],
      "personality": ["adventurous", "analytical", "resilient", "practical"],
      "work_style": ["field_work", "remote_locations", "hazardous", "high_pay"],
      "deal_breakers": ["office_routine", "city_life", "low_pay"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Petroleum Engineering",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 3000000,
      "display_range": "₹10L - ₹30L per year",
      "pay_structure": "Salary + Hazard Pay"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "High pay remains, but industry shifting towards renewables and gas."
    },
    "content": {
      "short_desc": "Designs methods to extract oil and gas from the earth.",
      "long_desc": "Petroleum Engineers find and extract energy resources. You work on drilling rigs, often offshore or in deserts. It is one of the highest-paying engineering fields due to the challenging work conditions.",
      "day_in_life": ["Analyze geological data", "Design drilling plans", "Supervise rig operations"],
      "tags": ["Energy", "Engineering", "High Pay"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["oil", "gas", "energy", "drilling"],
      "related_career_ids": ["science_geologist", "eng_chemical_engineer"]
    }
  },
  {
    "id": "science_microbiologist",
    "title": "Microbiologist",
    "domain": "Science",
    "slug": "microbiologist",
    "match_profile": {
      "interests": ["bacteria", "viruses", "microscope", "research"],
      "personality": ["meticulous", "patient", "curious", "analytical"],
      "work_style": ["lab_based", "sterile", "detail_heavy", "quiet"],
      "deal_breakers": ["germ_phobia", "sales", "public_speaking"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "M.Sc Microbiology",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 350000,
      "max": 1000000,
      "display_range": "₹3.5L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Critical for fighting future pandemics and developing antibiotics."
    },
    "content": {
      "short_desc": "Studies microscopic organisms like bacteria and viruses.",
      "long_desc": "Microbiologists study life too small to see. You research how microbes affect our health and environment. You might work in a hospital lab identifying infections or in a pharma company developing drugs.",
      "day_in_life": ["Prepare petri dishes", "Examine samples under microscope", "Identify pathogens"],
      "tags": ["Science", "Research", "Health"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["virus", "bacteria", "lab", "scientist"],
      "related_career_ids": ["science_biotechnologist", "health_medical_researcher"]
    }
  },
  {
    "id": "science_zoologist",
    "title": "Zoologist",
    "domain": "Science",
    "slug": "zoologist",
    "match_profile": {
      "interests": ["animals", "wildlife", "conservation", "nature"],
      "personality": ["observant", "adventurous", "patient", "passionate"],
      "work_style": ["field_work", "outdoor", "research_oriented", "travel"],
      "deal_breakers": ["office_only", "cleanliness", "urban_life"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "M.Sc Zoology",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary or Grants"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Increasing focus on biodiversity loss and wildlife conservation."
    },
    "content": {
      "short_desc": "Studies animals and their behaviors in the wild or captivity.",
      "long_desc": "Zoologists are animal experts. You study how animals interact with their ecosystem. You might work for a zoo, a wildlife park, or a conservation NGO. It involves travel and working with dangerous species.",
      "day_in_life": ["Observe animal behavior", "Track migration patterns", "Manage zoo habitats"],
      "tags": ["Animals", "Nature", "Science"]
    },
    "meta": {
      "popularity_rank": 88,
      "search_keywords": ["animals", "wildlife", "zoo", "nature"],
      "related_career_ids": ["science_marine_biologist", "health_veterinarian"]
    }
  },
  {
    "id": "health_occupational_therapist",
    "title": "Occupational Therapist",
    "domain": "Healthcare",
    "slug": "occupational-therapist",
    "match_profile": {
      "interests": ["rehab", "helping_people", "psychology", "anatomy"],
      "personality": ["creative", "patient", "encouraging", "resourceful"],
      "work_style": ["clinic_based", "one_on_one", "hands_on", "social"],
      "deal_breakers": ["impatience", "sedentary", "tech_only"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Bachelor of Occupational Therapy",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Growing need for elderly care and workplace ergonomics."
    },
    "content": {
      "short_desc": "Helps people regain daily living skills after injury or illness.",
      "long_desc": "OTs help patients do everyday tasks. Unlike physiotherapy (movement), OT focuses on function—like re-learning how to dress or cook after a stroke. It requires creativity to adapt the environment to the patient.",
      "day_in_life": ["Assess patient abilities", "Design adaptation exercises", "Teach use of assistive devices"],
      "tags": ["Healthcare", "Rehab", "Helping People"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["rehab", "therapy", "disability", "health"],
      "related_career_ids": ["health_physiotherapist", "social_social_worker"]
    }
  },
  {
    "id": "health_nutritionist",
    "title": "Nutritionist / Dietitian",
    "domain": "Healthcare",
    "slug": "nutritionist",
    "match_profile": {
      "interests": ["food", "health", "biology", "cooking"],
      "personality": ["organized", "persuasive", "empathetic", "disciplined"],
      "work_style": ["office_based", "consulting", "social", "structured"],
      "deal_breakers": ["junk_food_culture", "blood", "shift_work"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Nutrition or Dietetics",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1000000,
      "display_range": "₹3L - ₹10L per year",
      "pay_structure": "Salary or Consultation Fees"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Personalized nutrition based on DNA and gut microbiome is the future."
    },
    "content": {
      "short_desc": "Advises people on healthy eating and diet plans.",
      "long_desc": "Nutritionists use food as medicine. You design meal plans for weight loss, diabetes management, or sports performance. You need to be a good counselor to help people change their habits.",
      "day_in_life": ["Create diet charts", "Counsel patients", "Analyze nutritional values"],
      "tags": ["Health", "Food", "Lifestyle"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["diet", "food", "health", "weight_loss"],
      "related_career_ids": ["health_fitness_trainer", "hospitality_chef"]
    }
  },
  {
    "id": "business_operations_manager",
    "title": "Operations Manager",
    "domain": "Business",
    "slug": "operations-manager",
    "match_profile": {
      "interests": ["efficiency", "logistics", "management", "systems"],
      "personality": ["organized", "decisive", "practical", "leader"],
      "work_style": ["hybrid", "problem_solving", "high_responsibility", "dynamic"],
      "deal_breakers": ["chaos", "abstract_theory", "passive_role"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "BBA / MBA",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 2500000,
      "display_range": "₹8L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Increasing use of AI for predictive supply chain and inventory."
    },
    "content": {
      "short_desc": "Oversees the day-to-day efficiency of a business.",
      "long_desc": "Operations Managers keep the lights on and the wheels turning. You manage supply chains, optimize workflows, and ensure the company delivers its products on time and on budget.",
      "day_in_life": ["Review production schedules", "Solve logistical bottlenecks", "Manage vendor relationships"],
      "tags": ["Business", "Management", "Logistics"]
    },
    "meta": {
      "popularity_rank": 20,
      "search_keywords": ["ops", "logistics", "manager", "efficiency"],
      "related_career_ids": ["business_supply_chain_manager", "mgmt_project_manager"]
    }
  },
  {
    "id": "business_supply_chain_manager",
    "title": "Supply Chain Manager",
    "domain": "Business",
    "slug": "supply-chain-manager",
    "match_profile": {
      "interests": ["logistics", "transport", "negotiation", "data"],
      "personality": ["strategic", "calm_under_pressure", "analytical", "negotiator"],
      "work_style": ["office_based", "global_interaction", "deadline_driven", "complex"],
      "deal_breakers": ["local_only", "simplicity", "isolation"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "MBA Operations",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 3000000,
      "display_range": "₹10L - ₹30L per year",
      "pay_structure": "Salary + Bonus"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Global trade complexity requires human strategy despite AI tracking."
    },
    "content": {
      "short_desc": "Manages the flow of goods from supplier to consumer.",
      "long_desc": "Supply Chain Managers ensure products get made and delivered. You source raw materials, manage warehouses, and coordinate shipping globally. It is high-stakes puzzle solving.",
      "day_in_life": ["Track shipments", "Negotiate with suppliers", "Optimize inventory levels"],
      "tags": ["Logistics", "Business", "Global"]
    },
    "meta": {
      "popularity_rank": 25,
      "search_keywords": ["logistics", "shipping", "warehouse", "operations"],
      "related_career_ids": ["business_operations_manager", "business_import_export"]
    }
  },
  {
    "id": "finance_tax_consultant",
    "title": "Tax Consultant",
    "domain": "Finance",
    "slug": "tax-consultant",
    "match_profile": {
      "interests": ["law", "numbers", "saving_money", "compliance"],
      "personality": ["detail_oriented", "ethical", "studious", "methodical"],
      "work_style": ["sedentary", "seasonal_pressure", "intellectual", "client_facing"],
      "deal_breakers": ["creativity", "physical_labor", "risk_taking"]
    },
    "requirements": {
      "education_level": "certification",
      "degree_field": "CA / LLB / Tax Certification",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 2000000,
      "display_range": "₹5L - ₹20L per year",
      "pay_structure": "Salary or Fees"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Software handles basic filing; consultants focus on complex tax planning."
    },
    "content": {
      "short_desc": "Advises individuals and businesses on tax laws and strategies.",
      "long_desc": "Tax Consultants help clients minimize tax liability legally. You navigate complex and ever-changing tax codes. It is a stable career with a very busy season (end of financial year).",
      "day_in_life": ["Prepare tax returns", "Research tax code changes", "Advise clients on deductions"],
      "tags": ["Finance", "Law", "Stable"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["tax", "audit", "money", "ca"],
      "related_career_ids": ["finance_chartered_accountant", "legal_corporate_lawyer"]
    }
  },
  {
    "id": "legal_litigation_lawyer",
    "title": "Litigation Lawyer",
    "domain": "Legal",
    "slug": "litigation-lawyer",
    "match_profile": {
      "interests": ["debate", "justice", "research", "public_speaking"],
      "personality": ["argumentative", "confident", "resilient", "quick_thinker"],
      "work_style": ["courtroom", "high_stress", "adversarial", "public"],
      "deal_breakers": ["conflict_avoidance", "routine", "quiet_life"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "LLB",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 5000000,
      "display_range": "₹3L - ₹50L+ (High Variance)",
      "pay_structure": "Case Fees"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "AI helps with case research, but courtroom advocacy remains human."
    },
    "content": {
      "short_desc": "Represents clients in court to resolve disputes.",
      "long_desc": "Litigation Lawyers fight cases in court. You argue on behalf of your client, cross-examine witnesses, and persuade judges. It requires thick skin and excellent public speaking skills.",
      "day_in_life": ["Draft legal petitions", "Argue in court", "Interview witnesses"],
      "tags": ["Law", "Public Speaking", "High Stress"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["court", "advocate", "judge", "criminal"],
      "related_career_ids": ["legal_judge", "legal_corporate_lawyer"]
    }
  },
  {
    "id": "legal_judge",
    "title": "Judge / Magistrate",
    "domain": "Legal",
    "slug": "judge",
    "match_profile": {
      "interests": ["justice", "law", "ethics", "society"],
      "personality": ["impartial", "wise", "patient", "authoritative"],
      "work_style": ["courtroom", "sedentary", "high_responsibility", "solitary"],
      "deal_breakers": ["bias", "haste", "corruption"]
    },
    "requirements": {
      "education_level": "specialized",
      "degree_field": "Judicial Services Exam / Experience",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 3000000,
      "display_range": "₹10L - ₹30L + Govt Perks",
      "pay_structure": "Govt Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Very Low",
      "future_trend": "High backlog of cases ensures permanent demand for judicial officers."
    },
    "content": {
      "short_desc": "Presides over court proceedings and issues rulings.",
      "long_desc": "Judges are the final authority in law. You listen to arguments from lawyers, interpret the law, and deliver verdicts. It is a position of immense prestige and responsibility.",
      "day_in_life": ["Hear court cases", "Read case files", "Write judgments"],
      "tags": ["Prestige", "Law", "Government"]
    },
    "meta": {
      "popularity_rank": 15,
      "search_keywords": ["court", "justice", "law", "verdict"],
      "related_career_ids": ["legal_litigation_lawyer", "govt_ias_officer"]
    }
  },
  {
    "id": "creative_art_director",
    "title": "Art Director",
    "domain": "Arts & Design",
    "slug": "art-director",
    "match_profile": {
      "interests": ["art", "leadership", "branding", "vision"],
      "personality": ["creative", "decisive", "visual", "inspiring"],
      "work_style": ["studio_based", "collaborative", "high_pressure", "visual"],
      "deal_breakers": ["micro_management", "spreadsheet_work", "bad_taste"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Design / Fine Arts",
      "certification_required": false,
      "experience_level": "mid_to_expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 3000000,
      "display_range": "₹8L - ₹30L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "High",
      "future_trend": "Role shifting to curating AI-generated art rather than creating from scratch."
    },
    "content": {
      "short_desc": "Sets the visual style for magazines, movies, or brands.",
      "long_desc": "Art Directors oversee the artistic vision of a project. You don't just draw; you manage a team of designers and photographers to ensure the final product looks cohesive and on-brand.",
      "day_in_life": ["Review design drafts", "Brainstorm visual concepts", "Pitch ideas to clients"],
      "tags": ["Creative", "Leadership", "Design"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["design", "manager", "brand", "visual"],
      "related_career_ids": ["creative_graphic_designer", "business_marketing_manager"]
    }
  },
  {
    "id": "creative_copywriter",
    "title": "Advertising Copywriter",
    "domain": "Media & Marketing",
    "slug": "advertising-copywriter",
    "match_profile": {
      "interests": ["writing", "psychology", "sales", "creativity"],
      "personality": ["witty", "concise", "creative", "persuasive"],
      "work_style": ["remote_friendly", "brainstorming", "deadline_driven", "sedentary"],
      "deal_breakers": ["long_form_writing", "boredom", "rigid_rules"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Advertising / English",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Salary or Freelance"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "High",
      "future_trend": "Heavy AI integration; writers now need to master prompt engineering."
    },
    "content": {
      "short_desc": "Writes persuasive text for advertisements and marketing.",
      "long_desc": "Copywriters sell with words. You write catchy slogans, radio scripts, and social media captions. You need to understand human psychology and how to grab attention in seconds.",
      "day_in_life": ["Brainstorm ad slogans", "Write scripts for commercials", "Edit copy for clarity"],
      "tags": ["Creative", "Marketing", "Writing"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["ads", "writer", "marketing", "slogan"],
      "related_career_ids": ["media_content_writer", "creative_art_director"]
    }
  },
  {
    "id": "media_public_relations_specialist",
    "title": "Public Relations (PR) Specialist",
    "domain": "Media & Marketing",
    "slug": "pr-specialist",
    "match_profile": {
      "interests": ["image", "communication", "media", "networking"],
      "personality": ["charming", "articulate", "diplomatic", "resilient"],
      "work_style": ["social", "high_stress", "public_facing", "dynamic"],
      "deal_breakers": ["introversion", "honesty_above_all", "silence"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Mass Comm / PR",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Crisis management in the age of social media is a growing necessity."
    },
    "content": {
      "short_desc": "Manages the public image of a company or celebrity.",
      "long_desc": "PR Specialists shape public perception. You write press releases, handle scandals, and get your client featured in the news. It is all about who you know and how you spin the story.",
      "day_in_life": ["Write press releases", "Coordinate interviews", "Manage social media crisis"],
      "tags": ["Media", "Social", "Corporate"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["media", "image", "brand", "news"],
      "related_career_ids": ["business_marketing_manager", "media_journalist"]
    }
  },
  {
    "id": "tech_game_developer",
    "title": "Game Developer",
    "domain": "Technology",
    "slug": "game-developer",
    "match_profile": {
      "interests": ["gaming", "coding", "physics", "storytelling"],
      "personality": ["creative", "logical", "passionate", "obsessive"],
      "work_style": ["sedentary", "screen_heavy", "crunch_culture", "collaborative"],
      "deal_breakers": ["no_gaming", "corporate_suits", "stability"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / Game Design",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 2000000,
      "display_range": "₹5L - ₹20L per year",
      "pay_structure": "Salary + Royalties"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Generative AI creates assets, but game logic and fun factor remain human."
    },
    "content": {
      "short_desc": "Codes and creates video games for mobile, PC, or console.",
      "long_desc": "Game Developers bring virtual worlds to life. You use engines like Unity or Unreal to code gameplay mechanics, physics, and AI. It is a dream job for gamers but often involves long hours ('crunch').",
      "day_in_life": ["Code player movement logic", "Debug physics glitches", "Integrate art assets"],
      "tags": ["Tech", "Creative", "Gaming"]
    },
    "meta": {
      "popularity_rank": 10,
      "search_keywords": ["unity", "unreal", "coding", "videogames"],
      "related_career_ids": ["tech_frontend_engineer", "media_video_editor"]
    }
  },
  {
    "id": "tech_systems_analyst",
    "title": "Systems Analyst",
    "domain": "Technology",
    "slug": "systems-analyst",
    "match_profile": {
      "interests": ["systems", "efficiency", "technology", "business"],
      "personality": ["analytical", "methodical", "communicative", "logical"],
      "work_style": ["office_based", "meeting_heavy", "problem_solving", "structured"],
      "deal_breakers": ["pure_coding", "chaos", "isolation"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS or IT",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Shift towards cloud migration specialist roles."
    },
    "content": {
      "short_desc": "Analyzes IT systems to improve business efficiency.",
      "long_desc": "Systems Analysts bridge the gap between business needs and IT. You study how a company works and design computer systems to make it better. You write requirements for developers to build.",
      "day_in_life": ["Interview employees on workflow", "Design system architecture", "Test new software"],
      "tags": ["Tech", "Business", "Corporate"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["it", "computer", "business", "analysis"],
      "related_career_ids": ["tech_product_manager", "business_operations_manager"]
    }
  },
  {
    "id": "eng_electrical_engineer",
    "title": "Electrical Engineer",
    "domain": "Engineering",
    "slug": "electrical-engineer",
    "match_profile": {
      "interests": ["circuits", "power", "math", "physics"],
      "personality": ["logical", "precise", "curious", "cautious"],
      "work_style": ["hybrid", "technical", "laboratory", "safety_focused"],
      "deal_breakers": ["ambiguity", "arts", "sales"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Electrical Engineering",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Massive demand in renewable energy (solar/wind) and EV grid infrastructure."
    },
    "content": {
      "short_desc": "Designs electrical systems, motors, and power grids.",
      "long_desc": "Electrical Engineers power the world. You design circuits for devices or huge power grids for cities. It requires strong math skills and understanding of electricity.",
      "day_in_life": ["Design circuit schematics", "Test electrical components", "Inspect power installations"],
      "tags": ["Engineering", "Core", "Energy"]
    },
    "meta": {
      "popularity_rank": 22,
      "search_keywords": ["power", "electronics", "circuit", "energy"],
      "related_career_ids": ["eng_mechanical_engineer", "trade_electrician"]
    }
  },
  {
    "id": "eng_chemical_engineer",
    "title": "Chemical Engineer",
    "domain": "Engineering",
    "slug": "chemical-engineer",
    "match_profile": {
      "interests": ["chemistry", "manufacturing", "processes", "science"],
      "personality": ["analytical", "process_oriented", "logical", "careful"],
      "work_style": ["factory_based", "industrial", "technical", "process_driven"],
      "deal_breakers": ["office_only", "creative_chaos", "clean_hands"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Chemical Engineering",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Focus on green hydrogen, battery chemistry, and sustainable plastics."
    },
    "content": {
      "short_desc": "Turns raw materials into products like fuel, medicine, and food.",
      "long_desc": "Chemical Engineers figure out how to mass-produce chemicals. You work in factories or refineries designing processes to make soap, petrol, or plastic efficiently and safely.",
      "day_in_life": ["Monitor plant operations", "Design chemical processes", "Ensure safety compliance"],
      "tags": ["Engineering", "Science", "Industrial"]
    },
    "meta": {
      "popularity_rank": 38,
      "search_keywords": ["chemistry", "factory", "process", "oil"],
      "related_career_ids": ["eng_petroleum_engineer", "science_biotechnologist"]
    }
  },
  {
    "id": "trade_mechanic",
    "title": "Auto Mechanic",
    "domain": "Skilled Trade",
    "slug": "auto-mechanic",
    "match_profile": {
      "interests": ["cars", "fixing_things", "engines", "manual_work"],
      "personality": ["practical", "reliable", "diagnostic", "hands_on"],
      "work_style": ["workshop", "greasy", "physical", "problem_solving"],
      "deal_breakers": ["clean_desk", "theory", "long_meetings"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "ITI Automobile",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 800000,
      "display_range": "₹2.5L - ₹8L per year",
      "pay_structure": "Wage + Tips"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Shift from engine repair to EV software diagnostics and battery maintenance."
    },
    "content": {
      "short_desc": "Repairs and maintains cars and trucks.",
      "long_desc": "Mechanics keep vehicles running. You diagnose engine problems, change oil, and replace brakes. Modern mechanics also need to use computers to diagnose car software issues.",
      "day_in_life": ["Diagnose engine noises", "Replace brake pads", "Perform oil changes"],
      "tags": ["Trade", "Cars", "Hands-on"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["car", "repair", "garage", "technician"],
      "related_career_ids": ["trade_hvac_technician", "eng_mechanical_engineer"]
    }
  },
  {
    "id": "trade_hvac_technician",
    "title": "HVAC Technician",
    "domain": "Skilled Trade",
    "slug": "hvac-technician",
    "match_profile": {
      "interests": ["mechanics", "thermodynamics", "fixing_things", "travel"],
      "personality": ["practical", "independent", "problem_solver", "technical"],
      "work_style": ["field_work", "physical", "technical", "varied"],
      "deal_breakers": ["office_cubicle", "sales", "group_work"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "ITI AC & Refrigeration",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 900000,
      "display_range": "₹3L - ₹9L per year",
      "pay_structure": "Wage + Season Bonus"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Very Low",
      "future_trend": "Climate change and heatwaves increasing demand for cooling systems."
    },
    "content": {
      "short_desc": "Installs and repairs heating and air conditioning systems.",
      "long_desc": "HVAC Technicians control the climate. You install ACs in homes and offices and fix them when they break. It is a field with huge demand in hot climates.",
      "day_in_life": ["Install AC units", "Check refrigerant levels", "Repair ventilation ducts"],
      "tags": ["Trade", "Essential", "Technical"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["ac", "repair", "cooling", "technician"],
      "related_career_ids": ["trade_electrician", "trade_plumber"]
    }
  },
  {
    "id": "transport_train_driver",
    "title": "Train Driver / Loco Pilot",
    "domain": "Transportation",
    "slug": "loco-pilot",
    "match_profile": {
      "interests": ["trains", "travel", "machines", "solitude"],
      "personality": ["alert", "responsible", "calm", "focused"],
      "work_style": ["travel_heavy", "sedentary_but_alert", "shift_work", "solitary"],
      "deal_breakers": ["socializing", "office", "distraction"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "ITI / Diploma + Railway Exam",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1500000,
      "display_range": "₹6L - ₹15L per year",
      "pay_structure": "Govt Salary + Overtime"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Automation (metro) is growing, but freight and long-distance remain human-led."
    },
    "content": {
      "short_desc": "Operates trains to transport passengers and goods.",
      "long_desc": "Loco Pilots drive the engines of trains. You are responsible for the safety of thousands of passengers. It requires intense concentration for long hours but offers good government pay.",
      "day_in_life": ["Check engine systems", "Drive train on route", "Communicate with control"],
      "tags": ["Transport", "Government", "Travel"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["railway", "driver", "train", "transport"],
      "related_career_ids": ["transport_commercial_pilot", "trade_mechanic"]
    }
  },
  {
    "id": "edu_school_counselor",
    "title": "School Counselor",
    "domain": "Education",
    "slug": "school-counselor",
    "match_profile": {
      "interests": ["psychology", "children", "helping_people", "education"],
      "personality": ["empathetic", "approachable", "listener", "patient"],
      "work_style": ["school_based", "one_on_one", "emotional", "structured"],
      "deal_breakers": ["sales", "corporate_politics", "unpredictability"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Psychology / Counseling",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Rising focus on student mental health is making this role mandatory."
    },
    "content": {
      "short_desc": "Supports students with academic and emotional challenges.",
      "long_desc": "School Counselors help students succeed. You listen to their problems, help them choose careers, and support them through bullying or family issues. It is a vital support role.",
      "day_in_life": ["Counsel students", "Hold career workshops", "Meet with parents"],
      "tags": ["Education", "Helping People", "Psychology"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["school", "therapy", "students", "guidance"],
      "related_career_ids": ["health_clinical_psychologist", "edu_primary_teacher"]
    }
  },
  {
    "id": "science_physicist",
    "title": "Physicist",
    "domain": "Science",
    "slug": "physicist",
    "match_profile": {
      "interests": ["physics", "math", "universe", "research"],
      "personality": ["intellectual", "curious", "logical", "persistent"],
      "work_style": ["lab_based", "academic", "abstract", "sedentary"],
      "deal_breakers": ["sales", "corporate_politics", "manual_labor"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "PhD Physics",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary + Grants"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Quantum computing research is creating new high-paying industry roles."
    },
    "content": {
      "short_desc": "Studies the fundamental laws of matter and energy.",
      "long_desc": "Physicists try to understand how the universe works, from subatomic particles to galaxies. You might work in a university, a government lab, or helping tech companies develop quantum computers.",
      "day_in_life": ["Run computer simulations", "Conduct experiments", "Publish research papers"],
      "tags": ["Science", "Research", "Academic"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["research", "quantum", "space", "scientist"],
      "related_career_ids": ["science_astronomer", "tech_data_scientist"]
    }
  },
  {
    "id": "health_pediatrician",
    "title": "Pediatrician",
    "domain": "Healthcare",
    "slug": "pediatrician",
    "match_profile": {
      "interests": ["children", "medicine", "helping_people", "biology"],
      "personality": ["gentle", "patient", "playful", "observant"],
      "work_style": ["clinic_based", "social", "high_responsibility", "emotional"],
      "deal_breakers": ["disliking_kids", "impatient", "cold_environment"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "MBBS + MD Pediatrics",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 3000000,
      "display_range": "₹10L - ₹30L per year",
      "pay_structure": "Salary or Private Practice"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Tele-health for minor child ailments is growing."
    },
    "content": {
      "short_desc": "Diagnoses and treats medical conditions in infants and children.",
      "long_desc": "Pediatricians are doctors for kids. You treat everything from common colds to serious diseases. It requires excellent medical skills and the ability to communicate with worried parents and scared children.",
      "day_in_life": ["Check growth charts", "Administer vaccines", "Diagnose childhood illnesses"],
      "tags": ["Medical", "Kids", "Care"]
    },
    "meta": {
      "popularity_rank": 25,
      "search_keywords": ["doctor", "child", "baby", "health"],
      "related_career_ids": ["health_general_surgeon", "edu_primary_teacher"]
    }
  },
  {
    "id": "health_orthopedic_surgeon",
    "title": "Orthopedic Surgeon",
    "domain": "Healthcare",
    "slug": "orthopedic-surgeon",
    "match_profile": {
      "interests": ["bones", "mechanics", "surgery", "sports"],
      "personality": ["decisive", "confident", "manual_dexterity", "practical"],
      "work_style": ["hospital_based", "physical", "high_pressure", "sterile"],
      "deal_breakers": ["weak_stomach", "sedentary", "low_stakes"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "MBBS + MS Orthopedics",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1500000,
      "max": 5000000,
      "display_range": "₹15L - ₹50L+ per year",
      "pay_structure": "Salary + Surgery Fees"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Robotic joint replacements are becoming standard practice."
    },
    "content": {
      "short_desc": "Treats injuries and diseases of the skeletal system.",
      "long_desc": "Orthopedic Surgeons fix broken bones and replace joints. It is often called 'carpentry for the body' because you use drills and screws. It is physically demanding and highly paid.",
      "day_in_life": ["Perform knee/hip surgeries", "Review X-rays", "Consult patients on recovery"],
      "tags": ["Medical", "High Pay", "Surgery"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["bones", "doctor", "fracture", "surgery"],
      "related_career_ids": ["health_general_surgeon", "health_physiotherapist"]
    }
  },
  {
    "id": "legal_paralegal",
    "title": "Paralegal",
    "domain": "Legal",
    "slug": "paralegal",
    "match_profile": {
      "interests": ["law", "research", "organization", "writing"],
      "personality": ["detail_oriented", "organized", "reliable", "efficient"],
      "work_style": ["office_based", "deadline_driven", "administrative", "support"],
      "deal_breakers": ["public_speaking", "chaos", "high_risk_decisions"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Paralegal Certification / LLB",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 600000,
      "display_range": "₹2.5L - ₹6L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "High",
      "future_trend": "Document review is automating; roles shifting to case management."
    },
    "content": {
      "short_desc": "Assists lawyers by conducting research and drafting documents.",
      "long_desc": "Paralegals are the backbone of a law firm. You organize files, draft legal documents, and research precedents. It is a great entry point into the legal world without the stress of arguing in court.",
      "day_in_life": ["Organize case files", "Draft affidavits", "Schedule client meetings"],
      "tags": ["Legal", "Admin", "Support"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["lawyer", "assistant", "legal", "firm"],
      "related_career_ids": ["legal_litigation_lawyer", "business_operations_manager"]
    }
  },
  {
    "id": "creative_photographer",
    "title": "Photographer",
    "domain": "Arts & Design",
    "slug": "photographer",
    "match_profile": {
      "interests": ["visuals", "cameras", "travel", "art"],
      "personality": ["observant", "creative", "patient", "social"],
      "work_style": ["field_work", "freelance", "visual", "irregular_hours"],
      "deal_breakers": ["desk_job", "routine", "corporate_structure"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Photography / Portfolio",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 1200000,
      "display_range": "₹2L - ₹12L per year",
      "pay_structure": "Freelance / Per Shoot"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Stock photography is dying due to AI; weddings/events remain safe."
    },
    "content": {
      "short_desc": "Captures images for art, media, or events.",
      "long_desc": "Photographers tell stories with light. You might shoot weddings, fashion, or news. It requires technical skill with cameras and editing software, plus the business hustle to find clients.",
      "day_in_life": ["Shoot photos on location", "Edit images in Lightroom", "Market services to clients"],
      "tags": ["Creative", "Visual", "Travel"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["camera", "photo", "wedding", "studio"],
      "related_career_ids": ["media_video_editor", "creative_graphic_designer"]
    }
  },
  {
    "id": "creative_musician",
    "title": "Professional Musician",
    "domain": "Arts & Design",
    "slug": "musician",
    "match_profile": {
      "interests": ["music", "performing", "sound", "creativity"],
      "personality": ["expressive", "disciplined", "emotional", "resilient"],
      "work_style": ["performance_based", "night_shifts", "public", "unpredictable"],
      "deal_breakers": ["stability", "silence", "morning_routine"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Music / Practice",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 100000,
      "max": 2000000,
      "display_range": "Variable (Gig Economy)",
      "pay_structure": "Gig Fees / Royalties"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Medium",
      "future_trend": "Live performance demand is high; recording income is dropping."
    },
    "content": {
      "short_desc": "Performs or composes music for audiences.",
      "long_desc": "Musicians entertain the world. You might play in a band, an orchestra, or produce beats. It is a passion-driven career with high instability but immense emotional reward.",
      "day_in_life": ["Practice instrument", "Perform at venues", "Record in studio"],
      "tags": ["Creative", "Music", "Performance"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["artist", "band", "singer", "guitar"],
      "related_career_ids": ["media_sound_engineer", "creative_art_director"]
    }
  },
  {
    "id": "business_real_estate_agent",
    "title": "Real Estate Agent",
    "domain": "Business",
    "slug": "real-estate-agent",
    "match_profile": {
      "interests": ["property", "sales", "networking", "homes"],
      "personality": ["persuasive", "social", "ambitious", "hustler"],
      "work_style": ["field_work", "commission_based", "flexible_hours", "social"],
      "deal_breakers": ["fixed_salary_only", "introversion", "desk_bound"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Any Degree / RERA License",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 3000000,
      "display_range": "₹3L - ₹30L+ (Commission)",
      "pay_structure": "Commission"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Virtual tours help, but closing high-value deals remains human."
    },
    "content": {
      "short_desc": "Helps clients buy, sell, and rent properties.",
      "long_desc": "Real Estate Agents connect people with homes. You show properties, negotiate prices, and handle paperwork. Success depends entirely on your ability to build a network and close deals.",
      "day_in_life": ["Show homes to buyers", "Cold call property owners", "Negotiate sale terms"],
      "tags": ["Sales", "Business", "Property"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["property", "broker", "sales", "housing"],
      "related_career_ids": ["sales_b2b_sales_manager", "creative_interior_designer"]
    }
  },
  {
    "id": "business_business_analyst",
    "title": "Business Analyst (IT)",
    "domain": "Business",
    "slug": "business-analyst",
    "match_profile": {
      "interests": ["data", "efficiency", "communication", "technology"],
      "personality": ["analytical", "inquisitive", "diplomatic", "structured"],
      "work_style": ["office_based", "collaborative", "meeting_heavy", "problem_solving"],
      "deal_breakers": ["pure_coding", "manual_labor", "vagueness"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "IT / MBA",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1800000,
      "display_range": "₹6L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Demand growing for analysts who can interpret AI-driven insights."
    },
    "content": {
      "short_desc": "Identifies business needs and finds technical solutions.",
      "long_desc": "Business Analysts speak two languages: business and code. You talk to stakeholders to understand what they need, then write technical requirements for developers to build.",
      "day_in_life": ["Gather requirements from clients", "Create flowcharts", "Review features with dev team"],
      "tags": ["Tech", "Business", "Corporate"]
    },
    "meta": {
      "popularity_rank": 20,
      "search_keywords": ["it", "requirements", "agile", "bridge"],
      "related_career_ids": ["tech_product_manager", "tech_systems_analyst"]
    }
  },
  {
    "id": "trade_solar_installer",
    "title": "Solar PV Installer",
    "domain": "Skilled Trade",
    "slug": "solar-installer",
    "match_profile": {
      "interests": ["energy", "environment", "mechanics", "roofs"],
      "personality": ["practical", "hardworking", "safety_conscious", "outdoor"],
      "work_style": ["field_work", "heights", "physical", "technical"],
      "deal_breakers": ["fear_of_heights", "office_job", "ac_comfort"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "ITI Electrical / Solar Cert",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Wage + Project Bonus"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Low",
      "future_trend": "Massive growth sector as the world shifts to renewable energy."
    },
    "content": {
      "short_desc": "Installs and maintains solar panels on rooftops.",
      "long_desc": "Solar Installers are building the green energy future. You mount panels on roofs, wire them to inverters, and ensure they generate power. It is physically demanding work performed outdoors.",
      "day_in_life": ["Mount racking on roofs", "Install solar panels", "Connect electrical wiring"],
      "tags": ["Trade", "Green Energy", "Hands-on"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["solar", "energy", "technician", "green"],
      "related_career_ids": ["trade_electrician", "eng_electrical_engineer"]
    }
  },
  {
    "id": "trade_mason",
    "title": "Mason / Bricklayer",
    "domain": "Skilled Trade",
    "slug": "mason",
    "match_profile": {
      "interests": ["building", "concrete", "physical_work", "structures"],
      "personality": ["steady", "strong", "detail_oriented", "practical"],
      "work_style": ["field_work", "heavy_labor", "outdoor", "team_based"],
      "deal_breakers": ["weak_back", "computer_work", "cleanliness"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "ITI / Apprenticeship",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 600000,
      "display_range": "₹2.5L - ₹6L per year",
      "pay_structure": "Daily Wage / Contract"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "3D printed houses are emerging, but manual repair remains essential."
    },
    "content": {
      "short_desc": "Builds structures using bricks, concrete, and stone.",
      "long_desc": "Masons build the foundations of society. You lay bricks, pour concrete, and build walls. It is hard physical labor that produces tangible, lasting results.",
      "day_in_life": ["Mix concrete", "Lay bricks for walls", "Plaster surfaces"],
      "tags": ["Trade", "Construction", "Hard Work"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["construction", "builder", "cement", "house"],
      "related_career_ids": ["eng_civil_engineer", "trade_carpenter"]
    }
  },
  {
    "id": "service_firefighter",
    "title": "Firefighter",
    "domain": "Public Service",
    "slug": "firefighter",
    "match_profile": {
      "interests": ["saving_lives", "fitness", "teamwork", "adrenaline"],
      "personality": ["brave", "selfless", "calm", "disciplined"],
      "work_style": ["shift_work", "hazardous", "physical", "team_based"],
      "deal_breakers": ["cowardice", "weakness", "predictability"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Fire Safety Diploma",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 900000,
      "display_range": "₹3L - ₹9L per year",
      "pay_structure": "Govt Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Climate change is increasing wildfire frequency, requiring more staff."
    },
    "content": {
      "short_desc": "Responds to fires and medical emergencies to save lives.",
      "long_desc": "Firefighters are first responders. You put out fires, rescue people from accidents, and handle hazardous materials. It involves long periods of waiting followed by moments of extreme danger.",
      "day_in_life": ["Maintain equipment", "Physical training", "Respond to emergency calls"],
      "tags": ["Action", "Service", "Hero"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["fire", "rescue", "emergency", "hero"],
      "related_career_ids": ["govt_police_officer", "health_paramedic"]
    }
  },
  {
    "id": "transport_ship_captain",
    "title": "Merchant Navy Officer",
    "domain": "Transportation",
    "slug": "ship-captain",
    "match_profile": {
      "interests": ["ocean", "navigation", "leadership", "travel"],
      "personality": ["authoritative", "resilient", "responsible", "loner"],
      "work_style": ["offshore", "long_term_away", "shift_work", "isolated"],
      "deal_breakers": ["seasickness", "family_attachment", "daily_commute"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "B.Sc Nautical Science",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 6000000,
      "display_range": "₹10L - ₹60L+ (Tax Free often)",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Autonomous ships are being tested, but captains will remain for oversight."
    },
    "content": {
      "short_desc": "Commands merchant ships transporting cargo globally.",
      "long_desc": "Merchant Navy Officers navigate massive ships across oceans. You spend months at sea, earning a very high tax-free salary. It requires mental toughness to handle isolation and rough seas.",
      "day_in_life": ["Navigate ship course", "Supervise deck crew", "Manage cargo loading"],
      "tags": ["Travel", "High Pay", "Adventure"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["sea", "navy", "cargo", "captain"],
      "related_career_ids": ["science_marine_biologist", "transport_commercial_pilot"]
    }
  },
  {
    "id": "tech_network_engineer",
    "title": "Network Engineer",
    "domain": "Technology",
    "slug": "network-engineer",
    "match_profile": {
      "interests": ["internet", "hardware", "connectivity", "troubleshooting"],
      "personality": ["logical", "patient", "detail_oriented", "systematic"],
      "work_style": ["on_site", "server_room", "technical", "critical_response"],
      "deal_breakers": ["coding_only", "creative_writing", "sales"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / IT / CCNA Cert",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "5G and Edge computing expansion driving demand."
    },
    "content": {
      "short_desc": "Designs and manages computer networks.",
      "long_desc": "Network Engineers ensure the internet works. You configure routers, switches, and firewalls to keep data flowing. You work in data centers and offices, often troubleshooting outages.",
      "day_in_life": ["Configure routers/switches", "Troubleshoot connectivity", "Monitor network traffic"],
      "tags": ["Tech", "Infrastructure", "Hardware"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["internet", "cisco", "wifi", "server"],
      "related_career_ids": ["tech_cybersecurity_analyst", "tech_devops_engineer"]
    }
  },
  {
    "id": "tech_qa_engineer",
    "title": "QA Automation Engineer",
    "domain": "Technology",
    "slug": "qa-engineer",
    "match_profile": {
      "interests": ["breaking_things", "coding", "quality", "logic"],
      "personality": ["critical", "meticulous", "skeptical", "persistent"],
      "work_style": ["sedentary", "repetitive", "detail_heavy", "collaborative"],
      "deal_breakers": ["big_picture_only", "customer_support", "chaos"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS or Bootcamp",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 450000,
      "max": 1800000,
      "display_range": "₹4.5L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Manual testing is dead; role is shifting to writing AI testing scripts."
    },
    "content": {
      "short_desc": "Writes code to automatically test software for bugs.",
      "long_desc": "QA Engineers ensure software doesn't crash. You write scripts that simulate user actions to find bugs before the customers do. It is a critical gatekeeping role in software development.",
      "day_in_life": ["Write test scripts in Selenium", "Report bugs to developers", "Verify fixes"],
      "tags": ["Tech", "Quality", "Coding"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["testing", "bugs", "automation", "selenium"],
      "related_career_ids": ["tech_frontend_engineer", "tech_devops_engineer"]
    }
  },
  {
    "id": "eng_robotics_engineer",
    "title": "Robotics Engineer",
    "domain": "Engineering",
    "slug": "robotics-engineer",
    "match_profile": {
      "interests": ["robots", "coding", "mechanics", "ai"],
      "personality": ["innovative", "logical", "persistent", "curious"],
      "work_style": ["lab_based", "R&D", "technical", "hands_on"],
      "deal_breakers": ["routine", "low_tech", "paperwork"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Mechatronics / Robotics",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2200000,
      "display_range": "₹6L - ₹22L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Low",
      "future_trend": "Central to manufacturing and logistics automation."
    },
    "content": {
      "short_desc": "Designs and builds robots and autonomous systems.",
      "long_desc": "Robotics Engineers build the future. You combine mechanical engineering, electronics, and coding to create machines that can walk, talk, or assemble cars. It is one of the most exciting fields in tech.",
      "day_in_life": ["Design robot parts", "Program robot movements", "Test prototypes"],
      "tags": ["Tech", "Future", "Engineering"]
    },
    "meta": {
      "popularity_rank": 15,
      "search_keywords": ["robot", "ai", "automation", "mechatronics"],
      "related_career_ids": ["eng_mechanical_engineer", "tech_ai_researcher"]
    }
  },
  {
    "id": "eng_environmental_engineer",
    "title": "Environmental Engineer",
    "domain": "Engineering",
    "slug": "environmental-engineer",
    "match_profile": {
      "interests": ["nature", "sustainability", "engineering", "water"],
      "personality": ["responsible", "ethical", "analytical", "practical"],
      "work_style": ["hybrid", "field_work", "regulatory", "impact_driven"],
      "deal_breakers": ["pollution", "corporate_greed", "desk_only"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Environmental / Civil Eng",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Crucial for climate change mitigation and water management."
    },
    "content": {
      "short_desc": "Develops solutions to environmental problems like pollution.",
      "long_desc": "Environmental Engineers clean up the planet. You design water treatment plants, waste management systems, and pollution control devices. You work to ensure human activity doesn't destroy nature.",
      "day_in_life": ["Design water treatment systems", "Inspect industrial sites", "Analyze pollution data"],
      "tags": ["Green", "Engineering", "Social Impact"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["green", "water", "pollution", "climate"],
      "related_career_ids": ["eng_civil_engineer", "science_marine_biologist"]
    }
  },
  {
    "id": "media_social_media_manager",
    "title": "Social Media Manager",
    "domain": "Media & Marketing",
    "slug": "social-media-manager",
    "match_profile": {
      "interests": ["instagram", "trends", "content", "people"],
      "personality": ["creative", "social", "adaptable", "witty"],
      "work_style": ["remote_friendly", "always_online", "fast_paced", "visual"],
      "deal_breakers": ["slow_pace", "math", "privacy"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Marketing / Arts",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1000000,
      "display_range": "₹3L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "High",
      "future_trend": "Content creation is automating; role shifting to community management."
    },
    "content": {
      "short_desc": "Manages brand presence on platforms like Instagram and LinkedIn.",
      "long_desc": "SMMs are the voice of a brand online. You create content, reply to comments, and jump on trends to grow followers. It requires being glued to your phone and understanding internet culture.",
      "day_in_life": ["Create reels/posts", "Reply to comments", "Analyze engagement metrics"],
      "tags": ["Creative", "Marketing", "Social"]
    },
    "meta": {
      "popularity_rank": 10,
      "search_keywords": ["instagram", "influencer", "marketing", "content"],
      "related_career_ids": ["business_digital_marketing_manager", "media_content_writer"]
    }
  },
  {
    "id": "edu_librarian",
    "title": "Librarian / Information Scientist",
    "domain": "Education",
    "slug": "librarian",
    "match_profile": {
      "interests": ["books", "research", "organizing", "helping_people"],
      "personality": ["quiet", "organized", "helpful", "curious"],
      "work_style": ["on_site", "quiet", "service_oriented", "structured"],
      "deal_breakers": ["noise", "sales_pressure", "chaos"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Library Science (M.Lib)",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 900000,
      "display_range": "₹3L - ₹9L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Medium",
      "future_trend": "Transforming into digital information management and community hubs."
    },
    "content": {
      "short_desc": "Manages information resources and helps people find knowledge.",
      "long_desc": "Librarians are guardians of knowledge. You organize collections, help researchers find data, and run community programs. Modern librarians are experts in digital databases as much as books.",
      "day_in_life": ["Catalog new books/media", "Assist researchers", "Organize library events"],
      "tags": ["Education", "Books", "Quiet"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["books", "research", "archive", "school"],
      "related_career_ids": ["edu_school_counselor", "science_physicist"]
    }
  },
  {
    "id": "hospitality_travel_agent",
    "title": "Luxury Travel Consultant",
    "domain": "Hospitality",
    "slug": "travel-agent",
    "match_profile": {
      "interests": ["travel", "geography", "planning", "luxury"],
      "personality": ["organized", "enthusiastic", "service_oriented", "persuasive"],
      "work_style": ["office_based", "sales_oriented", "detail_heavy", "social"],
      "deal_breakers": ["staying_home", "boring_routine", "low_budget"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Travel & Tourism",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1200000,
      "display_range": "₹3L - ₹12L per year",
      "pay_structure": "Salary + Commission"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "High",
      "future_trend": "Basic booking is dead; demand is for complex, curated experiences."
    },
    "content": {
      "short_desc": "Plans and books complex travel itineraries for clients.",
      "long_desc": "Travel Consultants create dream vacations. You don't just book flights; you design experiences, handling logistics for safaris or cruises. You need to know the world better than your clients do.",
      "day_in_life": ["Design itineraries", "Book flights/hotels", "Resolve traveler issues"],
      "tags": ["Travel", "Sales", "Service"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["holiday", "tourism", "planning", "flight"],
      "related_career_ids": ["hospitality_hotel_manager", "transport_cabin_crew"]
    }
  },
  {
    "id": "science_astronomer",
    "title": "Astronomer",
    "domain": "Science",
    "slug": "astronomer",
    "match_profile": {
      "interests": ["space", "stars", "math", "coding"],
      "personality": ["patient", "intellectual", "curious", "night_owl"],
      "work_style": ["lab_based", "computer_heavy", "night_shifts", "solitary"],
      "deal_breakers": ["immediate_results", "noise", "daytime_only"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "PhD Astronomy / Astrophysics",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1800000,
      "display_range": "₹6L - ₹18L per year",
      "pay_structure": "Salary + Grants"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Space exploration boom is increasing funding for research."
    },
    "content": {
      "short_desc": "Observes and analyzes stars, planets, and galaxies.",
      "long_desc": "Astronomers study the universe. You use massive telescopes and computer code to analyze light from distant stars. It requires advanced math and coding skills, often working at night in remote observatories.",
      "day_in_life": ["Analyze telescope data", "Write python scripts", "Publish discoveries"],
      "tags": ["Space", "Science", "Research"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["space", "nasa", "stars", "telescope"],
      "related_career_ids": ["science_physicist", "eng_aerospace_engineer"]
    }
  },
  {
    "id": "edu_special_education_teacher",
    "title": "Special Education Teacher",
    "domain": "Education",
    "slug": "special-education-teacher",
    "match_profile": {
      "interests": ["teaching", "psychology", "helping_people", "patience"],
      "personality": ["compassionate", "patient", "adaptable", "observant"],
      "work_style": ["school_based", "one_on_one", "emotional", "structured"],
      "deal_breakers": ["impatience", "fast_pace", "corporate_metrics"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "B.Ed Special Education",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 900000,
      "display_range": "₹3L - ₹9L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Increasing diagnosis of learning disabilities driving demand for specialists."
    },
    "content": {
      "short_desc": "Teaches students with learning, mental, or physical disabilities.",
      "long_desc": "Special Education Teachers adapt lessons for students who learn differently. You work with autism, dyslexia, or physical challenges, creating individual education plans (IEPs). It requires immense heart and specialized skills.",
      "day_in_life": ["Create individualized lesson plans", "Teach small groups", "Collaborate with parents and therapists"],
      "tags": ["Education", "Social Impact", "Patience"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["teacher", "disability", "school", "autism"],
      "related_career_ids": ["edu_school_counselor", "health_occupational_therapist"]
    }
  },
  {
    "id": "tech_database_administrator",
    "title": "Database Administrator (DBA)",
    "domain": "Technology",
    "slug": "database-administrator",
    "match_profile": {
      "interests": ["data", "security", "efficiency", "order"],
      "personality": ["reliable", "careful", "detail_oriented", "systematic"],
      "work_style": ["sedentary", "back_end", "critical_response", "technical"],
      "deal_breakers": ["creativity", "sales", "public_speaking"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / IT",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Shift towards 'Data Engineer' roles as cloud databases automate maintenance."
    },
    "content": {
      "short_desc": "Ensures data is stored securely and can be retrieved quickly.",
      "long_desc": "DBAs are the librarians of digital data. You manage SQL databases, ensure backups are running, and optimize speed. If the database goes down, the whole company stops, so reliability is key.",
      "day_in_life": ["Monitor database performance", "Perform backups", "Grant user access permissions"],
      "tags": ["Tech", "Data", "Infrastructure"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["sql", "oracle", "server", "data"],
      "related_career_ids": ["tech_backend_engineer", "tech_data_scientist"]
    }
  },
  {
    "id": "health_paramedic",
    "title": "Paramedic / EMT",
    "domain": "Healthcare",
    "slug": "paramedic",
    "match_profile": {
      "interests": ["emergency", "saving_lives", "driving", "medicine"],
      "personality": ["calm", "decisive", "brave", "resilient"],
      "work_style": ["field_work", "hazardous", "shift_work", "high_pressure"],
      "deal_breakers": ["squeamishness", "office_routine", "slow_pace"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Emergency Medical Technician",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 700000,
      "display_range": "₹2.5L - ₹7L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Critical role; expanding to include community paramedicine care."
    },
    "content": {
      "short_desc": "Provides emergency medical care in ambulances.",
      "long_desc": "Paramedics are the first to arrive at an accident. You stabilize patients, treat wounds, and rush them to the hospital. It is physically and emotionally demanding but directly saves lives.",
      "day_in_life": ["Respond to 108 calls", "Perform CPR/First Aid", "Transport patients safely"],
      "tags": ["Healthcare", "Action", "Service"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["ambulance", "emergency", "medical", "rescue"],
      "related_career_ids": ["health_registered_nurse", "service_firefighter"]
    }
  },
  {
    "id": "creative_animator",
    "title": "Animator",
    "domain": "Arts & Design",
    "slug": "animator",
    "match_profile": {
      "interests": ["drawing", "cartoons", "technology", "storytelling"],
      "personality": ["creative", "patient", "detail_oriented", "imaginative"],
      "work_style": ["studio_based", "computer_heavy", "collaborative", "visual"],
      "deal_breakers": ["rushing", "math", "corporate_suits"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Animation / Graphic Design",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Salary or Project Fee"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "3D animation for games/movies is growing; 2D is becoming niche."
    },
    "content": {
      "short_desc": "Creates moving images for movies, games, and ads.",
      "long_desc": "Animators bring drawings to life. You use software like Maya or Blender to create characters that move and act. It requires artistic skill and extreme patience—seconds of film take weeks to animate.",
      "day_in_life": ["Draw storyboards", "Rig 3D models", "Keyframe movement"],
      "tags": ["Creative", "Tech", "Visual"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["cartoon", "3d", "movie", "design"],
      "related_career_ids": ["creative_graphic_designer", "tech_game_developer"]
    }
  },
  {
    "id": "trade_machinist",
    "title": "CNC Machinist",
    "domain": "Skilled Trade",
    "slug": "cnc-machinist",
    "match_profile": {
      "interests": ["metal", "machines", "precision", "making_things"],
      "personality": ["precise", "focused", "practical", "technical"],
      "work_style": ["factory_based", "technical", "repetitive", "hands_on"],
      "deal_breakers": ["messiness", "abstract_theory", "customer_service"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "ITI Machinist / Tool & Die",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 900000,
      "display_range": "₹3L - ₹9L per year",
      "pay_structure": "Wage + Overtime"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Shift from manual operation to programming automated CNC machines."
    },
    "content": {
      "short_desc": "Operates precision machinery to cut and shape metal parts.",
      "long_desc": "Machinists use lathes and mills to make metal parts for engines and machines. You program Computer Numerical Control (CNC) machines to cut metal to within a hair's width of accuracy.",
      "day_in_life": ["Read technical blueprints", "Program CNC machine", "Measure parts with calipers"],
      "tags": ["Trade", "Manufacturing", "Precision"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["factory", "metal", "tool", "manufacturing"],
      "related_career_ids": ["trade_welder", "eng_mechanical_engineer"]
    }
  },
  {
    "id": "business_insurance_agent",
    "title": "Insurance Agent",
    "domain": "Business",
    "slug": "insurance-agent",
    "match_profile": {
      "interests": ["sales", "security", "money", "people"],
      "personality": ["persuasive", "resilient", "social", "trustworthy"],
      "work_style": ["field_work", "commission_based", "flexible_hours", "social"],
      "deal_breakers": ["introversion", "fixed_salary_only", "isolation"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "12th Pass + IRDA Exam",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 1500000,
      "display_range": "₹2L - ₹15L+ (Commission)",
      "pay_structure": "Commission"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Online sales growing, but complex life/health policies still need agents."
    },
    "content": {
      "short_desc": "Sells life, health, and car insurance policies.",
      "long_desc": "Insurance Agents sell financial protection. You explain complex policies to clients and convince them to buy coverage. It is a sales job where building long-term trust is essential for renewals.",
      "day_in_life": ["Meet potential clients", "Explain policy benefits", "Assist with claims"],
      "tags": ["Sales", "Finance", "Business"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["sales", "policy", "lic", "finance"],
      "related_career_ids": ["business_real_estate_agent", "finance_financial_analyst"]
    }
  },
  {
    "id": "science_biomedical_researcher",
    "title": "Biomedical Researcher",
    "domain": "Science",
    "slug": "biomedical-researcher",
    "match_profile": {
      "interests": ["disease", "biology", "cures", "lab"],
      "personality": ["analytical", "persistent", "curious", "intellectual"],
      "work_style": ["lab_based", "academic", "long_term_goals", "sedentary"],
      "deal_breakers": ["quick_results", "sales", "public_attention"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "PhD Biomedical Science",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary + Grants"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Post-pandemic focus on immunology and vaccine research."
    },
    "content": {
      "short_desc": "Conducts experiments to find cures for diseases.",
      "long_desc": "Researchers spend years in labs to understand cancer, viruses, or genetics. You conduct experiments, analyze data, and publish findings. Your work creates the medicines of the future.",
      "day_in_life": ["Design experiments", "Test drug reactions", "Write grant applications"],
      "tags": ["Science", "Research", "Health"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["cancer", "drug", "lab", "scientist"],
      "related_career_ids": ["science_microbiologist", "health_pharmacist"]
    }
  },
  {
    "id": "tech_blockchain_developer",
    "title": "Blockchain Developer",
    "domain": "Technology",
    "slug": "blockchain-developer",
    "match_profile": {
      "interests": ["crypto", "coding", "finance", "decentralization"],
      "personality": ["innovative", "logical", "risk_tolerant", "independent"],
      "work_style": ["remote_friendly", "cutting_edge", "screen_heavy", "complex"],
      "deal_breakers": ["tradition", "regulation", "simple_tasks"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / Cryptography",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 4000000,
      "display_range": "₹10L - ₹40L per year",
      "pay_structure": "Salary + Tokens"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Expanding beyond crypto into supply chain and secure identity verification."
    },
    "content": {
      "short_desc": "Builds decentralized applications and smart contracts.",
      "long_desc": "Blockchain Developers build the 'Web3'. You write smart contracts using Solidity or Rust for finance (DeFi) or NFTs. It is a volatile but extremely high-paying niche in tech.",
      "day_in_life": ["Write smart contracts", "Audit code for security", "Integrate wallets"],
      "tags": ["Tech", "Crypto", "High Pay"]
    },
    "meta": {
      "popularity_rank": 20,
      "search_keywords": ["bitcoin", "ethereum", "web3", "coding"],
      "related_career_ids": ["tech_backend_engineer", "finance_investment_banker"]
    }
  },
  {
    "id": "creative_makeup_artist",
    "title": "Professional Makeup Artist",
    "domain": "Arts & Design",
    "slug": "makeup-artist",
    "match_profile": {
      "interests": ["beauty", "faces", "art", "fashion"],
      "personality": ["creative", "social", "perceptive", "patient"],
      "work_style": ["field_work", "standing", "client_facing", "visual"],
      "deal_breakers": ["desk_job", "bad_lighting", "isolation"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Cosmetology / Portfolio",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 1500000,
      "display_range": "₹2L - ₹15L per year",
      "pay_structure": "Freelance / Per Event"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Social media 'glam' culture driving high demand for weddings/events."
    },
    "content": {
      "short_desc": "Applies makeup for weddings, movies, or fashion shoots.",
      "long_desc": "Makeup Artists use the face as a canvas. You might work on brides to make them feel beautiful or on actors to make them look like monsters. Hygiene and color theory are essential skills.",
      "day_in_life": ["Consult with clients", "Apply makeup", "Sanitize tools"],
      "tags": ["Creative", "Fashion", "Beauty"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["beauty", "salon", "bride", "cosmetics"],
      "related_career_ids": ["creative_fashion_designer", "creative_photographer"]
    }
  },
  {
    "id": "transport_truck_driver",
    "title": "Truck Driver (Logistics)",
    "domain": "Transportation",
    "slug": "truck-driver",
    "match_profile": {
      "interests": ["driving", "roads", "solitude", "machines"],
      "personality": ["alert", "independent", "patient", "reliable"],
      "work_style": ["travel_heavy", "sedentary", "solitary", "long_hours"],
      "deal_breakers": ["office_politics", "constant_talking", "micromanagement"]
    },
    "requirements": {
      "education_level": "license",
      "degree_field": "Heavy Vehicle License (HGV)",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Wage + Trip Allowance"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "High",
      "future_trend": "Self-driving trucks are coming, but local delivery remains human."
    },
    "content": {
      "short_desc": "Transports goods over long distances via truck.",
      "long_desc": "Truck Drivers keep the economy moving. You drive massive vehicles across the country delivering food, fuel, and goods. It is a lonely lifestyle but offers freedom from a boss looking over your shoulder.",
      "day_in_life": ["Inspect truck safety", "Drive long haul routes", "Manage cargo logs"],
      "tags": ["Transport", "Travel", "Essential"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["driver", "logistics", "road", "transport"],
      "related_career_ids": ["transport_train_driver", "trade_mechanic"]
    }
  },
  {
    "id": "legal_company_secretary",
    "title": "Company Secretary (CS)",
    "domain": "Legal",
    "slug": "company-secretary",
    "match_profile": {
      "interests": ["law", "compliance", "business", "governance"],
      "personality": ["ethical", "organized", "detail_oriented", "responsible"],
      "work_style": ["office_based", "regulatory", "administrative", "high_stakes"],
      "deal_breakers": ["creative_interpretation", "chaos", "sales"]
    },
    "requirements": {
      "education_level": "certification",
      "degree_field": "ICSI Certification",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2500000,
      "display_range": "₹6L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Increasing corporate regulations make this a mandatory, stable role."
    },
    "content": {
      "short_desc": "Ensures a company follows all legal and statutory regulations.",
      "long_desc": "Company Secretaries are the conscience of a corporation. You ensure the board of directors follows the law, file government returns, and manage shareholder meetings. It is a high-ranking corporate role.",
      "day_in_life": ["Prepare board meeting minutes", "File regulatory documents", "Advise directors on law"],
      "tags": ["Corporate", "Law", "Stable"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["compliance", "law", "board", "corporate"],
      "related_career_ids": ["finance_chartered_accountant", "legal_corporate_lawyer"]
    }
  },
  {
    "id": "service_chef_baker",
    "title": "Pastry Chef / Baker",
    "domain": "Hospitality",
    "slug": "pastry-chef",
    "match_profile": {
      "interests": ["baking", "sweets", "precision", "chemistry"],
      "personality": ["meticulous", "creative", "patient", "early_riser"],
      "work_style": ["kitchen_based", "early_hours", "precise", "physical"],
      "deal_breakers": ["messy_cooking", "sleeping_in", "office_work"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Culinary Arts (Pastry)",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1000000,
      "display_range": "₹3L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Boutique bakeries and custom wedding cakes driving demand."
    },
    "content": {
      "short_desc": "Specializes in making desserts, breads, and pastries.",
      "long_desc": "Pastry Chefs are the scientists of the kitchen. Unlike regular cooking, baking requires exact measurements and chemistry. You create cakes, chocolates, and artisan breads.",
      "day_in_life": ["Measure ingredients precisely", "Decorate wedding cakes", "Bake bread at 4 AM"],
      "tags": ["Creative", "Food", "Hands-on"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["cake", "bakery", "dessert", "food"],
      "related_career_ids": ["hospitality_head_chef", "creative_food_stylist"]
    }
  },
  {
    "id": "science_meteorologist",
    "title": "Meteorologist",
    "domain": "Science",
    "slug": "meteorologist",
    "match_profile": {
      "interests": ["weather", "climate", "data", "physics"],
      "personality": ["analytical", "communicative", "observant", "scientific"],
      "work_style": ["office/lab", "computer_heavy", "predictive", "public"],
      "deal_breakers": ["guessing", "politics", "manual_labor"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Meteorology / Atmospheric Science",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Climate change is making extreme weather prediction more critical."
    },
    "content": {
      "short_desc": "Forecasts the weather and studies climate patterns.",
      "long_desc": "Meteorologists tell us if it will rain. You use supercomputers to model the atmosphere. You might work for the government, airlines, or as a TV weather presenter.",
      "day_in_life": ["Analyze satellite data", "Run weather models", "Present forecast"],
      "tags": ["Science", "Weather", "Data"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["rain", "climate", "news", "forecast"],
      "related_career_ids": ["science_geologist", "media_journalist"]
    }
  },
  {
    "id": "creative_translator",
    "title": "Translator / Interpreter",
    "domain": "Arts & Design",
    "slug": "translator",
    "match_profile": {
      "interests": ["languages", "culture", "writing", "reading"],
      "personality": ["articulate", "precise", "cultural", "patient"],
      "work_style": ["remote_friendly", "freelance", "intellectual", "focused"],
      "deal_breakers": ["monolingualism", "math", "noise"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Language Studies",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1000000,
      "display_range": "₹3L - ₹10L per year",
      "pay_structure": "Per Word / Per Hour"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "High",
      "future_trend": "Google Translate is good, but high-stakes legal/literary translation needs humans."
    },
    "content": {
      "short_desc": "Converts written or spoken words from one language to another.",
      "long_desc": "Translators bridge cultures. You convert documents or speeches into another language while preserving the original meaning and tone. Interpreters do this live during meetings.",
      "day_in_life": ["Translate documents", "Edit machine translations", "Interpret live calls"],
      "tags": ["Language", "Culture", "Remote"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["language", "foreign", "write", "global"],
      "related_career_ids": ["media_content_writer", "business_international_business"]
    }
  },
  {
    "id": "tech_cloud_architect",
    "title": "Cloud Architect",
    "domain": "Technology",
    "slug": "cloud-architect",
    "match_profile": {
      "interests": ["cloud", "system_design", "strategy", "infrastructure"],
      "personality": ["visionary", "logical", "authoritative", "organized"],
      "work_style": ["office_based", "high_level", "design_focused", "lucrative"],
      "deal_breakers": ["entry_level_tasks", "manual_coding", "small_scale"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS + AWS/Azure Certs",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 2000000,
      "max": 5000000,
      "display_range": "₹20L - ₹50L per year",
      "pay_structure": "Salary + Stocks"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Low",
      "future_trend": "Every company is moving to the cloud; architects determine how."
    },
    "content": {
      "short_desc": "Designs complex cloud computing strategies for companies.",
      "long_desc": "Cloud Architects are the city planners of the internet. You decide how a company uses AWS or Azure to store data and run apps securely and cheaply. It is a senior, high-paying role.",
      "day_in_life": ["Design cloud infrastructure diagrams", "Meeting with CTO", "Review security protocols"],
      "tags": ["Tech", "High Pay", "Leadership"]
    },
    "meta": {
      "popularity_rank": 10,
      "search_keywords": ["aws", "azure", "google_cloud", "architect"],
      "related_career_ids": ["tech_devops_engineer", "tech_backend_engineer"]
    }
  },
  {
    "id": "health_dietician",
    "title": "Clinical Dietitian",
    "domain": "Healthcare",
    "slug": "clinical-dietician",
    "match_profile": {
      "interests": ["nutrition", "biology", "healing", "food"],
      "personality": ["scientific", "empathetic", "strict", "organized"],
      "work_style": ["hospital_based", "patient_care", "structured", "clinical"],
      "deal_breakers": ["fad_diets", "cooking_only", "unscientific_claims"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "M.Sc Nutrition / Dietetics",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 900000,
      "display_range": "₹3L - ₹9L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Vital for managing rising lifestyle diseases like diabetes and obesity."
    },
    "content": {
      "short_desc": "Plans diets for patients with medical conditions.",
      "long_desc": "Clinical Dietitians work in hospitals. Unlike general nutritionists, you treat sick people. You calculate tube feeding needs for ICU patients or design low-sodium diets for heart patients.",
      "day_in_life": ["Assess patient nutritional needs", "Calculate calorie requirements", "Monitor patient progress"],
      "tags": ["Healthcare", "Food", "Science"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["hospital", "food", "health", "nutrition"],
      "related_career_ids": ["health_nutritionist", "health_registered_nurse"]
    }
  },
  {
    "id": "eng_mining_engineer",
    "title": "Mining Engineer",
    "domain": "Engineering",
    "slug": "mining-engineer",
    "match_profile": {
      "interests": ["mining", "geology", "machines", "explosives"],
      "personality": ["adventurous", "tough", "practical", "safety_conscious"],
      "work_style": ["remote_locations", "hazardous", "field_work", "industrial"],
      "deal_breakers": ["city_life", "clean_air", "office_politics"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Mining Engineering",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 2500000,
      "display_range": "₹8L - ₹25L per year",
      "pay_structure": "Salary + Hazard Pay"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Demand for lithium and cobalt for EV batteries is reviving this sector."
    },
    "content": {
      "short_desc": "Plans the extraction of minerals from the earth.",
      "long_desc": "Mining Engineers dig deep. You design open-pit or underground mines to get coal, gold, or copper out safely. It involves heavy machinery, explosives, and working in remote areas.",
      "day_in_life": ["Design mine layout", "Supervise blasting operations", "Ensure mine ventilation"],
      "tags": ["Engineering", "Industrial", "High Pay"]
    },
    "meta": {
      "popularity_rank": 90,
      "search_keywords": ["coal", "gold", "digging", "engineer"],
      "related_career_ids": ["science_geologist", "eng_petroleum_engineer"]
    }
  },
  {
    "id": "trade_plasterer",
    "title": "Plasterer",
    "domain": "Skilled Trade",
    "slug": "plasterer",
    "match_profile": {
      "interests": ["walls", "finishing", "manual_work", "artistry"],
      "personality": ["fast", "physical", "perfectionist", "messy"],
      "work_style": ["field_work", "physical_labor", "repetitive", "visual"],
      "deal_breakers": ["dust_allergy", "computer_work", "slow_pace"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Apprenticeship",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 600000,
      "display_range": "₹2.5L - ₹6L per year",
      "pay_structure": "Daily Wage / Contract"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Decorative plastering is a dying art commanding high fees."
    },
    "content": {
      "short_desc": "Applies plaster to walls and ceilings for a smooth finish.",
      "long_desc": "Plasterers make walls look good. You mix and apply wet plaster to brick or drywall. It is physically exhausting work that requires speed before the material dries.",
      "day_in_life": ["Mix plaster", "Apply coat to walls", "Sand for smooth finish"],
      "tags": ["Trade", "Construction", "Hands-on"]
    },
    "meta": {
      "popularity_rank": 95,
      "search_keywords": ["walls", "house", "construction", "repair"],
      "related_career_ids": ["trade_mason", "trade_painter"]
    }
  },
  {
    "id": "creative_acting_professional",
    "title": "Actor",
    "domain": "Arts & Design",
    "slug": "actor",
    "match_profile": {
      "interests": ["performing", "drama", "storytelling", "fame"],
      "personality": ["expressive", "confident", "emotional", "resilient"],
      "work_style": ["public", "unpredictable", "social", "project_based"],
      "deal_breakers": ["shyness", "stability", "anonymity"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Acting School / Portfolio",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 100000,
      "max": 10000000,
      "display_range": "High Variance (Gig Based)",
      "pay_structure": "Per Role / Daily"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "High",
      "future_trend": "AI avatars are taking background roles; human stars remain essential."
    },
    "content": {
      "short_desc": "Portrays characters in theater, film, or television.",
      "long_desc": "Actors embody other people. You memorize lines, understand emotions, and perform in front of cameras or audiences. It is a career of high rejection but massive potential reward.",
      "day_in_life": ["Audition for roles", "Rehearse lines", "Perform on set"],
      "tags": ["Creative", "Fame", "Performance"]
    },
    "meta": {
      "popularity_rank": 20,
      "search_keywords": ["movie", "star", "cinema", "drama"],
      "related_career_ids": ["creative_musician", "media_video_editor"]
    }
  },
  {
    "id": "mgmt_project_manager",
    "title": "Project Manager",
    "domain": "Management",
    "slug": "project-manager",
    "match_profile": {
      "interests": ["organizing", "leadership", "planning", "efficiency"],
      "personality": ["organized", "communicative", "decisive", "calm"],
      "work_style": ["office_based", "meeting_heavy", "deadline_driven", "collaborative"],
      "deal_breakers": ["chaos", "passive_role", "doing_everything_yourself"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "MBA / PMP Cert",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 3000000,
      "display_range": "₹10L - ₹30L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "AI handles scheduling; PMs focus on team alignment and stakeholder mgmt."
    },
    "content": {
      "short_desc": "Plans and executes projects to ensure they finish on time.",
      "long_desc": "Project Managers get things done. You define the timeline, assign tasks, and remove obstacles for your team. You are responsible for the success or failure of the project.",
      "day_in_life": ["Hold daily standup meetings", "Update project timeline", "Resolve team blockers"],
      "tags": ["Management", "Business", "Leadership"]
    },
    "meta": {
      "popularity_rank": 15,
      "search_keywords": ["manager", "plan", "agile", "leader"],
      "related_career_ids": ["tech_product_manager", "business_operations_manager"]
    }
  },
  {
    "id": "tech_mobile_developer",
    "title": "Mobile App Developer",
    "domain": "Technology",
    "slug": "mobile-app-developer",
    "match_profile": {
      "interests": ["coding", "smartphones", "design", "logic"],
      "personality": ["innovative", "detail_oriented", "patient", "practical"],
      "work_style": ["sedentary", "remote_friendly", "independent", "visual"],
      "deal_breakers": ["outdated_tech", "manual_labor", "no_creativity"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / App Development",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 2500000,
      "display_range": "₹5L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Shift towards cross-platform tools (Flutter) and AR apps."
    },
    "content": {
      "short_desc": "Builds applications for Android and iOS smartphones.",
      "long_desc": "Mobile Developers create the apps we use every day. You code in Swift (iOS) or Kotlin (Android) to build smooth, user-friendly experiences. It requires a mix of logical coding and an eye for interface design.",
      "day_in_life": ["Write code in Flutter/Swift", "Test app on different devices", "Fix crash reports"],
      "tags": ["Tech", "Coding", "Creative"]
    },
    "meta": {
      "popularity_rank": 12,
      "search_keywords": ["app", "android", "ios", "coding"],
      "related_career_ids": ["tech_frontend_engineer", "tech_game_developer"]
    }
  },
  {
    "id": "science_forensic_scientist",
    "title": "Forensic Scientist",
    "domain": "Science",
    "slug": "forensic-scientist",
    "match_profile": {
      "interests": ["crime", "chemistry", "justice", "puzzles"],
      "personality": ["objective", "meticulous", "rational", "observant"],
      "work_style": ["lab_based", "high_stakes", "evidence_driven", "quiet"],
      "deal_breakers": ["squeamishness", "emotional_decisions", "publicity"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Forensic Science",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary (Govt/Private)"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "DNA analysis tech is advancing rapidly, requiring constant upskilling."
    },
    "content": {
      "short_desc": "Analyzes crime scene evidence to help solve cases.",
      "long_desc": "Forensic Scientists use science to catch criminals. You analyze DNA, fingerprints, and ballistics in a lab. Your work provides the objective truth needed in court trials.",
      "day_in_life": ["Analyze DNA samples", "Test substances for drugs", "Write reports for court"],
      "tags": ["Science", "Law", "Investigation"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["csi", "crime", "lab", "evidence"],
      "related_career_ids": ["science_microbiologist", "govt_police_officer"]
    }
  },
  {
    "id": "legal_ip_lawyer",
    "title": "Intellectual Property (IP) Lawyer",
    "domain": "Legal",
    "slug": "ip-lawyer",
    "match_profile": {
      "interests": ["law", "technology", "art", "protecting_ideas"],
      "personality": ["analytical", "protective", "articulate", "precise"],
      "work_style": ["office_based", "research_heavy", "corporate", "detail_oriented"],
      "deal_breakers": ["criminal_law", "chaos", "low_pay"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "LLB + IP Specialization",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 3000000,
      "display_range": "₹8L - ₹30L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "AI copyright issues are creating a massive new legal field."
    },
    "content": {
      "short_desc": "Protects patents, copyrights, and trademarks.",
      "long_desc": "IP Lawyers protect ideas. You help inventors patent their tech or artists copyright their music. In the age of AI and software, this is one of the most lucrative fields of law.",
      "day_in_life": ["Draft patent applications", "Send cease-and-desist letters", "Research copyright infringement"],
      "tags": ["Law", "Corporate", "Tech"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["patent", "copyright", "lawyer", "tech"],
      "related_career_ids": ["legal_corporate_lawyer", "tech_software_engineer"]
    }
  },
  {
    "id": "health_optometrist",
    "title": "Optometrist",
    "domain": "Healthcare",
    "slug": "optometrist",
    "match_profile": {
      "interests": ["eyes", "health", "physics", "helping_people"],
      "personality": ["friendly", "precise", "routine_oriented", "patient"],
      "work_style": ["clinic_based", "clean", "regular_hours", "social"],
      "deal_breakers": ["blood", "emergency_calls", "high_stress"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "B.Optom",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1000000,
      "display_range": "₹3L - ₹10L per year",
      "pay_structure": "Salary or Practice"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Increased screen time is causing a surge in vision problems globally."
    },
    "content": {
      "short_desc": "Examines eyes and prescribes glasses or contact lenses.",
      "long_desc": "Optometrists are primary eye care providers. You test vision, prescribe glasses, and detect eye diseases. It offers a great work-life balance compared to other medical roles.",
      "day_in_life": ["Conduct eye exams", "Prescribe glasses", "Check for eye strain"],
      "tags": ["Medical", "Stable", "Healthcare"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["eyes", "glasses", "doctor", "vision"],
      "related_career_ids": ["health_dentist", "health_pharmacist"]
    }
  },
  {
    "id": "creative_film_director",
    "title": "Film Director",
    "domain": "Arts & Design",
    "slug": "film-director",
    "match_profile": {
      "interests": ["movies", "storytelling", "leadership", "visuals"],
      "personality": ["visionary", "authoritative", "creative", "passionate"],
      "work_style": ["project_based", "high_pressure", "collaborative", "chaotic"],
      "deal_breakers": ["9_to_5", "micromanagement", "playing_it_safe"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Film School / Portfolio",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 5000000,
      "display_range": "Variable (Project Based)",
      "pay_structure": "Project Fee"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Streaming platforms have increased demand, but competition is fierce."
    },
    "content": {
      "short_desc": "Directs the creative aspects of a film or video production.",
      "long_desc": "Directors are the captains of a movie set. You guide the actors, choose the camera angles, and execute your artistic vision. It requires leadership, artistic flair, and the ability to manage huge budgets.",
      "day_in_life": ["Direct actors on set", "Review script changes", "Oversee editing"],
      "tags": ["Creative", "Cinema", "Leadership"]
    },
    "meta": {
      "popularity_rank": 25,
      "search_keywords": ["movie", "cinema", "director", "art"],
      "related_career_ids": ["creative_acting_professional", "media_video_editor"]
    }
  },
  {
    "id": "eng_industrial_engineer",
    "title": "Industrial Engineer",
    "domain": "Engineering",
    "slug": "industrial-engineer",
    "match_profile": {
      "interests": ["efficiency", "systems", "math", "business"],
      "personality": ["logical", "organized", "practical", "analytical"],
      "work_style": ["factory/office", "process_oriented", "data_driven", "optimization"],
      "deal_breakers": ["waste", "inefficiency", "chaos"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Industrial Engineering",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1800000,
      "display_range": "₹5L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Key for optimizing automated factories and supply chains."
    },
    "content": {
      "short_desc": "Optimizes complex processes and systems to reduce waste.",
      "long_desc": "Industrial Engineers figure out how to do things better, faster, and cheaper. You analyze factory lines or supply chains to eliminate waste and improve productivity. It blends engineering with business management.",
      "day_in_life": ["Analyze production data", "Design factory layouts", "Improve workflow steps"],
      "tags": ["Engineering", "Business", "Efficiency"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["process", "factory", "efficiency", "production"],
      "related_career_ids": ["eng_mechanical_engineer", "business_operations_manager"]
    }
  },
  {
    "id": "biz_risk_manager",
    "title": "Risk Manager",
    "domain": "Business",
    "slug": "risk-manager",
    "match_profile": {
      "interests": ["safety", "finance", "analysis", "prediction"],
      "personality": ["cautious", "analytical", "pessimistic", "thorough"],
      "work_style": ["office_based", "defensive", "strategic", "serious"],
      "deal_breakers": ["gambling", "optimism_bias", "sales"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "MBA / Risk Certification",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 3000000,
      "display_range": "₹10L - ₹30L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Cyber risk and climate risk are becoming the top priorities."
    },
    "content": {
      "short_desc": "Identifies and mitigates potential risks to a company.",
      "long_desc": "Risk Managers are professional worriers. You analyze what could go wrong—financial crash, cyber attack, or natural disaster—and create plans to prevent it. You protect the company's future.",
      "day_in_life": ["Assess financial exposure", "Create disaster recovery plans", "Audit safety protocols"],
      "tags": ["Business", "Finance", "Strategy"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["risk", "safety", "finance", "insurance"],
      "related_career_ids": ["finance_actuary", "tech_cybersecurity_analyst"]
    }
  },
  {
    "id": "trade_locksmith",
    "title": "Locksmith",
    "domain": "Skilled Trade",
    "slug": "locksmith",
    "match_profile": {
      "interests": ["puzzles", "security", "mechanics", "helping_people"],
      "personality": ["patient", "trustworthy", "handy", "available"],
      "work_style": ["field_work", "on_call", "technical", "problem_solving"],
      "deal_breakers": ["office_job", "bad_ethics", "predictable_hours"]
    },
    "requirements": {
      "education_level": "certificate",
      "degree_field": "Vocational Training",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 700000,
      "display_range": "₹2.5L - ₹7L per year",
      "pay_structure": "Service Fees"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Shift towards smart locks and electronic security systems."
    },
    "content": {
      "short_desc": "Installs and repairs locks and security systems.",
      "long_desc": "Locksmiths help people when they are stuck. You pick locks for people locked out of their homes or cars, and install high-security systems. It requires fine motor skills and absolute integrity.",
      "day_in_life": ["Emergency lockout service", "Cut keys", "Install electronic locks"],
      "tags": ["Trade", "Security", "Hands-on"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["keys", "security", "locks", "repair"],
      "related_career_ids": ["trade_carpenter", "tech_cybersecurity_analyst"]
    }
  },
  {
    "id": "service_flight_dispatcher",
    "title": "Flight Dispatcher",
    "domain": "Transportation",
    "slug": "flight-dispatcher",
    "match_profile": {
      "interests": ["aviation", "weather", "planning", "safety"],
      "personality": ["decisive", "organized", "responsible", "calm"],
      "work_style": ["ground_based", "high_stakes", "planning", "shift_work"],
      "deal_breakers": ["flying", "chaos", "flexibility"]
    },
    "requirements": {
      "education_level": "license",
      "degree_field": "Flight Dispatcher License",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "AI assists with route planning, but safety sign-off remains human."
    },
    "content": {
      "short_desc": "Plans flight paths and fuel requirements for aircraft.",
      "long_desc": "Flight Dispatchers are the pilots on the ground. You plan the flight route, calculate fuel needs based on weather and weight, and share responsibility for the flight's safety with the captain.",
      "day_in_life": ["Analyze weather reports", "Calculate fuel loads", "Monitor active flights"],
      "tags": ["Aviation", "Safety", "Logistics"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["aviation", "airport", "logistics", "planning"],
      "related_career_ids": ["transport_commercial_pilot", "transport_air_traffic_controller"]
    }
  },
  {
    "id": "govt_diplomat",
    "title": "Diplomat / Foreign Service Officer",
    "domain": "Government",
    "slug": "diplomat",
    "match_profile": {
      "interests": ["politics", "travel", "culture", "negotiation"],
      "personality": ["charming", "discreet", "adaptable", "patriotic"],
      "work_style": ["global", "formal", "high_status", "strategic"],
      "deal_breakers": ["staying_in_one_place", "brashness", "informality"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "UPSC IFS Exam",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 1200000,
      "max": 3500000,
      "display_range": "₹12L - ₹35L + Global Housing",
      "pay_structure": "Govt Salary + Allowances"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Geopolitical complexity ensures high demand for human negotiation."
    },
    "content": {
      "short_desc": "Represents the country in foreign nations.",
      "long_desc": "Diplomats are the face of their nation abroad. You work in embassies, negotiate treaties, and help citizens in foreign lands. It involves a life of luxury, travel, and high-stakes politics.",
      "day_in_life": ["Attend diplomatic receptions", "Negotiate trade deals", "Write political reports"],
      "tags": ["Government", "Prestige", "Travel"]
    },
    "meta": {
      "popularity_rank": 5,
      "search_keywords": ["ifs", "embassy", "politics", "travel"],
      "related_career_ids": ["govt_ias_officer", "business_international_business"]
    }
  },
  {
    "id": "edu_school_principal",
    "title": "School Principal",
    "domain": "Education",
    "slug": "school-principal",
    "match_profile": {
      "interests": ["education", "leadership", "management", "children"],
      "personality": ["authoritative", "visionary", "responsible", "mentor"],
      "work_style": ["school_based", "high_responsibility", "public", "administrative"],
      "deal_breakers": ["hating_kids", "teaching_only", "lack_of_control"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "B.Ed + M.Ed + Experience",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 2000000,
      "display_range": "₹8L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Focus shifting to tech integration and student well-being management."
    },
    "content": {
      "short_desc": "Manages the operations and staff of a school.",
      "long_desc": "Principals lead schools. You manage teachers, handle discipline, and set the academic vision. You are responsible for creating a safe and effective learning environment for hundreds of students.",
      "day_in_life": ["Observe classes", "Meet with parents", "Manage school budget"],
      "tags": ["Education", "Leadership", "Management"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["school", "headmaster", "admin", "leader"],
      "related_career_ids": ["edu_primary_teacher", "mgmt_hr_manager"]
    }
  },
  {
    "id": "tech_seo_specialist",
    "title": "SEO Specialist",
    "domain": "Technology",
    "slug": "seo-specialist",
    "match_profile": {
      "interests": ["google", "analytics", "marketing", "coding"],
      "personality": ["analytical", "competitive", "patient", "adaptable"],
      "work_style": ["computer_based", "data_driven", "remote_friendly", "strategic"],
      "deal_breakers": ["static_rules", "print_media", "impatience"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Marketing / CS",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 350000,
      "max": 1200000,
      "display_range": "₹3.5L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Huge shift due to AI Search (SGE); role evolving into 'Search Experience Optimizer'."
    },
    "content": {
      "short_desc": "Optimizes websites to rank higher on search engines.",
      "long_desc": "SEO Specialists help websites get found. You analyze keywords, fix technical website issues, and build links so that your client appears at the top of Google results. It is a constant battle against algorithms.",
      "day_in_life": ["Audit website traffic", "Research keywords", "Optimize page content"],
      "tags": ["Tech", "Marketing", "Data"]
    },
    "meta": {
      "popularity_rank": 25,
      "search_keywords": ["google", "ranking", "digital", "marketing"],
      "related_career_ids": ["business_digital_marketing_manager", "tech_mobile_developer"]
    }
  },
  {
    "id": "creative_jewellery_designer",
    "title": "Jewellery Designer",
    "domain": "Arts & Design",
    "slug": "jewellery-designer",
    "match_profile": {
      "interests": ["gems", "fashion", "luxury", "drawing"],
      "personality": ["artistic", "meticulous", "visual", "patient"],
      "work_style": ["studio_based", "precise", "luxury", "quiet"],
      "deal_breakers": ["rough_work", "mass_production", "speed"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Gemology / Design",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1500000,
      "display_range": "₹3L - ₹15L per year",
      "pay_structure": "Salary or Business Income"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "3D printing of molds is speeding up production, but design is human."
    },
    "content": {
      "short_desc": "Designs rings, necklaces, and other precious accessories.",
      "long_desc": "Jewellery Designers create wearable art. You sketch designs, select gemstones, and oversee the crafting of gold and silver pieces. It requires a steady hand and an eye for luxury.",
      "day_in_life": ["Sketch new collections", "Select diamonds/gems", "Supervise craftsmen"],
      "tags": ["Creative", "Luxury", "Design"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["gold", "diamond", "fashion", "art"],
      "related_career_ids": ["creative_fashion_designer", "trade_machinist"]
    }
  },
  {
    "id": "science_epidemiologist",
    "title": "Epidemiologist",
    "domain": "Science",
    "slug": "epidemiologist",
    "match_profile": {
      "interests": ["public_health", "statistics", "detective_work", "biology"],
      "personality": ["analytical", "curious", "objective", "persistent"],
      "work_style": ["office/field", "data_heavy", "impact_driven", "collaborative"],
      "deal_breakers": ["individual_care_only", "bad_data", "politics"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "MPH (Public Health)",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1800000,
      "display_range": "₹6L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Permanent high demand post-COVID for disease tracking."
    },
    "content": {
      "short_desc": "Investigates the causes and spread of diseases.",
      "long_desc": "Epidemiologists are disease detectives. You analyze data to find out why people get sick and how to stop outbreaks. You work for government health agencies or research universities.",
      "day_in_life": ["Analyze infection rates", "Track disease outbreaks", "Advise on health policy"],
      "tags": ["Science", "Health", "Data"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["virus", "outbreak", "public_health", "research"],
      "related_career_ids": ["science_microbiologist", "tech_data_scientist"]
    }
  },
  {
    "id": "health_chiropractor",
    "title": "Chiropractor",
    "domain": "Healthcare",
    "slug": "chiropractor",
    "match_profile": {
      "interests": ["anatomy", "healing", "mechanics", "holistic_health"],
      "personality": ["confident", "physical", "social", "entrepreneurial"],
      "work_style": ["clinic_based", "physical_labor", "one_on_one", "active"],
      "deal_breakers": ["drugs/surgery", "sedentary", "weak_hands"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "Doctor of Chiropractic",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Practice Fees"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Growing acceptance of alternative medicine for pain management."
    },
    "content": {
      "short_desc": "Treats neuromuscular disorders through manual adjustment.",
      "long_desc": "Chiropractors align the spine to relieve pain. You use your hands to manipulate joints and help patients with back pain or sports injuries without using surgery or drugs.",
      "day_in_life": ["Perform spinal adjustments", "Advise on posture", "Review patient X-rays"],
      "tags": ["Health", "Alternative", "Active"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["back_pain", "spine", "doctor", "health"],
      "related_career_ids": ["health_physiotherapist", "health_orthopedic_surgeon"]
    }
  },
  {
    "id": "eng_structural_engineer",
    "title": "Structural Engineer",
    "domain": "Engineering",
    "slug": "structural-engineer",
    "match_profile": {
      "interests": ["physics", "buildings", "math", "safety"],
      "personality": ["responsible", "precise", "logical", "cautious"],
      "work_style": ["office_based", "calculation_heavy", "collaborative", "technical"],
      "deal_breakers": ["risk_taking", "art_only", "sales"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "M.Tech Structural Eng",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1800000,
      "display_range": "₹6L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Focus on earthquake-resistant and sustainable high-rise structures."
    },
    "content": {
      "short_desc": "Calculates stability and strength of buildings and bridges.",
      "long_desc": "Structural Engineers make sure buildings don't fall down. You analyze blueprints to ensure they can withstand gravity, wind, and earthquakes. It is a high-responsibility subset of civil engineering.",
      "day_in_life": ["Calculate load capacities", "Inspect building foundations", "Collaborate with architects"],
      "tags": ["Engineering", "Core", "Safety"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["building", "civil", "math", "safety"],
      "related_career_ids": ["eng_civil_engineer", "eng_architect"]
    }
  },
  {
    "id": "media_podcaster",
    "title": "Podcaster / Voice Artist",
    "domain": "Media & Marketing",
    "slug": "podcaster",
    "match_profile": {
      "interests": ["talking", "storytelling", "audio", "interviewing"],
      "personality": ["articulate", "curious", "charismatic", "listener"],
      "work_style": ["studio_based", "creative", "independent", "auditory"],
      "deal_breakers": ["silence", "routine", "visual_focus"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "Portfolio / Experience",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 2500000,
      "display_range": "Variable (Sponsorships)",
      "pay_structure": "Ad Revenue / Freelance"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "AI voices exist, but human personality and celebrity drive listenership."
    },
    "content": {
      "short_desc": "Creates audio content or voice-overs for media.",
      "long_desc": "Podcasters create audio shows on niche topics. You interview guests, tell stories, and build an audience. Voice artists lend their voice to commercials, audiobooks, and animation.",
      "day_in_life": ["Record podcast episodes", "Edit audio tracks", "Script voice-overs"],
      "tags": ["Creative", "Media", "Voice"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["radio", "mic", "audio", "show"],
      "related_career_ids": ["media_sound_engineer", "media_journalist"]
    }
  },
  {
    "id": "biz_retail_manager",
    "title": "Retail Store Manager",
    "domain": "Business",
    "slug": "retail-manager",
    "match_profile": {
      "interests": ["sales", "customer_service", "merchandising", "people"],
      "personality": ["energetic", "organized", "social", "leader"],
      "work_style": ["on_site", "standing", "fast_paced", "customer_facing"],
      "deal_breakers": ["sitting_all_day", "introversion", "weekends_off"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Any Degree / BBA",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 350000,
      "max": 900000,
      "display_range": "₹3.5L - ₹9L per year",
      "pay_structure": "Salary + Sales Bonus"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Experiential retail helps stores survive against e-commerce."
    },
    "content": {
      "short_desc": "Manages the daily operations of a retail store.",
      "long_desc": "Retail Managers run shops. You manage staff, handle inventory, and ensure customers are happy. It requires stamina and the ability to handle angry customers with a smile.",
      "day_in_life": ["Supervise sales floor", "Manage inventory stock", "Train new staff"],
      "tags": ["Business", "Sales", "Management"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["shop", "sales", "store", "manager"],
      "related_career_ids": ["sales_b2b_sales_manager", "hospitality_hotel_manager"]
    }
  },
  {
    "id": "trade_crane_operator",
    "title": "Crane Operator",
    "domain": "Skilled Trade",
    "slug": "crane-operator",
    "match_profile": {
      "interests": ["heavy_machinery", "heights", "precision", "construction"],
      "personality": ["focused", "calm", "responsible", "steady"],
      "work_style": ["field_work", "sedentary_but_alert", "isolated", "high_stakes"],
      "deal_breakers": ["fear_of_heights", "distraction", "office"]
    },
    "requirements": {
      "education_level": "license",
      "degree_field": "Heavy Equipment License",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1200000,
      "display_range": "₹5L - ₹12L per year",
      "pay_structure": "Wage + Overtime"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Remote-controlled cranes are emerging, but on-site operators remain key."
    },
    "content": {
      "short_desc": "Operates cranes to lift heavy materials on construction sites.",
      "long_desc": "Crane Operators have the best view and the highest risk. You control massive machines to lift steel and concrete. It requires depth perception, steady hands, and intense focus.",
      "day_in_life": ["Perform safety checks", "Lift construction materials", "Coordinate with ground crew"],
      "tags": ["Trade", "Construction", "High Pay"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["construction", "heavy_machinery", "lift", "site"],
      "related_career_ids": ["trade_mason", "eng_civil_engineer"]
    }
  },
  {
    "id": "govt_urban_planner",
    "title": "Urban Planner",
    "domain": "Government",
    "slug": "urban-planner",
    "match_profile": {
      "interests": ["cities", "design", "policy", "sociology"],
      "personality": ["visionary", "organized", "diplomatic", "big_picture"],
      "work_style": ["office_based", "collaborative", "long_term", "public"],
      "deal_breakers": ["short_term_thinking", "chaos", "isolation"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "M.Plan (Urban Planning)",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Smart cities and sustainability are driving huge demand."
    },
    "content": {
      "short_desc": "Designs land use plans for growing cities and towns.",
      "long_desc": "Urban Planners decide how cities grow. You plan where to put parks, roads, and housing. You balance the needs of the environment, the economy, and the community to create livable spaces.",
      "day_in_life": ["Review zoning laws", "Design city layouts", "Meet with community leaders"],
      "tags": ["Government", "Design", "Society"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["city", "design", "map", "infrastructure"],
      "related_career_ids": ["eng_architect", "eng_civil_engineer"]
    }
  },
  {
    "id": "science_hydrologist",
    "title": "Hydrologist",
    "domain": "Science",
    "slug": "hydrologist",
    "match_profile": {
      "interests": ["water", "environment", "geology", "conservation"],
      "personality": ["analytical", "observant", "patient", "methodical"],
      "work_style": ["field_work", "lab_based", "research", "outdoor"],
      "deal_breakers": ["dry_office_only", "fast_pace", "sales"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Hydrology / Environmental Science",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Water scarcity is becoming a global crisis, creating massive demand."
    },
    "content": {
      "short_desc": "Studies the movement and quality of water across the earth.",
      "long_desc": "Hydrologists protect our most vital resource. You analyze water samples, model flood risks, and help governments manage water supplies. It involves getting your boots muddy in rivers and analyzing data in labs.",
      "day_in_life": ["Collect water samples", "Model flood predictions", "Advise on water policy"],
      "tags": ["Science", "Environment", "Water"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["water", "river", "environment", "scientist"],
      "related_career_ids": ["eng_environmental_engineer", "science_geologist"]
    }
  },
  {
    "id": "sports_professional_coach",
    "title": "Professional Sports Coach",
    "domain": "Sports",
    "slug": "sports-coach",
    "match_profile": {
      "interests": ["sports", "strategy", "mentoring", "psychology"],
      "personality": ["leader", "competitive", "motivational", "disciplined"],
      "work_style": ["field_work", "high_pressure", "public", "team_based"],
      "deal_breakers": ["sedentary_life", "losing", "quiet"]
    },
    "requirements": {
      "education_level": "certification",
      "degree_field": "Sports Science / Coaching Cert",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 5000000,
      "display_range": "High Variance (Team Dependent)",
      "pay_structure": "Salary + Performance Bonus"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Data analytics is changing coaching, but the human element remains key."
    },
    "content": {
      "short_desc": "Trains athletes and develops strategies for winning.",
      "long_desc": "Coaches lead teams to victory. You design training regimes, analyze opponent tactics, and motivate players. It requires deep knowledge of the game and the ability to manage big egos.",
      "day_in_life": ["Run practice drills", "Analyze game footage", "Mentor athletes"],
      "tags": ["Sports", "Leadership", "Strategy"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["cricket", "football", "coach", "team"],
      "related_career_ids": ["health_fitness_trainer", "health_physiotherapist"]
    }
  },
  {
    "id": "health_speech_pathologist",
    "title": "Speech-Language Pathologist",
    "domain": "Healthcare",
    "slug": "speech-pathologist",
    "match_profile": {
      "interests": ["language", "anatomy", "helping_people", "teaching"],
      "personality": ["patient", "encouraging", "articulate", "observant"],
      "work_style": ["clinic_based", "one_on_one", "social", "structured"],
      "deal_breakers": ["impatience", "silence", "isolation"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Audiology & Speech Language Pathology",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Rising awareness of developmental delays is increasing demand."
    },
    "content": {
      "short_desc": "Treats speech and swallowing disorders.",
      "long_desc": "Speech Therapists help people communicate. You work with children who stutter or stroke victims relearning to speak. It is a rewarding mix of healthcare, psychology, and education.",
      "day_in_life": ["Conduct speech assessments", "Teach pronunciation exercises", "Counsel families"],
      "tags": ["Healthcare", "Helping People", "Language"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["speech", "therapy", "doctor", "language"],
      "related_career_ids": ["health_audiologist", "edu_special_education_teacher"]
    }
  },
  {
    "id": "eng_agricultural_engineer",
    "title": "Agricultural Engineer",
    "domain": "Engineering",
    "slug": "agricultural-engineer",
    "match_profile": {
      "interests": ["farming", "machines", "sustainability", "engineering"],
      "personality": ["practical", "innovative", "hands_on", "problem_solver"],
      "work_style": ["field_work", "rural", "technical", "impact_driven"],
      "deal_breakers": ["city_only", "abstract_theory", "desk_job"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Agricultural Engineering",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 450000,
      "max": 1200000,
      "display_range": "₹4.5L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Smart farming (drones, sensors) is transforming this traditional field."
    },
    "content": {
      "short_desc": "Designs machinery and systems for farming and food processing.",
      "long_desc": "Agricultural Engineers use tech to feed the world. You design irrigation systems, harvesting robots, or grain storage facilities. You bridge the gap between mechanical engineering and biology.",
      "day_in_life": ["Design farm machinery", "Test irrigation efficiency", "Consult with farmers"],
      "tags": ["Engineering", "Farming", "Green"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["tractor", "farm", "food", "engineer"],
      "related_career_ids": ["science_agricultural_scientist", "eng_mechanical_engineer"]
    }
  },
  {
    "id": "service_sommelier",
    "title": "Sommelier",
    "domain": "Hospitality",
    "slug": "sommelier",
    "match_profile": {
      "interests": ["wine", "tasting", "history", "service"],
      "personality": ["sophisticated", "sensory", "social", "memory_focused"],
      "work_style": ["restaurant_based", "evening_shifts", "luxury", "social"],
      "deal_breakers": ["teetotaler", "early_mornings", "fast_food"]
    },
    "requirements": {
      "education_level": "certification",
      "degree_field": "WSET / Court of Master Sommeliers",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 2000000,
      "display_range": "₹4L - ₹20L per year",
      "pay_structure": "Salary + Tips"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Growing wine culture in India is creating new opportunities in luxury hotels."
    },
    "content": {
      "short_desc": "Expert in wine, pairing beverages with food in fine dining.",
      "long_desc": "Sommeliers are the rockstars of fine dining. You manage the wine cellar, advise guests on pairings, and train staff. It requires an incredible palate and deep knowledge of geography and history.",
      "day_in_life": ["Taste new wines", "Manage cellar inventory", "Serve guests during dinner"],
      "tags": ["Hospitality", "Luxury", "Food"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["wine", "hotel", "luxury", "food"],
      "related_career_ids": ["hospitality_head_chef", "hospitality_hotel_manager"]
    }
  },
  {
    "id": "tech_technical_writer",
    "title": "Technical Writer",
    "domain": "Technology",
    "slug": "technical-writer",
    "match_profile": {
      "interests": ["writing", "technology", "teaching", "simplifying"],
      "personality": ["precise", "clear", "organized", "curious"],
      "work_style": ["sedentary", "remote_friendly", "detail_oriented", "independent"],
      "deal_breakers": ["creative_fluff", "ambiguity", "sales"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "English / CS",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "High",
      "future_trend": "AI writes drafts; humans edit for accuracy and user empathy."
    },
    "content": {
      "short_desc": "Writes manuals and guides to explain complex technology.",
      "long_desc": "Technical Writers translate 'engineer speak' into English. You write API documentation, user manuals, and help guides. You need to understand code but write like a teacher.",
      "day_in_life": ["Interview developers", "Write API docs", "Create user diagrams"],
      "tags": ["Tech", "Writing", "Education"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["docs", "manual", "writing", "software"],
      "related_career_ids": ["media_content_writer", "tech_software_engineer"]
    }
  },
  {
    "id": "arts_landscape_architect",
    "title": "Landscape Architect",
    "domain": "Arts & Design",
    "slug": "landscape-architect",
    "match_profile": {
      "interests": ["plants", "design", "outdoors", "environment"],
      "personality": ["visual", "nature_lover", "practical", "visionary"],
      "work_style": ["hybrid", "project_based", "visual", "seasonal"],
      "deal_breakers": ["office_only", "hating_nature", "math_phobia"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Landscape Architecture",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Sustainable urban parks and green roofs are in high demand."
    },
    "content": {
      "short_desc": "Designs outdoor spaces like parks, gardens, and campuses.",
      "long_desc": "Landscape Architects design the natural world in cities. You choose plants, design walkways, and ensure drainage works. You balance ecology with aesthetics to create beautiful public spaces.",
      "day_in_life": ["Draw site plans in CAD", "Select plant species", "Supervise site planting"],
      "tags": ["Design", "Nature", "Architecture"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["garden", "park", "design", "nature"],
      "related_career_ids": ["eng_architect", "science_agricultural_scientist"]
    }
  },
  {
    "id": "health_audiologist",
    "title": "Audiologist",
    "domain": "Healthcare",
    "slug": "audiologist",
    "match_profile": {
      "interests": ["ears", "sound", "technology", "helping_people"],
      "personality": ["patient", "technical", "gentle", "precise"],
      "work_style": ["clinic_based", "quiet", "diagnostic", "structured"],
      "deal_breakers": ["loud_noises", "emergency_medicine", "sales_pressure"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Audiology",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Aging population and headphone usage driving hearing loss cases."
    },
    "content": {
      "short_desc": "Diagnoses and treats hearing and balance disorders.",
      "long_desc": "Audiologists help the world hear. You test hearing, fit hearing aids, and treat balance issues. It combines medical science with advanced acoustic technology.",
      "day_in_life": ["Conduct hearing tests", "Fit hearing aids", "Counsel patients on hearing loss"],
      "tags": ["Healthcare", "Tech", "Helping People"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["ears", "hearing", "doctor", "sound"],
      "related_career_ids": ["health_speech_pathologist", "media_sound_engineer"]
    }
  },
  {
    "id": "science_gis_specialist",
    "title": "GIS Specialist",
    "domain": "Science",
    "slug": "gis-specialist",
    "match_profile": {
      "interests": ["maps", "geography", "data", "computers"],
      "personality": ["visual", "analytical", "detail_oriented", "technical"],
      "work_style": ["computer_based", "data_heavy", "visual", "strategic"],
      "deal_breakers": ["field_work_only", "creative_writing", "subjectivity"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Geography / Geoinformatics",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Essential for logistics, urban planning, and climate tracking."
    },
    "content": {
      "short_desc": "Analyzes spatial and geographic data using mapping software.",
      "long_desc": "GIS (Geographic Information Systems) Specialists make smart maps. You layer data onto maps to help governments plan roads, businesses find store locations, or scientists track climate change.",
      "day_in_life": ["Analyze satellite imagery", "Create map layers", "Manage spatial databases"],
      "tags": ["Tech", "Data", "Geography"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["maps", "google_maps", "data", "geography"],
      "related_career_ids": ["govt_urban_planner", "science_geologist"]
    }
  },
  {
    "id": "health_radiation_therapist",
    "title": "Radiation Therapist",
    "domain": "Healthcare",
    "slug": "radiation-therapist",
    "match_profile": {
      "interests": ["cancer_treatment", "technology", "physics", "patient_care"],
      "personality": ["precise", "compassionate", "careful", "technical"],
      "work_style": ["hospital_based", "technical", "routine", "emotional"],
      "deal_breakers": ["errors", "improvisation", "low_tech"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Radiotherapy Technology",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Precision medicine is making treatments more complex and targeted."
    },
    "content": {
      "short_desc": "Administers radiation treatments to cancer patients.",
      "long_desc": "Radiation Therapists operate the machines that shrink tumors. You work closely with oncologists to deliver precise doses of radiation. It requires technical skill and deep empathy for patients fighting cancer.",
      "day_in_life": ["Calibrate linear accelerator", "Position patients", "Administer radiation dose"],
      "tags": ["Healthcare", "Tech", "Cancer"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["cancer", "hospital", "tech", "treatment"],
      "related_career_ids": ["health_radiologist", "health_registered_nurse"]
    }
  },
  {
    "id": "service_funeral_director",
    "title": "Funeral Director",
    "domain": "Service",
    "slug": "funeral-director",
    "match_profile": {
      "interests": ["helping_people", "events", "psychology", "business"],
      "personality": ["empathetic", "dignified", "organized", "resilient"],
      "work_style": ["on_call", "emotional", "service_oriented", "quiet"],
      "deal_breakers": ["squeamishness", "party_atmosphere", "disorganization"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Mortuary Science",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1000000,
      "display_range": "₹3L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Very Low",
      "future_trend": "Eco-friendly burials and digital memorials are emerging trends."
    },
    "content": {
      "short_desc": "Arranges funeral services and supports grieving families.",
      "long_desc": "Funeral Directors help families during their hardest times. You handle logistics, legal paperwork, and the preparation of the deceased. It is a somber but deeply essential profession.",
      "day_in_life": ["Meet with grieving families", "Coordinate service details", "Prepare legal documents"],
      "tags": ["Service", "Business", "Support"]
    },
    "meta": {
      "popularity_rank": 90,
      "search_keywords": ["funeral", "manager", "event", "care"],
      "related_career_ids": ["business_event_planner", "social_social_worker"]
    }
  },
  {
    "id": "trade_glazier",
    "title": "Glazier",
    "domain": "Skilled Trade",
    "slug": "glazier",
    "match_profile": {
      "interests": ["glass", "cutting", "construction", "precision"],
      "personality": ["careful", "steady", "detail_oriented", "physical"],
      "work_style": ["field_work", "hazardous", "precise", "physical"],
      "deal_breakers": ["clumsiness", "fear_of_heights", "office_work"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "ITI / Apprenticeship",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 700000,
      "display_range": "₹2.5L - ₹7L per year",
      "pay_structure": "Wage"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "High demand for energy-efficient double-glazing in modern buildings."
    },
    "content": {
      "short_desc": "Cuts and installs glass in windows and skylights.",
      "long_desc": "Glaziers work with glass. You cut huge sheets to size and install them in skyscrapers or homes. It is dangerous work that requires strength and a very gentle touch.",
      "day_in_life": ["Measure window frames", "Cut glass sheets", "Install and seal windows"],
      "tags": ["Trade", "Construction", "Precision"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["glass", "window", "repair", "construction"],
      "related_career_ids": ["trade_carpenter", "eng_civil_engineer"]
    }
  },
  {
    "id": "eng_marine_engineer",
    "title": "Marine Engineer",
    "domain": "Engineering",
    "slug": "marine-engineer",
    "match_profile": {
      "interests": ["ships", "engines", "ocean", "mechanics"],
      "personality": ["practical", "resilient", "technical", "adventurous"],
      "work_style": ["offshore", "machinery_room", "shift_work", "isolated"],
      "deal_breakers": ["seasickness", "delicate_hands", "daily_commute"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Marine Engineering",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 3000000,
      "display_range": "₹8L - ₹30L (Tax Free often)",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Green shipping fuels (ammonia/hydrogen) require new engine expertise."
    },
    "content": {
      "short_desc": "Maintains engines and systems on ships.",
      "long_desc": "Marine Engineers keep the ship moving. You work in the engine room of massive vessels, fixing turbines, pumps, and generators. It involves months at sea but pays very well.",
      "day_in_life": ["Monitor engine gauges", "Repair hydraulic systems", "Maintain generators"],
      "tags": ["Engineering", "Travel", "High Pay"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["ship", "engine", "sea", "navy"],
      "related_career_ids": ["transport_ship_captain", "eng_mechanical_engineer"]
    }
  },
  {
    "id": "science_conservation_scientist",
    "title": "Conservation Scientist",
    "domain": "Science",
    "slug": "conservation-scientist",
    "match_profile": {
      "interests": ["forests", "nature", "sustainability", "data"],
      "personality": ["passionate", "observant", "idealistic", "analytical"],
      "work_style": ["field_work", "outdoor", "research", "government"],
      "deal_breakers": ["corporate_greed", "city_life", "destruction"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Forestry / Environmental Science",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Carbon credit markets are creating new jobs in forest management."
    },
    "content": {
      "short_desc": "Manages natural resources and forests.",
      "long_desc": "Conservation Scientists manage the land. You work with governments and landowners to protect forests, improve soil quality, and prevent wildfires. You are a steward of the environment.",
      "day_in_life": ["Survey forest health", "Plan sustainable logging", "Monitor wildlife habitats"],
      "tags": ["Science", "Nature", "Green"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["forest", "nature", "environment", "ranger"],
      "related_career_ids": ["science_zoologist", "eng_environmental_engineer"]
    }
  },
  {
    "id": "biz_procurement_manager",
    "title": "Procurement Manager",
    "domain": "Business",
    "slug": "procurement-manager",
    "match_profile": {
      "interests": ["buying", "negotiation", "strategy", "value"],
      "personality": ["shrewd", "organized", "decisive", "ethical"],
      "work_style": ["office_based", "negotiation_heavy", "strategic", "financial"],
      "deal_breakers": ["timidity", "overspending", "chaos"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Supply Chain / Business",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 2500000,
      "display_range": "₹8L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "AI assists in vendor selection, but negotiation remains human."
    },
    "content": {
      "short_desc": "Buys goods and services for a company at the best price.",
      "long_desc": "Procurement Managers are professional shoppers. You negotiate contracts for raw materials, office supplies, or software. Your goal is to get the best quality for the lowest price.",
      "day_in_life": ["Negotiate with vendors", "Review contracts", "Analyze spending"],
      "tags": ["Business", "Finance", "Strategy"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["buying", "supply", "negotiation", "manager"],
      "related_career_ids": ["business_supply_chain_manager", "finance_financial_analyst"]
    }
  },
  {
    "id": "arts_museum_curator",
    "title": "Museum Curator",
    "domain": "Arts & Design",
    "slug": "museum-curator",
    "match_profile": {
      "interests": ["history", "art", "storytelling", "organizing"],
      "personality": ["intellectual", "organized", "visual", "quiet"],
      "work_style": ["museum_based", "academic", "visual", "calm"],
      "deal_breakers": ["noise", "modernity_only", "disinterest_in_past"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Art History / Museology",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Low",
      "future_trend": "Digital exhibitions are expanding the role beyond physical walls."
    },
    "content": {
      "short_desc": "Manages collections of art or artifacts in a museum.",
      "long_desc": "Curators tell stories through objects. You decide what a museum displays, how it is arranged, and acquire new pieces. You are an expert historian and an exhibition designer.",
      "day_in_life": ["Plan new exhibitions", "Acquire artwork", "Research artifacts"],
      "tags": ["Arts", "History", "Culture"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["art", "history", "museum", "gallery"],
      "related_career_ids": ["edu_librarian", "creative_art_director"]
    }
  },
  {
    "id": "tech_sysadmin",
    "title": "Systems Administrator",
    "domain": "Technology",
    "slug": "sysadmin",
    "match_profile": {
      "interests": ["servers", "fixing_problems", "security", "linux"],
      "personality": ["reliable", "patient", "helpful", "technical"],
      "work_style": ["office/remote", "on_call", "maintenance", "backend"],
      "deal_breakers": ["creative_design", "sales", "public_speaking"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / IT Certifications",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Moving from fixing servers to managing cloud instances (DevOps)."
    },
    "content": {
      "short_desc": "Maintains company computers, servers, and networks.",
      "long_desc": "SysAdmins are the IT fixers. You install software, manage user accounts, and fix servers when they crash. You keep the digital lights on for the entire company.",
      "day_in_life": ["Reset user passwords", "Patch server software", "Monitor system uptime"],
      "tags": ["Tech", "Infrastructure", "IT"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["it", "server", "admin", "linux"],
      "related_career_ids": ["tech_network_engineer", "tech_devops_engineer"]
    }
  },
  {
    "id": "legal_mediator",
    "title": "Professional Mediator",
    "domain": "Legal",
    "slug": "mediator",
    "match_profile": {
      "interests": ["conflict_resolution", "psychology", "listening", "peace"],
      "personality": ["diplomatic", "calm", "impartial", "patient"],
      "work_style": ["office_based", "discussion_heavy", "emotional", "neutral"],
      "deal_breakers": ["picking_sides", "aggression", "shouting"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Law / Psychology / Conflict Resolution",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Fees per Session"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Courts are mandating mediation to reduce case backlog."
    },
    "content": {
      "short_desc": "Helps opposing parties reach an agreement outside of court.",
      "long_desc": "Mediators solve fights. You help divorcing couples or business partners find middle ground without going to trial. You don't decide who is right; you help them agree.",
      "day_in_life": ["Listen to both sides", "Facilitate negotiation", "Draft settlement agreements"],
      "tags": ["Law", "Psychology", "Peace"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["conflict", "law", "negotiation", "peace"],
      "related_career_ids": ["legal_judge", "health_clinical_psychologist"]
    }
  },
  {
    "id": "health_phlebotomist",
    "title": "Phlebotomist",
    "domain": "Healthcare",
    "slug": "phlebotomist",
    "match_profile": {
      "interests": ["blood", "patient_care", "precision", "routine"],
      "personality": ["gentle", "calm", "steady_hands", "friendly"],
      "work_style": ["clinic_based", "routine", "patient_facing", "sanitary"],
      "deal_breakers": ["shaking_hands", "blood_phobia", "chaos"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "DMLT / Phlebotomy Cert",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 500000,
      "display_range": "₹2L - ₹5L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Diagnostic testing is booming; home collection services are growing."
    },
    "content": {
      "short_desc": "Draws blood from patients for medical testing.",
      "long_desc": "Phlebotomists are experts at drawing blood. You need steady hands to find veins and a kind manner to calm nervous patients. It is a key role in diagnostics.",
      "day_in_life": ["Label blood tubes", "Find patient veins", "Draw blood samples"],
      "tags": ["Healthcare", "Technical", "Entry Level"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["blood", "test", "nurse", "lab"],
      "related_career_ids": ["health_registered_nurse", "science_microbiologist"]
    }
  },
  {
    "id": "trade_roofer",
    "title": "Roofer",
    "domain": "Skilled Trade",
    "slug": "roofer",
    "match_profile": {
      "interests": ["building", "heights", "outdoors", "physical_work"],
      "personality": ["tough", "fearless", "hardworking", "balanced"],
      "work_style": ["outdoor", "hazardous", "physical", "weather_dependent"],
      "deal_breakers": ["fear_of_heights", "weakness", "office_job"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Apprenticeship",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Wage"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Solar roof installations are creating a new hybrid skill set."
    },
    "content": {
      "short_desc": "Builds and repairs roofs on houses and buildings.",
      "long_desc": "Roofers work at the top. You install shingles, tiles, or metal to keep buildings waterproof. It is physically demanding work done in all weather, requiring excellent balance.",
      "day_in_life": ["Remove old roofing", "Install waterproof membrane", "Lay roof tiles"],
      "tags": ["Trade", "Construction", "Tough"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["house", "construction", "repair", "top"],
      "related_career_ids": ["trade_solar_installer", "trade_carpenter"]
    }
  },
  {
    "id": "tech_ar_vr_developer",
    "title": "AR/VR Developer",
    "domain": "Technology",
    "slug": "ar-vr-developer",
    "match_profile": {
      "interests": ["gaming", "virtual_reality", "coding", "3d_design"],
      "personality": ["innovative", "visual", "technical", "patient"],
      "work_style": ["sedentary", "cutting_edge", "visual", "collaborative"],
      "deal_breakers": ["traditional_software", "lack_of_creativity", "motion_sickness"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / Game Design",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2500000,
      "display_range": "₹6L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Low",
      "future_trend": "Metaverse and industrial training sims are driving massive growth."
    },
    "content": {
      "short_desc": "Builds Augmented and Virtual Reality experiences.",
      "long_desc": "AR/VR Developers create immersive worlds. You use Unity or Unreal Engine to build training simulations for surgeons, video games, or virtual showrooms for cars. It blends heavy coding with spatial design.",
      "day_in_life": ["Code 3D interactions", "Optimize frame rates", "Test on VR headsets"],
      "tags": ["Tech", "Future", "Creative"]
    },
    "meta": {
      "popularity_rank": 20,
      "search_keywords": ["metaverse", "unity", "vr", "oculus"],
      "related_career_ids": ["tech_game_developer", "creative_animator"]
    }
  },
  {
    "id": "science_genetic_counselor",
    "title": "Genetic Counselor",
    "domain": "Healthcare",
    "slug": "genetic-counselor",
    "match_profile": {
      "interests": ["genetics", "psychology", "helping_people", "biology"],
      "personality": ["empathetic", "analytical", "communicative", "ethical"],
      "work_style": ["clinic_based", "emotional", "one_on_one", "data_driven"],
      "deal_breakers": ["bad_news_avoidance", "pure_lab_work", "sales"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "M.Sc Genetic Counseling",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Personalized medicine based on DNA is becoming standard care."
    },
    "content": {
      "short_desc": "Advises patients on genetic risks and inherited diseases.",
      "long_desc": "Genetic Counselors explain DNA results to families. You help prospective parents understand the risk of inherited diseases or help cancer patients understand their genetic markers. It requires deep science knowledge and soft counseling skills.",
      "day_in_life": ["Analyze DNA test results", "Counsel expectant parents", "Collaborate with oncologists"],
      "tags": ["Healthcare", "Science", "Empathy"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["dna", "gene", "counseling", "medical"],
      "related_career_ids": ["health_clinical_psychologist", "science_biotechnologist"]
    }
  },
  {
    "id": "creative_photojournalist",
    "title": "Photojournalist",
    "domain": "Media & Marketing",
    "slug": "photojournalist",
    "match_profile": {
      "interests": ["photography", "news", "travel", "storytelling"],
      "personality": ["brave", "observant", "adventurous", "quick"],
      "work_style": ["field_work", "unpredictable", "visual", "travel_heavy"],
      "deal_breakers": ["routine", "safety_first", "office_cubicle"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Photography / Journalism",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1200000,
      "display_range": "₹3L - ₹12L per year",
      "pay_structure": "Freelance / Salary"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "High",
      "future_trend": "AI image generation threatens stock photos, but real-time news remains human."
    },
    "content": {
      "short_desc": "Captures images of news events to tell a story.",
      "long_desc": "Photojournalists document history as it happens. You travel to conflict zones, protests, or sports events to capture the truth in a single frame. It is high-adrenaline and culturally significant work.",
      "day_in_life": ["Travel to news location", "Shoot live events", "Edit and caption photos"],
      "tags": ["Media", "Creative", "Travel"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["news", "camera", "reporter", "press"],
      "related_career_ids": ["media_journalist", "creative_photographer"]
    }
  },
  {
    "id": "transport_helicopter_pilot",
    "title": "Helicopter Pilot",
    "domain": "Transportation",
    "slug": "helicopter-pilot",
    "match_profile": {
      "interests": ["aviation", "machines", "adrenaline", "precision"],
      "personality": ["focused", "calm_under_pressure", "confident", "technical"],
      "work_style": ["field_work", "high_stakes", "non_routine", "technical"],
      "deal_breakers": ["fear_of_heights", "automation_reliance", "desk_job"]
    },
    "requirements": {
      "education_level": "license",
      "degree_field": "Commercial Helicopter License",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 1200000,
      "max": 4000000,
      "display_range": "₹12L - ₹40L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Urban Air Mobility (flying taxis) will spike demand for rotary pilots."
    },
    "content": {
      "short_desc": "Flies helicopters for tourism, rescue, or transport.",
      "long_desc": "Helicopter Pilots fly where planes cannot. You might transport patients (Air Ambulance), survey power lines, or fly tourists. It requires more hands-on control than flying a jet.",
      "day_in_life": ["Pre-flight safety check", "Fly complex routes", "Land in tight spaces"],
      "tags": ["Aviation", "High Pay", "Action"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["chopper", "pilot", "flying", "rescue"],
      "related_career_ids": ["transport_commercial_pilot", "service_firefighter"]
    }
  },
  {
    "id": "science_food_scientist",
    "title": "Food Scientist",
    "domain": "Science",
    "slug": "food-scientist",
    "match_profile": {
      "interests": ["food", "chemistry", "cooking", "quality"],
      "personality": ["innovative", "meticulous", "sensory", "scientific"],
      "work_style": ["lab_based", "R&D", "collaborative", "product_focused"],
      "deal_breakers": ["bland_food", "disorganization", "carelessness"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Food Technology",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Plant-based meat alternatives and sustainable packaging driving innovation."
    },
    "content": {
      "short_desc": "Develops new food products and ensures safety.",
      "long_desc": "Food Scientists create the snacks on supermarket shelves. You work in a lab to improve flavor, texture, and shelf-life. You also ensure food is safe to eat and meets regulations.",
      "day_in_life": ["Develop new flavor formulas", "Test food shelf-life", "Ensure factory hygiene"],
      "tags": ["Science", "Food", "Innovation"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["food", "chemistry", "cooking", "nutrition"],
      "related_career_ids": ["health_nutritionist", "eng_chemical_engineer"]
    }
  },
  {
    "id": "tech_penetration_tester",
    "title": "Ethical Hacker (Penetration Tester)",
    "domain": "Technology",
    "slug": "ethical-hacker",
    "match_profile": {
      "interests": ["hacking", "breaking_things", "security", "code"],
      "personality": ["curious", "persistent", "creative", "skeptical"],
      "work_style": ["remote_friendly", "project_based", "intellectual", "challenging"],
      "deal_breakers": ["routine_maintenance", "rules_without_reason", "boredom"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / CEH Certification",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 3000000,
      "display_range": "₹8L - ₹30L per year",
      "pay_structure": "Salary + Bounties"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Low",
      "future_trend": "AI is creating new attack vectors, requiring human ingenuity to find them."
    },
    "content": {
      "short_desc": "Legally hacks systems to find security weaknesses.",
      "long_desc": "Pen Testers are paid to break into computers. Companies hire you to attack their websites and networks to find holes before the bad guys do. It requires thinking like a criminal to stop one.",
      "day_in_life": ["Scan networks for vulnerabilities", "Write exploit scripts", "Document findings in reports"],
      "tags": ["Tech", "Security", "High Pay"]
    },
    "meta": {
      "popularity_rank": 15,
      "search_keywords": ["hacker", "cyber", "security", "exploit"],
      "related_career_ids": ["tech_cybersecurity_analyst", "tech_backend_engineer"]
    }
  },
  {
    "id": "arts_conservator",
    "title": "Art Conservator",
    "domain": "Arts & Design",
    "slug": "art-conservator",
    "match_profile": {
      "interests": ["art", "chemistry", "history", "restoration"],
      "personality": ["patient", "gentle", "detail_oriented", "reverent"],
      "work_style": ["lab/studio", "quiet", "precise", "slow_paced"],
      "deal_breakers": ["shaking_hands", "rushing", "modern_art_only"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Art Conservation",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Low",
      "future_trend": "Niche field; high value placed on restoring physical heritage."
    },
    "content": {
      "short_desc": "Restores and preserves damaged artwork and artifacts.",
      "long_desc": "Conservators save history. You use chemistry and artistic skill to clean dirty paintings, fix broken statues, and prevent decay. You work in museums or private studios.",
      "day_in_life": ["Analyze paint layers under microscope", "Clean old canvas", "Repair pottery cracks"],
      "tags": ["Arts", "History", "Chemistry"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["museum", "restoration", "painting", "history"],
      "related_career_ids": ["arts_museum_curator", "science_chemist"]
    }
  },
  {
    "id": "finance_financial_planner",
    "title": "Personal Financial Planner",
    "domain": "Finance",
    "slug": "financial-planner",
    "match_profile": {
      "interests": ["money", "helping_people", "planning", "investing"],
      "personality": ["trustworthy", "organized", "empathetic", "prudent"],
      "work_style": ["office_based", "client_facing", "social", "advisory"],
      "deal_breakers": ["high_risk_gambling", "isolation", "disorganization"]
    },
    "requirements": {
      "education_level": "certification",
      "degree_field": "CFP (Certified Financial Planner)",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 2000000,
      "display_range": "₹4L - ₹20L per year",
      "pay_structure": "Fee Based / Commission"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Robo-advisors handle basics; humans needed for complex family estate planning."
    },
    "content": {
      "short_desc": "Helps individuals manage their money and plan for retirement.",
      "long_desc": "Financial Planners help regular people get rich slowly. You analyze a family's income, create budgets, and recommend investments for retirement or education. Trust is your product.",
      "day_in_life": ["Meet clients to discuss goals", "Create investment portfolios", "Review tax strategies"],
      "tags": ["Finance", "Helping People", "Money"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["money", "investing", "retirement", "budget"],
      "related_career_ids": ["finance_investment_banker", "business_insurance_agent"]
    }
  },
  {
    "id": "govt_urban_designer",
    "title": "Urban Designer",
    "domain": "Government",
    "slug": "urban-designer",
    "match_profile": {
      "interests": ["cities", "architecture", "public_spaces", "design"],
      "personality": ["visual", "collaborative", "visionary", "civic_minded"],
      "work_style": ["studio/office", "project_based", "visual", "team_based"],
      "deal_breakers": ["ugly_buildings", "chaos", "short_term_thinking"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Urban Design / Architecture",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1800000,
      "display_range": "₹5L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Focusing on walkability and climate-resilient city centers."
    },
    "content": {
      "short_desc": "Designs the physical layout of public spaces and cities.",
      "long_desc": "Urban Designers bridge architecture and city planning. You focus on how a city looks and feels—designing plazas, streetscapes, and waterfronts to be beautiful and functional.",
      "day_in_life": ["Sketch public square concepts", "Build 3D city models", "Present to city council"],
      "tags": ["Design", "Government", "Architecture"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["city", "design", "public", "architecture"],
      "related_career_ids": ["eng_architect", "govt_urban_planner"]
    }
  },
  {
    "id": "business_safety_specialist",
    "title": "Occupational Health & Safety Specialist",
    "domain": "Business",
    "slug": "safety-specialist",
    "match_profile": {
      "interests": ["safety", "rules", "health", "inspection"],
      "personality": ["meticulous", "responsible", "authoritative", "observant"],
      "work_style": ["field/factory", "compliance_driven", "detail_oriented", "mobile"],
      "deal_breakers": ["recklessness", "cutting_corners", "desk_only"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Occupational Health / Engineering",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Strict regulations in construction and manufacturing ensure job security."
    },
    "content": {
      "short_desc": "Ensures workplaces are safe and comply with regulations.",
      "long_desc": "Safety Specialists prevent accidents. You inspect factories and construction sites to ensure workers wear gear and machinery is safe. You have the power to shut down operations if they are dangerous.",
      "day_in_life": ["Inspect factory floor", "Train staff on safety", "Investigate accidents"],
      "tags": ["Business", "Safety", "Industrial"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["safety", "osha", "factory", "health"],
      "related_career_ids": ["eng_industrial_engineer", "biz_risk_manager"]
    }
  },
  {
    "id": "tech_scrum_master",
    "title": "Scrum Master",
    "domain": "Technology",
    "slug": "scrum-master",
    "match_profile": {
      "interests": ["efficiency", "people", "process", "coaching"],
      "personality": ["organized", "encouraging", "diplomatic", "servant_leader"],
      "work_style": ["office/remote", "meeting_heavy", "collaborative", "social"],
      "deal_breakers": ["working_alone", "coding_only", "dictatorship"]
    },
    "requirements": {
      "education_level": "certification",
      "degree_field": "Certified Scrum Master (CSM)",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 2500000,
      "display_range": "₹10L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Role evolving into 'Agile Coach' as teams become more self-managing."
    },
    "content": {
      "short_desc": "Facilitates agile development teams to work efficiently.",
      "long_desc": "Scrum Masters help software teams move fast. You run daily meetings, remove obstacles (blockers), and ensure the team follows Agile processes. You are a coach, not a boss.",
      "day_in_life": ["Host daily stand-up", "Facilitate sprint planning", "Remove team blockers"],
      "tags": ["Tech", "Management", "Agile"]
    },
    "meta": {
      "popularity_rank": 25,
      "search_keywords": ["agile", "manager", "software", "team"],
      "related_career_ids": ["mgmt_project_manager", "tech_product_manager"]
    }
  },
  {
    "id": "media_audio_producer",
    "title": "Audio Producer",
    "domain": "Media & Marketing",
    "slug": "audio-producer",
    "match_profile": {
      "interests": ["music", "sound", "business", "creativity"],
      "personality": ["decisive", "creative", "organized", "musical"],
      "work_style": ["studio_based", "collaborative", "project_based", "auditory"],
      "deal_breakers": ["silence", "routine", "visual_focus"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Music Production",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Salary or Project Fee"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "AI music generation is a tool, but human curation remains essential."
    },
    "content": {
      "short_desc": "Oversees the recording and production of music or audio.",
      "long_desc": "Audio Producers manage the sound. You guide musicians in the studio, choose the right equipment, and oversee the mixing process to create a polished final song or podcast.",
      "day_in_life": ["Direct recording session", "Edit audio tracks", "Mix final master"],
      "tags": ["Creative", "Music", "Media"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["music", "studio", "recording", "sound"],
      "related_career_ids": ["media_sound_engineer", "creative_musician"]
    }
  },
  {
    "id": "trade_wind_tech",
    "title": "Wind Turbine Technician",
    "domain": "Skilled Trade",
    "slug": "wind-turbine-technician",
    "match_profile": {
      "interests": ["renewable_energy", "heights", "mechanics", "electricity"],
      "personality": ["brave", "technical", "independent", "physically_fit"],
      "work_style": ["outdoors", "extreme_heights", "travel", "hazardous"],
      "deal_breakers": ["fear_of_heights", "office_job", "claustrophobia"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Wind Energy Technology",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Low",
      "future_trend": "Fastest growing trade job due to global green energy shift."
    },
    "content": {
      "short_desc": "Installs and repairs wind turbines.",
      "long_desc": "Wind Techs work in the clouds. You climb 300-foot towers to fix turbines. It is exciting, high-paying work that is crucial for the green energy revolution.",
      "day_in_life": ["Climb turbine tower", "Inspect gearbox", "Repair electrical systems"],
      "tags": ["Trade", "Green Energy", "Adventure"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["energy", "wind", "technician", "green"],
      "related_career_ids": ["trade_solar_installer", "trade_electrician"]
    }
  },
  {
    "id": "health_prosthetist",
    "title": "Prosthetist / Orthotist",
    "domain": "Healthcare",
    "slug": "prosthetist",
    "match_profile": {
      "interests": ["design", "mechanics", "helping_people", "anatomy"],
      "personality": ["innovative", "empathetic", "craftsman", "technical"],
      "work_style": ["clinic/workshop", "hands_on", "patient_facing", "custom_work"],
      "deal_breakers": ["mass_production", "pure_desk_job", "impatience"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Prosthetics & Orthotics",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "3D printing is revolutionizing how custom limbs are made."
    },
    "content": {
      "short_desc": "Designs and fits artificial limbs and braces.",
      "long_desc": "Prosthetists give people mobility. You design and build artificial legs and arms customized to each patient. It combines engineering, healthcare, and sculpture.",
      "day_in_life": ["Take patient measurements", "Mold artificial limb", "Fit and adjust device"],
      "tags": ["Healthcare", "Engineering", "Helping People"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["limbs", "medical", "design", "rehab"],
      "related_career_ids": ["eng_biomedical_engineer", "health_physiotherapist"]
    }
  },
  {
    "id": "govt_policy_analyst",
    "title": "Public Policy Analyst",
    "domain": "Government",
    "slug": "policy-analyst",
    "match_profile": {
      "interests": ["politics", "society", "research", "writing"],
      "personality": ["intellectual", "objective", "persuasive", "detail_oriented"],
      "work_style": ["office_based", "research_heavy", "strategic", "slow_paced"],
      "deal_breakers": ["action_oriented", "manual_labor", "simplicity"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Public Policy / Pol Sci",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Data-driven policy making is becoming the standard."
    },
    "content": {
      "short_desc": "Researches and recommends government policies.",
      "long_desc": "Policy Analysts shape the rules of society. You study data to see if laws are working and recommend changes to fix problems like poverty or pollution. You work for think tanks or the government.",
      "day_in_life": ["Research social issues", "Analyze government data", "Write policy briefs"],
      "tags": ["Government", "Research", "Society"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["politics", "law", "research", "government"],
      "related_career_ids": ["govt_ias_officer", "finance_economist"]
    }
  },
  {
    "id": "arts_costume_designer",
    "title": "Costume Designer",
    "domain": "Arts & Design",
    "slug": "costume-designer",
    "match_profile": {
      "interests": ["fashion", "history", "movies", "sewing"],
      "personality": ["creative", "visual", "detail_oriented", "storyteller"],
      "work_style": ["studio/set", "project_based", "visual", "hands_on"],
      "deal_breakers": ["corporate_dress_code", "spreadsheets", "uniforms"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Fashion Design / Costume",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1500000,
      "display_range": "₹3L - ₹15L per year",
      "pay_structure": "Project Fee"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Fantasy/Sci-Fi productions driving demand for complex costumes."
    },
    "content": {
      "short_desc": "Designs outfits for characters in movies and plays.",
      "long_desc": "Costume Designers dress the characters. You research history and fabric to create clothes that tell the audience who a character is before they speak. You work on movie sets or theaters.",
      "day_in_life": ["Sketch character outfits", "Source fabrics", "Fit actors for costumes"],
      "tags": ["Creative", "Fashion", "Cinema"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["fashion", "movie", "clothes", "theater"],
      "related_career_ids": ["creative_fashion_designer", "creative_film_director"]
    }
  },
  {
    "id": "finance_forensic_accountant",
    "title": "Forensic Accountant",
    "domain": "Finance",
    "slug": "forensic-accountant",
    "match_profile": {
      "interests": ["money", "investigation", "law", "puzzles"],
      "personality": ["skeptical", "analytical", "patient", "detail_oriented"],
      "work_style": ["office_based", "investigative", "quiet", "document_heavy"],
      "deal_breakers": ["creativity", "trusting_nature", "sales"]
    },
    "requirements": {
      "education_level": "certification",
      "degree_field": "CA / CPA + Forensic Cert",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 2500000,
      "display_range": "₹8L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Crypto fraud investigation is a massive new growth area."
    },
    "content": {
      "short_desc": "Investigates financial crimes like fraud and embezzlement.",
      "long_desc": "Forensic Accountants are financial detectives. You look through company books to find where money was stolen or hidden. You often work with police and testify in court.",
      "day_in_life": ["Audit suspicious transactions", "Trace hidden assets", "Write reports for court"],
      "tags": ["Finance", "Law", "Investigation"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["fraud", "audit", "money", "crime"],
      "related_career_ids": ["finance_chartered_accountant", "science_forensic_scientist"]
    }
  },
  {
    "id": "science_park_ranger",
    "title": "Park Ranger / Forest Officer",
    "domain": "Science",
    "slug": "park-ranger",
    "match_profile": {
      "interests": ["nature", "wildlife", "law_enforcement", "outdoors"],
      "personality": ["independent", "observant", "brave", "nature_lover"],
      "work_style": ["field_work", "remote", "physical", "solitary"],
      "deal_breakers": ["city_life", "office_politics", "crowds"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Forestry / Zoology / Exam",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Govt Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Eco-tourism management is becoming a larger part of the job."
    },
    "content": {
      "short_desc": "Protects national parks and wildlife.",
      "long_desc": "Park Rangers enforce the law in nature. You patrol forests, prevent poaching, fight wildfires, and help tourists. It is a dream job for those who want to live in the wild.",
      "day_in_life": ["Patrol forest areas", "Monitor wildlife populations", "Assist visitors"],
      "tags": ["Nature", "Government", "Adventure"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["forest", "animals", "police", "nature"],
      "related_career_ids": ["science_zoologist", "science_conservation_scientist"]
    }
  },
  {
    "id": "science_cartographer",
    "title": "Cartographer",
    "domain": "Science",
    "slug": "cartographer",
    "match_profile": {
      "interests": ["maps", "geography", "design", "data"],
      "personality": ["visual", "precise", "patient", "detail_oriented"],
      "work_style": ["computer_based", "visual", "technical", "quiet"],
      "deal_breakers": ["getting_lost", "chaos", "abstract_art"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Geography / Geomatics",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 350000,
      "max": 1000000,
      "display_range": "₹3.5L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Digital mapping for self-driving cars is the new frontier."
    },
    "content": {
      "short_desc": "Creates maps and geographic visualizations.",
      "long_desc": "Cartographers make maps. While old maps were drawn by hand, today you use satellite data and software to create digital maps for GPS, governments, or apps. It blends art and science.",
      "day_in_life": ["Collect geographic data", "Design map layouts", "Update digital maps"],
      "tags": ["Science", "Design", "Geography"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["maps", "gps", "geography", "design"],
      "related_career_ids": ["science_gis_specialist", "govt_urban_planner"]
    }
  },
  {
    "id": "tech_ux_researcher",
    "title": "UX Researcher",
    "domain": "Technology",
    "slug": "ux-researcher",
    "match_profile": {
      "interests": ["psychology", "technology", "people", "research"],
      "personality": ["empathetic", "curious", "analytical", "listener"],
      "work_style": ["office/remote", "collaborative", "investigative", "social"],
      "deal_breakers": ["coding_only", "isolation", "guessing"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "HCI / Psychology / Design",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Essential for making complex AI tools usable for humans."
    },
    "content": {
      "short_desc": "Studies user behavior to improve product design.",
      "long_desc": "UX Researchers find out what users really want. You interview people, run usability tests, and analyze behavior to tell designers how to make an app better. You are the voice of the user.",
      "day_in_life": ["Interview users", "Conduct usability tests", "Present insights to team"],
      "tags": ["Tech", "Psychology", "Design"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["research", "user", "app", "psychology"],
      "related_career_ids": ["creative_ui_ux_designer", "tech_product_manager"]
    }
  },
  {
    "id": "trade_elevator_mechanic",
    "title": "Elevator Mechanic",
    "domain": "Skilled Trade",
    "slug": "elevator-mechanic",
    "match_profile": {
      "interests": ["mechanics", "electronics", "heights", "fixing_things"],
      "personality": ["brave", "technical", "problem_solver", "cautious"],
      "work_style": ["field_work", "hazardous", "technical", "high_pay"],
      "deal_breakers": ["claustrophobia", "fear_of_heights", "office"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "ITI / Apprenticeship",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Wage + Overtime"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "High-rise construction ensures permanent demand for this role."
    },
    "content": {
      "short_desc": "Installs and repairs elevators and escalators.",
      "long_desc": "Elevator Mechanics have one of the highest-paying trade jobs. You work in shafts and machine rooms to keep lifts running safely. It requires knowledge of both electricity and hydraulics.",
      "day_in_life": ["Inspect elevator cables", "Troubleshoot control boards", "Rescue trapped passengers"],
      "tags": ["Trade", "High Pay", "Technical"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["lift", "mechanic", "construction", "repair"],
      "related_career_ids": ["trade_electrician", "eng_mechanical_engineer"]
    }
  },
  {
    "id": "biz_market_research_analyst",
    "title": "Market Research Analyst",
    "domain": "Business",
    "slug": "market-research-analyst",
    "match_profile": {
      "interests": ["data", "psychology", "trends", "marketing"],
      "personality": ["analytical", "inquisitive", "objective", "detail_oriented"],
      "work_style": ["office_based", "data_heavy", "strategic", "independent"],
      "deal_breakers": ["guessing", "sales_calls", "manual_labor"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Marketing / Statistics",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "AI gathers data, but analysts interpret the 'why' behind consumer behavior."
    },
    "content": {
      "short_desc": "Studies market conditions to help companies sell products.",
      "long_desc": "Market Researchers figure out what people want to buy. You use surveys and data to tell companies who their customers are and what price they will pay. You turn data into strategy.",
      "day_in_life": ["Design consumer surveys", "Analyze sales trends", "Present reports to marketing"],
      "tags": ["Business", "Data", "Marketing"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["marketing", "data", "survey", "trends"],
      "related_career_ids": ["business_digital_marketing_manager", "tech_data_scientist"]
    }
  },
  {
    "id": "science_nanotechnologist",
    "title": "Nanotechnologist",
    "domain": "Science",
    "slug": "nanotechnologist",
    "match_profile": {
      "interests": ["atoms", "physics", "chemistry", "future_tech"],
      "personality": ["innovative", "meticulous", "patient", "intellectual"],
      "work_style": ["lab_based", "microscopic", "R&D", "quiet"],
      "deal_breakers": ["macro_scale", "imprecision", "rushing"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "M.Tech Nanotechnology",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1800000,
      "display_range": "₹6L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Revolutionizing medicine (drug delivery) and electronics (chips)."
    },
    "content": {
      "short_desc": "Manipulates matter at the atomic scale to create new materials.",
      "long_desc": "Nanotechnologists build things atom by atom. You work with materials 100,000 times smaller than a hair to create super-strong fabrics, better batteries, or cancer-fighting particles.",
      "day_in_life": ["Synthesize nanoparticles", "Use electron microscopes", "Test material properties"],
      "tags": ["Science", "Future", "Tech"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["atom", "tech", "material", "research"],
      "related_career_ids": ["science_physicist", "eng_chemical_engineer"]
    }
  },
  {
    "id": "legal_human_rights_lawyer",
    "title": "Human Rights Lawyer",
    "domain": "Legal",
    "slug": "human-rights-lawyer",
    "match_profile": {
      "interests": ["justice", "helping_people", "law", "activism"],
      "personality": ["passionate", "brave", "articulate", "resilient"],
      "work_style": ["field/court", "emotional", "adversarial", "mission_driven"],
      "deal_breakers": ["profit_over_people", "injustice", "apathy"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "LLB",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1200000,
      "display_range": "₹3L - ₹12L (Often NGO based)",
      "pay_structure": "Salary or Grants"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Digital rights and privacy are the new frontier of human rights law."
    },
    "content": {
      "short_desc": "Defends the fundamental rights of vulnerable people.",
      "long_desc": "Human Rights Lawyers fight for justice. You represent refugees, victims of abuse, or wrongly accused people against governments or corporations. It is low pay compared to corporate law, but high impact.",
      "day_in_life": ["Interview victims", "File court petitions", "Lobby for legal changes"],
      "tags": ["Law", "Social Impact", "Justice"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["justice", "ngo", "lawyer", "activist"],
      "related_career_ids": ["social_social_worker", "legal_litigation_lawyer"]
    }
  },
  {
    "id": "biz_logistics_coordinator",
    "title": "Logistics Coordinator",
    "domain": "Business",
    "slug": "logistics-coordinator",
    "match_profile": {
      "interests": ["transport", "scheduling", "organization", "puzzles"],
      "personality": ["efficient", "calm_under_pressure", "communicative", "organized"],
      "work_style": ["office_based", "phone_heavy", "fast_paced", "problem_solving"],
      "deal_breakers": ["delays", "disorganization", "silence"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Supply Chain / Business",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "E-commerce boom ensures high demand for last-mile delivery coordination."
    },
    "content": {
      "short_desc": "Coordinates the movement of goods and delivery schedules.",
      "long_desc": "Logistics Coordinators make sure the package arrives on time. You track shipments, coordinate with truck drivers, and solve problems when things get stuck in customs. You are the traffic controller of commerce.",
      "day_in_life": ["Track shipment locations", "Schedule truck pickups", "Resolve delivery delays"],
      "tags": ["Business", "Logistics", "Operations"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["shipping", "delivery", "supply_chain", "trucks"],
      "related_career_ids": ["business_supply_chain_manager", "transport_truck_driver"]
    }
  },
  {
    "id": "health_mri_technologist",
    "title": "MRI Technologist",
    "domain": "Healthcare",
    "slug": "mri-technologist",
    "match_profile": {
      "interests": ["technology", "anatomy", "patient_care", "physics"],
      "personality": ["precise", "patient", "technical", "calm"],
      "work_style": ["hospital_based", "technical", "routine", "sanitary"],
      "deal_breakers": ["claustrophobia", "imprecision", "chaos"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Radiology Tech",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "AI improves image clarity, but patient positioning remains manual."
    },
    "content": {
      "short_desc": "Operates MRI scanners to create images of patients' bodies.",
      "long_desc": "MRI Techs run the big scanners. You position patients safely, operate the magnetic machine, and ensure clear images for the doctor to read. You combine tech skills with patient care.",
      "day_in_life": ["Screen patients for metal", "Operate MRI console", "Ensure image quality"],
      "tags": ["Healthcare", "Tech", "Hospital"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["scan", "hospital", "xray", "tech"],
      "related_career_ids": ["health_radiologist", "health_radiation_therapist"]
    }
  },
  {
    "id": "hospitality_restaurant_owner",
    "title": "Restaurant Owner / Restaurateur",
    "domain": "Hospitality",
    "slug": "restaurant-owner",
    "match_profile": {
      "interests": ["food", "business", "hospitality", "risk"],
      "personality": ["entrepreneurial", "resilient", "social", "leader"],
      "work_style": ["on_site", "high_stress", "long_hours", "customer_facing"],
      "deal_breakers": ["stability", "9_to_5", "quiet"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "Experience / Capital",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 0,
      "max": 5000000,
      "display_range": "Highly Variable (Profit/Loss)",
      "pay_structure": "Business Profit"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Ghost kitchens (delivery only) are a growing low-cost entry model."
    },
    "content": {
      "short_desc": "Owns and manages a restaurant business.",
      "long_desc": "Restaurateurs build dining experiences. You manage the menu, the staff, the finances, and the marketing. It is a high-risk lifestyle business that can be incredibly rewarding or incredibly draining.",
      "day_in_life": ["Manage inventory", "Oversee dinner service", "Handle business finances"],
      "tags": ["Business", "Food", "Entrepreneur"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["food", "business", "cafe", "owner"],
      "related_career_ids": ["hospitality_head_chef", "hospitality_hotel_manager"]
    }
  },
  {
    "id": "hr_technical_recruiter",
    "title": "Technical Recruiter",
    "domain": "Human Resources",
    "slug": "technical-recruiter",
    "match_profile": {
      "interests": ["people", "technology", "sales", "networking"],
      "personality": ["persuasive", "social", "organized", "resilient"],
      "work_style": ["office/remote", "phone_heavy", "commission_based", "social"],
      "deal_breakers": ["introversion", "tech_illiteracy", "slow_pace"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "HR / Business",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Salary + Commission"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "AI matches resumes, but recruiters are needed to close the candidate."
    },
    "content": {
      "short_desc": "Finds and hires specialized technology talent.",
      "long_desc": "Tech Recruiters hunt for talent. You find software engineers for companies, interview them, and negotiate their salaries. You need to speak enough 'tech' to understand if a candidate is good.",
      "day_in_life": ["Source candidates on LinkedIn", "Screen resumes", "Negotiate job offers"],
      "tags": ["Business", "HR", "Tech"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["hiring", "jobs", "hr", "headhunter"],
      "related_career_ids": ["mgmt_hr_manager", "sales_b2b_sales_manager"]
    }
  },
  {
    "id": "finance_fund_manager",
    "title": "Investment Fund Manager",
    "domain": "Finance",
    "slug": "fund-manager",
    "match_profile": {
      "interests": ["markets", "investing", "risk", "strategy"],
      "personality": ["decisive", "analytical", "confident", "competitive"],
      "work_style": ["high_pressure", "office_based", "performance_driven", "lucrative"],
      "deal_breakers": ["losing_money", "indecision", "low_stakes"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "MBA / CFA",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 2500000,
      "max": 10000000,
      "display_range": "₹25L - ₹1Cr+ per year",
      "pay_structure": "Salary + Performance Fee"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "AI trading is common, but strategic oversight of large funds remains human."
    },
    "content": {
      "short_desc": "Manages large pools of money to generate returns for investors.",
      "long_desc": "Fund Managers invest millions. You decide which stocks or assets to buy for a mutual fund or hedge fund. It is one of the highest-pressure and highest-paying jobs in the world.",
      "day_in_life": ["Analyze market news", "Execute large trades", "Meet with investors"],
      "tags": ["Finance", "High Pay", "Strategy"]
    },
    "meta": {
      "popularity_rank": 20,
      "search_keywords": ["stocks", "wall_street", "investing", "money"],
      "related_career_ids": ["finance_investment_banker", "finance_financial_analyst"]
    }
  },
  {
    "id": "science_botanist",
    "title": "Botanist",
    "domain": "Science",
    "slug": "botanist",
    "match_profile": {
      "interests": ["plants", "nature", "biology", "environment"],
      "personality": ["patient", "observant", "detail_oriented", "peaceful"],
      "work_style": ["field/lab", "nature_based", "research", "quiet"],
      "deal_breakers": ["rushing", "city_only", "corporate_environment"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "M.Sc Botany",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 350000,
      "max": 1000000,
      "display_range": "₹3.5L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Critical for researching climate-resistant crops and new medicines."
    },
    "content": {
      "short_desc": "Studies plants and their relationship to the environment.",
      "long_desc": "Botanists are plant scientists. You might trek into rainforests to find new species or work in a lab breeding better crops. You understand the green life that sustains the planet.",
      "day_in_life": ["Collect plant specimens", "Study plant genetics", "Write research papers"],
      "tags": ["Science", "Nature", "Plants"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["plants", "flowers", "nature", "biology"],
      "related_career_ids": ["science_agricultural_scientist", "arts_landscape_architect"]
    }
  },
  {
    "id": "tech_game_designer",
    "title": "Video Game Designer",
    "domain": "Technology",
    "slug": "game-designer",
    "match_profile": {
      "interests": ["games", "storytelling", "mechanics", "creativity"],
      "personality": ["imaginative", "collaborative", "logical", "passionate"],
      "work_style": ["studio_based", "creative", "screen_heavy", "team_based"],
      "deal_breakers": ["coding_only", "boring_software", "isolation"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Game Design",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1800000,
      "display_range": "₹5L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Generative AI helps create levels, but core mechanics and 'fun' are human designed."
    },
    "content": {
      "short_desc": "Designs the rules, stories, and mechanics of video games.",
      "long_desc": "Game Designers decide what makes a game fun. Unlike developers (who code), you write the story, design the levels, and balance the difficulty. You are the architect of the player's experience.",
      "day_in_life": ["Write game design documents", "Design level layouts", "Playtest and balance gameplay"],
      "tags": ["Tech", "Creative", "Gaming"]
    },
    "meta": {
      "popularity_rank": 15,
      "search_keywords": ["games", "story", "level_design", "creative"],
      "related_career_ids": ["tech_game_developer", "creative_animator"]
    }
  },
  {
    "id": "trade_diesel_mechanic",
    "title": "Diesel Mechanic",
    "domain": "Skilled Trade",
    "slug": "diesel-mechanic",
    "match_profile": {
      "interests": ["engines", "trucks", "fixing_things", "grease"],
      "personality": ["practical", "strong", "reliable", "diagnostic"],
      "work_style": ["workshop", "heavy_lifting", "dirty", "hands_on"],
      "deal_breakers": ["clean_hands", "office_work", "delicate_tasks"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "ITI Diesel Mechanic",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 900000,
      "display_range": "₹3L - ₹9L per year",
      "pay_structure": "Wage + Overtime"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Trucks and ships will use diesel for decades despite EV growth."
    },
    "content": {
      "short_desc": "Repairs diesel engines in trucks, buses, and heavy machinery.",
      "long_desc": "Diesel Mechanics fix the big stuff. You work on massive engines that power trucks and construction equipment. It requires more strength and pays better than regular auto repair.",
      "day_in_life": ["Diagnose engine failure", "Replace heavy parts", "Test drive trucks"],
      "tags": ["Trade", "Mechanic", "Heavy Duty"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["truck", "engine", "repair", "mechanic"],
      "related_career_ids": ["trade_mechanic", "eng_mechanical_engineer"]
    }
  },
  {
    "id": "health_marriage_therapist",
    "title": "Marriage and Family Therapist",
    "domain": "Healthcare",
    "slug": "marriage-therapist",
    "match_profile": {
      "interests": ["relationships", "psychology", "listening", "conflict_resolution"],
      "personality": ["empathetic", "neutral", "patient", "insightful"],
      "work_style": ["clinic_based", "emotional", "conversation_heavy", "private"],
      "deal_breakers": ["taking_sides", "impatience", "isolation"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Psychology / Counseling",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Fees per Session"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "High demand as mental health stigma decreases in families."
    },
    "content": {
      "short_desc": "Helps couples and families resolve conflicts.",
      "long_desc": "Therapists save relationships. You help couples communicate better and navigate divorce or family crises. You need to be a neutral referee in emotional situations.",
      "day_in_life": ["Conduct couple's therapy", "Mediate family arguments", "Develop coping strategies"],
      "tags": ["Healthcare", "Relationships", "Psychology"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["therapy", "marriage", "counseling", "help"],
      "related_career_ids": ["health_clinical_psychologist", "legal_mediator"]
    }
  },
  {
    "id": "arts_stage_manager",
    "title": "Stage Manager",
    "domain": "Arts & Design",
    "slug": "stage-manager",
    "match_profile": {
      "interests": ["theater", "organization", "leadership", "events"],
      "personality": ["calm", "authoritative", "organized", "reliable"],
      "work_style": ["theater/set", "high_stress", "behind_scenes", "dynamic"],
      "deal_breakers": ["spotlight", "chaos", "slow_pace"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Theater Arts / Management",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1000000,
      "display_range": "₹3L - ₹10L per year",
      "pay_structure": "Salary or Project Fee"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Live events tech is getting complex, requiring tech-savvy managers."
    },
    "content": {
      "short_desc": "Coordinates the logistics of theater productions.",
      "long_desc": "Stage Managers run the show. You call the lighting cues, manage the actors, and solve problems backstage during a live performance. If you do your job right, the audience never notices you.",
      "day_in_life": ["Manage rehearsal schedule", "Call cues during show", "Coordinate backstage crew"],
      "tags": ["Arts", "Management", "Theater"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["theater", "show", "event", "manager"],
      "related_career_ids": ["business_event_planner", "creative_film_director"]
    }
  },
  {
    "id": "tech_cto",
    "title": "Chief Technology Officer (CTO)",
    "domain": "Technology",
    "slug": "cto",
    "match_profile": {
      "interests": ["strategy", "leadership", "technology", "business"],
      "personality": ["visionary", "decisive", "authoritative", "charismatic"],
      "work_style": ["executive", "high_pressure", "strategic", "public_facing"],
      "deal_breakers": ["coding_all_day", "entry_level", "micromanagement"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "CS / MBA + 10y Exp",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 3000000,
      "max": 10000000,
      "display_range": "₹30L - ₹1Cr+ per year",
      "pay_structure": "Salary + Equity"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Focus shifting to AI governance and cybersecurity strategy."
    },
    "content": {
      "short_desc": "Leads the technology strategy for an entire company.",
      "long_desc": "The CTO is the boss of tech. You decide what technology a company uses, hire the engineering teams, and align tech goals with business goals. It is a top-executive role.",
      "day_in_life": ["Set company tech strategy", "Present to board of directors", "Mentor engineering VPs"],
      "tags": ["Tech", "Executive", "Leadership"]
    },
    "meta": {
      "popularity_rank": 5,
      "search_keywords": ["boss", "executive", "tech", "leader"],
      "related_career_ids": ["tech_cloud_architect", "tech_product_manager"]
    }
  },
  {
    "id": "govt_customs_officer",
    "title": "Customs Officer",
    "domain": "Government",
    "slug": "customs-officer",
    "match_profile": {
      "interests": ["law_enforcement", "borders", "inspection", "security"],
      "personality": ["suspicious", "observant", "authoritative", "disciplined"],
      "work_style": ["airport/port", "shift_work", "enforcement", "active"],
      "deal_breakers": ["corruption", "gullibility", "desk_job"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "SSC CGL Exam",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1200000,
      "display_range": "₹5L - ₹12L per year",
      "pay_structure": "Govt Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "AI scanners help, but human intuition is key for catching smugglers."
    },
    "content": {
      "short_desc": "Inspects goods entering the country to prevent smuggling.",
      "long_desc": "Customs Officers guard the borders. You work at airports or seaports, checking luggage and cargo for illegal items like drugs or gold. You protect the country's economy and security.",
      "day_in_life": ["Inspect passenger luggage", "Check cargo manifests", "Question suspicious travelers"],
      "tags": ["Government", "Security", "Law"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["airport", "police", "tax", "border"],
      "related_career_ids": ["govt_police_officer", "biz_logistics_coordinator"]
    }
  },
  {
    "id": "eng_drilling_engineer",
    "title": "Drilling Engineer",
    "domain": "Engineering",
    "slug": "drilling-engineer",
    "match_profile": {
      "interests": ["oil", "mechanics", "geology", "planning"],
      "personality": ["analytical", "tough", "practical", "technical"],
      "work_style": ["field/office", "high_cost", "technical", "hazardous"],
      "deal_breakers": ["environmental_concern", "city_only", "low_pay"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Petroleum Engineering",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 3500000,
      "display_range": "₹10L - ₹35L per year",
      "pay_structure": "Salary + Bonuses"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Shift towards geothermal drilling techniques."
    },
    "content": {
      "short_desc": "Designs and supervises drilling operations for oil, gas, or water.",
      "long_desc": "Drilling Engineers dig deep holes. You design the wells used to extract oil or gas, ensuring they don't collapse or explode. It is a high-stakes engineering role with massive budgets.",
      "day_in_life": ["Design well trajectory", "Supervise rig crew", "Monitor drilling pressure"],
      "tags": ["Engineering", "Energy", "High Pay"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["oil", "gas", "energy", "rig"],
      "related_career_ids": ["eng_petroleum_engineer", "science_geologist"]
    }
  },
  {
    "id": "biz_ecommerce_specialist",
    "title": "E-commerce Specialist",
    "domain": "Business",
    "slug": "ecommerce-specialist",
    "match_profile": {
      "interests": ["online_shopping", "analytics", "marketing", "web"],
      "personality": ["adaptable", "data_driven", "entrepreneurial", "tech_savvy"],
      "work_style": ["computer_based", "fast_paced", "sales_driven", "remote_friendly"],
      "deal_breakers": ["offline_retail", "slow_pace", "tech_phobia"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Marketing / Business",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Medium",
      "future_trend": "Direct-to-consumer (DTC) brands and AI personalization driving growth."
    },
    "content": {
      "short_desc": "Manages online stores and sales strategies.",
      "long_desc": "E-commerce Specialists run online shops. You manage product listings on Amazon or Shopify, run ads, and analyze sales data to get more people to click 'buy'.",
      "day_in_life": ["Optimize product listings", "Analyze conversion rates", "Manage digital ad spend"],
      "tags": ["Business", "Tech", "Sales"]
    },
    "meta": {
      "popularity_rank": 25,
      "search_keywords": ["amazon", "shopify", "sales", "online"],
      "related_career_ids": ["business_digital_marketing_manager", "tech_seo_specialist"]
    }
  },
  {
    "id": "health_neurologist",
    "title": "Neurologist",
    "domain": "Healthcare",
    "slug": "neurologist",
    "match_profile": {
      "interests": ["brain", "nerves", "science", "puzzles"],
      "personality": ["intellectual", "patient", "analytical", "observant"],
      "work_style": ["hospital_based", "complex", "diagnostic", "high_stakes"],
      "deal_breakers": ["simplicity", "rushing", "blood"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "MBBS + MD/DM Neurology",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1500000,
      "max": 4000000,
      "display_range": "₹15L - ₹40L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Aging population increasing Alzheimer's and stroke cases."
    },
    "content": {
      "short_desc": "Treats disorders of the brain and nervous system.",
      "long_desc": "Neurologists are brain doctors. You diagnose and treat epilepsy, strokes, and Alzheimer's. It is one of the most intellectually complex fields of medicine.",
      "day_in_life": ["Conduct neurological exams", "Interpret brain scans", "Prescribe treatment plans"],
      "tags": ["Medical", "Brain", "Science"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["brain", "doctor", "nerves", "medical"],
      "related_career_ids": ["health_general_surgeon", "health_psychiatrist"]
    }
  },
  {
    "id": "arts_archivist",
    "title": "Archivist",
    "domain": "Arts & Design",
    "slug": "archivist",
    "match_profile": {
      "interests": ["history", "organizing", "preservation", "research"],
      "personality": ["meticulous", "quiet", "patient", "respectful"],
      "work_style": ["archive/library", "solitary", "dusty", "organized"],
      "deal_breakers": ["chaos", "throwing_things_away", "noise"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "History / Library Science",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 900000,
      "display_range": "₹3L - ₹9L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Medium",
      "future_trend": "Digitization of records is the main task now."
    },
    "content": {
      "short_desc": "Preserves and organizes historical documents.",
      "long_desc": "Archivists save the past. You organize old documents, films, and digital records for governments or museums so they last forever. You decide what is worth saving for history.",
      "day_in_life": ["Catalog historical documents", "Digitize old records", "Assist historians"],
      "tags": ["History", "Organization", "Quiet"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["history", "library", "records", "museum"],
      "related_career_ids": ["edu_librarian", "arts_museum_curator"]
    }
  },
  {
    "id": "science_biochemist",
    "title": "Biochemist",
    "domain": "Science",
    "slug": "biochemist",
    "match_profile": {
      "interests": ["chemistry", "biology", "research", "lab_work"],
      "personality": ["curious", "meticulous", "analytical", "patient"],
      "work_style": ["lab_based", "academic", "detail_oriented", "sedentary"],
      "deal_breakers": ["sales", "public_speaking", "rushing"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Biochemistry",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary + Grants"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Crucial for developing new drugs and understanding genetic diseases."
    },
    "content": {
      "short_desc": "Studies the chemical processes within living organisms.",
      "long_desc": "Biochemists explore the chemistry of life. You analyze DNA, proteins, and cell functions to understand how life works at a molecular level. Your research leads to new medicines and vaccines.",
      "day_in_life": ["Analyze enzyme reactions", "Run centrifuge machines", "Document chemical experiments"],
      "tags": ["Science", "Research", "Health"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["dna", "chemistry", "lab", "molecules"],
      "related_career_ids": ["science_microbiologist", "science_biotechnologist"]
    }
  },
  {
    "id": "science_archaeologist",
    "title": "Archaeologist",
    "domain": "Science",
    "slug": "archaeologist",
    "match_profile": {
      "interests": ["history", "digging", "puzzles", "travel"],
      "personality": ["patient", "adventurous", "observant", "intellectual"],
      "work_style": ["field_work", "outdoor", "research", "travel_heavy"],
      "deal_breakers": ["office_cubicle", "fast_results", "cleanliness"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Archaeology / Anthropology",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 350000,
      "max": 1000000,
      "display_range": "₹3.5L - ₹10L per year",
      "pay_structure": "Salary or Grants"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Low",
      "future_trend": "Technology like LIDAR is changing how sites are discovered."
    },
    "content": {
      "short_desc": "Studies human history by excavating artifacts.",
      "long_desc": "Archaeologists are time travelers. You dig up ancient cities, pottery, and bones to piece together the story of human civilization. It involves hard physical labor and meticulous cleaning of artifacts.",
      "day_in_life": ["Excavate dig sites", "Clean and catalog artifacts", "Map historical ruins"],
      "tags": ["Science", "History", "Adventure"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["history", "dig", "ancient", "ruins"],
      "related_career_ids": ["arts_museum_curator", "science_geologist"]
    }
  },
  {
    "id": "health_surgical_technologist",
    "title": "Surgical Technologist",
    "domain": "Healthcare",
    "slug": "surgical-technologist",
    "match_profile": {
      "interests": ["surgery", "anatomy", "organization", "helping_people"],
      "personality": ["alert", "disciplined", "strong_stomach", "responsive"],
      "work_style": ["hospital_based", "sterile", "high_pressure", "team_based"],
      "deal_breakers": ["squeamishness", "distraction", "sitting_down"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Surgical Technology",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Robotic surgery still requires techs to manage the equipment."
    },
    "content": {
      "short_desc": "Assists surgeons by preparing the operating room and instruments.",
      "long_desc": "Surgical Techs are the surgeon's right hand. You sterilize tools, set up the OR, and pass instruments to the doctor during surgery. You must know the name of every tool and anticipate the surgeon's needs.",
      "day_in_life": ["Sterilize surgical instruments", "Pass tools to surgeon", "Count sponges/needles"],
      "tags": ["Healthcare", "Hospital", "Technical"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["surgery", "hospital", "assistant", "medical"],
      "related_career_ids": ["health_general_surgeon", "health_registered_nurse"]
    }
  },
  {
    "id": "health_dental_hygienist",
    "title": "Dental Hygienist",
    "domain": "Healthcare",
    "slug": "dental-hygienist",
    "match_profile": {
      "interests": ["teeth", "cleaning", "health", "people"],
      "personality": ["friendly", "gentle", "detail_oriented", "routine"],
      "work_style": ["clinic_based", "routine", "patient_facing", "sanitary"],
      "deal_breakers": ["bad_breath", "chaos", "night_shifts"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Dental Hygiene",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 600000,
      "display_range": "₹2.5L - ₹6L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Preventative care focus keeps demand steady."
    },
    "content": {
      "short_desc": "Cleans teeth and educates patients on oral health.",
      "long_desc": "Dental Hygienists do the cleaning. You remove plaque, take X-rays, and teach patients how to floss. It offers regular hours and a clean work environment.",
      "day_in_life": ["Clean patient teeth", "Take dental X-rays", "Teach proper brushing"],
      "tags": ["Healthcare", "Routine", "People"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["dentist", "teeth", "cleaning", "health"],
      "related_career_ids": ["health_dentist", "health_phlebotomist"]
    }
  },
  {
    "id": "trade_pipefitter",
    "title": "Pipefitter / Steamfitter",
    "domain": "Skilled Trade",
    "slug": "pipefitter",
    "match_profile": {
      "interests": ["pipes", "welding", "industrial", "blueprints"],
      "personality": ["strong", "practical", "precise", "hardworking"],
      "work_style": ["industrial", "hazardous", "physical", "technical"],
      "deal_breakers": ["office_work", "low_pay", "delicate_work"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "ITI / Apprenticeship",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 350000,
      "max": 900000,
      "display_range": "₹3.5L - ₹9L per year",
      "pay_structure": "Wage + Overtime"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Essential for building new factories and power plants."
    },
    "content": {
      "short_desc": "Installs high-pressure piping systems for industry.",
      "long_desc": "Pipefitters work on the big pipes. Unlike plumbers (who do water/sewage), you install pipes for chemicals, steam, or oil in factories and power plants. It involves welding and reading complex blueprints.",
      "day_in_life": ["Read industrial blueprints", "Cut and thread pipes", "Weld pipe joints"],
      "tags": ["Trade", "Industrial", "Construction"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["pipes", "factory", "welding", "construction"],
      "related_career_ids": ["trade_plumber", "trade_welder"]
    }
  },
  {
    "id": "trade_heavy_equipment_operator",
    "title": "Heavy Equipment Operator",
    "domain": "Skilled Trade",
    "slug": "heavy-equipment-operator",
    "match_profile": {
      "interests": ["driving", "machines", "construction", "earth_moving"],
      "personality": ["alert", "careful", "practical", "solitary"],
      "work_style": ["field_work", "machinery_cab", "physical", "loud"],
      "deal_breakers": ["office", "talking_all_day", "delicate_work"]
    },
    "requirements": {
      "education_level": "license",
      "degree_field": "Heavy Equipment License",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Wage + Overtime"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Remote control operation of bulldozers is beginning to appear."
    },
    "content": {
      "short_desc": "Drives bulldozers, excavators, and backhoes.",
      "long_desc": "Operators move the earth. You drive massive machines to dig foundations, clear roads, and move debris. It requires good hand-eye coordination and safety awareness.",
      "day_in_life": ["Operate excavator", "Perform machine safety checks", "Level ground for construction"],
      "tags": ["Trade", "Construction", "Machinery"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["bulldozer", "construction", "driver", "digging"],
      "related_career_ids": ["trade_crane_operator", "transport_truck_driver"]
    }
  },
  {
    "id": "business_franchise_owner",
    "title": "Franchise Owner",
    "domain": "Business",
    "slug": "franchise-owner",
    "match_profile": {
      "interests": ["business", "management", "brand", "wealth"],
      "personality": ["ambitious", "organized", "leader", "risk_taker"],
      "work_style": ["on_site", "management", "customer_facing", "stressful"],
      "deal_breakers": ["being_an_employee", "poverty", "creative_freedom"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "Capital Investment",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 5000000,
      "display_range": "Variable (Profit Based)",
      "pay_structure": "Business Profit"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Food and service franchises remain a popular path to entrepreneurship."
    },
    "content": {
      "short_desc": "Owns and operates a branch of a larger brand (e.g., McDonald's).",
      "long_desc": "Franchise Owners buy a business in a box. You run a store using an established brand's name and systems. It offers lower risk than starting from scratch, but you must follow corporate rules.",
      "day_in_life": ["Manage store staff", "Ensure brand compliance", "Review profit and loss"],
      "tags": ["Business", "Management", "Entrepreneur"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["business", "shop", "manager", "investment"],
      "related_career_ids": ["hospitality_restaurant_owner", "biz_retail_manager"]
    }
  },
  {
    "id": "business_pharma_sales_rep",
    "title": "Pharmaceutical Sales Representative",
    "domain": "Business",
    "slug": "pharma-sales-rep",
    "match_profile": {
      "interests": ["sales", "medicine", "travel", "networking"],
      "personality": ["charming", "persistent", "articulate", "energetic"],
      "work_style": ["field_work", "travel_heavy", "social", "independent"],
      "deal_breakers": ["introversion", "desk_job", "rejection_sensitivity"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "B.Pharm / Science / MBA",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary + Commission"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Doctors are harder to see in person; digital sales skills are needed."
    },
    "content": {
      "short_desc": "Promotes medications to doctors and pharmacists.",
      "long_desc": "Pharma Reps sell science. You visit hospitals and clinics to educate doctors about your company's drugs. You need to understand medical data and have the charm to get past the receptionist.",
      "day_in_life": ["Visit doctor clinics", "Present drug benefits", "Attend medical conferences"],
      "tags": ["Sales", "Health", "Travel"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["sales", "medical", "drugs", "marketing"],
      "related_career_ids": ["sales_b2b_sales_manager", "health_pharmacist"]
    }
  },
  {
    "id": "arts_sound_designer",
    "title": "Sound Designer",
    "domain": "Arts & Design",
    "slug": "sound-designer",
    "match_profile": {
      "interests": ["sound", "film", "creativity", "technology"],
      "personality": ["creative", "auditory", "detail_oriented", "imaginative"],
      "work_style": ["studio_based", "solitary", "computer_heavy", "artistic"],
      "deal_breakers": ["silence", "office_work", "visual_focus"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Sound Design / Audio Eng",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Project Fee / Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Immersive 3D audio for VR/AR is a huge growth area."
    },
    "content": {
      "short_desc": "Creates sound effects and audio landscapes for media.",
      "long_desc": "Sound Designers create the world you hear. You record and edit sound effects for movies, games, or theater—like the sound of a lightsaber or a dinosaur roar. It creates the emotional atmosphere.",
      "day_in_life": ["Record foley sounds", "Edit audio in Pro Tools", "Sync sound to video"],
      "tags": ["Creative", "Media", "Tech"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["audio", "movie", "game", "sound"],
      "related_career_ids": ["media_sound_engineer", "media_video_editor"]
    }
  },
  {
    "id": "arts_set_designer",
    "title": "Set Designer",
    "domain": "Arts & Design",
    "slug": "set-designer",
    "match_profile": {
      "interests": ["architecture", "theater", "drawing", "building"],
      "personality": ["creative", "visionary", "collaborative", "practical"],
      "work_style": ["studio/site", "project_based", "visual", "hands_on"],
      "deal_breakers": ["virtual_only", "corporate_style", "routine"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Theater Design / Architecture",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 350000,
      "max": 1200000,
      "display_range": "₹3.5L - ₹12L per year",
      "pay_structure": "Project Fee"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Virtual production stages (LED walls) are changing how sets are built."
    },
    "content": {
      "short_desc": "Designs the physical surroundings for movies and plays.",
      "long_desc": "Set Designers build worlds. You draw plans and oversee the construction of scenery for a play or movie. You decide what the environment looks like, from a futuristic spaceship to a Victorian living room.",
      "day_in_life": ["Draw set blueprints", "Build scale models", "Oversee carpenters"],
      "tags": ["Creative", "Design", "Construction"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["movie", "theater", "design", "art"],
      "related_career_ids": ["arts_stage_manager", "creative_art_director"]
    }
  },
  {
    "id": "tech_data_analyst",
    "title": "Data Analyst",
    "domain": "Technology",
    "slug": "data-analyst",
    "match_profile": {
      "interests": ["data", "spreadsheets", "patterns", "business"],
      "personality": ["logical", "curious", "objective", "communicative"],
      "work_style": ["office_based", "computer_heavy", "reporting", "structured"],
      "deal_breakers": ["guessing", "creative_writing", "chaos"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Math / CS / Business",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1200000,
      "display_range": "₹5L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "AI does the coding, but analysts explain the 'so what' to humans."
    },
    "content": {
      "short_desc": "Interprets data to help companies make better decisions.",
      "long_desc": "Data Analysts turn numbers into stories. You use Excel, SQL, and Tableau to clean data and find trends. You answer questions like 'Why did sales drop last month?' for the boss.",
      "day_in_life": ["Clean datasets in SQL", "Build dashboards in Tableau", "Present findings"],
      "tags": ["Tech", "Data", "Business"]
    },
    "meta": {
      "popularity_rank": 10,
      "search_keywords": ["excel", "sql", "data", "reporting"],
      "related_career_ids": ["tech_data_scientist", "biz_market_research_analyst"]
    }
  },
  {
    "id": "tech_it_support_specialist",
    "title": "IT Support Specialist",
    "domain": "Technology",
    "slug": "it-support",
    "match_profile": {
      "interests": ["computers", "fixing_problems", "helping_people", "technology"],
      "personality": ["patient", "helpful", "calm", "technical"],
      "work_style": ["office_based", "reactive", "service_oriented", "tech_focused"],
      "deal_breakers": ["angry_customers", "deep_coding", "strategy_only"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "IT / CompTIA A+",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "AI chatbots handle basic resets; humans handle hardware and complex issues."
    },
    "content": {
      "short_desc": "Helps employees and customers solve computer problems.",
      "long_desc": "IT Support Specialists are the first line of defense. You fix printers, reset passwords, and troubleshoot software issues. It is a great starting point for a career in technology.",
      "day_in_life": ["Answer helpdesk tickets", "Install new software", "Fix broken laptops"],
      "tags": ["Tech", "Service", "Entry Level"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["helpdesk", "computer", "repair", "tech"],
      "related_career_ids": ["tech_sysadmin", "tech_network_engineer"]
    }
  },
  {
    "id": "service_hotel_concierge",
    "title": "Hotel Concierge",
    "domain": "Service",
    "slug": "hotel-concierge",
    "match_profile": {
      "interests": ["city_life", "helping_people", "networking", "luxury"],
      "personality": ["charming", "resourceful", "social", "patient"],
      "work_style": ["hotel_lobby", "social", "problem_solving", "service"],
      "deal_breakers": ["introversion", "saying_no", "desk_work"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Hospitality Management",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Salary + Tips"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "High",
      "future_trend": "Apps replace basic booking, but luxury guests still demand human service."
    },
    "content": {
      "short_desc": "Assists hotel guests with reservations, transport, and advice.",
      "long_desc": "Concierges make the impossible happen. You book hard-to-get restaurant tables, arrange tours, and solve any problem a guest has. You are the expert on your city.",
      "day_in_life": ["Book dinner reservations", "Recommend local attractions", "Arrange guest transport"],
      "tags": ["Service", "Hospitality", "Social"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["hotel", "luxury", "travel", "guide"],
      "related_career_ids": ["hospitality_hotel_manager", "hospitality_travel_agent"]
    }
  },
  {
    "id": "service_flight_instructor",
    "title": "Flight Instructor",
    "domain": "Transportation",
    "slug": "flight-instructor",
    "match_profile": {
      "interests": ["flying", "teaching", "safety", "aviation"],
      "personality": ["patient", "calm", "authoritative", "observant"],
      "work_style": ["cockpit", "teaching", "high_stakes", "active"],
      "deal_breakers": ["fear_of_flying", "impatience", "risk_taking"]
    },
    "requirements": {
      "education_level": "license",
      "degree_field": "CFI (Certified Flight Instructor)",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1500000,
      "display_range": "₹6L - ₹15L per year",
      "pay_structure": "Hourly / Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Huge pilot shortage means instructors are in high demand to train new recruits."
    },
    "content": {
      "short_desc": "Teaches students how to fly aircraft.",
      "long_desc": "Flight Instructors create the next generation of pilots. You teach students how to take off, land, and handle emergencies. It is often a stepping stone to becoming an airline pilot.",
      "day_in_life": ["Conduct flight briefings", "Teach in-air maneuvers", "Grade student performance"],
      "tags": ["Aviation", "Teaching", "Skill"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["pilot", "teacher", "flying", "plane"],
      "related_career_ids": ["transport_commercial_pilot", "edu_primary_teacher"]
    }
  },
  {
    "id": "legal_court_reporter",
    "title": "Court Reporter",
    "domain": "Legal",
    "slug": "court-reporter",
    "match_profile": {
      "interests": ["typing", "law", "listening", "precision"],
      "personality": ["fast", "focused", "quiet", "neutral"],
      "work_style": ["courtroom", "sedentary", "high_concentration", "solitary"],
      "deal_breakers": ["distraction", "talking", "slow_typing"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Stenography Certification",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Salary / Per Page"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "High",
      "future_trend": "AI transcription is replacing this role rapidly, except for sensitive trials."
    },
    "content": {
      "short_desc": "Transcribes spoken speech into written form in court.",
      "long_desc": "Court Reporters type at the speed of speech. You use a stenotype machine to record every word said during a trial. You create the official legal record of proceedings.",
      "day_in_life": ["Transcribe court proceedings", "Edit transcripts for accuracy", "File legal records"],
      "tags": ["Legal", "Admin", "Skill"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["typing", "law", "court", "record"],
      "related_career_ids": ["legal_paralegal", "tech_technical_writer"]
    }
  },
  {
    "id": "edu_private_tutor",
    "title": "Private Tutor",
    "domain": "Education",
    "slug": "private-tutor",
    "match_profile": {
      "interests": ["teaching", "subjects", "mentoring", "flexibility"],
      "personality": ["patient", "encouraging", "adaptable", "knowledgeable"],
      "work_style": ["home/remote", "one_on_one", "flexible", "freelance"],
      "deal_breakers": ["classroom_management", "rigid_hours", "low_pay"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Subject Expertise",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 1000000,
      "display_range": "Variable (Hourly)",
      "pay_structure": "Hourly Fees"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Online tutoring platforms are expanding the market globally."
    },
    "content": {
      "short_desc": "Provides one-on-one academic instruction to students.",
      "long_desc": "Tutors help students improve their grades. You focus on specific subjects like Math or English, customizing lessons for one student at a time. It offers great flexibility and freedom.",
      "day_in_life": ["Prepare lesson materials", "Teach students online/offline", "Assign and grade practice work"],
      "tags": ["Education", "Freelance", "Teaching"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["teacher", "math", "help", "school"],
      "related_career_ids": ["edu_primary_teacher", "edu_special_education_teacher"]
    }
  },
  {
    "id": "transport_bus_driver",
    "title": "Bus Driver",
    "domain": "Transportation",
    "slug": "bus-driver",
    "match_profile": {
      "interests": ["driving", "city", "routine", "people"],
      "personality": ["responsible", "punctual", "patient", "alert"],
      "work_style": ["driving", "public_facing", "routine", "sedentary"],
      "deal_breakers": ["traffic_rage", "irregular_hours", "desk_work"]
    },
    "requirements": {
      "education_level": "license",
      "degree_field": "Heavy Vehicle License",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 600000,
      "display_range": "₹2.5L - ₹6L per year",
      "pay_structure": "Wage"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Autonomous buses are testing, but human drivers needed for safety for years."
    },
    "content": {
      "short_desc": "Drives buses to transport passengers on fixed routes.",
      "long_desc": "Bus Drivers keep the city moving. You drive a specific route, collecting fares and ensuring passenger safety. It is a stable job that requires patience in traffic.",
      "day_in_life": ["Inspect bus safety", "Drive scheduled route", "Assist passengers"],
      "tags": ["Transport", "Service", "Driving"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["driver", "city", "transport", "bus"],
      "related_career_ids": ["transport_truck_driver", "transport_train_driver"]
    }
  },
  {
    "id": "govt_city_clerk",
    "title": "City Clerk / Municipal Officer",
    "domain": "Government",
    "slug": "city-clerk",
    "match_profile": {
      "interests": ["records", "government", "service", "order"],
      "personality": ["organized", "bureaucratic", "helpful", "consistent"],
      "work_style": ["office_based", "public_facing", "routine", "stable"],
      "deal_breakers": ["creativity", "fast_pace", "chaos"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Public Admin / Any Degree",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Govt Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Digital governance is moving services online, reducing counter staff."
    },
    "content": {
      "short_desc": "Maintains official records and assists citizens with permits.",
      "long_desc": "City Clerks handle the paperwork of the city. You issue birth certificates, marriage licenses, and building permits. It is a stable government job serving the community.",
      "day_in_life": ["Issue official documents", "Maintain city records", "Assist citizens at counter"],
      "tags": ["Government", "Admin", "Stable"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["admin", "office", "government", "clerk"],
      "related_career_ids": ["legal_paralegal", "edu_librarian"]
    }
  },
  {
    "id": "media_book_editor",
    "title": "Book Editor",
    "domain": "Media & Marketing",
    "slug": "book-editor",
    "match_profile": {
      "interests": ["reading", "grammar", "storytelling", "language"],
      "personality": ["critical", "focused", "patient", "creative"],
      "work_style": ["sedentary", "remote_friendly", "quiet", "intellectual"],
      "deal_breakers": ["bad_grammar", "noise", "public_speaking"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "English / Literature",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Medium",
      "future_trend": "Self-publishing is growing, creating demand for freelance editors."
    },
    "content": {
      "short_desc": "Reviews and refines manuscripts for publication.",
      "long_desc": "Editors polish stories. You work with authors to improve their plot, characters, and grammar. You help turn a rough draft into a bestseller.",
      "day_in_life": ["Read manuscripts", "Write editorial notes", "Correct grammar errors"],
      "tags": ["Creative", "Books", "Writing"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["books", "writing", "publishing", "english"],
      "related_career_ids": ["media_content_writer", "creative_copywriter"]
    }
  },
  {
    "id": "arts_florist",
    "title": "Florist",
    "domain": "Arts & Design",
    "slug": "florist",
    "match_profile": {
      "interests": ["flowers", "design", "nature", "decor"],
      "personality": ["artistic", "visual", "gentle", "morning_person"],
      "work_style": ["shop_based", "visual", "hands_on", "early_hours"],
      "deal_breakers": ["hay_fever", "office_computer", "stress"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Floristry / Experience",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 800000,
      "display_range": "₹2.5L - ₹8L per year",
      "pay_structure": "Salary or Business Profit"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Luxury events and subscriptions keeping demand steady."
    },
    "content": {
      "short_desc": "Arranges flowers for sale and events.",
      "long_desc": "Florists create art with nature. You buy fresh flowers, condition them, and arrange beautiful bouquets for weddings, funerals, or gifts. It requires an eye for color and design.",
      "day_in_life": ["Buy flowers at market", "Arrange bouquets", "Deliver event flowers"],
      "tags": ["Creative", "Nature", "Design"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["flowers", "wedding", "design", "shop"],
      "related_career_ids": ["creative_interior_designer", "arts_landscape_architect"]
    }
  },
  {
    "id": "biz_compliance_officer",
    "title": "Compliance Officer",
    "domain": "Business",
    "slug": "compliance-officer",
    "match_profile": {
      "interests": ["rules", "law", "business", "investigation"],
      "personality": ["ethical", "detail_oriented", "cautious", "principled"],
      "work_style": ["office_based", "regulatory", "audit_focused", "structured"],
      "deal_breakers": ["rule_breaking", "ambiguity", "creative_chaos"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Business / Law / Finance",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Increasingly complex global regulations drive demand."
    },
    "content": {
      "short_desc": "Ensures a company follows all laws and internal regulations.",
      "long_desc": "Compliance Officers are the internal police of a company. You ensure the business follows laws regarding money laundering, safety, or data privacy. You prevent scandals and lawsuits.",
      "day_in_life": ["Audit company policies", "Train staff on regulations", "Report violations to board"],
      "tags": ["Business", "Law", "Corporate"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["compliance", "audit", "law", "rules"],
      "related_career_ids": ["finance_forensic_accountant", "legal_company_secretary"]
    }
  },
  {
    "id": "edu_university_registrar",
    "title": "University Registrar",
    "domain": "Education",
    "slug": "university-registrar",
    "match_profile": {
      "interests": ["education", "records", "organization", "students"],
      "personality": ["organized", "bureaucratic", "helpful", "systematic"],
      "work_style": ["university_office", "administrative", "stable", "routine"],
      "deal_breakers": ["teaching", "chaos", "sales"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Higher Education Admin",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Digital student records are standard, focusing role on data integrity."
    },
    "content": {
      "short_desc": "Manages student records and course registration.",
      "long_desc": "Registrars keep the university running. You handle student enrollment, grades, transcripts, and graduation schedules. It is a vital administrative role in higher education.",
      "day_in_life": ["Process student enrollments", "Manage course schedules", "Issue official transcripts"],
      "tags": ["Education", "Admin", "Stable"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["college", "admin", "records", "university"],
      "related_career_ids": ["edu_school_principal", "edu_librarian"]
    }
  },
  {
    "id": "health_art_therapist",
    "title": "Art Therapist",
    "domain": "Healthcare",
    "slug": "art-therapist",
    "match_profile": {
      "interests": ["art", "psychology", "healing", "creativity"],
      "personality": ["empathetic", "creative", "patient", "intuitive"],
      "work_style": ["clinic/studio", "emotional", "hands_on", "quiet"],
      "deal_breakers": ["analytical_only", "rushing", "judgment"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Art Therapy",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 900000,
      "display_range": "₹3L - ₹9L per year",
      "pay_structure": "Salary or Fees"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Growing recognition of holistic mental health treatments."
    },
    "content": {
      "short_desc": "Uses art creation to help patients express emotions.",
      "long_desc": "Art Therapists combine psychology with creativity. You help patients suffering from trauma or anxiety express feelings through painting or drawing when words are not enough.",
      "day_in_life": ["Lead art sessions", "Analyze patient artwork", "Collaborate with psychologists"],
      "tags": ["Healthcare", "Creative", "Psychology"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["art", "therapy", "mental_health", "painting"],
      "related_career_ids": ["health_clinical_psychologist", "health_occupational_therapist"]
    }
  },
  {
    "id": "health_music_therapist",
    "title": "Music Therapist",
    "domain": "Healthcare",
    "slug": "music-therapist",
    "match_profile": {
      "interests": ["music", "healing", "psychology", "helping_people"],
      "personality": ["musical", "compassionate", "sensitive", "engaging"],
      "work_style": ["clinic/hospital", "auditory", "interactive", "emotional"],
      "deal_breakers": ["silence", "corporate_metrics", "isolation"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Music Therapy",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 900000,
      "display_range": "₹3L - ₹9L per year",
      "pay_structure": "Salary or Fees"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Effective for Alzheimer's and autism care, driving niche demand."
    },
    "content": {
      "short_desc": "Uses music to improve patients' physical and emotional health.",
      "long_desc": "Music Therapists use sound to heal. You play instruments or sing with patients to improve their memory, motor skills, or mood. It is powerful work often used with the elderly or special needs children.",
      "day_in_life": ["Plan music sessions", "Play instruments for patients", "Track therapeutic progress"],
      "tags": ["Healthcare", "Music", "Helping People"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["music", "therapy", "sound", "healing"],
      "related_career_ids": ["creative_musician", "edu_special_education_teacher"]
    }
  },
  {
    "id": "finance_payroll_specialist",
    "title": "Payroll Specialist",
    "domain": "Finance",
    "slug": "payroll-specialist",
    "match_profile": {
      "interests": ["numbers", "routine", "compliance", "finance"],
      "personality": ["reliable", "detail_oriented", "discrete", "punctual"],
      "work_style": ["office_based", "deadline_driven", "repetitive", "quiet"],
      "deal_breakers": ["creativity", "errors", "public_speaking"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Accounting / Commerce",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "High",
      "future_trend": "Software automates calculation, but human oversight for compliance remains."
    },
    "content": {
      "short_desc": "Ensures employees are paid correctly and on time.",
      "long_desc": "Payroll Specialists make sure everyone gets their paycheck. You calculate wages, taxes, and benefits. It requires extreme accuracy and trustworthiness with confidential data.",
      "day_in_life": ["Process timesheets", "Calculate tax deductions", "Issue salary payments"],
      "tags": ["Finance", "Admin", "HR"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["salary", "accounting", "hr", "finance"],
      "related_career_ids": ["finance_chartered_accountant", "mgmt_hr_manager"]
    }
  },
  {
    "id": "finance_credit_analyst",
    "title": "Credit Analyst",
    "domain": "Finance",
    "slug": "credit-analyst",
    "match_profile": {
      "interests": ["risk", "data", "finance", "investigation"],
      "personality": ["skeptical", "analytical", "objective", "thorough"],
      "work_style": ["office_based", "data_heavy", "decision_making", "sedentary"],
      "deal_breakers": ["sales", "optimism", "ambiguity"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Finance / Economics",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "AI scores credit instantly; analysts focus on complex corporate loans."
    },
    "content": {
      "short_desc": "Assesses the creditworthiness of individuals or companies.",
      "long_desc": "Credit Analysts decide who gets a loan. You review financial history to determine if a borrower can pay back the money. You protect the bank from bad debt.",
      "day_in_life": ["Review loan applications", "Analyze financial statements", "Recommend approval/denial"],
      "tags": ["Finance", "Banking", "Analysis"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["loan", "bank", "risk", "money"],
      "related_career_ids": ["finance_financial_analyst", "finance_loan_officer"]
    }
  },
  {
    "id": "finance_loan_officer",
    "title": "Loan Officer",
    "domain": "Finance",
    "slug": "loan-officer",
    "match_profile": {
      "interests": ["sales", "helping_people", "money", "real_estate"],
      "personality": ["persuasive", "friendly", "helpful", "goal_oriented"],
      "work_style": ["office/bank", "client_facing", "sales_driven", "social"],
      "deal_breakers": ["backend_work", "isolation", "fixed_salary_only"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Finance / Business",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1000000,
      "display_range": "₹3L - ₹10L per year",
      "pay_structure": "Salary + Commission"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Digital lending is growing, but mortgage loans still use human officers."
    },
    "content": {
      "short_desc": "Helps clients apply for loans and mortgages.",
      "long_desc": "Loan Officers are the face of the bank. You help people buy homes or start businesses by guiding them through the loan process. It is a mix of sales and financial advice.",
      "day_in_life": ["Meet loan applicants", "Explain mortgage options", "Coordinate with underwriters"],
      "tags": ["Finance", "Sales", "Banking"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["bank", "mortgage", "sales", "finance"],
      "related_career_ids": ["finance_credit_analyst", "business_real_estate_agent"]
    }
  },
  {
    "id": "tech_hardware_engineer",
    "title": "Computer Hardware Engineer",
    "domain": "Technology",
    "slug": "hardware-engineer",
    "match_profile": {
      "interests": ["circuits", "building", "physics", "computers"],
      "personality": ["logical", "precise", "innovative", "patient"],
      "work_style": ["lab_based", "technical", "hands_on", "R&D"],
      "deal_breakers": ["pure_coding", "sales", "imprecision"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Computer Engineering / Electronics",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2500000,
      "display_range": "₹6L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Chip design for AI and specialized processors is booming."
    },
    "content": {
      "short_desc": "Designs and tests computer chips and circuit boards.",
      "long_desc": "Hardware Engineers build the physical parts of computers. You design processors, memory boards, or routers. You work with electricity and physics to make computers faster and smaller.",
      "day_in_life": ["Design circuit schematics", "Test hardware prototypes", "Analyze system performance"],
      "tags": ["Tech", "Engineering", "Hardware"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["chip", "intel", "circuit", "computer"],
      "related_career_ids": ["eng_electrical_engineer", "eng_robotics_engineer"]
    }
  },
  {
    "id": "tech_telecom_engineer",
    "title": "Telecommunications Engineer",
    "domain": "Technology",
    "slug": "telecom-engineer",
    "match_profile": {
      "interests": ["signals", "communication", "infrastructure", "radio"],
      "personality": ["technical", "analytical", "practical", "systematic"],
      "work_style": ["field/office", "technical", "connectivity", "essential"],
      "deal_breakers": ["art", "creative_writing", "isolation"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Telecommunications / Electronics",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "5G rollout and satellite internet (Starlink) driving high demand."
    },
    "content": {
      "short_desc": "Designs and maintains communication networks like 5G.",
      "long_desc": "Telecom Engineers keep the world connected. You design and fix the systems that transmit data, voice, and video. You work on fiber optics, satellites, and mobile towers.",
      "day_in_life": ["Plan network topology", "Test signal strength", "Troubleshoot outages"],
      "tags": ["Tech", "Infrastructure", "5G"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["5g", "network", "internet", "signal"],
      "related_career_ids": ["tech_network_engineer", "eng_electrical_engineer"]
    }
  },
  {
    "id": "service_barber",
    "title": "Professional Barber",
    "domain": "Service",
    "slug": "barber",
    "match_profile": {
      "interests": ["style", "hair", "socializing", "craft"],
      "personality": ["friendly", "chatty", "precise", "stylish"],
      "work_style": ["shop_based", "social", "standing", "hands_on"],
      "deal_breakers": ["silence", "desk_job", "bad_hygiene"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Barbering School",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 800000,
      "display_range": "₹2L - ₹8L per year",
      "pay_structure": "Commission / Tips"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Very Low",
      "future_trend": "Men's grooming is booming; luxury barber shops are a trend."
    },
    "content": {
      "short_desc": "Cuts and styles men's hair and beards.",
      "long_desc": "Barbers are artists with scissors. You cut hair, shave beards, and act as a therapist for your clients. It is a social job where building a loyal client base ensures success.",
      "day_in_life": ["Consult on hair style", "Perform haircut/shave", "Sanitize tools"],
      "tags": ["Service", "Creative", "Social"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["hair", "salon", "grooming", "style"],
      "related_career_ids": ["creative_makeup_artist", "service_esthetician"]
    }
  },
  {
    "id": "service_esthetician",
    "title": "Esthetician / Skin Care Specialist",
    "domain": "Service",
    "slug": "esthetician",
    "match_profile": {
      "interests": ["skin", "beauty", "health", "helping_people"],
      "personality": ["gentle", "observant", "clean", "friendly"],
      "work_style": ["spa/clinic", "quiet", "one_on_one", "hands_on"],
      "deal_breakers": ["rough_hands", "rush", "dirt"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Cosmetology / Esthetics",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 800000,
      "display_range": "₹2.5L - ₹8L per year",
      "pay_structure": "Salary + Tips"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Focus on anti-aging treatments and medical spa services."
    },
    "content": {
      "short_desc": "Provides skin treatments like facials and peels.",
      "long_desc": "Estheticians are skin experts. You analyze skin health, perform facials, and advise on skincare routines. You work in spas or dermatology clinics helping people feel confident.",
      "day_in_life": ["Analyze client skin", "Perform facial treatment", "Recommend skincare products"],
      "tags": ["Beauty", "Health", "Service"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["skin", "spa", "beauty", "facial"],
      "related_career_ids": ["creative_makeup_artist", "health_dermatologist"]
    }
  },
  {
    "id": "health_massage_therapist",
    "title": "Massage Therapist",
    "domain": "Healthcare",
    "slug": "massage-therapist",
    "match_profile": {
      "interests": ["healing", "anatomy", "relaxation", "helping_people"],
      "personality": ["calm", "strong", "intuitive", "silent"],
      "work_style": ["spa/clinic", "physical", "quiet", "hands_on"],
      "deal_breakers": ["weak_hands", "noise", "office_work"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Massage Therapy",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 900000,
      "display_range": "₹2.5L - ₹9L per year",
      "pay_structure": "Salary / Hourly"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Corporate wellness programs are hiring massage therapists."
    },
    "content": {
      "short_desc": "Uses touch to manipulate muscles and relieve pain.",
      "long_desc": "Massage Therapists heal with their hands. You treat stress or sports injuries by manipulating muscles. It requires physical stamina and knowledge of anatomy.",
      "day_in_life": ["Assess client pain points", "Perform massage therapy", "Maintain relaxing environment"],
      "tags": ["Health", "Wellness", "Physical"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["spa", "therapy", "muscle", "relax"],
      "related_career_ids": ["health_physiotherapist", "service_esthetician"]
    }
  },
  {
    "id": "media_travel_writer",
    "title": "Travel Writer / Blogger",
    "domain": "Media & Marketing",
    "slug": "travel-writer",
    "match_profile": {
      "interests": ["travel", "writing", "culture", "photography"],
      "personality": ["adventurous", "curious", "observant", "flexible"],
      "work_style": ["remote", "unpredictable", "independent", "creative"],
      "deal_breakers": ["staying_home", "routine", "stability"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "Journalism / Portfolio",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 0,
      "max": 2000000,
      "display_range": "Variable (Freelance)",
      "pay_structure": "Freelance / Ad Revenue"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Influencer marketing dominates; traditional guidebooks are declining."
    },
    "content": {
      "short_desc": "Travels to destinations and writes reviews or stories.",
      "long_desc": "Travel Writers get paid to see the world. You visit hotels, restaurants, and tourist spots to review them. It looks like a vacation, but involves tight deadlines and constant work.",
      "day_in_life": ["Visit tourist attractions", "Write blog posts/articles", "Edit travel photos"],
      "tags": ["Media", "Travel", "Creative"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["travel", "blog", "writer", "tourism"],
      "related_career_ids": ["media_content_writer", "creative_photographer"]
    }
  },
  {
    "id": "sales_technical_sales_engineer",
    "title": "Technical Sales Engineer",
    "domain": "Sales",
    "slug": "technical-sales-engineer",
    "match_profile": {
      "interests": ["technology", "sales", "explaining", "persuasion"],
      "personality": ["confident", "articulate", "knowledgeable", "social"],
      "work_style": ["client_facing", "travel_heavy", "hybrid", "lucrative"],
      "deal_breakers": ["pure_coding", "isolation", "low_pay"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Engineering / CS",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2500000,
      "display_range": "₹6L - ₹25L per year",
      "pay_structure": "Base + Commission"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "SaaS and complex industrial machinery sales require deep technical knowledge."
    },
    "content": {
      "short_desc": "Sells complex scientific or technological products.",
      "long_desc": "Sales Engineers sell complex tech. You explain how a jet engine or software platform works to potential buyers. You need the brain of an engineer and the tongue of a salesperson.",
      "day_in_life": ["Demo technical products", "Answer client technical questions", "Negotiate contracts"],
      "tags": ["Sales", "Tech", "High Pay"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["sales", "engineer", "b2b", "tech"],
      "related_career_ids": ["sales_b2b_sales_manager", "tech_software_engineer"]
    }
  },
  {
    "id": "media_broadcast_technician",
    "title": "Broadcast Technician",
    "domain": "Media & Marketing",
    "slug": "broadcast-technician",
    "match_profile": {
      "interests": ["tv", "electronics", "signals", "live_events"],
      "personality": ["calm_under_pressure", "technical", "reliable", "focused"],
      "work_style": ["studio/field", "technical", "time_critical", "backend"],
      "deal_breakers": ["fame", "creative_control", "flexible_deadlines"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Broadcast Technology",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 900000,
      "display_range": "₹3L - ₹9L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Shift from satellite trucks to IP-based streaming technology."
    },
    "content": {
      "short_desc": "Sets up and operates equipment for radio and TV broadcasts.",
      "long_desc": "Broadcast Technicians keep the signal on air. You operate cameras, soundboards, and transmission equipment for news or sports. When the screen goes black, you are the one who fixes it.",
      "day_in_life": ["Set up camera/audio gear", "Monitor signal strength", "Troubleshoot live feed"],
      "tags": ["Media", "Tech", "TV"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["tv", "radio", "studio", "tech"],
      "related_career_ids": ["media_sound_engineer", "tech_network_engineer"]
    }
  },
  {
    "id": "arts_gallery_manager",
    "title": "Art Gallery Manager",
    "domain": "Arts & Design",
    "slug": "gallery-manager",
    "match_profile": {
      "interests": ["art", "sales", "events", "curating"],
      "personality": ["sophisticated", "social", "organized", "persuasive"],
      "work_style": ["gallery", "social", "sales_driven", "aesthetic"],
      "deal_breakers": ["bad_taste", "isolation", "messiness"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Art History / Management",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary + Commission"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Low",
      "future_trend": "Online art sales are growing, but physical galleries remain prestigious."
    },
    "content": {
      "short_desc": "Manages the daily operations and sales of an art gallery.",
      "long_desc": "Gallery Managers sell art. You organize exhibitions, promote artists, and sell paintings to collectors. You bridge the gap between starving artists and wealthy buyers.",
      "day_in_life": ["Curate art displays", "Host opening events", "Negotiate sales with collectors"],
      "tags": ["Arts", "Business", "Sales"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["art", "gallery", "sales", "curator"],
      "related_career_ids": ["arts_museum_curator", "business_event_planner"]
    }
  },
  {
    "id": "media_publicist",
    "title": "Publicist",
    "domain": "Media & Marketing",
    "slug": "publicist",
    "match_profile": {
      "interests": ["fame", "media", "networking", "promotion"],
      "personality": ["outgoing", "persuasive", "resilient", "quick"],
      "work_style": ["high_energy", "phone_heavy", "social", "fast_paced"],
      "deal_breakers": ["shyness", "anonymity", "slow_results"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "PR / Communications",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Personal branding for influencers is a huge growth sector."
    },
    "content": {
      "short_desc": "Manages the public image for celebrities or brands.",
      "long_desc": "Publicists get people famous. You pitch stories to journalists, manage red carpet appearances, and do damage control during scandals. Your phone is your most important tool.",
      "day_in_life": ["Pitch stories to media", "Manage client schedule", "Write press releases"],
      "tags": ["Media", "PR", "Fame"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["pr", "celebrity", "media", "brand"],
      "related_career_ids": ["media_public_relations_specialist", "business_marketing_manager"]
    }
  },
  {
    "id": "biz_grant_writer",
    "title": "Grant Writer",
    "domain": "Business",
    "slug": "grant-writer",
    "match_profile": {
      "interests": ["writing", "research", "non_profit", "fundraising"],
      "personality": ["persuasive", "detail_oriented", "patient", "organized"],
      "work_style": ["remote_friendly", "deadline_driven", "writing_heavy", "solitary"],
      "deal_breakers": ["rejection", "public_speaking", "sales_calls"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "English / Communications",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1000000,
      "display_range": "₹3L - ₹10L per year",
      "pay_structure": "Salary / Freelance"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "AI assists drafting, but human strategy wins the funding."
    },
    "content": {
      "short_desc": "Writes proposals to secure funding for non-profits.",
      "long_desc": "Grant Writers bring in the money. You write persuasive applications to government or foundations to fund research, charities, or schools. Success is measured in dollars raised.",
      "day_in_life": ["Research funding opportunities", "Write grant proposals", "Compile budget reports"],
      "tags": ["Business", "Writing", "Non-profit"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["writing", "ngo", "funding", "proposal"],
      "related_career_ids": ["media_content_writer", "social_social_worker"]
    }
  },
  {
    "id": "science_horticulturist",
    "title": "Horticulturist",
    "domain": "Science",
    "slug": "horticulturist",
    "match_profile": {
      "interests": ["gardening", "plants", "outdoors", "science"],
      "personality": ["patient", "nurturing", "observant", "hands_on"],
      "work_style": ["outdoor/greenhouse", "physical", "peaceful", "nature_based"],
      "deal_breakers": ["office", "rushing", "technology"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Horticulture / Agriculture",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 900000,
      "display_range": "₹3L - ₹9L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Urban farming and vertical gardens are increasing demand."
    },
    "content": {
      "short_desc": "Cultivates plants for food, comfort, or beauty.",
      "long_desc": "Horticulturists are expert gardeners. You manage greenhouses, golf courses, or city parks. You know exactly what soil, light, and water every plant needs to thrive.",
      "day_in_life": ["Manage plant nurseries", "Treat plant diseases", "Design garden layouts"],
      "tags": ["Nature", "Plants", "Science"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["garden", "plants", "flowers", "nature"],
      "related_career_ids": ["science_botanist", "arts_landscape_architect"]
    }
  },
  {
    "id": "trade_land_surveyor",
    "title": "Land Surveyor",
    "domain": "Skilled Trade",
    "slug": "land-surveyor",
    "match_profile": {
      "interests": ["maps", "math", "outdoors", "geometry"],
      "personality": ["precise", "methodical", "independent", "rugged"],
      "work_style": ["field_work", "technical", "outdoor", "measurement"],
      "deal_breakers": ["guessing", "office_only", "bad_weather"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Surveying / Civil Eng",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Drones are changing how surveys are done, but human verification is law."
    },
    "content": {
      "short_desc": "Measures land boundaries for construction and legal purposes.",
      "long_desc": "Surveyors define the lines. You use GPS and lasers to measure exact property boundaries for construction or legal deeds. You are the first person on any building site.",
      "day_in_life": ["Measure land boundaries", "Create topographical maps", "Use GPS equipment"],
      "tags": ["Construction", "Math", "Outdoors"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["map", "construction", "land", "measure"],
      "related_career_ids": ["eng_civil_engineer", "science_cartographer"]
    }
  },
  {
    "id": "transport_harbor_pilot",
    "title": "Harbor Pilot / Marine Pilot",
    "domain": "Transportation",
    "slug": "harbor-pilot",
    "match_profile": {
      "interests": ["ships", "ocean", "precision", "navigation"],
      "personality": ["decisive", "calm_under_pressure", "authoritative", "experienced"],
      "work_style": ["field_work", "high_stakes", "irregular_hours", "physical"],
      "deal_breakers": ["routine_office", "fear_of_water", "junior_role"]
    },
    "requirements": {
      "education_level": "license",
      "degree_field": "Master Mariner License",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 2000000,
      "max": 8000000,
      "display_range": "₹20L - ₹80L+ per year",
      "pay_structure": "Salary / Fee per Ship"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Extremely niche role; automation cannot replace local harbor knowledge."
    },
    "content": {
      "short_desc": "Guides massive ships safely into and out of ports.",
      "long_desc": "Harbor Pilots have one of the highest-pressure jobs in the world. You board arriving ships and take control from the captain to navigate narrow channels and dock safely. One mistake costs millions.",
      "day_in_life": ["Board moving ships via rope ladder", "Navigate into port", "Direct tugboats"],
      "tags": ["Transport", "High Pay", "Expert"]
    },
    "meta": {
      "popularity_rank": 95,
      "search_keywords": ["ship", "port", "captain", "navigation"],
      "related_career_ids": ["transport_ship_captain", "eng_marine_engineer"]
    }
  },
  {
    "id": "tech_ai_ethicist",
    "title": "AI Ethicist",
    "domain": "Technology",
    "slug": "ai-ethicist",
    "match_profile": {
      "interests": ["philosophy", "technology", "law", "society"],
      "personality": ["critical", "objective", "articulate", "principled"],
      "work_style": ["office/remote", "debate_heavy", "strategic", "intellectual"],
      "deal_breakers": ["blind_coding", "profit_only_focus", "silence"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Philosophy / CS / Law",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 3000000,
      "display_range": "₹10L - ₹30L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Low",
      "future_trend": "Regulations on AI bias and safety are creating this entire industry."
    },
    "content": {
      "short_desc": "Ensures Artificial Intelligence systems are fair and safe.",
      "long_desc": "AI Ethicists keep robots in check. You analyze algorithms for bias (racism/sexism) and ensure AI is used responsibly. You sit between the coding team and the legal team.",
      "day_in_life": ["Audit algorithms for bias", "Write AI safety guidelines", "Debate product features"],
      "tags": ["Tech", "Philosophy", "Future"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["ai", "ethics", "law", "philosophy"],
      "related_career_ids": ["tech_data_scientist", "legal_policy_analyst"]
    }
  },
  {
    "id": "health_perfusionist",
    "title": "Cardiovascular Perfusionist",
    "domain": "Healthcare",
    "slug": "perfusionist",
    "match_profile": {
      "interests": ["heart", "machines", "surgery", "biology"],
      "personality": ["vigilant", "technical", "calm", "focused"],
      "work_style": ["operating_room", "life_or_death", "machine_focused", "team"],
      "deal_breakers": ["distraction", "panic", "low_tech"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Perfusion Technology",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 2000000,
      "display_range": "₹8L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Heart surgeries are increasing, ensuring steady demand."
    },
    "content": {
      "short_desc": "Operates the heart-lung machine during open-heart surgery.",
      "long_desc": "Perfusionists keep patients alive when their heart is stopped. You operate the machine that pumps blood and oxygen during surgery. It is a niche, high-responsibility medical role.",
      "day_in_life": ["Set up heart-lung bypass machine", "Monitor blood gases", "Coordinate with surgeon"],
      "tags": ["Healthcare", "Tech", "Surgery"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["heart", "surgery", "bypass", "medical"],
      "related_career_ids": ["health_surgical_technologist", "health_anesthesiologist"]
    }
  },
  {
    "id": "arts_tattoo_artist",
    "title": "Tattoo Artist",
    "domain": "Arts & Design",
    "slug": "tattoo-artist",
    "match_profile": {
      "interests": ["drawing", "art", "needles", "culture"],
      "personality": ["creative", "steady", "social", "patient"],
      "work_style": ["studio", "hands_on", "sanitary", "client_focused"],
      "deal_breakers": ["shaking_hands", "judgment", "corporate_rules"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Apprenticeship / Art Portfolio",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1500000,
      "display_range": "₹3L - ₹15L per year",
      "pay_structure": "Per Tattoo / Commission"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Mainstream acceptance is driving demand for high-quality custom art."
    },
    "content": {
      "short_desc": "Creates permanent artwork on skin.",
      "long_desc": "Tattoo Artists leave a permanent mark. You design custom art and apply it to skin using needles. You must be an artist, a hygiene expert, and a therapist to nervous clients.",
      "day_in_life": ["Consult on design", "Sterilize equipment", "Tatouage session (3-6 hours)"],
      "tags": ["Creative", "Art", "Lifestyle"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["tattoo", "ink", "art", "design"],
      "related_career_ids": ["creative_illustrator", "creative_graphic_designer"]
    }
  },
  {
    "id": "trade_millwright",
    "title": "Industrial Millwright",
    "domain": "Skilled Trade",
    "slug": "millwright",
    "match_profile": {
      "interests": ["machines", "factories", "assembly", "blueprints"],
      "personality": ["precise", "strong", "analytical", "practical"],
      "work_style": ["factory", "heavy_labor", "technical", "problem_solving"],
      "deal_breakers": ["office_work", "clean_hands", "theory_only"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "ITI / Apprenticeship",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Wage + Overtime"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Robotics installation is becoming a core part of the job."
    },
    "content": {
      "short_desc": "Installs, maintains, and repairs industrial machinery.",
      "long_desc": "Millwrights build factories. You install massive generators, conveyor belts, and turbines. You need to align machines to the millimeter using lasers and heavy tools.",
      "day_in_life": ["Read machine blueprints", "Align motor shafts", "Repair conveyor systems"],
      "tags": ["Trade", "Industrial", "Mechanic"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["factory", "machine", "repair", "mechanic"],
      "related_career_ids": ["trade_machinist", "eng_mechanical_engineer"]
    }
  },
  {
    "id": "science_marine_ecologist",
    "title": "Marine Ecologist",
    "domain": "Science",
    "slug": "marine-ecologist",
    "match_profile": {
      "interests": ["ocean", "ecosystems", "conservation", "diving"],
      "personality": ["observant", "passionate", "patient", "scientific"],
      "work_style": ["field/lab", "water_based", "research", "environmental"],
      "deal_breakers": ["landlocked", "corporate_profit", "dry_lab_only"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Marine Biology / Ecology",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary / Grants"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Coral reef restoration and plastic pollution research are key areas."
    },
    "content": {
      "short_desc": "Studies ocean ecosystems and how organisms interact.",
      "long_desc": "Marine Ecologists look at the big picture of the ocean. Unlike marine biologists who study single fish, you study how the whole reef works. You track pollution, climate change, and food webs.",
      "day_in_life": ["SCUBA dive for surveys", "Analyze water quality", "Map coral reef health"],
      "tags": ["Science", "Ocean", "Nature"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["ocean", "reef", "fish", "nature"],
      "related_career_ids": ["science_marine_biologist", "eng_environmental_engineer"]
    }
  },
  {
    "id": "eng_acoustics_engineer",
    "title": "Acoustics Engineer",
    "domain": "Engineering",
    "slug": "acoustics-engineer",
    "match_profile": {
      "interests": ["sound", "physics", "buildings", "music"],
      "personality": ["perceptive", "mathematical", "detail_oriented", "focused"],
      "work_style": ["office/site", "auditory", "consulting", "technical"],
      "deal_breakers": ["noise_pollution", "visual_only", "imprecision"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Acoustics / Mechanical Eng",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1800000,
      "display_range": "₹6L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Noise control in urban cities and EV cabin silence are growing fields."
    },
    "content": {
      "short_desc": "Designs buildings and products to control sound and vibration.",
      "long_desc": "Acoustics Engineers control noise. You design concert halls so the music sounds perfect, or car engines so they sound quiet. You use physics to manipulate sound waves.",
      "day_in_life": ["Simulate sound in software", "Test noise levels on site", "Design soundproofing"],
      "tags": ["Engineering", "Sound", "Physics"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["sound", "audio", "noise", "physics"],
      "related_career_ids": ["media_sound_engineer", "eng_civil_engineer"]
    }
  },
  {
    "id": "arts_visual_merchandiser",
    "title": "Visual Merchandiser",
    "domain": "Arts & Design",
    "slug": "visual-merchandiser",
    "match_profile": {
      "interests": ["shopping", "design", "fashion", "display"],
      "personality": ["creative", "visual", "trendsetter", "organized"],
      "work_style": ["retail_store", "visual", "physical", "dynamic"],
      "deal_breakers": ["spreadsheets", "messy_environment", "isolation"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Retail Management / Design",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 900000,
      "display_range": "₹3L - ₹9L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Stores are becoming 'experience centers' requiring better displays."
    },
    "content": {
      "short_desc": "Designs store displays to attract customers and sell products.",
      "long_desc": "Visual Merchandisers dress the shop window. You decide how clothes are folded, how mannequins are styled, and how the store lights are set. Your goal is to make people stop and walk in.",
      "day_in_life": ["Design window displays", "Dress mannequins", "Plan store layout"],
      "tags": ["Creative", "Fashion", "Retail"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["fashion", "retail", "design", "window"],
      "related_career_ids": ["creative_fashion_designer", "biz_retail_manager"]
    }
  },
  {
    "id": "biz_actuarial_analyst",
    "title": "Actuarial Analyst",
    "domain": "Business",
    "slug": "actuarial-analyst",
    "match_profile": {
      "interests": ["math", "statistics", "risk", "insurance"],
      "personality": ["logical", "studious", "introverted", "precise"],
      "work_style": ["office_based", "data_heavy", "quiet", "structured"],
      "deal_breakers": ["sales", "public_speaking", "guessing"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Math / Actuarial Science",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1500000,
      "display_range": "₹6L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Big data is making risk prediction more accurate and complex."
    },
    "content": {
      "short_desc": "Uses statistics to calculate financial risk for insurance companies.",
      "long_desc": "Actuarial Analysts act as the math whizzes of insurance. You calculate the probability of accidents, deaths, or fires to set insurance prices. It requires passing a series of very hard math exams.",
      "day_in_life": ["Run statistical models", "Calculate premium rates", "Prepare risk reports"],
      "tags": ["Math", "Finance", "Data"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["math", "insurance", "statistics", "risk"],
      "related_career_ids": ["finance_actuary", "tech_data_analyst"]
    }
  },
  {
    "id": "law_immigration_lawyer",
    "title": "Immigration Lawyer",
    "domain": "Legal",
    "slug": "immigration-lawyer",
    "match_profile": {
      "interests": ["law", "culture", "helping_people", "travel"],
      "personality": ["patient", "determined", "empathetic", "detail_oriented"],
      "work_style": ["office/court", "paperwork_heavy", "client_facing", "bureaucratic"],
      "deal_breakers": ["xenophobia", "disorganization", "impatience"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "LLB",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Salary / Case Fees"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Global migration due to climate and work is increasing demand."
    },
    "content": {
      "short_desc": "Helps people navigate visa, citizenship, and residency laws.",
      "long_desc": "Immigration Lawyers help people cross borders legally. You assist with work visas, family reunions, or asylum cases. You navigate complex government bureaucracy to change people's lives.",
      "day_in_life": ["File visa applications", "Represent clients at hearings", "Advise on citizenship"],
      "tags": ["Law", "Helping People", "Global"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["visa", "passport", "lawyer", "migration"],
      "related_career_ids": ["legal_human_rights_lawyer", "govt_diplomat"]
    }
  },
  {
    "id": "service_wedding_planner",
    "title": "Wedding Planner",
    "domain": "Service",
    "slug": "wedding-planner",
    "match_profile": {
      "interests": ["weddings", "events", "fashion", "organizing"],
      "personality": ["romantic", "organized", "calm_under_pressure", "social"],
      "work_style": ["on_site", "high_stress", "emotional", "detail_oriented"],
      "deal_breakers": ["cynicism", "weekends_off", "messiness"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Event Management",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1200000,
      "display_range": "₹3L - ₹12L per year",
      "pay_structure": "Fee per Event"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Destination weddings and sustainable eco-weddings are trending."
    },
    "content": {
      "short_desc": "Plans and executes weddings for couples.",
      "long_desc": "Wedding Planners manage the big day. You coordinate flowers, food, music, and guests to ensure the couple has a perfect wedding. You are part therapist, part project manager.",
      "day_in_life": ["Meet couples", "Coordinate with vendors", "Manage wedding day timeline"],
      "tags": ["Service", "Creative", "Events"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["marriage", "event", "party", "planning"],
      "related_career_ids": ["business_event_planner", "arts_florist"]
    }
  },
  {
    "id": "tech_robotics_technician",
    "title": "Robotics Technician",
    "domain": "Technology",
    "slug": "robotics-technician",
    "match_profile": {
      "interests": ["robots", "repairing", "electronics", "mechanics"],
      "personality": ["practical", "diagnostic", "hands_on", "technical"],
      "work_style": ["factory/field", "maintenance", "technical", "active"],
      "deal_breakers": ["coding_only", "office_chair", "theory"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Robotics / Mechatronics",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 350000,
      "max": 900000,
      "display_range": "₹3.5L - ₹9L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Low",
      "future_trend": "As factories automate, the people who fix the robots are essential."
    },
    "content": {
      "short_desc": "Installs, tests, and repairs robotic systems.",
      "long_desc": "Robotics Technicians fix the robots. Unlike engineers who design them, you are on the floor with a wrench and a laptop, keeping the assembly line robots running. It is a high-tech trade job.",
      "day_in_life": ["Calibrate robot arms", "Replace faulty sensors", "Run diagnostic tests"],
      "tags": ["Tech", "Trade", "Future"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["robot", "repair", "automation", "tech"],
      "related_career_ids": ["eng_robotics_engineer", "trade_electrician"]
    }
  },
  {
    "id": "eng_packaging_engineer",
    "title": "Packaging Engineer",
    "domain": "Engineering",
    "slug": "packaging-engineer",
    "match_profile": {
      "interests": ["design", "sustainability", "materials", "logistics"],
      "personality": ["practical", "innovative", "cost_conscious", "detail_oriented"],
      "work_style": ["office/lab", "product_focused", "technical", "environmental"],
      "deal_breakers": ["waste", "fragility", "abstract_art"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Packaging Science / Mech Eng",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Huge demand for plastic-free, biodegradable packaging solutions."
    },
    "content": {
      "short_desc": "Designs packaging to protect products and reduce waste.",
      "long_desc": "Packaging Engineers ensure your Amazon package arrives safely. You design boxes and materials that are strong but cheap and eco-friendly. You test packages by dropping and crushing them.",
      "day_in_life": ["Design box prototypes", "Conduct drop tests", "Source eco-materials"],
      "tags": ["Engineering", "Design", "Green"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["box", "design", "logistics", "eco"],
      "related_career_ids": ["creative_industrial_designer", "eng_mechanical_engineer"]
    }
  },
  {
    "id": "health_occ_health_nurse",
    "title": "Occupational Health Nurse",
    "domain": "Healthcare",
    "slug": "occupational-health-nurse",
    "match_profile": {
      "interests": ["workplace_safety", "nursing", "prevention", "employees"],
      "personality": ["caring", "organized", "preventative", "calm"],
      "work_style": ["corporate/factory", "regular_hours", "independent", "health"],
      "deal_breakers": ["hospital_shifts", "emergency_trauma", "night_work"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Nursing (B.Sc)",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Focus on mental health and ergonomics in the workplace."
    },
    "content": {
      "short_desc": "Promotes health and safety within a workplace.",
      "long_desc": "Occupational Health Nurses keep workers healthy. You work in a factory or office, not a hospital. You treat minor injuries, run vaccination drives, and help prevent back pain for employees.",
      "day_in_life": ["Treat work injuries", "Conduct health screenings", "Advise on ergonomics"],
      "tags": ["Healthcare", "Corporate", "Stable"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["nurse", "factory", "safety", "medical"],
      "related_career_ids": ["health_registered_nurse", "business_safety_specialist"]
    }
  },
  {
    "id": "service_library_assistant",
    "title": "Library Assistant",
    "domain": "Service",
    "slug": "library-assistant",
    "match_profile": {
      "interests": ["books", "helping_people", "quiet", "organizing"],
      "personality": ["helpful", "organized", "soft_spoken", "patient"],
      "work_style": ["library", "quiet", "routine", "service"],
      "deal_breakers": ["noise", "sales_targets", "chaos"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Any Degree / Library Science",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 500000,
      "display_range": "₹2L - ₹5L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Medium",
      "future_trend": "Role evolving into community tech support and digital literacy."
    },
    "content": {
      "short_desc": "Organizes library materials and helps patrons.",
      "long_desc": "Library Assistants keep the library orderly. You shelve books, check items in and out, and help visitors find what they need. It is a peaceful, community-focused job.",
      "day_in_life": ["Shelve returned books", "Register new members", "Assist with printing"],
      "tags": ["Service", "Books", "Quiet"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["books", "library", "admin", "helper"],
      "related_career_ids": ["edu_librarian", "govt_city_clerk"]
    }
  },
  {
    "id": "media_content_strategist",
    "title": "Digital Content Strategist",
    "domain": "Media & Marketing",
    "slug": "content-strategist",
    "match_profile": {
      "interests": ["planning", "marketing", "writing", "analytics"],
      "personality": ["strategic", "creative", "organized", "analytical"],
      "work_style": ["office/remote", "planning_heavy", "collaborative", "digital"],
      "deal_breakers": ["random_posting", "no_data", "isolation"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Marketing / Communications",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "AI creates content; strategists decide *what* to create and *why*."
    },
    "content": {
      "short_desc": "Plans what content a brand should publish to grow.",
      "long_desc": "Content Strategists are the architects of marketing. You don't just write; you analyze data to decide if a brand needs a blog, a podcast, or a TikTok. You ensure every post has a purpose.",
      "day_in_life": ["Audit existing content", "Create editorial calendar", "Analyze audience data"],
      "tags": ["Marketing", "Strategy", "Tech"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["marketing", "seo", "plan", "media"],
      "related_career_ids": ["business_digital_marketing_manager", "tech_seo_specialist"]
    }
  },
  {
    "id": "govt_air_force_pilot",
    "title": "Air Force Pilot",
    "domain": "Defense",
    "slug": "air-force-pilot",
    "match_profile": {
      "interests": ["aviation", "defense", "speed", "patriotism"],
      "personality": ["courageous", "disciplined", "quick_reflexes", "focused"],
      "work_style": ["cockpit", "high_stakes", "military", "elite"],
      "deal_breakers": ["fear", "slow_pace", "disobedience"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "NDA / AFCAT Exam",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 1500000,
      "max": 3500000,
      "display_range": "₹15L - ₹35L + Benefits",
      "pay_structure": "Govt Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Drones are common, but fighter jets still require elite human pilots."
    },
    "content": {
      "short_desc": "Flies fighter jets or transport aircraft for the military.",
      "long_desc": "Air Force Pilots are the elite of the sky. You fly supersonic jets or massive transport planes to defend the nation. It requires perfect health, intense training, and split-second decision making.",
      "day_in_life": ["Mission briefing", "Fly training sorties", "Physical fitness training"],
      "tags": ["Defense", "Aviation", "Elite"]
    },
    "meta": {
      "popularity_rank": 10,
      "search_keywords": ["pilot", "fighter", "military", "jet"],
      "related_career_ids": ["transport_commercial_pilot", "govt_army_officer"]
    }
  },
  {
    "id": "trade_solar_thermal",
    "title": "Solar Thermal Installer",
    "domain": "Skilled Trade",
    "slug": "solar-thermal-installer",
    "match_profile": {
      "interests": ["plumbing", "energy", "sun", "roofs"],
      "personality": ["practical", "eco_conscious", "hardworking", "technical"],
      "work_style": ["outdoors", "roof_work", "plumbing_focus", "physical"],
      "deal_breakers": ["office_job", "leaks", "fear_of_heights"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Plumbing / Solar Cert",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Wage"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Water heating is a major energy cost; solar thermal is the green solution."
    },
    "content": {
      "short_desc": "Installs solar systems that heat water for homes.",
      "long_desc": "Solar Thermal Installers are green plumbers. Instead of panels that make electricity, you install panels that heat water. You connect pipes on roofs to water tanks, saving energy and money.",
      "day_in_life": ["Mount thermal collectors", "Connect plumbing pipes", "Insulate water lines"],
      "tags": ["Trade", "Green", "Plumbing"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["solar", "plumber", "heater", "green"],
      "related_career_ids": ["trade_plumber", "trade_solar_installer"]
    }
  },
  {
    "id": "biz_pricing_analyst",
    "title": "Pricing Analyst",
    "domain": "Business",
    "slug": "pricing-analyst",
    "match_profile": {
      "interests": ["money", "math", "strategy", "competition"],
      "personality": ["analytical", "competitive", "precise", "logical"],
      "work_style": ["office_based", "data_driven", "strategic", "quiet"],
      "deal_breakers": ["guessing", "creative_fluff", "customer_service"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Economics / Finance",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Dynamic pricing algorithms (like Uber surge) need human oversight."
    },
    "content": {
      "short_desc": "Determines the best price for products to maximize profit.",
      "long_desc": "Pricing Analysts decide what things cost. You analyze competitor prices and production costs to find the 'sweet spot' where customers buy and the company makes money. It is pure strategy.",
      "day_in_life": ["Monitor competitor prices", "Run pricing simulations", "Advise sales teams"],
      "tags": ["Business", "Math", "Strategy"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["money", "price", "retail", "economics"],
      "related_career_ids": ["finance_financial_analyst", "biz_market_research_analyst"]
    }
  },
  {
    "id": "creative_illustrator",
    "title": "Illustrator",
    "domain": "Arts & Design",
    "slug": "illustrator",
    "match_profile": {
      "interests": ["drawing", "storytelling", "books", "art"],
      "personality": ["imaginative", "artistic", "visual", "solitary"],
      "work_style": ["studio/home", "freelance", "visual", "creative"],
      "deal_breakers": ["corporate_style", "strict_rules", "spreadsheets"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Fine Arts / Illustration",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 1000000,
      "display_range": "₹2.5L - ₹10L per year",
      "pay_structure": "Freelance / Project"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "High",
      "future_trend": "AI art is competition; human style and conceptual depth are the defense."
    },
    "content": {
      "short_desc": "Creates drawings for books, magazines, and products.",
      "long_desc": "Illustrators tell stories with pictures. You might draw for children's books, medical textbooks, or fashion magazines. You need a distinct style to stand out in a crowded market.",
      "day_in_life": ["Sketch concepts", "Inking and coloring", "Meeting art directors"],
      "tags": ["Creative", "Art", "Design"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["art", "drawing", "book", "design"],
      "related_career_ids": ["creative_graphic_designer", "creative_animator"]
    }
  },
  {
    "id": "science_geophysicist",
    "title": "Geophysicist",
    "domain": "Science",
    "slug": "geophysicist",
    "match_profile": {
      "interests": ["earth", "physics", "data", "exploration"],
      "personality": ["analytical", "adventurous", "methodical", "curious"],
      "work_style": ["field/office", "data_heavy", "remote_locations", "technical"],
      "deal_breakers": ["office_only", "guessing", "politics"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Geophysics / Geology",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Shift from oil exploration to geothermal energy and environmental protection."
    },
    "content": {
      "short_desc": "Uses physics to study the Earth's interior.",
      "long_desc": "Geophysicists look underground without digging. You use seismic waves, gravity, and magnetic fields to find oil, water, or minerals. It involves heavy data analysis and outdoor fieldwork.",
      "day_in_life": ["Analyze seismic data", "Map subsurface structures", "Conduct field surveys"],
      "tags": ["Science", "Earth", "Physics"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["earth", "physics", "oil", "seismic"],
      "related_career_ids": ["science_geologist", "eng_petroleum_engineer"]
    }
  },
  {
    "id": "science_geneticist",
    "title": "Geneticist",
    "domain": "Science",
    "slug": "geneticist",
    "match_profile": {
      "interests": ["dna", "biology", "research", "heredity"],
      "personality": ["intellectual", "patient", "precise", "logical"],
      "work_style": ["lab_based", "microscopic", "academic", "quiet"],
      "deal_breakers": ["rushing", "sales", "imprecision"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "PhD Genetics",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1800000,
      "display_range": "₹5L - ₹18L per year",
      "pay_structure": "Salary + Grants"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "CRISPR gene editing is opening new frontiers in medicine and agriculture."
    },
    "content": {
      "short_desc": "Studies genes and heredity in living organisms.",
      "long_desc": "Geneticists unlock the code of life. You study how traits are passed down, research genetic diseases, or breed better crops. It is pure research with massive potential impact.",
      "day_in_life": ["Sequence DNA samples", "Analyze genetic markers", "Write scientific papers"],
      "tags": ["Science", "Research", "DNA"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["dna", "gene", "research", "biology"],
      "related_career_ids": ["science_biotechnologist", "science_genetic_counselor"]
    }
  },
  {
    "id": "health_vet_technician",
    "title": "Veterinary Technician",
    "domain": "Healthcare",
    "slug": "vet-technician",
    "match_profile": {
      "interests": ["animals", "nursing", "biology", "care"],
      "personality": ["compassionate", "observant", "hardworking", "gentle"],
      "work_style": ["clinic", "physical", "emotional", "support"],
      "deal_breakers": ["animal_suffering", "cleanliness", "desk_job"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Veterinary Nursing",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 600000,
      "display_range": "₹2L - ₹6L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Pet ownership boom is increasing demand for support staff."
    },
    "content": {
      "short_desc": "Assists veterinarians in treating animals.",
      "long_desc": "Vet Techs are nurses for animals. You draw blood, administer meds, and comfort pets during exams. You do the hard, hands-on work of caring for sick animals.",
      "day_in_life": ["Prep animals for surgery", "Take X-rays", "Administer vaccines"],
      "tags": ["Animals", "Healthcare", "Support"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["dog", "cat", "nurse", "vet"],
      "related_career_ids": ["health_veterinarian", "science_zoologist"]
    }
  },
  {
    "id": "health_dialysis_technician",
    "title": "Dialysis Technician",
    "domain": "Healthcare",
    "slug": "dialysis-technician",
    "match_profile": {
      "interests": ["machines", "patient_care", "blood", "routine"],
      "personality": ["careful", "attentive", "friendly", "responsible"],
      "work_style": ["clinic/hospital", "routine", "technical", "patient_facing"],
      "deal_breakers": ["blood_phobia", "boredom", "errors"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Dialysis Technology",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 600000,
      "display_range": "₹2.5L - ₹6L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Rising kidney disease rates ensure job security."
    },
    "content": {
      "short_desc": "Operates kidney dialysis machines for patients.",
      "long_desc": "Dialysis Techs operate the machines that clean patients' blood. You monitor the equipment and the patient during long treatment sessions. It requires technical skill and a kind bedside manner.",
      "day_in_life": ["Set up dialysis machine", "Cannulate patient veins", "Monitor patient vitals"],
      "tags": ["Healthcare", "Tech", "Patient Care"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["kidney", "machine", "medical", "tech"],
      "related_career_ids": ["health_registered_nurse", "health_phlebotomist"]
    }
  },
  {
    "id": "trade_cabinet_maker",
    "title": "Cabinet Maker",
    "domain": "Skilled Trade",
    "slug": "cabinet-maker",
    "match_profile": {
      "interests": ["wood", "craftsmanship", "furniture", "precision"],
      "personality": ["artistic", "detail_oriented", "patient", "manual"],
      "work_style": ["workshop", "dusty", "precise", "creative"],
      "deal_breakers": ["assembly_line", "computer_work", "rough_work"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Carpentry / Woodworking",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Wage / Project Fee"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "High-end custom kitchens and furniture keep demand high."
    },
    "content": {
      "short_desc": "Builds custom wooden furniture and cabinetry.",
      "long_desc": "Cabinet Makers are specialized carpenters. You build fine furniture, kitchen cabinets, and intricate woodwork. It requires a higher level of precision and artistry than general carpentry.",
      "day_in_life": ["Read design blueprints", "Cut and sand wood", "Assemble cabinets"],
      "tags": ["Trade", "Craft", "Wood"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["wood", "furniture", "carpenter", "design"],
      "related_career_ids": ["trade_carpenter", "creative_industrial_designer"]
    }
  },
  {
    "id": "trade_drywall_finisher",
    "title": "Drywall Finisher",
    "domain": "Skilled Trade",
    "slug": "drywall-finisher",
    "match_profile": {
      "interests": ["building", "finishing", "manual_work", "walls"],
      "personality": ["fast", "physical", "perfectionist", "steady"],
      "work_style": ["construction_site", "dusty", "physical", "repetitive"],
      "deal_breakers": ["dust_allergy", "thinking_work", "slow_pace"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "Apprenticeship",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 600000,
      "display_range": "₹2.5L - ₹6L per year",
      "pay_structure": "Daily Wage / Contract"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Robotic drywallers exist but are too expensive for residential work."
    },
    "content": {
      "short_desc": "Prepares walls for painting by taping and sanding drywall.",
      "long_desc": "Drywall Finishers make walls smooth. You tape joints, apply mud, and sand it down until it is perfect for painting. It is physically demanding, dusty work that pays well for speed.",
      "day_in_life": ["Tape drywall joints", "Apply joint compound", "Sand walls smooth"],
      "tags": ["Trade", "Construction", "Physical"]
    },
    "meta": {
      "popularity_rank": 90,
      "search_keywords": ["walls", "construction", "house", "repair"],
      "related_career_ids": ["trade_painter", "trade_plasterer"]
    }
  },
  {
    "id": "tech_solutions_architect",
    "title": "Solutions Architect",
    "domain": "Technology",
    "slug": "solutions-architect",
    "match_profile": {
      "interests": ["systems", "strategy", "problem_solving", "integration"],
      "personality": ["visionary", "logical", "communicative", "authoritative"],
      "work_style": ["office/client", "high_level", "design_focused", "consultative"],
      "deal_breakers": ["writing_code_all_day", "maintenance", "isolation"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / IT",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1500000,
      "max": 4000000,
      "display_range": "₹15L - ₹40L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Complex cloud + AI integrations make this role essential."
    },
    "content": {
      "short_desc": "Designs complex technical solutions to business problems.",
      "long_desc": "Solutions Architects design the big picture. You look at a business problem (like 'we need a new app') and decide which databases, servers, and languages should be used to build it.",
      "day_in_life": ["Meet with clients", "Design system architecture", "Guide development teams"],
      "tags": ["Tech", "Strategy", "Design"]
    },
    "meta": {
      "popularity_rank": 15,
      "search_keywords": ["architect", "software", "cloud", "design"],
      "related_career_ids": ["tech_cloud_architect", "tech_product_manager"]
    }
  },
  {
    "id": "tech_release_engineer",
    "title": "Release Engineer",
    "domain": "Technology",
    "slug": "release-engineer",
    "match_profile": {
      "interests": ["automation", "process", "coding", "efficiency"],
      "personality": ["organized", "calm", "systematic", "reliable"],
      "work_style": ["office/remote", "process_driven", "backend", "critical"],
      "deal_breakers": ["chaos", "creativity", "sales"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / IT",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 3000000,
      "display_range": "₹10L - ₹30L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Merging into 'Platform Engineering' or advanced DevOps roles."
    },
    "content": {
      "short_desc": "Manages the building and deployment of software code.",
      "long_desc": "Release Engineers control the launch button. You ensure that the code developers write is packaged, tested, and safely deployed to users without crashing the system.",
      "day_in_life": ["Manage build pipelines", "Coordinate software releases", "Automate deployment scripts"],
      "tags": ["Tech", "Process", "DevOps"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["devops", "software", "deployment", "build"],
      "related_career_ids": ["tech_devops_engineer", "tech_qa_engineer"]
    }
  },
  {
    "id": "biz_revenue_operations",
    "title": "Revenue Operations (RevOps)",
    "domain": "Business",
    "slug": "revops",
    "match_profile": {
      "interests": ["data", "sales", "efficiency", "alignment"],
      "personality": ["analytical", "strategic", "collaborative", "objective"],
      "work_style": ["office_based", "cross_functional", "data_driven", "internal"],
      "deal_breakers": ["cold_calling", "vagueness", "silos"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Business / Data Analytics",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 2500000,
      "display_range": "₹8L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Hot role; aligning marketing, sales, and service data is critical."
    },
    "content": {
      "short_desc": "Aligns sales, marketing, and service operations to drive revenue.",
      "long_desc": "RevOps connects the dots. You fix the broken processes between marketing, sales, and customer success teams to make sure the company makes money efficiently. You live in CRM data.",
      "day_in_life": ["Analyze sales funnel data", "Optimize CRM workflows", "Align team goals"],
      "tags": ["Business", "Data", "Strategy"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["sales", "operations", "data", "revenue"],
      "related_career_ids": ["biz_market_research_analyst", "sales_b2b_sales_manager"]
    }
  },
  {
    "id": "biz_sustainability_manager",
    "title": "Sustainability Manager",
    "domain": "Business",
    "slug": "sustainability-manager",
    "match_profile": {
      "interests": ["environment", "business", "ethics", "strategy"],
      "personality": ["idealistic", "persuasive", "strategic", "responsible"],
      "work_style": ["corporate", "change_management", "strategic", "mission_driven"],
      "deal_breakers": ["greenwashing", "apathy", "pure_profit"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Environmental Science / MBA",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 3000000,
      "display_range": "₹10L - ₹30L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Low",
      "future_trend": "ESG (Environmental, Social, Governance) reporting is now mandatory for many firms."
    },
    "content": {
      "short_desc": "Develops strategies to make a company environmentally friendly.",
      "long_desc": "Sustainability Managers make business green. You measure carbon footprints, reduce waste, and ensure the company follows environmental laws while still making a profit.",
      "day_in_life": ["Track carbon emissions", "Write ESG reports", "Implement recycling programs"],
      "tags": ["Business", "Green", "Impact"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["green", "environment", "esg", "corporate"],
      "related_career_ids": ["eng_environmental_engineer", "biz_compliance_officer"]
    }
  },
  {
    "id": "arts_ceramist",
    "title": "Ceramic Artist / Potter",
    "domain": "Arts & Design",
    "slug": "ceramist",
    "match_profile": {
      "interests": ["clay", "sculpture", "craft", "design"],
      "personality": ["patient", "tactile", "creative", "steady"],
      "work_style": ["studio", "messy", "physical", "solitary"],
      "deal_breakers": ["clean_fingers", "computers", "rushing"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Fine Arts / Ceramics",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 150000,
      "max": 800000,
      "display_range": "₹1.5L - ₹8L per year",
      "pay_structure": "Sales / Freelance"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Handmade artisan goods are seeing a resurgence against mass production."
    },
    "content": {
      "short_desc": "Creates objects from clay using a kiln and wheel.",
      "long_desc": "Ceramists make art from earth. You throw clay on a wheel to make bowls, plates, or sculptures, then fire them in a kiln. It is a messy, meditative, and physically grounding craft.",
      "day_in_life": ["Throw clay on wheel", "Glaze pottery", "Fire kiln"],
      "tags": ["Creative", "Craft", "Art"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["pottery", "clay", "art", "craft"],
      "related_career_ids": ["creative_illustrator", "arts_florist"]
    }
  },
  {
    "id": "arts_textile_designer",
    "title": "Textile Designer",
    "domain": "Arts & Design",
    "slug": "textile-designer",
    "match_profile": {
      "interests": ["fabric", "patterns", "fashion", "color"],
      "personality": ["creative", "visual", "trendsetter", "detail_oriented"],
      "work_style": ["studio", "visual", "tactile", "computer_aided"],
      "deal_breakers": ["engineering", "numbers", "drab_colors"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Textile Design",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1000000,
      "display_range": "₹3L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Sustainable fabrics and digital printing are changing the industry."
    },
    "content": {
      "short_desc": "Designs patterns and weaves for fabrics.",
      "long_desc": "Textile Designers create the fabric itself. You design the prints on your shirt or the weave of your sofa. You work with color, texture, and technical software to create materials.",
      "day_in_life": ["Sketch print patterns", "Select yarn/threads", "Oversee fabric production"],
      "tags": ["Creative", "Fashion", "Design"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["fashion", "fabric", "print", "design"],
      "related_career_ids": ["creative_fashion_designer", "creative_graphic_designer"]
    }
  },
  {
    "id": "edu_instructional_designer",
    "title": "Instructional Designer",
    "domain": "Education",
    "slug": "instructional-designer",
    "match_profile": {
      "interests": ["learning", "technology", "curriculum", "design"],
      "personality": ["organized", "logical", "creative", "systematic"],
      "work_style": ["office/remote", "computer_based", "planning", "educational"],
      "deal_breakers": ["classroom_management", "public_speaking", "chaos"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Instructional Design / EdTech",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Corporate e-learning is booming; companies need better training materials."
    },
    "content": {
      "short_desc": "Designs educational materials and online courses.",
      "long_desc": "Instructional Designers build the course, not teach it. You create the syllabus, slides, and quizzes for online learning or corporate training. You combine education theory with technology.",
      "day_in_life": ["Structure course curriculum", "Create e-learning modules", "Write training scripts"],
      "tags": ["Education", "Tech", "Design"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["elearning", "training", "education", "curriculum"],
      "related_career_ids": ["edu_primary_teacher", "tech_technical_writer"]
    }
  },
  {
    "id": "edu_art_teacher",
    "title": "Art Teacher",
    "domain": "Education",
    "slug": "art-teacher",
    "match_profile": {
      "interests": ["art", "teaching", "children", "creativity"],
      "personality": ["expressive", "patient", "encouraging", "messy"],
      "work_style": ["school/studio", "social", "creative", "active"],
      "deal_breakers": ["strict_rules", "cleanliness", "silence"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Fine Arts + B.Ed",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 700000,
      "display_range": "₹2.5L - ₹7L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "STEAM (Arts in STEM) education is gaining value."
    },
    "content": {
      "short_desc": "Teaches art techniques and history to students.",
      "long_desc": "Art Teachers unleash creativity. You teach kids how to draw, paint, and sculpt. You manage a messy classroom and help students express themselves visually.",
      "day_in_life": ["Demonstrate painting techniques", "Grade art projects", "Manage classroom supplies"],
      "tags": ["Education", "Art", "Creative"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["teacher", "art", "school", "creative"],
      "related_career_ids": ["edu_primary_teacher", "creative_illustrator"]
    }
  },
  {
    "id": "service_casino_dealer",
    "title": "Casino Dealer / Croupier",
    "domain": "Service",
    "slug": "casino-dealer",
    "match_profile": {
      "interests": ["games", "math", "people", "nightlife"],
      "personality": ["alert", "friendly", "quick_math", "honest"],
      "work_style": ["casino", "night_shifts", "standing", "public"],
      "deal_breakers": ["gambling_addiction", "slow_pace", "day_shift"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Dealer Training School",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Wage + Tips"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "High",
      "future_trend": "Online casinos use live dealers, creating remote work options."
    },
    "content": {
      "short_desc": "Operates table games like blackjack and roulette in a casino.",
      "long_desc": "Dealers run the game. You shuffle cards, spin wheels, and calculate payouts instantly. You need dexterity, mental math skills, and the ability to stay cool when players lose money.",
      "day_in_life": ["Deal cards to players", "Calculate payouts mentally", "Monitor for cheating"],
      "tags": ["Service", "Math", "Entertainment"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["cards", "casino", "poker", "dealer"],
      "related_career_ids": ["service_hotel_concierge", "hospitality_restaurant_owner"]
    }
  },
  {
    "id": "service_zookeeper",
    "title": "Zookeeper",
    "domain": "Service",
    "slug": "zookeeper",
    "match_profile": {
      "interests": ["animals", "biology", "outdoors", "conservation"],
      "personality": ["hardworking", "observant", "caring", "physically_fit"],
      "work_style": ["outdoor", "physical", "dirty", "routine"],
      "deal_breakers": ["smells", "office_job", "weakness"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Zoology / Animal Science",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 500000,
      "display_range": "₹2L - ₹5L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Low",
      "future_trend": "Focus shifting from exhibition to conservation breeding."
    },
    "content": {
      "short_desc": "Cares for animals in a zoo or wildlife park.",
      "long_desc": "Zookeepers feed and clean up after wild animals. It is hard, smelly, physical work, but you get to build relationships with tigers, elephants, or penguins. It is a labor of love.",
      "day_in_life": ["Prepare animal diets", "Clean enclosures", "Monitor animal health"],
      "tags": ["Animals", "Nature", "Physical"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["zoo", "animals", "wildlife", "care"],
      "related_career_ids": ["science_zoologist", "health_vet_technician"]
    }
  },
  {
    "id": "law_sports_agent",
    "title": "Sports Agent",
    "domain": "Legal",
    "slug": "sports-agent",
    "match_profile": {
      "interests": ["sports", "negotiation", "law", "business"],
      "personality": ["persuasive", "ambitious", "confident", "protective"],
      "work_style": ["high_pressure", "travel", "networking", "competitive"],
      "deal_breakers": ["shyness", "9_to_5", "fair_play"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Sports Mgmt / Law",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 10000000,
      "display_range": "High Variance (Commission)",
      "pay_structure": "Commission"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "eSports agents are a rapidly growing new category."
    },
    "content": {
      "short_desc": "Represents athletes in contract and endorsement negotiations.",
      "long_desc": "Sports Agents manage careers. You negotiate contracts with teams and sponsors for your athletes. You handle their business so they can focus on the game. It is cutthroat but lucrative.",
      "day_in_life": ["Negotiate player contracts", "Find sponsorship deals", "Manage athlete public image"],
      "tags": ["Law", "Sports", "Business"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["sports", "agent", "contract", "manager"],
      "related_career_ids": ["media_publicist", "legal_corporate_lawyer"]
    }
  },
  {
    "id": "law_contract_manager",
    "title": "Contract Manager",
    "domain": "Legal",
    "slug": "contract-manager",
    "match_profile": {
      "interests": ["law", "details", "negotiation", "reading"],
      "personality": ["meticulous", "cautious", "organized", "firm"],
      "work_style": ["office_based", "document_heavy", "analytical", "quiet"],
      "deal_breakers": ["skimming", "creativity", "verbal_agreements"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Law / Business Admin",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1800000,
      "display_range": "₹6L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "AI reviews standard clauses; humans handle complex negotiation."
    },
    "content": {
      "short_desc": "Drafts, reviews, and manages business contracts.",
      "long_desc": "Contract Managers ensure the deal is solid. You read the fine print of business agreements to protect your company from risk. You track deadlines and compliance.",
      "day_in_life": ["Review contract terms", "Negotiate clauses with vendors", "Track contract renewals"],
      "tags": ["Law", "Business", "Admin"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["contract", "legal", "business", "admin"],
      "related_career_ids": ["legal_paralegal", "biz_procurement_manager"]
    }
  },
  {
    "id": "transport_subway_operator",
    "title": "Metro / Subway Train Operator",
    "domain": "Transportation",
    "slug": "metro-operator",
    "match_profile": {
      "interests": ["trains", "city", "routine", "safety"],
      "personality": ["alert", "punctual", "solitary", "responsible"],
      "work_style": ["tunnel/cab", "repetitive", "sedentary", "shift_work"],
      "deal_breakers": ["claustrophobia", "creativity", "sunlight"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "ITI / Railway Training",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 350000,
      "max": 800000,
      "display_range": "₹3.5L - ₹8L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "High",
      "future_trend": "Many metro systems are becoming driverless, but oversight roles remain."
    },
    "content": {
      "short_desc": "Operates subway or metro trains in urban areas.",
      "long_desc": "Metro Operators drive the city's veins. You operate trains in tunnels or on elevated tracks, ensuring millions get to work on time. It is a stable job with high responsibility.",
      "day_in_life": ["Monitor train speed", "Open/close doors", "Respond to track signals"],
      "tags": ["Transport", "City", "Service"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["metro", "train", "driver", "transport"],
      "related_career_ids": ["transport_train_driver", "transport_bus_driver"]
    }
  },
  {
    "id": "transport_fleet_manager",
    "title": "Fleet Manager",
    "domain": "Transportation",
    "slug": "fleet-manager",
    "match_profile": {
      "interests": ["vehicles", "logistics", "efficiency", "management"],
      "personality": ["organized", "decisive", "cost_conscious", "leader"],
      "work_style": ["office/garage", "operational", "monitoring", "dynamic"],
      "deal_breakers": ["chaos", "ignoring_data", "slow_pace"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Logistics / Business",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1500000,
      "display_range": "₹6L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Managing EV fleets and charging infrastructure is the new skill."
    },
    "content": {
      "short_desc": "Manages a company's fleet of vehicles and drivers.",
      "long_desc": "Fleet Managers keep the wheels turning. You manage the maintenance, fuel costs, and driver schedules for a company's trucks or cars. You use GPS data to optimize routes and save money.",
      "day_in_life": ["Track vehicle locations", "Schedule maintenance", "Monitor fuel usage"],
      "tags": ["Transport", "Management", "Logistics"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["trucks", "logistics", "manager", "transport"],
      "related_career_ids": ["biz_logistics_coordinator", "business_operations_manager"]
    }
  },
  {
    "id": "science_seismologist",
    "title": "Seismologist",
    "domain": "Science",
    "slug": "seismologist",
    "match_profile": {
      "interests": ["earthquakes", "data", "physics", "safety"],
      "personality": ["analytical", "cautious", "patient", "methodical"],
      "work_style": ["lab/field", "data_heavy", "predictive", "quiet"],
      "deal_breakers": ["guessing", "politics", "sales"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Geophysics / Seismology",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Crucial for urban planning in earthquake-prone zones."
    },
    "content": {
      "short_desc": "Studies earthquakes and planetary vibrations.",
      "long_desc": "Seismologists study the earth's movements. You analyze seismic data to predict earthquakes or understand the planet's core. You also help engineers build safer buildings.",
      "day_in_life": ["Monitor seismographs", "Analyze fault lines", "Advise on building codes"],
      "tags": ["Science", "Earth", "Data"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["earthquake", "geology", "disaster", "science"],
      "related_career_ids": ["science_geophysicist", "eng_structural_engineer"]
    }
  },
  {
    "id": "health_respiratory_therapist",
    "title": "Respiratory Therapist",
    "domain": "Healthcare",
    "slug": "respiratory-therapist",
    "match_profile": {
      "interests": ["lungs", "breathing", "technology", "helping_people"],
      "personality": ["calm", "responsive", "technical", "caring"],
      "work_style": ["hospital", "emergency", "technical", "patient_facing"],
      "deal_breakers": ["panic", "office_work", "isolation"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Respiratory Care",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 350000,
      "max": 900000,
      "display_range": "₹3.5L - ₹9L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Post-pandemic focus on lung health keeps demand high."
    },
    "content": {
      "short_desc": "Treats patients with breathing disorders like asthma.",
      "long_desc": "Respiratory Therapists help people breathe. You manage ventilators in the ICU, treat asthma patients, and help premature babies with undeveloped lungs. It is a critical hospital role.",
      "day_in_life": ["Manage patient ventilators", "Administer oxygen therapy", "Perform lung function tests"],
      "tags": ["Healthcare", "Emergency", "Tech"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["lungs", "breathing", "hospital", "asthma"],
      "related_career_ids": ["health_registered_nurse", "health_pulmonologist"]
    }
  },
  {
    "id": "tech_database_developer",
    "title": "Database Developer",
    "domain": "Technology",
    "slug": "database-developer",
    "match_profile": {
      "interests": ["data", "sql", "coding", "logic"],
      "personality": ["organized", "logical", "efficient", "detail_oriented"],
      "work_style": ["office/remote", "backend", "coding_heavy", "structured"],
      "deal_breakers": ["design", "public_speaking", "ambiguity"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / IT",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1800000,
      "display_range": "₹5L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "AI writes basic SQL, but complex schema design needs humans."
    },
    "content": {
      "short_desc": "Designs and optimizes database structures using SQL.",
      "long_desc": "Database Developers build the digital filing cabinets. You write complex SQL queries to store and retrieve data efficiently. You ensure that when a user clicks 'search', the results appear instantly.",
      "day_in_life": ["Write stored procedures", "Optimize query speed", "Design database tables"],
      "tags": ["Tech", "Data", "Coding"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["sql", "data", "backend", "coding"],
      "related_career_ids": ["tech_backend_engineer", "tech_data_analyst"]
    }
  },
  {
    "id": "trade_biomedical_equipment_tech",
    "title": "Biomedical Equipment Technician",
    "domain": "Skilled Trade",
    "slug": "biomedical-tech",
    "match_profile": {
      "interests": ["repairing", "medical_devices", "electronics", "hospitals"],
      "personality": ["reliable", "technical", "diagnostic", "careful"],
      "work_style": ["hospital", "maintenance", "technical", "active"],
      "deal_breakers": ["blood", "sales", "desk_job"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Biomedical Engineering Tech",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "As hospitals become more high-tech, fixing the machines is vital."
    },
    "content": {
      "short_desc": "Repairs and maintains medical equipment in hospitals.",
      "long_desc": "BMETs fix the machines that save lives. You repair X-ray machines, ventilators, and heart monitors. You need to know electronics and understand how medical devices interact with the body.",
      "day_in_life": ["Calibrate patient monitors", "Repair broken X-ray machines", "Perform safety checks"],
      "tags": ["Trade", "Healthcare", "Tech"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["hospital", "repair", "tech", "medical"],
      "related_career_ids": ["eng_biomedical_engineer", "trade_electrician"]
    }
  },
  {
    "id": "arts_creative_director",
    "title": "Creative Director",
    "domain": "Arts & Design",
    "slug": "creative-director",
    "match_profile": {
      "interests": ["big_ideas", "leadership", "branding", "art"],
      "personality": ["visionary", "decisive", "inspiring", "bold"],
      "work_style": ["agency", "high_level", "stressful", "collaborative"],
      "deal_breakers": ["doing_grunt_work", "micro_management", "timidity"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Design / Fine Arts",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1500000,
      "max": 5000000,
      "display_range": "₹15L - ₹50L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "AI generates assets, but the CD sets the vision and taste."
    },
    "content": {
      "short_desc": "Leads the creative vision for advertising agencies or brands.",
      "long_desc": "Creative Directors are the bosses of ideas. You lead teams of copywriters and designers to create ad campaigns or brand identities. You don't design the logo; you decide what the logo should 'feel' like.",
      "day_in_life": ["Pitch campaigns to clients", "Review team's creative work", "Set brand strategy"],
      "tags": ["Creative", "Leadership", "Marketing"]
    },
    "meta": {
      "popularity_rank": 20,
      "search_keywords": ["advertising", "design", "boss", "brand"],
      "related_career_ids": ["creative_art_director", "media_content_strategist"]
    }
  },
  {
    "id": "biz_tax_accountant",
    "title": "Tax Accountant",
    "domain": "Business",
    "slug": "tax-accountant",
    "match_profile": {
      "interests": ["taxes", "law", "numbers", "saving_money"],
      "personality": ["detail_oriented", "ethical", "structured", "patient"],
      "work_style": ["office", "seasonal_crunch", "quiet", "analytical"],
      "deal_breakers": ["creativity", "public_speaking", "chaos"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Accounting / Taxation",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "High",
      "future_trend": "Software handles filing; accountants focus on tax strategy and law."
    },
    "content": {
      "short_desc": "Prepares tax returns and advises on tax laws.",
      "long_desc": "Tax Accountants help people follow the law and save money. You prepare tax returns for individuals or companies and find legal deductions. It is busy during tax season but stable year-round.",
      "day_in_life": ["Prepare tax returns", "Research new tax laws", "Audit company finances"],
      "tags": ["Business", "Finance", "Law"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["tax", "money", "audit", "cpa"],
      "related_career_ids": ["finance_chartered_accountant", "finance_payroll_specialist"]
    }
  },
  {
    "id": "service_personal_shopper",
    "title": "Personal Shopper / Stylist",
    "domain": "Service",
    "slug": "personal-shopper",
    "match_profile": {
      "interests": ["fashion", "shopping", "helping_people", "trends"],
      "personality": ["stylish", "social", "perceptive", "honest"],
      "work_style": ["shops/homes", "client_facing", "visual", "active"],
      "deal_breakers": ["budget_constraints", "desk_job", "isolation"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "Fashion / Experience",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1200000,
      "display_range": "₹3L - ₹12L per year",
      "pay_structure": "Salary / Commission"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Virtual styling via Zoom is expanding the client base."
    },
    "content": {
      "short_desc": "Selects clothing and accessories for clients.",
      "long_desc": "Personal Shoppers help people look good. You shop for clients who are too busy or don't know fashion. You need to understand body types, trends, and how to stay within a budget.",
      "day_in_life": ["Consult with clients", "Shop for outfits", "Conduct wardrobe audits"],
      "tags": ["Fashion", "Service", "Creative"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["fashion", "style", "shopping", "clothes"],
      "related_career_ids": ["creative_fashion_designer", "arts_visual_merchandiser"]
    }
  },
  {
    "id": "tech_site_reliability_engineer",
    "title": "Site Reliability Engineer (SRE)",
    "domain": "Technology",
    "slug": "sre",
    "match_profile": {
      "interests": ["uptime", "coding", "infrastructure", "automation"],
      "personality": ["calm", "proactive", "systematic", "analytical"],
      "work_style": ["remote/office", "on_call", "backend", "critical"],
      "deal_breakers": ["manual_tasks", "instability", "pure_feature_dev"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / IT",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1200000,
      "max": 3500000,
      "display_range": "₹12L - ₹35L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "As apps become critical infrastructure, keeping them online is vital."
    },
    "content": {
      "short_desc": "Ensures websites and apps stay online and run fast.",
      "long_desc": "SREs keep the internet running. You write code to automate system administration. When Google or Netflix goes down, SREs are the ones fixing it. It sits between software engineering and operations.",
      "day_in_life": ["Monitor system health", "Write automation scripts", "Respond to incidents"],
      "tags": ["Tech", "Coding", "Ops"]
    },
    "meta": {
      "popularity_rank": 20,
      "search_keywords": ["devops", "uptime", "google", "cloud"],
      "related_career_ids": ["tech_devops_engineer", "tech_backend_engineer"]
    }
  },
  {
    "id": "science_toxicologist",
    "title": "Toxicologist",
    "domain": "Science",
    "slug": "toxicologist",
    "match_profile": {
      "interests": ["poisons", "chemistry", "safety", "biology"],
      "personality": ["cautious", "analytical", "precise", "responsible"],
      "work_style": ["lab_based", "safety_focused", "research", "quiet"],
      "deal_breakers": ["carelessness", "public_facing", "rushing"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Toxicology / Pharmacology",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Environmental toxicology (pollution impact) is a growing field."
    },
    "content": {
      "short_desc": "Studies the effects of chemicals and poisons on living things.",
      "long_desc": "Toxicologists study safety. You test new drugs, cosmetics, or chemicals to ensure they don't harm people or the environment. You might work for pharma companies or the police (forensics).",
      "day_in_life": ["Test chemical safety", "Analyze lab samples", "Write safety reports"],
      "tags": ["Science", "Safety", "Health"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["poison", "lab", "safety", "drugs"],
      "related_career_ids": ["science_pharmacologist", "science_forensic_scientist"]
    }
  },
  {
    "id": "law_parole_officer",
    "title": "Parole / Probation Officer",
    "domain": "Legal",
    "slug": "parole-officer",
    "match_profile": {
      "interests": ["rehabilitation", "law", "social_work", "justice"],
      "personality": ["tough", "fair", "patient", "vigilant"],
      "work_style": ["field/office", "high_stress", "enforcement", "social"],
      "deal_breakers": ["naivety", "office_only", "fear_of_conflict"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Criminal Justice / Social Work",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 350000,
      "max": 900000,
      "display_range": "₹3.5L - ₹9L per year",
      "pay_structure": "Govt Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Focus shifting from punishment to rehabilitation and tech monitoring."
    },
    "content": {
      "short_desc": "Supervises offenders released from prison.",
      "long_desc": "Parole Officers help ex-convicts reintegrate. You monitor their behavior, ensure they follow court orders, and help them find jobs. It balances law enforcement with social work.",
      "day_in_life": ["Visit clients at home", "Conduct drug tests", "Write court reports"],
      "tags": ["Law", "Social Work", "Justice"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["police", "social_work", "prison", "law"],
      "related_career_ids": ["social_social_worker", "govt_police_officer"]
    }
  },
  {
    "id": "trade_survey_tech",
    "title": "Surveying Technician",
    "domain": "Skilled Trade",
    "slug": "survey-tech",
    "match_profile": {
      "interests": ["outdoors", "maps", "math", "equipment"],
      "personality": ["active", "precise", "rugged", "technical"],
      "work_style": ["field_work", "outdoor", "assistant", "technical"],
      "deal_breakers": ["office_job", "bad_weather", "guessing"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Surveying / Civil Eng",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 600000,
      "display_range": "₹2.5L - ₹6L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Using drones and LIDAR scanners is becoming standard."
    },
    "content": {
      "short_desc": "Assists Land Surveyors in measuring land.",
      "long_desc": "Survey Techs do the fieldwork. You operate the GPS and laser instruments to measure land for construction. It is an active, outdoor job that is a stepping stone to becoming a licensed surveyor.",
      "day_in_life": ["Set up survey tripods", "Record GPS data", "Clear brush for sightlines"],
      "tags": ["Trade", "Construction", "Outdoors"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["map", "measure", "land", "construction"],
      "related_career_ids": ["trade_land_surveyor", "eng_civil_engineer"]
    }
  },
  {
    "id": "arts_film_editor",
    "title": "Film Editor",
    "domain": "Arts & Design",
    "slug": "film-editor",
    "match_profile": {
      "interests": ["movies", "storytelling", "pacing", "tech"],
      "personality": ["patient", "creative", "detail_oriented", "solitary"],
      "work_style": ["studio", "screen_heavy", "dark_room", "creative"],
      "deal_breakers": ["outdoors", "public_speaking", "rushing"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Film Editing",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 350000,
      "max": 1500000,
      "display_range": "₹3.5L - ₹15L per year",
      "pay_structure": "Salary / Project"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "AI does rough cuts; humans do the emotional pacing and storytelling."
    },
    "content": {
      "short_desc": "Assembles raw footage into a finished movie.",
      "long_desc": "Film Editors shape the story. You take hours of raw video and cut it down to a 2-hour movie. You decide the pacing, mood, and flow of the film. It happens in a dark room with powerful computers.",
      "day_in_life": ["Review raw dailies", "Cut scenes in Premiere Pro", "Collaborate with director"],
      "tags": ["Creative", "Cinema", "Tech"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["movie", "edit", "video", "cinema"],
      "related_career_ids": ["media_video_editor", "creative_film_director"]
    }
  },
  {
    "id": "edu_esl_teacher",
    "title": "ESL Teacher (English as Second Language)",
    "domain": "Education",
    "slug": "esl-teacher",
    "match_profile": {
      "interests": ["languages", "travel", "culture", "teaching"],
      "personality": ["patient", "adaptable", "social", "encouraging"],
      "work_style": ["classroom/online", "global", "interactive", "flexible"],
      "deal_breakers": ["staying_home", "monolingualism", "strict_curriculum"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "TEFL / TESOL Cert",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1200000,
      "display_range": "₹3L - ₹12L (Often Overseas)",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Online teaching platforms connect teachers to students globally."
    },
    "content": {
      "short_desc": "Teaches English to non-native speakers.",
      "long_desc": "ESL Teachers open the world to students. You teach English grammar and conversation, often traveling to other countries or teaching online. It is a great way to see the world.",
      "day_in_life": ["Plan grammar lessons", "Practice conversation", "Assess student progress"],
      "tags": ["Education", "Language", "Travel"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["english", "teacher", "travel", "abroad"],
      "related_career_ids": ["edu_primary_teacher", "creative_translator"]
    }
  },
  {
    "id": "biz_sales_manager",
    "title": "Retail Sales Manager",
    "domain": "Business",
    "slug": "sales-manager",
    "match_profile": {
      "interests": ["sales", "teamwork", "targets", "coaching"],
      "personality": ["energetic", "competitive", "social", "leader"],
      "work_style": ["store/office", "target_driven", "social", "management"],
      "deal_breakers": ["quiet", "backend_work", "losing"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Business",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary + Bonus"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Shift to managing omnichannel (online + offline) sales teams."
    },
    "content": {
      "short_desc": "Leads a sales team to meet revenue targets.",
      "long_desc": "Sales Managers drive growth. You hire, train, and motivate salespeople to hit their targets. You are responsible for the team's performance and morale.",
      "day_in_life": ["Set sales targets", "Coach sales staff", "Review performance data"],
      "tags": ["Business", "Sales", "Management"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["sales", "boss", "retail", "target"],
      "related_career_ids": ["biz_retail_manager", "sales_b2b_sales_manager"]
    }
  },
  {
    "id": "health_chiropractic_assistant",
    "title": "Chiropractic Assistant",
    "domain": "Healthcare",
    "slug": "chiropractic-assistant",
    "match_profile": {
      "interests": ["wellness", "admin", "helping_people", "routine"],
      "personality": ["friendly", "organized", "supportive", "active"],
      "work_style": ["clinic", "social", "administrative", "health"],
      "deal_breakers": ["blood", "high_stress", "complex_medicine"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Healthcare Admin",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 500000,
      "display_range": "₹2L - ₹5L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Growing wellness industry supports this role."
    },
    "content": {
      "short_desc": "Assists chiropractors with patient care and office tasks.",
      "long_desc": "Chiropractic Assistants run the clinic. You manage appointments, prepare patients for treatment, and may help with therapies like heat packs. It is a low-stress entry into healthcare.",
      "day_in_life": ["Check patients in", "Apply heat/cold therapy", "Manage billing"],
      "tags": ["Healthcare", "Admin", "Support"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["admin", "clinic", "health", "assistant"],
      "related_career_ids": ["health_chiropractor", "service_receptionist"]
    }
  },
  {
    "id": "eng_quality_engineer",
    "title": "Quality Engineer",
    "domain": "Engineering",
    "slug": "quality-engineer",
    "match_profile": {
      "interests": ["perfection", "manufacturing", "statistics", "rules"],
      "personality": ["critical", "meticulous", "authoritative", "logical"],
      "work_style": ["factory", "inspection", "process_driven", "technical"],
      "deal_breakers": ["cutting_corners", "creativity", "chaos"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Industrial / Mechanical Eng",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Automated visual inspection is changing the tools, not the goal."
    },
    "content": {
      "short_desc": "Ensures manufactured products meet quality standards.",
      "long_desc": "Quality Engineers prevent defects. You design tests to check if products are strong enough and safe. If a car part fails, you figure out why and fix the production line.",
      "day_in_life": ["Analyze defect data", "Audit production lines", "Design stress tests"],
      "tags": ["Engineering", "Manufacturing", "Quality"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["factory", "test", "quality", "iso"],
      "related_career_ids": ["eng_industrial_engineer", "tech_qa_engineer"]
    }
  },
  {
    "id": "tech_it_manager",
    "title": "IT Manager",
    "domain": "Technology",
    "slug": "it-manager",
    "match_profile": {
      "interests": ["technology", "management", "strategy", "security"],
      "personality": ["organized", "responsible", "decisive", "technical"],
      "work_style": ["office", "management", "strategic", "high_responsibility"],
      "deal_breakers": ["fixing_printers", "entry_level", "ignoring_budget"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / IT Management",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 2500000,
      "display_range": "₹10L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Cybersecurity and remote work infrastructure are top priorities."
    },
    "content": {
      "short_desc": "Oversees a company's computer systems and IT staff.",
      "long_desc": "IT Managers run the tech department. You manage the IT budget, hire support staff, and decide what software the company buys. You ensure the digital backbone of the company is strong.",
      "day_in_life": ["Plan IT budget", "Supervise support team", "Review security policies"],
      "tags": ["Tech", "Management", "Corporate"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["manager", "it", "tech", "admin"],
      "related_career_ids": ["tech_cto", "tech_sysadmin"]
    }
  },
  {
    "id": "science_microbiology_lab_tech",
    "title": "Microbiology Lab Technician",
    "domain": "Science",
    "slug": "microbiology-tech",
    "match_profile": {
      "interests": ["bacteria", "lab_work", "routine", "health"],
      "personality": ["careful", "focused", "routine_oriented", "clean"],
      "work_style": ["lab", "repetitive", "sterile", "technical"],
      "deal_breakers": ["germs", "creativity", "outdoors"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "MLT / Microbiology",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 600000,
      "display_range": "₹2.5L - ₹6L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Automated testing machines are handling routine samples."
    },
    "content": {
      "short_desc": "Prepares and tests samples in a microbiology lab.",
      "long_desc": "Lab Techs do the bench work. You prepare petri dishes, stain slides, and run tests to find bacteria or viruses. You support the scientists and doctors with accurate data.",
      "day_in_life": ["Prepare culture media", "Test samples for pathogens", "Sterilize lab equipment"],
      "tags": ["Science", "Lab", "Health"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["lab", "test", "bacteria", "science"],
      "related_career_ids": ["science_microbiologist", "health_phlebotomist"]
    }
  },
  {
    "id": "arts_animator_3d",
    "title": "3D Modeler",
    "domain": "Arts & Design",
    "slug": "3d-modeler",
    "match_profile": {
      "interests": ["sculpting", "computers", "games", "detail"],
      "personality": ["visual", "patient", "technical", "perfectionist"],
      "work_style": ["computer", "visual", "solitary", "detailed"],
      "deal_breakers": ["drawing_2d", "rushing", "low_poly"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "3D Animation / Design",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "AI generates base models; humans refine and animate them."
    },
    "content": {
      "short_desc": "Creates 3D characters and objects for games and movies.",
      "long_desc": "3D Modelers represent digital sculptors. You use software like Blender or Maya to build characters, cars, or buildings for video games and movies. You build the wireframe and apply textures.",
      "day_in_life": ["Sculpt character mesh", "Apply texture maps", "Optimize model for game engine"],
      "tags": ["Creative", "Tech", "3D"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["3d", "blender", "game", "design"],
      "related_career_ids": ["creative_animator", "tech_game_developer"]
    }
  },
  {
    "id": "service_travel_guide",
    "title": "Tour Guide",
    "domain": "Service",
    "slug": "tour-guide",
    "match_profile": {
      "interests": ["history", "speaking", "people", "travel"],
      "personality": ["enthusiastic", "knowledgeable", "loud", "social"],
      "work_style": ["field_work", "public_speaking", "active", "fun"],
      "deal_breakers": ["shyness", "bad_weather", "desk_job"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "History / Languages",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 600000,
      "display_range": "₹2L - ₹6L per year",
      "pay_structure": "Tips / Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Audio apps compete, but human personality wins for group tours."
    },
    "content": {
      "short_desc": "Leads groups of tourists and explains local history.",
      "long_desc": "Tour Guides are storytellers. You lead groups through cities or museums, sharing history and funny anecdotes. You need energy, a loud voice, and a love for your city.",
      "day_in_life": ["Lead walking tours", "Memorize historical facts", "Manage tourist groups"],
      "tags": ["Travel", "History", "Social"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["tour", "travel", "guide", "history"],
      "related_career_ids": ["hospitality_travel_agent", "arts_museum_curator"]
    }
  },
  {
    "id": "eng_textile_engineer",
    "title": "Textile Engineer",
    "domain": "Engineering",
    "slug": "textile-engineer",
    "match_profile": {
      "interests": ["fabrics", "chemistry", "manufacturing", "fashion"],
      "personality": ["innovative", "detail_oriented", "practical", "technical"],
      "work_style": ["factory/lab", "process_driven", "technical", "collaborative"],
      "deal_breakers": ["office_only", "abstract_art", "low_tech"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Textile Engineering",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Smart fabrics (wearable tech) and sustainable fibers are booming."
    },
    "content": {
      "short_desc": "Designs processes to manufacture fibers and fabrics.",
      "long_desc": "Textile Engineers make the cloth we wear. You design the machines and chemical processes to turn raw cotton or polyester into usable fabric. You solve problems like 'how to make this shirt sweat-proof'.",
      "day_in_life": ["Test fabric strength", "Design knitting patterns", "Oversee dyeing process"],
      "tags": ["Engineering", "Fashion", "Manufacturing"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["fabric", "cloth", "fashion", "factory"],
      "related_career_ids": ["arts_textile_designer", "eng_chemical_engineer"]
    }
  },
  {
    "id": "eng_geotechnical_engineer",
    "title": "Geotechnical Engineer",
    "domain": "Engineering",
    "slug": "geotechnical-engineer",
    "match_profile": {
      "interests": ["rocks", "soil", "construction", "safety"],
      "personality": ["cautious", "analytical", "rugged", "responsible"],
      "work_style": ["field_work", "muddy", "technical", "investigative"],
      "deal_breakers": ["clean_shoes", "guessing", "office_politics"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Civil Engineering / Geology",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1800000,
      "display_range": "₹5L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Climate change landslides and urban expansion keep this vital."
    },
    "content": {
      "short_desc": "Analyzes soil and rock to ensure foundations are safe.",
      "long_desc": "Geotechnical Engineers make sure buildings don't sink. You drill into the ground to test soil stability before a skyscraper or bridge is built. You tell the architects how deep the foundation must go.",
      "day_in_life": ["Collect soil samples", "Analyze ground stability", "Write safety reports"],
      "tags": ["Engineering", "Construction", "Earth"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["soil", "foundation", "construction", "civil"],
      "related_career_ids": ["eng_civil_engineer", "science_geologist"]
    }
  },
  {
    "id": "health_cytotechnologist",
    "title": "Cytotechnologist",
    "domain": "Healthcare",
    "slug": "cytotechnologist",
    "match_profile": {
      "interests": ["cells", "microscope", "cancer", "detective"],
      "personality": ["meticulous", "focused", "quiet", "patient"],
      "work_style": ["lab_based", "microscopic", "sedentary", "solitary"],
      "deal_breakers": ["eye_strain", "public_facing", "rushing"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Cytotechnology / Biology",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "AI screens slides first, but humans verify cancer diagnoses."
    },
    "content": {
      "short_desc": "Examines cells under a microscope to detect cancer.",
      "long_desc": "Cytotechnologists find cancer early. You look at slides of human cells (like Pap smears) under a microscope to spot abnormalities. It is a quiet, high-focus job that saves lives.",
      "day_in_life": ["Prepare cell slides", "Screen for cancer cells", "Report findings to pathologists"],
      "tags": ["Healthcare", "Lab", "Cancer"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["microscope", "lab", "cancer", "cells"],
      "related_career_ids": ["science_microbiology_lab_tech", "health_pathologist"]
    }
  },
  {
    "id": "health_anesthesiologist_assistant",
    "title": "Anesthesiologist Assistant",
    "domain": "Healthcare",
    "slug": "anesthesiologist-assistant",
    "match_profile": {
      "interests": ["surgery", "pharmacology", "monitoring", "care"],
      "personality": ["calm", "vigilant", "technical", "responsive"],
      "work_style": ["operating_room", "high_stress", "team_based", "technical"],
      "deal_breakers": ["boredom", "panic", "autonomy"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Anesthesia Assistant",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1800000,
      "display_range": "₹6L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Surgery volume is increasing, requiring more support staff."
    },
    "content": {
      "short_desc": "Helps administer anesthesia during surgery.",
      "long_desc": "Anesthesia Assistants keep patients asleep and safe. You work under an Anesthesiologist to monitor heart rate and breathing during surgery. It is a high-responsibility role with good pay.",
      "day_in_life": ["Prep anesthesia machine", "Monitor patient vitals", "Assist in intubation"],
      "tags": ["Healthcare", "Surgery", "Tech"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["surgery", "hospital", "sleep", "medical"],
      "related_career_ids": ["health_registered_nurse", "health_surgical_technologist"]
    }
  },
  {
    "id": "trade_boat_builder",
    "title": "Shipwright / Boat Builder",
    "domain": "Skilled Trade",
    "slug": "boat-builder",
    "match_profile": {
      "interests": ["boats", "woodworking", "ocean", "craft"],
      "personality": ["skilled", "patient", "detail_oriented", "strong"],
      "work_style": ["dockyard", "physical", "creative", "outdoor"],
      "deal_breakers": ["office_work", "seasickness", "mass_production"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Marine Technology / Carpentry",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1200000,
      "display_range": "₹3L - ₹12L per year",
      "pay_structure": "Wage / Project"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Luxury yacht building is a lucrative niche market."
    },
    "content": {
      "short_desc": "Builds and repairs wooden, fiberglass, or metal boats.",
      "long_desc": "Shipwrights build vessels. Whether it's a small wooden fishing boat or a luxury fiberglass yacht, you craft the hull and install the fittings. It combines carpentry, welding, and mechanics.",
      "day_in_life": ["Read boat blueprints", "Shape hull planks", "Install marine engines"],
      "tags": ["Trade", "Marine", "Craft"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["boat", "marine", "carpenter", "repair"],
      "related_career_ids": ["trade_carpenter", "eng_marine_engineer"]
    }
  },
  {
    "id": "trade_tool_die_maker",
    "title": "Tool and Die Maker",
    "domain": "Skilled Trade",
    "slug": "tool-die-maker",
    "match_profile": {
      "interests": ["metal", "precision", "machines", "manufacturing"],
      "personality": ["perfectionist", "patient", "technical", "logical"],
      "work_style": ["factory", "ultra_precise", "machine_focused", "quiet"],
      "deal_breakers": ["imprecision", "rushing", "dirt"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "ITI Tool & Die",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "3D printing is a tool they use, not a replacement for high-strength dies."
    },
    "content": {
      "short_desc": "Creates precision tools and molds for manufacturing.",
      "long_desc": "Tool Makers enable mass production. You build the metal molds (dies) that stamp out car parts or plastic bottles. You work with accuracy to the micron (0.001mm). It is the elite level of machining.",
      "day_in_life": ["Read CAD blueprints", "Grind metal parts", "Test mold accuracy"],
      "tags": ["Trade", "Manufacturing", "Precision"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["machinist", "factory", "mold", "metal"],
      "related_career_ids": ["trade_machinist", "eng_mechanical_engineer"]
    }
  },
  {
    "id": "biz_energy_auditor",
    "title": "Energy Auditor",
    "domain": "Business",
    "slug": "energy-auditor",
    "match_profile": {
      "interests": ["efficiency", "sustainability", "buildings", "data"],
      "personality": ["observant", "analytical", "practical", "investigative"],
      "work_style": ["field_work", "inspection", "report_writing", "consulting"],
      "deal_breakers": ["waste", "desk_only", "ignoring_details"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Energy Management / Engineering",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Rising energy costs make this role essential for businesses."
    },
    "content": {
      "short_desc": "Inspects buildings to find ways to save energy.",
      "long_desc": "Energy Auditors save the planet and money. You inspect factories or offices to find heat leaks, inefficient lights, or old AC units. You recommend upgrades that lower electricity bills.",
      "day_in_life": ["Inspect building insulation", "Analyze electricity bills", "Recommend LED upgrades"],
      "tags": ["Green", "Business", "Efficiency"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["green", "energy", "audit", "efficiency"],
      "related_career_ids": ["biz_sustainability_manager", "trade_hvac_technician"]
    }
  },
  {
    "id": "science_arborist",
    "title": "Urban Forester / Arborist",
    "domain": "Science",
    "slug": "arborist",
    "match_profile": {
      "interests": ["trees", "climbing", "nature", "safety"],
      "personality": ["brave", "physical", "nature_lover", "careful"],
      "work_style": ["outdoors", "physical", "heights", "hands_on"],
      "deal_breakers": ["office", "fear_of_heights", "weakness"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Forestry / Arboriculture",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 900000,
      "display_range": "₹3L - ₹9L per year",
      "pay_structure": "Salary / Project"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Urban greening projects increasing demand for tree care."
    },
    "content": {
      "short_desc": "Plants, maintains, and removes trees in cities.",
      "long_desc": "Arborists are tree doctors. You climb trees to prune branches, treat diseases, or safely remove dead trees. It is physically demanding work that keeps cities green and safe.",
      "day_in_life": ["Climb trees with ropes", "Prune dangerous branches", "Diagnose tree diseases"],
      "tags": ["Nature", "Physical", "Outdoors"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["tree", "nature", "garden", "forest"],
      "related_career_ids": ["science_horticulturist", "arts_landscape_architect"]
    }
  },
  {
    "id": "science_clinical_research_coordinator",
    "title": "Clinical Research Coordinator",
    "domain": "Science",
    "slug": "clinical-research-coordinator",
    "match_profile": {
      "interests": ["medicine", "rules", "organization", "patients"],
      "personality": ["organized", "ethical", "detail_oriented", "communicative"],
      "work_style": ["hospital/office", "regulatory", "paperwork_heavy", "social"],
      "deal_breakers": ["chaos", "cutting_corners", "sales"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Life Sciences / Nursing",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Drug trials are complex and strictly regulated, requiring human oversight."
    },
    "content": {
      "short_desc": "Manages medical trials for new drugs and treatments.",
      "long_desc": "CRCs run medical experiments safely. You recruit patients for drug trials, ensure they follow the protocol, and collect data for the FDA. You are the bridge between the drug company and the patient.",
      "day_in_life": ["Screen patients for eligibility", "Collect medical data", "Ensure trial compliance"],
      "tags": ["Science", "Health", "Admin"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["research", "medical", "drug", "trial"],
      "related_career_ids": ["science_biomedical_researcher", "health_registered_nurse"]
    }
  },
  {
    "id": "arts_medical_illustrator",
    "title": "Medical Illustrator",
    "domain": "Arts & Design",
    "slug": "medical-illustrator",
    "match_profile": {
      "interests": ["drawing", "anatomy", "science", "education"],
      "personality": ["precise", "artistic", "intellectual", "visual"],
      "work_style": ["studio", "solitary", "detailed", "educational"],
      "deal_breakers": ["blood_phobia", "imprecision", "abstract_art"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Medical Illustration",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary / Freelance"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "3D modeling of organs for VR surgery training is the new standard."
    },
    "content": {
      "short_desc": "Creates detailed drawings of human anatomy for textbooks.",
      "long_desc": "Medical Illustrators draw what cameras can't show. You create accurate diagrams of surgeries, organs, or molecules for medical textbooks and legal cases. You must be an expert in both art and anatomy.",
      "day_in_life": ["Sketch surgical procedures", "Create 3D organ models", "Meeting with doctors"],
      "tags": ["Arts", "Science", "Visual"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["art", "anatomy", "medical", "drawing"],
      "related_career_ids": ["creative_illustrator", "creative_animator"]
    }
  },
  {
    "id": "tech_ui_developer",
    "title": "UI Developer",
    "domain": "Technology",
    "slug": "ui-developer",
    "match_profile": {
      "interests": ["design", "coding", "aesthetics", "web"],
      "personality": ["visual", "detail_oriented", "creative", "technical"],
      "work_style": ["computer_based", "visual", "front_end", "collaborative"],
      "deal_breakers": ["backend_logic", "ugly_interfaces", "database_work"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / Design / Bootcamp",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 2000000,
      "display_range": "₹5L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Focusing on animation and micro-interactions distinguishes from AI."
    },
    "content": {
      "short_desc": "Turns design mockups into functional web code.",
      "long_desc": "UI Developers sit between design and engineering. Unlike Frontend Devs (who do logic), you focus purely on the look and feel—animations, CSS layouts, and pixel-perfect implementation of the designer's vision.",
      "day_in_life": ["Convert Figma to CSS", "Create micro-animations", "Ensure mobile responsiveness"],
      "tags": ["Tech", "Creative", "Web"]
    },
    "meta": {
      "popularity_rank": 25,
      "search_keywords": ["css", "html", "design", "frontend"],
      "related_career_ids": ["tech_frontend_engineer", "creative_ui_ux_designer"]
    }
  },
  {
    "id": "tech_erp_consultant",
    "title": "ERP Consultant (SAP/Oracle)",
    "domain": "Technology",
    "slug": "erp-consultant",
    "match_profile": {
      "interests": ["business_process", "software", "efficiency", "travel"],
      "personality": ["analytical", "professional", "problem_solver", "organized"],
      "work_style": ["client_site", "project_based", "high_pay", "travel_heavy"],
      "deal_breakers": ["coding_only", "small_business", "stability"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "IT / Business / Accounting",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 3000000,
      "display_range": "₹8L - ₹30L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Moving enterprises to the cloud keeps demand very high."
    },
    "content": {
      "short_desc": "Implements complex business software for large companies.",
      "long_desc": "ERP Consultants run big business. You help giant companies install software like SAP or Oracle to manage their finance, HR, and supply chain. It involves travel, high pay, and complex problem solving.",
      "day_in_life": ["Map business processes", "Configure SAP modules", "Train corporate staff"],
      "tags": ["Tech", "Business", "High Pay"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["sap", "oracle", "business", "consulting"],
      "related_career_ids": ["business_management_consultant", "tech_solutions_architect"]
    }
  },
  {
    "id": "hospitality_gm",
    "title": "Hotel General Manager",
    "domain": "Hospitality",
    "slug": "hotel-gm",
    "match_profile": {
      "interests": ["leadership", "luxury", "business", "service"],
      "personality": ["charismatic", "decisive", "responsible", "host"],
      "work_style": ["hotel", "24_7_responsibility", "social", "high_status"],
      "deal_breakers": ["privacy", "9_to_5", "mess"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Hospitality Management",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1500000,
      "max": 5000000,
      "display_range": "₹15L - ₹50L per year",
      "pay_structure": "Salary + Bonuses"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Experience-driven luxury travel is booming post-pandemic."
    },
    "content": {
      "short_desc": "Oversees the entire operation of a hotel property.",
      "long_desc": "The Hotel GM is the captain of the ship. You are responsible for profit, guest satisfaction, and staff morale. You live and breathe hospitality, often living on the property.",
      "day_in_life": ["Review daily revenue", "Inspect VIP rooms", "Meet department heads"],
      "tags": ["Management", "Hospitality", "Leadership"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["hotel", "manager", "luxury", "boss"],
      "related_career_ids": ["hospitality_hotel_manager", "hospitality_restaurant_owner"]
    }
  },
  {
    "id": "service_casino_manager",
    "title": "Casino Manager",
    "domain": "Service",
    "slug": "casino-manager",
    "match_profile": {
      "interests": ["gambling", "security", "money", "nightlife"],
      "personality": ["alert", "suspicious", "authoritative", "calm"],
      "work_style": ["casino_floor", "night_shifts", "monitoring", "high_stakes"],
      "deal_breakers": ["daylight", "naivety", "trusting_nature"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Hospitality / Business",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 3000000,
      "display_range": "₹10L - ₹30L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Surveillance AI helps, but managing floor disputes remains human."
    },
    "content": {
      "short_desc": "Manages gaming operations and security on a casino floor.",
      "long_desc": "Casino Managers watch the money. You ensure games are fair, staff are honest, and VIP guests are happy. You manage the pit bosses and security to prevent cheating and theft.",
      "day_in_life": ["Monitor surveillance feeds", "Authorize high-value payouts", "Manage floor staff"],
      "tags": ["Service", "Management", "Security"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["casino", "manager", "security", "gaming"],
      "related_career_ids": ["service_casino_dealer", "hospitality_gm"]
    }
  },
  {
    "id": "govt_food_inspector",
    "title": "Food Safety Inspector",
    "domain": "Government",
    "slug": "food-inspector",
    "match_profile": {
      "interests": ["food", "hygiene", "law", "public_health"],
      "personality": ["strict", "observant", "incorruptible", "detail_oriented"],
      "work_style": ["field_work", "inspection", "enforcement", "travel"],
      "deal_breakers": ["bribes", "mess", "conflict_avoidance"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Food Technology / Microbiology",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Govt Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Supply chain complexity increases need for safety checks."
    },
    "content": {
      "short_desc": "Inspects restaurants and factories for hygiene violations.",
      "long_desc": "Food Inspectors keep dinner safe. You visit restaurants and food factories to check for pests, dirt, or bad practices. You have the power to close down dirty kitchens to protect the public.",
      "day_in_life": ["Inspect restaurant kitchens", "Test food samples", "Issue health code violations"],
      "tags": ["Government", "Health", "Food"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["food", "safety", "health", "inspector"],
      "related_career_ids": ["science_food_scientist", "business_safety_specialist"]
    }
  },
  {
    "id": "health_educator",
    "title": "Public Health Educator",
    "domain": "Healthcare",
    "slug": "health-educator",
    "match_profile": {
      "interests": ["teaching", "community", "wellness", "prevention"],
      "personality": ["enthusiastic", "communicative", "social", "patient"],
      "work_style": ["community", "public_speaking", "social", "educational"],
      "deal_breakers": ["clinical_work", "blood", "cubicle"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Public Health / Education",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Salary (NGO/Govt)"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Preventative health focus is growing to reduce hospital costs."
    },
    "content": {
      "short_desc": "Teaches communities about healthy behaviors and disease prevention.",
      "long_desc": "Health Educators prevent illness. You run workshops on nutrition, safe sex, or diabetes management. You work in schools, NGOs, or community centers to improve public health.",
      "day_in_life": ["Run community workshops", "Create health brochures", "Advise on lifestyle changes"],
      "tags": ["Healthcare", "Education", "Social Impact"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["health", "teacher", "community", "wellness"],
      "related_career_ids": ["social_social_worker", "health_nutritionist"]
    }
  },
  {
    "id": "arts_auctioneer",
    "title": "Art Auctioneer",
    "domain": "Arts & Design",
    "slug": "art-auctioneer",
    "match_profile": {
      "interests": ["art", "money", "performance", "sales"],
      "personality": ["charismatic", "fast_talker", "confident", "dramatic"],
      "work_style": ["public", "high_energy", "sales_driven", "travel"],
      "deal_breakers": ["shyness", "slow_pace", "backend_admin"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Art History / Business",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 2500000,
      "display_range": "₹5L - ₹25L per year",
      "pay_structure": "Commission"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Low",
      "future_trend": "Online auctions are growing, but live events remain for high-value items."
    },
    "content": {
      "short_desc": "Sells art and collectibles at public auctions.",
      "long_desc": "Auctioneers sell to the highest bidder. You appraise art items and then run the live auction, using a fast-paced chant to drive up the price. It is sales mixed with theater.",
      "day_in_life": ["Appraise rare items", "Conduct live auction", "Network with collectors"],
      "tags": ["Arts", "Sales", "Performance"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["auction", "art", "sales", "bid"],
      "related_career_ids": ["arts_gallery_manager", "sales_b2b_sales_manager"]
    }
  },
  {
    "id": "arts_lighting_designer",
    "title": "Lighting Designer",
    "domain": "Arts & Design",
    "slug": "lighting-designer",
    "match_profile": {
      "interests": ["theater", "concerts", "technology", "mood"],
      "personality": ["creative", "technical", "visual", "cooperative"],
      "work_style": ["theater/set", "night_shifts", "technical", "visual"],
      "deal_breakers": ["daylight_hours", "office_work", "solitude"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Theater Production",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary / Project"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Concert touring industry is booming, requiring complex light shows."
    },
    "content": {
      "short_desc": "Designs lighting systems for stage performances and films.",
      "long_desc": "Lighting Designers paint with light. You control the mood of a concert or play using spotlights, lasers, and colors. You work with directors to ensure the audience sees exactly what they should.",
      "day_in_life": ["Design light plots", "Program lighting console", "Focus lights on stage"],
      "tags": ["Creative", "Tech", "Theater"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["light", "stage", "theater", "concert"],
      "related_career_ids": ["arts_set_designer", "arts_stage_manager"]
    }
  },
  {
    "id": "legal_patent_agent",
    "title": "Patent Agent",
    "domain": "Legal",
    "slug": "patent-agent",
    "match_profile": {
      "interests": ["inventions", "science", "law", "writing"],
      "personality": ["analytical", "detail_oriented", "technical", "precise"],
      "work_style": ["office", "intellectual", "writing_heavy", "quiet"],
      "deal_breakers": ["courtroom_drama", "vagueness", "socializing"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Science / Engineering + Exam",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Tech boom creates endless need for patent protection."
    },
    "content": {
      "short_desc": "Helps inventors file patents without being a lawyer.",
      "long_desc": "Patent Agents are scientists who know law. You don't need a law degree, but you need a science degree. You write the technical descriptions for inventions to help them get patented.",
      "day_in_life": ["Interview inventors", "Write patent claims", "Respond to patent office"],
      "tags": ["Law", "Science", "Tech"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["patent", "invention", "law", "science"],
      "related_career_ids": ["legal_ip_lawyer", "tech_technical_writer"]
    }
  },
  {
    "id": "biz_import_export",
    "title": "Import/Export Specialist",
    "domain": "Business",
    "slug": "import-export",
    "match_profile": {
      "interests": ["trade", "logistics", "international", "regulations"],
      "personality": ["organized", "detail_oriented", "cultural", "patient"],
      "work_style": ["office", "paperwork_heavy", "global", "deadline_driven"],
      "deal_breakers": ["local_focus", "chaos", "selling"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "International Business",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Global supply chain diversification increases need for specialists."
    },
    "content": {
      "short_desc": "Manages the shipment of goods across international borders.",
      "long_desc": "Import/Export Agents move goods globally. You handle the complex paperwork, customs duties, and shipping logistics to get products from one country to another legally and fast.",
      "day_in_life": ["Prepare customs docs", "Coordinate freight shipping", "Ensure trade compliance"],
      "tags": ["Business", "Global", "Logistics"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["trade", "shipping", "customs", "global"],
      "related_career_ids": ["biz_logistics_coordinator", "govt_customs_officer"]
    }
  },
  {
    "id": "eng_automotive_engineer",
    "title": "Automotive Engineer",
    "domain": "Engineering",
    "slug": "automotive-engineer",
    "match_profile": {
      "interests": ["cars", "engines", "design", "speed"],
      "personality": ["innovative", "practical", "technical", "detail_oriented"],
      "work_style": ["factory/office", "product_focused", "technical", "collaborative"],
      "deal_breakers": ["walking", "abstract_art", "low_tech"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Automobile / Mechanical Eng",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 2000000,
      "display_range": "₹5L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Electric Vehicles (EVs) are reinventing the entire industry."
    },
    "content": {
      "short_desc": "Designs and improves cars, bikes, and other vehicles.",
      "long_desc": "Automotive Engineers build the cars of tomorrow. You design engines, safety systems, or aerodynamics. Today, the focus is entirely on electric batteries and self-driving sensors.",
      "day_in_life": ["Design car components in CAD", "Test prototype safety", "Optimize battery efficiency"],
      "tags": ["Engineering", "Cars", "Tech"]
    },
    "meta": {
      "popularity_rank": 20,
      "search_keywords": ["cars", "ev", "tesla", "mechanic"],
      "related_career_ids": ["eng_mechanical_engineer", "trade_mechanic"]
    }
  },
  {
    "id": "health_nurse_practitioner",
    "title": "Nurse Practitioner",
    "domain": "Healthcare",
    "slug": "nurse-practitioner",
    "match_profile": {
      "interests": ["healing", "diagnosis", "autonomy", "biology"],
      "personality": ["compassionate", "decisive", "independent", "caring"],
      "work_style": ["clinic", "patient_facing", "high_responsibility", "social"],
      "deal_breakers": ["being_micromanaged", "boredom", "blood"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Nursing (M.Sc)",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1800000,
      "display_range": "₹6L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Low",
      "future_trend": "Filling the gap of doctor shortages in primary care."
    },
    "content": {
      "short_desc": "Advanced nurse who can diagnose and prescribe medication.",
      "long_desc": "Nurse Practitioners do many things doctors do. You perform checkups, diagnose illnesses, and prescribe medicine. It offers more autonomy than regular nursing and high job satisfaction.",
      "day_in_life": ["Exam patients", "Prescribe medication", "Order lab tests"],
      "tags": ["Healthcare", "Nursing", "High Pay"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["nurse", "doctor", "hospital", "care"],
      "related_career_ids": ["health_registered_nurse", "health_physician"]
    }
  },
  {
    "id": "govt_building_inspector",
    "title": "Building Inspector",
    "domain": "Government",
    "slug": "building-inspector",
    "match_profile": {
      "interests": ["construction", "safety", "rules", "inspection"],
      "personality": ["observant", "strict", "ethical", "knowledgeable"],
      "work_style": ["field_work", "enforcement", "technical", "travel"],
      "deal_breakers": ["cutting_corners", "bribes", "desk_job"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Civil Eng / Architecture",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Govt Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Green building codes are adding new layers to inspections."
    },
    "content": {
      "short_desc": "Ensures construction projects meet safety and legal codes.",
      "long_desc": "Building Inspectors keep us safe. You visit construction sites to check if the wiring, plumbing, and foundation follow the law. You have the authority to stop unsafe work immediately.",
      "day_in_life": ["Walk construction sites", "Check blueprints vs reality", "Issue safety permits"],
      "tags": ["Government", "Construction", "Safety"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["safety", "construction", "civil", "audit"],
      "related_career_ids": ["eng_civil_engineer", "trade_electrician"]
    }
  },
  {
    "id": "media_investigative_journalist",
    "title": "Investigative Journalist",
    "domain": "Media & Marketing",
    "slug": "investigative-journalist",
    "match_profile": {
      "interests": ["truth", "secrets", "writing", "justice"],
      "personality": ["curious", "brave", "persistent", "skeptical"],
      "work_style": ["field_work", "deep_research", "high_risk", "independent"],
      "deal_breakers": ["fluff_pieces", "pr_spin", "routine"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Journalism / Pol Sci",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Low",
      "future_trend": "Niche but vital; uncovering corruption cannot be automated."
    },
    "content": {
      "short_desc": "Researches and exposes corruption, crime, or wrongdoing.",
      "long_desc": "Investigative Journalists dig deep. You spend months researching a single story to uncover a government scandal or corporate crime. It is dangerous, difficult, and essential for democracy.",
      "day_in_life": ["Analyze leaked documents", "Interview secret sources", "Fact-check legal risks"],
      "tags": ["Media", "Justice", "Writing"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["news", "crime", "writing", "reporter"],
      "related_career_ids": ["media_journalist", "legal_human_rights_lawyer"]
    }
  },
  {
    "id": "health_recreational_therapist",
    "title": "Recreational Therapist",
    "domain": "Healthcare",
    "slug": "recreational-therapist",
    "match_profile": {
      "interests": ["play", "psychology", "sports", "helping_people"],
      "personality": ["fun", "energetic", "creative", "patient"],
      "work_style": ["clinic/outdoors", "active", "social", "healing"],
      "deal_breakers": ["gloom", "paperwork_only", "isolation"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Therapeutic Recreation",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Aging population needs active therapy to maintain quality of life."
    },
    "content": {
      "short_desc": "Uses games, sports, and arts to help patients recover.",
      "long_desc": "Recreational Therapists heal through fun. You help people with disabilities or mental illness improve their skills using swimming, crafts, or games. You focus on quality of life.",
      "day_in_life": ["Plan group activities", "Lead sports sessions", "Assess patient social skills"],
      "tags": ["Healthcare", "Fun", "Active"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["therapy", "sports", "fun", "health"],
      "related_career_ids": ["health_occupational_therapist", "health_art_therapist"]
    }
  },
  {
    "id": "science_chemical_technician",
    "title": "Chemical Technician",
    "domain": "Science",
    "slug": "chemical-technician",
    "match_profile": {
      "interests": ["chemistry", "lab_equipment", "testing", "safety"],
      "personality": ["precise", "methodical", "careful", "focused"],
      "work_style": ["lab_based", "routine", "technical", "hazardous"],
      "deal_breakers": ["creativity", "spills", "customer_service"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Chemical Technology",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Robotics handle dangerous mixing, but humans manage the machines."
    },
    "content": {
      "short_desc": "Assists chemists by conducting lab tests and experiments.",
      "long_desc": "Chemical Techs make the lab run. You mix solutions, monitor chemical reactions, and clean sensitive equipment. You work in pharma, manufacturing, or oil and gas.",
      "day_in_life": ["Calibrate lab instruments", "Mix chemical solutions", "Record test data"],
      "tags": ["Science", "Lab", "Chemistry"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["chemistry", "lab", "science", "mix"],
      "related_career_ids": ["science_chemist", "science_microbiology_lab_tech"]
    }
  },
  {
    "id": "arts_composer",
    "title": "Composer / Film Scorer",
    "domain": "Arts & Design",
    "slug": "composer",
    "match_profile": {
      "interests": ["music", "emotion", "math", "storytelling"],
      "personality": ["creative", "disciplined", "emotional", "auditory"],
      "work_style": ["studio", "solitary", "creative", "deadline_driven"],
      "deal_breakers": ["noise", "interruption", "office_politics"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Music Composition",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 2500000,
      "display_range": "Variable (Royalties)",
      "pay_structure": "Project Fee / Royalties"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "High",
      "future_trend": "AI generates background tracks; humans needed for main themes."
    },
    "content": {
      "short_desc": "Writes original music for films, games, or orchestras.",
      "long_desc": "Composers write the soundtrack of life. You create melodies that make people cry in movies or feel pumped in video games. You need mastery of music theory and software like Logic Pro.",
      "day_in_life": ["Compose melodies on piano", "Orchestrate using software", "Meet with film directors"],
      "tags": ["Creative", "Music", "Cinema"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["music", "movie", "song", "piano"],
      "related_career_ids": ["creative_musician", "media_audio_producer"]
    }
  },
  {
    "id": "biz_customs_broker",
    "title": "Customs Broker",
    "domain": "Business",
    "slug": "customs-broker",
    "match_profile": {
      "interests": ["trade", "law", "shipping", "paperwork"],
      "personality": ["detail_oriented", "knowledgeable", "organized", "fast"],
      "work_style": ["office", "deadline_heavy", "regulatory", "administrative"],
      "deal_breakers": ["chaos", "vagueness", "delays"]
    },
    "requirements": {
      "education_level": "license",
      "degree_field": "Customs Exam License",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary / Fee Based"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Global trade complexity keeps this role vital despite digital filing."
    },
    "content": {
      "short_desc": "Helps companies clear goods through customs barriers.",
      "long_desc": "Customs Brokers are experts in trade law. You ensure shipments aren't stuck at the border by filing the right paperwork and paying the right taxes. You save importers huge amounts of money.",
      "day_in_life": ["Classify goods for tariff", "File customs declarations", "Advise clients on laws"],
      "tags": ["Business", "Trade", "Law"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["import", "export", "shipping", "tax"],
      "related_career_ids": ["biz_import_export", "biz_logistics_coordinator"]
    }
  },
  {
    "id": "tech_interaction_designer",
    "title": "Interaction Designer",
    "domain": "Technology",
    "slug": "interaction-designer",
    "match_profile": {
      "interests": ["behavior", "logic", "design", "coding"],
      "personality": ["empathetic", "logical", "creative", "systematic"],
      "work_style": ["computer", "collaborative", "visual", "iterative"],
      "deal_breakers": ["static_images", "ignoring_users", "bad_code"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "HCI / Design",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2200000,
      "display_range": "₹6L - ₹22L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Voice and gesture control (AR) interfaces are the new frontier."
    },
    "content": {
      "short_desc": "Designs how users interact with digital products (clicks, swipes).",
      "long_desc": "Interaction Designers define the 'feel'. You decide what happens when a user swipes left or clicks a button. You focus on the flow, feedback, and logic of an app.",
      "day_in_life": ["Prototype app transitions", "Map user flows", "Test interaction logic"],
      "tags": ["Tech", "Design", "UX"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["ux", "app", "design", "animation"],
      "related_career_ids": ["creative_ui_ux_designer", "tech_ui_developer"]
    }
  },
  {
    "id": "science_remote_sensing",
    "title": "Remote Sensing Scientist",
    "domain": "Science",
    "slug": "remote-sensing",
    "match_profile": {
      "interests": ["satellites", "data", "earth", "coding"],
      "personality": ["analytical", "tech_savvy", "visual", "patient"],
      "work_style": ["computer_heavy", "data_analysis", "visual", "scientific"],
      "deal_breakers": ["manual_measurement", "office_politics", "guessing"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Geomatics / Physics",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1800000,
      "display_range": "₹5L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Climate monitoring via satellite is a massive growth area."
    },
    "content": {
      "short_desc": "Analyzes data from satellites and drones to study the earth.",
      "long_desc": "Remote Sensing Scientists watch the earth from space. You interpret satellite images to track deforestation, melt ice caps, or find ancient ruins. It combines geography with data science.",
      "day_in_life": ["Process satellite imagery", "Write code to analyze terrain", "Map forest loss"],
      "tags": ["Science", "Space", "Data"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["satellite", "map", "data", "space"],
      "related_career_ids": ["science_gis_specialist", "science_cartographer"]
    }
  },
  {
    "id": "health_forensic_odontologist",
    "title": "Forensic Odontologist",
    "domain": "Healthcare",
    "slug": "forensic-odontologist",
    "match_profile": {
      "interests": ["teeth", "crime", "puzzles", "science"],
      "personality": ["detail_oriented", "objective", "strong_stomach", "analytical"],
      "work_style": ["morgue/lab", "intermittent", "high_stakes", "scientific"],
      "deal_breakers": ["routine_dentistry", "emotional_attachment", "errors"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "BDS/MDS + Forensic Cert",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 2000000,
      "display_range": "Variable (Consulting)",
      "pay_structure": "Case Fees"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Low",
      "future_trend": "Very niche; often a secondary role for experienced dentists."
    },
    "content": {
      "short_desc": "Identifies human remains based on dental records.",
      "long_desc": "Forensic Odontologists solve crimes with teeth. You identify victims of disasters or analyze bite marks in criminal cases. It is grim but essential work for justice and closure.",
      "day_in_life": ["Compare dental X-rays", "Analyze bite marks", "Testify in court"],
      "tags": ["Health", "Law", "Science"]
    },
    "meta": {
      "popularity_rank": 90,
      "search_keywords": ["dentist", "crime", "csi", "teeth"],
      "related_career_ids": ["health_dentist", "science_forensic_scientist"]
    }
  },
  {
    "id": "agri_hydroponic_farmer",
    "title": "Hydroponic Farmer",
    "domain": "Agriculture",
    "slug": "hydroponic-farmer",
    "match_profile": {
      "interests": ["farming", "technology", "plants", "sustainability"],
      "personality": ["innovative", "patient", "scientific", "entrepreneurial"],
      "work_style": ["greenhouse", "technical", "hands_on", "daily_routine"],
      "deal_breakers": ["dirt", "unpredictable_weather", "office"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Agriculture / Botany",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1200000,
      "display_range": "₹3L - ₹12L per year",
      "pay_structure": "Business Profit"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Urban vertical farming is the future of city food supply."
    },
    "content": {
      "short_desc": "Grows plants without soil using nutrient-rich water.",
      "long_desc": "Hydroponic Farmers are high-tech growers. You grow lettuce or strawberries in water pipes inside controlled greenhouses. You control the light, pH, and nutrients to get perfect crops year-round.",
      "day_in_life": ["Check water pH levels", "Harvest crops", "Maintain water pumps"],
      "tags": ["Farming", "Tech", "Green"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["farm", "water", "plants", "tech"],
      "related_career_ids": ["science_horticulturist", "eng_agricultural_engineer"]
    }
  },
  {
    "id": "govt_air_marshal",
    "title": "Air Marshal",
    "domain": "Government",
    "slug": "air-marshal",
    "match_profile": {
      "interests": ["security", "aviation", "combat", "observation"],
      "personality": ["vigilant", "discrete", "brave", "calm"],
      "work_style": ["travel", "undercover", "sedentary_but_alert", "high_stakes"],
      "deal_breakers": ["boredom", "attention_seeking", "family_time"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Police / Military Exp",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 2000000,
      "display_range": "₹8L - ₹20L per year",
      "pay_structure": "Govt Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Ongoing global security threats keep this role essential."
    },
    "content": {
      "short_desc": "Protects aircraft passengers from terrorist threats.",
      "long_desc": "Air Marshals are undercover guards in the sky. You fly on commercial planes dressed as a regular passenger, ready to neutralize hijackers or threats instantly. It is a job of long silence and split-second action.",
      "day_in_life": ["Board flights undercover", "Scan passengers for threats", "Maintain weapon readiness"],
      "tags": ["Security", "Govt", "Action"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["police", "plane", "security", "spy"],
      "related_career_ids": ["govt_police_officer", "govt_customs_officer"]
    }
  },
  {
    "id": "biz_shipbroker",
    "title": "Shipbroker",
    "domain": "Business",
    "slug": "shipbroker",
    "match_profile": {
      "interests": ["shipping", "negotiation", "money", "global_trade"],
      "personality": ["persuasive", "fast_paced", "social", "resilient"],
      "work_style": ["office", "phone_heavy", "high_pressure", "commission"],
      "deal_breakers": ["slow_pace", "shyness", "fixed_salary"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Maritime Studies / Business",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 3000000,
      "display_range": "₹6L - ₹30L+ (Commission)",
      "pay_structure": "Commission"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Digital platforms are competing, but high-value deals need humans."
    },
    "content": {
      "short_desc": "Acts as an intermediary between ship owners and cargo owners.",
      "long_desc": "Shipbrokers are the dealmakers of the ocean. You find a ship for a company that needs to move oil, or find cargo for a ship that is empty. It is a high-speed, high-commission sales job.",
      "day_in_life": ["Negotiate freight rates", "Track ship positions", "Close deals via phone"],
      "tags": ["Business", "Sales", "Maritime"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["ship", "trade", "sales", "broker"],
      "related_career_ids": ["biz_import_export", "sales_b2b_sales_manager"]
    }
  },
  {
    "id": "tech_robotics_software_eng",
    "title": "Robotics Software Engineer",
    "domain": "Technology",
    "slug": "robotics-software",
    "match_profile": {
      "interests": ["coding", "robots", "ai", "physics"],
      "personality": ["logical", "patient", "innovative", "complex_thinker"],
      "work_style": ["computer/lab", "coding_heavy", "technical", "R&D"],
      "deal_breakers": ["web_design", "simple_apps", "manual_labor"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Robotics / CS",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 3500000,
      "display_range": "₹10L - ₹35L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Low",
      "future_trend": "Essential for self-driving cars and warehouse automation."
    },
    "content": {
      "short_desc": "Writes the code that tells robots how to move and think.",
      "long_desc": "Robotics Software Engineers give robots a brain. You write C++ or Python code for path planning, vision, and movement. You make sure the robot arm picks up the box without crushing it.",
      "day_in_life": ["Write ROS (Robot OS) code", "Debug sensor data", "Test robot in simulator"],
      "tags": ["Tech", "Coding", "Robots"]
    },
    "meta": {
      "popularity_rank": 15,
      "search_keywords": ["robot", "coding", "ai", "ros"],
      "related_career_ids": ["eng_robotics_engineer", "tech_ai_ethicist"]
    }
  },
  {
    "id": "biz_ethical_compliance",
    "title": "Ethical Compliance Manager",
    "domain": "Business",
    "slug": "ethics-manager",
    "match_profile": {
      "interests": ["ethics", "justice", "business", "rules"],
      "personality": ["principled", "courageous", "objective", "investigative"],
      "work_style": ["office", "conflict_resolution", "auditing", "serious"],
      "deal_breakers": ["corruption", "flexibility_with_truth", "sales"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Law / Business Ethics",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 2500000,
      "display_range": "₹10L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Consumers demand ethical companies, driving role importance."
    },
    "content": {
      "short_desc": "Ensures a company operates ethically and investigates misconduct.",
      "long_desc": "Ethics Managers are the corporate conscience. You investigate harassment claims, ensure suppliers aren't using child labor, and train staff on doing the right thing.",
      "day_in_life": ["Investigate whistleblower reports", "Review supplier ethics", "Conduct ethics training"],
      "tags": ["Business", "Law", "Ethics"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["ethics", "hr", "law", "investigation"],
      "related_career_ids": ["biz_compliance_officer", "mgmt_hr_manager"]
    }
  },
  {
    "id": "eng_wind_energy_engineer",
    "title": "Wind Energy Engineer",
    "domain": "Engineering",
    "slug": "wind-energy-engineer",
    "match_profile": {
      "interests": ["wind", "energy", "mechanics", "sustainability"],
      "personality": ["innovative", "practical", "analytical", "green"],
      "work_style": ["office/field", "design_focused", "technical", "project_based"],
      "deal_breakers": ["fossil_fuels", "routine", "low_tech"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Renewable Energy / Mech Eng",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1800000,
      "display_range": "₹5L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Offshore wind farms are the next massive engineering challenge."
    },
    "content": {
      "short_desc": "Designs wind turbines and wind farm layouts.",
      "long_desc": "Wind Energy Engineers harness the air. You design more efficient turbine blades or plan where to put wind farms to get the most power. You are building the green energy grid.",
      "day_in_life": ["Analyze wind patterns", "Design turbine components", "Plan wind farm sites"],
      "tags": ["Engineering", "Green", "Energy"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["wind", "turbine", "green", "power"],
      "related_career_ids": ["trade_wind_tech", "eng_mechanical_engineer"]
    }
  },
  {
    "id": "science_gemologist",
    "title": "Gemologist",
    "domain": "Science",
    "slug": "gemologist",
    "match_profile": {
      "interests": ["gems", "microscope", "value", "beauty"],
      "personality": ["observant", "detail_oriented", "patient", "honest"],
      "work_style": ["lab/shop", "quiet", "visual", "sedentary"],
      "deal_breakers": ["poor_eyesight", "rushing", "dirt"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Gemology Certification",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Lab-grown diamond identification is a critical new skill."
    },
    "content": {
      "short_desc": "Identifies and grades precious stones like diamonds.",
      "long_desc": "Gemologists know real from fake. You use microscopes and light tools to grade the quality of diamonds and spot synthetic stones. You act as the judge of value in the jewelry world.",
      "day_in_life": ["Grade diamond clarity", "Identify gemstone origin", "Appraise jewelry value"],
      "tags": ["Science", "Luxury", "Details"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["diamond", "jewelry", "stone", "lab"],
      "related_career_ids": ["creative_jewellery_designer", "science_geologist"]
    }
  },
  {
    "id": "hospitality_coffee_roaster",
    "title": "Coffee Roaster / Head Barista",
    "domain": "Hospitality",
    "slug": "coffee-roaster",
    "match_profile": {
      "interests": ["coffee", "flavor", "science", "craft"],
      "personality": ["sensory", "meticulous", "passionate", "morning_person"],
      "work_style": ["cafe/roastery", "aromatic", "hands_on", "routine"],
      "deal_breakers": ["instant_coffee", "office_work", "night_shifts"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "Experience / Certification",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1000000,
      "display_range": "₹3L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Specialty coffee market is growing; artisanal roasting is in demand."
    },
    "content": {
      "short_desc": "Sources and roasts coffee beans to create flavor profiles.",
      "long_desc": "Coffee Roasters are flavor scientists. You source green beans, control the roast curve to bring out flavors, and taste-test (cup) daily. It is a mix of culinary art and manufacturing.",
      "day_in_life": ["Roast bean batches", "Cup (taste) coffee samples", "Maintain roasting machine"],
      "tags": ["Hospitality", "Craft", "Food"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["coffee", "cafe", "roast", "barista"],
      "related_career_ids": ["hospitality_restaurant_owner", "service_sommelier"]
    }
  },
  {
    "id": "eng_process_engineer",
    "title": "Process Engineer",
    "domain": "Engineering",
    "slug": "process-engineer",
    "match_profile": {
      "interests": ["efficiency", "chemistry", "manufacturing", "optimization"],
      "personality": ["analytical", "systematic", "logical", "practical"],
      "work_style": ["factory", "monitoring", "process_driven", "technical"],
      "deal_breakers": ["chaos", "art", "sales"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Chemical / Industrial Eng",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Focusing on reducing energy consumption in chemical plants."
    },
    "content": {
      "short_desc": "Optimizes chemical or industrial production processes.",
      "long_desc": "Process Engineers scale up science. You take a reaction that works in a beaker and figure out how to do it in a massive factory tank safely and cheaply. You turn raw materials into products.",
      "day_in_life": ["Monitor production flow", "Troubleshoot equipment leaks", "Improve yield efficiency"],
      "tags": ["Engineering", "Industrial", "Chemistry"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["factory", "chemical", "process", "engineer"],
      "related_career_ids": ["eng_chemical_engineer", "eng_industrial_engineer"]
    }
  },
  {
    "id": "science_lab_manager",
    "title": "Laboratory Manager",
    "domain": "Science",
    "slug": "lab-manager",
    "match_profile": {
      "interests": ["science", "management", "safety", "organization"],
      "personality": ["responsible", "organized", "decisive", "meticulous"],
      "work_style": ["lab_based", "administrative", "supervisory", "safety_focused"],
      "deal_breakers": ["chaos", "breaking_rules", "pure_research"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Science / Management",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1800000,
      "display_range": "₹6L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Increased safety regulations keep this role essential."
    },
    "content": {
      "short_desc": "Oversees the operations and safety of a scientific laboratory.",
      "long_desc": "Lab Managers run the show behind the science. You ensure equipment works, supplies are stocked, and safety rules are followed. You manage the budget and the team so scientists can focus on discovery.",
      "day_in_life": ["Order chemical supplies", "Calibrate lab equipment", "Train staff on safety"],
      "tags": ["Science", "Management", "Safety"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["lab", "manager", "science", "admin"],
      "related_career_ids": ["science_biochemist", "biz_compliance_officer"]
    }
  },
  {
    "id": "legal_entertainment_lawyer",
    "title": "Entertainment Lawyer",
    "domain": "Legal",
    "slug": "entertainment-lawyer",
    "match_profile": {
      "interests": ["movies", "music", "law", "negotiation"],
      "personality": ["persuasive", "confident", "social", "shrewd"],
      "work_style": ["office/studio", "high_stakes", "networking", "contract_heavy"],
      "deal_breakers": ["anonymity", "boredom", "low_pay"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Law (LLB/LLM)",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 5000000,
      "display_range": "₹10L - ₹50L+ per year",
      "pay_structure": "Salary / Hourly"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Streaming rights and AI likeness deals are complex new battlegrounds."
    },
    "content": {
      "short_desc": "Manages legal contracts for actors, musicians, and studios.",
      "long_desc": "Entertainment Lawyers protect talent. You negotiate record deals, movie contracts, and intellectual property rights. You ensure your artist clients don't get ripped off by studios.",
      "day_in_life": ["Review movie contracts", "Negotiate royalties", "Protect client image"],
      "tags": ["Law", "Entertainment", "High Pay"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["lawyer", "hollywood", "music", "contract"],
      "related_career_ids": ["legal_ip_lawyer", "law_sports_agent"]
    }
  },
  {
    "id": "trade_avionics_technician",
    "title": "Avionics Technician",
    "domain": "Skilled Trade",
    "slug": "avionics-tech",
    "match_profile": {
      "interests": ["aircraft", "electronics", "fixing_things", "systems"],
      "personality": ["precise", "technical", "patient", "focused"],
      "work_style": ["hangar", "technical", "detail_oriented", "safety_critical"],
      "deal_breakers": ["guessing", "rushing", "dirty_grease"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Avionics / Electronics",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Modern planes are flying computers; experts in their electronics are vital."
    },
    "content": {
      "short_desc": "Installs and repairs electronic systems on aircraft.",
      "long_desc": "Avionics Techs fix the brain of the plane. You repair radar, navigation, and communication systems. Unlike mechanics who fix engines, you focus on the wires and computers that keep the plane flying straight.",
      "day_in_life": ["Test navigation systems", "Repair cockpit displays", "Update flight software"],
      "tags": ["Aviation", "Tech", "Electronics"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["plane", "electronics", "repair", "aviation"],
      "related_career_ids": ["trade_mechanic", "eng_aerospace_engineer"]
    }
  },
  {
    "id": "creative_food_stylist",
    "title": "Food Stylist",
    "domain": "Arts & Design",
    "slug": "food-stylist",
    "match_profile": {
      "interests": ["food", "photography", "art", "perfection"],
      "personality": ["artistic", "patient", "detail_oriented", "resourceful"],
      "work_style": ["studio", "visual", "creative", "hands_on"],
      "deal_breakers": ["eating_the_food", "messiness", "office_work"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Culinary Arts / Photography",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1200000,
      "display_range": "₹3L - ₹12L per year",
      "pay_structure": "Project Fee"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Social media content creation keeps demand high despite AI food images."
    },
    "content": {
      "short_desc": "Makes food look delicious for photography and film.",
      "long_desc": "Food Stylists make burgers look perfect. You use tricks (like glue for milk or blowtorches for browning) to make food look mouth-watering for commercials and menus. It is art, not cooking.",
      "day_in_life": ["Prep food for photoshoot", "Use tweezers to place garnishes", "Collaborate with photographer"],
      "tags": ["Creative", "Food", "Media"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["food", "photo", "advertising", "cooking"],
      "related_career_ids": ["creative_photographer", "hospitality_head_chef"]
    }
  },
  {
    "id": "tech_developer_advocate",
    "title": "Developer Advocate (DevRel)",
    "domain": "Technology",
    "slug": "developer-advocate",
    "match_profile": {
      "interests": ["coding", "public_speaking", "community", "teaching"],
      "personality": ["charismatic", "helpful", "technical", "social"],
      "work_style": ["remote/travel", "public_facing", "social", "educational"],
      "deal_breakers": ["quiet", "coding_in_isolation", "sales_quotas"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / Engineering",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1200000,
      "max": 3500000,
      "display_range": "₹12L - ₹35L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Tech companies need human faces to build trust with developer communities."
    },
    "content": {
      "short_desc": "Connects a tech company with its community of developers.",
      "long_desc": "DevRel is where coding meets marketing. You speak at conferences, write tutorials, and help other developers use your company's software. You are the friendly face of the tech product.",
      "day_in_life": ["Speak at tech conference", "Write code tutorials", "Answer community questions"],
      "tags": ["Tech", "Social", "Marketing"]
    },
    "meta": {
      "popularity_rank": 25,
      "search_keywords": ["devrel", "community", "coding", "speaker"],
      "related_career_ids": ["tech_software_engineer", "media_public_relations_specialist"]
    }
  },
  {
    "id": "social_youth_worker",
    "title": "Youth Worker",
    "domain": "Social Service",
    "slug": "youth-worker",
    "match_profile": {
      "interests": ["teenagers", "mentoring", "social_change", "community"],
      "personality": ["patient", "energetic", "relatable", "resilient"],
      "work_style": ["community_center", "emotional", "active", "social"],
      "deal_breakers": ["judgment", "wealth_focus", "9_to_5_desk"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Social Work / Psychology",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 600000,
      "display_range": "₹2.5L - ₹6L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Mental health focus for Gen Z increases need for guidance."
    },
    "content": {
      "short_desc": "Supports and mentors young people in the community.",
      "long_desc": "Youth Workers guide the next generation. You organize activities, offer counseling, and provide a safe space for at-risk teens. You are a mentor, friend, and authority figure all in one.",
      "day_in_life": ["Organize sports/arts activities", "Counsel troubled teens", "Liaise with schools"],
      "tags": ["Social Impact", "Community", "Mentoring"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["ngo", "kids", "help", "social"],
      "related_career_ids": ["social_social_worker", "edu_school_counselor"]
    }
  },
  {
    "id": "biz_warehouse_manager",
    "title": "Warehouse Manager",
    "domain": "Business",
    "slug": "warehouse-manager",
    "match_profile": {
      "interests": ["logistics", "organization", "efficiency", "safety"],
      "personality": ["organized", "decisive", "active", "commanding"],
      "work_style": ["warehouse", "active", "supervisory", "process_driven"],
      "deal_breakers": ["sitting_all_day", "chaos", "abstract_theory"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Logistics / Business",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1200000,
      "display_range": "₹5L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Managing robots and automated pickers is the new skill set."
    },
    "content": {
      "short_desc": "Oversees the storage and shipment of goods in a warehouse.",
      "long_desc": "Warehouse Managers keep the supply chain moving. You manage inventory, supervise staff, and ensure safety regulations are met. It is a fast-paced role essential for e-commerce.",
      "day_in_life": ["Supervise loading docks", "Check inventory levels", "Plan staff shifts"],
      "tags": ["Logistics", "Management", "Operations"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["logistics", "warehouse", "shipping", "manager"],
      "related_career_ids": ["biz_logistics_coordinator", "business_operations_manager"]
    }
  },
  {
    "id": "health_medical_secretary",
    "title": "Medical Secretary",
    "domain": "Healthcare",
    "slug": "medical-secretary",
    "match_profile": {
      "interests": ["medicine", "admin", "organization", "patients"],
      "personality": ["organized", "discreet", "efficient", "friendly"],
      "work_style": ["clinic/hospital", "desk_job", "phone_heavy", "routine"],
      "deal_breakers": ["blood", "medical_procedures", "chaos"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Medical Admin",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 600000,
      "display_range": "₹2.5L - ₹6L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "AI scheduling exists, but human interaction is preferred by patients."
    },
    "content": {
      "short_desc": "Manages appointments and records for a doctor's office.",
      "long_desc": "Medical Secretaries run the front desk. You schedule appointments, handle medical records, and deal with insurance billing. You need to know medical terminology and be great with people.",
      "day_in_life": ["Schedule patient visits", "File medical records", "Answer clinic phones"],
      "tags": ["Healthcare", "Admin", "Stable"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["admin", "hospital", "receptionist", "secretary"],
      "related_career_ids": ["service_receptionist", "health_dental_hygienist"]
    }
  },
  {
    "id": "eng_materials_engineer",
    "title": "Materials Engineer",
    "domain": "Engineering",
    "slug": "materials-engineer",
    "match_profile": {
      "interests": ["chemistry", "physics", "metals", "innovation"],
      "personality": ["curious", "analytical", "innovative", "technical"],
      "work_style": ["lab/factory", "research", "microscopic", "product_focused"],
      "deal_breakers": ["routine", "sales", "social_work"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Materials Science",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1800000,
      "display_range": "₹5L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Developing lighter, stronger materials for EVs and space travel."
    },
    "content": {
      "short_desc": "Develops new materials like metals, ceramics, or plastics.",
      "long_desc": "Materials Engineers invent the stuff things are made of. You create lighter metals for airplanes, biodegradable plastics, or stronger glass for phones. It is chemistry applied to manufacturing.",
      "day_in_life": ["Test material strength", "Analyze microscopic structure", "Develop new alloys"],
      "tags": ["Engineering", "Science", "Innovation"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["science", "chemistry", "research", "materials"],
      "related_career_ids": ["eng_chemical_engineer", "science_nanotechnologist"]
    }
  },
  {
    "id": "arts_music_teacher",
    "title": "Private Music Teacher",
    "domain": "Arts & Design",
    "slug": "music-teacher",
    "match_profile": {
      "interests": ["music", "teaching", "children", "patience"],
      "personality": ["encouraging", "patient", "musical", "independent"],
      "work_style": ["home/studio", "one_on_one", "flexible", "creative"],
      "deal_breakers": ["tone_deafness", "corporate_life", "silence"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Music / Grade Exams",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 1000000,
      "display_range": "Variable (Hourly)",
      "pay_structure": "Hourly Fees"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Online lessons allow teachers to reach global students."
    },
    "content": {
      "short_desc": "Teaches instruments or singing to individuals.",
      "long_desc": "Music Teachers share the joy of music. You teach piano, guitar, or singing to students of all ages. You run your own small business and set your own hours.",
      "day_in_life": ["Teach piano lessons", "Prepare students for exams", "Organize recitals"],
      "tags": ["Creative", "Teaching", "Music"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["music", "teacher", "piano", "guitar"],
      "related_career_ids": ["creative_musician", "edu_private_tutor"]
    }
  },
  {
    "id": "health_concierge_doctor",
    "title": "Concierge Doctor",
    "domain": "Healthcare",
    "slug": "concierge-doctor",
    "match_profile": {
      "interests": ["medicine", "luxury", "personal_care", "independence"],
      "personality": ["attentive", "patient", "entrepreneurial", "available"],
      "work_style": ["visits/clinic", "low_volume", "high_service", "flexible"],
      "deal_breakers": ["insurance_paperwork", "rushing_patients", "hospital_bureaucracy"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "MBBS + MD",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 2000000,
      "max": 10000000,
      "display_range": "₹20L - ₹1Cr+ per year",
      "pay_structure": "Subscription Fees"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Wealthy clients seeking personalized, preventative care."
    },
    "content": {
      "short_desc": "Provides personalized medical care to a small group of clients.",
      "long_desc": "Concierge Doctors offer premium care. Patients pay a subscription for 24/7 access, longer appointments, and home visits. It focuses on deep doctor-patient relationships rather than high volume.",
      "day_in_life": ["Home visit for VIP client", "Telehealth consultation", "Create wellness plans"],
      "tags": ["Healthcare", "Luxury", "High Pay"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["doctor", "vip", "medical", "private"],
      "related_career_ids": ["health_physician", "health_general_surgeon"]
    }
  },
  {
    "id": "tech_bioinformatics_scientist",
    "title": "Bioinformatics Scientist",
    "domain": "Technology",
    "slug": "bioinformatics",
    "match_profile": {
      "interests": ["coding", "biology", "data", "genetics"],
      "personality": ["analytical", "intellectual", "logical", "curious"],
      "work_style": ["computer_based", "data_heavy", "research", "complex"],
      "deal_breakers": ["wet_lab_work", "simple_tasks", "public_speaking"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Bioinformatics / CS",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 2500000,
      "display_range": "₹8L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Genomic data analysis is central to modern drug discovery."
    },
    "content": {
      "short_desc": "Uses computer code to analyze biological data like DNA.",
      "long_desc": "Bioinformaticians merge biology and code. You write software to analyze massive datasets of DNA sequences to find gene mutations or design vaccines. You don't work in a lab with test tubes; you work with servers.",
      "day_in_life": ["Write Python scripts for DNA analysis", "Manage genomic databases", "Collaborate with biologists"],
      "tags": ["Tech", "Science", "Data"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["dna", "coding", "biology", "data"],
      "related_career_ids": ["tech_data_scientist", "science_geneticist"]
    }
  },
  {
    "id": "trade_ironworker",
    "title": "Ironworker",
    "domain": "Skilled Trade",
    "slug": "ironworker",
    "match_profile": {
      "interests": ["metal", "heights", "building", "strength"],
      "personality": ["fearless", "tough", "reliable", "team_player"],
      "work_style": ["construction_site", "hazardous", "physical", "outdoor"],
      "deal_breakers": ["fear_of_heights", "weakness", "office"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Apprenticeship",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Wage + Hazard Pay"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Infrastructure projects keep demand steady."
    },
    "content": {
      "short_desc": "Installs structural iron and steel for buildings and bridges.",
      "long_desc": "Ironworkers build the skeleton of the city. You climb high steel beams to bolt or weld the framework of skyscrapers. It is dangerous, physically demanding, and pays well for the risk.",
      "day_in_life": ["Read blueprints", "Hoist steel beams", "Bolt structural steel"],
      "tags": ["Trade", "Construction", "Tough"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["steel", "construction", "welding", "heights"],
      "related_career_ids": ["trade_welder", "trade_crane_operator"]
    }
  },
  {
    "id": "biz_brand_manager",
    "title": "Brand Manager",
    "domain": "Business",
    "slug": "brand-manager",
    "match_profile": {
      "interests": ["branding", "psychology", "business", "creativity"],
      "personality": ["creative", "strategic", "persuasive", "visionary"],
      "work_style": ["office", "strategic", "collaborative", "high_visibility"],
      "deal_breakers": ["boring_products", "silence", "backend_ops"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "MBA Marketing",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 3000000,
      "display_range": "₹8L - ₹30L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Building authentic brand communities is the new marketing goal."
    },
    "content": {
      "short_desc": "Manages the image and strategy of a product or company.",
      "long_desc": "Brand Managers are the guardians of the brand. You decide the look, voice, and strategy for a product (like Nike or Coke). You coordinate marketing, sales, and design to make people love the brand.",
      "day_in_life": ["Analyze market trends", "Approve ad campaigns", "Plan product launches"],
      "tags": ["Business", "Marketing", "Strategy"]
    },
    "meta": {
      "popularity_rank": 25,
      "search_keywords": ["marketing", "brand", "manager", "logo"],
      "related_career_ids": ["business_marketing_manager", "creative_creative_director"]
    }
  },
  {
    "id": "science_volcanologist",
    "title": "Volcanologist",
    "domain": "Science",
    "slug": "volcanologist",
    "match_profile": {
      "interests": ["volcanoes", "danger", "earth", "travel"],
      "personality": ["adventurous", "brave", "analytical", "patient"],
      "work_style": ["field_work", "extreme_conditions", "research", "unpredictable"],
      "deal_breakers": ["safety_first", "office_only", "boredom"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Geology / Volcanology",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Low",
      "future_trend": "Drone monitoring is making the job safer but more data-heavy."
    },
    "content": {
      "short_desc": "Studies volcanoes and predicts eruptions.",
      "long_desc": "Volcanologists have the hottest job on earth. You travel to active volcanoes to sample lava and gas. Your research helps predict eruptions to save lives. It is dangerous science.",
      "day_in_life": ["Collect lava samples", "Monitor gas emissions", "Map hazard zones"],
      "tags": ["Science", "Adventure", "Earth"]
    },
    "meta": {
      "popularity_rank": 90,
      "search_keywords": ["volcano", "science", "geology", "danger"],
      "related_career_ids": ["science_geologist", "science_seismologist"]
    }
  },
  {
    "id": "legal_court_clerk",
    "title": "Court Clerk",
    "domain": "Legal",
    "slug": "court-clerk",
    "match_profile": {
      "interests": ["law", "organization", "procedures", "records"],
      "personality": ["organized", "detail_oriented", "efficient", "neutral"],
      "work_style": ["courtroom", "administrative", "routine", "quiet"],
      "deal_breakers": ["chaos", "creativity", "disorder"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Law / Admin",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Govt Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Digital filing systems are standardizing the role."
    },
    "content": {
      "short_desc": "Maintains court records and administers oaths.",
      "long_desc": "Court Clerks keep the justice system organized. You manage case files, swear in witnesses, and record the judge's orders. You ensure the legal process follows the rules.",
      "day_in_life": ["File court documents", "Swear in witnesses", "Manage court calendar"],
      "tags": ["Legal", "Admin", "Govt"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["court", "law", "admin", "clerk"],
      "related_career_ids": ["legal_paralegal", "legal_court_reporter"]
    }
  },
  {
    "id": "edu_dean_student_affairs",
    "title": "Dean of Student Affairs",
    "domain": "Education",
    "slug": "dean-students",
    "match_profile": {
      "interests": ["students", "leadership", "campus_life", "mentoring"],
      "personality": ["empathetic", "authoritative", "social", "problem_solver"],
      "work_style": ["university", "administrative", "social", "high_responsibility"],
      "deal_breakers": ["teaching_only", "isolation", "low_impact"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "Higher Ed Admin / PhD",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1200000,
      "max": 3000000,
      "display_range": "₹12L - ₹30L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Mental health and diversity inclusion are top priorities."
    },
    "content": {
      "short_desc": "Oversees student life and services at a university.",
      "long_desc": "The Dean of Students looks after student well-being. You manage housing, clubs, conduct, and counseling services. You ensure students have a safe and enriching life outside the classroom.",
      "day_in_life": ["Meet student leaders", "Handle disciplinary cases", "Plan campus events"],
      "tags": ["Education", "Leadership", "Management"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["college", "admin", "students", "dean"],
      "related_career_ids": ["edu_school_principal", "edu_university_registrar"]
    }
  },
  {
    "id": "health_hospice_nurse",
    "title": "Hospice Nurse",
    "domain": "Healthcare",
    "slug": "hospice-nurse",
    "match_profile": {
      "interests": ["comfort", "nursing", "emotional_support", "care"],
      "personality": ["compassionate", "gentle", "resilient", "spiritual"],
      "work_style": ["home_care", "emotional", "slow_paced", "intimate"],
      "deal_breakers": ["curing_disease", "rushing", "emotional_detachment"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Nursing (B.Sc)",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Aging population increasing demand for end-of-life care."
    },
    "content": {
      "short_desc": "Provides comfort care to terminally ill patients.",
      "long_desc": "Hospice Nurses care for the dying. Unlike hospital nurses who try to cure, you focus on pain relief and dignity in a patient's final days. It is emotionally tough but deeply meaningful work.",
      "day_in_life": ["Administer pain medication", "Comfort family members", "Monitor patient comfort"],
      "tags": ["Healthcare", "Nursing", "Care"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["nurse", "care", "end_of_life", "medical"],
      "related_career_ids": ["health_registered_nurse", "social_social_worker"]
    }
  },
  {
    "id": "creative_ux_writer",
    "title": "UX Writer",
    "domain": "Media & Marketing",
    "slug": "ux-writer",
    "match_profile": {
      "interests": ["writing", "technology", "simplicity", "psychology"],
      "personality": ["concise", "empathetic", "logical", "collaborative"],
      "work_style": ["remote/office", "screen_heavy", "detail_oriented", "collaborative"],
      "deal_breakers": ["long_essays", "flowery_language", "coding"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "English / HCI / Communications",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "AI writes drafts, but humans needed for voice, tone, and context."
    },
    "content": {
      "short_desc": "Writes the text found inside apps and websites.",
      "long_desc": "UX Writers guide users with words. You write the button labels, error messages, and menus in an app. Your goal is to make the software easy to understand without reading a manual.",
      "day_in_life": ["Write app error messages", "Collaborate with designers", "Create voice guidelines"],
      "tags": ["Tech", "Writing", "Design"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["writing", "app", "tech", "content"],
      "related_career_ids": ["tech_ux_researcher", "media_content_strategist"]
    }
  },
  {
    "id": "service_mixologist",
    "title": "Mixologist / Head Bartender",
    "domain": "Service",
    "slug": "mixologist",
    "match_profile": {
      "interests": ["cocktails", "creativity", "nightlife", "flavor"],
      "personality": ["social", "creative", "energetic", "night_owl"],
      "work_style": ["bar/club", "night_shifts", "active", "social"],
      "deal_breakers": ["early_mornings", "office_work", "sobriety"]
    },
    "requirements": {
      "education_level": "certificate",
      "degree_field": "Bartending Course",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1200000,
      "display_range": "₹3L - ₹12L per year",
      "pay_structure": "Salary + Tips"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Craft cocktail culture keeps demand high in luxury venues."
    },
    "content": {
      "short_desc": "Creates and serves high-end cocktails.",
      "long_desc": "Mixologists are cocktail chefs. You invent new drinks, make your own syrups, and put on a show while serving. It requires knowledge of chemistry, flavor profiles, and hospitality.",
      "day_in_life": ["Design cocktail menu", "Prep fresh ingredients", "Serve customers at bar"],
      "tags": ["Service", "Creative", "Nightlife"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["bar", "drinks", "party", "cocktail"],
      "related_career_ids": ["service_sommelier", "hospitality_restaurant_owner"]
    }
  },
  {
    "id": "health_medical_dosimetrist",
    "title": "Medical Dosimetrist",
    "domain": "Healthcare",
    "slug": "medical-dosimetrist",
    "match_profile": {
      "interests": ["math", "physics", "cancer_treatment", "computer_modeling"],
      "personality": ["precise", "analytical", "introverted", "responsible"],
      "work_style": ["computer_based", "hospital", "technical", "quiet"],
      "deal_breakers": ["patient_interaction", "guessing", "rushing"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Medical Dosimetry",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1800000,
      "display_range": "₹6L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Highly specialized role essential for safe radiation therapy."
    },
    "content": {
      "short_desc": "Calculates the radiation dose for cancer treatments.",
      "long_desc": "Dosimetrists use math and software to kill cancer safely. You design the radiation beams to destroy tumors while sparing healthy organs. You work behind the scenes, bridging physics and medicine.",
      "day_in_life": ["Run 3D radiation simulations", "Calculate radiation dosage", "Consult with oncologists"],
      "tags": ["Healthcare", "Math", "Tech"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["radiation", "cancer", "math", "physics"],
      "related_career_ids": ["health_radiation_therapist", "science_physicist"]
    }
  },
  {
    "id": "edu_corporate_trainer",
    "title": "Corporate Trainer",
    "domain": "Education",
    "slug": "corporate-trainer",
    "match_profile": {
      "interests": ["teaching", "business", "public_speaking", "psychology"],
      "personality": ["charismatic", "engaging", "confident", "organized"],
      "work_style": ["office/travel", "public_facing", "social", "educational"],
      "deal_breakers": ["quiet_work", "teaching_kids", "routine"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "HR / Communications",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary / Day Rate"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Upskilling employees for AI usage is a massive new market."
    },
    "content": {
      "short_desc": "Teaches employees new skills and company policies.",
      "long_desc": "Corporate Trainers teach adults. You design workshops to improve leadership, sales skills, or software use within a company. You need to be entertaining to keep bored employees engaged.",
      "day_in_life": ["Design training slides", "Lead leadership workshops", "Evaluate training effectiveness"],
      "tags": ["Education", "Business", "Speaking"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["training", "teacher", "business", "hr"],
      "related_career_ids": ["mgmt_hr_manager", "edu_instructional_designer"]
    }
  },
  {
    "id": "trade_upholsterer",
    "title": "Upholsterer",
    "domain": "Skilled Trade",
    "slug": "upholsterer",
    "match_profile": {
      "interests": ["fabric", "furniture", "restoration", "sewing"],
      "personality": ["patient", "detail_oriented", "tactile", "creative"],
      "work_style": ["workshop", "hands_on", "solitary", "craft"],
      "deal_breakers": ["dust_allergy", "computers", "fast_pace"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Vocational Training",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 800000,
      "display_range": "₹2.5L - ₹8L per year",
      "pay_structure": "Wage / Project"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Antique restoration keeps this craft alive."
    },
    "content": {
      "short_desc": "Repairs and replaces fabric on furniture.",
      "long_desc": "Upholsterers give new life to old chairs. You strip worn fabric, repair springs, and fit new leather or cloth to furniture or car interiors. It is a precise craft requiring strong hands.",
      "day_in_life": ["Strip old fabric", "Cut and sew new covers", "Repair furniture springs"],
      "tags": ["Trade", "Craft", "Furniture"]
    },
    "meta": {
      "popularity_rank": 90,
      "search_keywords": ["furniture", "fabric", "repair", "craft"],
      "related_career_ids": ["trade_cabinet_maker", "arts_textile_designer"]
    }
  },
  {
    "id": "trade_watchmaker",
    "title": "Horologist / Watchmaker",
    "domain": "Skilled Trade",
    "slug": "watchmaker",
    "match_profile": {
      "interests": ["mechanics", "tiny_parts", "precision", "history"],
      "personality": ["patient", "steady_hands", "perfectionist", "quiet"],
      "work_style": ["workbench", "sedentary", "microscopic", "silent"],
      "deal_breakers": ["shaking_hands", "bad_eyesight", "rushing"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Horology Certification",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Salary / Repair Fees"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Low",
      "future_trend": "Luxury mechanical watches are growing in popularity, needing expert repair."
    },
    "content": {
      "short_desc": "Repairs and builds mechanical watches and clocks.",
      "long_desc": "Watchmakers work in a microscopic world. You clean, oil, and assemble tiny gears and springs to make luxury timepieces tick. It requires immense patience and a magnifying glass.",
      "day_in_life": ["Disassemble watch movements", "Clean tiny gears", "Calibrate timekeeping accuracy"],
      "tags": ["Trade", "Luxury", "Precision"]
    },
    "meta": {
      "popularity_rank": 95,
      "search_keywords": ["watch", "repair", "luxury", "mechanic"],
      "related_career_ids": ["science_gemologist", "trade_tool_die_maker"]
    }
  },
  {
    "id": "tech_cobol_programmer",
    "title": "Mainframe Developer (COBOL)",
    "domain": "Technology",
    "slug": "mainframe-developer",
    "match_profile": {
      "interests": ["banking", "logic", "stability", "legacy_systems"],
      "personality": ["reliable", "patient", "methodical", "detail_oriented"],
      "work_style": ["office/remote", "maintenance", "routine", "secure"],
      "deal_breakers": ["new_shiny_tech", "startups", "design"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / Training",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 2500000,
      "display_range": "₹8L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Banks run on COBOL; retirees are leaving a massive talent gap."
    },
    "content": {
      "short_desc": "Maintains legacy systems for banks and governments.",
      "long_desc": "COBOL Developers keep the global financial system running. You work on the old but critical code that powers ATMs and insurance databases. It isn't trendy, but it pays incredibly well.",
      "day_in_life": ["Debug legacy code", "Ensure bank transaction stability", "Update system patches"],
      "tags": ["Tech", "Banking", "Coding"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["banking", "coding", "legacy", "cobol"],
      "related_career_ids": ["tech_backend_engineer", "tech_sysadmin"]
    }
  },
  {
    "id": "service_estate_manager",
    "title": "Estate Manager / Butler",
    "domain": "Service",
    "slug": "estate-manager",
    "match_profile": {
      "interests": ["luxury", "management", "service", "organization"],
      "personality": ["discreet", "loyal", "resourceful", "sophisticated"],
      "work_style": ["private_estate", "live_in", "high_service", "varied"],
      "deal_breakers": ["gossip", "messiness", "9_to_5_limits"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Hospitality / Butler School",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1200000,
      "max": 5000000,
      "display_range": "₹12L - ₹50L per year",
      "pay_structure": "Salary + Housing"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Increasing number of UHNW individuals drives demand for household staff."
    },
    "content": {
      "short_desc": "Manages the staff and operations of a private mansion or estate.",
      "long_desc": "Estate Managers run the lives of the super-rich. You hire staff, manage events, and ensure the mansion runs like a 5-star hotel. You are the CEO of the household.",
      "day_in_life": ["Manage household staff", "Plan dinner parties", "Oversee property maintenance"],
      "tags": ["Service", "Luxury", "Management"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["butler", "luxury", "manager", "vip"],
      "related_career_ids": ["hospitality_gm", "service_personal_shopper"]
    }
  },
  {
    "id": "service_personal_chef",
    "title": "Personal Chef",
    "domain": "Service",
    "slug": "personal-chef",
    "match_profile": {
      "interests": ["cooking", "nutrition", "service", "creativity"],
      "personality": ["adaptable", "clean", "creative", "friendly"],
      "work_style": ["private_home", "kitchen", "independent", "client_focused"],
      "deal_breakers": ["restaurant_rush", "low_budget", "bad_kitchens"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Culinary Arts",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 2000000,
      "display_range": "₹5L - ₹20L per year",
      "pay_structure": "Salary / Day Rate"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Health-conscious families hiring chefs for meal prep is growing."
    },
    "content": {
      "short_desc": "Prepares meals for private clients in their homes.",
      "long_desc": "Personal Chefs cook for families. Unlike restaurant chefs, you customize every meal to the client's diet (Keto, Vegan, etc.). You shop, cook, and clean up, often earning more than line cooks.",
      "day_in_life": ["Shop for fresh ingredients", "Cook weekly meal prep", "Serve dinner parties"],
      "tags": ["Food", "Service", "Creative"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["chef", "cooking", "food", "private"],
      "related_career_ids": ["hospitality_head_chef", "health_nutritionist"]
    }
  },
  {
    "id": "health_doula",
    "title": "Doula / Birth Coach",
    "domain": "Healthcare",
    "slug": "doula",
    "match_profile": {
      "interests": ["birth", "emotional_support", "women_health", "advocacy"],
      "personality": ["nurturing", "calm", "supportive", "patient"],
      "work_style": ["on_call", "emotional", "home/hospital", "intimate"],
      "deal_breakers": ["medical_procedures", "squeamishness", "predictability"]
    },
    "requirements": {
      "education_level": "certification",
      "degree_field": "Doula Training",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 800000,
      "display_range": "₹2L - ₹8L per year",
      "pay_structure": "Per Birth Fee"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Parents seeking non-medical support for natural birth experiences."
    },
    "content": {
      "short_desc": "Provides emotional and physical support during childbirth.",
      "long_desc": "Doulas are birth coaches. You don't deliver the baby (that's a midwife/doctor), but you support the mother. You offer breathing techniques, massage, and advocacy in the delivery room.",
      "day_in_life": ["Prenatal coaching visits", "Support during labor", "Postpartum lactation help"],
      "tags": ["Healthcare", "Support", "Women"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["birth", "baby", "support", "coach"],
      "related_career_ids": ["health_registered_nurse", "social_social_worker"]
    }
  },
  {
    "id": "trade_water_treatment",
    "title": "Water Treatment Plant Operator",
    "domain": "Skilled Trade",
    "slug": "water-treatment",
    "match_profile": {
      "interests": ["chemistry", "machines", "public_health", "environment"],
      "personality": ["responsible", "observant", "technical", "routine_oriented"],
      "work_style": ["plant/factory", "monitoring", "essential", "shift_work"],
      "deal_breakers": ["creativity", "office_politics", "errors"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Environmental Tech / Chemistry",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Water recycling technology upgrades require skilled operators."
    },
    "content": {
      "short_desc": "Operates machines that clean water for drinking or disposal.",
      "long_desc": "Water Operators keep the tap running. You monitor pumps, filters, and chemical levels to ensure water is safe to drink. It is a stable, essential government job.",
      "day_in_life": ["Test water chemical levels", "Monitor pump gauges", "Add purification chemicals"],
      "tags": ["Trade", "Essential", "Science"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["water", "environment", "factory", "health"],
      "related_career_ids": ["science_hydrologist", "eng_environmental_engineer"]
    }
  },
  {
    "id": "transport_hazmat_driver",
    "title": "Hazmat Truck Driver",
    "domain": "Transportation",
    "slug": "hazmat-driver",
    "match_profile": {
      "interests": ["driving", "safety", "chemistry", "money"],
      "personality": ["cautious", "responsible", "focused", "calm"],
      "work_style": ["truck", "high_risk", "solitary", "regulated"],
      "deal_breakers": ["recklessness", "traffic_stress", "family_time"]
    },
    "requirements": {
      "education_level": "license",
      "degree_field": "CDL + Hazmat Endorsement",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1200000,
      "display_range": "₹5L - ₹12L per year",
      "pay_structure": "Wage + Hazard Pay"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Autonomous trucks will avoid hazardous cargo for a long time."
    },
    "content": {
      "short_desc": "Transports dangerous materials like fuel, acid, or nuclear waste.",
      "long_desc": "Hazmat Drivers move the dangerous stuff. You drive tankers full of gas or chemicals. Because a crash could be a disaster, you need extra training and get paid much more than regular truckers.",
      "day_in_life": ["Inspect tanker safety valves", "Drive planned routes", "Follow strict safety protocols"],
      "tags": ["Transport", "High Pay", "Safety"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["driver", "truck", "danger", "chemical"],
      "related_career_ids": ["transport_truck_driver", "trade_heavy_equipment_operator"]
    }
  },
  {
    "id": "media_ghostwriter",
    "title": "Ghostwriter",
    "domain": "Media & Marketing",
    "slug": "ghostwriter",
    "match_profile": {
      "interests": ["writing", "listening", "books", "research"],
      "personality": ["empathetic", "versatile", "discrete", "ego_free"],
      "work_style": ["remote", "collaborative", "writing_heavy", "invisible"],
      "deal_breakers": ["needing_credit", "public_attention", "noise"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "English / Journalism",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 2500000,
      "display_range": "₹5L - ₹25L per year",
      "pay_structure": "Project Fee"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "CEOs need human writers to sound authentic on LinkedIn/Books."
    },
    "content": {
      "short_desc": "Writes books or articles for other people who take the credit.",
      "long_desc": "Ghostwriters are the invisible voice. You write autobiographies for celebrities or articles for CEOs. You get paid well to leave your name off the cover and capture someone else's voice.",
      "day_in_life": ["Interview client", "Draft book chapters", "Revise based on feedback"],
      "tags": ["Writing", "Creative", "Media"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["writer", "book", "author", "freelance"],
      "related_career_ids": ["media_content_writer", "media_book_editor"]
    }
  },
  {
    "id": "govt_intelligence_analyst",
    "title": "Intelligence Analyst",
    "domain": "Government",
    "slug": "intelligence-analyst",
    "match_profile": {
      "interests": ["puzzles", "security", "politics", "data"],
      "personality": ["suspicious", "analytical", "discreet", "intellectual"],
      "work_style": ["secure_office", "classified", "high_stakes", "data_driven"],
      "deal_breakers": ["gossip", "fame", "social_media_addiction"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Intl Relations / CS",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1500000,
      "display_range": "₹6L - ₹15L per year",
      "pay_structure": "Govt Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Cyber warfare focus is increasing demand for tech-savvy analysts."
    },
    "content": {
      "short_desc": "Analyzes data to prevent threats to national security.",
      "long_desc": "Intelligence Analysts are the brain of the spy agency. You don't chase bad guys; you read intercepted emails and satellite photos to predict terrorist attacks or political shifts. You write reports for the government.",
      "day_in_life": ["Review intercepted communications", "Connect data points", "Write threat assessments"],
      "tags": ["Government", "Security", "Data"]
    },
    "meta": {
      "popularity_rank": 25,
      "search_keywords": ["spy", "raw", "ib", "security"],
      "related_career_ids": ["tech_cybersecurity_analyst", "govt_police_officer"]
    }
  },
  {
    "id": "govt_postal_worker",
    "title": "Postal Service Worker",
    "domain": "Government",
    "slug": "postal-worker",
    "match_profile": {
      "interests": ["organization", "walking", "community", "routine"],
      "personality": ["reliable", "punctual", "friendly", "independent"],
      "work_style": ["field/office", "routine", "active", "stable"],
      "deal_breakers": ["ambiguity", "high_pressure", "tech_overload"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "High School / Exam",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 600000,
      "display_range": "₹2.5L - ₹6L per year",
      "pay_structure": "Govt Salary"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Medium",
      "future_trend": "Parcel delivery is booming (Amazon), but letter mail is dying."
    },
    "content": {
      "short_desc": "Sorts and delivers mail and packages.",
      "long_desc": "Postal Workers connect the country. You sort mail in the center or walk routes to deliver letters. It is a stable government job with a pension, though physically tiring.",
      "day_in_life": ["Sort mail by route", "Deliver letters on foot/bike", "Process registered posts"],
      "tags": ["Government", "Stable", "Logistics"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["post", "mail", "delivery", "government"],
      "related_career_ids": ["transport_courier", "biz_logistics_coordinator"]
    }
  },
  {
    "id": "science_neuroscientist",
    "title": "Neuroscientist (Researcher)",
    "domain": "Science",
    "slug": "neuroscientist",
    "match_profile": {
      "interests": ["brain", "research", "biology", "psychology"],
      "personality": ["intellectual", "patient", "curious", "analytical"],
      "work_style": ["lab/academic", "complex", "research_focused", "quiet"],
      "deal_breakers": ["clinical_work", "rushing", "business"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "PhD Neuroscience",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary + Grants"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Brain-Computer Interfaces (Neuralink) are the next big frontier."
    },
    "content": {
      "short_desc": "Researches the structure and function of the brain.",
      "long_desc": "Neuroscientists study how we think. You don't treat patients; you do experiments to understand memory, sleep, or addiction. You map neurons and publish discoveries.",
      "day_in_life": ["Conduct brain mapping experiments", "Analyze neural data", "Write grant proposals"],
      "tags": ["Science", "Brain", "Research"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["brain", "research", "science", "psychology"],
      "related_career_ids": ["health_neurologist", "health_clinical_psychologist"]
    }
  },
  {
    "id": "arts_glassblower",
    "title": "Glassblower",
    "domain": "Arts & Design",
    "slug": "glassblower",
    "match_profile": {
      "interests": ["fire", "art", "craft", "sculpture"],
      "personality": ["brave", "artistic", "focused", "physical"],
      "work_style": ["studio/factory", "hot", "dangerous", "creative"],
      "deal_breakers": ["heat_intolerance", "computers", "cleanliness"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "Apprenticeship",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 800000,
      "display_range": "₹2L - ₹8L per year",
      "pay_structure": "Sales / Wage"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Low",
      "future_trend": "Niche artistic market remains steady for high-end decor."
    },
    "content": {
      "short_desc": "Shapes molten glass into artistic or functional objects.",
      "long_desc": "Glassblowers work with fire. You gather molten glass on a pipe and blow/shape it into vases or sculptures. It is physically intense, hot, and requires incredible timing.",
      "day_in_life": ["Gather molten glass from furnace", "Blow and shape glass", "Anneal (cool) finished pieces"],
      "tags": ["Art", "Craft", "Physical"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["glass", "art", "fire", "craft"],
      "related_career_ids": ["arts_ceramist", "creative_sculptor"]
    }
  },
  {
    "id": "biz_compensation_analyst",
    "title": "Compensation & Benefits Analyst",
    "domain": "Business",
    "slug": "compensation-analyst",
    "match_profile": {
      "interests": ["data", "hr", "money", "fairness"],
      "personality": ["analytical", "fair", "organized", "objective"],
      "work_style": ["office", "spreadsheet_heavy", "strategic", "quiet"],
      "deal_breakers": ["emotional_decisions", "sales", "creativity"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "HR / Finance",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Remote work pay scales are complicating this field, increasing demand."
    },
    "content": {
      "short_desc": "Determines fair salary and benefit packages for employees.",
      "long_desc": "Comp Analysts decide what you get paid. You study market data to ensure a company pays enough to keep talent but not too much to lose profit. You design bonus schemes and health plans.",
      "day_in_life": ["Analyze market salary surveys", "Design bonus structures", "Audit payroll data"],
      "tags": ["HR", "Finance", "Data"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["salary", "hr", "finance", "jobs"],
      "related_career_ids": ["mgmt_hr_manager", "finance_payroll_specialist"]
    }
  },
  {
    "id": "tech_firmware_engineer",
    "title": "Firmware Engineer",
    "domain": "Technology",
    "slug": "firmware-engineer",
    "match_profile": {
      "interests": ["hardware", "coding", "iot", "electronics"],
      "personality": ["technical", "patient", "precise", "logical"],
      "work_style": ["lab/computer", "low_level_code", "technical", "focused"],
      "deal_breakers": ["web_design", "users", "vagueness"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Electronics / CS",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2500000,
      "display_range": "₹6L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "IoT (Internet of Things) means every toaster needs firmware now."
    },
    "content": {
      "short_desc": "Writes low-level code that controls hardware devices.",
      "long_desc": "Firmware Engineers make hardware come alive. You write the code that lives inside your microwave, car engine, or Fitbit. It is the bridge between a circuit board and software.",
      "day_in_life": ["Write C/C++ code", "Test code on circuit boards", "Debug hardware crashes"],
      "tags": ["Tech", "Coding", "Hardware"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["embedded", "coding", "hardware", "c++"],
      "related_career_ids": ["tech_hardware_engineer", "eng_robotics_engineer"]
    }
  },
  {
    "id": "eng_naval_architect",
    "title": "Naval Architect",
    "domain": "Engineering",
    "slug": "naval-architect",
    "match_profile": {
      "interests": ["ships", "design", "ocean", "physics"],
      "personality": ["innovative", "technical", "detail_oriented", "practical"],
      "work_style": ["office/shipyard", "design_heavy", "project_based", "technical"],
      "deal_breakers": ["land_only", "routine_maintenance", "sales"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Naval Architecture",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Designing green, hydrogen-powered ships is the future."
    },
    "content": {
      "short_desc": "Designs ships, boats, and offshore structures.",
      "long_desc": "Naval Architects design floating cities. You draw the plans for cruise ships, submarines, or racing yachts. You ensure they float, move fast, and withstand storms.",
      "day_in_life": ["Design hull shapes in CAD", "Calculate buoyancy stability", "Inspect shipyard construction"],
      "tags": ["Engineering", "Marine", "Design"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["ship", "design", "marine", "boat"],
      "related_career_ids": ["eng_marine_engineer", "trade_boat_builder"]
    }
  },
  {
    "id": "agri_soil_scientist",
    "title": "Soil Scientist",
    "domain": "Science",
    "slug": "soil-scientist",
    "match_profile": {
      "interests": ["earth", "farming", "chemistry", "environment"],
      "personality": ["observant", "analytical", "nature_lover", "patient"],
      "work_style": ["field/lab", "dirty", "scientific", "agricultural"],
      "deal_breakers": ["clean_shoes", "city_only", "rushing"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Soil Science / Agronomy",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Regenerative agriculture focus keeps this role in demand."
    },
    "content": {
      "short_desc": "Analyzes soil health to improve farming and conservation.",
      "long_desc": "Soil Scientists are experts in dirt. You analyze soil chemistry to help farmers grow better crops or help builders ensure the ground is safe. You work to prevent erosion and pollution.",
      "day_in_life": ["Collect soil samples", "Analyze nutrient levels", "Map soil types"],
      "tags": ["Agriculture", "Science", "Nature"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["soil", "farm", "earth", "science"],
      "related_career_ids": ["science_agricultural_scientist", "science_geologist"]
    }
  },
  {
    "id": "law_legal_secretary",
    "title": "Legal Secretary",
    "domain": "Legal",
    "slug": "legal-secretary",
    "match_profile": {
      "interests": ["law", "typing", "organization", "helping_lawyers"],
      "personality": ["efficient", "discreet", "fast", "organized"],
      "work_style": ["office", "administrative", "deadline_driven", "support"],
      "deal_breakers": ["legal_liability", "chaos", "slow_typing"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Legal Admin",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 600000,
      "display_range": "₹2.5L - ₹6L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "High",
      "future_trend": "AI scheduling and drafting is reducing headcount needed."
    },
    "content": {
      "short_desc": "Provides administrative support to lawyers and legal firms.",
      "long_desc": "Legal Secretaries keep the law firm running. You type contracts, schedule court dates, and file legal documents. You need to know legal terminology and manage the busy schedules of attorneys.",
      "day_in_life": ["Type legal briefs", "Schedule client meetings", "File court documents"],
      "tags": ["Legal", "Admin", "Support"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["law", "admin", "office", "secretary"],
      "related_career_ids": ["legal_paralegal", "legal_court_clerk"]
    }
  },
  {
    "id": "health_orthotist",
    "title": "Orthotist",
    "domain": "Healthcare",
    "slug": "orthotist",
    "match_profile": {
      "interests": ["mechanics", "anatomy", "helping_people", "design"],
      "personality": ["innovative", "patient", "technical", "empathetic"],
      "work_style": ["clinic/workshop", "hands_on", "custom_work", "medical"],
      "deal_breakers": ["rushing", "mass_production", "desk_job"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Orthotics & Prosthetics",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "3D scanning and printing are modernizing custom brace creation."
    },
    "content": {
      "short_desc": "Designs and fits braces and splints for patients.",
      "long_desc": "Orthotists help people walk. Unlike prosthetists (who replace limbs), you support existing limbs with custom braces. You treat children with cerebral palsy or athletes with injuries. It is engineering for the body.",
      "day_in_life": ["Cast patient limbs", "Design custom braces", "Fit and adjust orthotics"],
      "tags": ["Healthcare", "Engineering", "Helping People"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["brace", "medical", "rehab", "design"],
      "related_career_ids": ["health_prosthetist", "health_physiotherapist"]
    }
  },
  {
    "id": "legal_arbitrator",
    "title": "Arbitrator",
    "domain": "Legal",
    "slug": "arbitrator",
    "match_profile": {
      "interests": ["law", "judgment", "business", "conflict"],
      "personality": ["impartial", "decisive", "fair", "analytical"],
      "work_style": ["office/conference", "high_stakes", "neutral", "authoritative"],
      "deal_breakers": ["bias", "indecision", "emotional_involvement"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Law / Arbitration",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 4000000,
      "display_range": "₹10L - ₹40L per year",
      "pay_structure": "Case Fees"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "International trade disputes are increasingly settled by arbitration."
    },
    "content": {
      "short_desc": "Acts as a private judge to settle disputes outside of court.",
      "long_desc": "Arbitrators are private judges. Companies hire you to settle disputes quickly and privately, avoiding public court battles. Your decision is legally binding. It requires deep legal knowledge and a reputation for fairness.",
      "day_in_life": ["Review legal evidence", "Conduct arbitration hearings", "Write binding awards"],
      "tags": ["Law", "Business", "Judge"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["judge", "law", "dispute", "business"],
      "related_career_ids": ["legal_judge", "legal_mediator"]
    }
  },
  {
    "id": "arts_choreographer",
    "title": "Choreographer",
    "domain": "Arts & Design",
    "slug": "choreographer",
    "match_profile": {
      "interests": ["dance", "music", "teaching", "movement"],
      "personality": ["creative", "expressive", "physical", "leader"],
      "work_style": ["studio", "active", "creative", "collaborative"],
      "deal_breakers": ["sitting_still", "office_work", "rigidity"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Dance / Performing Arts",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1500000,
      "display_range": "₹3L - ₹15L per year",
      "pay_structure": "Project Fee"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Music videos and TikTok trends drive demand for short-form dance."
    },
    "content": {
      "short_desc": "Creates dance routines for performances and videos.",
      "long_desc": "Choreographers write with movement. You design dance steps for movies, concerts, or weddings. You teach dancers the routine and ensure it matches the music perfectly.",
      "day_in_life": ["Design dance steps", "Teach dancers in studio", "Rehearse for performance"],
      "tags": ["Creative", "Dance", "Art"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["dance", "music", "art", "teacher"],
      "related_career_ids": ["arts_music_teacher", "creative_film_director"]
    }
  },
  {
    "id": "eng_pipeline_engineer",
    "title": "Pipeline Engineer",
    "domain": "Engineering",
    "slug": "pipeline-engineer",
    "match_profile": {
      "interests": ["energy", "fluid_dynamics", "construction", "maps"],
      "personality": ["practical", "safety_conscious", "analytical", "technical"],
      "work_style": ["field/office", "project_based", "technical", "large_scale"],
      "deal_breakers": ["leaks", "environmental_damage", "city_only"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Mechanical / Civil Eng",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Hydrogen pipelines are the new frontier for green energy transport."
    },
    "content": {
      "short_desc": "Designs and maintains pipelines for oil, gas, and water.",
      "long_desc": "Pipeline Engineers move fluids across continents. You design the pumps, valves, and pipes that transport oil or water over thousands of miles. You ensure they don't leak or explode.",
      "day_in_life": ["Design pipeline routes", "Calculate flow rates", "Inspect pipeline integrity"],
      "tags": ["Engineering", "Energy", "Infrastructure"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["oil", "gas", "civil", "engineer"],
      "related_career_ids": ["eng_petroleum_engineer", "eng_civil_engineer"]
    }
  },
  {
    "id": "science_immunologist",
    "title": "Immunologist",
    "domain": "Science",
    "slug": "immunologist",
    "match_profile": {
      "interests": ["disease", "biology", "research", "health"],
      "personality": ["intellectual", "curious", "patient", "detail_oriented"],
      "work_style": ["lab/hospital", "research_heavy", "complex", "scientific"],
      "deal_breakers": ["simple_cases", "rushing", "sales"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "PhD Immunology / MD",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 3000000,
      "display_range": "₹10L - ₹30L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "mRNA vaccine technology has sparked a revolution in this field."
    },
    "content": {
      "short_desc": "Studies the immune system to treat allergies and diseases.",
      "long_desc": "Immunologists fight invisible wars. You study how the body fights infection. You might treat patients with severe allergies or work in a lab developing vaccines for new viruses.",
      "day_in_life": ["Analyze blood samples", "Research immune responses", "Treat autoimmune patients"],
      "tags": ["Science", "Health", "Research"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["virus", "vaccine", "doctor", "research"],
      "related_career_ids": ["science_biomedical_researcher", "health_allergist"]
    }
  },
  {
    "id": "tech_data_architect",
    "title": "Data Architect",
    "domain": "Technology",
    "slug": "data-architect",
    "match_profile": {
      "interests": ["data", "structure", "logic", "planning"],
      "personality": ["organized", "visionary", "logical", "systematic"],
      "work_style": ["office/remote", "high_level", "design_focused", "backend"],
      "deal_breakers": ["messy_data", "manual_entry", "short_term_thinking"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / Data Science",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1500000,
      "max": 4000000,
      "display_range": "₹15L - ₹40L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "AI models need clean, structured data, making architects essential."
    },
    "content": {
      "short_desc": "Designs how an organization stores and manages data.",
      "long_desc": "Data Architects build the blueprints for information. You decide how a company's data flows, where it is stored, and how it is secured. You ensure data is usable for analysts and AI.",
      "day_in_life": ["Design database schemas", "Define data governance rules", "Optimize data flow"],
      "tags": ["Tech", "Data", "Design"]
    },
    "meta": {
      "popularity_rank": 25,
      "search_keywords": ["data", "sql", "architect", "database"],
      "related_career_ids": ["tech_database_administrator", "tech_data_engineer"]
    }
  },
  {
    "id": "service_sommelier_tea",
    "title": "Tea Sommelier",
    "domain": "Service",
    "slug": "tea-sommelier",
    "match_profile": {
      "interests": ["tea", "flavor", "history", "culture"],
      "personality": ["calm", "sensory", "knowledgeable", "patient"],
      "work_style": ["tea_house", "quiet", "service_oriented", "ritualistic"],
      "deal_breakers": ["coffee", "rushing", "noise"]
    },
    "requirements": {
      "education_level": "certification",
      "degree_field": "Tea Certification",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1000000,
      "display_range": "₹3L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "High-end tea lounges are growing as alcohol-free social spaces."
    },
    "content": {
      "short_desc": "Expert in tea sourcing, brewing, and tasting.",
      "long_desc": "Tea Sommeliers master the leaf. You know the difference between Darjeeling and Assam, first flush and second flush. You curate tea menus for luxury hotels and advise customers on pairings.",
      "day_in_life": ["Source premium teas", "Conduct tea tasting sessions", "Train staff on brewing"],
      "tags": ["Service", "Culture", "Luxury"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["tea", "food", "luxury", "tasting"],
      "related_career_ids": ["service_sommelier", "hospitality_coffee_roaster"]
    }
  },
  {
    "id": "trade_locksmith_auto",
    "title": "Automotive Locksmith",
    "domain": "Skilled Trade",
    "slug": "auto-locksmith",
    "match_profile": {
      "interests": ["cars", "security", "electronics", "puzzles"],
      "personality": ["patient", "technical", "available", "problem_solver"],
      "work_style": ["mobile_van", "on_call", "technical", "roadside"],
      "deal_breakers": ["office", "regular_hours", "clean_hands"]
    },
    "requirements": {
      "education_level": "certificate",
      "degree_field": "Locksmith Training",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Service Fees"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "As car keys become computers, this role is becoming tech-heavy."
    },
    "content": {
      "short_desc": "Specializes in unlocking cars and programming key fobs.",
      "long_desc": "Auto Locksmiths save drivers. You unlock cars when keys are lost inside and program complex electronic key fobs for modern vehicles. It requires both mechanical skill and computer coding knowledge.",
      "day_in_life": ["Respond to lockout calls", "Cut car keys", "Program transponder chips"],
      "tags": ["Trade", "Cars", "Tech"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["keys", "car", "repair", "lock"],
      "related_career_ids": ["trade_locksmith", "trade_mechanic"]
    }
  },
  {
    "id": "arts_calligrapher",
    "title": "Calligrapher",
    "domain": "Arts & Design",
    "slug": "calligrapher",
    "match_profile": {
      "interests": ["writing", "art", "paper", "patience"],
      "personality": ["steady", "artistic", "perfectionist", "quiet"],
      "work_style": ["studio", "solitary", "precise", "slow"],
      "deal_breakers": ["shaky_hands", "computers", "rushing"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "Portfolio",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 800000,
      "display_range": "₹2L - ₹8L per year",
      "pay_structure": "Freelance"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Medium",
      "future_trend": "Luxury weddings and branding keep this niche art alive."
    },
    "content": {
      "short_desc": "Creates artistic lettering for invitations and art.",
      "long_desc": "Calligraphers make writing beautiful. You use ink and specialized pens to hand-letter wedding invitations, certificates, or logos. It is a slow, meditative art form.",
      "day_in_life": ["Design lettering styles", "Write wedding envelopes", "Digitize hand-lettering"],
      "tags": ["Art", "Creative", "Craft"]
    },
    "meta": {
      "popularity_rank": 90,
      "search_keywords": ["writing", "art", "wedding", "design"],
      "related_career_ids": ["creative_illustrator", "arts_graphic_designer"]
    }
  },
  {
    "id": "health_pharma_researcher",
    "title": "Pharmaceutical Researcher",
    "domain": "Healthcare",
    "slug": "pharma-researcher",
    "match_profile": {
      "interests": ["drugs", "chemistry", "cures", "lab"],
      "personality": ["intellectual", "patient", "precise", "innovative"],
      "work_style": ["lab_based", "corporate", "research", "high_stakes"],
      "deal_breakers": ["quick_results", "public_facing", "low_budget"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "PhD Pharmacology",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 2500000,
      "display_range": "₹8L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "AI accelerates discovery, but humans must validate safety."
    },
    "content": {
      "short_desc": "Develops and tests new medications.",
      "long_desc": "Pharma Researchers invent medicines. You work in high-tech labs to discover molecules that can cure diseases. It takes years to find one successful drug, but the impact is global.",
      "day_in_life": ["Screen chemical compounds", "Analyze drug trial data", "Publish research findings"],
      "tags": ["Science", "Health", "Research"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["drug", "lab", "medicine", "science"],
      "related_career_ids": ["science_biochemist", "health_pharmacist"]
    }
  },
  {
    "id": "biz_event_coordinator",
    "title": "Corporate Event Coordinator",
    "domain": "Business",
    "slug": "event-coordinator",
    "match_profile": {
      "interests": ["planning", "logistics", "networking", "business"],
      "personality": ["organized", "energetic", "social", "detail_oriented"],
      "work_style": ["office/venue", "deadline_driven", "social", "dynamic"],
      "deal_breakers": ["introversion", "messiness", "routine"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Event Mgmt / Business",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Hybrid events (virtual + in-person) require new tech skills."
    },
    "content": {
      "short_desc": "Plans conferences and meetings for businesses.",
      "long_desc": "Event Coordinators make business happen. You book venues, arrange catering, and manage schedules for large corporate conferences. You ensure the event runs smoothly so deals can be made.",
      "day_in_life": ["Book hotel venues", "Manage event registration", "Coordinate AV setup"],
      "tags": ["Business", "Events", "Management"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["event", "conference", "planning", "business"],
      "related_career_ids": ["business_event_planner", "media_public_relations_specialist"]
    }
  },
  {
    "id": "tech_network_admin",
    "title": "Network Administrator",
    "domain": "Technology",
    "slug": "network-admin",
    "match_profile": {
      "interests": ["connectivity", "security", "hardware", "maintenance"],
      "personality": ["reliable", "vigilant", "technical", "patient"],
      "work_style": ["office", "monitoring", "routine", "essential"],
      "deal_breakers": ["coding", "creative_design", "sales"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Network Admin / CCNA",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 350000,
      "max": 1000000,
      "display_range": "₹3.5L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Cloud networking is replacing on-premise hardware tasks."
    },
    "content": {
      "short_desc": "Manages day-to-day operation of computer networks.",
      "long_desc": "Network Admins keep the Wi-Fi on. You manage user accounts, update security firewalls, and ensure the company network is fast and safe. You are the guardian of connectivity.",
      "day_in_life": ["Monitor network uptime", "Create user accounts", "Update router firmware"],
      "tags": ["Tech", "IT", "Admin"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["network", "wifi", "it", "admin"],
      "related_career_ids": ["tech_network_engineer", "tech_sysadmin"]
    }
  },
  {
    "id": "science_marine_technician",
    "title": "Marine Technician",
    "domain": "Science",
    "slug": "marine-tech",
    "match_profile": {
      "interests": ["boats", "ocean", "repair", "machines"],
      "personality": ["practical", "resourceful", "rugged", "technical"],
      "work_style": ["boat/dock", "physical", "wet", "hands_on"],
      "deal_breakers": ["seasickness", "office", "clean_clothes"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Marine Mechanics",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 900000,
      "display_range": "₹3L - ₹9L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Maintaining ocean research drones is a growing niche."
    },
    "content": {
      "short_desc": "Repairs equipment on boats and research vessels.",
      "long_desc": "Marine Techs fix things on the water. You repair boat engines, winches, and navigation gear. You might work on a fishing trawler, a luxury yacht, or a scientific research ship.",
      "day_in_life": ["Service boat engines", "Repair hydraulic lifts", "Test navigation electronics"],
      "tags": ["Trade", "Marine", "Tech"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["boat", "repair", "sea", "mechanic"],
      "related_career_ids": ["trade_boat_builder", "eng_marine_engineer"]
    }
  },
  {
    "id": "arts_special_effects",
    "title": "Special Effects Artist (SFX)",
    "domain": "Arts & Design",
    "slug": "sfx-artist",
    "match_profile": {
      "interests": ["movies", "makeup", "explosions", "sculpting"],
      "personality": ["creative", "patient", "messy", "innovative"],
      "work_style": ["workshop/set", "physical", "visual", "project_based"],
      "deal_breakers": ["clean_hands", "CGI_only", "routine"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "SFX / Makeup School",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Project Fee"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Practical effects are returning as audiences tire of bad CGI."
    },
    "content": {
      "short_desc": "Creates physical effects like prosthetics, rain, or explosions.",
      "long_desc": "SFX Artists build magic. You sculpt monster masks, rig fake blood squibs, or create safe explosions for movies. Unlike VFX (computer), SFX is real, messy, and tangible.",
      "day_in_life": ["Mold prosthetic wounds", "Test pyrotechnics", "Apply creature makeup"],
      "tags": ["Creative", "Cinema", "Art"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["movie", "makeup", "sfx", "art"],
      "related_career_ids": ["creative_makeup_artist", "arts_animator_3d"]
    }
  },
  {
    "id": "tech_crm_developer",
    "title": "CRM Developer (Salesforce)",
    "domain": "Technology",
    "slug": "crm-developer",
    "match_profile": {
      "interests": ["business", "coding", "sales_process", "automation"],
      "personality": ["practical", "certified", "helpful", "logical"],
      "work_style": ["office/remote", "configuration", "business_focused", "lucrative"],
      "deal_breakers": ["creative_design", "hardware", "gaming"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / Salesforce Cert",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Every major company uses Salesforce; certified devs are in shortage."
    },
    "content": {
      "short_desc": "Customizes Customer Relationship Management software like Salesforce.",
      "long_desc": "CRM Developers build the sales engine. You write code to customize Salesforce so sales teams can track customers efficiently. It is a specific, high-demand niche in tech.",
      "day_in_life": ["Write Apex code for Salesforce", "Automate sales workflows", "Fix data sync errors"],
      "tags": ["Tech", "Business", "Coding"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["salesforce", "crm", "developer", "business"],
      "related_career_ids": ["tech_erp_consultant", "tech_database_developer"]
    }
  },
  {
    "id": "legal_legal_consultant",
    "title": "Legal Consultant",
    "domain": "Legal",
    "slug": "legal-consultant",
    "match_profile": {
      "interests": ["law", "business", "advice", "strategy"],
      "personality": ["knowledgeable", "flexible", "strategic", "independent"],
      "work_style": ["remote/client", "advisory", "project_based", "lucrative"],
      "deal_breakers": ["courtroom", "full_time_employee", "office_politics"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Law (LLB)",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 3000000,
      "display_range": "₹10L - ₹30L per year",
      "pay_structure": "Hourly / Retainer"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Startups hire consultants instead of full-time legal teams."
    },
    "content": {
      "short_desc": "Provides expert legal advice to businesses on a project basis.",
      "long_desc": "Legal Consultants are guns for hire. You advise companies on specific issues like mergers, labor law, or contracts without being a permanent employee. You sell your expertise, not your time.",
      "day_in_life": ["Review merger contracts", "Advise on labor compliance", "Draft legal opinions"],
      "tags": ["Law", "Business", "Consulting"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["lawyer", "consultant", "business", "legal"],
      "related_career_ids": ["legal_corporate_lawyer", "business_management_consultant"]
    }
  },
  {
    "id": "edu_curriculum_developer",
    "title": "Curriculum Developer",
    "domain": "Education",
    "slug": "curriculum-developer",
    "match_profile": {
      "interests": ["education", "planning", "writing", "standards"],
      "personality": ["organized", "academic", "visionary", "structured"],
      "work_style": ["office", "planning", "educational", "background"],
      "deal_breakers": ["classroom_chaos", "public_speaking", "improvisation"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Education / Curriculum",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Updating schools for STEM and coding requires new curriculums."
    },
    "content": {
      "short_desc": "Creates educational programs and materials for schools.",
      "long_desc": "Curriculum Developers decide what students learn. You design the syllabus, choose textbooks, and create standards for schools or governments. You shape the future of education from behind the scenes.",
      "day_in_life": ["Review education standards", "Write lesson objectives", "Select teaching materials"],
      "tags": ["Education", "Strategy", "Admin"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["school", "education", "books", "plan"],
      "related_career_ids": ["edu_instructional_designer", "edu_school_principal"]
    }
  },
  {
    "id": "health_veterinary_specialist",
    "title": "Veterinary Specialist (Surgeon)",
    "domain": "Healthcare",
    "slug": "vet-specialist",
    "match_profile": {
      "interests": ["animals", "surgery", "medicine", "complexity"],
      "personality": ["focused", "decisive", "compassionate", "expert"],
      "work_style": ["hospital", "surgical", "high_stakes", "technical"],
      "deal_breakers": ["routine_checkups", "squeamishness", "low_pay"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "MVSc / Board Cert",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 2500000,
      "display_range": "₹8L - ₹25L per year",
      "pay_structure": "Salary / Practice"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Pet owners now pay for complex surgeries (cancer, heart) for pets."
    },
    "content": {
      "short_desc": "Performs complex surgeries on animals.",
      "long_desc": "Vet Specialists are the elite animal doctors. You perform open-heart surgery on dogs or fix broken legs on racehorses. It requires extra years of training beyond a standard vet degree.",
      "day_in_life": ["Perform animal surgery", "Consult on difficult cases", "Review CT scans"],
      "tags": ["Animals", "Medical", "Surgery"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["vet", "doctor", "animal", "surgery"],
      "related_career_ids": ["health_veterinarian", "health_general_surgeon"]
    }
  },
  {
    "id": "trade_stonemason",
    "title": "Stonemason",
    "domain": "Skilled Trade",
    "slug": "stonemason",
    "match_profile": {
      "interests": ["stone", "history", "craft", "building"],
      "personality": ["patient", "strong", "artistic", "enduring"],
      "work_style": ["outdoor", "physical", "heavy", "artistic"],
      "deal_breakers": ["modern_materials", "office", "rushing"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "Apprenticeship",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 900000,
      "display_range": "₹3L - ₹9L per year",
      "pay_structure": "Wage / Contract"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Low",
      "future_trend": "Historical restoration keeps this ancient trade alive."
    },
    "content": {
      "short_desc": "Cuts and builds structures from stone.",
      "long_desc": "Stonemasons build for eternity. You carve and set stone for cathedrals, monuments, or luxury homes. It is an ancient craft requiring strength and artistic skill.",
      "day_in_life": ["Carve stone blocks", "Lay stone walls", "Restore historic buildings"],
      "tags": ["Trade", "Art", "Construction"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["stone", "build", "art", "craft"],
      "related_career_ids": ["trade_mason", "arts_sculptor"]
    }
  },
  {
    "id": "biz_talent_agent",
    "title": "Talent Agent",
    "domain": "Business",
    "slug": "talent-agent",
    "match_profile": {
      "interests": ["entertainment", "negotiation", "people", "fame"],
      "personality": ["pushy", "social", "resilient", "persuasive"],
      "work_style": ["phone/events", "high_stress", "networking", "commission"],
      "deal_breakers": ["shyness", "slow_pace", "structure"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Business / Media",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 5000000,
      "display_range": "High Variance (10% Cut)",
      "pay_structure": "Commission"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Influencer agencies are the new Hollywood talent firms."
    },
    "content": {
      "short_desc": "Finds work for actors, musicians, and models.",
      "long_desc": "Talent Agents sell people. You find auditions for actors or gigs for bands. You negotiate the pay and take a percentage. You need a huge network and thick skin.",
      "day_in_life": ["Pitch clients to casting directors", "Negotiate contracts", "Scout new talent"],
      "tags": ["Business", "Entertainment", "Sales"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["agent", "hollywood", "casting", "sales"],
      "related_career_ids": ["media_publicist", "law_sports_agent"]
    }
  },
  {
    "id": "tech_data_engineer",
    "title": "Data Engineer",
    "domain": "Technology",
    "slug": "data-engineer",
    "match_profile": {
      "interests": ["coding", "databases", "pipelines", "structure"],
      "personality": ["reliable", "systematic", "logical", "backend_focused"],
      "work_style": ["remote/office", "coding_heavy", "infrastructure", "quiet"],
      "deal_breakers": ["visual_design", "sales", "public_speaking"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / Engineering",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 3000000,
      "display_range": "₹10L - ₹30L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Low",
      "future_trend": "AI needs data; Data Engineers build the pipelines to feed AI."
    },
    "content": {
      "short_desc": "Builds systems to collect and store massive amounts of data.",
      "long_desc": "Data Engineers are the plumbers of the information age. You build the pipelines that move data from users to servers to databases. Without you, Data Scientists have nothing to analyze.",
      "day_in_life": ["Build ETL pipelines", "Optimize SQL queries", "Maintain data warehouses"],
      "tags": ["Tech", "Data", "Coding"]
    },
    "meta": {
      "popularity_rank": 15,
      "search_keywords": ["sql", "etl", "python", "big_data"],
      "related_career_ids": ["tech_data_scientist", "tech_backend_engineer"]
    }
  },
  {
    "id": "tech_computer_vision",
    "title": "Computer Vision Engineer",
    "domain": "Technology",
    "slug": "computer-vision",
    "match_profile": {
      "interests": ["ai", "images", "math", "cameras"],
      "personality": ["innovative", "complex_thinker", "visual", "patient"],
      "work_style": ["lab/computer", "R&D", "math_heavy", "cutting_edge"],
      "deal_breakers": ["standard_web_dev", "manual_entry", "legacy_code"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "CS / AI / Math",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 1200000,
      "max": 4000000,
      "display_range": "₹12L - ₹40L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Low",
      "future_trend": "Central to self-driving cars, facial recognition, and medical imaging."
    },
    "content": {
      "short_desc": "Teaches computers how to 'see' and interpret images.",
      "long_desc": "Computer Vision Engineers build the eyes of AI. You write algorithms that allow a car to see a pedestrian or a phone to recognize your face. It is advanced math applied to the real world.",
      "day_in_life": ["Train image recognition models", "Debug sensor data", "Optimize algorithms"],
      "tags": ["Tech", "AI", "Future"]
    },
    "meta": {
      "popularity_rank": 20,
      "search_keywords": ["ai", "camera", "image", "recognition"],
      "related_career_ids": ["tech_ai_ethicist", "tech_data_scientist"]
    }
  },
  {
    "id": "health_pharmacy_tech",
    "title": "Pharmacy Technician",
    "domain": "Healthcare",
    "slug": "pharmacy-tech",
    "match_profile": {
      "interests": ["medicine", "organization", "helping_people", "retail"],
      "personality": ["detail_oriented", "efficient", "friendly", "responsible"],
      "work_style": ["pharmacy", "standing", "customer_facing", "routine"],
      "deal_breakers": ["chaos", "errors", "sitting_down"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Pharmacy Tech Course",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 500000,
      "display_range": "₹2L - ₹5L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Robots dispense pills, but techs manage customers and insurance."
    },
    "content": {
      "short_desc": "Assists pharmacists in dispensing medication to customers.",
      "long_desc": "Pharmacy Techs keep the pharmacy moving. You count pills, label bottles, handle insurance claims, and answer customer questions. You ensure people get the right medicine safely.",
      "day_in_life": ["Count medication inventory", "Process prescription requests", "Assist customers at counter"],
      "tags": ["Healthcare", "Retail", "Support"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["drugs", "medicine", "retail", "health"],
      "related_career_ids": ["health_pharmacist", "health_medical_secretary"]
    }
  },
  {
    "id": "health_medical_coder",
    "title": "Medical Coder",
    "domain": "Healthcare",
    "slug": "medical-coder",
    "match_profile": {
      "interests": ["data", "medicine", "translation", "rules"],
      "personality": ["detail_oriented", "quiet", "focused", "analytical"],
      "work_style": ["office/remote", "sedentary", "independent", "admin"],
      "deal_breakers": ["patient_contact", "blood", "ambiguity"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Medical Coding Cert",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "High",
      "future_trend": "AI suggests codes, but humans must audit complex cases."
    },
    "content": {
      "short_desc": "Translates doctor notes into standardized codes for billing.",
      "long_desc": "Medical Coders speak the language of insurance. You read patient records and assign universal codes to every diagnosis and procedure so the hospital gets paid. It is a vital backend role.",
      "day_in_life": ["Review patient charts", "Assign ICD/CPT codes", "Submit insurance claims"],
      "tags": ["Healthcare", "Admin", "Data"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["billing", "coding", "admin", "hospital"],
      "related_career_ids": ["health_medical_secretary", "biz_compliance_officer"]
    }
  },
  {
    "id": "trade_pest_control",
    "title": "Pest Control Technician",
    "domain": "Skilled Trade",
    "slug": "pest-control",
    "match_profile": {
      "interests": ["insects", "solving_problems", "outdoors", "independence"],
      "personality": ["brave", "thorough", "practical", "investigative"],
      "work_style": ["field_work", "travel", "dirty", "autonomous"],
      "deal_breakers": ["fear_of_bugs", "office_work", "chemicals"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "License / Training",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 700000,
      "display_range": "₹2.5L - ₹7L per year",
      "pay_structure": "Salary + Commission"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Climate change is expanding pest habitats, increasing demand."
    },
    "content": {
      "short_desc": "Removes pests like termites, rats, and roaches from buildings.",
      "long_desc": "Pest Control Techs are the exterminators. You inspect homes for infestations and use chemicals or traps to remove them. It requires knowledge of biology and safety protocols.",
      "day_in_life": ["Inspect homes for termites", "Spray pesticides safely", "Set humane traps"],
      "tags": ["Trade", "Service", "Field"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["bugs", "exterminator", "service", "home"],
      "related_career_ids": ["trade_land_surveyor", "science_entomologist"]
    }
  },
  {
    "id": "trade_flooring_installer",
    "title": "Flooring Installer",
    "domain": "Skilled Trade",
    "slug": "flooring-installer",
    "match_profile": {
      "interests": ["construction", "design", "manual_work", "puzzles"],
      "personality": ["physical", "precise", "fast", "patient"],
      "work_style": ["kneeling", "physical", "visual", "construction_site"],
      "deal_breakers": ["bad_knees", "computer_work", "theory"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "Apprenticeship",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Wage / Project"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "High demand for sustainable materials like bamboo and cork."
    },
    "content": {
      "short_desc": "Installs carpet, wood, tile, or vinyl flooring.",
      "long_desc": "Flooring Installers finish the room. You measure, cut, and lay down floor materials. It involves a lot of kneeling and precise cutting to make patterns fit perfectly.",
      "day_in_life": ["Measure room dimensions", "Cut tiles/wood to fit", "Apply adhesive and grout"],
      "tags": ["Trade", "Construction", "Physical"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["floor", "tile", "wood", "construction"],
      "related_career_ids": ["trade_carpenter", "trade_drywall_finisher"]
    }
  },
  {
    "id": "science_paleontologist",
    "title": "Paleontologist",
    "domain": "Science",
    "slug": "paleontologist",
    "match_profile": {
      "interests": ["dinosaurs", "history", "digging", "biology"],
      "personality": ["patient", "adventurous", "intellectual", "observant"],
      "work_style": ["field/lab", "dusty", "research", "travel"],
      "deal_breakers": ["clean_fingernails", "rushing", "city_life"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "PhD Paleontology / Geology",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary / Grants"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Low",
      "future_trend": "Niche academic field; museum roles are competitive."
    },
    "content": {
      "short_desc": "Studies fossils to understand the history of life on Earth.",
      "long_desc": "Paleontologists study ancient life. You dig for dinosaur bones or microscopic fossils to reconstruct how the world looked millions of years ago. It is a mix of adventure and tedious lab work.",
      "day_in_life": ["Excavate fossil sites", "Clean bones in lab", "Write research papers"],
      "tags": ["Science", "History", "Adventure"]
    },
    "meta": {
      "popularity_rank": 90,
      "search_keywords": ["dinosaur", "fossil", "history", "science"],
      "related_career_ids": ["science_archaeologist", "science_geologist"]
    }
  },
  {
    "id": "science_atmospheric_scientist",
    "title": "Atmospheric Scientist",
    "domain": "Science",
    "slug": "atmospheric-scientist",
    "match_profile": {
      "interests": ["weather", "climate_change", "data", "physics"],
      "personality": ["analytical", "concerned", "predictive", "scientific"],
      "work_style": ["lab/computer", "modeling", "data_heavy", "global"],
      "deal_breakers": ["politics", "ignoring_data", "manual_labor"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Atmospheric Science",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1800000,
      "display_range": "₹6L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Critical for predicting climate change impacts and disasters."
    },
    "content": {
      "short_desc": "Studies the atmosphere to understand climate and weather.",
      "long_desc": "Atmospheric Scientists predict the future of the planet. You study data to understand global warming, pollution, and weather patterns. You help governments plan for a changing world.",
      "day_in_life": ["Analyze climate models", "Track pollution levels", "Write climate reports"],
      "tags": ["Science", "Climate", "Data"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["climate", "weather", "global_warming", "science"],
      "related_career_ids": ["science_meteorologist", "eng_environmental_engineer"]
    }
  },
  {
    "id": "biz_budget_analyst",
    "title": "Budget Analyst",
    "domain": "Business",
    "slug": "budget-analyst",
    "match_profile": {
      "interests": ["money", "efficiency", "planning", "spreadsheets"],
      "personality": ["organized", "frugal", "detail_oriented", "rational"],
      "work_style": ["office", "data_driven", "internal", "structured"],
      "deal_breakers": ["overspending", "guessing", "creative_accounting"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Finance / Accounting",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Software tracks spending, but analysts perform the strategy."
    },
    "content": {
      "short_desc": "Helps companies or governments plan their spending.",
      "long_desc": "Budget Analysts organize the money. You review budget proposals, monitor spending, and ensure the organization doesn't run out of cash. You find ways to save money and improve efficiency.",
      "day_in_life": ["Review department budgets", "Track monthly spending", "Forecast future costs"],
      "tags": ["Business", "Finance", "Planning"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["money", "finance", "plan", "budget"],
      "related_career_ids": ["finance_financial_analyst", "finance_payroll_specialist"]
    }
  },
  {
    "id": "biz_real_estate_appraiser",
    "title": "Real Estate Appraiser",
    "domain": "Business",
    "slug": "real-estate-appraiser",
    "match_profile": {
      "interests": ["homes", "value", "inspection", "market"],
      "personality": ["objective", "observant", "analytical", "independent"],
      "work_style": ["field/home_office", "travel", "inspection", "solitary"],
      "deal_breakers": ["sales_pressure", "office_politics", "crowds"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "License / Certification",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Fee per Appraisal"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Automated valuation models exist, but physical inspection remains required."
    },
    "content": {
      "short_desc": "Estimates the value of land and buildings.",
      "long_desc": "Appraisers decide what a house is worth. You visit properties, inspect their condition, and compare them to recent sales to determine a fair price for banks or buyers. You must be unbiased.",
      "day_in_life": ["Inspect properties", "Research market comps", "Write valuation reports"],
      "tags": ["Business", "Real Estate", "Analysis"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["house", "value", "price", "inspection"],
      "related_career_ids": ["business_real_estate_agent", "govt_building_inspector"]
    }
  },
  {
    "id": "arts_foley_artist",
    "title": "Foley Artist",
    "domain": "Arts & Design",
    "slug": "foley-artist",
    "match_profile": {
      "interests": ["sound", "movies", "improvisation", "craft"],
      "personality": ["creative", "playful", "precise", "auditory"],
      "work_style": ["studio", "physical", "creative", "unusual"],
      "deal_breakers": ["silence", "desk_job", "fame"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "Audio Engineering / Portfolio",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1000000,
      "display_range": "₹3L - ₹10L per year",
      "pay_structure": "Project / Hourly"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Medium",
      "future_trend": "Digital libraries exist, but custom sounds are needed for high-end film."
    },
    "content": {
      "short_desc": "Creates custom sound effects for movies using physical objects.",
      "long_desc": "Foley Artists make noise. You watch a movie scene and recreate footsteps, breaking glass, or rustling clothes using props in a studio. You bring the audio world to life.",
      "day_in_life": ["Watch film scenes", "Record footsteps in gravel", "Smash watermelons for effect"],
      "tags": ["Creative", "Cinema", "Sound"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["sound", "movie", "audio", "effects"],
      "related_career_ids": ["arts_sound_designer", "media_audio_producer"]
    }
  },
  {
    "id": "arts_furniture_designer",
    "title": "Furniture Designer",
    "domain": "Arts & Design",
    "slug": "furniture-designer",
    "match_profile": {
      "interests": ["design", "comfort", "wood", "drawing"],
      "personality": ["creative", "practical", "visual", "tactile"],
      "work_style": ["studio/workshop", "design_heavy", "prototyping", "visual"],
      "deal_breakers": ["engineering_only", "mass_production", "discomfort"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Industrial Design / Furniture",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Salary / Sales"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Sustainable, modular furniture for small apartments is trending."
    },
    "content": {
      "short_desc": "Designs and builds functional and stylish furniture.",
      "long_desc": "Furniture Designers blend art and ergonomics. You sketch ideas for chairs or tables, build prototypes, and select materials. You ensure a chair is beautiful but also comfortable to sit in.",
      "day_in_life": ["Sketch chair concepts", "Build 3D models", "Select fabric/wood samples"],
      "tags": ["Creative", "Design", "Craft"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["chair", "wood", "design", "interior"],
      "related_career_ids": ["creative_industrial_designer", "trade_cabinet_maker"]
    }
  },
  {
    "id": "legal_title_examiner",
    "title": "Title Examiner",
    "domain": "Legal",
    "slug": "title-examiner",
    "match_profile": {
      "interests": ["history", "law", "records", "investigation"],
      "personality": ["meticulous", "patient", "solitary", "thorough"],
      "work_style": ["office", "document_heavy", "quiet", "historical"],
      "deal_breakers": ["excitement", "sales", "public_speaking"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Real Estate / Law",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "High",
      "future_trend": "Digitized land records are speeding up the work but reducing staff needs."
    },
    "content": {
      "short_desc": "Researches land records to confirm property ownership.",
      "long_desc": "Title Examiners check the history of a house. Before a sale, you check public records to ensure the seller actually owns the land and has no unpaid debts. You ensure the sale is legal.",
      "day_in_life": ["Search county land records", "Verify property deeds", "Report ownership issues"],
      "tags": ["Legal", "Real Estate", "Admin"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["property", "law", "search", "admin"],
      "related_career_ids": ["legal_paralegal", "biz_real_estate_appraiser"]
    }
  },
  {
    "id": "legal_bailiff",
    "title": "Court Bailiff",
    "domain": "Legal",
    "slug": "bailiff",
    "match_profile": {
      "interests": ["security", "law", "order", "protection"],
      "personality": ["alert", "authoritative", "calm", "disciplined"],
      "work_style": ["courtroom", "standing", "security_focused", "public"],
      "deal_breakers": ["office_work", "weakness", "chaos"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Law Enforcement Training",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 700000,
      "display_range": "₹3L - ₹7L per year",
      "pay_structure": "Govt Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Essential role for courtroom safety regardless of tech."
    },
    "content": {
      "short_desc": "Maintains order and security within a courtroom.",
      "long_desc": "Bailiffs are the police of the court. You protect the judge, manage the jury, and ensure everyone behaves during a trial. You announce the judge's arrival and enforce court rules.",
      "day_in_life": ["Screen people entering court", "Escort prisoners", "Announce 'All Rise'"],
      "tags": ["Legal", "Security", "Govt"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["police", "court", "security", "guard"],
      "related_career_ids": ["govt_police_officer", "legal_court_clerk"]
    }
  },
  {
    "id": "edu_driving_instructor",
    "title": "Driving Instructor",
    "domain": "Education",
    "slug": "driving-instructor",
    "match_profile": {
      "interests": ["driving", "teaching", "safety", "patience"],
      "personality": ["calm", "patient", "alert", "encouraging"],
      "work_style": ["car", "one_on_one", "teaching", "mobile"],
      "deal_breakers": ["road_rage", "boredom", "office"]
    },
    "requirements": {
      "education_level": "license",
      "degree_field": "Instructor License",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 600000,
      "display_range": "₹2.5L - ₹6L per year",
      "pay_structure": "Hourly"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Self-driving cars are coming, but humans still need licenses for decades."
    },
    "content": {
      "short_desc": "Teaches people how to drive vehicles safely.",
      "long_desc": "Driving Instructors teach freedom. You sit in the passenger seat with a dual brake, teaching nervous teens or adults how to drive safely. You need nerves of steel and infinite patience.",
      "day_in_life": ["Teach parallel parking", "Explain road rules", "Conduct practice tests"],
      "tags": ["Education", "Service", "Driving"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["car", "teacher", "license", "drive"],
      "related_career_ids": ["transport_bus_driver", "edu_private_tutor"]
    }
  },
  {
    "id": "arts_museum_tech",
    "title": "Museum Technician",
    "domain": "Arts & Design",
    "slug": "museum-tech",
    "match_profile": {
      "interests": ["history", "handling_objects", "organization", "care"],
      "personality": ["careful", "gentle", "quiet", "respectful"],
      "work_style": ["museum", "physical", "delicate", "behind_scenes"],
      "deal_breakers": ["clumsiness", "rushing", "crowds"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "History / Museum Studies",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Low",
      "future_trend": "Handling physical artifacts cannot be automated."
    },
    "content": {
      "short_desc": "Prepares and maintains museum exhibits and artifacts.",
      "long_desc": "Museum Technicians handle history. You clean dinosaur bones, hang paintings, or move fragile pottery for display. You work with curators to make sure artifacts are safe and look good.",
      "day_in_life": ["Install art exhibits", "Clean display cases", "Pack artifacts for shipping"],
      "tags": ["Arts", "History", "Support"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["museum", "history", "art", "install"],
      "related_career_ids": ["arts_museum_curator", "arts_conservator"]
    }
  },
  {
    "id": "hospitality_cruise_director",
    "title": "Cruise Director",
    "domain": "Hospitality",
    "slug": "cruise-director",
    "match_profile": {
      "interests": ["entertainment", "travel", "public_speaking", "hosting"],
      "personality": ["energetic", "charismatic", "tireless", "social"],
      "work_style": ["ship", "public_facing", "24_7_energy", "travel"],
      "deal_breakers": ["seasickness", "privacy", "quiet"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Hospitality / Theater",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 3000000,
      "display_range": "₹10L - ₹30L (Tax Free)",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Cruise industry is rebounding with focus on experiential travel."
    },
    "content": {
      "short_desc": "Manages entertainment and social events on a cruise ship.",
      "long_desc": "The Cruise Director is the face of the ship. You host the shows, announce the events, and ensure thousands of passengers are having fun. You are always 'on stage' while onboard.",
      "day_in_life": ["Host morning show", "Introduce evening theater", "Mingle with passengers"],
      "tags": ["Hospitality", "Travel", "Entertainment"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["ship", "travel", "host", "fun"],
      "related_career_ids": ["hospitality_gm", "service_event_coordinator"]
    }
  },
  {
    "id": "service_personal_assistant",
    "title": "Personal Assistant (PA)",
    "domain": "Service",
    "slug": "personal-assistant",
    "match_profile": {
      "interests": ["organization", "helping", "logistics", "variety"],
      "personality": ["adaptable", "discreet", "organized", "loyal"],
      "work_style": ["office/home", "supportive", "unpredictable", "service"],
      "deal_breakers": ["ego", "rigid_hours", "chaos"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Admin / Any Degree",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1200000,
      "display_range": "₹3L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Virtual Assistants (VA) are replacing some in-person roles."
    },
    "content": {
      "short_desc": "Manages the daily life and schedule of a busy individual.",
      "long_desc": "Personal Assistants organize chaos. You book flights, manage calendars, buy gifts, and run errands for a CEO or celebrity. You make their life run smoothly so they can focus on work.",
      "day_in_life": ["Manage email inbox", "Book travel arrangements", "Run personal errands"],
      "tags": ["Service", "Admin", "Support"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["admin", "secretary", "help", "assistant"],
      "related_career_ids": ["service_estate_manager", "biz_event_coordinator"]
    }
  },
  {
    "id": "govt_game_warden",
    "title": "Game Warden / Wildlife Officer",
    "domain": "Government",
    "slug": "game-warden",
    "match_profile": {
      "interests": ["wildlife", "law_enforcement", "nature", "protection"],
      "personality": ["tough", "independent", "fair", "outdoorsy"],
      "work_style": ["field_work", "remote", "enforcement", "solitary"],
      "deal_breakers": ["office", "softness", "corruption"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Wildlife Biology / Criminal Justice",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 900000,
      "display_range": "₹4L - ₹9L per year",
      "pay_structure": "Govt Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Combating poaching and habitat loss keeps this role vital."
    },
    "content": {
      "short_desc": "Enforces laws regarding hunting, fishing, and wildlife conservation.",
      "long_desc": "Game Wardens are police for nature. You catch poachers, check fishing licenses, and rescue injured wildlife. You work alone in the wilderness, protecting animals and the environment.",
      "day_in_life": ["Patrol forests/lakes", "Check hunting licenses", "Investigate poaching"],
      "tags": ["Government", "Nature", "Police"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["police", "nature", "animals", "ranger"],
      "related_career_ids": ["science_park_ranger", "govt_police_officer"]
    }
  },
  {
    "id": "biz_waste_manager",
    "title": "Waste Management Specialist",
    "domain": "Business",
    "slug": "waste-manager",
    "match_profile": {
      "interests": ["environment", "logistics", "recycling", "sustainability"],
      "personality": ["practical", "responsible", "organized", "eco_conscious"],
      "work_style": ["field/office", "operational", "essential", "green"],
      "deal_breakers": ["smells", "glamour", "ignoring_waste"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Environmental Science / Management",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Circular economy focus is turning waste into a resource (energy/materials)."
    },
    "content": {
      "short_desc": "Coordinates the disposal and recycling of waste materials.",
      "long_desc": "Waste Managers deal with what we throw away. You plan recycling programs, manage landfills, or coordinate hazardous waste disposal. You turn trash into a logistical challenge to save the planet.",
      "day_in_life": ["Monitor recycling rates", "Manage fleet routes", "Ensure environmental compliance"],
      "tags": ["Business", "Green", "Logistics"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["trash", "green", "recycle", "manager"],
      "related_career_ids": ["biz_sustainability_manager", "eng_environmental_engineer"]
    }
  },
  {
    "id": "science_forensic_psychologist",
    "title": "Forensic Psychologist",
    "domain": "Science",
    "slug": "forensic-psychologist",
    "match_profile": {
      "interests": ["psychology", "law", "crime", "analysis"],
      "personality": ["objective", "resilient", "analytical", "calm"],
      "work_style": ["prison/court", "high_stress", "investigative", "clinical"],
      "deal_breakers": ["emotional_involvement", "routine", "safety_risks"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "PhD Psychology",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary / Consulting"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Criminal profiling and competency hearings rely on human judgment."
    },
    "content": {
      "short_desc": "Applies psychology to the legal and criminal justice system.",
      "long_desc": "Forensic Psychologists work where law and mind meet. You analyze criminals to see if they are fit for trial, create psychological profiles for police, or counsel inmates. It is intellectually fascinating but often dark work.",
      "day_in_life": ["Evaluate inmate competency", "Testify as expert witness", "Write psychological profiles"],
      "tags": ["Science", "Law", "Psychology"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["criminal_minds", "psychology", "law", "profiler"],
      "related_career_ids": ["health_clinical_psychologist", "legal_litigation_lawyer"]
    }
  },
  {
    "id": "trade_boilermaker",
    "title": "Boilermaker",
    "domain": "Skilled Trade",
    "slug": "boilermaker",
    "match_profile": {
      "interests": ["metal", "fire", "heavy_machinery", "construction"],
      "personality": ["tough", "strong", "precise", "fearless"],
      "work_style": ["industrial", "hazardous", "physically_demanding", "travel"],
      "deal_breakers": ["claustrophobia", "heat_intolerance", "office"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Apprenticeship",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Wage + Hazard Pay"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Maintenance of power plants and refineries ensures steady work."
    },
    "content": {
      "short_desc": "Assembles and repairs boilers and vats that hold hot liquids.",
      "long_desc": "Boilermakers do the heavy lifting of industry. You weld and assemble massive steel tanks for power plants and ships. It involves working in tight spaces, extreme heat, and great heights.",
      "day_in_life": ["Read blueprints for tanks", "Weld steel plates", "Inspect boiler pressure"],
      "tags": ["Trade", "Industrial", "Tough"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["welding", "factory", "construction", "metal"],
      "related_career_ids": ["trade_welder", "trade_pipefitter"]
    }
  },
  {
    "id": "biz_csr_manager",
    "title": "CSR Manager",
    "domain": "Business",
    "slug": "csr-manager",
    "match_profile": {
      "interests": ["charity", "business", "public_relations", "ethics"],
      "personality": ["empathetic", "strategic", "social", "organized"],
      "work_style": ["corporate", "social_impact", "collaborative", "office"],
      "deal_breakers": ["profit_only", "insincerity", "isolation"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Social Work / MBA",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 2500000,
      "display_range": "₹8L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Companies are investing heavily in social image and community impact."
    },
    "content": {
      "short_desc": "Manages a company's Corporate Social Responsibility initiatives.",
      "long_desc": "CSR Managers spend the company's money on good causes. You plan charity partnerships, sustainability drives, and community projects. You bridge the gap between corporate profit and social good.",
      "day_in_life": ["Plan charity events", "Partner with NGOs", "Report on social impact"],
      "tags": ["Business", "Social", "Impact"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["charity", "corporate", "ngo", "ethics"],
      "related_career_ids": ["social_social_worker", "media_public_relations_specialist"]
    }
  },
  {
    "id": "trade_aircraft_mechanic",
    "title": "Aircraft Mechanic (A&P)",
    "domain": "Skilled Trade",
    "slug": "aircraft-mechanic",
    "match_profile": {
      "interests": ["aviation", "engines", "safety", "mechanics"],
      "personality": ["meticulous", "responsible", "technical", "patient"],
      "work_style": ["hangar", "manual_labor", "safety_critical", "technical"],
      "deal_breakers": ["cutting_corners", "rushing", "dirt"]
    },
    "requirements": {
      "education_level": "license",
      "degree_field": "AME License (DGCA/FAA)",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Global travel rebound creates shortage of certified mechanics."
    },
    "content": {
      "short_desc": "Inspects and repairs aircraft engines and systems.",
      "long_desc": "Aircraft Mechanics ensure planes don't fall out of the sky. You perform routine maintenance, change tires, and rebuild jet engines. It requires strict adherence to safety checklists.",
      "day_in_life": ["Inspect turbine blades", "Test landing gear hydraulics", "Log maintenance records"],
      "tags": ["Aviation", "Trade", "Safety"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["plane", "repair", "airport", "engine"],
      "related_career_ids": ["trade_avionics_technician", "eng_aerospace_engineer"]
    }
  },
  {
    "id": "finance_claims_adjuster",
    "title": "Insurance Claims Adjuster",
    "domain": "Finance",
    "slug": "claims-adjuster",
    "match_profile": {
      "interests": ["investigation", "money", "negotiation", "details"],
      "personality": ["skeptical", "fair", "observant", "resilient"],
      "work_style": ["field/office", "investigative", "conflict_heavy", "travel"],
      "deal_breakers": ["conflict_avoidance", "gullibility", "desk_only"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Any Degree / Insurance",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 350000,
      "max": 1000000,
      "display_range": "₹3.5L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Drones are used for roof inspections, but humans assess value."
    },
    "content": {
      "short_desc": "Investigates insurance claims to determine payment.",
      "long_desc": "Claims Adjusters are insurance detectives. When a house burns down or cars crash, you visit the scene to determine how much the insurance company should pay. You spot fraud and help real victims.",
      "day_in_life": ["Inspect accident damage", "Interview witnesses", "Negotiate settlement amounts"],
      "tags": ["Finance", "Investigation", "Insurance"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["insurance", "investigation", "accident", "finance"],
      "related_career_ids": ["biz_insurance_agent", "science_forensic_scientist"]
    }
  },
  {
    "id": "arts_exhibit_designer",
    "title": "Exhibit Designer",
    "domain": "Arts & Design",
    "slug": "exhibit-designer",
    "match_profile": {
      "interests": ["design", "museums", "storytelling", "space"],
      "personality": ["creative", "visual", "organized", "collaborative"],
      "work_style": ["studio", "project_based", "visual", "3d_modeling"],
      "deal_breakers": ["virtual_only", "boring_topics", "routine"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Industrial Design / Architecture",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary / Project"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Interactive, digital-physical hybrid exhibits are the trend."
    },
    "content": {
      "short_desc": "Designs displays for museums, trade shows, and galleries.",
      "long_desc": "Exhibit Designers create immersive spaces. You decide how a dinosaur skeleton is displayed or how a tech company's booth looks at an expo. You combine architecture, lighting, and graphic design.",
      "day_in_life": ["Create 3D renders of booth", "Select lighting and materials", "Oversee installation"],
      "tags": ["Creative", "Design", "3D"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["museum", "design", "event", "display"],
      "related_career_ids": ["arts_museum_curator", "creative_interior_designer"]
    }
  },
  {
    "id": "science_demographer",
    "title": "Demographer",
    "domain": "Science",
    "slug": "demographer",
    "match_profile": {
      "interests": ["statistics", "people", "trends", "sociology"],
      "personality": ["analytical", "objective", "curious", "academic"],
      "work_style": ["office", "data_heavy", "research", "predictive"],
      "deal_breakers": ["small_data", "sales", "short_term"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Sociology / Statistics",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Crucial for government planning regarding aging populations."
    },
    "content": {
      "short_desc": "Studies human population statistics and trends.",
      "long_desc": "Demographers predict the future of society. You analyze birth rates, migration, and aging to tell governments where to build schools or hospitals. You tell stories with massive datasets.",
      "day_in_life": ["Analyze census data", "Predict population growth", "Write reports for policy makers"],
      "tags": ["Science", "Data", "Sociology"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["population", "stats", "census", "data"],
      "related_career_ids": ["tech_data_scientist", "govt_urban_planner"]
    }
  },
  {
    "id": "health_drama_therapist",
    "title": "Drama Therapist",
    "domain": "Healthcare",
    "slug": "drama-therapist",
    "match_profile": {
      "interests": ["acting", "psychology", "healing", "stories"],
      "personality": ["expressive", "empathetic", "creative", "bold"],
      "work_style": ["clinic/studio", "active", "emotional", "group_work"],
      "deal_breakers": ["stage_fright", "rigidity", "paperwork"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Drama Therapy",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 900000,
      "display_range": "₹3L - ₹9L per year",
      "pay_structure": "Salary / Hourly"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Used increasingly in prisons and schools for behavioral health."
    },
    "content": {
      "short_desc": "Uses role-play and theater techniques to treat mental health.",
      "long_desc": "Drama Therapists use acting to heal. You help patients act out their trauma or practice social skills through role-play. It helps people who find it hard to just 'talk' about their problems.",
      "day_in_life": ["Lead improv therapy sessions", "Direct therapeutic plays", "Assess patient progress"],
      "tags": ["Healthcare", "Creative", "Psychology"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["acting", "therapy", "mental_health", "drama"],
      "related_career_ids": ["health_art_therapist", "arts_music_teacher"]
    }
  },
  {
    "id": "tech_rigging_artist",
    "title": "3D Rigging Artist",
    "domain": "Technology",
    "slug": "rigging-artist",
    "match_profile": {
      "interests": ["anatomy", "physics", "coding", "animation"],
      "personality": ["technical", "patient", "logical", "problem_solver"],
      "work_style": ["computer", "backend_art", "technical", "detail_oriented"],
      "deal_breakers": ["drawing", "pure_art", "pure_code"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Animation / CS",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1800000,
      "display_range": "₹5L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Auto-rigging AI exists, but complex characters need humans."
    },
    "content": {
      "short_desc": "Creates the digital skeletons that allow 3D characters to move.",
      "long_desc": "Rigging Artists put the bones in the 3D model. Before an animator can move a character, you must build the internal skeleton and controls. It requires understanding both anatomy and Python coding.",
      "day_in_life": ["Build skeleton for 3D model", "Paint skin weights", "Write scripts to automate movement"],
      "tags": ["Tech", "Creative", "3D"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["animation", "3d", "gaming", "tech"],
      "related_career_ids": ["arts_animator_3d", "creative_animator"]
    }
  },
  {
    "id": "trade_geothermal_tech",
    "title": "Geothermal Technician",
    "domain": "Skilled Trade",
    "slug": "geothermal-tech",
    "match_profile": {
      "interests": ["earth", "energy", "mechanics", "drilling"],
      "personality": ["practical", "eco_conscious", "rugged", "technical"],
      "work_style": ["field_work", "outdoor", "physical", "technical"],
      "deal_breakers": ["office", "clean_hands", "theory"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "HVAC / Renewables",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Wage"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Sustainable heating/cooling demand is skyrocketing."
    },
    "content": {
      "short_desc": "Installs and repairs geothermal heating and cooling systems.",
      "long_desc": "Geothermal Techs use the earth's heat. You install pipes underground that use the constant temperature of the earth to heat or cool homes. It is green energy plumbing.",
      "day_in_life": ["Install underground loops", "Connect heat pumps", "Test system efficiency"],
      "tags": ["Trade", "Green", "Energy"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["green", "energy", "hvac", "drilling"],
      "related_career_ids": ["trade_hvac_technician", "eng_drilling_engineer"]
    }
  },
  {
    "id": "media_speechwriter",
    "title": "Speechwriter",
    "domain": "Media & Marketing",
    "slug": "speechwriter",
    "match_profile": {
      "interests": ["politics", "writing", "persuasion", "history"],
      "personality": ["articulate", "strategic", "empathetic", "invisible"],
      "work_style": ["office/campaign", "high_pressure", "writing_heavy", "deadline_driven"],
      "deal_breakers": ["fame_seeking", "writer_block", "politics_allergy"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Pol Sci / English",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary / Freelance"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "AI writes drafts, but humans inject the emotion and rhetoric."
    },
    "content": {
      "short_desc": "Writes speeches for politicians and executives.",
      "long_desc": "Speechwriters put words in leaders' mouths. You capture the voice of a CEO or politician to write inspiring or persuasive speeches. You need to understand rhetoric and the audience perfectly.",
      "day_in_life": ["Interview the speaker", "Draft keynote address", "Revise based on policy team"],
      "tags": ["Writing", "Politics", "Media"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["writing", "politics", "pr", "communication"],
      "related_career_ids": ["media_public_relations_specialist", "media_ghostwriter"]
    }
  },
  {
    "id": "biz_chief_of_staff",
    "title": "Chief of Staff",
    "domain": "Business",
    "slug": "chief-of-staff",
    "match_profile": {
      "interests": ["leadership", "strategy", "problem_solving", "management"],
      "personality": ["decisive", "organized", "diplomatic", "loyal"],
      "work_style": ["executive_office", "high_pressure", "gatekeeping", "strategic"],
      "deal_breakers": ["being_the_star", "9_to_5", "indecision"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "MBA",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1500000,
      "max": 5000000,
      "display_range": "₹15L - ₹50L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Becoming a critical strategic partner to CEOs, not just an assistant."
    },
    "content": {
      "short_desc": "Acts as the right-hand strategic advisor to a CEO.",
      "long_desc": "The Chief of Staff is the CEO's force multiplier. You don't just schedule meetings; you solve problems, lead strategic projects, and communicate on behalf of the boss. It is a stepping stone to C-suite.",
      "day_in_life": ["Prioritize CEO agenda", "Lead strategic initiatives", "Resolve inter-department conflict"],
      "tags": ["Business", "Executive", "Strategy"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["strategy", "executive", "ceo", "management"],
      "related_career_ids": ["biz_operations_manager", "tech_cto"]
    }
  },
  {
    "id": "sales_solar_consultant",
    "title": "Solar Sales Consultant",
    "domain": "Sales",
    "slug": "solar-sales",
    "match_profile": {
      "interests": ["green_energy", "sales", "money", "environment"],
      "personality": ["persuasive", "energetic", "resilient", "social"],
      "work_style": ["field_work", "commission_based", "door_to_door", "independent"],
      "deal_breakers": ["rejection", "desk_job", "fixed_salary_only"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Sales Training",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1500000,
      "display_range": "₹3L - ₹15L (Commission Heavy)",
      "pay_structure": "Commission"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Low",
      "future_trend": "Government subsidies for solar drive massive sales demand."
    },
    "content": {
      "short_desc": "Sells residential or commercial solar power systems.",
      "long_desc": "Solar Consultants sell savings. You explain the benefits of solar energy to homeowners, calculate their savings, and close the deal. It combines environmental passion with aggressive sales.",
      "day_in_life": ["Knock on doors / Cold call", "Calculate energy savings", "Close sales contracts"],
      "tags": ["Sales", "Green", "Energy"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["sales", "solar", "green", "commission"],
      "related_career_ids": ["sales_b2b_sales_manager", "trade_solar_installer"]
    }
  },
  {
    "id": "govt_public_works_director",
    "title": "Public Works Director",
    "domain": "Government",
    "slug": "public-works-director",
    "match_profile": {
      "interests": ["infrastructure", "community", "management", "planning"],
      "personality": ["responsible", "organized", "practical", "leader"],
      "work_style": ["office/site", "public_facing", "crisis_management", "stable"],
      "deal_breakers": ["ignoring_complaints", "chaos", "low_impact"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Civil Eng / Public Admin",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 2500000,
      "display_range": "₹10L - ₹25L per year",
      "pay_structure": "Govt Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Smart city infrastructure management is modernizing the role."
    },
    "content": {
      "short_desc": "Manages city infrastructure like roads, water, and parks.",
      "long_desc": "The Public Works Director keeps the city running. You oversee the teams that fix potholes, collect trash, and maintain water pipes. When a pipe bursts at 2 AM, you are the one in charge.",
      "day_in_life": ["Manage department budget", "Respond to storm damage", "Plan road repairs"],
      "tags": ["Government", "Management", "Infrastructure"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["city", "manager", "civil", "roads"],
      "related_career_ids": ["eng_civil_engineer", "govt_city_clerk"]
    }
  },
  {
    "id": "media_content_creator",
    "title": "Live Streamer / Content Creator",
    "domain": "Media & Marketing",
    "slug": "content-creator",
    "match_profile": {
      "interests": ["gaming", "entertainment", "social_media", "community"],
      "personality": ["charismatic", "entertaining", "consistent", "resilient"],
      "work_style": ["home_studio", "public", "always_on", "creative"],
      "deal_breakers": ["anonymity", "privacy", "regular_income"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "Portfolio",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 0,
      "max": 5000000,
      "display_range": "Highly Variable",
      "pay_structure": "Ad Revenue / Sponsors"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Platform diversification (Twitch, YT, Kick) is key to survival."
    },
    "content": {
      "short_desc": "Creates live or recorded video content for online audiences.",
      "long_desc": "Streamers are modern entertainers. You broadcast yourself playing games, chatting, or teaching skills to a live audience. Success requires consistency, personality, and community management.",
      "day_in_life": ["Live stream for 4-6 hours", "Edit highlight clips", "Engage with community on Discord"],
      "tags": ["Media", "Creative", "Online"]
    },
    "meta": {
      "popularity_rank": 10,
      "search_keywords": ["youtube", "twitch", "gaming", "influencer"],
      "related_career_ids": ["media_video_editor", "media_social_media_manager"]
    }
  },
  {
    "id": "science_forester",
    "title": "Forester",
    "domain": "Science",
    "slug": "forester",
    "match_profile": {
      "interests": ["trees", "conservation", "timber", "outdoors"],
      "personality": ["practical", "independent", "nature_lover", "planning"],
      "work_style": ["forest", "isolated", "long_term", "physical"],
      "deal_breakers": ["city", "computer_only", "crowds"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Forestry",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 350000,
      "max": 900000,
      "display_range": "₹3.5L - ₹9L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Sustainable timber harvesting and carbon sequestration are key."
    },
    "content": {
      "short_desc": "Manages forests for timber production and conservation.",
      "long_desc": "Foresters manage trees as a resource. Unlike park rangers (who focus on visitors), you focus on the trees—planning sustainable logging, planting new growth, and preventing fires.",
      "day_in_life": ["Survey timber volume", "Mark trees for harvest", "Plan reforestation"],
      "tags": ["Nature", "Science", "Resource"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["forest", "trees", "nature", "wood"],
      "related_career_ids": ["science_conservation_scientist", "trade_paper_mill"]
    }
  },
  {
    "id": "service_cicerone",
    "title": "Cicerone (Beer Sommelier)",
    "domain": "Service",
    "slug": "cicerone",
    "match_profile": {
      "interests": ["beer", "brewing", "flavor", "teaching"],
      "personality": ["social", "knowledgeable", "passionate", "sensory"],
      "work_style": ["brewery/pub", "social", "evening_shifts", "tasting"],
      "deal_breakers": ["wine_snobbery", "sobriety", "office"]
    },
    "requirements": {
      "education_level": "certification",
      "degree_field": "Certified Cicerone",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1000000,
      "display_range": "₹3L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Craft beer movement continues to grow globally."
    },
    "content": {
      "short_desc": "Expert in beer styles, brewing, and food pairing.",
      "long_desc": "Cicerones are beer experts. You work in breweries or high-end pubs, guiding customers through beer styles, managing tap lines, and pairing brews with food. You know the science of yeast and hops.",
      "day_in_life": ["Curate beer menu", "Train staff on pouring", "Host beer tasting events"],
      "tags": ["Service", "Food", "Craft"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["beer", "brewery", "alcohol", "tasting"],
      "related_career_ids": ["service_sommelier", "hospitality_restaurant_owner"]
    }
  },
  {
    "id": "health_occ_psychologist",
    "title": "Occupational Health Psychologist",
    "domain": "Healthcare",
    "slug": "occ-psychologist",
    "match_profile": {
      "interests": ["workplace", "mental_health", "business", "psychology"],
      "personality": ["empathetic", "analytical", "corporate", "strategic"],
      "work_style": ["corporate_office", "consulting", "research", "helping"],
      "deal_breakers": ["clinical_only", "low_impact", "isolation"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Occupational Psychology",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1800000,
      "display_range": "₹6L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Burnout prevention is a top priority for major corporations."
    },
    "content": {
      "short_desc": "Improves employee well-being and reduces workplace stress.",
      "long_desc": "Occupational Psychologists fix work culture. You study why employees are stressed or burned out and design programs to fix it. You apply psychology to make the office a healthier place.",
      "day_in_life": ["Survey employee satisfaction", "Design stress management workshops", "Advise HR on policy"],
      "tags": ["Healthcare", "Business", "Psychology"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["hr", "psychology", "stress", "corporate"],
      "related_career_ids": ["mgmt_hr_manager", "health_clinical_psychologist"]
    }
  },
  {
    "id": "legal_patent_attorney",
    "title": "Patent Attorney",
    "domain": "Legal",
    "slug": "patent-attorney",
    "match_profile": {
      "interests": ["law", "science", "argument", "protection"],
      "personality": ["intellectual", "competitive", "precise", "confident"],
      "work_style": ["office/court", "high_stakes", "complex", "intellectual"],
      "deal_breakers": ["science_illiteracy", "low_pay", "boredom"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "Law (JD) + Science Degree",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1500000,
      "max": 5000000,
      "display_range": "₹15L - ₹50L+ per year",
      "pay_structure": "Salary / Billable Hours"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Protecting AI and biotech inventions is the most lucrative field."
    },
    "content": {
      "short_desc": "Lawyer specializing in intellectual property and patent litigation.",
      "long_desc": "Patent Attorneys fight for inventions. Unlike agents (who file paperwork), you argue in court when someone steals an idea. You need a science degree AND a law degree. It is one of the highest-paid jobs.",
      "day_in_life": ["Litigate patent infringement", "Advise tech companies", "Draft complex legal arguments"],
      "tags": ["Law", "Tech", "High Pay"]
    },
    "meta": {
      "popularity_rank": 20,
      "search_keywords": ["lawyer", "patent", "tech", "court"],
      "related_career_ids": ["legal_patent_agent", "legal_ip_lawyer"]
    }
  },
  {
    "id": "tech_av_technician",
    "title": "Audiovisual (AV) Technician",
    "domain": "Technology",
    "slug": "av-technician",
    "match_profile": {
      "interests": ["sound", "video", "events", "electronics"],
      "personality": ["technical", "resourceful", "active", "calm"],
      "work_style": ["events/office", "setup", "troubleshooting", "varied"],
      "deal_breakers": ["desk_job", "long_meetings", "theory"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Audio Engineering / Electronics",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Salary / Hourly"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Corporate reliance on high-quality Zoom rooms keeps demand steady."
    },
    "content": {
      "short_desc": "Sets up audio and video equipment for events and offices.",
      "long_desc": "AV Techs make the presentation work. You set up projectors, microphones, and screens for conferences or concerts. When the mic feeds back or the video cuts out, you are the one running to fix it.",
      "day_in_life": ["Set up projectors/screens", "Mix live event audio", "Troubleshoot conference rooms"],
      "tags": ["Tech", "Events", "Support"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["audio", "video", "event", "tech"],
      "related_career_ids": ["media_broadcast_technician", "media_sound_engineer"]
    }
  },
  {
    "id": "tech_quantum_researcher",
    "title": "Quantum Computing Researcher",
    "domain": "Technology",
    "slug": "quantum-researcher",
    "match_profile": {
      "interests": ["physics", "coding", "future_tech", "math"],
      "personality": ["intellectual", "patient", "complex_thinker", "innovative"],
      "work_style": ["lab/computer", "R&D", "abstract", "academic"],
      "deal_breakers": ["immediate_results", "simplicity", "routine"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "PhD Physics / CS",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1500000,
      "max": 5000000,
      "display_range": "₹15L - ₹50L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Low",
      "future_trend": "Quantum supremacy will revolutionize cryptography and drug discovery."
    },
    "content": {
      "short_desc": "Develops algorithms for quantum computers.",
      "long_desc": "Quantum Researchers are inventing the next computer revolution. You use the principles of quantum mechanics (qubits) to solve problems that traditional computers can't handle. It is the absolute cutting edge of science.",
      "day_in_life": ["Design quantum circuits", "Run experiments on quantum hardware", "Publish academic papers"],
      "tags": ["Tech", "Science", "Future"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["quantum", "physics", "computing", "research"],
      "related_career_ids": ["science_physicist", "tech_data_scientist"]
    }
  },
  {
    "id": "health_genetic_engineer",
    "title": "Genetic Engineer",
    "domain": "Healthcare",
    "slug": "genetic-engineer",
    "match_profile": {
      "interests": ["dna", "editing", "biology", "cures"],
      "personality": ["precise", "ethical", "innovative", "meticulous"],
      "work_style": ["lab_based", "microscopic", "experimental", "quiet"],
      "deal_breakers": ["carelessness", "rushing", "public_facing"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Biotechnology / Genetics",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "CRISPR technology allows editing genes to cure inherited diseases."
    },
    "content": {
      "short_desc": "Modifies DNA to treat diseases or improve crops.",
      "long_desc": "Genetic Engineers edit the code of life. You use tools like CRISPR to remove bad genes from DNA or add new traits to plants. Your work could cure cancer or end world hunger.",
      "day_in_life": ["Design gene editing experiments", "Analyze DNA sequences", "Grow modified cell cultures"],
      "tags": ["Science", "Health", "Tech"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["dna", "gene", "crispr", "science"],
      "related_career_ids": ["science_biotechnologist", "science_geneticist"]
    }
  },
  {
    "id": "trade_underwater_welder",
    "title": "Underwater Welder",
    "domain": "Skilled Trade",
    "slug": "underwater-welder",
    "match_profile": {
      "interests": ["diving", "welding", "danger", "money"],
      "personality": ["fearless", "calm_under_pressure", "skilled", "adventurous"],
      "work_style": ["ocean", "hazardous", "physical", "technical"],
      "deal_breakers": ["claustrophobia", "fear_of_water", "office"]
    },
    "requirements": {
      "education_level": "certification",
      "degree_field": "Commercial Diving + Welding",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 4000000,
      "display_range": "₹10L - ₹40L per year",
      "pay_structure": "Salary + Hazard Pay"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Offshore wind farms and oil rig maintenance keep demand high."
    },
    "content": {
      "short_desc": "Repairs metal structures like oil rigs underwater.",
      "long_desc": "Underwater Welders have the most dangerous job in the world. You dive deep into the ocean to weld pipes on oil rigs or ships. It pays incredibly well due to the extreme risk and skill required.",
      "day_in_life": ["Dive to repair site", "Perform wet welding", "Decompress in chamber"],
      "tags": ["Trade", "High Pay", "Danger"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["diving", "welding", "danger", "ocean"],
      "related_career_ids": ["trade_welder", "science_marine_technician"]
    }
  },
  {
    "id": "arts_puppet_maker",
    "title": "Puppet Maker / Puppeteer",
    "domain": "Arts & Design",
    "slug": "puppet-maker",
    "match_profile": {
      "interests": ["craft", "performance", "storytelling", "mechanics"],
      "personality": ["playful", "creative", "tactile", "patient"],
      "work_style": ["workshop/stage", "hands_on", "performance", "unique"],
      "deal_breakers": ["seriousness", "corporate_life", "digital_only"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "Portfolio / Apprenticeship",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 800000,
      "display_range": "₹2L - ₹8L per year",
      "pay_structure": "Project Fee / Gig"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Low",
      "future_trend": "Niche art form for theater and specialized film effects (animatronics)."
    },
    "content": {
      "short_desc": "Designs and builds puppets for theater or film.",
      "long_desc": "Puppet Makers bring objects to life. You sculpt, sew, and engineer mechanical puppets for shows like The Lion King or movies like Star Wars. It combines sculpture with mechanical engineering.",
      "day_in_life": ["Sculpt puppet heads", "Build mechanical joints", "Perform with puppet on stage"],
      "tags": ["Creative", "Craft", "Performance"]
    },
    "meta": {
      "popularity_rank": 90,
      "search_keywords": ["puppet", "theater", "craft", "art"],
      "related_career_ids": ["arts_special_effects", "arts_costume_designer"]
    }
  },
  {
    "id": "biz_actuary_consultant",
    "title": "Actuarial Consultant",
    "domain": "Business",
    "slug": "actuarial-consultant",
    "match_profile": {
      "interests": ["risk", "math", "advice", "insurance"],
      "personality": ["analytical", "communicative", "strategic", "expert"],
      "work_style": ["office/client", "high_level", "advisory", "lucrative"],
      "deal_breakers": ["guessing", "low_pay", "routine_data_entry"]
    },
    "requirements": {
      "education_level": "certification",
      "degree_field": "Fellow of Actuarial Society",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1500000,
      "max": 5000000,
      "display_range": "₹15L - ₹50L per year",
      "pay_structure": "Salary / Fees"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Consulting on climate risk for insurance firms is a new niche."
    },
    "content": {
      "short_desc": "Advises companies on financial risk management.",
      "long_desc": "Actuarial Consultants are high-level math advisors. You help companies design pension plans or insurance products to ensure they don't go bankrupt. You solve the hardest financial math problems.",
      "day_in_life": ["Model financial risk scenarios", "Present strategy to CEOs", "Audit insurance funds"],
      "tags": ["Finance", "Math", "Consulting"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["math", "risk", "insurance", "consultant"],
      "related_career_ids": ["finance_actuary", "biz_risk_manager"]
    }
  },
  {
    "id": "health_orthoptist",
    "title": "Orthoptist",
    "domain": "Healthcare",
    "slug": "orthoptist",
    "match_profile": {
      "interests": ["eyes", "vision", "children", "rehab"],
      "personality": ["patient", "detail_oriented", "gentle", "observant"],
      "work_style": ["clinic", "diagnostic", "non_surgical", "specialized"],
      "deal_breakers": ["surgery", "rushing", "blood"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Orthoptics",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 350000,
      "max": 900000,
      "display_range": "₹3.5L - ₹9L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Increasing screen time in kids leads to more eye alignment issues."
    },
    "content": {
      "short_desc": "Diagnoses and treats eye movement disorders.",
      "long_desc": "Orthoptists fix lazy eyes and double vision. Unlike optometrists (who check vision), you focus on how the eye muscles work together. You often work with children to correct eye turns without surgery.",
      "day_in_life": ["Test patient eye movements", "Prescribe eye patch therapy", "Measure squint angles"],
      "tags": ["Healthcare", "Eyes", "Specialized"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["eyes", "vision", "squint", "medical"],
      "related_career_ids": ["health_optometrist", "health_occupational_therapist"]
    }
  },
  {
    "id": "service_butler",
    "title": "Professional Butler",
    "domain": "Service",
    "slug": "butler",
    "match_profile": {
      "interests": ["service", "etiquette", "luxury", "tradition"],
      "personality": ["discreet", "formal", "loyal", "perfectionist"],
      "work_style": ["private_home", "formal", "high_service", "live_in"],
      "deal_breakers": ["casualness", "messiness", "9_to_5"]
    },
    "requirements": {
      "education_level": "certificate",
      "degree_field": "Butler School",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2500000,
      "display_range": "₹6L - ₹25L per year",
      "pay_structure": "Salary + Housing"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Demand from new tech billionaires keeps this old profession alive."
    },
    "content": {
      "short_desc": "Manages household affairs and serves employers.",
      "long_desc": "Butlers provide the highest level of service. You manage the household, serve meals, pack suitcases, and polish silver. It is a lifestyle of serving the ultra-wealthy with invisible perfection.",
      "day_in_life": ["Serve formal breakfast", "Polish silverware", "Greet household guests"],
      "tags": ["Service", "Luxury", "Traditional"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["butler", "luxury", "service", "household"],
      "related_career_ids": ["service_estate_manager", "hospitality_gm"]
    }
  },
  {
    "id": "trade_luthier",
    "title": "Luthier (Guitar/Violin Maker)",
    "domain": "Skilled Trade",
    "slug": "luthier",
    "match_profile": {
      "interests": ["wood", "music", "craft", "acoustics"],
      "personality": ["patient", "artistic", "musical", "perfectionist"],
      "work_style": ["workshop", "quiet", "solitary", "precise"],
      "deal_breakers": ["loud_machines", "mass_production", "rushing"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "Apprenticeship",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 800000,
      "display_range": "₹2L - ₹8L per year",
      "pay_structure": "Sales / Repair Fees"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Custom, handmade instruments remain a status symbol for musicians."
    },
    "content": {
      "short_desc": "Builds and repairs string instruments like guitars and violins.",
      "long_desc": "Luthiers build music. You select the perfect wood, carve it by hand, and assemble guitars or violins that sound beautiful. It is a blend of woodworking, physics, and art.",
      "day_in_life": ["Carve violin body", "Repair guitar frets", "Varnish finished instrument"],
      "tags": ["Trade", "Music", "Craft"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["guitar", "music", "wood", "repair"],
      "related_career_ids": ["trade_cabinet_maker", "creative_musician"]
    }
  },
  {
    "id": "tech_qa_tester",
    "title": "Manual QA Tester",
    "domain": "Technology",
    "slug": "manual-qa",
    "match_profile": {
      "interests": ["finding_errors", "apps", "user_experience", "detail"],
      "personality": ["critical", "patient", "thorough", "curious"],
      "work_style": ["computer", "repetitive", "detail_oriented", "entry_level"],
      "deal_breakers": ["coding", "big_picture", "chaos"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Any Degree / QA Course",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 700000,
      "display_range": "₹3L - ₹7L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "High",
      "future_trend": "Being replaced by automated testing scripts; requires upskilling to coding."
    },
    "content": {
      "short_desc": "Manually tests software to find bugs before release.",
      "long_desc": "Manual Testers break apps on purpose. You tap every button and try every weird combination to see if the app crashes. You document the bugs so developers can fix them.",
      "day_in_life": ["Test app on different phones", "Log bugs in Jira", "Verify bug fixes"],
      "tags": ["Tech", "Entry Level", "Quality"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["testing", "bugs", "software", "qa"],
      "related_career_ids": ["tech_qa_engineer", "tech_it_support_specialist"]
    }
  },
  {
    "id": "media_technical_director",
    "title": "Technical Director (TV/Film)",
    "domain": "Media & Marketing",
    "slug": "technical-director",
    "match_profile": {
      "interests": ["tv", "equipment", "control_room", "signals"],
      "personality": ["calm_under_pressure", "decisive", "technical", "leader"],
      "work_style": ["control_room", "live_broadcast", "technical", "fast"],
      "deal_breakers": ["creative_writing", "slow_pace", "indecision"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Broadcast Engineering",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1500000,
      "display_range": "₹6L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Remote production (cloud directing) is the new standard."
    },
    "content": {
      "short_desc": "Manages the technical staff and equipment for a broadcast.",
      "long_desc": "Technical Directors switch the show. Sitting in a control room, you push the buttons to switch cameras during a live news or sports broadcast. You ensure the right shot goes on air instantly.",
      "day_in_life": ["Operate video switcher", "Direct camera crew on headset", "Troubleshoot live signal"],
      "tags": ["Media", "Tech", "TV"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["tv", "director", "studio", "tech"],
      "related_career_ids": ["media_broadcast_technician", "creative_film_director"]
    }
  },
  {
    "id": "legal_compliance_analyst",
    "title": "Regulatory Compliance Analyst",
    "domain": "Legal",
    "slug": "compliance-analyst",
    "match_profile": {
      "interests": ["rules", "research", "banking", "safety"],
      "personality": ["cautious", "thorough", "analytical", "objective"],
      "work_style": ["office", "audit_heavy", "routine", "preventative"],
      "deal_breakers": ["risk_taking", "creativity", "sales"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Law / Finance",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Fintech regulations create huge demand for compliance staff."
    },
    "content": {
      "short_desc": "Monitors company activities to ensure they follow laws.",
      "long_desc": "Compliance Analysts prevent fines. You check bank transactions for money laundering or ensure a factory follows safety laws. You are the checkbox checker that keeps the company legal.",
      "day_in_life": ["Review transaction alerts", "Update policy documents", "Prepare audit reports"],
      "tags": ["Legal", "Business", "Admin"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["compliance", "audit", "bank", "law"],
      "related_career_ids": ["biz_compliance_officer", "finance_forensic_accountant"]
    }
  },
  {
    "id": "edu_academic_advisor",
    "title": "Academic Advisor",
    "domain": "Education",
    "slug": "academic-advisor",
    "match_profile": {
      "interests": ["students", "planning", "guidance", "university"],
      "personality": ["supportive", "organized", "listener", "knowledgeable"],
      "work_style": ["university_office", "one_on_one", "administrative", "social"],
      "deal_breakers": ["teaching", "sales", "isolation"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Higher Ed / Counseling",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 350000,
      "max": 900000,
      "display_range": "₹3.5L - ₹9L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "AI suggests courses, but advisors handle career/life direction."
    },
    "content": {
      "short_desc": "Helps college students choose classes and stay on track.",
      "long_desc": "Academic Advisors guide students through college. You help them pick a major, choose classes, and ensure they have enough credits to graduate. You are their navigator in the university system.",
      "day_in_life": ["Review student transcripts", "Advise on course selection", "Help struggling students"],
      "tags": ["Education", "Support", "University"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["college", "counselor", "student", "guide"],
      "related_career_ids": ["edu_school_counselor", "edu_university_registrar"]
    }
  },
  {
    "id": "science_astrophysicist",
    "title": "Astrophysicist",
    "domain": "Science",
    "slug": "astrophysicist",
    "match_profile": {
      "interests": ["stars", "math", "physics", "universe"],
      "personality": ["intellectual", "curious", "abstract_thinker", "patient"],
      "work_style": ["computer/lab", "theoretical", "math_heavy", "academic"],
      "deal_breakers": ["earth_bound_problems", "business", "small_thinking"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "PhD Astrophysics",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 700000,
      "max": 2000000,
      "display_range": "₹7L - ₹20L per year",
      "pay_structure": "Salary / Grants"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Private space industry (SpaceX) hiring researchers for deep space missions."
    },
    "content": {
      "short_desc": "Studies the physics of stars, planets, and galaxies.",
      "long_desc": "Astrophysicists figure out how the universe works. You use math and computer models to understand black holes, dark matter, or the Big Bang. It is the most theoretical and grand scale of science.",
      "day_in_life": ["Run computer simulations", "Analyze telescope data", "Teach university physics"],
      "tags": ["Science", "Space", "Physics"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["space", "stars", "physics", "nasa"],
      "related_career_ids": ["science_astronomer", "science_physicist"]
    }
  },
  {
    "id": "arts_industrial_artist",
    "title": "Concept Artist",
    "domain": "Arts & Design",
    "slug": "concept-artist",
    "match_profile": {
      "interests": ["drawing", "imagination", "movies", "games"],
      "personality": ["imaginative", "visual", "flexible", "fast"],
      "work_style": ["digital_studio", "visual", "creative", "collaborative"],
      "deal_breakers": ["realism_only", "coding", "boring_tasks"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Fine Arts / Illustration",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1500000,
      "display_range": "₹4L - ₹15L per year",
      "pay_structure": "Salary / Freelance"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "High",
      "future_trend": "AI generates ideas, but artists are needed to refine and specify designs."
    },
    "content": {
      "short_desc": "Draws the initial look for characters and worlds in games/movies.",
      "long_desc": "Concept Artists dream up the world. Before a movie set is built or a game character is modeled, you paint what it should look like. You set the visual tone for the entire production.",
      "day_in_life": ["Speed paint environment ideas", "Design character outfits", "Meeting with art director"],
      "tags": ["Creative", "Art", "Design"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["art", "game", "movie", "design"],
      "related_career_ids": ["creative_illustrator", "arts_animator_3d"]
    }
  },
  {
    "id": "tech_blockchain_architect",
    "title": "Blockchain Architect",
    "domain": "Technology",
    "slug": "blockchain-architect",
    "match_profile": {
      "interests": ["crypto", "systems", "security", "innovation"],
      "personality": ["visionary", "technical", "logical", "complex_thinker"],
      "work_style": ["remote", "high_level", "design_focused", "lucrative"],
      "deal_breakers": ["web2", "centralization", "simple_apps"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / Cryptography",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 2500000,
      "max": 6000000,
      "display_range": "₹25L - ₹60L per year",
      "pay_structure": "Salary + Tokens"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Enterprise blockchain for supply chain and finance is growing."
    },
    "content": {
      "short_desc": "Designs the structure of decentralized blockchain systems.",
      "long_desc": "Blockchain Architects build the new internet. You design the security and consensus protocols for new cryptocurrencies or decentralized apps. It requires deep knowledge of math, coding, and economics.",
      "day_in_life": ["Design consensus algorithms", "Review smart contract security", "Plan tokenomics"],
      "tags": ["Tech", "Crypto", "High Pay"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["crypto", "bitcoin", "architect", "tech"],
      "related_career_ids": ["tech_blockchain_developer", "tech_solutions_architect"]
    }
  },
  {
    "id": "health_phlebotomy_supervisor",
    "title": "Phlebotomy Supervisor",
    "domain": "Healthcare",
    "slug": "phlebotomy-supervisor",
    "match_profile": {
      "interests": ["management", "training", "blood", "efficiency"],
      "personality": ["organized", "authoritative", "experienced", "fair"],
      "work_style": ["lab/clinic", "supervisory", "operational", "active"],
      "deal_breakers": ["entry_level_pay", "chaos", "blood_phobia"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Phlebotomy + Experience",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 900000,
      "display_range": "₹4L - ₹9L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Managing automated labeling systems is part of the job now."
    },
    "content": {
      "short_desc": "Manages a team of phlebotomists in a hospital or lab.",
      "long_desc": "Phlebotomy Supervisors run the blood draw center. You schedule shifts, train new staff on painless needle insertion, and ensure samples are labeled correctly. You handle the tough patient cases.",
      "day_in_life": ["Create staff schedules", "Handle patient complaints", "Train new hires"],
      "tags": ["Healthcare", "Management", "Lab"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["blood", "manager", "lab", "nurse"],
      "related_career_ids": ["health_phlebotomist", "science_lab_manager"]
    }
  },
  {
    "id": "biz_procurement_clerk",
    "title": "Procurement Clerk",
    "domain": "Business",
    "slug": "procurement-clerk",
    "match_profile": {
      "interests": ["buying", "forms", "order", "shopping"],
      "personality": ["organized", "routine_oriented", "detail_oriented", "steady"],
      "work_style": ["office", "paperwork_heavy", "routine", "support"],
      "deal_breakers": ["negotiation", "strategy", "chaos"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Business / Admin",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 500000,
      "display_range": "₹2.5L - ₹5L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "High",
      "future_trend": "AI ordering systems are automating this role rapidly."
    },
    "content": {
      "short_desc": "Processes purchase orders and tracks company supplies.",
      "long_desc": "Procurement Clerks handle the paperwork of buying. You fill out purchase orders, track deliveries, and match invoices to receipts. It is an entry-level role in the supply chain world.",
      "day_in_life": ["Create purchase orders", "Call vendors for delivery updates", "Check invoices"],
      "tags": ["Business", "Admin", "Entry Level"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["admin", "buying", "clerk", "office"],
      "related_career_ids": ["biz_procurement_manager", "service_library_assistant"]
    }
  },
  {
    "id": "trade_insulation_installer",
    "title": "Insulation Installer",
    "domain": "Skilled Trade",
    "slug": "insulation-installer",
    "match_profile": {
      "interests": ["building", "energy_efficiency", "manual_work", "hidden_work"],
      "personality": ["hardworking", "tolerant", "fast", "independent"],
      "work_style": ["attic/walls", "itchy", "physical", "hidden"],
      "deal_breakers": ["claustrophobia", "heat", "office_job"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "On-job Training",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 600000,
      "display_range": "₹2.5L - ₹6L per year",
      "pay_structure": "Wage"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Green building grants are driving huge demand for retrofitting homes."
    },
    "content": {
      "short_desc": "Installs materials to keep buildings warm or cool.",
      "long_desc": "Insulation Installers make homes efficient. You spray foam or roll fiberglass into walls and attics. It is hot, itchy work, but essential for lowering energy bills and saving the planet.",
      "day_in_life": ["Measure wall cavities", "Spray foam insulation", "Install vapor barriers"],
      "tags": ["Trade", "Green", "Construction"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["construction", "green", "energy", "labor"],
      "related_career_ids": ["trade_drywall_finisher", "trade_hvac_technician"]
    }
  },
  {
    "id": "science_microbiologist_research",
    "title": "Research Microbiologist",
    "domain": "Science",
    "slug": "research-microbiologist",
    "match_profile": {
      "interests": ["discovery", "bacteria", "experiments", "writing"],
      "personality": ["curious", "intellectual", "patient", "resilient"],
      "work_style": ["lab", "project_based", "grant_funded", "academic"],
      "deal_breakers": ["routine_testing", "clinical_work", "quick_money"]
    },
    "requirements": {
      "education_level": "doctorate",
      "degree_field": "PhD Microbiology",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 700000,
      "max": 2000000,
      "display_range": "₹7L - ₹20L per year",
      "pay_structure": "Salary / Grants"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Antibiotic resistance research is a top global priority."
    },
    "content": {
      "short_desc": "Conducts experiments to understand microbes and create new knowledge.",
      "long_desc": "Research Microbiologists are explorers of the microscopic world. Unlike lab techs who run routine tests, you design experiments to find new antibiotics or understand how bacteria talk to each other.",
      "day_in_life": ["Design novel experiments", "Analyze bacterial gene expression", "Publish in journals"],
      "tags": ["Science", "Research", "Biology"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["science", "research", "bacteria", "phd"],
      "related_career_ids": ["science_microbiologist", "science_biomedical_researcher"]
    }
  },
  {
    "id": "service_chauffeur",
    "title": "Private Chauffeur",
    "domain": "Service",
    "slug": "chauffeur",
    "match_profile": {
      "interests": ["driving", "luxury_cars", "service", "privacy"],
      "personality": ["discreet", "punctual", "calm", "safe"],
      "work_style": ["car", "waiting", "service_oriented", "solitary"],
      "deal_breakers": ["road_rage", "chatting", "unpredictable_hours"]
    },
    "requirements": {
      "education_level": "license",
      "degree_field": "Professional Driving License",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1000000,
      "display_range": "₹3L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Medium",
      "future_trend": "Self-driving luxury cars will eventually replace this, but service remains key."
    },
    "content": {
      "short_desc": "Drives clients in luxury vehicles.",
      "long_desc": "Chauffeurs provide luxury travel. You drive high-end cars for executives or wealthy families. It isn't just driving; it's about opening doors, handling luggage, and knowing the fastest route without GPS.",
      "day_in_life": ["Clean and polish vehicle", "Drive client to meetings", "Wait on standby"],
      "tags": ["Service", "Driving", "Luxury"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["driver", "car", "luxury", "vip"],
      "related_career_ids": ["service_personal_assistant", "transport_fleet_manager"]
    }
  },
  {
    "id": "service_emergency_dispatcher",
    "title": "911 / Emergency Dispatcher",
    "domain": "Service",
    "slug": "911-dispatcher",
    "match_profile": {
      "interests": ["helping_people", "crisis_management", "communication", "safety"],
      "personality": ["calm_under_pressure", "decisive", "multitasker", "resilient"],
      "work_style": ["call_center", "high_stress", "sedentary", "shift_work"],
      "deal_breakers": ["panic", "emotional_fragility", "silence"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Emergency Certifications",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 700000,
      "display_range": "₹3L - ₹7L per year",
      "pay_structure": "Salary + Overtime"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "AI assists with call routing, but human empathy is irreplaceable during crises."
    },
    "content": {
      "short_desc": "Answers emergency calls and dispatches police, fire, or medics.",
      "long_desc": "Dispatchers are the first line of help. You take calls from panicked people, keep them calm, and send the right help immediately. It is emotionally taxing but saves lives every day.",
      "day_in_life": ["Answer 911 calls", "Track police locations", "Instruct CPR over phone"],
      "tags": ["Service", "Emergency", "Essential"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["911", "police", "ambulance", "call_center"],
      "related_career_ids": ["govt_police_officer", "health_paramedic"]
    }
  },
  {
    "id": "trade_power_lineman",
    "title": "Electrical Power-Line Installer",
    "domain": "Skilled Trade",
    "slug": "lineman",
    "match_profile": {
      "interests": ["electricity", "heights", "outdoors", "danger"],
      "personality": ["brave", "strong", "team_player", "reliable"],
      "work_style": ["outdoors", "extreme_heights", "hazardous", "physical"],
      "deal_breakers": ["fear_of_heights", "weakness", "office"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Apprenticeship",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Wage + Hazard Pay"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Grid modernization for renewable energy requires massive workforce."
    },
    "content": {
      "short_desc": "Installs and repairs high-voltage power lines.",
      "long_desc": "Linemen keep the lights on. You climb tall poles or use bucket trucks to fix high-voltage wires, often during storms. It is one of the most dangerous and highest-paying trades.",
      "day_in_life": ["Climb utility poles", "Repair storm-damaged lines", "Install transformers"],
      "tags": ["Trade", "High Pay", "Danger"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["electricity", "danger", "grid", "power"],
      "related_career_ids": ["trade_electrician", "eng_electrical_engineer"]
    }
  },
  {
    "id": "health_nuclear_medicine_tech",
    "title": "Nuclear Medicine Technologist",
    "domain": "Healthcare",
    "slug": "nuclear-medicine-tech",
    "match_profile": {
      "interests": ["physics", "medicine", "technology", "imaging"],
      "personality": ["careful", "precise", "technical", "patient"],
      "work_style": ["hospital", "radiation_safety", "technical", "patient_facing"],
      "deal_breakers": ["radiation_fear", "imprecision", "rushing"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Nuclear Medicine Tech",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1200000,
      "display_range": "₹5L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "New radiopharmaceuticals for cancer detection are expanding the field."
    },
    "content": {
      "short_desc": "Administers radioactive drugs for imaging and treatment.",
      "long_desc": "Nuclear Med Techs use radiation to see inside the body. You inject patients with radioactive tracers and operate scanners to find cancer or heart defects. You combine nursing skills with nuclear physics.",
      "day_in_life": ["Prepare radioactive isotopes", "Operate PET/CT scanners", "Monitor patient safety"],
      "tags": ["Healthcare", "Tech", "Science"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["radiation", "scan", "cancer", "hospital"],
      "related_career_ids": ["health_radiologist", "health_mri_technologist"]
    }
  },
  {
    "id": "science_perfumer",
    "title": "Perfumer (The Nose)",
    "domain": "Science",
    "slug": "perfumer",
    "match_profile": {
      "interests": ["scent", "chemistry", "art", "luxury"],
      "personality": ["sensory", "creative", "patient", "memory_focused"],
      "work_style": ["lab", "olfactory", "creative", "solitary"],
      "deal_breakers": ["allergies", "anosmia", "smoking"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Chemistry / Perfumery School",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 3000000,
      "display_range": "₹8L - ₹30L per year",
      "pay_structure": "Salary + Royalties"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Medium",
      "future_trend": "AI is suggesting scent combinations, but human 'noses' finalize the art."
    },
    "content": {
      "short_desc": "Creates fragrances for perfumes, soaps, and candles.",
      "long_desc": "Perfumers are artists of smell. You memorize thousands of scents and mix chemicals to create new fragrances. It requires a rare talent and years of training in chemistry and art.",
      "day_in_life": ["Smell essential oils", "Mix scent formulas", "Evaluate fragrance longevity"],
      "tags": ["Science", "Art", "Luxury"]
    },
    "meta": {
      "popularity_rank": 90,
      "search_keywords": ["scent", "fragrance", "chemistry", "art"],
      "related_career_ids": ["science_chemist", "service_sommelier"]
    }
  },
  {
    "id": "science_ballistics_expert",
    "title": "Forensic Ballistics Expert",
    "domain": "Science",
    "slug": "ballistics-expert",
    "match_profile": {
      "interests": ["guns", "physics", "crime", "puzzles"],
      "personality": ["detail_oriented", "objective", "methodical", "patient"],
      "work_style": ["lab/range", "investigative", "microscopic", "high_stakes"],
      "deal_breakers": ["gun_shy", "carelessness", "politics"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Forensic Science / Physics",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Govt Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Digital matching databases aid work but expert testimony is key."
    },
    "content": {
      "short_desc": "Analyzes bullets and firearms to solve crimes.",
      "long_desc": "Ballistics Experts match the bullet to the gun. You test fire weapons, analyze bullet striations under a microscope, and calculate trajectories to tell police where a shooter stood.",
      "day_in_life": ["Test fire recovered guns", "Compare bullet markings", "Testify in court"],
      "tags": ["Science", "Law", "Crime"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["guns", "csi", "police", "forensics"],
      "related_career_ids": ["science_forensic_scientist", "govt_police_officer"]
    }
  },
  {
    "id": "science_urban_ecologist",
    "title": "Urban Ecologist",
    "domain": "Science",
    "slug": "urban-ecologist",
    "match_profile": {
      "interests": ["cities", "nature", "sustainability", "animals"],
      "personality": ["innovative", "observant", "practical", "green"],
      "work_style": ["city/field", "research", "planning", "outdoor"],
      "deal_breakers": ["pure_wildnerness", "desk_only", "pollution"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Ecology / Urban Planning",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Making cities 'green' to combat heat islands is a major priority."
    },
    "content": {
      "short_desc": "Studies how nature interacts with city environments.",
      "long_desc": "Urban Ecologists bring nature to the concrete jungle. You study how pigeons, rats, and trees survive in cities and design parks or green roofs to improve biodiversity and human health.",
      "day_in_life": ["Survey city wildlife", "Design rooftop gardens", "Advise city planners"],
      "tags": ["Science", "City", "Green"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["city", "nature", "green", "environment"],
      "related_career_ids": ["govt_urban_planner", "arts_landscape_architect"]
    }
  },
  {
    "id": "health_dance_therapist",
    "title": "Dance Movement Therapist",
    "domain": "Healthcare",
    "slug": "dance-therapist",
    "match_profile": {
      "interests": ["dance", "psychology", "healing", "movement"],
      "personality": ["expressive", "empathetic", "physical", "creative"],
      "work_style": ["studio/clinic", "active", "emotional", "group_work"],
      "deal_breakers": ["sitting_still", "rigidity", "paperwork"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Dance Therapy",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 900000,
      "display_range": "₹3L - ₹9L per year",
      "pay_structure": "Salary / Hourly"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Effective for trauma recovery where words fail."
    },
    "content": {
      "short_desc": "Uses movement and dance to treat mental and physical health.",
      "long_desc": "Dance Therapists heal through motion. You work with trauma survivors, the elderly, or children to help them express emotions through their bodies. It connects physical health with mental well-being.",
      "day_in_life": ["Lead movement workshops", "Observe patient body language", "Plan therapeutic dances"],
      "tags": ["Healthcare", "Creative", "Active"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["dance", "therapy", "mental_health", "art"],
      "related_career_ids": ["arts_choreographer", "health_art_therapist"]
    }
  },
  {
    "id": "trade_auto_body_repair",
    "title": "Automotive Body Repairer",
    "domain": "Skilled Trade",
    "slug": "auto-body",
    "match_profile": {
      "interests": ["cars", "painting", "sculpting", "fixing"],
      "personality": ["perfectionist", "patient", "tactile", "visual"],
      "work_style": ["workshop", "fumes/dust", "artistic", "hands_on"],
      "deal_breakers": ["clean_clothes", "office", "theory"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Auto Body Repair",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Wage + Commission"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Carbon fiber bodies require new specialized repair skills."
    },
    "content": {
      "short_desc": "Repairs and paints damaged vehicle bodies.",
      "long_desc": "Auto Body Techs make crashed cars look new. You hammer out dents, replace panels, and mix paint to match perfectly. It is part mechanic, part artist.",
      "day_in_life": ["Sand car panels", "Spray paint in booth", "Hammer out dents"],
      "tags": ["Trade", "Cars", "Creative"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["car", "paint", "crash", "repair"],
      "related_career_ids": ["trade_mechanic", "creative_industrial_designer"]
    }
  },
  {
    "id": "science_hydrographic_surveyor",
    "title": "Hydrographic Surveyor",
    "domain": "Science",
    "slug": "hydrographic-surveyor",
    "match_profile": {
      "interests": ["ocean", "maps", "technology", "boats"],
      "personality": ["precise", "technical", "adventurous", "patient"],
      "work_style": ["boat/ship", "offshore", "technical", "mapping"],
      "deal_breakers": ["seasickness", "office_only", "imprecision"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Geomatics / Marine Science",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1500000,
      "display_range": "₹6L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Autonomous underwater vehicles (AUVs) are changing data collection."
    },
    "content": {
      "short_desc": "Maps the ocean floor and underwater terrain.",
      "long_desc": "Hydrographic Surveyors map the invisible world underwater. You use sonar to create maps for shipping channels, oil rigs, or wind farms. You ensure ships don't crash into rocks.",
      "day_in_life": ["Operate sonar equipment", "Analyze depth data", "Create nautical charts"],
      "tags": ["Science", "Ocean", "Tech"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["ocean", "map", "sonar", "marine"],
      "related_career_ids": ["science_cartographer", "science_marine_technician"]
    }
  },
  {
    "id": "arts_ethnomusicologist",
    "title": "Ethnomusicologist",
    "domain": "Arts & Design",
    "slug": "ethnomusicologist",
    "match_profile": {
      "interests": ["music", "culture", "anthropology", "travel"],
      "personality": ["curious", "open_minded", "academic", "musical"],
      "work_style": ["field/university", "research", "listening", "travel"],
      "deal_breakers": ["pop_culture_only", "staying_home", "rigidity"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Ethnomusicology",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary / Grants"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Low",
      "future_trend": "Preserving endangered musical traditions is a key cultural mission."
    },
    "content": {
      "short_desc": "Studies music in its cultural and social context.",
      "long_desc": "Ethnomusicologists study the music of the world. You travel to remote villages or urban centers to record and understand how music shapes culture. It is where music meets anthropology.",
      "day_in_life": ["Record traditional songs", "Interview musicians", "Write academic articles"],
      "tags": ["Arts", "Research", "Culture"]
    },
    "meta": {
      "popularity_rank": 95,
      "search_keywords": ["music", "culture", "history", "research"],
      "related_career_ids": ["arts_music_teacher", "science_archaeologist"]
    }
  },
  {
    "id": "biz_executive_recruiter",
    "title": "Executive Search Consultant (Headhunter)",
    "domain": "Business",
    "slug": "headhunter",
    "match_profile": {
      "interests": ["people", "sales", "networking", "psychology"],
      "personality": ["persuasive", "confident", "strategic", "social"],
      "work_style": ["office", "phone_heavy", "high_stakes", "commission"],
      "deal_breakers": ["introversion", "low_risk", "admin_work"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Business / Psychology",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1500000,
      "max": 5000000,
      "display_range": "₹15L - ₹50L+ (Commission)",
      "pay_structure": "Commission / Retainer"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "AI finds resumes, but humans must persuade CEOs to switch jobs."
    },
    "content": {
      "short_desc": "Finds and recruits C-level executives for companies.",
      "long_desc": "Headhunters find the boss. You are hired to find a new CEO or VP for a company. You network, call top talent at other firms, and convince them to switch jobs. It is high-level sales.",
      "day_in_life": ["Cold call executives", "Interview CEO candidates", "Negotiate salary packages"],
      "tags": ["Business", "Sales", "HR"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["recruiter", "sales", "ceo", "hr"],
      "related_career_ids": ["hr_technical_recruiter", "sales_b2b_sales_manager"]
    }
  },
  {
    "id": "biz_renewable_consultant",
    "title": "Renewable Energy Consultant",
    "domain": "Business",
    "slug": "renewable-consultant",
    "match_profile": {
      "interests": ["green_energy", "business", "strategy", "environment"],
      "personality": ["forward_thinking", "analytical", "persuasive", "strategic"],
      "work_style": ["office/client", "advisory", "project_based", "impact"],
      "deal_breakers": ["fossil_fuels", "stagnation", "routine"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Energy Mgmt / MBA",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 2500000,
      "display_range": "₹8L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Low",
      "future_trend": "Helping companies transition to net-zero is a massive industry."
    },
    "content": {
      "short_desc": "Advises companies on switching to green energy sources.",
      "long_desc": "Renewable Consultants help businesses go green profitably. You analyze energy usage and recommend solar, wind, or efficiency upgrades. You help the planet and the bottom line.",
      "day_in_life": ["Analyze energy bills", "Present solar ROI strategy", "Research government grants"],
      "tags": ["Business", "Green", "Strategy"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["green", "energy", "solar", "consultant"],
      "related_career_ids": ["biz_sustainability_manager", "eng_wind_energy_engineer"]
    }
  },
  {
    "id": "science_entomologist",
    "title": "Entomologist",
    "domain": "Science",
    "slug": "entomologist",
    "match_profile": {
      "interests": ["insects", "nature", "biology", "research"],
      "personality": ["curious", "patient", "observant", "detail_oriented"],
      "work_style": ["field/lab", "microscopic", "outdoor", "research"],
      "deal_breakers": ["fear_of_bugs", "squeamishness", "office_only"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Entomology / Biology",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Critical for protecting crops from pests and studying insect decline."
    },
    "content": {
      "short_desc": "Studies insects and their impact on the environment.",
      "long_desc": "Entomologists study bugs. You might research how bees pollinate crops, how mosquitoes spread disease, or how to stop termites. You work in labs, farms, or forests.",
      "day_in_life": ["Collect insect samples", "Test natural pesticides", "Study insect behavior"],
      "tags": ["Science", "Nature", "Research"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["bugs", "insects", "biology", "nature"],
      "related_career_ids": ["science_zoologist", "agri_soil_scientist"]
    }
  },
  {
    "id": "science_flavorist",
    "title": "Flavorist",
    "domain": "Science",
    "slug": "flavorist",
    "match_profile": {
      "interests": ["food", "chemistry", "taste", "creativity"],
      "personality": ["sensory", "innovative", "meticulous", "scientific"],
      "work_style": ["lab", "tasting", "chemical", "creative"],
      "deal_breakers": ["bland_food", "smoking", "allergies"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Food Chemistry / Training",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Plant-based meat needing 'real meat' flavor is driving innovation."
    },
    "content": {
      "short_desc": "Creates artificial and natural flavors for food products.",
      "long_desc": "Flavorists engineer taste. You mix chemicals to create 'strawberry' flavor for candy or 'smoky' flavor for chips. It requires a refined palate and deep chemistry knowledge.",
      "day_in_life": ["Taste test flavor prototypes", "Mix chemical compounds", "Adjust sweetness levels"],
      "tags": ["Science", "Food", "Chemistry"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["food", "flavor", "chemistry", "taste"],
      "related_career_ids": ["science_food_scientist", "science_perfumer"]
    }
  },
  {
    "id": "tech_digital_forensics",
    "title": "Digital Forensics Analyst",
    "domain": "Technology",
    "slug": "digital-forensics",
    "match_profile": {
      "interests": ["cybercrime", "investigation", "data", "law"],
      "personality": ["suspicious", "thorough", "technical", "patient"],
      "work_style": ["lab", "investigative", "detail_oriented", "legal"],
      "deal_breakers": ["hacking_illegally", "rushing", "carelessness"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Cybersecurity / Forensics",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Rising cybercrime makes digital evidence recovery essential."
    },
    "content": {
      "short_desc": "Recovers data from computers and phones for legal cases.",
      "long_desc": "Digital Forensics Analysts find the deleted proof. You recover erased emails, hacked files, or browser history from seized computers to catch criminals. You work for police or private firms.",
      "day_in_life": ["Recover deleted hard drive files", "Analyze malware traces", "Write reports for court"],
      "tags": ["Tech", "Law", "Security"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["cyber", "police", "hacker", "data"],
      "related_career_ids": ["tech_cybersecurity_analyst", "govt_police_officer"]
    }
  },
  {
    "id": "biz_revenue_manager_hotel",
    "title": "Hotel Revenue Manager",
    "domain": "Business",
    "slug": "hotel-revenue-manager",
    "match_profile": {
      "interests": ["money", "data", "travel", "strategy"],
      "personality": ["analytical", "competitive", "strategic", "decisive"],
      "work_style": ["office", "data_driven", "pricing", "dynamic"],
      "deal_breakers": ["guest_service", "physical_work", "empathy"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Hospitality / Finance",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 2000000,
      "display_range": "₹6L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "AI sets base prices, but managers decide strategy for events."
    },
    "content": {
      "short_desc": "Optimizes room pricing to maximize hotel profits.",
      "long_desc": "Revenue Managers decide the price of a room. You analyze demand, local events, and competitors to set prices that fill the hotel at the highest possible rate. It is data analytics for travel.",
      "day_in_life": ["Analyze competitor pricing", "Adjust room rates", "Forecast occupancy levels"],
      "tags": ["Business", "Hospitality", "Data"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["hotel", "money", "pricing", "data"],
      "related_career_ids": ["biz_pricing_analyst", "hospitality_gm"]
    }
  },
  {
    "id": "service_pit_boss",
    "title": "Casino Pit Boss",
    "domain": "Service",
    "slug": "pit-boss",
    "match_profile": {
      "interests": ["gambling", "management", "security", "people"],
      "personality": ["authoritative", "observant", "fair", "tough"],
      "work_style": ["casino_floor", "standing", "supervisory", "night_shifts"],
      "deal_breakers": ["sitting", "trusting", "quiet"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Casino Experience",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1500000,
      "display_range": "₹6L - ₹15L per year",
      "pay_structure": "Salary + Tips"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Human oversight of dealers is required by law."
    },
    "content": {
      "short_desc": "Supervises dealers and game operations on a casino floor.",
      "long_desc": "Pit Bosses run the casino floor. You watch the dealers, settle disputes with angry players, and watch for cheaters. You ensure the house rules are followed and the money is safe.",
      "day_in_life": ["Monitor dealer performance", "Approve large payouts", "Resolve player disputes"],
      "tags": ["Service", "Management", "Security"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["casino", "manager", "cards", "gambling"],
      "related_career_ids": ["service_casino_manager", "service_casino_dealer"]
    }
  },
  {
    "id": "transport_cruise_captain",
    "title": "Cruise Ship Captain",
    "domain": "Transportation",
    "slug": "cruise-captain",
    "match_profile": {
      "interests": ["ships", "leadership", "ocean", "tourism"],
      "personality": ["charismatic", "responsible", "decisive", "public"],
      "work_style": ["ship_bridge", "high_status", "social", "travel"],
      "deal_breakers": ["seasickness", "private_life", "junior_role"]
    },
    "requirements": {
      "education_level": "license",
      "degree_field": "Master Mariner",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 3000000,
      "max": 10000000,
      "display_range": "₹30L - ₹1Cr+ (Tax Free often)",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Mega-ships require highly experienced human command."
    },
    "content": {
      "short_desc": "Commands a large cruise vessel and its crew.",
      "long_desc": "The Captain is the CEO of the floating city. You navigate the ship, manage hundreds of crew, and host dinners for passengers. It is the pinnacle of a maritime career, mixing technical skill with PR.",
      "day_in_life": ["Navigate ship docking", "Host Captain's Dinner", "Oversee safety drills"],
      "tags": ["Transport", "Leadership", "Travel"]
    },
    "meta": {
      "popularity_rank": 20,
      "search_keywords": ["ship", "captain", "cruise", "travel"],
      "related_career_ids": ["transport_ship_captain", "hospitality_gm"]
    }
  },
  {
    "id": "transport_train_conductor",
    "title": "Train Conductor",
    "domain": "Transportation",
    "slug": "train-conductor",
    "match_profile": {
      "interests": ["trains", "safety", "people", "travel"],
      "personality": ["authoritative", "friendly", "responsible", "alert"],
      "work_style": ["train", "active", "public_facing", "travel"],
      "deal_breakers": ["desk_job", "silence", "staying_home"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Railway Training",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Govt Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Ticketing is automated, but safety and passenger management remain."
    },
    "content": {
      "short_desc": "Manages passenger safety and ticketing on trains.",
      "long_desc": "Conductors are in charge of the train (behind the driver). You check tickets, help passengers, and ensure safety during the journey. You communicate with the driver and station staff.",
      "day_in_life": ["Check passenger tickets", "Announce stations", "Ensure safe boarding"],
      "tags": ["Transport", "Service", "Travel"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["train", "railway", "ticket", "travel"],
      "related_career_ids": ["transport_train_driver", "transport_bus_driver"]
    }
  },
  {
    "id": "transport_flight_engineer",
    "title": "Flight Engineer",
    "domain": "Transportation",
    "slug": "flight-engineer",
    "match_profile": {
      "interests": ["aviation", "engines", "monitoring", "physics"],
      "personality": ["technical", "focused", "calm", "analytical"],
      "work_style": ["cockpit", "technical", "monitoring", "travel"],
      "deal_breakers": ["flying_the_plane", "creativity", "sales"]
    },
    "requirements": {
      "education_level": "license",
      "degree_field": "Flight Engineer License",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 2500000,
      "display_range": "₹10L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "High",
      "future_trend": "Modern jets automate this role; mostly exists in older cargo/military planes."
    },
    "content": {
      "short_desc": "Monitors aircraft systems during flight.",
      "long_desc": "Flight Engineers sit in the cockpit of older or large planes. You monitor fuel, engines, and pressure systems while the pilots fly. You are the mechanic in the sky.",
      "day_in_life": ["Monitor engine gauges", "Calculate fuel burn", "Troubleshoot system alerts"],
      "tags": ["Aviation", "Tech", "Travel"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["plane", "pilot", "mechanic", "aviation"],
      "related_career_ids": ["transport_commercial_pilot", "trade_aircraft_mechanic"]
    }
  },
  {
    "id": "health_perfusion_assistant",
    "title": "Perfusion Assistant",
    "domain": "Healthcare",
    "slug": "perfusion-assistant",
    "match_profile": {
      "interests": ["surgery", "technology", "support", "hospitals"],
      "personality": ["reliable", "attentive", "calm", "technical"],
      "work_style": ["operating_room", "team_based", "technical", "high_stress"],
      "deal_breakers": ["blood", "unpredictability", "low_tech"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Perfusion Tech / Biology",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Increasing heart surgeries due to aging population."
    },
    "content": {
      "short_desc": "Assists perfusionists during heart surgeries.",
      "long_desc": "Perfusion Assistants support the heart-lung machine team. You ensure supplies are ready, help set up the bypass machine, and monitor equipment during open-heart surgery. It is a vital support role in the OR.",
      "day_in_life": ["Set up tubing packs", "Clean perfusion equipment", "Assist with patient monitoring"],
      "tags": ["Healthcare", "Surgery", "Tech"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["heart", "surgery", "assistant", "medical"],
      "related_career_ids": ["health_perfusionist", "health_surgical_technologist"]
    }
  },
  {
    "id": "trade_railway_technician",
    "title": "Railway Technician",
    "domain": "Skilled Trade",
    "slug": "railway-tech",
    "match_profile": {
      "interests": ["trains", "mechanics", "travel", "repair"],
      "personality": ["practical", "strong", "safety_conscious", "technical"],
      "work_style": ["railyard/track", "physical", "hazardous", "shift_work"],
      "deal_breakers": ["office", "clean_work", "night_shifts"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "ITI Railway / Mech",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 900000,
      "display_range": "₹3L - ₹9L per year",
      "pay_structure": "Salary + Allowances"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "High-speed rail projects increasing demand for skilled techs."
    },
    "content": {
      "short_desc": "Inspects and repairs train engines and tracks.",
      "long_desc": "Railway Techs keep trains moving. You fix diesel locomotives, repair track signals, or maintain the rails themselves. It is heavy, industrial work often done outdoors or in large depots.",
      "day_in_life": ["Inspect train brakes", "Replace track sections", "Test signal electronics"],
      "tags": ["Trade", "Transport", "Mechanic"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["train", "railway", "repair", "mechanic"],
      "related_career_ids": ["transport_train_driver", "trade_diesel_mechanic"]
    }
  },
  {
    "id": "arts_floral_designer",
    "title": "Floral Designer",
    "domain": "Arts & Design",
    "slug": "floral-designer",
    "match_profile": {
      "interests": ["flowers", "events", "art", "nature"],
      "personality": ["creative", "visual", "patient", "tactile"],
      "work_style": ["studio", "visual", "event_focused", "creative"],
      "deal_breakers": ["hay_fever", "computers", "corporate"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "Experience / Design Course",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 800000,
      "display_range": "₹2.5L - ₹8L per year",
      "pay_structure": "Salary / Project"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Sustainable, locally sourced florals are the new luxury standard."
    },
    "content": {
      "short_desc": "Creates artistic flower arrangements for events.",
      "long_desc": "Floral Designers are artists with plants. You design massive installations for weddings or simple bouquets for gifts. You understand color theory, structure, and botany.",
      "day_in_life": ["Source fresh flowers", "Design wedding arches", "Create centerpieces"],
      "tags": ["Creative", "Events", "Nature"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["flowers", "wedding", "design", "art"],
      "related_career_ids": ["arts_florist", "service_wedding_planner"]
    }
  },
  {
    "id": "service_concierge_security",
    "title": "Concierge Security Officer",
    "domain": "Service",
    "slug": "concierge-security",
    "match_profile": {
      "interests": ["security", "helping_people", "hospitality", "safety"],
      "personality": ["alert", "friendly", "diplomatic", "responsible"],
      "work_style": ["lobby", "public_facing", "standing", "service"],
      "deal_breakers": ["danger", "rudeness", "isolation"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Security Training",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 600000,
      "display_range": "₹2.5L - ₹6L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Hybrid role combining security with front-desk reception."
    },
    "content": {
      "short_desc": "Provides security and customer service in luxury buildings.",
      "long_desc": "Concierge Security Officers protect high-end apartments or offices. You aren't just a guard; you greet guests, accept packages, and ensure residents feel safe and welcomed.",
      "day_in_life": ["Monitor lobby access", "Greet residents", "Respond to alarms"],
      "tags": ["Service", "Security", "Hospitality"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["guard", "security", "hotel", "service"],
      "related_career_ids": ["service_hotel_concierge", "service_security_guard"]
    }
  },
  {
    "id": "science_lab_technician",
    "title": "General Lab Technician",
    "domain": "Science",
    "slug": "lab-tech",
    "match_profile": {
      "interests": ["science", "testing", "routine", "accuracy"],
      "personality": ["methodical", "careful", "focused", "quiet"],
      "work_style": ["lab", "repetitive", "technical", "controlled"],
      "deal_breakers": ["creativity", "messiness", "public_speaking"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "MLT / Science",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 600000,
      "display_range": "₹2.5L - ₹6L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Automation handles high volume, but manual testing remains for complex cases."
    },
    "content": {
      "short_desc": "Performs routine tests in scientific or medical labs.",
      "long_desc": "Lab Technicians generate data. You run blood tests, test water quality, or analyze chemical samples. You follow strict recipes (protocols) to ensure results are accurate.",
      "day_in_life": ["Calibrate instruments", "Run chemical assays", "Record test results"],
      "tags": ["Science", "Lab", "Routine"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["lab", "science", "test", "medical"],
      "related_career_ids": ["science_microbiology_lab_tech", "health_phlebotomist"]
    }
  },
  {
    "id": "trade_appliance_repair",
    "title": "Appliance Repair Technician",
    "domain": "Skilled Trade",
    "slug": "appliance-repair",
    "match_profile": {
      "interests": ["fixing_things", "electronics", "homes", "mechanics"],
      "personality": ["problem_solver", "practical", "independent", "helpful"],
      "work_style": ["client_homes", "technical", "hands_on", "mobile"],
      "deal_breakers": ["office", "theory", "micromanagement"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Vocational Training",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Wage / Commission"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Smart appliances require IT skills for diagnostics."
    },
    "content": {
      "short_desc": "Repairs household appliances like fridges and washing machines.",
      "long_desc": "Appliance Techs fix the modern home. You visit houses to diagnose why the fridge isn't cooling or the washer won't spin. It requires knowledge of motors, electronics, and plumbing.",
      "day_in_life": ["Diagnose circuit board failures", "Replace washing machine pumps", "Test refrigerator compressors"],
      "tags": ["Trade", "Repair", "Tech"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["repair", "home", "technician", "mechanic"],
      "related_career_ids": ["trade_hvac_technician", "trade_electrician"]
    }
  },
  {
    "id": "tech_help_desk",
    "title": "IT Help Desk Technician",
    "domain": "Technology",
    "slug": "help-desk",
    "match_profile": {
      "interests": ["computers", "helping", "problem_solving", "patience"],
      "personality": ["friendly", "patient", "technical", "calm"],
      "work_style": ["office/call_center", "reactive", "support", "sedentary"],
      "deal_breakers": ["coding", "angry_users", "deep_strategy"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "IT / CompTIA",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 700000,
      "display_range": "₹3L - ₹7L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "AI chatbots handle password resets; humans handle complex hardware issues."
    },
    "content": {
      "short_desc": "Provides first-level technical support to computer users.",
      "long_desc": "Help Desk Techs are the IT saviors. You answer calls from employees who can't print or forgot their passwords. You solve simple problems quickly and escalate hard ones.",
      "day_in_life": ["Reset user passwords", "Install printer drivers", "Log support tickets"],
      "tags": ["Tech", "Support", "Entry Level"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["it", "support", "computer", "help"],
      "related_career_ids": ["tech_it_support_specialist", "tech_sysadmin"]
    }
  },
  {
    "id": "biz_office_manager",
    "title": "Office Manager",
    "domain": "Business",
    "slug": "office-manager",
    "match_profile": {
      "interests": ["organization", "people", "logistics", "planning"],
      "personality": ["friendly", "organized", "multitasker", "responsible"],
      "work_style": ["office", "social", "administrative", "varied"],
      "deal_breakers": ["chaos", "silence", "mess"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Business Admin",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Remote work requires 'virtual office managers' to coordinate digital culture."
    },
    "content": {
      "short_desc": "Ensures the smooth running of an office environment.",
      "long_desc": "Office Managers are the glue of the company. You handle supplies, organize parties, manage receptionists, and ensure the printer works. You make the office a nice place to be.",
      "day_in_life": ["Order office supplies", "Plan team lunches", "Coordinate facility repairs"],
      "tags": ["Business", "Admin", "Management"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["admin", "manager", "office", "hr"],
      "related_career_ids": ["service_personal_assistant", "mgmt_hr_manager"]
    }
  },
  {
    "id": "health_activity_coordinator",
    "title": "Activity Coordinator (Elderly Care)",
    "domain": "Healthcare",
    "slug": "activity-coordinator",
    "match_profile": {
      "interests": ["elderly", "fun", "planning", "social"],
      "personality": ["energetic", "patient", "creative", "social"],
      "work_style": ["nursing_home", "active", "social", "supportive"],
      "deal_breakers": ["sadness", "desk_work", "medical_procedures"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Social Work / Recreation",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 600000,
      "display_range": "₹2.5L - ₹6L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Aging population demands more social care roles."
    },
    "content": {
      "short_desc": "Plans social activities for residents in care homes.",
      "long_desc": "Activity Coordinators bring joy to the elderly. You plan bingo nights, exercise classes, and art sessions for nursing home residents. You improve their quality of life through fun.",
      "day_in_life": ["Lead group exercise", "Plan holiday parties", "Visit lonely residents"],
      "tags": ["Healthcare", "Social", "Fun"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["elderly", "care", "social", "fun"],
      "related_career_ids": ["health_recreational_therapist", "social_social_worker"]
    }
  },
  {
    "id": "arts_pottery_teacher",
    "title": "Pottery Instructor",
    "domain": "Arts & Design",
    "slug": "pottery-teacher",
    "match_profile": {
      "interests": ["clay", "teaching", "art", "people"],
      "personality": ["patient", "tactile", "encouraging", "creative"],
      "work_style": ["studio", "messy", "social", "hands_on"],
      "deal_breakers": ["clean_clothes", "computers", "silence"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Fine Arts",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 600000,
      "display_range": "₹2L - ₹6L per year",
      "pay_structure": "Hourly / Class Fee"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Hobby classes are booming as digital detox activities."
    },
    "content": {
      "short_desc": "Teaches students how to make pottery and ceramics.",
      "long_desc": "Pottery Instructors teach art. You run workshops where people learn to throw clay on a wheel or build hand-coiled pots. It is messy, fun, and relaxing work.",
      "day_in_life": ["Demonstrate throwing techniques", "Help students center clay", "Manage kiln firing"],
      "tags": ["Art", "Teaching", "Creative"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["art", "teacher", "clay", "pottery"],
      "related_career_ids": ["arts_ceramist", "edu_art_teacher"]
    }
  },
  {
    "id": "trade_bicycle_mechanic",
    "title": "Bicycle Mechanic",
    "domain": "Skilled Trade",
    "slug": "bicycle-mechanic",
    "match_profile": {
      "interests": ["bikes", "repair", "mechanics", "cycling"],
      "personality": ["practical", "detail_oriented", "active", "technical"],
      "work_style": ["workshop", "hands_on", "mechanical", "active"],
      "deal_breakers": ["office", "engines", "grease"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "Experience",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 500000,
      "display_range": "₹2L - ₹5L per year",
      "pay_structure": "Wage"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "E-bike maintenance requires new electronic repair skills."
    },
    "content": {
      "short_desc": "Repairs and maintains bicycles.",
      "long_desc": "Bike Mechanics keep cyclists rolling. You fix flat tires, tune gears, and build custom bikes. With the rise of expensive e-bikes, this trade is becoming more technical.",
      "day_in_life": ["Replace bike chains", "Tune gear shifters", "Diagnose e-bike batteries"],
      "tags": ["Trade", "Repair", "Active"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["bike", "repair", "mechanic", "cycle"],
      "related_career_ids": ["trade_mechanic", "trade_small_engine"]
    }
  },
  {
    "id": "service_dog_walker",
    "title": "Professional Dog Walker",
    "domain": "Service",
    "slug": "dog-walker",
    "match_profile": {
      "interests": ["dogs", "walking", "outdoors", "freedom"],
      "personality": ["energetic", "reliable", "animal_lover", "independent"],
      "work_style": ["outdoors", "physical", "active", "independent"],
      "deal_breakers": ["bad_weather", "office", "allergies"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "None",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 600000,
      "display_range": "₹2L - ₹6L per year",
      "pay_structure": "Hourly / Per Walk"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Apps like Rover are formalizing this gig economy role."
    },
    "content": {
      "short_desc": "Walks dogs for owners who are busy or at work.",
      "long_desc": "Dog Walkers get paid to exercise. You pick up dogs, take them to the park, and ensure they are safe and happy. It requires love for animals and willingness to work in rain or shine.",
      "day_in_life": ["Pick up dogs from homes", "Walk pack at park", "Clean up after pets"],
      "tags": ["Animals", "Service", "Active"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["dog", "pet", "walk", "animals"],
      "related_career_ids": ["service_pet_groomer", "service_zookeeper"]
    }
  },
  {
    "id": "service_pet_groomer",
    "title": "Pet Groomer",
    "domain": "Service",
    "slug": "pet-groomer",
    "match_profile": {
      "interests": ["animals", "style", "cleaning", "care"],
      "personality": ["patient", "gentle", "detail_oriented", "calm"],
      "work_style": ["salon", "physical", "messy", "animal_focused"],
      "deal_breakers": ["bites", "hair_everywhere", "rushing"]
    },
    "requirements": {
      "education_level": "certificate",
      "degree_field": "Grooming Course",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 700000,
      "display_range": "₹2.5L - ₹7L per year",
      "pay_structure": "Salary / Commission"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Mobile grooming vans are a popular new business model."
    },
    "content": {
      "short_desc": "Bathes and cuts the hair of dogs and cats.",
      "long_desc": "Pet Groomers make animals look good. You wash, dry, and trim the fur of pets. It requires patience to handle nervous animals and skill with scissors to create breed-specific cuts.",
      "day_in_life": ["Bathe dogs", "Trim nails", "Style fur cuts"],
      "tags": ["Animals", "Creative", "Service"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["dog", "grooming", "pet", "salon"],
      "related_career_ids": ["service_dog_walker", "health_vet_technician"]
    }
  },
  {
    "id": "biz_bookkeeper",
    "title": "Bookkeeper",
    "domain": "Business",
    "slug": "bookkeeper",
    "match_profile": {
      "interests": ["numbers", "organization", "routine", "records"],
      "personality": ["meticulous", "honest", "quiet", "reliable"],
      "work_style": ["office/remote", "data_entry", "routine", "quiet"],
      "deal_breakers": ["creativity", "public_speaking", "chaos"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Accounting / Commerce",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 250000,
      "max": 600000,
      "display_range": "₹2.5L - ₹6L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "High",
      "future_trend": "Automation does the entry; bookkeepers now review AI work."
    },
    "content": {
      "short_desc": "Records financial transactions for a business.",
      "long_desc": "Bookkeepers track every penny. You record sales and expenses in software like QuickBooks. You ensure the company's financial records are perfect for the accountant.",
      "day_in_life": ["Enter receipts into software", "Reconcile bank statements", "Process invoices"],
      "tags": ["Finance", "Admin", "Data"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["accounting", "finance", "data", "admin"],
      "related_career_ids": ["finance_tax_accountant", "biz_payroll_specialist"]
    }
  },
  {
    "id": "tech_seo_writer",
    "title": "SEO Content Writer",
    "domain": "Technology",
    "slug": "seo-writer",
    "match_profile": {
      "interests": ["writing", "google", "marketing", "keywords"],
      "personality": ["adaptable", "researcher", "concise", "strategic"],
      "work_style": ["remote", "computer_heavy", "writing", "structured"],
      "deal_breakers": ["creative_freedom", "poetry", "no_metrics"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Marketing / English",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Salary / Freelance"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "High",
      "future_trend": "Must evolve to 'AI Content Editor' to survive."
    },
    "content": {
      "short_desc": "Writes articles designed to rank high on Google search.",
      "long_desc": "SEO Writers write for algorithms and people. You write blog posts containing specific keywords so they appear on page 1 of Google. It is a mix of creativity and technical rules.",
      "day_in_life": ["Research keywords", "Write blog articles", "Optimize headlines"],
      "tags": ["Tech", "Writing", "Marketing"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["writing", "google", "marketing", "blog"],
      "related_career_ids": ["media_content_writer", "tech_seo_specialist"]
    }
  },
  {
    "id": "service_flight_attendant_private",
    "title": "Private Jet Flight Attendant",
    "domain": "Service",
    "slug": "private-flight-attendant",
    "match_profile": {
      "interests": ["luxury", "travel", "service", "flying"],
      "personality": ["discreet", "sophisticated", "adaptable", "charming"],
      "work_style": ["jet", "luxury", "unpredictable", "travel"],
      "deal_breakers": ["routine", "family_time", "economy_class"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Hospitality / Safety Training",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 1500000,
      "max": 4000000,
      "display_range": "₹15L - ₹40L per year",
      "pay_structure": "Salary / Daily Rate"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Booming private aviation market drives demand for elite service."
    },
    "content": {
      "short_desc": "Provides VIP service on private jets.",
      "long_desc": "Private Flight Attendants serve the 1%. You order 5-star catering, serve champagne, and ensure safety on private jets. It pays much better than commercial airlines but demands perfection.",
      "day_in_life": ["Order VIP catering", "Serve in-flight meals", "Ensure cabin safety"],
      "tags": ["Service", "Luxury", "Travel"]
    },
    "meta": {
      "popularity_rank": 30,
      "search_keywords": ["flight", "luxury", "travel", "vip"],
      "related_career_ids": ["transport_cabin_crew", "hospitality_gm"]
    }
  },
  {
    "id": "trade_solar_sales",
    "title": "Solar Sales Representative",
    "domain": "Sales",
    "slug": "solar-sales-rep",
    "match_profile": {
      "interests": ["green_energy", "money", "persuasion", "outdoors"],
      "personality": ["resilient", "energetic", "money_motivated", "social"],
      "work_style": ["field", "commission_only", "door_to_door", "independent"],
      "deal_breakers": ["rejection", "salary_security", "desk"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "Sales Training",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1500000,
      "display_range": "₹3L - ₹15L (Commission)",
      "pay_structure": "Commission"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Low",
      "future_trend": "High electricity bills drive homeowners to solar."
    },
    "content": {
      "short_desc": "Sells solar panels to homeowners.",
      "long_desc": "Solar Sales Reps sell the sun. You knock on doors or call leads to convince homeowners to switch to solar power. It is a tough sales job with very high earning potential.",
      "day_in_life": ["Canvass neighborhoods", "Present energy savings", "Sign contracts"],
      "tags": ["Sales", "Green", "Energy"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["sales", "solar", "green", "money"],
      "related_career_ids": ["sales_b2b_sales_manager", "trade_solar_installer"]
    }
  },
  {
    "id": "trade_hvac_installer",
    "title": "HVAC Installer",
    "domain": "Skilled Trade",
    "slug": "hvac-installer",
    "match_profile": {
      "interests": ["building", "systems", "heavy_lifting", "teamwork"],
      "personality": ["strong", "practical", "hardworking", "reliable"],
      "work_style": ["construction_site", "physical", "team", "hot/cold"],
      "deal_breakers": ["weakness", "office", "delicate_work"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "ITI HVAC",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Wage"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Installing energy-efficient heat pumps is the new standard."
    },
    "content": {
      "short_desc": "Installs new heating and cooling systems in buildings.",
      "long_desc": "HVAC Installers put the system in. Unlike technicians who fix broken ones, you install brand new AC units and ductwork in new houses. It is heavy, physical construction work.",
      "day_in_life": ["Lift AC units into place", "Install ductwork", "Connect refrigerant lines"],
      "tags": ["Trade", "Construction", "Physical"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["ac", "construction", "install", "hvac"],
      "related_career_ids": ["trade_hvac_technician", "trade_sheet_metal"]
    }
  },
  {
    "id": "science_lab_assistant",
    "title": "Laboratory Assistant",
    "domain": "Science",
    "slug": "lab-assistant",
    "match_profile": {
      "interests": ["science", "cleaning", "organizing", "support"],
      "personality": ["helpful", "organized", "careful", "obedient"],
      "work_style": ["lab", "routine", "support", "clean"],
      "deal_breakers": ["leading", "mess", "danger"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Science",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 450000,
      "display_range": "₹2L - ₹4.5L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Robots do some washing, but prep work needs humans."
    },
    "content": {
      "short_desc": "Cleans equipment and prepares samples for scientists.",
      "long_desc": "Lab Assistants keep the lab running. You wash glassware, label samples, and prepare chemical solutions for the researchers. It is the entry-level step into the world of science.",
      "day_in_life": ["Wash test tubes", "Label samples", "Mix simple solutions"],
      "tags": ["Science", "Entry Level", "Support"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["lab", "science", "clean", "help"],
      "related_career_ids": ["science_lab_technician", "science_lab_manager"]
    }
  },
  {
    "id": "service_barista",
    "title": "Barista",
    "domain": "Service",
    "slug": "barista",
    "match_profile": {
      "interests": ["coffee", "people", "fast_pace", "art"],
      "personality": ["energetic", "friendly", "multitasker", "artistic"],
      "work_style": ["cafe", "standing", "busy", "social"],
      "deal_breakers": ["sitting", "silence", "slow_pace"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "Training",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 150000,
      "max": 400000,
      "display_range": "₹1.5L - ₹4L per year",
      "pay_structure": "Wage + Tips"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "Robot arms make coffee, but humans provide the vibe."
    },
    "content": {
      "short_desc": "Prepares and serves coffee drinks in a cafe.",
      "long_desc": "Baristas fuel the world. You make espressos, pour latte art, and chat with regulars. It requires speed, memory, and a smile even when the line is out the door.",
      "day_in_life": ["Pull espresso shots", "Steam milk for lattes", "Clean coffee machine"],
      "tags": ["Service", "Coffee", "Social"]
    },
    "meta": {
      "popularity_rank": 50,
      "search_keywords": ["coffee", "cafe", "service", "food"],
      "related_career_ids": ["hospitality_coffee_roaster", "service_mixologist"]
    }
  },
  {
    "id": "biz_change_manager",
    "title": "Change Management Consultant",
    "domain": "Business",
    "slug": "change-manager",
    "match_profile": {
      "interests": ["psychology", "business", "strategy", "people"],
      "personality": ["empathetic", "persuasive", "organized", "patient"],
      "work_style": ["consulting", "project_based", "human_focused", "travel"],
      "deal_breakers": ["routine", "isolation", "quick_fixes"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Organizational Psych / MBA",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1200000,
      "max": 3500000,
      "display_range": "₹12L - ₹35L per year",
      "pay_structure": "Salary / Consulting Fees"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Helping humans adapt to AI in the workplace is the new priority."
    },
    "content": {
      "short_desc": "Helps organizations navigate big changes like mergers or new tech.",
      "long_desc": "Change Managers manage human fear. When a company restructures or adopts AI, employees panic. You design communication plans and training to help people accept the new way of working.",
      "day_in_life": ["Host town hall meetings", "Coach executives on communication", "Survey employee sentiment"],
      "tags": ["Business", "Psychology", "Consulting"]
    },
    "meta": {
      "popularity_rank": 40,
      "search_keywords": ["consultant", "hr", "strategy", "business"],
      "related_career_ids": ["business_management_consultant", "health_occ_psychologist"]
    }
  },
  {
    "id": "arts_art_therapist_clinical",
    "title": "Clinical Art Therapist",
    "domain": "Healthcare",
    "slug": "clinical-art-therapist",
    "match_profile": {
      "interests": ["art", "mental_health", "healing", "empathy"],
      "personality": ["compassionate", "creative", "patient", "observant"],
      "work_style": ["clinic", "emotional", "quiet", "hands_on"],
      "deal_breakers": ["rushing", "corporate_metrics", "blood"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Art Therapy",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Salary / Hourly"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Low",
      "future_trend": "Growing acceptance in treating PTSD and trauma."
    },
    "content": {
      "short_desc": "Uses art making to improve mental and emotional well-being.",
      "long_desc": "Art Therapists heal through creation. You work with trauma victims, children with autism, or the elderly. You interpret their art to understand their inner struggles and guide them to recovery.",
      "day_in_life": ["Lead group painting sessions", "Analyze patient drawings", "Collaborate with psychiatrists"],
      "tags": ["Healthcare", "Art", "Psychology"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["therapy", "art", "mental_health", "counseling"],
      "related_career_ids": ["health_clinical_psychologist", "health_recreational_therapist"]
    }
  },
  {
    "id": "tech_devops_architect",
    "title": "DevOps Architect",
    "domain": "Technology",
    "slug": "devops-architect",
    "match_profile": {
      "interests": ["automation", "cloud", "efficiency", "structure"],
      "personality": ["systematic", "proactive", "visionary", "technical"],
      "work_style": ["remote/office", "high_level", "infrastructure", "critical"],
      "deal_breakers": ["manual_tasks", "instability", "small_scale"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / Engineering",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 2000000,
      "max": 5000000,
      "display_range": "₹20L - ₹50L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Designing self-healing infrastructure is the new standard."
    },
    "content": {
      "short_desc": "Designs the automated systems that build and deploy software.",
      "long_desc": "DevOps Architects design the software factory. You don't just write scripts; you decide how the entire engineering team delivers code to the cloud securely and instantly. It is a high-level strategic role.",
      "day_in_life": ["Design CI/CD pipelines", "Audit cloud security", "Mentor senior engineers"],
      "tags": ["Tech", "Cloud", "Architecture"]
    },
    "meta": {
      "popularity_rank": 15,
      "search_keywords": ["devops", "cloud", "architect", "automation"],
      "related_career_ids": ["tech_cloud_architect", "tech_site_reliability_engineer"]
    }
  },
  {
    "id": "science_marine_archaeologist",
    "title": "Marine Archaeologist",
    "domain": "Science",
    "slug": "marine-archaeologist",
    "match_profile": {
      "interests": ["ocean", "history", "diving", "discovery"],
      "personality": ["adventurous", "patient", "meticulous", "academic"],
      "work_style": ["underwater/lab", "research", "physical", "historical"],
      "deal_breakers": ["fear_of_water", "fast_pace", "office_only"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Archaeology / Marine Science",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Grants / Salary"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Low",
      "future_trend": "Deep-sea robots are allowing discovery of deeper shipwrecks."
    },
    "content": {
      "short_desc": "Excavates shipwrecks and underwater ruins.",
      "long_desc": "Marine Archaeologists are underwater historians. You dive to ancient shipwrecks to recover artifacts and map sunken cities. It combines scuba diving with rigorous scientific documentation.",
      "day_in_life": ["Dive to shipwreck site", "Map underwater ruins", "Preserve waterlogged artifacts"],
      "tags": ["Science", "History", "Adventure"]
    },
    "meta": {
      "popularity_rank": 90,
      "search_keywords": ["ocean", "history", "diving", "shipwreck"],
      "related_career_ids": ["science_archaeologist", "science_marine_biologist"]
    }
  },
  {
    "id": "trade_glazier_commercial",
    "title": "Commercial Glazier",
    "domain": "Skilled Trade",
    "slug": "commercial-glazier",
    "match_profile": {
      "interests": ["glass", "skyscrapers", "heights", "building"],
      "personality": ["fearless", "precise", "strong", "careful"],
      "work_style": ["construction_site", "hazardous", "heights", "team"],
      "deal_breakers": ["fear_of_heights", "clumsiness", "office"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Apprenticeship",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1000000,
      "display_range": "₹4L - ₹10L per year",
      "pay_structure": "Wage"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Energy-efficient glass facades are standard in new offices."
    },
    "content": {
      "short_desc": "Installs glass windows on skyscrapers and commercial buildings.",
      "long_desc": "Commercial Glaziers wrap the city in glass. You operate cranes to lift massive glass panels 50 stories up and bolt them into place. It requires nerves of steel and extreme precision.",
      "day_in_life": ["Hoist glass panels", "Seal window frames", "Work on suspended scaffolds"],
      "tags": ["Trade", "Construction", "Heights"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["glass", "construction", "skyscraper", "window"],
      "related_career_ids": ["trade_ironworker", "trade_crane_operator"]
    }
  },
  {
    "id": "arts_fresco_restorer",
    "title": "Fine Art Restorer",
    "domain": "Arts & Design",
    "slug": "art-restorer",
    "match_profile": {
      "interests": ["art", "history", "chemistry", "patience"],
      "personality": ["steady_hands", "reverent", "detail_oriented", "quiet"],
      "work_style": ["museum/studio", "microscopic", "slow", "solitary"],
      "deal_breakers": ["shaking_hands", "modern_art_only", "deadlines"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Art Conservation",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary / Project"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "Low",
      "future_trend": "Laser cleaning technology is a new tool for restorers."
    },
    "content": {
      "short_desc": "Repairs damaged paintings and sculptures to their original state.",
      "long_desc": "Art Restorers save masterpieces. You use chemistry to remove centuries of dirt from a Da Vinci or repair a tear in a Picasso. You must understand the original artist's technique perfectly.",
      "day_in_life": ["Analyze paint pigments", "Clean varnish layers", "Fill canvas tears"],
      "tags": ["Art", "History", "Science"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["art", "museum", "repair", "history"],
      "related_career_ids": ["arts_conservator", "arts_museum_curator"]
    }
  },
  {
    "id": "health_dosimetrist_senior",
    "title": "Senior Medical Dosimetrist",
    "domain": "Healthcare",
    "slug": "senior-dosimetrist",
    "match_profile": {
      "interests": ["physics", "cancer", "math", "leadership"],
      "personality": ["precise", "analytical", "responsible", "mentor"],
      "work_style": ["hospital", "computer_based", "high_stakes", "quiet"],
      "deal_breakers": ["errors", "patient_interaction", "guessing"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Medical Dosimetry",
      "certification_required": true,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 1200000,
      "max": 3000000,
      "display_range": "₹12L - ₹30L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "AI assists planning, but human oversight is legally required."
    },
    "content": {
      "short_desc": "Leads the planning of radiation treatment for cancer patients.",
      "long_desc": "Senior Dosimetrists design the attack on cancer. You create complex 3D computer models to target tumors with radiation beams. You supervise junior staff and handle the most difficult cases.",
      "day_in_life": ["Design radiation plans", "Consult with physicists", "QA check junior plans"],
      "tags": ["Healthcare", "Physics", "Leadership"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["cancer", "physics", "radiation", "medical"],
      "related_career_ids": ["health_medical_dosimetrist", "health_radiation_therapist"]
    }
  },
  {
    "id": "tech_vr_world_builder",
    "title": "VR World Builder",
    "domain": "Technology",
    "slug": "vr-builder",
    "match_profile": {
      "interests": ["gaming", "architecture", "coding", "design"],
      "personality": ["imaginative", "visual", "technical", "patient"],
      "work_style": ["remote", "creative", "3d_space", "immersive"],
      "deal_breakers": ["reality", "spreadsheets", "flat_design"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Game Design / Architecture",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 2000000,
      "display_range": "₹5L - ₹20L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Medium",
      "future_trend": "Metaverse real estate design is a niche but growing field."
    },
    "content": {
      "short_desc": "Designs environments for Virtual Reality games and apps.",
      "long_desc": "VR World Builders are architects of the matrix. You build the cities, forests, or spaceships that people explore in VR. You need to understand lighting, scale, and performance optimization.",
      "day_in_life": ["Sculpt terrain in Unreal Engine", "Place lighting assets", "Test walk-through in VR"],
      "tags": ["Tech", "Design", "VR"]
    },
    "meta": {
      "popularity_rank": 35,
      "search_keywords": ["vr", "game", "design", "metaverse"],
      "related_career_ids": ["tech_ar_vr_developer", "arts_animator_3d"]
    }
  },
  {
    "id": "biz_logistics_analyst",
    "title": "Logistics Analyst",
    "domain": "Business",
    "slug": "logistics-analyst",
    "match_profile": {
      "interests": ["data", "efficiency", "transport", "maps"],
      "personality": ["analytical", "organized", "logical", "cost_conscious"],
      "work_style": ["office", "data_heavy", "strategic", "monitoring"],
      "deal_breakers": ["driving", "physical_labor", "guessing"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "Supply Chain / Data Science",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 500000,
      "max": 1500000,
      "display_range": "₹5L - ₹15L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Using AI to predict shipping delays is the core skill now."
    },
    "content": {
      "short_desc": "Analyzes supply chain data to improve delivery speed and cost.",
      "long_desc": "Logistics Analysts optimize the route. You look at data from thousands of shipments to find faster routes or cheaper carriers. You help companies like Amazon deliver packages in one day.",
      "day_in_life": ["Analyze shipping costs", "Optimize delivery routes", "Forecast inventory needs"],
      "tags": ["Business", "Data", "Logistics"]
    },
    "meta": {
      "popularity_rank": 45,
      "search_keywords": ["shipping", "data", "supply_chain", "analyst"],
      "related_career_ids": ["biz_logistics_coordinator", "tech_data_analyst"]
    }
  },
  {
    "id": "service_funeral_embalmer",
    "title": "Embalmer",
    "domain": "Service",
    "slug": "embalmer",
    "match_profile": {
      "interests": ["anatomy", "chemistry", "respect", "solitude"],
      "personality": ["calm", "respectful", "detail_oriented", "quiet"],
      "work_style": ["mortuary", "solitary", "clinical", "sanitary"],
      "deal_breakers": ["squeamishness", "crowds", "fear_of_death"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Mortuary Science",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Green burial options are reducing demand for traditional embalming."
    },
    "content": {
      "short_desc": "Prepares bodies for funeral services.",
      "long_desc": "Embalmers prepare the deceased for their final goodbye. You sanitize and preserve the body, using cosmetics to restore a peaceful appearance for the family's viewing. It is a respectful, scientific art.",
      "day_in_life": ["Prepare body for viewing", "Apply restorative cosmetics", "Complete legal paperwork"],
      "tags": ["Service", "Science", "Quiet"]
    },
    "meta": {
      "popularity_rank": 95,
      "search_keywords": ["funeral", "mortuary", "science", "care"],
      "related_career_ids": ["service_funeral_director", "science_forensic_scientist"]
    }
  },
  {
    "id": "tech_smart_contract_dev",
    "title": "Smart Contract Developer",
    "domain": "Technology",
    "slug": "smart-contract-dev",
    "match_profile": {
      "interests": ["crypto", "coding", "law", "automation"],
      "personality": ["precise", "logical", "security_focused", "innovative"],
      "work_style": ["remote", "coding_heavy", "high_stakes", "financial"],
      "deal_breakers": ["bugs", "imprecision", "ui_design"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / Blockchain Cert",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 1000000,
      "max": 4000000,
      "display_range": "₹10L - ₹40L per year",
      "pay_structure": "Salary / Tokens"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "DeFi (Decentralized Finance) keeps demand for secure code high."
    },
    "content": {
      "short_desc": "Writes self-executing contracts on the blockchain.",
      "long_desc": "Smart Contract Developers write law in code. You create programs on Ethereum or Solana that automatically move money when conditions are met. A bug here can lose millions, so precision is key.",
      "day_in_life": ["Write Solidity code", "Audit contracts for hacks", "Deploy to mainnet"],
      "tags": ["Tech", "Crypto", "Coding"]
    },
    "meta": {
      "popularity_rank": 25,
      "search_keywords": ["crypto", "blockchain", "coding", "solidity"],
      "related_career_ids": ["tech_blockchain_developer", "tech_backend_engineer"]
    }
  },
  {
    "id": "edu_literacy_specialist",
    "title": "Literacy Specialist",
    "domain": "Education",
    "slug": "literacy-specialist",
    "match_profile": {
      "interests": ["reading", "teaching", "children", "books"],
      "personality": ["patient", "encouraging", "book_lover", "persistent"],
      "work_style": ["school", "one_on_one", "supportive", "quiet"],
      "deal_breakers": ["math", "chaos", "corporate_metrics"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Education / Reading",
      "certification_required": true,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 350000,
      "max": 900000,
      "display_range": "₹3.5L - ₹9L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Helping kids recover from pandemic learning loss is a priority."
    },
    "content": {
      "short_desc": "Helps students improve their reading and writing skills.",
      "long_desc": "Literacy Specialists teach the love of reading. You work with students who struggle with dyslexia or reading comprehension. You give them the key to unlocking all other learning.",
      "day_in_life": ["Conduct reading assessments", "Run small group reading", "Coach teachers on literacy"],
      "tags": ["Education", "Reading", "Support"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["teacher", "reading", "school", "books"],
      "related_career_ids": ["edu_special_education_teacher", "edu_primary_teacher"]
    }
  },
  {
    "id": "trade_solar_maintenance",
    "title": "Solar O&M Technician",
    "domain": "Skilled Trade",
    "slug": "solar-maintenance",
    "match_profile": {
      "interests": ["solar", "repair", "electricity", "outdoors"],
      "personality": ["diagnostic", "reliable", "independent", "technical"],
      "work_style": ["field_work", "troubleshooting", "outdoor", "active"],
      "deal_breakers": ["office", "sales", "fear_of_heights"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Electrical / Solar",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 350000,
      "max": 900000,
      "display_range": "₹3.5L - ₹9L per year",
      "pay_structure": "Wage"
    },
    "outlook": {
      "growth_rating": "Very High",
      "automation_risk": "Low",
      "future_trend": "As millions of panels are installed, cleaning and fixing them is a huge job."
    },
    "content": {
      "short_desc": "Inspects and repairs existing solar power systems.",
      "long_desc": "Solar O&M Techs keep the green energy flowing. You troubleshoot broken inverters, clean dirty panels, and fix wiring issues on solar farms or rooftops. It is the service side of the solar boom.",
      "day_in_life": ["Test voltage output", "Clean solar panels", "Replace faulty inverters"],
      "tags": ["Trade", "Green", "Repair"]
    },
    "meta": {
      "popularity_rank": 70,
      "search_keywords": ["solar", "repair", "energy", "technician"],
      "related_career_ids": ["trade_solar_installer", "trade_electrician"]
    }
  },
  {
    "id": "arts_industrial_sculptor",
    "title": "Industrial Sculptor / model Maker",
    "domain": "Arts & Design",
    "slug": "model-maker",
    "match_profile": {
      "interests": ["building", "cars", "clay", "precision"],
      "personality": ["tactile", "perfectionist", "patient", "visual"],
      "work_style": ["workshop", "hands_on", "precise", "creative"],
      "deal_breakers": ["digital_only", "rushing", "mess"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Industrial Design / Art",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 400000,
      "max": 1200000,
      "display_range": "₹4L - ₹12L per year",
      "pay_structure": "Salary / Project"
    },
    "outlook": {
      "growth_rating": "Low",
      "automation_risk": "High",
      "future_trend": "3D printing is replacing hand clay modeling in car design."
    },
    "content": {
      "short_desc": "Creates physical scale models of products or buildings.",
      "long_desc": "Model Makers build the prototype. You sculpt clay cars for automotive design studios or build tiny architectural cities for developers. It combines artistic sculpture with engineering precision.",
      "day_in_life": ["Sculpt clay car model", "3D print prototypes", "Paint scale models"],
      "tags": ["Creative", "Design", "Craft"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["model", "design", "car", "sculpture"],
      "related_career_ids": ["creative_industrial_designer", "arts_set_designer"]
    }
  },
  {
    "id": "legal_jury_consultant",
    "title": "Jury Consultant",
    "domain": "Legal",
    "slug": "jury-consultant",
    "match_profile": {
      "interests": ["psychology", "law", "people", "influence"],
      "personality": ["observant", "analytical", "strategic", "persuasive"],
      "work_style": ["court/office", "high_stakes", "psychological", "advisory"],
      "deal_breakers": ["routine", "backend_work", "low_pay"]
    },
    "requirements": {
      "education_level": "masters",
      "degree_field": "Psychology / Law",
      "certification_required": false,
      "experience_level": "expert"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 2500000,
      "display_range": "₹8L - ₹25L per year",
      "pay_structure": "Fees per Case"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Medium",
      "future_trend": "Social media analysis of jurors is the new standard tool."
    },
    "content": {
      "short_desc": "Uses psychology to help lawyers select favorable juries.",
      "long_desc": "Jury Consultants win cases before they start. You analyze potential jurors' body language and backgrounds to tell lawyers who to keep and who to reject. You shape the audience for the trial.",
      "day_in_life": ["Profile potential jurors", "Observe courtroom behavior", "Conduct mock trials"],
      "tags": ["Law", "Psychology", "Strategy"]
    },
    "meta": {
      "popularity_rank": 75,
      "search_keywords": ["law", "psychology", "court", "jury"],
      "related_career_ids": ["science_forensic_psychologist", "legal_litigation_lawyer"]
    }
  },
  {
    "id": "science_hydrologic_tech",
    "title": "Hydrologic Technician",
    "domain": "Science",
    "slug": "hydrologic-tech",
    "match_profile": {
      "interests": ["water", "outdoors", "measuring", "environment"],
      "personality": ["practical", "rugged", "methodical", "independent"],
      "work_style": ["field_work", "river", "monitoring", "technical"],
      "deal_breakers": ["office", "dry_clothes", "theory"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Environmental Science",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 800000,
      "display_range": "₹3L - ₹8L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Flood monitoring sensors need human maintenance."
    },
    "content": {
      "short_desc": "Collects data on water levels and quality in rivers and lakes.",
      "long_desc": "Hydrologic Techs work in the water. You wade into rivers to measure flow rates or check flood gauges. Your data is used to predict floods and manage drinking water supplies.",
      "day_in_life": ["Measure river flow", "Collect water samples", "Maintain remote sensors"],
      "tags": ["Science", "Water", "Outdoors"]
    },
    "meta": {
      "popularity_rank": 80,
      "search_keywords": ["water", "river", "environment", "tech"],
      "related_career_ids": ["science_hydrologist", "eng_environmental_engineer"]
    }
  },
  {
    "id": "service_genealogist",
    "title": "Professional Genealogist",
    "domain": "Service",
    "slug": "genealogist",
    "match_profile": {
      "interests": ["history", "family", "research", "puzzles"],
      "personality": ["curious", "patient", "persistent", "detail_oriented"],
      "work_style": ["archive/online", "solitary", "investigative", "quiet"],
      "deal_breakers": ["rushing", "future_focus", "noise"]
    },
    "requirements": {
      "education_level": "none",
      "degree_field": "History / Certification",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 200000,
      "max": 800000,
      "display_range": "₹2L - ₹8L per year",
      "pay_structure": "Freelance / Fees"
    },
    "outlook": {
      "growth_rating": "Medium",
      "automation_risk": "Medium",
      "future_trend": "DNA testing kits (23andMe) have sparked huge interest in ancestry."
    },
    "content": {
      "short_desc": "Traces family trees and history for clients.",
      "long_desc": "Genealogists are family detectives. You dig through old birth records, ship manifests, and DNA results to help people find their ancestors. You solve mysteries of identity and heritage.",
      "day_in_life": ["Search digital archives", "Analyze DNA matches", "Write family history reports"],
      "tags": ["History", "Research", "Service"]
    },
    "meta": {
      "popularity_rank": 85,
      "search_keywords": ["history", "family", "research", "dna"],
      "related_career_ids": ["arts_archivist", "service_private_investigator"]
    }
  },
  {
    "id": "tech_accessibility_specialist",
    "title": "Digital Accessibility Specialist",
    "domain": "Technology",
    "slug": "accessibility-specialist",
    "match_profile": {
      "interests": ["inclusion", "web", "coding", "standards"],
      "personality": ["empathetic", "detail_oriented", "advocate", "technical"],
      "work_style": ["office/remote", "audit_heavy", "advocacy", "technical"],
      "deal_breakers": ["ignoring_rules", "speed_over_quality", "exclusion"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "CS / Design",
      "certification_required": false,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 600000,
      "max": 1800000,
      "display_range": "₹6L - ₹18L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Low",
      "future_trend": "Legal requirements for website accessibility are increasing globally."
    },
    "content": {
      "short_desc": "Ensures websites and apps are usable by people with disabilities.",
      "long_desc": "Accessibility Specialists make the web fair. You audit websites to ensure blind users can use screen readers or color-blind users can see text. You fix code to include everyone.",
      "day_in_life": ["Audit websites with screen readers", "Fix HTML/ARIA code", "Train devs on inclusive design"],
      "tags": ["Tech", "Social Impact", "Web"]
    },
    "meta": {
      "popularity_rank": 55,
      "search_keywords": ["web", "inclusive", "audit", "code"],
      "related_career_ids": ["tech_frontend_engineer", "tech_qa_tester"]
    }
  },
  {
    "id": "biz_compliance_manager_import",
    "title": "Trade Compliance Manager",
    "domain": "Business",
    "slug": "trade-compliance",
    "match_profile": {
      "interests": ["international_law", "trade", "rules", "shipping"],
      "personality": ["cautious", "knowledgeable", "strict", "organized"],
      "work_style": ["office", "regulatory", "global", "high_stakes"],
      "deal_breakers": ["risk_taking", "local_only", "creative_interpretation"]
    },
    "requirements": {
      "education_level": "bachelors",
      "degree_field": "International Business / Law",
      "certification_required": false,
      "experience_level": "mid"
    },
    "compensation": {
      "currency": "INR",
      "min": 800000,
      "max": 2500000,
      "display_range": "₹8L - ₹25L per year",
      "pay_structure": "Salary"
    },
    "outlook": {
      "growth_rating": "High",
      "automation_risk": "Medium",
      "future_trend": "Sanctions and trade wars make this role critical for global firms."
    },
    "content": {
      "short_desc": "Ensures international shipments follow trade laws and sanctions.",
      "long_desc": "Trade Compliance Managers keep companies out of jail. You ensure exports don't go to embargoed countries and imports pay the right tax. You navigate the complex web of global trade law.",
      "day_in_life": ["Review export licenses", "Check sanction lists", "Audit shipping documents"],
      "tags": ["Business", "Law", "Global"]
    },
    "meta": {
      "popularity_rank": 60,
      "search_keywords": ["trade", "law", "export", "compliance"],
      "related_career_ids": ["biz_customs_broker", "biz_import_export"]
    }
  },
  {
    "id": "service_private_investigator",
    "title": "Private Investigator",
    "domain": "Service",
    "slug": "private-investigator",
    "match_profile": {
      "interests": ["secrets", "surveillance", "puzzles", "justice"],
      "personality": ["patient", "discrete", "observant", "skeptical"],
      "work_style": ["field/car", "solitary", "irregular_hours", "surveillance"],
      "deal_breakers": ["9_to_5", "need_for_attention", "teamwork"]
    },
    "requirements": {
      "education_level": "diploma",
      "degree_field": "Criminal Justice / Police Exp",
      "certification_required": true,
      "experience_level": "entry"
    },
    "compensation": {
      "currency": "INR",
      "min": 300000,
      "max": 1200000,
      "display_range": "₹3L - ₹12L per year",
      "pay_structure": "Fees / Hourly"
    },
    "outlook": {
      "growth_rating": "Stable",
      "automation_risk": "Low",
      "future_trend": "Digital background checks are replacing physical tailing."
    },
    "content": {
      "short_desc": "Conducts investigations for private clients or lawyers.",
      "long_desc": "Private Investigators find the truth. You conduct surveillance on cheating spouses, find missing persons, or uncover insurance fraud. It involves long hours of waiting and digging for info.",
      "day_in_life": ["Conduct surveillance", "Search public records", "Interview witnesses"],
      "tags": ["Service", "Investigation", "Legal"]
    },
    "meta": {
      "popularity_rank": 65,
      "search_keywords": ["detective", "spy", "investigation", "private"],
      "related_career_ids": ["govt_police_officer", "legal_paralegal"]
    }
  }
];