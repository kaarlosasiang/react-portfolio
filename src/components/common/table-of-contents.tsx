"use client";

import { useEffect, useState } from "react";

type TOCItem = {
  id: string;
  title: string;
};

type TableOfContentsProps = {
  items: TOCItem[];
};

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 150) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden lg:block fixed right-8 top-24 w-48">
      <div className="bg-muted/50 rounded-lg p-4 border border-border">
        <h3 className="text-sm font-semibold mb-3">On this page</h3>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`text-sm transition-colors text-left w-full px-2 py-1 rounded hover:text-primary ${
                  activeId === item.id
                    ? "text-primary font-medium bg-primary/10"
                    : "text-muted-foreground"
                }`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
