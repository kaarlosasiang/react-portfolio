import { CustomDock } from "@/components/common/custom-dock";
import { HeaderSection } from "@/components/common/header-section";
import { AboutCard } from "@/components/common/about-card";
import {
  CertificatesList,
  type CertificateItem,
} from "@/components/common/certificates-list";
import {
  ExperienceTimeline,
  type ExperienceItem,
} from "@/components/common/experience-timeline";
import { TechStackCategories } from "@/components/common/tech-stack-categories";
import {
  ProjectList,
  type ProjectItem,
} from "@/components/common/project-list";

// Types are imported from components

const certificates: CertificateItem[] = [
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
  },
  { title: "React Developer", issuer: "Meta (Coursera)", date: "2024" },
  { title: "Backend Development", issuer: "HackerRank", date: "2024" },
];

const experienceItems: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "KamAI",
    period: "2025 - Present",
  },
  {
    title: "Frontend Web Developer",
    company: "Freelance",
    period: "2021 - 2025",
  },
  {
    title: "BS Information Technology",
    company: "Davao Oriental State College",
    period: "2021 - 2025",
  },
  {
    title: "Hello World! 👋",
    company: "Wrote my first line of code",
    period: "2020",
  },
];

const projects: ProjectItem[] = [
  {
    title: "Accounting Software",
    description:
      "Accounting software thesis for BS AgriBusiness Management; I was hired to build it.",
    tags: [
      "Next.js",
      "Express",
      "TypeScript",
      "Multi-tenant",
      "Better Auth",
      "Shadcn UI",
    ],
    href: "#",
    inProgress: true,
  },
  {
    title: "TransitMaster",
    description:
      "TransitMaster is a school vehicle management system for real-time monitoring, route planning, and usage analytics to keep transportation safe and organized.",
    tags: ["React", "Express", "Mapbox", "IoT"],
    href: "#",
  },
  {
    title: "AceTrack",
    description:
      "Attendance management system for a school organization with member check-ins, event tracking, and role-based access.",
    tags: ["React", "Shadcn UI", "Auth", "Multi-tenant"],
    href: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio with smooth animations and clean design.",
    tags: ["Next.js", "Shadcn UI", "Framer Motion"],
    href: "#",
  },
];

const techCategories = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Vite",
    "ESLint",
    "Prettier",
  ],
  Backend: [
    "Node.js",
    "Express",
    "MongoDB",
    "Prisma",
    "OAuth",
    "JWT",
    "REST",
    "Firebase",
    "Appwrite",
    "Supabase",
  ],
  DevOps: ["Docker", "GitHub Actions", "Vercel", "Render"],
  Tools: [
    "Git",
    "GitHub",
    "VS Code",
    "WebStorm",
    "Postman",
    "Trello",
    "Teams",
    "Discord",
    "Figma",
  ],
};

export default function Home() {
  return (
    <div className={`h-full max-w-4xl mx-auto py-5 space-y-5`}>
      <HeaderSection
        name="Kaarlo Sasiang"
        location="Lupon, Davao Oriental, Philippines"
        title="Full Stack Web Developer"
      />
      <div className="grid lg:grid-cols-12 gap-3 items-start">
        <AboutCard />

        <ExperienceTimeline items={experienceItems} />

        <TechStackCategories categories={techCategories} />
        <CertificatesList items={certificates} />

        <ProjectList projects={projects} />
      </div>
      <CustomDock />
    </div>
  );
}
