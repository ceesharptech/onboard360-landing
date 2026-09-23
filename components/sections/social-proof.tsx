import * as React from "react";
import { Container } from "@/components/ui/container";

interface LogoPlaceholder {
  name: string;
  symbol: React.ReactNode;
}

const placeholderLogos: LogoPlaceholder[] = [
  {
    name: "Kinetix",
    symbol: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M4 4l16 16M4 20l8-8 8 8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Vanguard",
    symbol: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
          strokeLinejoin="round"
        />
        <path d="M12 8v8M8 12h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Monolith",
    symbol: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect
          x="4"
          y="6"
          width="4"
          height="14"
          rx="1"
          fill="currentColor"
          fillOpacity="0.4"
        />
        <rect
          x="10"
          y="3"
          width="4"
          height="17"
          rx="1"
          fill="currentColor"
          fillOpacity="0.7"
        />
        <rect
          x="16"
          y="8"
          width="4"
          height="12"
          rx="1"
          fill="currentColor"
          fillOpacity="0.4"
        />
      </svg>
    ),
  },
  {
    name: "Aperture",
    symbol: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="9" />
        <path
          d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Synthetix",
    symbol: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polygon
          points="12 2 2 8.5 2 15.5 12 22 22 15.5 22 8.5 12 2"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.5" />
      </svg>
    ),
  },
  {
    name: "Meridian",
    symbol: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <line x1="3" y1="12" x2="21" y2="12" />
      </svg>
    ),
  },
];

export function SocialProof() {
  return (
    <section className="relative w-full pt-4 sm:pt-6 pb-16 sm:pb-24 lg:pb-28 overflow-hidden">
      <Container>
        {/* Understated Section Label (from content.md) */}
        <p className="text-xs font-mono uppercase tracking-[0.14em] text-text-faint text-center mb-8 sm:mb-10 select-none">
          Trusted by HR and People teams
        </p>

        {/* Static Monochromatic Logo Strip (Linear matching) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10 items-center justify-items-center">
          {placeholderLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2.5 text-white transition-opacity duration-200 select-none group cursor-default"
              title={`Placeholder slot for ${logo.name}`}
            >
              <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
                {logo.symbol}
              </div>
              <span className="text-base font-medium tracking-tight text-current">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
