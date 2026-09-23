# Onboard360 Landing Page - Creative Direction & Design System (DESIGN.md)

## 1. Design Read

> **Design Read Statement:**
> "Reading this as: Single marketing landing page for HR and People-ops leads at mid-size companies evaluating onboarding software, with a precise, confident, engineered, calm, uncluttered language, strictly adhering to Linear's monochromatic black-and-white visual language + Tailwind v4 custom tokens + Geist font stack + restrained motion."

### Dials (from taste-skill)
- **DESIGN_VARIANCE: 5** (Structured, disciplined rhythm; left-aligned hero, generous whitespace, structured feature showcases)
- **MOTION_INTENSITY: 4** (Restrained, subtle entrance reveals, tactile micro-interactions, strictly respects prefers-reduced-motion)
- **VISUAL_DENSITY: 3** (Airy, generous whitespace, high readability and scannability, focused value propositions)

---

## 2. Color Palette & Surface Tokens (Monochromatic Black & White)

Linear-identical monochromatic black and white color architecture. No purple, violet, or colorful accents. The canvas is near-black, surfaces are dark charcoal/obsidian, text is high-contrast white and silver grays, and the primary action color is solid crisp white with dark text.

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
| `border-subtle` | `--border-subtle` | `rgba(255, 255, 255, 0.07)` | Default hairline divider, subtle section boundaries |
| `border-regular` | `--border-regular` | `rgba(255, 255, 255, 0.12)` | Card containers, interactive borders |
| `border-strong` | `--border-strong` | `rgba(255, 255, 255, 0.22)` | Hover states, active borders |
| `border-accent` | `--border-accent` | `rgba(255, 255, 255, 0.35)` | High-contrast accent highlights |

### Text & Content Contrast (WCAG AA Compliant)
| Token Name | CSS Variable | Hex / Value | Contrast on Canvas | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `text-primary` | `--text-primary` | `#f7f8f8` | > 15:1 | Display headlines, titles, active navigation |
| `text-secondary` | `--text-secondary` | `#d0d6e0` | > 11:1 | Subtitles, button labels, strong body text |
| `text-muted` | `--text-muted` | `#8a8f98` | > 5.5:1 | Body copy, descriptions, secondary navigation |
| `text-faint` | `--text-faint` | `#62666d` | > 3.2:1 | Metadata, disabled indicators, subtle tags |

### Action Tokens (Monochromatic High-Contrast System)
| Token Name | CSS Variable | Value | Purpose |
| :--- | :--- | :--- | :--- |
| `accent-primary` | `--accent-primary` | `#ffffff` | Primary CTA background (solid white with #08090a text) |
| `accent-hover` | `--accent-hover` | `#e2e4e6` | Interactive hover state for primary elements |
| `accent-active` | `--accent-active` | `#d0d6e0` | Pressed/active state for primary CTA |
| `accent-subtle` | `--accent-subtle` | `rgba(255, 255, 255, 0.08)` | Pill badges, subtle translucent backgrounds |
| `accent-glow` | `--accent-glow` | `rgba(255, 255, 255, 0.06)` | Neutral silver ambient spotlight (never purple) |

---

## 3. Typography Scale & Hierarchy

- **Primary Sans Typeface:** `Geist Sans` (`var(--font-geist-sans)`), falling back to system sans.
- **Monospace Typeface:** `Geist Mono` (`var(--font-geist-mono)`), falling back to system monospace for badges, steps, and technical metrics.
- **Weights:** Regular (`400`), Medium (`500` - Linear's signature weight), Semibold (`600`).
- **Alignment:** Hero headline and intro content are **left-aligned**, matching Linear's layout rhythm.

### Type Scale
| Level | Font Size | Line Height | Letter Spacing | Weight | Tailwind Utility Classes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | 3.5rem (56px) - 4.5rem (72px) | 1.05 | -0.035em | 500 / 600 | `text-4xl sm:text-6xl lg:text-7xl tracking-[-0.035em] leading-[1.05] font-medium text-left` |
| **Section Headline** | 2rem (32px) - 2.5rem (40px) | 1.15 | -0.025em | 500 / 600 | `text-2xl sm:text-3xl lg:text-4xl tracking-[-0.025em] leading-[1.15] font-medium` |
| **Feature Title** | 1.25rem (20px) - 1.5rem (24px) | 1.25 | -0.02em | 500 | `text-xl sm:text-2xl tracking-[-0.02em] font-medium` |
| **Body (Default)** | 1rem (16px) | 1.6 | normal | 400 | `text-base text-text-muted leading-relaxed max-w-[65ch]` |
| **Body Small** | 0.875rem (14px) | 1.5 | normal | 400 | `text-sm text-text-muted leading-normal` |
| **Eyebrow / Overline** | 0.75rem (12px) | 1.4 | 0.14em | 500 | `text-xs uppercase tracking-[0.14em] font-medium text-text-muted` |
| **Mono / Meta** | 0.75rem (12px) | 1.4 | -0.01em | 500 | `font-mono text-xs text-text-faint` |

---

## 4. Spacing Scale, Layout & Shape System

### Shape Consistency Lock (Linear Matching)
- **Buttons / Inputs:** Pill `rounded-full` for primary and secondary action CTAs matching Linear's "Sign up" button, or `rounded-lg` (8px) for compact inputs.
- **Pills / Status Badges:** `rounded-full` (9999px).
- **Cards & Containers:** `rounded-xl` (12px) to `rounded-2xl` (16px) for product frames.

### Layout Geometry & Spacing
- **Container Max-Width:** `max-w-6xl` (1152px) or `max-w-7xl` (1280px) centered with `mx-auto px-4 sm:px-6 lg:px-8`.
- **Viewport Height:** Always `min-h-[100dvh]` to avoid mobile Safari layout shifting. Never `h-screen`.
- **Hero Top Padding Cap:** `pt-16 sm:pt-20 lg:pt-24` on desktop.
- **Section Spacing Rhythm:** `py-20 sm:py-28 lg:py-32` between content sections.
- **Header Dimensions:** Height `64px` (`h-16`), single row on desktop, fixed or sticky with `backdrop-blur-md` and `bg-canvas/80`.

---

## 5. Motion & Interaction Principles

- **Motion Library:** `motion/react` for React-based component transitions and micro-interactions.
- **Reduced Motion Support:** Mandatory check via `useReducedMotion()`.
- **Physics & Easing:**
  - Standard Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (snappy ease-out).
  - Spring Dynamics: `{ type: "spring", stiffness: 100, damping: 20 }`.
- **Scroll Entrances:**
  - Subdued distance: enter from `y: 16` to `y: 0`, opacity `0` to `1` over `0.45s`.
  - Sequential reveal staggering: `delay: index * 0.06`.
- **Tactile Feedback:**
  - `:active` buttons push back with `scale-[0.98]`.
  - Hover states transition border opacity and subtle background shift within `150ms-200ms`.

---

## 6. Strict Anti-Tells & Design Discipline

1. **MONOCHROMATIC DISCIPLINE:**
   - Strictly black, white, and neutral grays. Zero purple, violet, cyan, or multi-colored gradients.
2. **ZERO EM-DASHES (`—`) or EN-DASHES (`–`):**
   - Strictly banned everywhere in copy, headlines, buttons, cards, and labels. Use regular hyphens `-` or colons `:` only.
3. **NO DEFAULT TAILWIND PALETTE:**
   - Every element maps directly to our design tokens (`canvas`, `surface`, `border-subtle`, `text-primary`, `accent`).
4. **EYEBROW RESTRAINT:**
   - Maximum 1 eyebrow per 3 sections.
5. **NO SPLIT-HEADERS:**
   - Clean vertical stack or balanced two-column header with clear compositional purpose.
6. **ONE LOCKED THEME:**
   - Entire site is locked to dark mode (`#08090a`).
