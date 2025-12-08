"use client";
import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { BadgeCheck, ChevronRight, FileUser, Mail, MapPin } from "lucide-react";
import Image from "next/image";

type HeaderSectionProps = {
  name: string;
  location: string;
  title: string;
};

export function HeaderSection({ name, location, title }: HeaderSectionProps) {
  return (
    <div className="flex w-full justify-center md:justify-between">
      <div className="flex flex-col items-center md:flex-row lg:items-start space-x-6">
        <Image
          src="/kaarlo.jpg"
          alt={`${name}'s profile picture`}
          width={150}
          height={150}
          className="rounded-md mr-0"
        />
        <div className="flex flex-col justify-between items-center md:items-start gap-3">
          <div className="flex flex-col items-center md:items-start text-center md:text-start space-y-1">
            <h1 className={`text-3xl font-bold tracking-tighter`}>
              {name}
              <BadgeCheck
                className="inline-block ml-1 fill-blue-400 text-white"
                size={18}
              />
            </h1>
            <p className="flex items-center text-sm gap-1">
              <MapPin size={14} />
              {location}
            </p>
          </div>
          <p>{title}</p>
          <div className="space-x-2">
            <Button size={"sm"} className="text-xs">
              <FileUser />
              View Resume
              <ChevronRight size={14} />
            </Button>
            <Button
              size={"sm"}
              variant={"outline"}
              className="text-xs"
              onClick={() =>
                (window.location.href = "mailto:sasiang64@gmail.com")
              }
            >
              <Mail />
              Send Email
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute top-5 right-5 md:right-0 flex items-center gap-1 justify-center text-md">
        <AnimatedThemeToggler />
      </div>
    </div>
  );
}
