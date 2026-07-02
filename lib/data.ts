import {
  Bot,
  Code2,
  Gauge,
  Mail,
  MapPin,
  Phone,
  Settings2,
  Users2
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon
} from "@/components/social-icons";

export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  type: string;
  description: string;
  impact: string;
  caseStudy: {
    overview: string;
    goal: string;
    contribution: string;
    outcome: string;
  };
  stack: string[];
  link: string;
  icon: "ai" | "education" | "housing" | "startup" | "corporate";
  accent: string;
};

type SocialIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type ContactLink = {
  label: string;
  href: string;
  icon: SocialIcon;
  external: boolean;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const stats = [
  { value: "3+", label: "Years building production frontend products" },
  { value: "30%", label: "Manual workflow effort cut through Azure AI automation" },
  { value: "7", label: "Live projects across AI, education, housing, and consulting" },
  { value: "Remote", label: "Ready for global engineering teams" }
];

export const expertise = [
  {
    category: "Frontend Development",
    icon: Code2,
    items: ["Next.js", "React.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5 / CSS3"]
  },
  {
    category: "AI & Automation",
    icon: Bot,
    items: ["Microsoft Azure AI", "AI Agents", "Workflow Automation", "Prompt Engineering", "Business Process Automation"]
  },
  {
    category: "Tools & Platforms",
    icon: Settings2,
    items: ["Git", "GitHub", "Vercel", "Netlify", "Docker", "Azure App Services", "CI/CD"]
  },
  {
    category: "Performance & Optimization",
    icon: Gauge,
    items: ["SEO", "Accessibility (WCAG)", "Performance Optimization", "Code Splitting", "Lazy Loading", "Cross-Browser Compatibility"]
  },
  {
    category: "Collaboration / Workflow",
    icon: Users2,
    items: ["REST API Integration", "Azure DevOps", "Component-Based Architecture", "Design Systems", "Cross-functional Collaboration"]
  }
];

export const projects: Project[] = [
  {
    name: "AI Recruitment Platform",
    type: "AI / Private Internal Tool / HR Automation",
    description:
      "A private, internal platform I built for Techspecialist's HR team that automates candidate screening, CV evaluation, and first-stage interviews using Azure AI. Not publicly accessible.",
    impact:
      "Reduced manual recruitment workload and improved screening consistency by giving HR an AI-assisted first pass on every applicant.",
    caseStudy: {
      overview:
        "Built as a private, internal Techspecialist tool for the HR team, this platform pairs an AI CV evaluator with an AI-led first-round interviewer to modernize a manual hiring pipeline.",
      goal:
        "HR needed a way to process high applicant volumes without losing screening quality, freeing recruiters to focus on final-stage, high-judgment decisions.",
      contribution:
        "I built the frontend for CV submission, evaluation review, and interview flows, and worked with the automation team to connect the UI to Azure AI screening and interview logic.",
      outcome:
        "Recruiters now review a shortlist of AI-evaluated, interview-ready candidates instead of manually screening every application, contributing to a 30% cut in manual processing time."
    },
    stack: ["React.js", "Next.js", "Azure AI", "Workflow Automation", "Enterprise UI"],
    link: "#contact",
    icon: "ai",
    accent: "bg-[linear-gradient(135deg,#312e81,#7c3aed_45%,#14b8a6)]"
  },
  {
    name: "Techspecialist Limited",
    type: "Corporate / AI Readiness / Managed IT Services",
    description:
      "The corporate website for Techspecialist Limited, positioning the company around executive intelligence, AI readiness, automation, and managed IT services.",
    impact:
      "Gives public, private, and enterprise-sector clients a clear, professional entry point into Techspecialist's AI readiness and automation services.",
    caseStudy: {
      overview:
        "Techspecialist Limited needed a corporate site that could communicate complex, Microsoft-powered digital transformation services to a broad range of decision-makers.",
      goal:
        "The goal was to present AI readiness assessment, workflow automation, and executive dashboard offerings clearly enough for both technical and non-technical stakeholders to act on.",
      contribution:
        "I built and continue to maintain the responsive frontend, covering service-led content sections, layout, and ongoing content and UX improvements.",
      outcome:
        "The site clearly communicates Techspecialist's executive intelligence and automation positioning, supporting the company's enterprise and public-sector outreach."
    },
    stack: ["Next.js", "React.js", "Tailwind CSS", "Azure AI", "Microsoft Power Platform"],
    link: "https://techspecialistlimited.com/",
    icon: "corporate",
    accent: "bg-[linear-gradient(135deg,#0f172a,#4c1d95_48%,#22d3ee)]"
  },
  {
    name: "NECA ICT Academy",
    type: "Public / Education / Employability",
    description:
      "A public-facing ICT training and employability platform focused on digital skills, capacity building, and workforce readiness.",
    impact:
      "Supported clearer access to employability-focused ICT training for a broad learner audience.",
    caseStudy: {
      overview:
        "NECA ICT Academy is a public-facing education platform built to equip Nigerians with practical ICT skills, relevant certifications, and employability support.",
      goal:
        "The platform needed to clearly communicate training opportunities, build trust with users, and support broad access to programs focused on digital skills and employment readiness.",
      contribution:
        "I worked on the frontend experience, helping shape a responsive and user-friendly platform that makes course information, enrollment opportunities, and academy value propositions easier to consume.",
      outcome:
        "The platform supports workforce readiness and digital empowerment by making program information easier to access and strengthening the initiative's digital credibility."
    },
    stack: ["React", "Education Platform", "Public Sector", "Responsive Design", "Frontend"],
    link: "https://www.necaictacademy.org/",
    icon: "education",
    accent: "bg-[linear-gradient(135deg,#172554,#1d4ed8_45%,#22c55e)]"
  },
  {
    name: "HMIP - NMRC",
    type: "Housing / Data / Financial Services",
    description:
      "A housing market information portal offering mortgage tools, research access, housing statistics, property discovery, and decision-support resources.",
    impact:
      "Helped make housing and mortgage information easier to navigate for users making property and financing decisions.",
    caseStudy: {
      overview:
        "HMIP is a housing and mortgage information platform that supports access to research, mortgage calculation tools, property information, verified professionals, and market insights.",
      goal:
        "The challenge was presenting complex housing and mortgage data in a way that remains usable, informative, and accessible to a broad public audience.",
      contribution:
        "I contributed to frontend interfaces that improve clarity, usability, and interaction with housing data and decision-support tools, making a complex product feel approachable.",
      outcome:
        "The platform gives users a practical way to access housing statistics, estimate mortgage affordability, and engage with a trusted housing data environment."
    },
    stack: ["Housing Data", "Public Utility", "Frontend UX", "Responsive UI"],
    link: "https://hmip.nmrc.com.ng/",
    icon: "housing",
    accent: "bg-[linear-gradient(135deg,#082f49,#0369a1_48%,#facc15)]"
  },
  {
    name: "Executive Corporate Website (Kadir Salami)",
    type: "Executive Branding / Corporate",
    description:
      "A professional executive branding website designed and launched to strengthen personal and corporate visibility online.",
    impact:
      "Strengthened executive branding and online visibility with a fast, polished, accessible site.",
    caseStudy: {
      overview:
        "This executive corporate website was built to establish a credible, professional online presence for personal and business branding.",
      goal:
        "The goal was to launch a fast, polished site that reflects an executive-level brand and performs well on both desktop and mobile.",
      contribution:
        "I designed and built responsive layouts optimized for performance and accessibility, and launched the site end-to-end.",
      outcome:
        "The result is a professional executive presence at kadirsalami.com that supports the client's branding and visibility goals."
    },
    stack: ["Next.js", "Tailwind CSS", "Responsive Design", "Performance"],
    link: "https://kadirsalami.com/",
    icon: "corporate",
    accent: "bg-[linear-gradient(135deg,#1c1917,#78350f_48%,#f59e0b)]"
  },
  {
    name: "Studio3 Launchpad",
    type: "EdTech / Learning Platform",
    description:
      "A cohort-based learning platform focused on practical tech skills, affordable training, personalized learning paths, and recognized certifications.",
    impact:
      "Helped present Studio3 Launchpad as a credible, modern learning brand focused on employability and practical tech training.",
    caseStudy: {
      overview:
        "Studio3 Launchpad is a structured learning platform designed to empower aspiring tech talent through practical, cohort-based training, accessible education, and career-focused programs.",
      goal:
        "The goal was to make quality digital skills training feel accessible while presenting the organization as a serious, modern learning brand for aspiring professionals.",
      contribution:
        "I contributed to the frontend experience by building responsive interfaces that support content clarity, smooth navigation, and a stronger product feel across devices.",
      outcome:
        "The result is a cleaner and more engaging platform experience that supports practical tech learning through clear program pathways and visible learning benefits."
    },
    stack: ["Next.js", "React", "Responsive UI", "EdTech", "Frontend Engineering"],
    link: "https://www.studio3launchpad.com/",
    icon: "startup",
    accent: "bg-[linear-gradient(135deg,#14332f,#145c64_48%,#60a5fa)]"
  },
  {
    name: "Shamzbridge Consult",
    type: "Corporate / Consulting / Brand Platform",
    description:
      "A consulting and capacity-building platform showcasing advisory, project management, community development, events, branding, and web development services.",
    impact:
      "Helped strengthen online credibility and service visibility for a professional consulting brand.",
    caseStudy: {
      overview:
        "Shamzbridge Consult is a consulting and capacity-building brand offering services across advisory, project management, community development, events, branding, and web development.",
      goal:
        "The website needed to establish trust quickly, communicate service breadth clearly, and present the company as a serious modern consulting business.",
      contribution:
        "I developed a polished corporate website experience focused on service presentation, visual professionalism, readability, and conversion-focused content flow.",
      outcome:
        "The result is a credible digital front door that helps potential clients understand the company's capabilities and strengthens how the brand is perceived online."
    },
    stack: ["Corporate Website", "UI/UX", "Brand Visibility", "Frontend", "Conversion-Focused"],
    link: "https://www.shamzbridgeconsult.org/",
    icon: "corporate",
    accent: "bg-[linear-gradient(135deg,#111827,#525252_48%,#14b8a6)]"
  }
];

export const experience = [
  {
    title: "Business Automation Associate",
    company: "Techspecialist (Mswitch Group)",
    period: "Apr 2026 - Present",
    summary:
      "Built AI-powered automation workflows with Azure AI that cut manual processing time by 30% across HR and operations, including an enterprise AI recruitment platform that automates CV evaluation and first-stage interviews."
  },
  {
    title: "Frontend Developer / Technical Support",
    company: "Mswitch Group",
    period: "Jan 2026 - Apr 2026",
    summary:
      "Built and maintained scalable React.js and Next.js applications, launched the kadirsalami.com executive corporate website, and provided technical support that improved platform reliability."
  },
  {
    title: "Frontend Developer",
    company: "Shamzbridge Consult",
    period: "Jan 2024 - Dec 2025",
    summary:
      "Delivered responsive web applications and corporate websites for consulting, education, and professional-services clients, improving engagement by roughly 25% through performance and usability work."
  },
  {
    title: "Frontend Developer Trainee",
    company: "TIIDELab Initiative (Cohort 5)",
    period: "2023 - 2024",
    summary:
      "Completed an intensive frontend engineering program covering React.js, JavaScript, responsive design, and Git workflows, building multiple responsive applications through collaborative development."
  }
];

export const certifications = [
  "Developing AI Apps and Agents on Microsoft Azure (AI-103) - Microsoft Certified",
  "Nigeria Certificate in Education (NCE), Computer Science / Physics - Kwara State College of Education",
  "Frontend Developer - Cohort 5 (2023) - TIIDELab Initiative"
];

export const contactLinks = [
  {
    label: "abbastaofeeq.001@gmail.com",
    href: "mailto:abbastaofeeq.001@gmail.com",
    icon: Mail,
    external: false
  },
  {
    label: "+234 902 859 2933",
    href: "tel:+2349028592933",
    icon: Phone,
    external: false
  },
  {
    label: "Abuja, Nigeria",
    href: "#contact",
    icon: MapPin,
    external: false
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abbas-taofeeq-olakunle1/",
    icon: LinkedInIcon,
    external: true
  },
  {
    label: "GitHub",
    href: "https://github.com/AbbasTaofeeq",
    icon: GitHubIcon,
    external: true
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/abbastaofeeq_123/",
    icon: InstagramIcon,
    external: true
  },
  {
    label: "X profile coming soon",
    href: "#contact",
    icon: XIcon,
    external: false
  }
];

export const socialLinks: ContactLink[] = contactLinks;
