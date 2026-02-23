import type { CertificateItem } from "@/components/common/certificates-list";
import type { ExperienceItem } from "@/components/common/experience-timeline";

export const certificates: CertificateItem[] = [
  {
    title: "Proficiency Examination for Computer Programming",
    issuer: "DICT-XI",
    date: "2025",
    imageUrl: "/edps_cert.png",
  },
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
    title: "DICT Python Programming Essential Course",
    issuer: "DICT-XI",
    date: "2023",
    imageUrl: "/dict-xi-python-essentials.jpg",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    title: "Full Stack Web Developer",
    company: "Camillians Home Health Services",
    period: "2025 - Present",
  },
  {
    title: "Full Stack Web Developer",
    company: "Green Home Improvements Plus",
    period: "2023 - 2025",
  },
  {
    title: "Frontend / Wordpress Developer",
    company: "Wozinga Pty. Ltd.",
    period: "2021 - 2023",
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

export const techCategories = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Astro",
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
  DevOps: ["Docker", "GitHub Actions", "Vercel", "Render", "DigitalOcean Droplets"],
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
