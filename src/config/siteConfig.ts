export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  achievement?: string;
  category: string;
  githubUrl?: string; // Optional URL, omitted or placeholder if missing
  liveDemoUrl?: string; // Optional URL
  visualType: 'carepoint-queue' | 'keyshield-security';
}

export interface Internship {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  responsibilities: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badgeType: 'network' | 'cloud' | 'security' | 'ai';
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  detailHighlight?: string;
  location?: string;
  profileUrl?: string;
  badgeText: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export const siteConfig = {
  personal: {
    name: "Sarvessh S V",
    wordmark: "SARVESSH",
    title: "Full-Stack Developer | Cybersecurity Enthusiast",
    shortBio: "Computer Science & Engineering student specializing in Cyber Security. Passionate about building clean, high-performance web applications and practical security-aware software solutions.",
    headline: "Turning Ideas Into Thoughtful Digital Experiences.",
    subtext: "I'm Sarvessh, a developer who enjoys building responsive websites, practical web applications, and technology-driven solutions. I combine development skills, problem-solving, and security awareness to create useful digital experiences.",
    credibility: [
      { label: "Degree", value: "B.E. CSE — Cyber Security" },
      { label: "Academic Standing", value: "CGPA: 9.1 / 10" },
      { label: "Core Competency", value: "Full-Stack Web Engineering" },
      { label: "Algorithmic Focus", value: "Competitive Programming" },
    ],
    aboutText: `Hi, I'm Sarvessh S V, a Computer Science and Engineering student specializing in Cyber Security at Chennai Institute of Technology. I'm interested in building useful digital products, developing full-stack applications, and exploring how technology can solve real-world problems.

Through my internship experiences and personal projects, I've worked with frontend interfaces, backend functionality, APIs, databases, and security-focused applications. I enjoy breaking down complex problems, learning new technologies, and turning ideas into working solutions.

Alongside development, I actively practice competitive programming, which helps me strengthen my logical thinking and problem-solving skills.

I'm open to collaborating on freelance projects where I can help turn ideas into clean, functional, and user-friendly digital experiences.`,
    location: "Chennai, India",
    email: "sarvesshsvsh@gmail.com",
    phone: "+91 9363978132",
    resumePath: "/Sarvessh_SV_Resume.pdf", // If file added to public/ folder
    hasResumeFile: false, // Flag indicating whether actual file exists in public/
    socials: {
      github: "https://github.com/Sarvessh-SV",
      linkedin: "https://linkedin.com/in/sarvessh-sv",
      leetcode: "https://leetcode.com/u/Sarvessh_sv/",
      codechef: "https://www.codechef.com/users/sarvesshsv",
    }
  },

  aboutHighlights: [
    {
      title: "Full-Stack Development",
      description: "Building responsive frontend UIs and reliable backend services with Next.js, Node.js, Express, React, and modern databases.",
      icon: "Code2"
    },
    {
      title: "Cybersecurity Awareness",
      description: "Integrating secure development practices, input validation, vulnerability awareness, and security monitoring into applications.",
      icon: "ShieldCheck"
    },
    {
      title: "Problem-Solving",
      description: "Applying data structures, algorithm optimization, and logic-driven approaches honed through 500+ LeetCode problems.",
      icon: "Cpu"
    }
  ],

  services: [
    {
      id: "website-development",
      title: "Website Development",
      description: "Build modern, responsive websites for individuals, startups, and businesses with fast performance and refined typography.",
      iconName: "Globe",
      tags: ["Responsive Design", "Next.js & React", "SEO Ready", "Fast Load Speed"]
    },
    {
      id: "fullstack-apps",
      title: "Full-Stack Web Applications",
      description: "Develop end-to-end web applications with interactive frontend interfaces, backend APIs, real-time data flows, and database integration.",
      iconName: "Layers",
      tags: ["API Development", "Database Integration", "Real-Time Sockets", "State Management"]
    },
    {
      id: "frontend-development",
      title: "Frontend Development",
      description: "Build clean, pixel-perfect, responsive interfaces focused on intuitive user experience, accessibility, and visual consistency.",
      iconName: "Layout",
      tags: ["Tailwind CSS", "TypeScript", "Framer Motion", "Cross-Device UX"]
    },
    {
      id: "website-improvements",
      title: "Website Improvements",
      description: "Help improve existing websites through UI refinements, responsive bug fixes, functionality upgrades, and performance tuning.",
      iconName: "Wrench",
      tags: ["UI Refinement", "Bug Fixing", "Responsive Fixes", "Code Refactoring"]
    },
    {
      id: "security-aware-dev",
      title: "Security-Aware Development",
      description: "Apply secure coding principles, input validation, proper authentication handling, and basic threat monitoring when building web apps.",
      iconName: "ShieldAlert",
      tags: ["Input Validation", "Secure APIs", "Threat Awareness", "Safe Authentication"]
    }
  ] as Service[],

  projects: [
    {
      id: "carepoint",
      title: "CarePoint",
      subtitle: "Real-Time Healthcare Queue Management System",
      description: "CarePoint is a real-time healthcare queue management platform designed to make clinic visits and patient queue management more organized.",
      fullDescription: "CarePoint addresses waiting room congestion and unpredictable patient wait times by digitizing the queue experience for both patients and healthcare providers. Patients scan a QR code upon entry to receive a live digital token, track their position in line in real time, and view dynamic estimated waiting times calculated dynamically.",
      technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "QR Code"],
      features: [
        "QR-based Instant Queue Access",
        "Live Token Status & Digital Tickets",
        "Dynamic Waiting-Time Estimation Engine",
        "Real-Time Queue Updates via Socket.IO"
      ],
      achievement: "Finalist project at Queue Cure '26 Hackathon, organized by Wooble Software Pvt. Ltd.",
      category: "Full-Stack Web App",
      githubUrl: "", // Missing URL placeholder, cleanly handled in UI
      liveDemoUrl: "", // Missing URL placeholder
      visualType: "carepoint-queue"
    },
    {
      id: "keyshield",
      title: "KeyShield",
      subtitle: "Cybersecurity Keylogger Detection & Monitoring Application",
      description: "KeyShield is a cybersecurity-focused application designed to detect and monitor suspicious keylogger activity and help protect sensitive user input.",
      fullDescription: "KeyShield provides desktop security monitoring to help users identify stealthy input-capturing processes and unauthorized keystroke logging. It features real-time system process analysis, automated heuristic threat evaluation, and instant security alert notifications to safeguard user credentials.",
      technologies: ["Python", "Flask", "React.js", "Electron.js", "SQLite", "Vite", "JavaScript", "HTML", "CSS"],
      features: [
        "Real-time Process & Hook Monitoring",
        "Heuristic Suspicious Activity Threat Detection",
        "Instant Desktop Security Alerts & Logs",
        "Clean Light-Theme Desktop Management Interface"
      ],
      achievement: "Custom Security Software Project — Cyber Security Domain",
      category: "Cybersecurity & Desktop Application",
      githubUrl: "", // Configurable link
      liveDemoUrl: "",
      visualType: "keyshield-security"
    }
  ] as Project[],

  experience: [
    {
      id: "novi-tech",
      role: "Full Stack Developer Intern",
      company: "Novi Tech R&D Pvt. Ltd.",
      period: "October 2024 – December 2024",
      responsibilities: [
        "Assisted in building end-to-end web solutions by developing frontend and backend components.",
        "Participated in the web development lifecycle, from designing user-friendly interfaces to implementing server-side logic."
      ]
    },
    {
      id: "aicte",
      role: "Cybersecurity & Ethical Hacker Intern",
      company: "AICTE",
      period: "April 2025 – June 2025",
      responsibilities: [
        "Performed reconnaissance and vulnerability assessment techniques to identify potential security risks and system weaknesses.",
        "Used security tools and techniques to analyze system behavior, monitor threats, and improve security awareness."
      ]
    },
    {
      id: "zentexus",
      role: "Full Stack Developer Intern",
      company: "Zentexus Technologies",
      period: "May 2026 – June 2026",
      responsibilities: [
        "Collaborated with team members to build responsive user interfaces.",
        "Developed backend functionalities and integrated APIs.",
        "Troubleshot issues to deliver seamless user experiences."
      ]
    }
  ] as Internship[],

  education: {
    institution: "Chennai Institute of Technology",
    location: "Chennai, India",
    degree: "Bachelor of Engineering (B.E.)",
    department: "Computer Science and Engineering — Cyber Security",
    period: "September 2024 – Present",
    cgpa: "9.1 / 10",
    highlights: [
      "Specialized coursework in Cyber Security, Cryptography, & Network Defense",
      "Core CS: Data Structures, Algorithms, OS, DBMS, & Computer Networks",
      "Active participant in technical hackathons, ideathons, & competitive programming"
    ]
  },

  skills: {
    programming: [
      "Python", "SQL", "JavaScript", "C++", "C", "Java"
    ],
    frontend: [
      "HTML", "CSS", "React.js", "Next.js", "Angular.js", "Figma", "Canva"
    ],
    backend: [
      "Node.js", "Express.js", "Flask", "MySQL", "PostgreSQL", "MongoDB", "SQLite"
    ],
    devops: [
      "Docker", "Azure Cloud", "Azure AI", "Linux", "Git", "GitHub"
    ],
    ai: [
      "TensorFlow", "PyTorch", "Scikit-Learn", "Matplotlib", "OpenCV", "Pandas", "Keras", "NumPy"
    ],
    csFundamentals: [
      "Data Structures", "Algorithms", "Computer Networks", "Operating Systems", "Database Management Systems", "Object-Oriented Programming", "Machine Learning"
    ]
  },

  achievements: [
    {
      id: "innovahack",
      title: "InnovaHack '26 Finalist",
      organization: "Elite Forums",
      description: "Secured a Top 6 position among competing teams in the Cybersecurity domain during national finals.",
      detailHighlight: "Top 6 Cybersecurity Domain",
      location: "Mumbai, India",
      badgeText: "National Hackathon Finalist"
    },
    {
      id: "leetcode",
      title: "LeetCode Competitive Programming",
      organization: "LeetCode",
      description: "Top 9.36% Global Percentile with 500+ algorithmic problems solved and a peak contest rating of 1755.",
      detailHighlight: "Global Top 9.36% | Max Rating: 1755 | 50 Days Badges",
      profileUrl: "https://leetcode.com/u/Sarvessh_sv/",
      badgeText: "500+ Solved"
    },
    {
      id: "codechef",
      title: "CodeChef Competitive Programming",
      organization: "CodeChef",
      description: "Active Div 4 competitor with 190 problem solutions accepted and a peak rating of 1173.",
      detailHighlight: "Div 4 | Max Rating: 1173 | 190 Solved",
      profileUrl: "https://www.codechef.com/users/sarvesshsv",
      badgeText: "Div 4 Competitor"
    },
    {
      id: "synapse-sentinel",
      title: "Synapse Sentinel '25 Ideathon",
      organization: "CAMRI, Chennai Institute of Technology",
      description: "Finalist at the Defense & Security Ideathon, presenting cybersecurity innovations in the finale round.",
      detailHighlight: "Defense & Security Domain Finalist",
      location: "Chennai, India",
      badgeText: "Ideathon Finalist"
    }
  ] as Achievement[],

  certifications: [
    {
      id: "zscaler-networks",
      title: "Introduction to Networks for Cyber Professionals",
      issuer: "Zscaler Academy",
      date: "November 30, 2025",
      badgeType: "network"
    },
    {
      id: "aws-cloud-practitioner",
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services (AWS)",
      date: "August 13, 2026",
      badgeType: "cloud"
    },
    {
      id: "cisco-ccna",
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      date: "November 17, 2025",
      badgeType: "network"
    },
    {
      id: "anthropic-claude",
      title: "Claude 101",
      issuer: "Anthropic",
      date: "June 2026",
      badgeType: "ai"
    },
    {
      id: "cisco-cyber",
      title: "Introduction to Cyber Security",
      issuer: "Cisco",
      date: "September 29, 2024",
      badgeType: "security"
    },
    {
      id: "wifi-pentest",
      title: "Certified WiFi Pentesting 101",
      issuer: "Cappriciosec University",
      date: "August 1, 2025",
      badgeType: "security"
    }
  ] as Certification[],

  volunteering: {
    role: "Event Coordinator",
    event: "Revil OSINT Challenge",
    period: "February 2025 – Present",
    description: "Organized and conducted an OSINT event, engaging participants in practical open-source intelligence challenges and security investigation scenarios."
  }
};
