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
  metric: string;
  role: string;
  year: string;
  image: string;
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
  { label: "Work", href: "#projects" },
  { label: "Expertise", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const stats = [
  { value: "3+", label: "Years building production frontend" },
  { value: "30%", label: "Manual workflow cut via AI" },
  { value: "7", label: "Live products shipped" },
  { value: "Remote", label: "Open to global teams" }
];

export const expertise = [
  {
    category: "Frontend Development",
    icon: Code2,
    items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3"]
  },
  {
    category: "AI & Automation",
    icon: Bot,
    items: ["Azure AI", "AI Agents", "Workflow Automation", "Prompt Engineering", "AI-Assisted Development"]
  },
  {
    category: "Tools & Platforms",
    icon: Settings2,
    items: ["Git", "GitHub", "Vercel", "Docker", "Azure App Services"]
  },
  {
    category: "Performance & Quality",
    icon: Gauge,
    items: ["SEO", "WCAG", "Performance", "Code Splitting", "Responsive"]
  },
  {
    category: "Collaboration",
    icon: Users2,
    items: ["REST APIs", "Azure DevOps", "Design Systems", "Cross-functional"]
  }
];

export const projects: Project[] = [
  {
    name: "Techspecialist Limited",
    type: "Corporate / AI Readiness",
    description: "Corporate site positioning Techspecialist around executive intelligence and AI readiness with live dashboard visuals.",
    impact: "Clear entry point for enterprise and public sector clients into AI services.",
    metric: "10wk to live dashboard",
    role: "Frontend + IA",
    year: "2024",
    image: "/images/projects/techspecialist.png",
    caseStudy: {
      overview: "Techspecialist needed to communicate complex Microsoft-powered transformation to non-technical decision makers.",
      goal: "Make AI readiness and executive dashboards understandable and actionable.",
      contribution: "Built responsive frontend with composable service sections and live Power BI visuals.",
      outcome: "Stronger enterprise positioning and faster client onboarding."
    },
    stack: ["Next.js", "Tailwind", "Azure AI"],
    link: "https://techspecialistlimited.com/",
    icon: "corporate",
    accent: "bg-[#6B7F59]"
  },
  {
    name: "NECA ICT Academy",
    type: "Education / Employability",
    description: "Public-facing ICT training platform focused on digital skills and workforce readiness.",
    impact: "Improved access to employability training for broad learner audience.",
    metric: "500+ learners onboarded",
    role: "Frontend + UX",
    year: "2024",
    image: "/images/projects/neca-ict.png",
    caseStudy: {
      overview: "Public education platform to equip Nigerians with practical ICT skills and certifications.",
      goal: "Communicate programs clearly and build trust for enrollment.",
      contribution: "Shaped responsive UX that makes courses and enrollment easy to parse.",
      outcome: "Clearer program discovery and higher enrollment intent."
    },
    stack: ["React", "Responsive", "Education UX"],
    link: "https://www.necaictacademy.org",
    icon: "education",
    accent: "bg-[#6B7F59]"
  },
  {
    name: "Studio3 Launchpad",
    type: "EdTech / Learning Platform",
    description: "Cohort-based learning platform for practical tech skills and affordable training.",
    impact: "Presented as credible modern learning brand.",
    metric: "Cohort growth +40%",
    role: "Frontend Engineering",
    year: "2023",
    image: "/images/projects/studio3.png",
    caseStudy: {
      overview: "Structured platform for aspiring tech talent through cohort-based practical training.",
      goal: "Make quality training feel accessible while staying credible.",
      contribution: "Built responsive interfaces with clear pathways and program clarity.",
      outcome: "Cleaner, more engaging learning experience."
    },
    stack: ["Next.js", "EdTech", "UI/UX"],
    link: "https://www.studio3launchpad.com/",
    icon: "startup",
    accent: "bg-[#6B7F59]"
  },
  {
    name: "AI Recruitment Platform",
    type: "AI / HR Automation",
    description: "Internal AI platform automating CV evaluation and first-stage interviews for HR.",
    impact: "Cut manual screening and improved consistency.",
    metric: "30% less manual work",
    role: "Frontend + AI Workflow",
    year: "2024",
    image: "/images/projects/ai-recruitment.png",
    caseStudy: {
      overview: "Private HR tool pairing AI CV evaluator with AI-led interviews to modernize hiring.",
      goal: "Process high volume without losing quality, freeing recruiters for final decisions.",
      contribution: "Built frontend for submission, review, and interview flows connected to Azure AI.",
      outcome: "Shortlist of interview-ready candidates instead of manual screening."
    },
    stack: ["React", "Next.js", "Azure AI"],
    link: "#contact",
    icon: "ai",
    accent: "bg-[#6B7F59]"
  },
  {
    name: "HMIP - NMRC",
    type: "Housing / Data Portal",
    description: "Housing market info portal with mortgage tools and property discovery.",
    impact: "Easier navigation for property and financing decisions.",
    metric: "25% better task completion",
    role: "Frontend + Data UX",
    year: "2023",
    image: "/images/projects/hmip.png",
    caseStudy: {
      overview: "Portal offering mortgage tools, research, housing stats, and decision support.",
      goal: "Make complex housing data approachable.",
      contribution: "Focused on scannable data tables and clear tool flows.",
      outcome: "Reduced friction in housing decisions."
    },
    stack: ["Data UX", "Responsive", "Frontend"],
    link: "#contact",
    icon: "housing",
    accent: "bg-[#6B7F59]"
  },
  {
    name: "Kadir Salami",
    type: "Executive Branding",
    description: "Executive branding site for personal and corporate visibility.",
    impact: "Strengthened executive presence online.",
    metric: "100 lighthouse",
    role: "Design + Build",
    year: "2023",
    image: "/images/projects/kadir.png",
    caseStudy: {
      overview: "Credible professional presence for executive brand.",
      goal: "Fast, polished, accessible site that reflects executive level.",
      contribution: "Designed and built responsive layouts end-to-end.",
      outcome: "Professional presence at kadirsalami.com"
    },
    stack: ["Next.js", "Tailwind", "Performance"],
    link: "https://kadirsalami.com/",
    icon: "corporate",
    accent: "bg-[#6B7F59]"
  }
];

export const experience = [
  {
    title: "Business Automation Associate",
    company: "Techspecialist (Mswitch Group)",
    period: "Apr 2026 - Present",
    summary: "Built AI workflows with Azure AI cutting manual processing by 30%, including AI recruitment platform automating CV and interviews."
  },
  {
    title: "Frontend Developer / Technical Support",
    company: "Mswitch Group",
    period: "Jan 2026 - Apr 2026",
    summary: "Maintained scalable React/Next.js apps, launched kadirsalami.com, improved reliability."
  },
  {
    title: "Frontend Developer",
    company: "Shamzbridge Consult",
    period: "Jan 2024 - Dec 2025",
    summary: "Delivered responsive web apps for consulting and education, improving engagement ~25% via perf and UX work."
  },
  {
    title: "Frontend Developer Trainee",
    company: "TIIDELab Cohort 5",
    period: "2023 - 2024",
    summary: "Intensive program in React, JS, responsive design, and Git workflows."
  }
];

export const certifications = [
  "Developing AI Apps and Agents on Microsoft Azure (AI-103) - Microsoft",
  "Nigeria Certificate in Education (NCE), Computer Science / Physics",
  "Frontend Developer - Cohort 5 (2023) - TIIDELab"
];

export const contactLinks = [
  { label: "abbastaofeeq.001@gmail.com", href: "mailto:abbastaofeeq.001@gmail.com", icon: Mail, external: false },
  { label: "+234 902 859 2933", href: "tel:+2349028592933", icon: Phone, external: false },
  { label: "Abuja, Nigeria", href: "#contact", icon: MapPin, external: false },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abbas-taofeeq-olakunle1/", icon: LinkedInIcon, external: true },
  { label: "GitHub", href: "https://github.com/AbbasTaofeeq", icon: GitHubIcon, external: true },
  { label: "Instagram", href: "https://www.instagram.com/abbastaofeeq_123/", icon: InstagramIcon, external: true },
  { label: "X", href: "https://x.com/AbbasTaofeeq", icon: XIcon, external: true }
];

export const socialLinks = contactLinks;