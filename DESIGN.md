# Onboard360 Landing Page - Creative Direction & Design System (DESIGN.md)

## 1. Design Read

> **Design Read Statement:**
> "Reading this as: Single marketing landing page for HR and People-ops leads at mid-size companies evaluating onboarding software, with a precise, confident, engineered, calm, uncluttered language, leaning toward Linear-style dark aesthetic + Tailwind v4 custom tokens + Geist font stack + restrained motion."

### Dials (from taste-skill)
- **DESIGN_VARIANCE: 5** (Structured, disciplined rhythm; avoids chaotic bento slop and avoids lazy 3-card repetition)
- **MOTION_INTENSITY: 4** (Restrained, subtle entrance reveals, tactile micro-interactions, strictly respects prefers-reduced-motion)
- **VISUAL_DENSITY: 3** (Airy, generous whitespace, high readability and scannability, focused value propositions)

---

## 2. Color Palette & Surface Tokens

Linear-inspired dark-mode-first color architecture. The canvas is near-black, never pure pitch black (#000000). A single locked accent color (Indigo `#5e6ad2`) is used consistently across the entire site.

### Canvas & Surfaces
| Token Name | CSS Variable | Hex / Value | Description & Purpose |
| :--- | :--- | :--- | :--- |
| `canvas` | `--bg-canvas` | `#08090a` | Primary root viewport background |
| `surface-subtle` | `--bg-surface-subtle` | `#0f1011` | Inset panels, subtle container backgrounds |
| `surface` | `--bg-surface` | `#141517` | Standard card surface, feature panels |
| `surface-elevated` | `--bg-surface-elevated` | `#191a1c` | Elevated cards, dropdown menus, popovers |
| `surface-active` | `--bg-surface-active` | `#222326` | Active/selected card states |

### Borders & Structural Hairlines
| Token Name | CSS Variable | Value | Purpose |
| :--- | :--- | :--- | :--- |
| `border-subtle` | `--border-subtle` | `rgba(255, 255, 255, 0.06)` | Default hairline divider, subtle section boundaries |
| `border-regular` | `--border-regular` | `rgba(255, 255, 255, 0.10)` | Card containers, interactive borders |
| `border-strong` | `--border-strong` | `rgba(255, 255, 255, 0.18)` | Hover states, active borders |
| `border-accent` | `--border-accent` | `rgba(94, 106, 210, 0.40)` | Accent borders, active focus ring |

### Text & Content Contrast (WCAG AA Compliant)
| Token Name | CSS Variable | Hex / Value | Contrast on Canvas | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `text-primary` | `--text-primary` | `#f7f8f8` | > 15:1 | Display headlines, titles, active navigation |
| `text-secondary` | `--text-secondary` | `#d0d6e0` | > 11:1 | Subtitles, button labels, strong body text |
| `text-muted` | `--text-muted` | `#8a8f98` | > 5.5:1 | Body copy, descriptions, secondary navigation |
| `text-faint` | `--text-faint` | `#62666d` | > 3.2:1 | Metadata, disabled indicators, subtle tags |

### Brand Accent (Single Locked System)
| Token Name | CSS Variable | Value | Purpose |
| :--- | :--- | :--- | :--- |
| `accent-primary` | `--accent-primary` | `#5e6ad2` | Primary CTA background, key brand highlight |
| `accent-hover` | `--accent-hover` | `#7170ff` | Interactive hover state for primary elements |
| `accent-active` | `--accent-active` | `#4e5ac0` | Pressed/active state for primary CTA |
| `accent-subtle` | `--accent-subtle` | `rgba(94, 106, 210, 0.12)` | Pill badges, subtle glow accents |
| `accent-glow` | `--accent-glow` | `rgba(94, 106, 210, 0.20)` | Restrained spotlight ambient glow (never noisy) |

---

## 3. Typography Scale & Hierarchy

- **Primary Sans Typeface:** `Geist Sans` (`var(--font-geist-sans)`), falling back to system sans.
- **Monospace Typeface:** `Geist Mono` (`var(--font-geist-mono)`), falling back to system monospace for badges, steps, and technical metrics.
- **Weights:** Regular (`400`), Medium (`500` - Linear's signature weight), Semibold (`600`). No heavy 800/900 black weights.

### Type Scale
| Level | Font Size | Line Height | Letter Spacing | Weight | Tailwind Utility Classes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | 3.5rem (56px) - 4.5rem (72px) | 1.05 | -0.035em | 500 / 600 | `text-4xl sm:text-5xl lg:text-6xl tracking-[-0.035em] leading-[1.05] font-medium` |
| **Section Headline** | 2rem (32px) - 2.5rem (40px) | 1.15 | -0.025em | 500 / 600 | `text-2xl sm:text-3xl lg:text-4xl tracking-[-0.025em] leading-[1.15] font-medium` |
| **Feature Title** | 1.25rem (20px) - 1.5rem (24px) | 1.25 | -0.02em | 500 | `text-xl sm:text-2xl tracking-[-0.02em] font-medium` |
| **Body (Default)** | 1rem (16px) | 1.6 | normal | 400 | `text-base text-text-muted leading-relaxed max-w-[65ch]` |
| **Body Small** | 0.875rem (14px) | 1.5 | normal | 400 | `text-sm text-text-muted leading-normal` |
| **Eyebrow / Overline** | 0.75rem (12px) | 1.4 | 0.14em | 500 | `text-xs uppercase tracking-[0.14em] font-medium text-text-muted` |
| **Mono / Meta** | 0.75rem (12px) | 1.4 | -0.01em | 500 | `font-mono text-xs text-text-faint` |

---

## 4. Spacing Scale, Layout & Shape System

### Shape Consistency Lock (Crisp, Low-Radius Rules)
- **Buttons / Inputs:** `rounded-md` (6px) or `rounded-lg` (8px). Never giant squishy pills for primary buttons.
- **Pills / Status Badges:** `rounded-full` (9999px) for pill tags only.
- **Cards & Containers:** `rounded-lg` (8px) to `rounded-xl` (12px).
- **Prohibited:** Giant `rounded-3xl` or `rounded-2xl` generic AI-startup shapes.

### Layout Geometry & Spacing
- **Container Max-Width:** `max-w-6xl` (1152px) or `max-w-7xl` (1280px) centered with `mx-auto px-4 sm:px-6 lg:px-8`.
- **Viewport Height:** Always `min-h-[100dvh]` to avoid mobile Safari layout shifting. Never `h-screen`.
- **Hero Top Padding Cap:** Maximum `pt-20 sm:pt-24` on desktop. Content must never float halfway down the screen.
- **Section Spacing Rhythm:** `py-20 sm:py-28 lg:py-32` between content sections.
- **Header Dimensions:** Height `64px` (`h-16`), single row on desktop, fixed or sticky with `backdrop-blur-md` and `bg-canvas/80`.

---

## 5. Motion & Interaction Principles

- **Motion Library:** `motion/react` for React-based component transitions and micro-interactions.
- **Reduced Motion Support:** Mandatory check via `useReducedMotion()`. Motion is eliminated or collapsed to pure opacity fade when preferred.
- **Physics & Easing:**
  - Standard Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (snappy ease-out).
  - Spring Dynamics: `{ type: "spring", stiffness: 100, damping: 20 }`.
- **Scroll Entrances:**
  - Subdued distance: enter from `y: 16` to `y: 0`, opacity `0` to `1` over `0.45s`.
  - Sequential reveal staggering: `delay: index * 0.05`.
- **Tactile Feedback:**
  - `:active` buttons push back with `scale-[0.98]` or `-translate-y-[1px]`.
  - Hover states transition border opacity and subtle background shift within `150ms-200ms`.

---

## 6. Strict Anti-Tells & Design Discipline

1. **ZERO EM-DASHES (`—`) or EN-DASHES (`–`):**
   - Strictly banned everywhere in copy, headlines, buttons, cards, and labels. Use regular hyphens `-` only.
2. **NO DEFAULT TAILWIND PALETTE:**
   - No generic `slate-*`, `zinc-*`, or default `blue-*` classes. Every element maps directly to our design tokens (`canvas`, `surface`, `border-subtle`, `text-primary`, `accent`).
3. **NO GRADIENT-BLOB HEROES:**
   - No purple/cyan mesh blobs, no floating nebulas. Depth is established through crisp hairlines, surface elevation, and restrained radial falloffs.
4. **EYEBROW RESTRAINT:**
   - Maximum 1 eyebrow per 3 sections. The hero counts as 1. Eyebrows are omitted on subsequent sections to prevent AI templating.
5. **NO SPLIT-HEADERS:**
   - No "headline left, explainer paragraph right" section headers. Stack headlines and sub-paragraphs vertically with controlled widths.
6. **ONE LOCKED THEME:**
   - Entire site is locked to dark mode. No accidental light-mode backgrounds or invert flips midway down the page.
7. **NO DIV-BASED FAKE SCREENSHOTS:**
   - When visuals are needed, use labeled placeholder slots or real asset slots, never toy styled-div dashboards.
