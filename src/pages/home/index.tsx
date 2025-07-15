import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/layouts/main/Footer";
import FadeInSection from "@/components/common/FadeInSection";
import TerminalPromptBar from "@/components/common/TerminalPromptBar";
import AboutMeSection from "./AboutMeSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import reactLogo from "@/assets/react.svg";

export default function Home() {
  return (
    <div className="px-20 lg:px-0 lg:container mx-auto">
      <div className="flex flex-col items-center">
        <section className="h-screen max-w-3xl xl:max-w-5xl w-full flex flex-col lg:flex-row justify-center items-center gap-2 md:gap-5 relative">
          {/* React Logo Background Overlay */}
          <img
            src={reactLogo}
            alt="React Logo Background"
            className="fixed right-30 top-1/2 -translate-y-1/2 w-[30%] h-auto opacity-[.02] pointer-events-none select-none z-0"
            style={{ objectFit: "contain" }}
            aria-hidden="true"
          />
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
              FRONT END DEVELOPER
            </motion.h2>
            {/* Dynamic Terminal Prompt Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 16,
                duration: 1,
                delay: 0.6, // adjust delay as needed for sequencing
              }}
            >
              <TerminalPromptBar />
            </motion.div>

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
              I recently graduated and have a strong foundation in JavaScript.
              I'm now actively learning the MERN stack (MongoDB, Express, React,
              Node.js) to build robust, full-stack web applications and take my
              development skills to the next level.
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
        <section
          className="w-full flex flex-col items-center justify-center py-24"
          id="contact"
        >
          <p className="text-accent font-fira-code text-lg mb-4">
            04. What’s Next?
          </p>
          <h2 className="text-[56px] md:text-[64px] font-bold text-slate-200 mb-6 text-center">
            Get In Touch
          </h2>
          <p className="max-w-2xl text-slate-400 text-center text-xl mb-12">
            I’m currently looking for new opportunities! If you have a question,
            want to collaborate, or just want to say hi, my inbox is always
            open. I’ll do my best to get back to you!
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
