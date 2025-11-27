import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  Briefcase,
  ChevronRight,
  FileUser,
  Mail,
  MapPin,
  ToolCase,
} from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { CustomDock } from "@/components/common/custom-dock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Highlighter } from "@/components/ui/highlighter";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
};

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

const slugs = [
  "typescript",
  "javascript",
  "react",
  "nodedotjs",
  "express",
  "nextdotjs",
  "docker",
  "html5",
  "shadcnui",
  "prisma",
  "firebase",
  "vercel",
  "git",
  "github",
  "figma",
  "wordpress",
]

const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )

export default function Home() {
  return (
    <div className={`h-full max-w-4xl mx-auto py-5 space-y-5`}>
      <div className="flex justify-between">
        <div className="flex space-x-6">
          <div className="flex flex-col justify-between gap-3">
            <div>
              <h1 className={`text-3xl font-bold tracking-tighter`}>
                Kaarlo Sasiang
                <BadgeCheck
                  className="inline-block ml-1 fill-blue-400 text-white"
                  size={18}
                />
              </h1>
              <p className="flex items-center text-sm gap-1">
                <MapPin size={14} />
                Lupon, Davao Oriental, Philippines
              </p>
            </div>
            <p>Full Stack Web Developer</p>
            <div className="space-x-2">
              <Button size={"sm"} className="text-xs">
                <FileUser />
                View Resume
                <ChevronRight size={14} />
              </Button>
              <Button size={"sm"} variant={"outline"} className="text-xs">
                <Mail />
                Send Email
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end mt-2 text-md">
          <AnimatedThemeToggler />
        </div>
      </div>
      <BentoGrid className="grid-cols-12 auto-rows-[minmax(150px,auto)] items-start">
        <Card className="col-span-8 row-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase size={16} />
              <span className="font-bold">About</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-6">
              Hello! I'm Kaarlo Sasiang, a passionate{" "}
              <Highlighter action="underline" color="#FF9800">
                Full Stack Web Developer
              </Highlighter>{" "}
              dedicated to crafting seamless and efficient web applications.
              With a strong foundation in both front-end and back-end
              technologies.
              <br />
              <br />
              I thrive on transforming ideas into functional and user-friendly
              digital experiences. My expertise lies in creating responsive
              designs, optimizing performance, and ensuring robust functionality
              across various platforms.
              <br />
              <br />I am committed to staying updated with the latest industry
              trends and continuously honing my skills to deliver innovative
              solutions that meet client needs.
            </p>
          </CardContent>
        </Card>

        <Card className="col-span-4 row-span-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase size={16} />
              <span className="font-bold">Experience</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Separator
                orientation="vertical"
                className="absolute left-1.5 top-3 h-[calc(100%-1.5rem)]"
              />
              <div className="space-y-6">
                {experienceItems.map((item, index) => (
                  <div key={index} className="relative pl-6">
                    <div className="border-2 bg-white hover:bg-foreground absolute left-0 top-1 flex size-3 items-center justify-center rounded-full transition-colors" />
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-xs text-muted-foreground">
                        {item.company}
                      </p>
                      <Badge variant={"outline"}>
                        <span className="text-[10px] text-gray-500 font-semibold">
                          {item.period}
                        </span>
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-8 row-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ToolCase size={16} />
              <span className="font-bold">Tech Stack</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="relative w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                >
                  <Image
                    src={src}
                    alt={images[index]}
                    width={24}
                    unoptimized
                    height={24}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-12 row-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ToolCase size={16} />
              <span className="font-bold">Projects</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Some of my recent work and side projects.</p>
          </CardContent>
        </Card>
      </BentoGrid>
      <CustomDock />
    </div>
  );
}
