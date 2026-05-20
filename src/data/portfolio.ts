import type {
  CareerRoleConfig,
  CareerRoleId,
  Project,
  ProfileBase,
  ResumeOption,
} from "@/types/portfolio";

export const profile: ProfileBase = {
  name: "Shaik Rasheed Baba",
  shortName: "Rasheed",
  email: "rasheedshailk9959@gmail.com",
  phone: "+91 9346761582",
  location: "Hyderabad, India",
  github: "https://github.com/RASHEEDSHAIK25",
  linkedin: "https://www.linkedin.com/in/sk-rasheed-baba-72067a253",
  image: "/profile.png",
};

/** Shown in hero typing animation — tech-forward focus */
export const heroTechLines = [
  "Deep Learning · CNNs · Computer Vision",
  "LLMs · RAG · Agentic AI pipelines",
  "Databricks · Spark · Lakehouse (learning)",
  "Always shipping with modern AI dev tools",
];

/** What you're actively leveling up — honest "learning soon" signals growth */
export const techFocusAreas = [
  {
    id: "deep-learning",
    name: "Deep Learning",
    description:
      "CNNs, transfer learning (VGG16/ResNet), medical imaging & real-time vision with TensorFlow.",
    status: "building" as const,
    progress: 78,
    icon: "🧠",
  },
  {
    id: "llm",
    name: "LLMs & Gen AI",
    description:
      "Large language models, prompt design, and production apps via FastAPI + cloud (GCP).",
    status: "building" as const,
    progress: 72,
    icon: "✨",
  },
  {
    id: "rag",
    name: "RAG & Vector Search",
    description:
      "Retrieval-augmented generation, embeddings, and grounding LLMs on real data — next build target.",
    status: "learning" as const,
    progress: 48,
    icon: "🔍",
  },
  {
    id: "databricks",
    name: "Databricks & Spark",
    description:
      "Lakehouse, PySpark, and MLflow — actively studying for hands-on experience soon.",
    status: "learning" as const,
    progress: 35,
    icon: "🧱",
  },
  {
    id: "agentic",
    name: "Agentic AI",
    description:
      "Multi-step agents, tool use, Telegram/FastAPI workflows — GDG award-winning project experience.",
    status: "building" as const,
    progress: 70,
    icon: "🤖",
  },
  {
    id: "mlops",
    name: "MLOps & Deployment",
    description:
      "Streamlit, serverless GCP, model serving — taking models from notebook to demo URL.",
    status: "exploring" as const,
    progress: 55,
    icon: "🚀",
  },
];

export const aiDevTools = [
  { name: "Cursor & AI IDEs", category: "Build faster" },
  { name: "GitHub Copilot", category: "Code assist" },
  { name: "Google Vertex AI", category: "Cloud ML" },
  { name: "Streamlit", category: "ML demos" },
  { name: "Hugging Face", category: "Models & NLP" },
  { name: "Kaggle", category: "Practice & datasets" },
  { name: "v0 / AI UI tools", category: "Rapid prototypes" },
  { name: "Colab & Jupyter", category: "Experimentation" },
];

export const resumes: ResumeOption[] = [
  {
    id: "data-analyst",
    label: "Data Analyst",
    description: "SQL, Power BI, dashboards & business insights",
    path: "/resume-data-analyst.pdf",
    roles: ["data-science", "data-analyst"],
  },
  {
    id: "full",
    label: "Data Science (Full)",
    description: "ML projects, NLP, computer vision & cloud",
    path: "/resume-full.pdf",
    roles: ["data-science", "ai-ml"],
  },
  {
    id: "ml-engineer",
    label: "AI / ML Engineer",
    description: "Deep learning, agents, MLOps & deployment",
    path: "/resume-full.pdf",
    roles: ["ai-ml"],
  },
];

export const careerRoles: CareerRoleConfig[] = [
  {
    id: "data-science",
    label: "Data Science Student",
    shortLabel: "DS Student",
    title: "Data Science Student & Tech Builder",
    tagline:
      "Final-year engineer obsessed with new AI — deep learning, LLMs, RAG, and Databricks — while shipping real projects today.",
    bio: "I'm not just studying Data Science (GPA 8.0) — I'm actively exploring cutting-edge stacks: deep learning, LLMs, RAG pipelines, and Databricks/Spark for lakehouse ML. I experiment with modern AI dev tools daily and turn learnings into GitHub projects recruiters can open.",
    badge: "Tech learner · DL · LLM · RAG · Databricks next",
    statusCard: "Exploring AI tools · Building daily",
    aboutTitle: "Growing from data to intelligence",
    aboutSubtitle:
      "Diploma in EEE → B.E. Data Science — learning the full stack of analytics and ML.",
    projectsTitle: "Student projects with real metrics",
    projectsSubtitle:
      "Classroom rigor meets internship experience — measurable outcomes recruiters trust.",
    contactSubtitle:
      "Open to internships and graduate roles in data science & analytics.",
    primaryResumeId: "full",
    stats: [
      { label: "GPA", value: "8.0" },
      { label: "AI stack", value: "DL·LLM" },
      { label: "Learning", value: "RAG" },
    ],
    featuredProjectSlugs: [
      "sms-spam",
      "sales-dashboard",
      "sql-analysis",
    ],
    accent: "cyan",
  },
  {
    id: "data-analyst",
    label: "Data Analyst",
    shortLabel: "Analyst",
    title: "Data Analyst",
    tagline:
      "I streamline reporting, automate workflows, and deliver dashboards that drive 15–20% efficiency gains.",
    bio: "Data Analyst Intern at Elevate Labs with hands-on Power BI, SQL, and stakeholder reporting. I translate business questions into KPIs, clean datasets, and executive-ready insights.",
    badge: "Elevate Labs Intern · Power BI & SQL",
    statusCard: "Data Analyst Intern · Elevate Labs",
    aboutTitle: "Analytics that executives act on",
    aboutSubtitle:
      "From data collection to presentation — focused on speed, clarity, and business impact.",
    projectsTitle: "Analytics & BI in production",
    projectsSubtitle:
      "Dashboards, SQL deep-dives, and reporting workflows from internship and projects.",
    contactSubtitle:
      "Seeking Data Analyst, BI Analyst, and reporting roles.",
    primaryResumeId: "data-analyst",
    stats: [
      { label: "Efficiency", value: "+20%" },
      { label: "Reports", value: "15+" },
      { label: "Teams", value: "3+" },
    ],
    featuredProjectSlugs: [
      "sales-dashboard",
      "sql-analysis",
      "sms-spam",
    ],
    accent: "violet",
  },
  {
    id: "ai-ml",
    label: "AI / ML Engineer",
    shortLabel: "AI/ML",
    title: "AI / ML Engineer in the making",
    tagline:
      "Deep learning in production today — leveling up on LLMs, RAG, and Databricks to build the next generation of data+AI systems.",
    bio: "Hands-on with TensorFlow CNNs, agentic LLM workflows, and GCP deployments. Currently deepening RAG architectures and Databricks lakehouse skills — I learn fast, document on LinkedIn, and ship demos on Streamlit & FastAPI.",
    badge: "DL · LLM · RAG · Databricks (learning)",
    statusCard: "Stack: PyTorch/TF → LLM → Lakehouse",
    aboutTitle: "Engineering intelligence at scale",
    aboutSubtitle:
      "From TensorFlow & Streamlit to serverless agents — deploying models recruiters can demo live.",
    projectsTitle: "ML & AI systems deployed",
    projectsSubtitle:
      "Deep learning, NLP, agentic workflows, and interpretability — with accuracy and latency metrics.",
    contactSubtitle:
      "Open to ML Engineer, AI Engineer, and MLOps internships & roles.",
    primaryResumeId: "ml-engineer",
    stats: [
      { label: "ML Accuracy", value: "96%+" },
      { label: "Next up", value: "RAG" },
      { label: "Soon", value: "Databricks" },
    ],
    featuredProjectSlugs: [
      "zensync",
      "breast-ultrasound",
      "ai-sales-agent",
      "sms-spam",
    ],
    accent: "amber",
  },
];

export const careerJourney = [
  {
    year: "2021",
    title: "Diploma · EEE",
    detail: "Mother Teresa Institute — foundation in engineering",
  },
  {
    year: "2023",
    title: "B.E. Data Science",
    detail: "Sri Indu Institute — specialization begins",
  },
  {
    year: "2025",
    title: "Data Analyst Intern",
    detail: "Elevate Labs — real business analytics",
  },
  {
    year: "Now",
    title: "AI / ML & Agentic builds",
    detail: "Deep learning, LLMs, Gen AI hackathons & cloud-native agents",
  },
  {
    year: "Next",
    title: "Databricks · RAG · LLM depth",
    detail: "Lakehouse experience, vector RAG apps & advanced MLOps — learning now, shipping soon",
  },
];

export const education = [
  {
    school: "Sri Indu Institute of Engineering and Technology",
    degree: "B.E. Data Science",
    gpa: "8.00",
    location: "Hyderabad, India",
    period: "Jun 2023 – Aug 2026",
  },
  {
    school: "Mother Teresa Institute of Science and Technology",
    degree: "Diploma, Electrical & Electronics Engineering",
    gpa: "8.70",
    location: "Sathupally, India",
    period: "Jun 2021 – Aug 2023",
  },
];

export const experience = [
  {
    role: "Data Analyst Intern",
    company: "Elevate Labs",
    period: "Apr 2025 – Present",
    highlights: [
      "Cut data collection and reporting time by 20% through streamlined procedures.",
      "Drove 15% productivity gains with process improvements and automation.",
      "Building dashboards and insights for mental-fitness products used at scale.",
      "Partnered with 3+ cross-functional teams on requirements and project scope.",
      "Delivered 15+ stakeholder reports with actionable recommendations.",
    ],
  },
  {
    role: "Intern",
    company: "Edunet Foundation (Microsoft · SAP · AICTE)",
    period: "Jan 2025 – Feb 2025",
    highlights: [
      "Completed virtual internship with Edunet in partnership with Microsoft, SAP, and AICTE.",
      "Worked on real-world technology projects with industry mentors.",
      "Strengthened collaboration and program-based learning skills.",
    ],
  },
];

export const skillGroups = [
  { label: "Languages", skills: ["Python", "SQL", "HTML", "CSS", "Bootstrap"] },
  {
    label: "Data & ML",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "Deep Learning",
      "NLTK",
      "Matplotlib",
    ],
  },
  {
    label: "AI & Modern stack",
    skills: [
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "Agentic AI",
      "Embeddings",
      "NLP",
      "Computer Vision",
    ],
  },
  {
    label: "Learning next",
    skills: [
      "Databricks",
      "Apache Spark",
      "MLflow",
      "Vector DBs",
      "LangChain-style pipelines",
      "MLOps",
    ],
  },
  {
    label: "Tools & Viz",
    skills: ["Power BI", "Tableau", "Excel", "MySQL", "SQLite", "Streamlit"],
  },
  {
    label: "Cloud & Platforms",
    skills: [
      "Google Cloud",
      "Vertex AI",
      "AWS",
      "Azure",
      "Jupyter",
      "GitHub",
      "Kaggle",
    ],
  },
  {
    label: "Concepts",
    skills: [
      "ETL",
      "Data Cleaning",
      "KPI Tracking",
      "Dashboard Development",
      "Model Deployment",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "zensync",
    title: "ZenSync — Facial Expression AI",
    description:
      "Full-stack Flask app with MediaPipe & TensorFlow for real-time emotion detection across 7 classes. Sub-500ms latency with OpenCV pipeline.",
    tech: ["Python", "Flask", "TensorFlow", "OpenCV", "MediaPipe"],
    metrics: "80%+ accuracy",
    github: "https://github.com/RASHEEDSHAIK25/Zen-Sync",
    featured: true,
    roles: ["data-science", "ai-ml"],
  },
  {
    slug: "sms-spam",
    title: "SMS Spam Classifier",
    description:
      "NLTK preprocessing + TF-IDF on 5,572 UCI messages. Logistic Regression at 96.59% accuracy with production Streamlit deployment.",
    tech: ["Python", "NLTK", "Scikit-learn", "Streamlit"],
    metrics: "96.59% accuracy",
    github: "https://github.com/RASHEEDSHAIK25",
    featured: true,
    roles: ["data-science", "data-analyst", "ai-ml"],
  },
  {
    slug: "breast-ultrasound",
    title: "Breast Ultrasound Classification",
    description:
      "Transfer learning with VGG16 & ResNet50 on BUSI dataset. Grad-CAM interpretability and interactive Streamlit model comparison.",
    tech: ["TensorFlow", "CNN", "Grad-CAM", "Streamlit"],
    metrics: "3-class CNN",
    github: "https://github.com/RASHEEDSHAIK25",
    featured: true,
    roles: ["data-science", "ai-ml"],
  },
  {
    slug: "ai-sales-agent",
    title: "AI Sales Automation Agent",
    description:
      "Telegram bot → FastAPI webhook → LLM product suggestions → SQLite storage. End-to-end agentic sales workflow.",
    tech: ["FastAPI", "LLM", "SQLite", "Telegram"],
    metrics: "Agentic pipeline",
    github: "https://github.com/RASHEEDSHAIK25/AI-Sales-Automation-Agent",
    featured: true,
    roles: ["ai-ml"],
  },
  {
    slug: "sales-dashboard",
    title: "Sales Insights Dashboard",
    description:
      "Power BI dashboard for revenue, profit, and trends with slicers, drill-downs, and business-ready insights.",
    tech: ["Power BI", "DAX", "Data Modeling"],
    metrics: "Interactive BI",
    github: "https://github.com/RASHEEDSHAIK25",
    featured: false,
    roles: ["data-science", "data-analyst"],
  },
  {
    slug: "sql-analysis",
    title: "SQL Data Analysis",
    description:
      "Large-dataset analysis with joins, GROUP BY, aggregations, and trend reports for decision support.",
    tech: ["SQL", "MySQL", "Reporting"],
    metrics: "Business insights",
    github: "https://github.com/RASHEEDSHAIK25",
    featured: false,
    roles: ["data-science", "data-analyst"],
  },
  {
    slug: "health-chatbot",
    title: "AI Health Chatbot",
    description:
      "AI-powered health assistant for guided wellness conversations and support.",
    tech: ["Python", "LLM"],
    metrics: "Health AI",
    github: "https://github.com/RASHEEDSHAIK25/Ai-Powered-Health-chat-bot",
    featured: false,
    roles: ["ai-ml"],
  },
];

export const certificates = [
  {
    id: "code-vipassana",
    name: "Exceptional Performance Award — Code Vipassana S9",
    issuer: "Google Developer Groups Cloud Kochi",
    date: "2025",
    category: "award" as const,
    detail:
      "Recognized for agentic apps on Google Cloud: serverless, cloud databases, and open-source integrations.",
    verifyUrl: profile.linkedin,
  },
  {
    id: "gen-ai-hackathon",
    name: "Gen AI Exchange Hackathon 2025",
    issuer: "Google Cloud & Hack2Skill",
    date: "2025",
    category: "hackathon" as const,
    detail:
      "Participated under the theme “Generative AI for Youth Mental Wellness” — building with GCP & GenAI.",
    verifyUrl:
      "https://www.linkedin.com/posts/sk-rasheed-baba-72067a253_honoured-to-have-participated-in-thegen-activity-7419798066637090816-e2XU",
  },
  {
    id: "hackhazards-25",
    name: "HACKHAZARDS '25",
    issuer: "Namespace Comm",
    date: "Mar 2025",
    category: "hackathon" as const,
    detail: "Hackathon participation certificate — innovation & build sprint.",
    verifyUrl:
      "https://certificate.givemycertificate.com/c/0d7e2a65-dc67-4f92-8d22-c8fd45828918",
  },
  {
    id: "infosys-analytics",
    name: "Data Analytics",
    issuer: "Infosys Springboard",
    date: "Jun 2025",
    category: "analytics" as const,
    detail: "ETL, data ecosystem, gathering, identification, and cleaning for analysis.",
    verifyUrl:
      "https://www.linkedin.com/posts/sk-rasheed-baba-72067a253_ive-been-participating-in-the-infosys-springboard-activity-7383090361918930945--01l",
  },
  {
    id: "gcp-analytics-intro",
    name: "Introduction to Data Analytics on Google Cloud",
    issuer: "Google Cloud Skills Boost",
    date: "Oct 2025",
    category: "cloud" as const,
    detail: "Big data basics, ETL process, and analytics preparation on GCP.",
    verifyUrl:
      "https://cloudskillsboost.google/public_profiles/e8f63c73-07de-47cb-93a6-c15f5905dc0a",
  },
  {
    id: "gcp-skillboost-jul",
    name: "Google Cloud Skills Boost — Advanced Badge",
    issuer: "Google",
    date: "Jul 2025",
    category: "cloud" as const,
    detail: "Hands-on Google Cloud labs and skill badges on Cloud Skills Boost.",
    verifyUrl:
      "https://cloudskillsboost.google/public_profiles/e8f63c73-07de-47cb-93a6-c15f5905dc0a/badges/16936307",
  },
  {
    id: "gcp-skillboost-jul-2",
    name: "Google Cloud Skills Boost — Core Badge",
    issuer: "Google",
    date: "Jul 2025",
    category: "cloud" as const,
    detail: "Cloud fundamentals and practical labs completed on Skills Boost.",
    verifyUrl:
      "https://cloudskillsboost.google/public_profiles/e8f63c73-07de-47cb-93a6-c15f5905dc0a/badges/16916021",
  },
  {
    id: "gcp-skillboost-sep",
    name: "Google Cloud Skills Boost",
    issuer: "Google",
    date: "Sep 2024",
    category: "cloud" as const,
    detail: "Early cloud learning path — badges and guided quests on GCP.",
    verifyUrl:
      "https://cloudskillsboost.google/public_profiles/e8f63c73-07de-47cb-93a6-c15f5905dc0a/badges/11711900",
  },
  {
    id: "accenture-forage",
    name: "Data Analytics & Visualization Job Simulation",
    issuer: "Accenture North America · Forage",
    date: "Sep 2024",
    category: "simulation" as const,
    detail:
      "Virtual experience: data cleaning, modeling, and visualization for business decisions.",
    verifyUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_jaBurRfZ9pdszDRiy_1725805129532_completion_certificate.pdf",
  },
  {
    id: "tata-forage",
    name: "Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Tata Group · Forage",
    date: "Sep 2024",
    category: "simulation" as const,
    detail:
      "Job simulation on storytelling with data and executive-ready visual insights.",
    verifyUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata%20Group_jaBurRfZ9pdszDRiy_1725782423734_completion_certificate.pdf",
  },
  {
    id: "aws-azure-udemy",
    name: "Cloud Computing — AWS & Azure",
    issuer: "Udemy",
    date: "Ongoing",
    category: "cloud" as const,
    detail:
      "Cloud services integration, infrastructure automation, and AWS security practices.",
  },
];

export const linkedInHighlights = [
  {
    id: "elevate-labs-join",
    title: "Joined Elevate Labs as Data Analyst Intern",
    excerpt:
      "Excited to join Elevate Labs — diving into real-world datasets, building dashboards, and contributing to data-driven mental fitness products. Grateful for the opportunity to learn from industry experts!",
    date: "Apr 2025",
    type: "internship" as const,
    linkedinUrl: profile.linkedin,
    tags: ["Data Analytics", "Elevate Labs", "Dashboards", "Internship"],
  },
  {
    id: "gen-ai-exchange",
    title: "Gen AI Exchange Hackathon 2025",
    excerpt:
      "Honoured to participate in the Gen AI Exchange Hackathon by Google Cloud and Hack2Skill — theme: “Generative AI for Youth Mental Wellness.” Building with GCP and GenAI for real-world impact.",
    date: "2025",
    type: "hackathon" as const,
    linkedinUrl:
      "https://www.linkedin.com/posts/sk-rasheed-baba-72067a253_honoured-to-have-participated-in-thegen-activity-7419798066637090816-e2XU",
    tags: ["Google Cloud", "Gen AI", "Hackathon", "Hack2Skill"],
  },
  {
    id: "edunet-complete",
    title: "Completed Edunet Internship (Microsoft · SAP · AICTE)",
    excerpt:
      "Successfully completed my internship at Edunet Foundation in partnership with Microsoft, SAP, and AICTE — real-world projects, mentorship, and hands-on technology experience.",
    date: "Feb 2025",
    type: "internship" as const,
    linkedinUrl: profile.linkedin,
    tags: ["Microsoft", "SAP", "AICTE", "Edunet"],
  },
  {
    id: "infosys-springboard",
    title: "Infosys Springboard Virtual Internship 6.0",
    excerpt:
      "Participating in Infosys Springboard Virtual Internship 6.0 — deepening data analytics skills through structured learning paths (shared journey on LinkedIn).",
    date: "2025",
    type: "learning" as const,
    linkedinUrl:
      "https://www.linkedin.com/posts/sk-rasheed-baba-72067a253_ive-been-participating-in-the-infosys-springboard-activity-7383090361918930945--01l",
    tags: ["Infosys Springboard", "Data Analytics", "Learning"],
  },
  {
    id: "gdg-vipassana",
    title: "Code Vipassana Season 9 — Exceptional Performance",
    excerpt:
      "Recognized at Google Developer Groups Cloud Kochi for outstanding work on agentic applications using Google Cloud, serverless architecture, and open-source integrations.",
    date: "2025",
    type: "certification" as const,
    linkedinUrl: profile.linkedin,
    tags: ["GDG", "Google Cloud", "Agentic AI", "Award"],
  },
  {
    id: "forage-accenture",
    title: "Accenture Data Analytics Simulation — Completed",
    excerpt:
      "Finished Accenture North America Data Analytics & Visualization job simulation on Forage — from data prep to stakeholder-ready insights.",
    date: "Sep 2024",
    type: "certification" as const,
    linkedinUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_jaBurRfZ9pdszDRiy_1725805129532_completion_certificate.pdf",
    tags: ["Accenture", "Forage", "Data Visualization"],
  },
];

export const navLinks = [
  { href: "#journey", label: "Journey" },
  { href: "#about", label: "About" },
  { href: "#tech-stack", label: "Tech" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certs" },
  { href: "#highlights", label: "LinkedIn" },
  { href: "#contact", label: "Contact" },
];

export function getRoleById(id: CareerRoleId) {
  return careerRoles.find((r) => r.id === id)!;
}

export function getResumeById(id: string, overrides?: { path?: string; label?: string }) {
  const base = resumes.find((r) => r.id === id);
  if (!base) return null;
  return { ...base, ...overrides };
}
