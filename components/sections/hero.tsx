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
      {/* Animated Monochromatic Linear-Upward Background Gradient & Noise Texture */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden -z-10"
        aria-hidden="true"
      >
        {/* Soft, slow breathing linear-upward gradient */}
        <motion.div
          animate={
            shouldReduceMotion
              ? { opacity: 0.85, scale: 1 }
              : {
                  opacity: [0.65, 0.95, 0.65],
                  scaleY: [1, 1.06, 1],
                  y: [0, -10, 0],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-x-0 bottom-0 h-[700px] bg-gradient-to-t from-white/[0.08] via-white/[0.025] to-transparent origin-bottom"
        />

        {/* Ambient subtle central beam */}
        <motion.div
          animate={
            shouldReduceMotion
              ? { opacity: 0.5 }
              : {
                  opacity: [0.4, 0.7, 0.4],
                  scale: [0.96, 1.04, 0.96],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-24 sm:-top-36 left-1/2 -translate-x-1/2 w-[700px] h-[450px] sm:w-[950px] sm:h-[550px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_65%)] blur-3xl"
        />

        {/* Fine Grain / Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-screen"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <Container className="flex flex-col items-start text-left">
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
