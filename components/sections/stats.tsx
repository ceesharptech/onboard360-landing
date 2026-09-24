"use client";

import * as React from "react";
import {
  motion,
  useInView,
  animate,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/typography";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  {
    target: 70,
    suffix: "%",
    label: "fewer HR questions repeated week to week",
  },
  {
    target: 8,
    suffix: "h+",
    label: "saved per new hire, per onboarding cycle",
  },
  {
    target: 95,
    suffix: "%",
    label: "of onboarding tasks completed on time",
  },
  {
    target: 20,
    suffix: "+",
    label: "documents organized automatically, not manually",
  },
];

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = React.useState(
    shouldReduceMotion ? target : 0
  );

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(target);
      return;
    }

    if (isInView) {
      const controls = animate(0, target, {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, target, shouldReduceMotion]);

  return (
    <span
      ref={ref}
      className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white select-none tabular-nums"
    >
      {displayValue}
      {suffix}
    </span>
  );
}

export function Stats() {
  const shouldReduceMotion = useReducedMotion();

  const getStatVariants = (index: number): Variants => ({
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
    <Section id="stats" spacing="default" divider>
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
          className="flex flex-col items-start text-left max-w-3xl mb-14 sm:mb-16 lg:mb-20"
        >
          <SectionHeading
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-white"
          >
            The difference shows up fast
          </SectionHeading>
        </motion.div>

        {/* 4-Up Stat Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={getStatVariants(index)}
              className="flex flex-col items-start text-left pt-6 transition-colors duration-200 hover:border-border-strong group"
            >
              {/* Smooth Animated Counter */}
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />

              {/* Stat description label */}
              <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed max-w-[28ch] sm:max-w-none">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
