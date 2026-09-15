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
  "Nigeria Certificate in Education (NCE), Computer Science / Physics (2024)",
  "Frontend Developer - Cohort 5 (2023) - TIIDELab"
];

export const contactLinks = [
  { label: "abbastaofeeq.001@gmail.com", href: "mailto:abbastaofeeq.001@gmail.com", icon: Mail, external: false },
  { label: "+234 902 859 2933", href: "tel:+2349028592933", icon: Phone, external: false },
  { label: "Abuja, Nigeria", href: "#contact", icon: MapPin, external: false },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abbas-taofeeq-olakunle1/", icon: LinkedInIcon, external: true },
  { label: "GitHub", href: "https://github.com/AbbasTaofeeq", icon: GitHubIcon, external: true },
  { label: "Instagram", href: "https://www.instagram.com/abbastaofeeq_123/", icon: InstagramIcon, external: true },
  { label: "@AbbasTaofeeq", href: "https://x.com/AbbasTaofeeq", icon: XIcon, external: true }
];

export const socialLinks: ContactLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abbas-taofeeq-olakunle1/", icon: LinkedInIcon, external: true },
  { label: "GitHub", href: "https://github.com/AbbasTaofeeq", icon: GitHubIcon, external: true },
  { label: "Instagram", href: "https://www.instagram.com/abbastaofeeq_123/", icon: InstagramIcon, external: true },
  { label: "X", href: "https://x.com/AbbasTaofeeq", icon: XIcon, external: true }
];
