---
target: homepage (src/pages/index.astro)
total_score: 22.5
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-08-17T07-37-25Z
slug: src-pages-index-astro
---
Method: dual-agent (A: general-purpose design-review agent · B: general-purpose detector-evidence agent)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Pricing table renders no column headers; meaning must be inferred |
| 2 | Match System / Real World | 3 | "PPAT" never expanded to full term anywhere on the page |
| 3 | User Control and Freedom | 3 | No destructive actions to undo; ceiling naturally lower |
| 4 | Consistency and Standards | 2 | DESIGN.md's "one navy CTA" rule violated at the two highest-stakes conversion points |
| 5 | Error Prevention | 2.5 | No `min` date on the appointment date picker; no format guidance |
| 6 | Recognition Rather Than Recall | 3 | Headerless pricing table forces recall instead of recognition |
| 7 | Flexibility and Efficiency | n/a | Persuade-mode single-path marketing page; no power-user surface to score |
| 8 | Aesthetic and Minimalist Design | 3 | CTA-color drift and CredentialsBand/AboutNotaris repetition add noise |
| 9 | Error Recovery | 3 | Form failure path offers a WhatsApp fallback - good; no inline field validation |
| 10 | Help and Documentation | n/a | FAQ substitutes for help on a marketing surface; scored elsewhere |
| **Total** | | **22.5/32** | **Good** |

## Design Specificity Verdict

**LLM assessment (Assessment A):** Genuinely authored for an Indonesian notary/PPAT practice, not a reskinned template - correct legal taxonomy (AJB, APHB, PJB, waarmerking, roya, BPHTB/PNBP), a fee table denominated the way real Indonesian notary billing actually works, WhatsApp as the quick-contact channel (the cultural default here, not a generic chat widget), and UUJN/UU citations that are accurate rather than decorative. Where it falls short is execution, not content: the CTA color system and the missing eyebrow labels mean the visual system doesn't fully deliver the "stamped/official" specificity DESIGN.md's own prose promises.

**Deterministic scan (Assessment B):** `detect.mjs --json src public` returned `[]` - zero mechanical findings, confirmed on two separate runs this session. Supplementary grep evidence corroborates and sharpens Assessment A's read: confirmed the one hard-coded hex (`CredentialsBand.tsx:30`, `color="#B08D3E"` where `text-accent-gold` was available), confirmed 6/6 `outline-none` instances already pair with a focus-visible alternative (fixed earlier this session), confirmed 0 `<img>` tags missing `alt`, and confirmed only 3 border-radius values are in use (`rounded-sm`, `rounded-full`, `rounded-xs`) - matching DESIGN.md's claimed closed set. No false positives to flag; the two assessments agree everywhere they overlap.

**Independent convergence:** the P1 CTA-color finding below was also caught independently during this session's `extract` pass (before Assessment A's report existed) - two separate, blind passes landed on the same defect, which is a strong signal it's real and not a stylistic quibble.

## Overall Impression

This is a well-executed, product-specific implementation sitting on top of a well-considered design system - the gap isn't concept, it's that the shipped code under-delivers on a few things DESIGN.md itself promises (one navy CTA, mono-caps eyebrows, a headerless-but-structured pricing table). Nothing here is a P0. The single biggest opportunity is closing the CTA-color and pricing-table gaps, both of which sit at the two moments that matter most: the ask (CTA) and the differentiator (pricing).

## What's Working

- **The pricing table's clustering.** Grouping 10 line items into 4 labeled clusters instead of one long list or a decorated card wall is genuinely disciplined for a notary fee table, real or fictional.
- **The 4-step process timeline.** A scroll-linked progress line that respects `useReducedMotion` and concretely answers "what happens after I say yes" - well-scoped anxiety reduction for a high-stakes, low-frequency purchase.
- **The contact form's failure path.** Offering a WhatsApp fallback instead of a dead-end error message is a small but real piece of craft that protects a lead instead of losing it.

## Priority Issues

**[P1] CTA color system contradicts DESIGN.md's own "one navy CTA" rule**
- **Why it matters:** DESIGN.md states navy carries "every conversion target... that consistency is the brand's whole conversion story." The Hero's primary CTA ("Konsultasi Gratis") and the contact form's submit button ("Buat Janji Temu") - the two highest-stakes moments on the page - are both gold instead. The accent color the system repeatedly cautions against overusing is now doing the primary-CTA's job.
- **Fix:** `bg-primary text-on-primary` on both; reserve gold for the hero secondary CTA per the documented `button-secondary-gold` spec.
- **Suggested command:** `$impeccable harden` or `$impeccable polish`

**[P1] Testimonial carousel auto-rotate has no keyboard-accessible pause**
- **Why it matters:** `Testimonial.tsx` only pauses on `onMouseEnter`/`onMouseLeave`; a keyboard or screen-reader user tabbing into the dot controls can't stop the 8-second auto-advance. Content changes under them with no equivalent to hover.
- **Fix:** add `onFocus`/`onBlur` on the container so keyboard focus pauses rotation the same way hover does.
- **Suggested command:** `$impeccable harden`

**[P2] Pricing table has no column headers and doesn't collapse on mobile as documented**
- **Why it matters:** No header row identifies "Layanan / Biaya / Catatan" (DESIGN.md documents a `data-table-header` component for exactly this), and the 3-column grid never stacks below `sm`, despite DESIGN.md's own Responsive Strategy stating it should. It's built from `<div>` grids, not a `<table>`, so a screen-reader user also gets no row/column semantics on the site's stated #1 differentiator.
- **Fix:** add a header row, a `sm:` breakpoint that stacks each row, and consider real `<table>` semantics for screen-reader navigation.
- **Suggested command:** `$impeccable adapt`

**[P2] Credential claims repeat verbatim across two consecutive sections**
- **Why it matters:** `CredentialsBand` and `AboutNotaris`'s certification list restate 3 of 4 claims one scroll apart with no new information - reads as padding rather than escalating trust, working against the "trust before persuasion" principle.
- **Fix:** differentiate what each section proves (CredentialsBand = headline numbers; AboutNotaris = the specific credential documents/dates) instead of repeating the same three lines.
- **Suggested command:** `$impeccable clarify`

**[P3] Services grid and the contact form's service selector both present 8 simultaneous choices with no "not sure" path**
- **Why it matters:** `Services.tsx` shows 8 categories at once (cognitive-load checklist fails "minimal choices ≤4"); the contact form's `<select>` mirrors the same 8-option decision at the point of highest commitment, with no escape hatch for a confused first-timer - exactly the audience this page needs to reassure.
- **Fix:** consider a lightweight Personal/Bisnis filter above the 8 cards, and add a "Belum yakin / butuh saran" option to the select.
- **Suggested command:** `$impeccable layout`

## Persona Red Flags

**First-timer / confused visitor:** May never register the notary/PPAT distinction since "PPAT" is never expanded on the page. If they click "Konsultasi Gratis" straight to the form, they hit an 8-option service selector with zero guidance and no "not sure" option - a real stall point for exactly the audience this page exists to reassure.

**Mobile user:** The pricing table's fixed 3-column grid (contradicting DESIGN.md's documented mobile stack) is the sharpest flag - it's the section carrying the site's stated competitive differentiator. The DocumentsRequired tab row uses `flex-wrap`, which will likely wrap "Perjanjian Pranikah" onto a second line on narrow viewports.

**Accessibility-dependent user:** Beyond the carousel pause issue, `DocumentsRequired`'s tabs use `role="tab"`/`aria-selected` but never wire `aria-controls`/`role="tabpanel"` to the panel (confirmed independently in this session's `audit` pass). The pricing table's `<div>`-grid structure gives a screen-reader user an unstructured stream of text with no table semantics on the page's headline trust feature.

## Minor Observations

- `WhenNeedNotary.tsx` tints all 6 cards with `bg-accent-gold-soft/40` across the full section width - arguably the "section-wide gold wash" DESIGN.md's own Don'ts warn against, since `stats-card-tinted` was specified for 3 stat tiles, not a 6-card grid. Debatable; flagging for a decision, not a definite defect.
- DESIGN.md documents mono-caps eyebrows as a "Key Characteristic," but zero sections currently use one. Two valid readings: this session's anti-slop pass treated 0 eyebrows as compliant (avoids the "eyebrow on every section" AI tell); Assessment A reads the same fact as under-delivering on DESIGN.md's own signature. Worth a decision, not a default.
- Assessment A flagged the Hero headline using a period where PRD/DESIGN.md's tagline draft used an em dash - this is intentional and correct as shipped (em dashes are banned by this session's anti-slop pass), not a gap to close.
- Testimonial dot buttons render at roughly 44x26px effective hit area after this session's padding fix - clears the 24x24px WCAG AA minimum but falls short of the 44x44px target DESIGN.md states elsewhere.
- Contact form's date input has no `min` attribute, so a visitor could select a past date for "Tanggal preferensi."
- Icon delivery is split between `astro-icon` (`.astro` files) and `@phosphor-icons/react` (React islands) - both render the same Phosphor family, just via the runtime each file type requires; not a real "mixed icon family" violation, just worth knowing if a global icon-set change is ever needed.

## Questions to Consider

- The pricing table is the stated #1 differentiator, but visually it's styled identically to five other plain-white sections - should it carry more visual weight instead of blending into the generic content rhythm?
- What would a lightweight Personal/Bisnis filter above the Services grid do to both cognitive load and the contact form's service-selection stall point, since they're the same underlying decision asked twice?
- Is the CTA-color drift (gold instead of navy) actually a bug, or did the color get chosen for a reason DESIGN.md's prose doesn't capture - worth confirming before "fixing" it back to spec?
