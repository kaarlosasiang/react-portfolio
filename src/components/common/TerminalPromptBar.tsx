import { useEffect, useState } from "react";
import { Check } from "lucide-react";

export default function TerminalPromptBar() {
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