import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

const SOCIAL_LINKS = [
  {
    icon: Github,
    link: "https://www.github.com/kaarlosasiang",
    label: "GitHub",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/karlosasiang/",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/kaarlo-sasiang/",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    link: "https://www.facebook.com/kaarloruy.sasiang",
    label: "Facebook",
  },
];

export default function SocialLinks() {
  return (
    <div className="hidden lg:flex fixed left-16 bottom-0 flex-col w-auto justify-center gap-10">
      {SOCIAL_LINKS.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.link}
            className="text-white transition-all duration-200 hover:text-accent hover:-translate-y-[4px] flex justify-center"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <Icon size={20} />
          </a>
        );
      })}
      <div className="flex flex-col gap-5 relative after:content-[''] after:block after:bg-[#999] after:w-px after:h-[200px] after:mx-auto"></div>
    </div>
  );
}
