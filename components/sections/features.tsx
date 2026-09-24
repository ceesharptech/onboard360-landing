"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { CheckCircleIcon, FilesIcon } from "@phosphor-icons/react";
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
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white leading-snug">
                Checklists that know who{" "}
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  they&apos;re for
                  <CheckCircleIcon
                    className="text-green-500 w-7 h-7 sm:w-8 sm:h-8 hover:text-green-400 hover:scale-125 transition-all duration-300 shrink-0"
                    weight="fill"
                  />
                </span>
              </h3>

              <p className="mt-3.5 text-base text-text-muted leading-relaxed max-w-[50ch]">
                Build onboarding paths once, per role - Assign it, and every new
                hire gets exactly the steps that apply to them. Nothing missed.
              </p>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-7 w-full">
              <div className="relative w-full">
                <div className="relative rounded-xl border border-border-regular bg-surface-subtle p-1.5 sm:p-2 shadow-sm shadow-black/80 transition-colors duration-300 hover:border-border-strong overflow-hidden">
                  <div className="relative aspect-[17.5/9.5] w-full overflow-hidden rounded-lg border border-border-subtle bg-surface">
                    <Image
                      src="/images/checklist-onb360.png"
                      alt="Onboard360 role-based onboarding checklist and roadmap interface preview"
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* Dark shadow overlay covering part of the entire card (similar to hero product display, no blur) */}
                <div
                  className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 sm:w-44 lg:w-64 bg-gradient-to-l from-canvas via-canvas/70 to-transparent z-20 rounded-r-xl"
                  aria-hidden="true"
                />
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
              <div className="relative w-full">
                <div className="relative rounded-xl border border-border-regular bg-surface-subtle p-1.5 sm:p-2 transition-colors duration-300 hover:border-border-strong overflow-hidden">
                  <div className="relative aspect-[17.5/9.5] w-full overflow-hidden rounded-lg border border-border-subtle bg-surface">
                    <Image
                      src="/images/document-onb360.png"
                      alt="Onboard360 company-wide document library and policy management interface preview"
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* Dark shadow overlay covering part of the entire card (similar to hero product display, no blur) */}
                <div
                  className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 sm:w-44 lg:w-64 bg-gradient-to-r from-canvas via-canvas/70 to-transparent z-20 "
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Text Column (Appears on right at desktop, first on mobile) */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-start text-left">
              <h3 className="flex flex-wrap items-center gap-2 text-2xl sm:text-3xl font-medium tracking-tight text-white leading-snug">
                <span>Paperwork that files itself</span>
                <FilesIcon
                  className="text-blue-500 w-8 h-8 sm:w-10 sm:h-10 rotate-[15deg] hover:text-blue-400 hover:scale-125 hover:rotate-[20deg] transition-all duration-300 shrink-0"
                  weight="fill"
                />
              </h3>

              <p className="mt-3.5 text-base text-text-muted leading-relaxed max-w-[50ch]">
                Upload it once. Onboard360&apos;s document pipeline routes,
                tags, and stores every policy, form, and handbook, so nothing
                lives in someone&apos;s downloads folder.
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
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white leading-snug">
                An assistant that&apos;s actually read the handbook
              </h3>

              <p className="mt-3.5 text-base sm:text-lg text-text-muted leading-relaxed max-w-[62ch]">
                Qorra is grounded in your company&apos;s own documents:
                policies, guides, FAQs. New hires ask a question, Qorra answers
                from what your company actually wrote, not a generic script.
              </p>
            </div>

            {/* Feature 3 Wide Showcase Canvas */}
            <div className="relative w-full">
              <div className="relative w-full">
                <div className="relative rounded-xl border border-border-regular bg-surface-subtle p-1.5 sm:p-2 transition-colors duration-300 hover:border-border-strong overflow-hidden">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border-subtle bg-surface">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover object-top block"
                    >
                      <source src="/video/qorra-demo.webm" type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                {/* Dark shadow overlay covering part of the entire card (similar to hero product display, no blur) */}
                {/* <div
                  className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 sm:w-56 lg:w-56 bg-gradient-to-l from-canvas via-canvas/80 to-transparent z-20 rounded-r-xl"
                  aria-hidden="true"
                /> */}
              </div>
              <div className="absolute inset-0 z-10 shadow-[inset_0_0_100px_30px_rgba(3,2,2,1)] sm:shadow-[inset_0_0_100px_50px_rgba(3,2,2,1)] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
