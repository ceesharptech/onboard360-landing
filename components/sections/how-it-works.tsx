"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Eyebrow, SectionHeading } from "@/components/ui/typography";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "HR builds the path.",
    description:
      "Pick a role, assemble the checklist once. Onboard360 remembers it.",
  },
  {
    number: "02",
    title: "A new hire is assigned.",
    description:
      "The right tasks, documents, and mentors are attached automatically: no manual setup per person.",
  },
  {
    number: "03",
    title: "Qorra fills the gaps.",
    description:
      "Questions that would normally interrupt HR get answered instantly, grounded in your real documents.",
  },
  {
    number: "04",
    title: "Progress is visible.",
    description:
      "Managers and mentors see exactly where every new hire stands, without asking.",
  },
];

export function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();

  const getStepVariants = (index: number): Variants => ({
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  });

  return (
    <Section id="how-it-works" spacing="default" divider>
      <Container>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: shouldReduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
            },
          }}
          className="flex flex-col items-start text-left max-w-3xl mb-16 sm:mb-20"
        >
          <Eyebrow>The flow</Eyebrow>
          <SectionHeading
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-white"
          >
            From day zero to day one, automatically
          </SectionHeading>
        </motion.div>

        {/* 4-Up Sequence Grid: Horizontal progression on desktop, collapsing to stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={getStepVariants(index)}
              className="group flex flex-col items-start text-left border-t border-border-regular/60 pt-6 sm:pt-8 transition-colors duration-200 hover:border-border-strong"
            >
              {/* Understated Mono Numeral */}
              <span className="font-mono text-xs sm:text-sm font-medium text-text-faint tracking-wider mb-4 select-none group-hover:text-text-muted transition-colors">
                {step.number}
              </span>

              {/* Step Title */}
              <h3 className="text-base sm:text-lg font-medium tracking-tight text-white leading-snug">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="mt-2.5 text-sm text-text-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
