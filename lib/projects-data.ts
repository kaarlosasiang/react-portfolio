export type ProjectDetail = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  inProgress?: boolean;
  slug: string;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  results?: string;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  relatedProjects?: string[];
};

export const projectsData: ProjectDetail[] = [
  {
    id: "1",
    title: "Accounting Software",
    slug: "accounting-software",
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
    href: "/project/accounting-software",
    inProgress: true,
    overview:
      "A comprehensive accounting software solution built as a thesis project for BS AgriBusiness Management. This multi-tenant application provides robust financial management tools tailored for agricultural businesses.",
    challenge:
      "The main challenge was building a secure multi-tenant architecture that could handle complex accounting operations while maintaining data isolation between clients. Additionally, the system needed to support role-based access control and real-time financial reporting.",
    solution:
      "Implemented a multi-tenant architecture using Next.js on the frontend with Express backend. Used Better Auth for secure authentication and role-based access. Designed a normalized database schema that efficiently handles multi-tenancy while maintaining data integrity.",
    features: [
      "Multi-tenant architecture with complete data isolation",
      "Role-based access control (RBAC)",
      "Real-time financial dashboards",
      "Automated invoice generation",
      "Account reconciliation tools",
      "Financial reporting and analytics",
    ],
    technologies: [
      "Next.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Shadcn UI",
      "Better Auth",
    ],
    results:
      "Successfully delivered a production-ready accounting software that is currently being used by agricultural businesses for their financial management needs.",
    image: "/am-fintrass_preview.png",
    relatedProjects: ["2", "3"],
  },
  {
    id: "2",
    title: "TransitMaster",
    slug: "transit-master",
    description:
      "TransitMaster is a school vehicle management system for real-time monitoring, route planning, and usage analytics to keep transportation safe and organized.",
    tags: ["React", "Express", "Mapbox", "IoT"],
    href: "/project/transit-master",
    demoUrl: "https://transitmaster.example.com",
    githubUrl: "https://github.com",
    overview:
      "TransitMaster is a comprehensive vehicle management system designed specifically for schools. It provides real-time GPS tracking, intelligent route planning, and detailed usage analytics to ensure safe and efficient school transportation.",
    challenge:
      "Integrating real-time GPS data from multiple vehicles, displaying them on interactive maps, and providing route optimization for multiple bus routes running simultaneously presented significant technical challenges.",
    solution:
      "Built a React frontend with Mapbox for real-time vehicle tracking and route visualization. Connected IoT devices on vehicles to an Express backend that processes location data in real-time. Implemented efficient route optimization algorithms using geographic data.",
    features: [
      "Real-time GPS tracking of all vehicles",
      "Interactive map visualization with Mapbox",
      "Intelligent route optimization",
      "Student check-in/check-out system",
      "Driver and admin dashboards",
      "Usage analytics and reports",
      "SMS/push notifications for parents",
    ],
    technologies: [
      "React",
      "Express.js",
      "Mapbox API",
      "IoT/GPS hardware",
      "WebSocket for real-time updates",
      "Node.js",
    ],
    results:
      "Deployed in a school with 15+ buses serving 2000+ students, reducing average transportation time by 20% and improving safety monitoring.",
    image: "/transit-master_preview.png",
    relatedProjects: ["1", "3"],
  },
  {
    id: "3",
    title: "AceTrack",
    slug: "ace-track",
    description:
      "Attendance management system for a school organization with member check-ins, event tracking, and role-based access.",
    tags: ["React", "Shadcn UI", "Auth", "Multi-tenant"],
    href: "/project/ace-track",
    overview:
      "AceTrack is a modern attendance management system built for school organizations. It streamlines member tracking, event management, and provides detailed attendance analytics with an intuitive user interface.",
    challenge:
      "Creating a system that could handle multiple organizations/clubs with their own member bases, different access levels, and real-time attendance tracking without compromising performance or data security.",
    solution:
      "Developed a multi-tenant React application with role-based access control. Implemented a clean authentication system to manage different user roles. Used Shadcn UI for a polished interface with excellent UX.",
    features: [
      "Multi-organization support",
      "Real-time member check-in",
      "Event creation and management",
      "Attendance analytics and reports",
      "Role-based access control",
      "Mobile-friendly interface",
      "Export attendance to CSV",
    ],
    technologies: [
      "React",
      "Shadcn UI",
      "TypeScript",
      "Authentication system",
      "REST API",
    ],
    results:
      "Currently used by 5+ school organizations with over 500 active members tracking attendance across multiple events.",
    image: "/acetrack_preview.png",
    relatedProjects: ["1", "2"],
  },
  {
    id: "4",
    title: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "Modern responsive portfolio with smooth animations and clean design.",
    tags: ["Next.js", "Shadcn UI", "Framer Motion"],
    href: "/project/portfolio-website",
    overview:
      "A modern, responsive portfolio website built with Next.js showcasing skills, projects, and experience. Features smooth animations and a clean design to create an engaging user experience.",
    challenge:
      "Designing and building a portfolio that stands out while maintaining excellent performance, accessibility, and responsive design across all devices.",
    solution:
      "Leveraged Next.js for optimal performance with SSG and SSR. Implemented Framer Motion animations for smooth, engaging interactions. Used Shadcn UI components for consistent, accessible design. Carefully optimized images and fonts for fast loading.",
    features: [
      "Responsive design that works on all devices",
      "Smooth scroll animations with Framer Motion",
      "Dark/light theme support",
      "Project showcase with detailed views",
      "Experience timeline",
      "Tech stack display",
      "Certificate section",
      "Fast loading with Next.js optimization",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Shadcn UI",
      "Framer Motion",
      "Tailwind CSS",
    ],
    results:
      "Created a professional portfolio that effectively showcases projects and skills, serving as both a portfolio and a demonstration of modern web development practices.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    relatedProjects: ["1", "3"],
  },
];

export function getProjectBySlug(slug: string) {
  return projectsData.find((project) => project.slug === slug);
}

export function getProjectsList() {
  return projectsData.map(({ overview, challenge, solution, features, results, relatedProjects, ...rest }) => rest);
}

export function getRelatedProjects(projectId: string, limit: number = 2) {
  const project = projectsData.find((p) => p.id === projectId);
  if (!project?.relatedProjects) return [];
  return project.relatedProjects
    .map((id) => projectsData.find((p) => p.id === id))
    .filter(Boolean)
    .slice(0, limit) as ProjectDetail[];
}

export function generateTableOfContents(project: ProjectDetail) {
  return [
    { id: "overview", title: "Overview" },
    { id: "challenge", title: "The Challenge" },
    { id: "solution", title: "The Solution" },
    { id: "features", title: "Key Features" },
    { id: "technologies", title: "Technologies Used" },
    ...(project.results ? [{ id: "results", title: "Results & Impact" }] : []),
  ];
}
