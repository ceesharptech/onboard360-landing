# Onboard360 Landing Page — Development Plan

**Stack:** Next.js (App Router), Tailwind CSS, TypeScript
**Deploy target:** Vercel
**Creative reference:** Linear's marketing site (linear.app) — researched via Inspo MCP before any code is written
**Scope note:** This is a standalone marketing site, separate from the Onboard360 product app. It does **not** inherit the product's Notion-style dark mode design system — it follows Linear's visual language instead: near-black backgrounds, restrained gradients, tight type, generous negative space, subtle motion.

**CTA behavior note:** Primary CTA copy is "Get a demo" and routes to a contact point that reaches Eniola directly — a `mailto:` link or a lightweight `/contact` page — since demos are still handled by hand even though a software process for onboarding companies now exists. Separately, the navbar includes a **Login** button/link that goes to the actual product app, hosted independently (likely at a subdomain such as `app.onboard360.com`) — that link should be a plain external `<a href>` to an env-configurable URL, not a route built inside this project.

**Design taste note:** A SKILL file lives at `.agents/design-taste-frontend/SKILL.md` (from tasteskill.dev). The agent must load it as the active skill and treat it as the source of truth for visual decisions, overriding any generic default it would otherwise reach for. Phase 0 below folds in the skill's required pre-flight brief and design-read steps.

---

## How this plan works

Each phase below becomes one prompt handed to the coding agent. Phases are ordered so the agent never has to guess at a dependency it hasn't built yet — design tokens and shared layout come before any section, and every content-bearing section pulls its copy from `content.md` (the companion file) rather than improvising it.

You review the agent's output summary after each phase before moving to the next. Images are handled by you — every image slot in the plan is a clearly labeled placeholder the agent leaves for you to drop assets into later.

---

## Phase 0 — Context Load, Design Taste Setup & Creative Direction
**Goal:** Load full project context, activate the design-taste skill, establish creative direction. No landing page sections yet.

The Next.js project is already scaffolded (App Router, TypeScript, Tailwind). This phase is about grounding the agent before it writes a single component.

- Read `onboard360-landing-plan.md` (this file) and `onboard360-landing-content.md` in full for context on scope, phase sequence, and section copy.
- Load `.agents/design-taste-frontend/SKILL.md` in full as the active skill for this project, and treat it as the single source of truth for visual decisions, overriding any default the agent would otherwise reach for.
- Run the skill's required design-read step using the brief below, before writing any code.
- Use Inspo MCP to research Linear's current landing page as one of the reference signals in that design-read: layout rhythm, section order, navbar behavior, hero structure, type scale, color palette, spacing, gradients/glow effects, animation style (scroll-triggered reveals, hover states), footer structure.
- Produce a short `DESIGN.md` combining the skill's design-read output and the Inspo MCP research into concrete tokens: colors, fonts, spacing scale, motion principles.
- Set up the Tailwind theme (color tokens, font tokens, spacing tokens) and base fonts in the existing project, derived directly from `DESIGN.md` — no default Tailwind palette left in place.
- Confirm/adjust folder structure if needed: `app/`, `components/sections/`, `components/ui/`, `content/`, `public/images/` (placeholder folder).
- Run the design-taste skill's pre-flight check against the setup and report the result before finishing.

Deliverable: `npm run dev` shows a blank page with the correct fonts/background loading, plus `DESIGN.md` at the project root and the skill's pre-flight check result reported back.

## Phase 1 — Design System & Shared Components
**Goal:** Reusable pieces every section will use.

- Navbar (logo slot, nav links, **Login button/link** to the separately-hosted app — env-configurable URL, e.g. `NEXT_PUBLIC_APP_URL`, defaulting to a placeholder like `https://app.onboard360.com` — plus the "Get a demo" CTA button, mobile menu)
- Footer (logo slot, link columns, copyright)
- Button component (primary/secondary variants, matching Linear's crisp, low-radius style)
- Section wrapper/container component (consistent max-width, padding, vertical rhythm)
- Typography components (eyebrow label, section heading, body text) matching the type scale from Phase 0
- Badge/pill component for "AI-powered", "New" style tags if used
- Deliverable: a `/style-guide` internal route rendering every shared component so you can review them in isolation.

## Phase 2 — Hero Section
**Goal:** The first-impression section, matching Linear's hero rhythm (eyebrow → headline → subheadline → dual CTA → visual).

- Eyebrow label, headline, subheadline, primary + secondary CTA buttons
- Hero visual placeholder (labeled image/screenshot slot — you'll drop in an Onboard360 product screenshot)
- Subtle background treatment (gradient/glow, matching research)
- Scroll-triggered entrance animation
- Pulls copy from `content.md` → Hero section

## Phase 3 — Social Proof Strip
**Goal:** Lightweight trust signal below the hero, Linear-style logo/marquee row.

- "Trusted by teams at" style label
- Logo placeholder row (grayscale placeholder boxes — you'll drop in real logos or remove if not applicable yet)
- Pulls copy from `content.md` → Social Proof section

## Phase 4 — Core Features Section (Workflow Builder, Document Pipeline, Qorra)
**Goal:** The three-differentiator showcase — the heart of the page.

- Section heading + subheading
- Three feature blocks, each: icon slot, title, description, optional screenshot placeholder — for the workflow builder, the document processing pipeline, and Qorra (the RAG assistant)
- Layout should alternate or grid in Linear's style (large feature cards with generous whitespace, not cramped icon-boxes)
- Pulls copy from `content.md` → Core Features section

## Phase 5 — How It Works Section
**Goal:** A simple numbered/step-based section showing the onboarding flow at a glance (e.g. HR builds the checklist → new hire gets assigned → Qorra answers questions along the way).

- 3–4 numbered steps, each with a short title + description
- Optional connecting line/visual between steps
- Pulls copy from `content.md` → How It Works section

## Phase 6 — Stats / Impact Section
**Goal:** Short, punchy metrics band, Linear-style (large numbers, minimal labels).

- 3–4 stat callouts (placeholder numbers you'll confirm/replace)
- Pulls copy from `content.md` → Stats section

## Phase 7 — Final CTA, Contact Point & Footer Assembly
**Goal:** Closing conversion section, a working contact route, and full footer wiring.

- Large closing headline + CTA, matching Linear's end-of-page conversion block
- The "Get a demo" CTA (nav, hero, final CTA — kept consistent across all three) links to the same contact point — a `mailto:` link or a minimal `/contact` page (agent's choice, note which was used) with a placeholder email address clearly marked for Eniola to replace. Demos are still handled by hand for now, so don't build a signup or account-creation flow for this CTA
- Confirm the navbar's Login link (from Phase 1) correctly points to the app URL env variable and opens in the same tab
- Wire up the Phase 1 footer with real link structure
- Pulls copy from `content.md` → Final CTA section

## Phase 8 — Responsive Pass, Motion Polish & Performance
**Goal:** Production-readiness pass across the whole page.

- Full responsive audit (mobile, tablet, desktop breakpoints) for every section built so far
- Consistent scroll-reveal/hover motion pass across all sections (no jank, respects `prefers-reduced-motion`)
- Image optimization setup (`next/image`) for all placeholder slots, so real assets drop in cleanly later
- Basic SEO pass: meta tags, Open Graph tags, favicon slot, page title
- Lighthouse pass (performance/accessibility/SEO scores) with a short report of remaining issues
- Deliverable: page is deploy-ready for Vercel

## Phase 9 — Deploy
**Goal:** Ship it.

- Vercel deployment configuration
- Environment/build sanity check
- Final walkthrough checklist of every image placeholder still needing a real asset, handed back to you

---

## Sequencing notes

- Do not start Phase 1 until Phase 0's creative-direction summary exists — every later phase leans on those tokens.
- Each section phase (2–7) is self-contained and independently reviewable; if you want to reorder which section gets built first after Phase 1, you can — none of them depend on each other, only on Phase 1's shared components.
- Content and code are deliberately decoupled: if you want to revise copy later, you only need to edit `content.md` and hand the agent a small "update copy in section X" prompt — no rebuild of structure needed.
