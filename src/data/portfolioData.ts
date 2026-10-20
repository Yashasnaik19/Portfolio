import { ProjectItem, SkillCategory, AchievementItem } from '../types';

export const personalInfo = {
  name: "Yashas B Naik",
  roleHeadlines: [
    "Cybersecurity Specialist",
    "Software Engineer",
    "AI Application Builder",
    "Computer Science Undergraduate"
  ],
  tagline: "Engineering practical software solutions at the intersection of cybersecurity, intelligent applications, and modern web architectures.",
  college: "Dayananda Sagar College of Engineering",
  collegeFull: "Dayananda Sagar College of Engineering, Bengaluru, Karnataka, India",
  degree: "Bachelor of Engineering (B.E.)",
  branch: "Computer Science and Engineering (Cybersecurity)",
  expectedGraduation: 2029,
  cgpa: "8.75",
  email: "yashasbabunaik19@gmail.com",
  phone: "+91 6360406415",
  phoneDisplay: "+91 63604 06415",
  location: "Bengaluru, Karnataka, India",
  github: "https://github.com/Yashasnaik19",
  githubRepo: "https://github.com/Yashasnaik19/portfolio",
  linkedin: "https://linkedin.com/in/yashas-naik-a52436389",
  languages: ["Kannada", "English", "Hindi", "Konkani"],
  resumePath: "/resume.pdf",
  resumeDownloadName: "Yashas-B-Naik-Resume.pdf",
  profileImagePath: "/profile.jpg",
  coursework: [
    "Programming in C and Python",
    "Engineering Mathematics",
    "Fundamentals of Electronics and Electrical Systems",
    "Introductory Cybersecurity Concepts"
  ]
};

export const projectsData: ProjectItem[] = [
  {
    id: "pulsegate",
    title: "PulseGate",
    category: "Healthcare Technology & AI Triage",
    summary: "Software-based healthcare triage and referral platform engineered to eliminate frontline bottlenecks and intelligently direct patients toward capable facilities.",
    description: [
      "PulseGate addresses critical referral delays in emergency and community healthcare by replacing subjective intake guesswork with clinical criteria-driven triage guidelines.",
      "The system incorporates a rules-based assessment engine that transparently categorizes patient urgency across multi-tiered risk thresholds without opaque black-box inferences.",
      "Features dynamic hospital geo-matching, capability filtering (e.g. ICU, trauma beds, specialist on call), multi-dialect intake support (Kannada, Hindi, English), simulated test cases, and tamper-resistant audit logs."
    ],
    techTags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Leaflet", "AI Integration"],
    status: "Prototype / Hackathon Concept",
    isFeatured: true,
    demoUrl: "https://pulsegate.ai.studio/",
    githubUrl: "https://github.com/Yashasnaik19",
    features: [
      "Software-first clinical intake & urgency risk scoring",
      "Transparent rules-based patient triage engine",
      "Real-time facility capability & availability matching",
      "Multilingual intake support (Kannada, Hindi, English)",
      "Audit logs & physician review queues for clinical accuracy"
    ]
  },
  {
    id: "water-security",
    title: "Smart Water Security System",
    category: "Critical Infrastructure Security",
    summary: "Exploratory research and engineering into protecting municipal and industrial water distribution infrastructure against unauthorized access and cyber tampering.",
    description: [
      "Investigated threat vectors across industrial telemetry sensors, network communication nodes, and programmable logic controllers in water supply networks.",
      "Formulated anomaly detection heuristics to flag suspicious flow rate fluctuations, isolate rogue control nodes, and maintain data integrity across distributed SCADA setups."
    ],
    techTags: ["Cybersecurity", "Network Security", "Python", "Vulnerability Analysis", "SCADA Concepts"],
    status: "In Development",
    githubUrl: "https://github.com/Yashasnaik19",
    features: [
      "Threat modeling for public utility networks",
      "Sensor telemetry anomaly detection heuristics",
      "Unauthorized node isolation workflows",
      "SCADA communication vulnerability inspection"
    ]
  },
  {
    id: "ctf-practice",
    title: "Cybersecurity Lab & CTF Research",
    category: "Security Investigation & Forensics",
    summary: "Hands-on vulnerability exploitation laboratory focusing on web app security, cryptographic challenge breakdown, artifact carving, and security telemetry.",
    description: [
      "Active participant in Capture The Flag (CTF) environments solving challenges in symmetric/asymmetric cryptanalysis, HTTP request tampering, reverse engineering, and forensic memory inspection.",
      "Developed defensive scripts including automated authentication log parsers, phishing heuristic detectors, and pattern analysis for suspicious payload identification."
    ],
    techTags: ["CTF", "Web Security", "Python", "Digital Forensics", "Log Analysis", "Scam Detection"],
    status: "Exploratory & Practice",
    githubUrl: "https://github.com/Yashasnaik19",
    features: [
      "Web application vulnerability testing and request analysis",
      "Cryptographic decoding and file artifact reconstruction",
      "Security incident log parsing and heuristic alert generation",
      "Defensive countermeasure simulation"
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "C", "Java"]
  },
  {
    title: "Web & Full-Stack Engineering",
    skills: ["React", "TypeScript", "HTML5", "CSS3 / Tailwind", "FastAPI", "Node.js"]
  },
  {
    title: "AI Tools & Developer APIs",
    skills: ["Google AI Studio", "Gemini API Exploration", "REST APIs", "JSON-RPC"]
  },
  {
    title: "Databases & Cloud Platforms",
    skills: ["PostgreSQL", "Firebase Auth", "Firebase Firestore", "Render", "Vercel"]
  },
  {
    title: "Geospatial & Mapping",
    skills: ["Leaflet", "Mapbox", "GeoJSON"]
  },
  {
    title: "Cybersecurity & Tooling",
    skills: [
      "Cybersecurity Fundamentals",
      "CTF Challenge Solving",
      "Git & GitHub Version Control",
      "Code Auditing & Debugging",
      "Security Log Inspection"
    ]
  }
];

export const achievementsData: AchievementItem[] = [
  {
    title: "Smart India Hackathon (SIH)",
    organization: "National Innovation Initiative",
    description: "Formulated and submitted a technology-driven practical problem solution, successfully qualifying and selected for the subsequent competitive evaluation round.",
    iconName: "hackathon"
  },
  {
    title: "Aegis Club Internal CTF",
    organization: "Department of CSE, DSCE",
    description: "Competed in hands-on challenge-based security problem solving, cryptanalysis, forensics, and web vulnerability exploitation.",
    iconName: "shield"
  },
  {
    title: "Practical Software & Hackathon Engineering",
    organization: "Independent & Collaborative Builds",
    description: "Continuously creating software architectures with strict user flow discipline, robust data persistence, and security-first design patterns.",
    iconName: "terminal"
  }
];
