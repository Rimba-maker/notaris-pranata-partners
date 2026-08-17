---
version: alpha
name: Notaris Pranata & Partners-design
description: Adapted from Together AI's dual-surface structure (near-black navy bands alternating with bright white content bands) for Kantor Notaris Pranata & Partners — a Jakarta notary practice. The three-color AI-brand gradient is replaced by a single restrained gold/bronze accent (the "seal" color), the geometric display sans is replaced by a formal serif for headlines, and the uppercase mono face is kept for eyebrows/labels — its typewriter/stamped quality reads as "official document" rather than "developer console" in this context.

colors:
  primary: "#0A1A33"
  on-primary: "#ffffff"
  ink: "#14161c"
  body: "#6b6b6b"
  hairline: "#e3e0d8"
  canvas: "#ffffff"
  canvas-dark: "#0A1428"
  surface-dark-soft: "#1C2A44"
  on-dark: "#ffffff"
  accent-gold: "#B08D3E"
  accent-gold-soft: "#EFE6CE"

typography:
  display-xxl:
    fontFamily: Source Serif 4, Georgia, Times New Roman, serif
    fontSize: 64px
    fontWeight: 500
    lineHeight: 70.4px
    letterSpacing: -0.5px
  display-xl:
    fontFamily: Source Serif 4, Georgia, Times New Roman, serif
    fontSize: 40px
    fontWeight: 500
    lineHeight: 48px
    letterSpacing: -0.3px
  display-lg:
    fontFamily: Source Serif 4, Georgia, Times New Roman, serif
    fontSize: 28px
    fontWeight: 500
    lineHeight: 32.2px
    letterSpacing: -0.2px
  display-md:
    fontFamily: Source Serif 4, Georgia, Times New Roman, serif
    fontSize: 22px
    fontWeight: 500
    lineHeight: 25.3px
    letterSpacing: -0.1px
  body-lg:
    fontFamily: Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 23.4px
    letterSpacing: -0.18px
  body-lg-strong:
    fontFamily: Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 23.4px
    letterSpacing: -0.18px
  body-md:
    fontFamily: Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 20.8px
    letterSpacing: -0.16px
  body-md-strong:
    fontFamily: Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 20.8px
    letterSpacing: -0.16px
  caption:
    fontFamily: Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 19.6px
  caption-strong:
    fontFamily: Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 19.6px
  mono-caps-button:
    fontFamily: JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace
    fontSize: 16px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0.08px
  mono-caps-eyebrow:
    fontFamily: JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace
    fontSize: 11px
    fontWeight: 500
    lineHeight: 11px
    letterSpacing: 0.55px
  mono-caps-label:
    fontFamily: JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace
    fontSize: 11px
    fontWeight: 500
    lineHeight: 15.4px
    letterSpacing: 0.055px
  mono-caption:
    fontFamily: JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace
    fontSize: 10px
    fontWeight: 400
    lineHeight: 14px
    letterSpacing: 0.05px

rounded:
  none: 0px
  xs: 2px
  sm: 3px
  md: 6px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 32px
  4xl: 44px
  5xl: 48px
  6xl: 55.2px
  section: 80px

components:
  nav-bar:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    padding: "{spacing.lg} {spacing.3xl}"
  nav-link:
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.mono-caps-button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.2xl}"
  button-secondary-gold:
    backgroundColor: "{colors.accent-gold-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.mono-caps-button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.2xl}"
  button-secondary-white:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.mono-caps-button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.2xl}"
  button-ghost-on-dark:
    backgroundColor: "{colors.surface-dark-soft}"
    textColor: "{colors.on-dark}"
    typography: "{typography.mono-caps-button}"
    rounded: "{rounded.sm}"
  button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "rgba(0, 0, 0, 0.08)"
    typography: "{typography.mono-caps-button}"
    rounded: "{rounded.xs}"
  button-icon-circular:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "rgba(0, 0, 0, 0.08)"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
  badge-neutral:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "rgba(0, 0, 0, 0.08)"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.sm}"
  badge-subtle-on-dark:
    backgroundColor: "{colors.surface-dark-soft}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.sm}"
  hero-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xxl}"
    padding: "{spacing.section} {spacing.3xl}"
  credentials-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section} {spacing.3xl}"
  feature-tab-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md-strong}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.2xl}"
  pricing-sub-tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: "{spacing.sm} {spacing.lg}"
  stats-card-tinted:
    backgroundColor: "{colors.accent-gold-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.sm}"
    padding: "{spacing.3xl}"
  research-card:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    borderColor: "rgba(255, 255, 255, 0.12)"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2xl}"
  testimonial-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2xl}"
  article-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2xl}"
  document-preview-mockup:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.mono-caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2xl}"
  data-table-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "rgba(0, 0, 0, 0.08)"
    typography: "{typography.body-md}"
    padding: "{spacing.md} {spacing.lg}"
  data-table-header:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.mono-caps-eyebrow}"
    padding: "{spacing.md} {spacing.lg}"
  toggle-pill-group:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.mono-caps-button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "{spacing.section} {spacing.3xl}"
  footer-wordmark-banner:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.display-xxl}"

  # ─── Examples (illustrative) — auto-derived; resolve any TO_FILL markers below ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Mirrors article-card chrome on canvas-soft surface with a hairline border."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "rgba(0, 0, 0, 0.08)"
    rounded: "{rounded.sm}"
    padding: "{spacing.3xl}"
  ex-pricing-tier-featured:
    description: "Featured tier — polarity-flipped to canvas-dark with white text."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.3xl}"
  ex-product-selector:
    description: "What's Included summary card — repurposed for the brand's GPU / inference packaging tiers."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2xl}"
  ex-cart-drawer:
    description: "Subscription summary — line items per add-on (NOT a literal e-commerce cart)."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row. Active state uses brand primary as a left-edge indicator bar."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  ex-data-table-cell:
    description: "Mirrors the brand's pricing-page table. Header uses mono-caps-eyebrow uppercase; body uses body-md."
    headerBackground: "{colors.hairline}"
    headerTypography: "{typography.mono-caps-eyebrow}"
    bodyTypography: "{typography.body-md}"
    cellPadding: "{spacing.md} {spacing.lg}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Mirrors article-card chrome with text-input primitives inside."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.3xl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as article-card; relies on tinted scrim instead of card shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.3xl}"
  ex-empty-state-card:
    description: "Empty-state illustration frame. Generous padding on canvas-soft surface."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.5xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification surface — flat-cornered article-card chrome with a soft brand-tinted drop shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-md}"

---


## Overview

Kantor Notaris Pranata & Partners is a Jakarta notary and PPAT practice serving both individuals in personal legal moments (pranikah, waris, hibah) and businesses (pendirian PT/CV, perjanjian bisnis). The brand needs to read as confident and established — not soft, not cream, not a government-cold institution — while staying legible across long, information-dense sections (a 10-row pricing table, document checklists, an FAQ accordion). Structurally this borrows Together AI's dual-surface rhythm: a deep navy band for statement moments (hero, credentials/trust-badge strip, footer), alternating with bright white bands for the content that has to be *read* (services, pricing, process, documents, FAQ). Where Together AI used a three-color tech gradient as its one piece of brand chrome, this system uses a single muted gold/bronze accent instead — the "seal" color, used sparingly, never as a decorative flourish.

Type carries the formality. A formal serif (`Source Serif 4`) sets every headline — gravitas and tradition, matching the brand's explicit formal-serif logo direction — while a clean humanist sans (`Inter`) carries every paragraph, table cell, and form label, because this site has to stay readable at document-checklist density, not just look good in a hero shot. The uppercase monospace face is kept for eyebrows, button labels, and table headers: in a tech brand this reads as "developer console," but relabeled onto a notary site it reads as a stamped or typewritten official marking — a coincidental but useful fit.

Surfaces alternate deliberately: a `{colors.canvas-dark}` (`#0A1428`, deep navy) band for the hero and the credentials/trust-badge band — followed by `{colors.canvas}` (white) for services, pricing, process, documents, and FAQ, with `{colors.hairline}` reserved for table-header rows and toggle backgrounds. `{colors.accent-gold-soft}` tinted tiles break up the white middle for stat callouts ("12+ Tahun Pengalaman", "5.000+ Akta Terbit"). Cards are lightly rounded (`{rounded.sm}` 3 px, tighter than the source brand's 4 px) with hairline borders — never floating with shadows, which keeps the system feeling structured and document-like rather than soft.

**Key Characteristics:**
- A single navy `{colors.primary}` CTA pill carries every conversion target across the site — "Buat Janji", "Konsultasi Gratis", footer, contact form. The soft-gold `{colors.accent-gold-soft}` and white pill variants are reserved for hero contexts only.
- One muted gold/bronze accent (`{colors.accent-gold}`) is the entire decorative system — used sparingly on credential icons, dividers, and stat emphasis; never as a wash across a whole section.
- All-caps mono eyebrows and button labels in `{typography.mono-caps-eyebrow}` / `{typography.mono-caps-button}` everywhere — section titles, table headers, "TERDAFTAR MENKUMHAM" style credential tags — reading as stamped/official marks rather than tech labels.
- Lightly rounded card chrome at `{rounded.sm}` 3 px; `{rounded.full}` reserved only for a floating contact/WhatsApp launcher, if used.
- Dual surface mode — alternating `{colors.canvas-dark}` and `{colors.canvas}` bands; no in-between greys. The single soft surface `{colors.hairline}` exists only to mark table-header rows.
- A large `Pranata & Partners` wordmark banner at the very bottom of the page, set in `{typography.display-xxl}` and tinted nearly-into-the-canvas (`{colors.hairline}`), as a quiet sign-off that doubles as a footer separator.

## Colors

### Brand & Accent
- **Deep Navy** (`{colors.primary}` — `#0A1A33`): The single primary CTA color. Navy pill carries "Buat Janji", "Konsultasi Gratis", every footer CTA — authoritative without being cold black.
- **Seal Gold** (`{colors.accent-gold}` — `#B08D3E`): The one accent color in the system. Muted brass/bronze, never bright or metallic-shiny. Used sparingly — credential icons, section dividers, stat-number emphasis, hover states. Never washed across a whole section.
- **Seal Gold Soft** (`{colors.accent-gold-soft}` — `#EFE6CE`): A pale gold tint used for `stats-card-tinted` tiles and the hero secondary-CTA pill. The only "fill" use of the accent family.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The default services / pricing / docs / FAQ background. Kept pure white, deliberately not cream — warmth comes from the gold accent and serif type, not from a tinted background.
- **Hairline / Canvas Soft** (`{colors.hairline}` — `#e3e0d8`): The brand's single soft surface tone — used for data-table header rows, toggle-pill rails, and 1 px dividers between table rows. A warm-neutral hairline (not cold gray) to echo paper/document texture without tinting the whole canvas.
- **Canvas Dark** (`{colors.canvas-dark}` — `#0A1428`): The brand's deep-navy hero surface; appears on `hero-band-dark` and the credentials/trust-badge band.
- **Hairline on Dark** (`{colors.surface-dark-soft}` — `#1C2A44`): 1 px dividers and badge backgrounds on `{colors.canvas-dark}` surfaces.
- **Surface Dark Soft** (`{colors.surface-dark-soft}` — `#1C2A44`): A slightly lighter navy fill used inside dark-band cards.

### Text
- **Ink** (`{colors.ink}` — `#14161c`): Every heading and body paragraph on light surfaces. Near-black rather than pure black, softer on long reading passages.
- **Body** (`{colors.body}` — `#6b6b6b`): Secondary text — captions, table cell secondary values, footer link text, price notes.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): All text on `{colors.canvas-dark}` surfaces.

### Semantic
The brand does not maintain a separate error / success palette in its public surface; validation cues use the primary navy or the gold accent depending on context. Adopt framework defaults for explicit error red / success green / warning yellow.

### Single Accent Principle
Where the source brand used a three-stop gradient as its one piece of decorative chrome, this system uses one solid accent (`{colors.accent-gold}`) the same way: sparingly, at meaningful moments (credential badges, a divider under the hero headline, stat numbers), never as a section-wide wash and never diluted into a gradient of its own. Restraint is the point — one confident color says more than a palette of them.

## Typography

### Font Family
Three roles, two families, carry the system:

1. **A formal serif** (`Source Serif 4`, falling back to `Georgia`/`Times New Roman`) for every headline — hero, section titles, card titles. This is the deliberate departure from the source brand: where Together AI used a geometric sans for headlines to read "modern tech," this brand needs its headlines to read "established, formal, trustworthy" — a serif does that instantly, and matches the practice's own formal-serif logo direction. Moderate negative letter-spacing (`-0.5 px` at 64 px, tapering to `-0.1 px` at 22 px) keeps it feeling considered rather than loose.
2. **A clean humanist sans** (`Inter`) for every paragraph, lead text, button label that is not uppercase, form field, and table cell. This carries the site's actual reading load — pricing tables, document checklists, FAQ answers — so it stays plain and highly legible rather than stylized.
3. **An uppercase mono caption face** (`JetBrains Mono`) for every eyebrow, button label, table-header cell, and credential/tag badge. Weight 500 at 11–16 px; always uppercase; positive letter-spacing (`0.05–0.55 px`). On the source brand this mono voice read as "developer console"; here, relabeled onto badges like "TERDAFTAR MENKUMHAM" or table headers like "LAYANAN / BIAYA NOTARIS", it reads instead as a stamped or typewritten official mark — a fitting coincidence for a notary brand.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 64px | 500 | 70.4px | -0.5px | Hero headline ("Setiap Tanda Tangan, Setiap Akta — Kami Pastikan Sah Secara Hukum"). |
| `{typography.display-xl}` | 40px | 500 | 48px | -0.3px | Section headlines ("Layanan Kami", "Tata Cara Pembuatan Akta"). |
| `{typography.display-lg}` | 28px | 500 | 32.2px | -0.2px | Sub-section headlines and stat-tile big numbers ("5.000+ Akta Terbit"). |
| `{typography.display-md}` | 22px | 500 | 25.3px | -0.1px | Card titles, service-card headings. |
| `{typography.body-lg}` | 18px | 400 | 23.4px | -0.18px | Lead paragraphs under section headlines. |
| `{typography.body-lg-strong}` | 18px | 500 | 23.4px | -0.18px | Emphasis runs inside lead paragraphs. |
| `{typography.body-md}` | 16px | 400 | 20.8px | -0.16px | Default body paragraph. |
| `{typography.body-md-strong}` | 16px | 500 | 20.8px | -0.16px | Bolded inline body. |
| `{typography.caption}` | 14px | 400 | 19.6px | 0 | Fine print, footer secondary text. |
| `{typography.caption-strong}` | 14px | 500 | 19.6px | 0 | Bolded captions. |
| `{typography.mono-caps-button}` | 16px | 500 | 16px | 0.08px | Primary button labels — uppercase, mono. |
| `{typography.mono-caps-eyebrow}` | 11px | 500 | 11px | 0.55px | Section eyebrows, table-header cell labels. |
| `{typography.mono-caps-label}` | 11px | 500 | 15.4px | 0.055px | Inline tag labels inside text contexts. |
| `{typography.mono-caption}` | 10px | 400 | 14px | 0.05px | Mono fine print (inside code editor mockup). |

### Principles
- **Three-role contrast is the voice.** Serif for headlines (gravitas), sans for everything read at length (clarity), uppercase mono for labels/badges (officialness). Never let a paragraph run in serif or mono; never let a headline run in mono.
- **Negative letter-spacing only on the serif display.** The mono face uses small positive tracking; the sans body uses near-zero tracking. Reversing this is wrong.
- **Headlines stay sentence-case.** Every uppercase moment belongs to the mono face. Mixing all-caps display would muddy the contrast and read as shouting — wrong for this brand's calm-but-confident tone.

## Layout

### Spacing System
- **Base unit**: 4 px. Almost every captured value is a multiple of 4, with two exceptions (7.2 px, 55.2 px) that are gap-multiplier derivatives, not layout decisions.
- **Tokens**: `{spacing.xxs}` 2 px · `{spacing.xs}` 4 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 20 px · `{spacing.2xl}` 24 px · `{spacing.3xl}` 32 px · `{spacing.4xl}` 44 px · `{spacing.5xl}` 48 px · `{spacing.6xl}` 55.2 px · `{spacing.section}` 80 px.
- **Section padding**: marketing bands use `{spacing.section}` 80 px top/bottom on desktop. The hero and the "research" dark band keep the 80 px rhythm; pricing tables tighten to `{spacing.5xl}` to keep dense data legible.
- **Card interior padding**: credential cards and testimonial cards sit at `{spacing.2xl}` 24 px interior; the stat-card tiles use `{spacing.3xl}` 32 px to give the big number breathing room.
- **Inline gap**: button + nav rows use `{spacing.md}` 12 px between siblings; chip groups use `{spacing.sm}` 8 px.

### Grid & Container
- **Max width**: ~1280 px desktop container; nothing rendered above that. Content centres with horizontal gutters of `{spacing.3xl}` 32 px on desktop, `{spacing.lg}` 16 px on mobile.
- **Column patterns**:
  - Research / testimonial grids: 3-up at desktop, 1-up at mobile.
  - Stats tile grid: 3-up at desktop, 1-up at mobile.
  - Article-card grid: 2-up at desktop, 1-up at mobile.
  - Pricing data table: full-width, model rows stack on mobile.
  - Hero: 50 / 50 split (headline left, ribbon graphic right) at desktop; stacked at mobile with graphic above.

### Whitespace Philosophy
Surface contrast does most of the separation. A dark band ends → 80 px of breathing room → next light band begins. Inside a band, headline and lead paragraph hug close (`{spacing.lg}` 16 px between them), then a wider gap before the supporting visual or CTA cluster. Inside pricing data tables, the brand keeps rows tight (`{spacing.md}` 12 px vertical) — the table reads more like a sheet than a marketing component.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 479px | Hero stacks; nav collapses to hamburger; all multi-col grids drop to 1-up. |
| Mobile-Large | 479–767px | Same as Mobile; some tables enable horizontal scroll. |
| Tablet | 768–991px | Article grid moves to 2-up; testimonial grid stays 3-up only if container > 900 px, otherwise 1-up. |
| Desktop | 992–1279px | Full 3-up research grid, 2-up article grid, hero 50/50 split. |
| Desktop-Large | ≥ 1280px | Container caps at 1280 px; bands stay edge-to-edge in colour while content centres. |

#### Touch Targets
The mono-cap button label is set at 16 px; combined with `{spacing.xs}` 4 px top / bottom and a 24 px horizontal padding, the primary pill renders at roughly 32 px tall. On mobile viewports, button height is inflated to ≥ 44 px through extra vertical padding inside the touch row — meeting WCAG AAA. The circular icon button (`button-icon-circular`) renders at 44 × 44 px minimum at all viewports.

#### Collapsing Strategy
- **Nav**: full link row + navy "Buat Janji" pill at desktop. Collapses to logo + hamburger at mobile; the menu opens as a full-overlay drawer with the same link list stacked vertically.
- **Hero**: at desktop, headline left + photograph/gold-line visual right (50 / 50). At mobile, headline stacks above a smaller-scale visual — never below.
- **Credentials band**: 4-up grid at desktop drops to 2-up at tablet, 1-up at mobile. Card chrome stays identical.
- **Pricing data table**: at desktop, full-width with all columns visible (Layanan / Biaya / Catatan). At tablet, sub-tab row enables horizontal scroll. At mobile, cell rows stack layanan-name above price block.
- **Footer wordmark banner**: scales fluidly — the `Pranata & Partners` wordmark stays edge-to-edge regardless of viewport.

#### Image Behavior
- **Hero ribbon graphic**: rendered as an SVG, scales fluidly with the hero container; never crops, never repositions.
- **Testimonial portraits**: square or 4:5 portrait, hard-cropped at top; consistent square framing across the grid.
- **Article thumbnails**: 16:9 landscape, fills card top with `{rounded.sm}` corners on the image only.
- **Logo bar**: customer logos rendered as grayscale SVGs in a wrapping flex row.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Most cards on light surfaces lean on hairline borders, not shadow. |
| Level 1 — Hairline | 1 px solid `{colors.hairline}` on `{colors.canvas}` cards. | Testimonial cards, article cards, data-table rows. |
| Level 2 — Hairline on Dark | 1 px solid `{colors.surface-dark-soft}` on `{colors.canvas-dark}` cards. | Credential/trust-badge cards, on-dark badges. |
| Level 3 — Soft Drop | `rgba(10, 26, 51, 0.12) 0px 4px 10px 0px` — a barely-perceptible shadow tinted with the brand navy. | Floating elements (a WhatsApp/contact launcher, sticky-bottom nav row when one appears). |

### Decorative Depth
- **Gold divider as depth**: a thin `{colors.accent-gold}` rule under the hero headline (or under a section eyebrow) is the page's only true decorative accent. No illustration system beyond this — restraint is the brand's atmosphere.
- **Credential-band as section-depth break**: the dark navy credentials/trust-badge band ("Diangkat Menkumham RI", "12+ Tahun Pengalaman") inside the otherwise-white page acts as a one-step lift, mirroring the hero's polarity flip.
- **Wordmark banner as terminal depth**: the large `Pranata & Partners` letters at the bottom are technically inside `{colors.canvas}` but tinted toward `{colors.hairline}` so they read as a faint stencil, giving the page a final, quiet sign-off.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Hero / credentials full-bleed bands; the footer wordmark banner. |
| `{rounded.xs}` | 2px | The pricing page's slightly tighter sub-tab and outline button. |
| `{rounded.sm}` | 3px | The brand's canonical radius — buttons, badges, cards, data-table rows, stat tiles. Kept tighter than a typical SaaS 4px to read structured/formal rather than soft. |
| `{rounded.md}` | 6px | Feature-tab pills inside the services section, larger pricing-tab containers. |
| `{rounded.full}` | 9999px | Reserved for a floating WhatsApp/contact launcher, if used — the only fully-pill shape in the system. |

### Photography Geometry
- **Hero visual**: a legal-signing / document photograph or a subtle gold-line motif, free-form; no aspect-ratio constraint. (Replaces the source brand's abstract gradient ribbon — this brand's imagery should be photographic/document-real, not abstract-tech.)
- **Credential/customer logos**: vector, rendered grayscale at consistent height (~24 px) in a wrapping flex row (Menkumham, INI, PPAT registry marks).
- **Testimonial portraits**: 1:1 square crop with hard-edge corners — no avatar pill.
- **Article thumbnails**: 16:9 with `{rounded.sm}` 3 px top-corner radius on the image only; card chrome stays square.

## Components

### Buttons

**`button-primary`** — the navy pill that carries every primary CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, label set in `{typography.mono-caps-button}` (uppercase mono, 16 px / 500 / 0.08 px tracking), shape `{rounded.sm}` 3 px, padding `{spacing.xs} {spacing.2xl}`. No shadow.

**`button-secondary-gold`** — the hero secondary CTA pill ("Lihat Layanan").
- Background `{colors.accent-gold-soft}`, text `{colors.ink}`, same typography and shape as `button-primary`. Only appears in hero contexts.

**`button-secondary-white`** — the white pill paired with `button-secondary-gold` inside the hero.
- Background `{colors.canvas}`, text `{colors.ink}`, same typography and shape. Always sits adjacent to the gold or primary button.

**`button-ghost-on-dark`** — the translucent button used on dark hero / research surfaces.
- Background `{colors.surface-dark-soft}`, text `{colors.on-dark}`, shape `{rounded.sm}` 3 px. Used for "Read more" / "Watch the announcement" affordances on dark bands.

**`button-outline`** — the white-on-white outline button used inside pricing pages and feature toggles.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, shape `{rounded.xs}` 2 px.

**`button-icon-circular`** — the floating chat-launcher orb in the bottom-right of every page.
- Background `{colors.primary}`, white icon, shape `{rounded.full}`. The only fully-pill shape in the system.

### Cards & Containers

**`research-card`** — the 4-up grid card on the dark credentials/trust-badge band ("Diangkat Menkumham RI", "Anggota INI", "12+ Tahun Pengalaman", "5.000+ Akta Terbit").
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, 1 px solid `{colors.surface-dark-soft}` border, padding `{spacing.2xl}`, shape `{rounded.sm}` 3 px. Inside: mono eyebrow tag + display headline + body paragraph.

**`testimonial-card`** — the 3-up "Apa Kata Klien Kami" card.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.2xl}`, shape `{rounded.sm}` 3 px. Inside: 1:1 portrait crop + display-md name + body quote + mono caption stat row.

**`article-card`** — reusable 2-up card, e.g. for a "Kapan Anda Butuh Notaris" use-case grid.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.2xl}`, shape `{rounded.sm}` 3 px. Inside: 16:9 image or icon at top + mono eyebrow tag + display-md title + body summary.

**`document-preview-mockup`** — a dark document-preview surface inside a white band (e.g. showing a sample akta excerpt in the Process or Documents Required section). Repurposes the source brand's code-editor mockup: same "authoritative dark inset on a white page" device, now showing a document snippet instead of code.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, body in `{typography.mono-caption}`, padding `{spacing.2xl}`, shape `{rounded.sm}` 3 px. Window chrome stays minimal — no traffic-light dots, no title bar.

**`stats-card-tinted`** — the gold-tinted stat tile ("12+ Tahun Pengalaman", "5.000+ Akta Terbit") on the white middle band.
- Background `{colors.accent-gold-soft}`, text `{colors.ink}`, big number in `{typography.display-xl}` + label in `{typography.mono-caps-eyebrow}`, padding `{spacing.3xl}`, shape `{rounded.sm}` 3 px.

### Inputs & Forms

**`text-input`** — the form input on the "Buat Janji Konsultasi" contact form.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, body set in `{typography.body-md}`, shape `{rounded.sm}` 3 px.

### Navigation

**`nav-bar`** — the sticky top nav.
- Background `{colors.canvas-dark}` on the hero band, switches to `{colors.canvas}` once the user scrolls past the hero. Text `{colors.on-dark}` on dark, `{colors.ink}` on white. Layout: logo left, link row centre ("Tentang • Layanan • Biaya • Tata Cara • Kontak"), "Buat Janji" CTA right.

**`nav-link`** — the centred link row inside `nav-bar`.
- Text `{colors.on-dark}` (or `{colors.ink}` after scroll), set in `{typography.body-md}` 400 weight. Links separate with `{spacing.2xl}` 24 px between siblings.

**`footer`** — the bottom 4-column nav.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.section} {spacing.3xl}`. Eyebrow labels in `{typography.mono-caps-eyebrow}`; link rows in `{typography.body-md}`.

### Signature Components

**`hero-band-dark`** — the dark navy hero that opens the page.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, padding `{spacing.section} {spacing.3xl}`. Headline in `{typography.display-xxl}` (sentence case, never all-caps). Eyebrow in `{typography.mono-caps-eyebrow}`. Two-column layout: headline + CTA cluster on left, a legal-signing photograph or thin gold accent line on right — never an abstract gradient.

**`credentials-band-dark`** — the dark navy band that hosts the trust-badge / credential 4-up card grid ("Diangkat Menkumham RI", "Anggota INI", "12+ Tahun Pengalaman", "5.000+ Akta Terbit").
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, padding `{spacing.section} {spacing.3xl}`. Section headline in `{typography.display-xl}` followed by the `research-card` grid.

**`feature-tab-pill`** — the tab pill row inside the Services section (e.g. grouping the 8 service categories).
- Background `{colors.canvas}`, text `{colors.ink}`, label in `{typography.body-md-strong}`, padding `{spacing.md} {spacing.2xl}`, shape `{rounded.md}` 6 px. Tab group sits on `{colors.hairline}` rail.

**`pricing-sub-tab`** — the secondary tab row inside Documents Required (AJB Properti / Pendirian PT / Perjanjian Pranikah / Akta Waris).
- Background `{colors.canvas}`, text `{colors.ink}`, label in `{typography.body-md}`, padding `{spacing.sm} {spacing.lg}`, shape `{rounded.xs}` 2 px.

**`data-table-row`** — the row inside the Referensi Biaya pricing table.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` bottom border, padding `{spacing.md} {spacing.lg}`. Inside: layanan name (display sans) + biaya notaris cell + catatan cell.

**`data-table-header`** — the table header row.
- Background `{colors.hairline}`, text `{colors.body}`, set in `{typography.mono-caps-eyebrow}` (uppercase mono), padding `{spacing.md} {spacing.lg}`.

**`toggle-pill-group`** — a segmented control, e.g. switching FAQ categories or pricing views if needed.
- Background `{colors.hairline}` rail, individual pills `{colors.canvas}` (inactive) or `{colors.primary}` (active), label in `{typography.mono-caps-button}`, shape `{rounded.sm}` 3 px, rail padding `{spacing.xs}`.

**`badge-neutral`** — the inline tag pill on light surfaces.
- Background `{colors.hairline}`, text `{colors.ink}`, body in `{typography.body-md}`, 1 px solid `{colors.hairline}` border, padding `{spacing.xxs} {spacing.sm}`, shape `{rounded.sm}` 3 px.

**`badge-subtle-on-dark`** — the inline tag pill on dark hero / credentials surfaces.
- Background `{colors.surface-dark-soft}`, text `{colors.on-dark}`, body in `{typography.body-md}`, padding `{spacing.xxs} {spacing.sm}`, shape `{rounded.sm}` 3 px.

**`footer-wordmark-banner`** — the large `Pranata & Partners` wordmark at the bottom of the page.
- Background `{colors.canvas}`, wordmark colour `{colors.hairline}` (faint stencil tint), set in `{typography.display-xxl}` (serif) scaled fluidly to the viewport width. Edge-to-edge, square corners. Acts as the final page sign-off.

### Examples (illustrative)

> Auto-derived kit-mirror demonstration surfaces (`scripts/derive-examples-block.mjs`). Each `ex-*` entry references brand-native primitives so downstream consumers (`/preview-design`, `/generate-kit`) re-skin the same 10 surfaces consistently. `TO_FILL` markers indicate missing primitives — resolve in the LLM judgment pass.

**`ex-pricing-tier`** — Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface.
- Properties: `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`** — Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode).
- Properties: `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`** — What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery).
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`** — Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart).
- Properties: `backgroundColor`, `rounded`, `padding`, `item-divider`

**`ex-app-shell-row`** — Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator.
- Properties: `backgroundColor`, `activeIndicator`, `rounded`, `padding`

**`ex-data-table-cell`** — Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm.
- Properties: `headerBackground`, `headerTypography`, `bodyTypography`, `cellPadding`, `rowBorder`

**`ex-auth-form-card`** — Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-modal-card`** — Modal dialog surface — same chrome as feature-card with elevated shadow.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-empty-state-card`** — Empty-state illustration frame.
- Properties: `backgroundColor`, `rounded`, `padding`, `captionTypography`

**`ex-toast`** — Toast notification surface — feature-card shape + medium shadow.
- Properties: `backgroundColor`, `rounded`, `padding`, `typography`


## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (`#0A1A33`, navy) for every primary CTA. One navy pill per visible viewport — that consistency is the brand's whole conversion story.
- Set every section eyebrow and button label in `{typography.mono-caps-button}` / `{typography.mono-caps-eyebrow}` — uppercase mono, positive tracking. It's the "stamped/official" voice of the brand.
- Use every headline in the formal serif (`{typography.display-*}`) and every paragraph in the sans (`Inter`/`{typography.body-*}`) — never swap the two roles.
- Use `{colors.accent-gold}` sparingly and deliberately — a divider line, a credential icon, a stat number — never as a section-wide wash. Restraint is what makes it read as confident rather than decorative.
- Cycle page surfaces in the `{colors.canvas-dark}` → `{colors.canvas}` → `{colors.canvas-dark}` rhythm; the dark-light contrast carries elevation more than any shadow.
- Use `{rounded.sm}` 3 px as the canonical card / button radius across the system — deliberately tighter than a typical consumer-SaaS 4px, to read structured rather than soft.
- Render the `Pranata & Partners` wordmark banner at the bottom of the page in `{typography.display-xxl}` (serif), tinted toward `{colors.hairline}` so it reads as a stencil — not as a heavy footer title.

### Don't
- Don't introduce a second accent colour. One gold/bronze accent is the entire decorative palette; adding more (especially anything bright/saturated) undercuts the "confident, not flashy" positioning.
- Don't use cream or off-white as the base canvas. Canvas stays pure white (`#ffffff`) — warmth comes from the serif type and the gold accent, not from tinting the background, because a soft/cream base reads as less assertive for a legal-trust brand.
- Don't set body paragraphs in the mono face. The mono is for labels only; long-form mono reads as a console log, not as marketing copy.
- Don't centre-align body paragraphs under a left-aligned display headline. The brand keeps text-block alignment consistent within a copy stack.
- Don't drop a soft drop-shadow on light-surface cards. The brand uses hairlines and surface contrast for elevation, not shadow.
- Don't make the whole page dark-mode. Dark is reserved for specific bands (hero, credentials, footer accent) — the content-heavy sections (pricing, checklists, FAQ) stay on light canvas for legibility across the brand's full 25–60 age range.
- Don't switch the primary button shape to a full pill `{rounded.full}`. The brand's CTA shape is a slightly-rounded rectangle, never a full pill.
- Don't set headlines in the all-caps mono. Every all-caps moment belongs to the mono face; every headline belongs to the serif display in sentence case.
- Don't add bounce/spring/playful motion. Per the brand's own animation spec, transitions stay subtle — fades and slow eases, no overshoot.
