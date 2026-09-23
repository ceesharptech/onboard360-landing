"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { CheckSquareOffset, Files, Sparkle } from "@phosphor-icons/react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import {
  Eyebrow,
  SectionHeading,
  SectionSubheading,
} from "@/components/ui/typography";

export function Features() {
  const shouldReduceMotion = useReducedMotion();

  // Entrance variants respecting prefers-reduced-motion
  const blockVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Section id="features" spacing="default" divider>
      <Container>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={blockVariants}
          className="flex flex-col items-start text-left max-w-3xl mb-16 sm:mb-20 lg:mb-24"
        >
          <Eyebrow>What&apos;s inside</Eyebrow>
          <SectionHeading
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-white"
          >
            Three systems. One onboarding experience.
          </SectionHeading>
          <SectionSubheading className="text-base sm:text-lg text-text-muted mt-4 max-w-[60ch]">
            Onboard360 isn&apos;t a form builder with extra steps. It&apos;s
            three purpose-built systems working together.
          </SectionSubheading>
        </motion.div>

        {/* Feature Blocks Container with generous vertical breathing room */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-36">
          {/* FEATURE 1: Workflow Builder (Text Left, Visual Right) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={blockVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
          >
            {/* Text Column */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-border-regular bg-surface-elevated/70 backdrop-blur-xs mb-4">
                <CheckSquareOffset
                  size={14}
                  weight="bold"
                  className="text-white"
                  aria-hidden="true"
                />
                <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                  Workflow Builder
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white leading-snug">
                Checklists that know who they&apos;re for
              </h3>

              <p className="mt-3.5 text-base text-text-muted leading-relaxed max-w-[50ch]">
                Build onboarding paths once, per role: engineering, sales,
                support, whatever your org looks like. Assign it, and every new
                hire gets exactly the steps that apply to them. Nothing generic,
                nothing missed.
              </p>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-7 w-full">
              <div className="relative rounded-xl border border-border-regular bg-surface-subtle p-2 sm:p-2.5 shadow-2xl shadow-black/80 transition-colors duration-300 hover:border-border-strong">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border-subtle bg-surface">
                  <Image
                    src="/images/feature-workflow.svg"
                    alt="Onboard360 Workflow Builder interface showing role-specific checklist paths"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 2: Document Pipeline (Visual Left, Text Right) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={blockVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
          >
            {/* Visual Column (Appears on left at desktop, below text on mobile) */}
            <div className="lg:col-span-7 order-2 lg:order-1 w-full">
              <div className="relative rounded-xl border border-border-regular bg-surface-subtle p-2 sm:p-2.5 shadow-2xl shadow-black/80 transition-colors duration-300 hover:border-border-strong">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border-subtle bg-surface">
                  <Image
                    src="/images/feature-pipeline.svg"
                    alt="Onboard360 Document Pipeline interface organizing and tagging onboarding policies and handbooks"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Text Column (Appears on right at desktop, first on mobile) */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-border-regular bg-surface-elevated/70 backdrop-blur-xs mb-4">
                <Files
                  size={14}
                  weight="bold"
                  className="text-white"
                  aria-hidden="true"
                />
                <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                  Document Pipeline
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white leading-snug">
                Paperwork that files itself
              </h3>

              <p className="mt-3.5 text-base text-text-muted leading-relaxed max-w-[50ch]">
                Upload it once. Onboard360&apos;s document pipeline routes, tags,
                and stores every policy, form, and handbook, so nothing lives in
                someone&apos;s downloads folder, and nothing gets handed to a new
                hire twice.
              </p>
            </div>
          </motion.div>

          {/* FEATURE 3: Qorra (Spotlight Showcase Layout breaking zigzag pattern) */}
          <motion.div
            id="qorra"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={blockVariants}
            className="flex flex-col items-start text-left w-full"
          >
            {/* Feature 3 Top Header Block */}
            <div className="max-w-3xl mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-border-regular bg-surface-elevated/70 backdrop-blur-xs mb-4">
                <Sparkle
                  size={14}
                  weight="bold"
                  className="text-white"
                  aria-hidden="true"
                />
                <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                  Qorra Assistant
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white leading-snug">
                An assistant that&apos;s actually read the handbook
              </h3>

              <p className="mt-3.5 text-base sm:text-lg text-text-muted leading-relaxed max-w-[62ch]">
                Qorra is grounded in your company&apos;s own documents: policies,
                guides, FAQs. New hires ask a question, Qorra answers from what
                your company actually wrote, not a generic script.
              </p>
            </div>

            {/* Feature 3 Wide Showcase Canvas */}
            <div className="w-full">
              <div className="relative rounded-xl border border-border-regular bg-surface-subtle p-2 sm:p-3 shadow-2xl shadow-black/80 transition-colors duration-300 hover:border-border-strong">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border-subtle bg-surface">
                  <Image
                    src="/images/feature-qorra.svg"
                    alt="Onboard360 Qorra assistant interface demonstrating verified document grounding and answers"
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
