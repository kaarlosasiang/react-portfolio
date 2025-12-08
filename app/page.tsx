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
} from "@/components/common/project-list";
import { getProjectsList } from "@/lib/projects-data";

// Types are imported from components

const certificates: CertificateItem[] = [
  {
    title: "DevFest 2025 Participant",
    issuer: "GDG Davao",
    date: "2025",
    imageUrl: "/devfest_davao_2025.png",
  },
  {
    title: "DevFest 2023 Participant",
    issuer: "GDG Davao",
    date: "2023",
    imageUrl: "/devfest_davao_2023.jpg",
  },
  {
    title: "DOCT Python Programming Essential Course",
    issuer: "DICT-XI",
    date: "2023",
    imageUrl: "/dict-xi-python-essentials.jpg",
  },
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
    company: "Davao Oriental State University",
    period: "2021 - 2025",
  },
  {
    title: "Hello World! 👋",
    company: "Wrote my first line of code",
    period: "2020",
  },
];

const projects = getProjectsList();

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
    <div className={`h-full max-w-4xl mx-auto py-5 space-y-5 px-5 lg:px-0 pb-20 relative`}>
      <HeaderSection
        name="Kaarlo Sasiang"
        location="Lupon, Davao Oriental, Philippines"
        title="Full Stack Web Developer"
      />
      <div className="grid sm:grid-cols-12 gap-3 items-start">
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
