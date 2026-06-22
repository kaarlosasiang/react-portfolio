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
    title: "AMFINTRASS",
    slug: "accounting-software",
    description:
      "An integrated enterprise management software for Philippine farmers, MSMEs, and agricultural cooperatives, automating accounting, inventory, and financial monitoring to replace error-prone manual recordkeeping.",
    tags: [
      "Next.js",
      "Express",
      "TypeScript",
      "Multi-tenant",
      "Better Auth",
      "Shadcn UI",
    ],
    href: "/project/accounting-software",
    demoUrl: "https://amfintrass.com",
    githubUrl: "https://github.com/kaarlosasiang/accounting-software",
    inProgress: true,
    overview:
      "AMFINTRASS is an integrated enterprise management software developed to address the widespread reliance on manual recordkeeping among Philippine SMEs, farmers, and agricultural cooperatives. Despite rapid growth in digital payment adoption, back-office processes remained largely manual — causing errors, inefficiency, and difficulties complying with government regulations. The system automates accounting, inventory, and financial monitoring to improve efficiency, accuracy, and support digital transformation among Philippine enterprises. Developed under an Agile methodology with pilot user collaboration and structured usability evaluation.",
    challenge:
      "Many SMEs globally and in the Philippines still rely on manual recordkeeping, leading to errors, inefficiency, and compliance difficulties with government regulations. Farmers lacked digital tools to organize income and expenses; MSMEs struggled with paperwork and transparency in daily financial activities; agricultural cooperatives had no streamlined way to manage member transactions and reporting. The challenge was building a single integrated platform that could serve these distinct user types, each with different workflows and access requirements.",
    solution:
      "Built as a multi-tenant web application using Next.js, Express, and PostgreSQL, with Better Auth handling role-based access for different user types — farmers, MSMEs, and cooperative administrators. The system automates accounting workflows, inventory tracking, and financial reporting. Developed iteratively using Agile methodology, with pilot user testing and structured feedback loops to validate usability and impact before tech transfer to target beneficiaries.",
    features: [
      "Automated accounting and financial monitoring",
      "Inventory management and transaction tracking",
      "Income and expense organization for farmers",
      "Member transaction management for agricultural cooperatives",
      "Financial reporting and government compliance tools",
      "Role-based access for farmers, MSMEs, and cooperatives",
      "Multi-tenant architecture with complete data isolation",
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
      "Currently in active use by farmers, MSMEs, and agricultural cooperatives in the Philippines. The system replaces manual recordkeeping workflows, reducing errors and improving financial transparency. Validated through pilot user testing with structured feedback and performance metrics, and documented for academic publication to support research on digital transformation in Philippine agribusiness.",
    image: "/am-fintrass_preview.png",
    relatedProjects: ["2", "3"],
  },
  {
    id: "2",
    title: "TransitMaster",
    slug: "transit-master",
    description:
      "A hardware and web-based vehicle scheduling and monitoring system for Davao Oriental State University, combining real-time GPS tracking with route deviation alerts and centralized reservation management.",
    tags: ["React", "Express", "MongoDB", "Shadcn UI", "IoT", "ESP32"],
    href: "/project/transit-master",
    githubUrl: "https://github.com/kaarlosasiang/transitmaster_frontend",
    overview:
      "TransitMaster is a hardware and web-based system developed to address the challenges of manual vehicle scheduling and monitoring within Davao Oriental State University. The system allows university staff and faculty to register and book vehicle reservations, displays vehicle and driver availability, schedules and assigns vehicles and drivers, tracks vehicle routes in real time, notifies administrators of route deviations, and stores vehicle location and travel history for monthly reports. The Agile methodology was applied to ensure iterative development and continuous improvement.",
    challenge:
      "The absence of a centralized system for scheduling and tracking vehicles resulted in a lack of transparency regarding vehicle and driver availability, and limited capability to monitor whether drivers adhered to assigned routes. Manual processes created scheduling inefficiencies and reduced accountability across university transportation operations.",
    solution:
      "The web-based component was built with ReactJS, Tailwind CSS, Shadcn UI, ExpressJS, and MongoDB, providing a scalable and accessible platform for reservation management and scheduling. The hardware component for real-time vehicle tracking was developed using an ESP32 microcontroller, Neo-6M GPS module, and SIM800L GSM module, enabling live route monitoring and deviation detection.",
    features: [
      "Vehicle reservation booking for university staff and faculty",
      "Real-time vehicle and driver availability display",
      "Vehicle and driver scheduling and assignment",
      "Real-time GPS route tracking via ESP32 hardware",
      "Route deviation detection and administrator notifications",
      "Vehicle location and travel history storage for monthly reports",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Shadcn UI",
      "Express.js",
      "MongoDB",
      "ESP32",
      "Neo-6M GPS",
      "SIM800L GSM",
    ],
    results:
      "Evaluated using ISO/IEC 25010 standards across 15 respondents — faculty, drivers, and administrators. Mean ratings of 4.33 (faculty), 3.72 (drivers), and 4.27 (administrators) indicate users generally agreed or strongly agreed that the system is functional, user-friendly, and reliable. TransitMaster serves as an effective solution for university vehicle scheduling and tracking.",
    image: "/transit-master_preview.png",
    relatedProjects: ["1", "3"],
  },
  {
    id: "3",
    title: "AceTrack",
    slug: "ace-track",
    description:
      "Attendance management system for a school organization with member check-ins, event tracking, and role-based access.",
    tags: ["React", "Shadcn UI", "TypeScript", "Multi-tenant"],
    href: "/project/ace-track",
    demoUrl: "https://acetrack.vercel.app/",
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
      "TypeScript",
      "Shadcn UI",
      "Vercel",
    ],
    results:
      "Currently used by 5+ school organizations with over 500 active members tracking attendance across multiple events.",
    image: "/acetrack_preview.png",
    relatedProjects: ["1", "2"],
  },
  {
    id: "4",
    title: "Klasee",
    slug: "klasee",
    description:
      "An offline-first classroom management LMS for educational institutions, covering courses, attendance, assessments, and file storage across instructor and student roles.",
    tags: ["Next.js", "Express", "MongoDB", "Shadcn UI", "PWA", "TypeScript"],
    href: "/project/klasee",
    githubUrl: "https://github.com/kaarlosasiang/klasee",
    inProgress: true,
    overview:
      "Klasee is an offline-first classroom workflow platform built as a pnpm monorepo. It provides educational institutions with a full LMS covering courses, sections, attendance, assessments (quizzes and assignments), enrollments, announcements, and file storage via Google Drive and Cloudinary. Designed with PWA readiness to remain usable in unstable connectivity environments common in educational settings.",
    challenge:
      "Building a reliable LMS for environments with unstable internet connectivity required an offline-first architecture that could sync data seamlessly when a connection is restored. The platform also needed to support distinct instructor and student workflows within a single application, with strict role-based access, shared validation logic, and a shared UI component library maintained across a monorepo.",
    solution:
      "Architected as a pnpm monorepo with a Next.js 16 App Router frontend and an Express 5 API backend. Better Auth handles authentication and RBAC for instructor, student, and admin roles. Shared Zod validators are used across both the frontend and backend for consistent data validation. The offline-first approach uses a sync-ready architecture with PWA capabilities built in from the start.",
    features: [
      "Course and section management for instructors",
      "Offline-first attendance tracking with sync",
      "Quiz and assignment creation and submission",
      "Student enrollment and grade management",
      "Announcements and messaging system",
      "File storage via Google Drive and Cloudinary",
      "Role-based dashboards for instructors and students",
      "PWA support for low-connectivity environments",
    ],
    technologies: [
      "Next.js 16",
      "Express 5",
      "MongoDB",
      "Better Auth",
      "Zustand",
      "Shadcn UI",
      "TypeScript",
      "pnpm Workspaces",
    ],
    image: "/klasee_preview.png",
    relatedProjects: ["3", "2"],
  },
  // {
  //   id: "5",
  //   title: "Portfolio Website",
  //   slug: "portfolio-website",
  //   description:
  //     "Modern responsive portfolio with smooth animations and clean design.",
  //   tags: ["Next.js", "Shadcn UI", "Framer Motion"],
  //   href: "/project/portfolio-website",
  //   overview:
  //     "A modern, responsive portfolio website built with Next.js showcasing skills, projects, and experience. Features smooth animations and a clean design to create an engaging user experience.",
  //   challenge:
  //     "Designing and building a portfolio that stands out while maintaining excellent performance, accessibility, and responsive design across all devices.",
  //   solution:
  //     "Leveraged Next.js for optimal performance with SSG and SSR. Implemented Framer Motion animations for smooth, engaging interactions. Used Shadcn UI components for consistent, accessible design. Carefully optimized images and fonts for fast loading.",
  //   features: [
  //     "Responsive design that works on all devices",
  //     "Smooth scroll animations with Framer Motion",
  //     "Dark/light theme support",
  //     "Project showcase with detailed views",
  //     "Experience timeline",
  //     "Tech stack display",
  //     "Certificate section",
  //     "Fast loading with Next.js optimization",
  //   ],
  //   technologies: [
  //     "Next.js",
  //     "React",
  //     "TypeScript",
  //     "Shadcn UI",
  //     "Framer Motion",
  //     "Tailwind CSS",
  //   ],
  //   results:
  //     "Created a professional portfolio that effectively showcases projects and skills, serving as both a portfolio and a demonstration of modern web development practices.",
  //   image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
  //   relatedProjects: ["1", "3"],
  // },
];

export function getProjectBySlug(slug: string) {
  return projectsData.find((project) => project.slug === slug);
}

export function getProjectsList() {
  return projectsData.map(
    ({
      overview,
      challenge,
      solution,
      features,
      results,
      relatedProjects,
      ...rest
    }) => rest,
  );
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
