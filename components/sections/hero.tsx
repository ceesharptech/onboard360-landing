"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  Eyebrow,
  SectionHeading,
  SectionSubheading,
} from "@/components/ui/typography";
import { DEMO_MAILTO_URL } from "@/lib/constants";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Gentle, restrained entrance variants matching Linear's motion style
  const getVariants = (delay: number): Variants => ({
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  });

  return (
    //  <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-24"></section>
    <section className="relative overflow-hidden pb-16 sm:pb-24">
      <div className=" w-full relative overflow-hidden">
        {/* Center Spotlight Background */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: `
       radial-gradient(
         circle at center,
         rgba(255, 255, 255, 0.08) 0%,
         rgba(255, 255, 255, 0.04) 20%,
         rgba(0, 0, 0, 0.0) 60%
       )
     `,
          }}
        />

        {/* Your Content Here */}

        <Container className="flex flex-col items-start text-left z-20 pt-16 sm:pt-20 lg:pt-24">
          {/* Eyebrow Label */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={getVariants(0.04)}
            className="w-full"
          >
            <Eyebrow className="hidden mb-4 text-left text-xs">
              Built for HR teams, not spreadsheets
            </Eyebrow>
          </motion.div>

          {/* Hero Headline (Left-aligned, confident type scale from Linear references) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={getVariants(0.12)}
            className="max-w-4xl"
          >
            <SectionHeading
              as="h1"
              className="text-4xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.035em] leading-[1.15] text-white text-left"
            >
              The onboarding system for modern teams and agencies
            </SectionHeading>
          </motion.div>

          {/* Subheadline (Left-aligned, sanitized em-dash to colon for strict taste-skill compliance) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={getVariants(0.2)}
            className="max-w-2xl mt-5 sm:mt-2"
          >
            <SectionSubheading className="text-base sm:text-md text-text-muted leading-relaxed max-w-[62ch] text-left mt-0">
              Turn scattered checklists, PDFs, and Slack threads into one system
            </SectionSubheading>
          </motion.div>

          {/* Dual Call-to-Actions (Left-aligned, monochromatic white pill primary + dark secondary) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={getVariants(0.28)}
            className="mt-8 flex flex-wrap items-center gap-2 sm:gap-2 justify-start w-full"
          >
            <Button href={DEMO_MAILTO_URL} variant="primary" size="md">
              Get a demo
            </Button>
            <Button href="#how-it-works" variant="secondary" size="md">
              See how it works
            </Button>
          </motion.div>

          {/* Hero Visual Preview (Linear mobile crop: full-scale cut in half with dark blur overlay covering from page edge; desktop: full 16:9 frame) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={getVariants(0.38)}
            className="relative mt-12 sm:mt-16 w-[calc(100%+1rem)] -mr-4 sm:w-full sm:mr-0 sm:mx-auto"
          >
            {/* Framed container */}
            <div className="relative rounded-l-xl sm:rounded-xl border-y border-l sm:border-r border-border-regular bg-surface-subtle p-1.5 sm:p-3 shadow-md shadow-black/20 overflow-hidden">
              <div className="relative h-[380px] sm:h-auto sm:aspect-[17.4/9.5] w-full overflow-hidden rounded-l-lg sm:rounded-lg border-y border-l sm:border-r border-border-subtle bg-surface">
                {/* Visual wrapper: on mobile, renders full desktop scale (780px wide) showing the left half; on sm+ fills the 16:9 frame */}
                <div className="relative w-[900px] h-[490px] sm:w-full sm:h-full max-w-none origin-top-left shrink-0">
                  <Image
                    src="/images/hero-onb360.png"
                    alt="Onboard360 HR Administration employee management interface preview"
                    fill
                    priority
                    sizes="(max-width: 640px) 780px, (max-width: 1280px) 100vw, 1280px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Dark blurry element covering the image container from the edge of the actual page */}
            <div
              className="sm:hidden pointer-events-none absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-canvas to-transparent [-webkit-backdrop-filter:blur(6px)] z-20"
              aria-hidden="true"
            />

            {/* Dark gradient fade covering the bottom of the image container into the page */}
            {/* <div
            className="sm:hidden pointer-events-none absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-canvas via-canvas/70 to-transparent z-20"
            aria-hidden="true"
          /> */}
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
