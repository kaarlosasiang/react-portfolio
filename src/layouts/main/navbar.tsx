import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import * as React from "react";

const NAV_ITEMS = [
  { label: "About Me", link: "#about-me" },
  { label: "Experience", link: "#experience" },
  { label: "Work", link: "#work" },
  { label: "Contact", link: "#contact" },
];

function useActiveSection() {
  const [active, setActive] = React.useState<string>(NAV_ITEMS[0].link);

  React.useEffect(() => {
    function onScroll() {
      let current = NAV_ITEMS[0].link;
      for (const item of NAV_ITEMS) {
        const section = document.querySelector(item.link);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = item.link;
            break;
          }
        }
      }
      setActive(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return active;
}

export default function NavBar() {
  const activeSection = useActiveSection();

  return (
    <div className="bg-foreground/70 backdrop-blur fixed w-full z-50">
      <div className="mx-4 md:mx-16 py-4 flex items-center justify-between">
        <img src={logo} alt="Kaarlo Sasiang" className="size-12" />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-14">
          <ul className="flex items-center gap-14">
            {NAV_ITEMS.map((item, i) => (
              <li key={i} className="font-fira-code text-sm">
                <a
                  href={item.link}
                  className={`transition-colors duration-200 px-2 py-1 rounded text-white hover:text-accent focus:outline-none focus:text-accent ${
                    activeSection === item.link ? "text-accent font-bold" : ""
                  }`}
                >
                  <span className="text-accent">0{i + 1}.</span> {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Button className="inline-flex items-center gap-2 transition-all duration-300 text-accent border border-accent hover:-translate-y-[4px] hover:-translate-x-[4px] hover:shadow-[3px_3px_0_0_rgba(61,241,218)]">
            Resume
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-accent">
                <Menu className="size-7" />
                <span className="sr-only">Open navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 w-64 bg-foreground text-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10">
                  <img src={logo} alt="Kaarlo Sasiang" className="size-10" />
                  <span className="font-bold text-lg">Kaarlo Sasiang</span>
                </div>
                <ul className="flex flex-col gap-6 px-6 py-8">
                  {NAV_ITEMS.map((item, i) => (
                    <li key={i} className="font-fira-code text-base">
                      <a
                        href={item.link}
                        className={`flex items-center gap-2 transition-colors duration-200 px-2 py-1 rounded hover:text-accent focus:outline-none focus:text-accent ${
                          activeSection === item.link ? "text-accent font-bold" : "text-white"
                        }`}
                      >
                        <span>0{i + 1}.</span> <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto px-6 pb-8">
                  <Button className="w-full text-accent border border-accent">
                    Resume
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
