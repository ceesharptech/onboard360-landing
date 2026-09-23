import * as React from "react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  Eyebrow,
  SectionHeading,
  SectionSubheading,
  BodyText,
} from "@/components/ui/typography";

export default function StyleGuidePage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-canvas text-text-primary selection:bg-accent/30 selection:text-text-primary">
      {/* 1. Live Sticky Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Style Guide Header */}
        <Section spacing="compact" divider>
          <Container>
            <Eyebrow>Phase 1 Review</Eyebrow>
            <SectionHeading as="h1">Design System & Shared Components</SectionHeading>
            <SectionSubheading>
              Every reusable building block for the Onboard360 landing page, rendered in isolation. All tokens and motion parameters are derived directly from DESIGN.md.
            </SectionSubheading>
          </Container>
        </Section>

        {/* 2. Button Component Showcase */}
        <Section spacing="default" divider>
          <Container>
            <Eyebrow>Interactive Elements</Eyebrow>
            <SectionHeading as="h2">Button Component</SectionHeading>
            <SectionSubheading>
              Crisp low-radius styling (6px-8px) with subtle top-highlight reflections, hover illumination, and active click scaling.
            </SectionSubheading>

            <div className="mt-10 flex flex-col gap-8">
              {/* Variants */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono text-text-faint uppercase tracking-wider">
                  Variants (Size MD)
                </span>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary">Primary (Get a demo)</Button>
                  <Button variant="secondary">Secondary (See how it works)</Button>
                  <Button variant="outline">Outline Variant</Button>
                  <Button variant="ghost">Ghost Variant (Log in)</Button>
                </div>
              </div>

              {/* Sizes */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono text-text-faint uppercase tracking-wider">
                  Sizes (Primary Variant)
                </span>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" size="sm">
                    Small Button (h-8)
                  </Button>
                  <Button variant="primary" size="md">
                    Medium Default (h-10)
                  </Button>
                  <Button variant="primary" size="lg">
                    Large Button (h-11)
                  </Button>
                </div>
              </div>

              {/* States: Links & Disabled */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono text-text-faint uppercase tracking-wider">
                  Link Rendering & Disabled States
                </span>
                <div className="flex flex-wrap items-center gap-4">
                  <Button href="#demo" variant="primary">
                    Rendered as Link (href)
                  </Button>
                  <Button variant="primary" disabled>
                    Disabled Primary
                  </Button>
                  <Button variant="secondary" disabled>
                    Disabled Secondary
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 3. Badge / Pill Component Showcase */}
        <Section spacing="default" divider>
          <Container>
            <Eyebrow>Status & Meta</Eyebrow>
            <SectionHeading as="h2">Badge & Pill Component</SectionHeading>
            <SectionSubheading>
              Restrained Linear-style pills for status tags, feature highlights, and release notes. No oversaturated badges.
            </SectionSubheading>

            <div className="mt-8 flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="neutral">AI-powered</Badge>
                <Badge variant="accent" dot>
                  New Release
                </Badge>
                <Badge variant="subtle">RAG Grounded</Badge>
                <Badge variant="neutral" size="sm">
                  Small Tag
                </Badge>
                <Badge variant="accent" size="sm" dot>
                  Live System
                </Badge>
              </div>
            </div>
          </Container>
        </Section>

        {/* 4. Typography Scale Showcase */}
        <Section spacing="default" divider>
          <Container>
            <Eyebrow>Type Hierarchy</Eyebrow>
            <SectionHeading as="h2">Typography Scale</SectionHeading>
            <SectionSubheading>
              Geist Sans display pairing with Geist Mono for technical precision. Letter spacing and line heights tuned for authority and scannability.
            </SectionSubheading>

            <div className="mt-10 flex flex-col gap-8 p-6 sm:p-8 rounded-xl bg-surface border border-border-subtle">
              <div>
                <span className="text-xs font-mono text-text-faint block mb-2">Display H1 (56px-72px)</span>
                <SectionHeading as="h1">Onboarding, built like software.</SectionHeading>
              </div>

              <div className="pt-6 border-t border-border-subtle">
                <span className="text-xs font-mono text-text-faint block mb-2">Section H2 (32px-40px)</span>
                <SectionHeading as="h2">Three systems. One onboarding experience.</SectionHeading>
              </div>

              <div className="pt-6 border-t border-border-subtle">
                <span className="text-xs font-mono text-text-faint block mb-2">Feature H3 (20px-24px)</span>
                <SectionHeading as="h3">Checklists that know who they are for</SectionHeading>
              </div>

              <div className="pt-6 border-t border-border-subtle">
                <span className="text-xs font-mono text-text-faint block mb-2">Eyebrow Label (12px, tracking 0.14em)</span>
                <Eyebrow className="mb-0">Built for HR teams, not spreadsheets</Eyebrow>
              </div>

              <div className="pt-6 border-t border-border-subtle">
                <span className="text-xs font-mono text-text-faint block mb-2">Section Subheading & Body (16px-18px)</span>
                <SectionSubheading className="mt-0">
                  Onboard360 turns scattered checklists, PDFs, and Slack threads into one system: a workflow builder for every role, a document pipeline that organizes itself, and an AI assistant that already knows the answer.
                </SectionSubheading>
              </div>

              <div className="pt-6 border-t border-border-subtle">
                <span className="text-xs font-mono text-text-faint block mb-2">Monospace & Metadata (12px)</span>
                <p className="font-mono text-xs text-text-muted">
                  ROLE: ENGINEERING_LEAD // DOCS_PROCESSED: 2,410 // LATENCY: 24ms
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* 5. Surface & Elevation Layers */}
        <Section spacing="default" divider>
          <Container>
            <Eyebrow>Color & Depth</Eyebrow>
            <SectionHeading as="h2">Surfaces & Elevation Layers</SectionHeading>
            <SectionSubheading>
              Near-black background (#08090a) elevated through subtle achromatic cards and crisp borders.
            </SectionSubheading>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-lg bg-canvas border border-border-subtle flex flex-col gap-2">
                <span className="font-mono text-xs text-text-faint">bg-canvas</span>
                <span className="text-sm font-medium text-text-primary">#08090a (Root Canvas)</span>
              </div>
              <div className="p-5 rounded-lg bg-surface-subtle border border-border-subtle flex flex-col gap-2">
                <span className="font-mono text-xs text-text-faint">bg-surface-subtle</span>
                <span className="text-sm font-medium text-text-primary">#0f1011 (Inset Layer)</span>
              </div>
              <div className="p-5 rounded-lg bg-surface border border-border-regular flex flex-col gap-2">
                <span className="font-mono text-xs text-text-faint">bg-surface</span>
                <span className="text-sm font-medium text-text-primary">#141517 (Card Base)</span>
              </div>
              <div className="p-5 rounded-lg bg-surface-elevated border border-border-regular flex flex-col gap-2">
                <span className="font-mono text-xs text-text-faint">bg-surface-elevated</span>
                <span className="text-sm font-medium text-text-primary">#191a1c (Hover/Popup)</span>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      {/* 6. Live Footer */}
      <Footer />
    </div>
  );
}
