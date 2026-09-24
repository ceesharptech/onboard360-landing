"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";

export function Quote() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden border-y border-border-subtle/60">
      {/* Subtle Ambient Radial Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[260px] bg-white/[0.025] blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <Container>
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          {/* Minimalist Editorial Quote Glyph */}
          <div
            className="text-white/20 font-serif text-4xl sm:text-5xl leading-none select-none mb-3"
            aria-hidden="true"
          >
            &ldquo;
          </div>

          {/* Quote Body with Typographic Contrast */}
          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-normal tracking-[-0.025em] leading-[1.35] text-text-secondary">
            An organization&apos;s ability to learn, and{" "}
            <span className="text-white font-medium">
              translate that learning into action rapidly
            </span>
            , is the ultimate competitive advantage.
          </blockquote>

          {/* Attribution */}
          <div className="mt-4 sm:mt-8 flex items-center justify-center select-none">
            <cite className="not-italic font-sans text-xs sm:text-sm uppercase tracking-wider text-white font-medium">
              - Jack Welch
            </cite>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
