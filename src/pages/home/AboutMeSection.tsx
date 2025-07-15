import gradPic from "@/assets/grad-pic.png";

export default function AboutMeSection() {
  return (
    <section
      className="max-w-5xl w-full text-white flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 mx-auto"
      id="about-me"
    >
      <div className="flex items-center section-title mb-6">
        <h2 className="text-xl sm:text-2xl flex items-center gap-3 sm:gap-5 font-fira-code font-medium">
          <span className="text-accent font-normal">01.</span> About Me
          <div className="hidden sm:flex flex-col gap-5 relative after:content-[''] after:block after:bg-[#999] after:h-px after:w-[120px] sm:after:w-[200px] after:mx-auto"></div>
        </h2>
        <div className="flex sm:hidden flex-1 ml-2 relative after:content-[''] after:block after:bg-[#999] after:h-px after:w-full after:mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-8 lg:gap-10">
        {/* Mobile Image */}
        <div className="justify-center flex lg:hidden mb-4">
          <div className="border border-primary rounded overflow-hidden w-full max-w-xs sm:max-w-sm mx-auto">
            <img
              src={gradPic}
              className="w-full h-auto rounded object-cover"
              alt="Kaarlo Sasiang"
            />
          </div>
        </div>
        {/* Text Content */}
        <div>
          <p className="text-slate-400 text-justify text-base sm:text-lg">
            Hey there! I'm
            <span className="text-accent"> Kaarlo Ruy P. Sasiang</span>, a web
            developer passionate about turning code into real experiences. I
            started playing with HTML, CSS, JavaScript, and PHP back in Grade
            12, and since then, I've worked as a frontend web developer at three
            companies.
            <br />
            <br />
            I recently graduated and am now focused on mastering the MERN stack
            (MongoDB, Express, React, Node.js) to become a full-stack developer.
            I love building robust, user-friendly web applications and am always
            eager to learn new technologies and best practices.
            <br />
            <br />
            Beyond work, I was an active member of the web development team at
            <span className="text-accent"> CodeByters</span>, a school
            organization dedicated to making cool things happen with code.
            <br />
            <br />
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul
            className="grid text-sm gap-2 mt-3 font-fira-code"
            style={{ gridTemplateColumns: "repeat(2, minmax(120px, 1fr))" }}
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
              Next JS
            </li>
            <li className="skill-item relative flex items-start gap-3 font-light tracking-widest">
              Shadcn UI
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
        {/* Desktop Image */}
        <div className="justify-center xl:justify-end hidden lg:flex items-start">
          <div className="border border-primary rounded overflow-hidden relative w-full max-w-xs xl:max-w-md">
            <img
              src={gradPic}
              className="w-full h-auto rounded object-cover"
              alt="Kaarlo Sasiang"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 