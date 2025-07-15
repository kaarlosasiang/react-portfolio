import React from "react";

export default function ExperienceSection() {
  return (
    <section
      className="text-white w-full max-w-5xl mx-auto flex flex-col justify-center py-10 px-4 sm:px-6 md:py-20"
      id="experience"
    >
      <div className="w-full flex flex-col gap-6 sm:gap-8">
        {/* Section Title */}
        <div className="flex items-center section-title mb-2">
          <h2 className="text-xl sm:text-2xl flex items-center gap-3 sm:gap-5 font-fira-code font-medium">
            <span className="text-accent font-normal">02.</span> Experience
            <div className="hidden sm:flex flex-col gap-5 relative after:content-[''] after:block after:bg-[#999] after:h-px after:w-[120px] sm:after:w-[200px] after:mx-auto"></div>
          </h2>
        </div>
        {/* GHI+ Experience */}
        <div className="mt-4 sm:mt-5">
          <div className="flex items-center gap-2 sm:gap-5 flex-wrap">
            <h3 className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg">
              Frontend Web Developer
              <span className="font-bold text-accent font-fira-code">
                @ GHI+
              </span>
            </h3>
          </div>
          <span className="text-xs font-fira-code text-off-white block mt-1">
            Dec 2023 - Jan 2025
          </span>
          <ul className="my-2 sm:my-3 flex flex-col gap-2 sm:gap-3 list-disc ml-5 sm:ml-6">
            <li className="task-item text-xs sm:text-sm font-light">
              Developing a React-based business portal for Green Home
              Improvements Plus (GHI+) to streamline operations and enhance
              customer experience.
            </li>
            <li className="task-item text-xs sm:text-sm font-light">
              Utilizing Material UI for a user-friendly interface and efficient
              data visualization.
            </li>
            <li className="task-item text-xs sm:text-sm font-light">
              Integrating MongoDB to manage customer data securely and
              efficiently.
            </li>
            <li className="task-item text-xs sm:text-sm font-light">
              Implementing APIs to facilitate seamless data exchange between the
              portal and external systems.
            </li>
            <li className="task-item text-xs sm:text-sm font-light">
              Building a comprehensive Multi-Level Marketing (MLM)
              functionality, enabling lead generation, customer management, and
              real-time tracking.
            </li>
            <li className="task-item text-xs sm:text-sm font-light">
              Empowering GHI+ to deliver exceptional customer service,
              transparent pricing, and high-quality hurricane protection and
              solar systems to South Florida homeowners.
            </li>
          </ul>
        </div>
        {/* Wozinga Experience */}
        <div className="mt-4 sm:mt-5">
          <div className="flex items-center gap-2 sm:gap-5 flex-wrap">
            <h3 className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg">
              Frontend / Wordpress Developer
              <span className="font-bold text-accent font-fira-code">
                @ Wozinga Pty. Ltd.
              </span>
            </h3>
          </div>
          <span className="text-xs font-fira-code text-off-white block mt-1">
            Jun 2021 - Nov 2023
          </span>
          <ul className="my-2 sm:my-3 flex flex-col gap-2 sm:gap-3 list-disc ml-5 sm:ml-6">
            <li className="task-item text-xs sm:text-sm font-light">
              Designed and developed compelling landing pages using Figma for
              UI/UX prototyping, WordPress for content management, and ParcelJS
              for front-end development.
            </li>
            <li className="task-item text-xs sm:text-sm font-light">
              Translated design concepts from Figma into high-quality, visually
              appealing, and functional landing pages using WordPress and
              ParcelJS.
            </li>
            <li className="task-item text-xs sm:text-sm font-light">
              Built and implemented landing pages that prioritize user
              experience (UX) and visual design, leveraging Figma for UI/UX
              prototyping, with WordPress and ParcelJS.
            </li>
            <li className="task-item text-xs sm:text-sm font-light">
              Operating within an agile environment, I participated in weekly
              stand-ups and actively engaged in two hours of sprint planning and
              sprint retrospectives every week.
            </li>
          </ul>
        </div>
        {/* Accelerated Digital Delivery Experience */}
        <div className="mt-4 sm:mt-5">
          <div className="flex items-center gap-2 sm:gap-5 flex-wrap">
            <h3 className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg">
              Frontend Web Developer
              <span className="font-bold text-accent font-fira-code">
                @ Accelerated Digital Delivery
              </span>
            </h3>
          </div>
          <span className="text-xs font-fira-code text-off-white block mt-1">
            Jan - May 2021
          </span>
          <ul className="my-2 sm:my-3 flex flex-col gap-2 sm:gap-3 list-disc ml-5 sm:ml-6">
            <li className="task-item text-xs sm:text-sm font-light">
              Developed a dynamic single-page web application (SPA) using
              Angular, marking my first project using the Angular framework.
            </li>
            <li className="task-item text-xs sm:text-sm font-light">
              Contributed to the front-end development of the website utilizing
              Angular and Bootstrap.
            </li>
            <li className="task-item text-xs sm:text-sm font-light">
              Focused on crafting user interfaces that balanced aesthetics with
              functionality, ensuring a positive user experience.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
} 