import React from "react";
import reactLogo from "@/assets/react.svg";
import nextLogo from "@/assets/nextjs.svg";
import tailwindLogo from "@/assets/tailwind.svg";

const logos = [
  { src: reactLogo, alt: "React" },
  { src: nextLogo, alt: "Next.js" },
  { src: tailwindLogo, alt: "Tailwind CSS" },
];

// Helper: positions for 3 logos along a vertical half-circle (top, middle, bottom)
const logoPositions = [
  { angle: -90 }, // top
  { angle: -135 }, // middle
  { angle: -45 }, // bottom
];

export default function TechSphere() {
  // SVG half-circle parameters
  const radius = 160;
  const centerX = 170;
  const centerY = 170;

  // Calculate logo positions along the half-circle
  const getLogoStyle = (angleDeg: number) => {
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = centerX + radius * Math.cos(angleRad);
    const y = centerY + radius * Math.sin(angleRad);
    return {
      left: x - 32, // center the logo (logo size 64)
      top: y - 32,
    };
  };

  return (
    <div
      className="pointer-events-none select-none fixed lg:absolute right-0 top-1/2 -translate-y-1/2 z-0 w-[340px] h-[340px] hidden lg:block"
      aria-hidden="true"
      style={{
        // On very large screens, nudge further right
        right: "max(0px, 5vw)",
      }}
    >
      {/* SVG vertical half-sphere border */}
      <svg
        width={340}
        height={340}
        viewBox="0 0 340 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 top-0"
      >
        <path
          d="M170 10 a160 160 0 1 1 0 320"
          stroke="#64ffda"
          strokeWidth={4}
          fill="none"
        />
      </svg>
      {/* Animated logos */}
      {logoPositions.map((pos, i) => (
        <div
          key={i}
          className={`absolute w-16 h-16 animate-vertical-orbit`}
          style={{
            ...getLogoStyle(pos.angle),
            animationDelay: `${i * 1.5}s`,
          }}
        >
          <img
            src={logos[i].src}
            alt={logos[i].alt}
            className="w-full h-full object-contain drop-shadow-lg"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}

// Add the following CSS to your global styles:
/*
@keyframes vertical-orbit {
  0% { transform: rotate(0deg) translateY(0) rotate(0deg); }
  100% { transform: rotate(360deg) translateY(0) rotate(-360deg); }
}
.animate-vertical-orbit {
  animation: vertical-orbit 7s linear infinite;
}
*/ 