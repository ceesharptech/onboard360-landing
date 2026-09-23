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
    <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-24">
      <Container className="flex flex-col items-start text-left z-20">
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
            Onboarding, built like software.{" "}
            <span className="text-white"> No more scattered checklists</span>
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
          <Button href="mailto:demo@onboard360.com" variant="primary" size="md">
            Get a demo
          </Button>
          <Button href="#how-it-works" variant="secondary" size="md">
            See how it works
          </Button>
        </motion.div>

        {/* Hero Visual Preview (Wide framed container matching Linear's screenshot aesthetic) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={getVariants(0.38)}
          className="relative mx-auto mt-12 sm:mt-16 w-full rounded-xl border border-border-regular bg-surface-subtle p-2 sm:p-3 shadow-lg shadow-black/80"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border-subtle bg-surface">
            {/* next/image placeholder: swapping later is a single-line change to the src */}
            <Image
              src="/images/hero-placeholder.svg"
              alt="Onboard360 product workflow and document management interface preview"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
