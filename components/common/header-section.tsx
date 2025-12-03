"use client";
import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { BadgeCheck, ChevronRight, FileUser, Mail, MapPin } from "lucide-react";

type HeaderSectionProps = {
  name: string;
  location: string;
  title: string;
};

export function HeaderSection({ name, location, title }: HeaderSectionProps) {
  return (
    <div className="flex justify-between">
      <div className="flex space-x-6">
        <div className="flex flex-col justify-between gap-3">
          <div>
            <h1 className={`text-3xl font-bold tracking-tighter`}>
              {name}
              <BadgeCheck className="inline-block ml-1 fill-blue-400 text-white" size={18} />
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
  );
}
