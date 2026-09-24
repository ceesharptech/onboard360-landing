"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { DEMO_MAILTO_URL } from "@/lib/constants";

export function FinalCta() {
  const shouldReduceMotion = useReducedMotion();

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
    <Section spacing="generous" divider className="relative overflow-hidden">
      {/* Subtle Ambient Spotlight behind CTA */}
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div
          className="h-[360px] w-[600px] rounded-full opacity-60 blur-[90px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 40%, transparent 70%)",
          }}
        />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Closing Headline */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={getVariants(0)}
          className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.035em] leading-[1.2] text-white max-w-3xl"
        >
          Stop onboarding from a spreadsheet.
        </motion.h2>

        {/* Primary Call-to-Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={getVariants(0.2)}
          className="mt-8 sm:mt-10"
        >
          <Button href={DEMO_MAILTO_URL} variant="primary" size="md">
            Get a demo
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
