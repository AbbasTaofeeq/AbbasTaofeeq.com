export type ProjectStory = {
  problem: string;
  stake: string;
  fix: string;
  result: string;
};

export type Project = {
  slug: string;
  title: string;
  seoTitle: string;
  category: string;
  year: string;
  cardOutcome: string;
  metricPill: string;
  outcomeType: "solo" | "team";
  heroTldr: string;
  image: string;
  imageAlt: string;
  /** Shown instead of `image` when a project has no real screenshot (image === ""). */
  illustrationType?: "ai-sorting";
  liveUrl?: string;
  role: string;
  teamNote?: string;
  story: ProjectStory;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "ai-recruitment-platform",
    title: "AI Recruitment Platform",
    seoTitle: "AI Recruitment Platform - Automating HR Screening with Azure AI",
    category: "AI / HR Automation",
    year: "2026",
    cardOutcome: "An HR inbox with 500 CVs that now sorts itself",
    metricPill: "30% less manual work",
    outcomeType: "solo",
    heroTldr:
      "HR teams were opening every CV by hand. I built an AI that reads, scores, and interviews first, so they only talk to the top 15.",
    image: "",
    imageAlt: "Conceptual illustration of CVs being sorted and matched to a role",
    illustrationType: "ai-sorting",
    role: "Frontend Engineer / AI Automation Engineer — Owned frontend + AI workflow logic",
    story: {
      problem:
        "Imagine you're the only HR person and 400 people apply for one role. You have to open 400 PDFs, copy names into Excel, guess who is qualified, then call 50 people one by one. It takes 3 days, and you still miss good people because you're tired. That was the reality at Techspecialist.",
      stake:
        "Good candidates were getting ignored, hiring was slow, and the HR team had no time for human conversations — they were stuck doing copy-paste work.",
      fix:
        "I didn't build a chatbot. I built a workflow. When a CV comes in, Azure AI reads it and scores it against the job description in plain language — '8/10, has 3 years React, missing Azure.' Qualified candidates get an instant AI interview that asks the same first-round questions and summarizes the answers. The frontend had to make the AI feel trustworthy — clear scorecards, not black boxes.",
      result:
        "Screening went from 3 days to 3 hours. Recruiters now open a dashboard that says 'Here are your 15 best people today.' The boring work got automated, the human decision stayed human. It's a live internal enterprise tool.",
    },
    stack: ["React.js", "Next.js", "Azure AI", "JavaScript", "Tailwind"],
  },
  {
    slug: "techspecialist-limited",
    title: "Techspecialist Limited",
    seoTitle: "Techspecialist Limited - Executive Intelligence Corporate Site",
    category: "Corporate / AI Readiness",
    year: "2026",
    cardOutcome: "A consulting firm selling AI readiness whose site didn't look ready",
    metricPill: "10 weeks to live dashboard",
    outcomeType: "solo",
    heroTldr:
      "They help executives become AI-ready, but the old site made them look outdated. I rebuilt it to explain complex services like a story, not a brochure.",
    image: "/images/projects/techspecialist.png",
    imageAlt: "Techspecialist corporate site hero with dashboard visuals",
    liveUrl: "https://techspecialistlimited.com/",
    role: "Frontend Engineer / AI Automation — Built and currently manage the full corporate site",
    story: {
      problem:
        "Techspecialist does powerful stuff — executive intelligence, automation, Microsoft transformation. But the old site was full of buzzwords, had no flow, and was bad on mobile. Executives from government and the private sector would leave confused.",
      stake:
        "If a CEO doesn't understand what you do in 20 seconds, you don't get the meeting. They were losing credibility.",
      fix:
        "I sat with the team and mapped how they actually sell: first assess AI readiness, then automate one workflow, then get a dashboard. I turned that sales process into the website structure — no long paragraphs, each service answers what it is, why you need it, and what happens next. Built in Next.js with reusable sections so marketing can add services without a developer.",
      result:
        "Now the site positions them as an AI partner for executives — fast, clear on mobile, with live dashboard visuals showing what executive intelligence actually looks like. I'm still managing and improving it.",
    },
    stack: ["Next.js", "React.js", "Tailwind CSS", "Azure AI", "Microsoft Power Platform"],
  },
  {
    slug: "hmip-nmrc",
    title: "HMIP — Housing Market Information Portal",
    seoTitle: "HMIP - Housing Market Portal Built With Team - NMRC",
    category: "Housing / Data Portal",
    year: "2026",
    cardOutcome: "A live housing data portal we built as a team that Nigerians now use to understand mortgages",
    metricPill: "Part of team • Live product",
    outcomeType: "team",
    heroTldr:
      "I was part of the frontend team that turned NMRC's complex housing data from PDFs and tables into simple tools people can use on their phone.",
    image: "/images/projects/hmip.png",
    imageAlt: "HMIP portal with mortgage calculator and housing data cards",
    role: "Frontend Engineer (Team) — Reusable components, Data UX, Responsive & Accessibility",
    teamNote: "Team Project — Built with a cross-functional team at Shamzbridge Consult for NMRC",
    story: {
      problem:
        "Before HMIP, if you wanted to know what a house actually costs per month in Nigeria, you had to dig through PDF reports and complicated tables. The data was there, but you needed to be an expert to use it. On mobile, it was almost impossible.",
      stake: "The people who needed this info most — first-time buyers, young families — were giving up.",
      fix:
        "I worked as part of the frontend team. Our job was to make the data human. We threw away the table-first approach — my focus was building reusable frontend pieces: mortgage calculators with sliders instead of 10-field forms, housing data cards written in plain English like 'this means you can afford a 2-bed in this area,' and making sure everything was fully responsive and accessible. I worked closely with backend and product to make complex calculations feel like a conversation.",
      result:
        "The portal is live today, solving that exact problem. Task completion improved ~25% after our release. Complex housing info became a conversation instead of a calculation — a product we built as a team that's out there being used.",
    },
    stack: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    slug: "neca-ict-academy",
    title: "NECA ICT Academy",
    seoTitle: "NECA ICT Academy - Team Built Learning Platform",
    category: "Education / Employability",
    year: "2025",
    cardOutcome: "A live learning platform we built to help 500+ young Nigerians find ICT skills",
    metricPill: "Part of team • 500+ learners",
    outcomeType: "team",
    heroTldr:
      "I was part of the team that built NECA ICT Academy — a platform that takes young people from 'I want digital skills' to 'I'm enrolled' without confusion.",
    image: "/images/projects/neca-ict.png",
    imageAlt: "NECA ICT Academy program discovery interface",
    liveUrl: "https://www.necaictacademy.org",
    role: "Frontend Engineer (Team) — Learner enrolment flows, Program discovery UI, Accessibility",
    teamNote: "Team Project — Built with a cross-functional team for NECA",
    story: {
      problem:
        "NECA had amazing programs for employability and ICT skills, but so many courses were listed that a 19-year-old visiting would get lost. 'Where do I start?' was the biggest question, and enrollment was confusing.",
      stake: "If the first step to learning feels confusing, you won't start learning at all.",
      fix:
        "As part of the frontend team, we re-thought the flow around the learner, not the course catalog — grouping by goal, like 'I want a job' or 'I want to start a business.' I was responsible for building the responsive interfaces for program discovery and enrollment, focusing on clear hierarchy, fast loading on low-end Android, and WCAG accessibility.",
      result:
        "The platform is live and has onboarded 500+ learners. We built it to solve enrollment confusion — today it's doing that, guiding learners to the right program in about 2 minutes.",
    },
    stack: ["React.js", "Tailwind CSS", "Responsive Design"],
  },
  {
    slug: "studio3-launchpad",
    title: "Studio3 Launchpad",
    seoTitle: "Studio3 Launchpad - Team Built EdTech Platform",
    category: "EdTech / Learning Platform",
    year: "2025",
    cardOutcome: "A cohort-based platform we built as a team, making affordable training feel premium",
    metricPill: "Part of team • +40% cohort growth",
    outcomeType: "team",
    heroTldr:
      "I was part of the team behind Studio3 Launchpad — we took affordable, practical tech training and built a platform experience learners could trust.",
    image: "/images/projects/studio3.png",
    imageAlt: "Studio3 Launchpad course discovery and cohort timeline",
    liveUrl: "https://www.studio3launchpad.com/",
    role: "Frontend Engineer (Team) — Course discovery UI, Information architecture, Learner engagement",
    teamNote: "Team Project — Built with a cross-functional team",
    story: {
      problem:
        "Studio3 had great affordable courses, but the old experience didn't feel trustworthy. Learners couldn't tell which course was for beginners, when the next cohort starts, or why to pick this over a more expensive option.",
      stake: "Good, affordable education was losing students just because the site looked cluttered.",
      fix:
        "We built this as a team. My contribution was frontend — developing responsive UI sections for course discovery, cohort timelines, and student outcomes, and fixing the information architecture with 'start here if new' paths, clear dates, and social proof. No heavy animations, just clean hierarchy and speed.",
      result:
        "The platform is live and cohort growth went up 40% after our work. We built it to solve trust and discovery — now it's solving that for every new cohort enrolling.",
    },
    stack: ["React.js", "Tailwind CSS"],
  },
  {
    slug: "kadir-salami",
    title: "Kadir Salami — Executive Branding",
    seoTitle: "Kadir Salami - Executive Branding Website",
    category: "Executive Branding",
    year: "2026",
    cardOutcome: "An executive respected offline but invisible online — now has a home",
    metricPill: "100 Lighthouse • Solo build",
    outcomeType: "solo",
    heroTldr:
      "He had experience and a network, but Google showed nothing. I built a one-page presence that says credible in 5 seconds.",
    image: "/images/projects/kadir.png",
    imageAlt: "Kadir Salami executive branding site hero",
    liveUrl: "https://kadirsalami.com/",
    role: "Frontend Engineer — Design + Build — Solo",
    story: {
      problem:
        "Kadir Salami is known in business circles, but online he had no home — no site, no story, no place for partners to verify him. In today's world, if you don't exist online, you don't exist.",
      stake: "Partnerships and opportunities were lost because there was no digital proof of credibility.",
      fix:
        "I didn't build a big corporate site — executives don't need 10 pages, they need one perfect page. I designed a single page that does three things: who he is, what he stands for, how to reach him. Super fast, accessible, designed to look expensive without being loud. Optimized to hit 100 on Lighthouse.",
      result:
        "He now has a link he can drop in any bio, proposal, or WhatsApp message that instantly builds trust — a professional executive presence, live.",
    },
    stack: ["Next.js", "Tailwind CSS"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
