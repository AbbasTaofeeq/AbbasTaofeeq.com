import {
  Bot,
  Code2,
  FlaskConical,
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

type SocialIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type ContactLink = {
  label: string;
  href: string;
  icon: SocialIcon;
  external: boolean;
};

// Root-relative (not bare "#…") so nav works the same from "/" and from "/projects/[slug]".
export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Work", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" }
];

export const stats = [
  { value: "3+", label: "Years building production frontend" },
  { value: "30%", label: "Manual workflow cut via AI" },
  { value: "7+", label: "Live products shipped" },
  { value: "Remote", label: "Open to global teams" }
];

export const expertise = [
  {
    category: "Frontend Development",
    icon: Code2,
    items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Context API / Redux", "HTML5 / CSS3"]
  },
  {
    category: "AI & Automation",
    icon: Bot,
    items: ["Azure AI", "AI Agents", "Workflow Automation", "Prompt Engineering", "Microsoft Power Platform"]
  },
  {
    category: "Tools & Platforms",
    icon: Settings2,
    items: ["Git", "GitHub", "GitHub Actions", "Vercel", "Docker", "Azure App Services"]
  },
  {
    category: "Performance & Quality",
    icon: Gauge,
    items: ["SEO", "WCAG", "SSR / SSG / ISR", "Code Splitting", "Responsive"]
  },
  {
    category: "Testing & Quality",
    icon: FlaskConical,
    items: ["Jest", "React Testing Library"]
  },
  {
    category: "Collaboration",
    icon: Users2,
    items: ["REST APIs", "Azure DevOps", "Figma-to-Code", "Design Systems", "Cross-functional"]
  }
];

export const experience = [
  {
    title: "Frontend Engineer (AI Automation Focus)",
    company: "Mswitch Group (Techspecialist Limited)",
    period: "Jan 2026 - Present",
    summary: "Building AI-powered automation with Azure AI and Power Platform (30% less manual processing), the AI recruitment platform's CV scoring and interview automation, the Techspecialist corporate site, and kadirsalami.com (100 Lighthouse)."
  },
  {
    title: "Frontend Developer",
    company: "Shamzbridge Consult",
    period: "Jan 2024 - Dec 2024",
    summary: "Delivered responsive web apps for consulting, education, and housing (HMIP, NECA, Studio3) as part of a frontend team, improving engagement ~25% via performance and UX work."
  },
  {
    title: "Frontend Developer Trainee",
    company: "TIIDELab Cohort 5",
    period: "2023 - 2024",
    summary: "Intensive program in React, JS, responsive design, and Git workflows."
  }
];

export const certifications = [
  {
    title: "Developing AI Apps and Agents on Microsoft Azure (AI-103)",
    issuer: "Microsoft Certified"
  },
  {
    title: "Nigeria Certificate in Education (NCE), Computer Science / Physics",
    issuer: "Kwara State College of Education, Oro · 2024"
  },
  {
    title: "Frontend Developer — Cohort 5 (2023)",
    issuer: "TIIDELab Initiative"
  }
];

export const contactLinks = [
  { label: "abbastaofeeq.001@gmail.com", href: "mailto:abbastaofeeq.001@gmail.com", icon: Mail, external: false },
  { label: "+234 902 859 2933", href: "tel:+2349028592933", icon: Phone, external: false },
  { label: "Abuja, Nigeria", href: "#contact", icon: MapPin, external: false },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abbas-taofeeq-olakunle1/", icon: LinkedInIcon, external: true },
  { label: "GitHub", href: "https://github.com/AbbasTaofeeq", icon: GitHubIcon, external: true },
  { label: "Instagram", href: "https://www.instagram.com/abbastaofeeq_123/", icon: InstagramIcon, external: true },
  { label: "@mayortaofeq", href: "https://x.com/mayortaofeq", icon: XIcon, external: true, hideLabel: true }
];

export const socialLinks: ContactLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abbas-taofeeq-olakunle1/", icon: LinkedInIcon, external: true },
  { label: "GitHub", href: "https://github.com/AbbasTaofeeq", icon: GitHubIcon, external: true },
  { label: "Instagram", href: "https://www.instagram.com/abbastaofeeq_123/", icon: InstagramIcon, external: true },
  { label: "X", href: "https://x.com/mayortaofeq", icon: XIcon, external: true }
];
