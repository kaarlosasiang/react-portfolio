import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";
import gradPic from "@/assets/grad-pic.png";
import workSample1 from "@/assets//work-sample-1.png";
import workSample2 from "@/assets//work-sample-2.png";
import workSample3 from "@/assets//work-sample-3.png";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "@/layouts/main/Footer";
import React, { useEffect, useState } from "react";

function FadeInSection({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 50, damping: 18, mass: 0.7 }}
    >
      {children}
    </motion.div>
  );
}

function AboutMeSection() {
  return (
    <section
      className="max-w-5xl text-white flex flex-col justify-center py-20"
      id="about-me"
    >
      <div className="flex items-center section-title">
        <h2 className="text-2xl font-fira-code font-medium">
          <span className="text-accent font-normal">01.</span> About Me
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10">
        <div className="justify-center xl:justify-end flex lg:hidden">
          <div className="border border-primary rounded">
            <img
              src={gradPic}
              className="max-w-[300px] rounded -translate-y-[10px] -translate-x-[10px]"
              alt="Kaarlo Sasiang"
            />
          </div>
        </div>
        <div>
          <p className="text-slate-400 text-justify">
            Hey there! I'm
            <span className="text-accent"> Kaarlo Ruy P. Sasiang</span>, a web
            developer passionate about turning code into real experiences. I
            started playing with HTML, CSS, JavaScript, and PHP back in Grade
            12, and since then, I've been part of three companies as a frontend
            web developer.
            <br />
            <br />
            Currently, I'm deep into mastering ReactJS. Beyond work, I'm also a
            proud member of the web development team at
            <span className="text-primary"> CodeByters</span>, a school
            organization where we're all about making cool things happen with
            code.
            <br />
            <br />
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul
            className="grid text-sm gap-2 mt-3 font-fira-code"
            style={{ gridTemplateColumns: "repeat(2, minmax(140px, 200px))" }}
          >
            <li className="skill-item relative flex items-start gap-3 font-light tracking-widest">
              JavaScript (ES6+)
            </li>
            <li className="skill-item relative flex items-start gap-3 font-light tracking-widest">
              HTML5 &amp; CSS3
            </li>
            <li className="skill-item relative flex items-start gap-3 font-light tracking-widest">
              ReactJS
            </li>
            <li className="skill-item relative flex items-start gap-3 font-light tracking-widest">
              Procedural PHP
            </li>
            <li className="skill-item relative flex items-start gap-3 font-light tracking-widest">
              ParcelJS
            </li>
            <li className="skill-item relative flex items-start gap-3 font-light tracking-widest">
              PWA's
            </li>
            <li className="skill-item relative flex items-start gap-3 font-light tracking-widest">
              Tailwind CSS
            </li>
            <li className="skill-item relative flex items-start gap-3 font-light tracking-widest">
              Material UI
            </li>
            <li className="skill-item relative flex items-start gap-3 font-light tracking-widest">
              Bootstrap
            </li>
            <li className="skill-item relative flex items-start gap-3 font-light tracking-widest">
              WordPress &amp; Wix
            </li>
          </ul>
        </div>
        <div className="justify-center xl:justify-end hidden lg:flex">
          <div className="border border-primary rounded absolute">
            <img
              src={gradPic}
              className="max-w-96 rounded -translate-y-[10px] -translate-x-[10px]"
              alt="Kaarlo Sasiang"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section
      className="text-white w-5xl flex flex-col justify-center py-20"
      id="experience"
    >
      <div className="w-full flex flex-col gap-5">
        {/* Section Title */}
        <div className="flex items-center section-title">
          <h2 className="text-2xl font-fira-code font-medium">
            <span className="text-accent font-normal">02.</span> Experience
          </h2>
        </div>
        {/* GHI+ Experience */}
        <div className="mt-5">
          <div className="flex items-center gap-0 md:gap-5 flex-wrap">
            <h3 className="flex items-center gap-3 text-lg">
              Frontend Web Developer
              <span className="font-bold text-accent font-fira-code">
                @ GHI+
              </span>
            </h3>
          </div>
          <span className="text-xs font-fira-code text-off-white">
            Dec 2023 - Jan 2025
          </span>
          <ul className="my-3 flex flex-col gap-3 list-disc ml-6">
            <li className="task-item text-sm font-light">
              Developing a React-based business portal for Green Home
              Improvements Plus (GHI+) to streamline operations and enhance
              customer experience.
            </li>
            <li className="task-item text-sm font-light">
              Utilizing Material UI for a user-friendly interface and efficient
              data visualization.
            </li>
            <li className="task-item text-sm font-light">
              Integrating MongoDB to manage customer data securely and
              efficiently.
            </li>
            <li className="task-item text-sm font-light">
              Implementing APIs to facilitate seamless data exchange between the
              portal and external systems.
            </li>
            <li className="task-item text-sm font-light">
              Building a comprehensive Multi-Level Marketing (MLM)
              functionality, enabling lead generation, customer management, and
              real-time tracking.
            </li>
            <li className="task-item text-sm font-light">
              Empowering GHI+ to deliver exceptional customer service,
              transparent pricing, and high-quality hurricane protection and
              solar systems to South Florida homeowners.
            </li>
          </ul>
        </div>
        {/* Wozinga Experience */}
        <div className="mt-5">
          <div className="flex items-center gap-0 md:gap-5 flex-wrap">
            <h3 className="flex items-center gap-3 text-lg">
              Frontend / Wordpress Developer
              <span className="font-bold text-accent font-fira-code">
                @ Wozinga Pty. Ltd.
              </span>
            </h3>
          </div>
          <span className="text-xs font-fira-code text-off-white">
            Jun 2021 - Nov 2023
          </span>
          <ul className="my-3 flex flex-col gap-3 list-disc ml-6">
            <li className="task-item text-sm font-light">
              Designed and developed compelling landing pages using Figma for
              UI/UX prototyping, WordPress for content management, and ParcelJS
              for front-end development.
            </li>
            <li className="task-item text-sm font-light">
              Translated design concepts from Figma into high-quality, visually
              appealing, and functional landing pages using WordPress and
              ParcelJS.
            </li>
            <li className="task-item text-sm font-light">
              Built and implemented landing pages that prioritize user
              experience (UX) and visual design, leveraging Figma for UI/UX
              prototyping, with WordPress and ParcelJS.
            </li>
            <li className="task-item text-sm font-light">
              Operating within an agile environment, I participated in weekly
              stand-ups and actively engaged in two hours of sprint planning and
              sprint retrospectives every week.
            </li>
          </ul>
        </div>
        {/* Accelerated Digital Delivery Experience */}
        <div className="mt-5">
          <div className="flex items-center gap-0 md:gap-5 flex-wrap">
            <h3 className="flex items-center gap-3 text-lg">
              Frontend Web Developer
              <span className="font-bold text-accent font-fira-code">
                @ Accelerated Digital Delivery
              </span>
            </h3>
          </div>
          <span className="text-xs font-fira-code text-off-white">
            Jan - May 2021
          </span>
          <ul className="my-3 flex flex-col gap-3 list-disc ml-6">
            <li className="task-item text-sm font-light">
              Developed a dynamic single-page web application (SPA) using
              Angular, marking my first project using the Angular framework.
            </li>
            <li className="task-item text-sm font-light">
              Contributed to the front-end development of the website utilizing
              Angular and Bootstrap.
            </li>
            <li className="task-item text-sm font-light">
              Focused on crafting user interfaces that balanced aesthetics with
              functionality, ensuring a positive user experience.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      image: workSample1,
      title: "Transit Master",
      description:
        "TransitMaster is our capstone project designed to help schools efficiently track and manage their school-owned vehicles. It provides real-time monitoring, route management, and usage analytics to ensure safe and organized transportation for students and staff.",
      tech: ["React", "MapBox", "Shadcn UI", "React Router", "TanStack Query"],
      github: "#",
      external: "#",
    },
    {
      image: workSample2,
      title: "AceTrack",
      description:
        "AceTrack is a QR-based attendance system for seamless and precise event and classroom management, providing real-time tracking and analytics.",
      tech: ["React", "Shadcn UI", "React Router", "TanStack Query"],
      github: "#",
      external: "#",
    },
    {
      image: workSample3,
      title: "My Portfolio",
      description:
        "AceTrack is a QR-based attendance system for seamless and precise event and classroom management, providing real-time tracking and analytics.",
      tech: ["React", "Shadcn UI", "React Router", "Framer Motion"],
      github: "#",
      external: "#",
    },
  ];

  return (
    <section
      className="text-white max-w-5xl w-full flex flex-col justify-center py-20"
      id="work"
    >
      <div className="flex items-center section-title mb-10">
        <h2 className="text-2xl font-fira-code font-medium flex items-center gap-3">
          <span className="text-accent font-normal">03.</span> Some Things I’ve
          Built
          <span className="flex-1 border-t border-slate-700 ml-4" />
        </h2>
      </div>

      <div className="flex flex-col gap-36">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-center md:items-stretch group`}
            >
              {isEven ? (
                <>
                  {/* Project Image */}
                  <div className="md:w-2/3 w-full rounded-lg overflow-hidden shadow-lg relative group">
                    <img
                      src={project.image}
                      alt="Project screenshot"
                      className="object-cover w-full h-full min-h-[260px] opacity-100 transition duration-300"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#112B24] opacity-50 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                  </div>
                  {/* Project Content */}
                  <div
                    className={`md:w-2/3 w-full flex flex-col justify-center z-10 mt-6 md:mt-0 md:pl-12 md:-ml-24 text-right`}
                  >
                    <p className="text-accent text-sm font-fira-code mb-2 text-right">
                      Featured Project
                    </p>
                    <h3 className="text-2xl font-semibold text-slate-200 mb-4 text-right">
                      {project.title}
                    </h3>
                    <div className="bg-[#1a2633] p-5 rounded shadow mb-4 text-slate-300 text-base max-w-xl">
                      {project.description}
                    </div>
                    <ul className="flex flex-wrap gap-4 text-xs font-fira-code text-slate-400 mb-4 justify-end">
                      {project.tech.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    <div className="flex gap-4 mt-2 justify-end">
                      <a
                        href={project.github}
                        className="hover:text-accent transition"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.external}
                        className="hover:text-accent transition"
                        aria-label="External Link"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Project Content */}
                  <div
                    className={`md:w-2/3 w-full flex flex-col justify-center z-10 mt-6 md:mt-0 md:pr-12 md:-mr-24 text-left`}
                  >
                    <p className="text-accent text-sm font-fira-code mb-2 text-left">
                      Featured Project
                    </p>
                    <h3 className="text-2xl font-semibold text-slate-200 mb-4 text-left">
                      {project.title}
                    </h3>
                    <div className="bg-[#1a2633] p-5 rounded shadow mb-4 text-slate-300 text-base max-w-xl">
                      {project.description}
                    </div>
                    <ul className="flex flex-wrap gap-4 text-xs font-fira-code text-slate-400 mb-4 justify-start">
                      {project.tech.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    <div className="flex gap-4 mt-2 justify-start">
                      <a
                        href={project.github}
                        className="hover:text-accent transition"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.external}
                        className="hover:text-accent transition"
                        aria-label="External Link"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  {/* Project Image */}
                  <div className="md:w-2/3 w-full rounded-lg overflow-hidden shadow-lg relative group">
                    <img
                      src={project.image}
                      alt="Project screenshot"
                      className="object-cover w-full h-full min-h-[260px] opacity-70 transition duration-300"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-accent opacity-60 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <section className="h-screen max-w-5xl w-full flex flex-col lg:flex-row justify-center items-center gap-2 md:gap-5 relative">
          <div className="flex-1 flex flex-col justify-center items-start gap-2 md:gap-5 z-10">
            <motion.p
              className="text-accent text-lg font-FiraCode"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 16,
                duration: 1,
                delay: 0,
              }}
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              className="transition-all duration-300 font-semibold text-slate-200 leading-[40px] text-[40px] md:text-[60px] 2xl:font-bold 2xl:lg:text-[80px]"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 14,
                duration: 1.1,
                delay: 0.25,
              }}
            >
              Kaarlo Sasiang
            </motion.h1>

            <motion.h2
              className="transition-all duration-300 font-semibold text-slate-400 leading-[40px] lg:leading-[50px] 2xl:leading-[80px] text-[30px] md:text-[50px] 2xl:text-[60px]"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 14,
                duration: 1.1,
                delay: 0.5,
              }}
            >
              A frontend developer / IT student
            </motion.h2>
            {/* Dynamic Terminal Prompt Bar */}
            <TerminalPromptBar />

            <motion.p
              className="max-w-[640px] text-slate-400 text-justify"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 18,
                duration: 1.2,
                delay: 0.75,
              }}
            >
              I'm an aspiring IT student with a strong foundation in JavaScript,
              and I'm currently focused on mastering the ReactJS framework to
              build dynamic and user-friendly web applications.
            </motion.p>
            <motion.div
              className="mt-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 12,
                duration: 1.3,
                delay: 1.05,
              }}
            >
              <Button
                size={"lg"}
                className="inline-flex items-center gap-2 transition-all duration-300 text-accent border border-accent hover:-translate-y-[4px] hover:-translate-x-[4px] hover:shadow-[3px_3px_0_0_rgba(61,241,218)]"
              >
                Learn more about me
                <ChevronRight />
              </Button>
            </motion.div>
          </div>
          {/* <div className="flex-1 flex justify-center items-center mt-10 lg:mt-0 z-0">
            <TechSphere />
          </div> */}
        </section>
        <FadeInSection>
          <AboutMeSection />
        </FadeInSection>
        <FadeInSection>
          <ExperienceSection />
        </FadeInSection>
        <FadeInSection>
          <ProjectsSection />
        </FadeInSection>
        <section className="w-full flex flex-col items-center justify-center py-24" id="contact">
          <p className="text-accent font-fira-code text-lg mb-4">04. What’s Next?</p>
          <h2 className="text-[56px] md:text-[64px] font-bold text-slate-200 mb-6 text-center">Get In Touch</h2>
          <p className="max-w-2xl text-slate-400 text-center text-xl mb-12">
            I’m currently looking for new opportunities! If you have a question, want to collaborate, or just want to say hi, my inbox is always open. I’ll do my best to get back to you!
          </p>
          <a
            href="mailto:sasiang64@gmail.com"
            className="px-10 py-5 border-2 border-accent text-accent rounded-lg font-fira-code text-2xl hover:bg-accent/30 hover:text-background transition-all duration-300 shadow-md text-center"
          >
            Say Hello
          </a>
        </section>
        <Footer />
      </div>
    </div>
  );
}

function TerminalPromptBar() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);
  const month = new Date()
    .toLocaleString("en-US", { month: "short" })
    .toLowerCase();
  return (
    <div className="flex items-center gap-1  text-base font-mono select-none">
      {/* Month */}
      <span className="bg-yellow-400 text-slate-900 px-3 rounded-l-full font-bold capitalize">
        {month}
      </span>
      {/* Folder */}
      <span className="bg-orange-400 text-white px-3 font-bold flex items-center">
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7a2 2 0 012-2h3.28a2 2 0 011.42.59l1.42 1.42A2 2 0 0012.72 8H19a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
          />
        </svg>
        kaarlo
      </span>
      {/* Git branch */}
      <span className="bg-green-400 text-slate-900 px-3 font-bold flex items-center">
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v12" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="6" r="3" />
        </svg>
        main
      </span>
      {/* Checkmark */}
      <span className="bg-blue-400 rounded-r-full text-white px-2 py-1 flex items-center">
        <Check size={16} />
      </span>
      {/* Command */}
      <span className="bg-transparent text-slate-300 px-3 py-1 font-mono">
        hello world!
      </span>
      {/* Shell and time */}
      <span className="ml-2 text-slate-400">
        in <span className="text-blue-400">zsh</span> at{" "}
        <span className="text-blue-400">{time}</span>
      </span>
    </div>
  );
}
