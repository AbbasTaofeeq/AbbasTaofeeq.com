import {
  Bot,
  Code2,
  Gauge,
  Mail,
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
  { value: "4+", label: "Years building frontend products" },
  { value: "5", label: "Live projects and AI capability highlights" },
  { value: "AI", label: "Integration mindset for optimization and automation" },
  { value: "Remote", label: "Ready for global engineering teams" }
];

export const expertise = [
  {
    category: "Frontend Development",
    icon: Code2,
    items: ["Next.js", "React.js", "JavaScript", "TypeScript", "Tailwind CSS", "REST APIs"]
  },
  {
    category: "AI & Automation",
    icon: Bot,
    items: ["Azure AI", "Prompt Engineering", "AI Integration", "Microsoft Copilot Studio", "Microsoft Foundry"]
  },
  {
    category: "Tools & Platforms",
    icon: Settings2,
    items: ["Git", "Vercel", "GitHub", "CMS-ready structure", "API workflows"]
  },
  {
    category: "Performance & Optimization",
    icon: Gauge,
    items: ["SEO", "Accessibility", "Core Web Vitals", "Performance Optimization", "Conversion UX"]
  },
  {
    category: "Collaboration / Workflow",
    icon: Users2,
    items: ["Remote teams", "Technical support", "Product delivery", "Documentation", "Stakeholder alignment"]
  }
];

export const projects: Project[] = [
  {
    name: "AI-Integrated Product Work",
    type: "AI / Optimization / Conversion",
    description:
      "Beyond building websites, I integrate AI solutions into products to improve engagement, automation, personalization, and conversion.",
    impact:
      "Expanded product value beyond static web presence into smarter, more adaptive digital experiences.",
    caseStudy: {
      overview:
        "This capability block shows how I combine frontend engineering with AI-powered product thinking. The focus is not novelty; it is using AI to make digital products more useful, responsive, and conversion-aware.",
      goal:
        "The goal is to help businesses move from static web experiences to intelligent product flows that can improve engagement, reduce friction, and automate important user or operational interactions.",
      contribution:
        "I design and integrate AI-enhanced features into product experiences, connecting interface design, prompt engineering, Azure AI capabilities, and automation workflows into practical user journeys.",
      outcome:
        "The result is a stronger product experience that can support personalization, smarter interaction, better optimization, and more useful decision support for businesses and end users."
    },
    stack: ["AI Integration", "Azure AI", "Automation", "Product UX", "Conversion"],
    link: "#contact",
    icon: "ai",
    accent: "bg-[linear-gradient(135deg,#312e81,#7c3aed_45%,#14b8a6)]"
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
    company: "Techspecialist Limited",
    period: "2025 - Present",
    summary:
      "Supporting automation-focused product delivery by connecting business workflows, AI-enhanced solutions, and practical frontend experiences that improve efficiency and engagement."
  },
  {
    title: "Frontend Developer / Technical Support",
    company: "Mswitch Group",
    period: "2023 - 2025",
    summary:
      "Built and supported digital product interfaces while solving technical issues across frontend delivery, user support, implementation, and operational product needs."
  },
  {
    title: "Frontend Developer",
    company: "Shamzbridge Consult",
    period: "2024 - 2025",
    summary:
      "Delivered conversion-focused web interfaces for consulting and capacity-building services, improving brand clarity, service communication, and responsive user journeys."
  }
];

export const certifications = [
  "Microsoft Certified: Azure AI Engineer Associate (AI-103)",
  "TIIDELab Initiative Cohort 5 - Frontend Developer (2023)"
];

export const contactLinks = [
  {
    label: "abbastaofeeq.001@gmail.com",
    href: "mailto:abbastaofeeq.001@gmail.com",
    icon: Mail,
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
