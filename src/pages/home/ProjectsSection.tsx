import workSample1 from "@/assets//work-sample-1.png";
import workSample2 from "@/assets//work-sample-2.png";
import workSample3 from "@/assets//work-sample-3.png";
import { ExternalLink, Github } from "lucide-react";
import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      image: workSample1,
      title: "Transit Master",
      description:
        "TransitMaster is our capstone project designed to help schools efficiently track and manage their school-owned vehicles. It provides real-time monitoring, route management, and usage analytics to ensure safe and organized transportation for students and staff.",
      tech: ["React", "MapBox", "Shadcn UI", "React Router", "TanStack Query"],
      external: "https://transitmaster-frontend.vercel.app/login",
    },
    {
      image: workSample2,
      title: "AceTrack",
      description:
        "AceTrack is a QR-based attendance system for seamless and precise event and classroom management, providing real-time tracking and analytics.",
      tech: ["React", "Shadcn UI", "React Router", "TanStack Query"],
      external: "https://acetrack.vercel.app/home",
    },
    {
      image: workSample3,
      title: "My Portfolio",
      description:
        "A modern, responsive portfolio website to showcase my skills, projects, and experience. Built with React, Shadcn UI, and Framer Motion, it features smooth animations, a clean design, and an interactive user experience to highlight my work and background.",
      tech: ["React", "Shadcn UI", "React Router", "Framer Motion"],
      github: "https://github.com/kaarlosasiang/react-portfolio",
    },
  ];

  return (
    <section
      className="text-white max-w-5xl w-full flex flex-col justify-center py-16 px-4 sm:px-8 md:px-0" // Added responsive horizontal padding and reduced py on mobile
      id="work"
    >
      <div className="flex items-center section-title mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl md:text-2xl flex items-center gap-3 sm:gap-5 font-fira-code font-medium">
          <span className="text-accent font-normal">03.</span> Some Things I’ve
          Built
          <div className="hidden sm:flex flex-col gap-5 relative after:content-[''] after:block after:bg-[#999] after:h-px after:w-[120px] sm:after:w-[200px] after:mx-auto"></div>
        </h2>
      </div>

      <div className="flex flex-col gap-12 md:gap-36">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <>
              {/* Mobile: Halcyon-style card */}
              <div
                key={`mobile-${idx}`}
                className="relative w-full max-w-[95vw] mx-auto rounded-lg shadow-lg overflow-hidden flex flex-col md:hidden"
                style={{ minHeight: "320px" }}
              >
                {/* Background image */}
                <img
                  src={project.image}
                  alt="Project screenshot"
                  className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#091612]/90 z-10" />
                {/* Content */}
                <div className="relative z-20 flex flex-col justify-between p-4 w-full">
                  <span className="text-accent text-sm font-mono">
                    Featured Project
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-base mb-3">
                    {project.description}
                  </p>
                  <div className="text-xs font-mono text-slate-400 mb-3">
                    {project.tech.join(" ")}
                  </div>
                  <div className="flex gap-4 mt-2 text-white">
                    <a
                      href={project.github}
                      className="hover:text-accent transition"
                      aria-label="GitHub"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.external}
                      className="hover:text-accent transition"
                      aria-label="External Link"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Desktop: Alternating layout */}
              <div
                key={`desktop-${idx}`}
                className={
                  "relative hidden md:flex flex-col md:flex-row gap-0 items-center md:items-stretch group " +
                  (isEven ? "md:flex-row" : "md:flex-row-reverse")
                }
              >
                {/* Project Image */}
                <div className="md:w-2/3 w-full rounded-lg overflow-hidden shadow-lg relative group max-w-full">
                  <img
                    src={project.image}
                    alt="Project screenshot"
                    className="object-cover w-full h-full min-h-[180px] sm:min-h-[220px] md:min-h-[260px] max-h-[220px] sm:max-h-[320px] md:max-h-none opacity-100 md:opacity-70 transition duration-300"
                  />
                  {/* Overlay */}
                  <div
                    className={
                      isEven
                        ? "absolute inset-0 bg-[#112B24] opacity-50 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none"
                        : "absolute inset-0 bg-accent opacity-60 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none"
                    }
                  />
                </div>
                {/* Project Content */}
                <div
                  className={
                    isEven
                      ? "md:w-2/3 w-full flex flex-col justify-center z-10 mt-2 md:mt-0 md:pl-12 md:-ml-24 text-left md:text-right"
                      : "md:w-2/3 w-full flex flex-col justify-center z-10 mt-2 md:mt-0 md:pr-12 md:-mr-24 text-left md:text-left"
                  }
                >
                  <p
                    className={`text-accent text-xs sm:text-sm font-fira-code mb-1 sm:mb-2 text-left md:${
                      isEven ? "text-right" : "text-left"
                    }`}
                  >
                    Featured Project
                  </p>
                  <h3
                    className={`text-lg sm:text-xl md:text-2xl font-semibold text-slate-200 mb-2 sm:mb-4 break-words text-left md:${
                      isEven ? "text-right" : "text-left"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <div className="bg-[#1a2633] p-3 sm:p-5 rounded shadow mb-3 sm:mb-4 text-slate-300 text-sm sm:text-base max-w-full md:max-w-xl break-words text-left">
                    {project.description}
                  </div>
                  <ul
                    className={
                      "flex flex-wrap gap-2 sm:gap-4 text-xs font-fira-code text-slate-400 mb-3 sm:mb-4 justify-start " +
                      (isEven ? "md:justify-end" : "md:justify-start")
                    }
                  >
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div
                    className={
                      "flex gap-3 sm:gap-4 mt-1 sm:mt-2 justify-start " +
                      (isEven ? "md:justify-end" : "md:justify-start")
                    }
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="hover:text-accent transition"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        className="hover:text-accent transition"
                        aria-label="External Link"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}
