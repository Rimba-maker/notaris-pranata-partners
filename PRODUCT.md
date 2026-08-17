# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 5 (SSG) + Tailwind CSS v4 + TypeScript (strict) + React islands for interactive sections (Motion for animation). Deployed static to Netlify, including Netlify Forms for the consultation request. Pre-existing codebase; not a greenfield choice.

## Users

Indonesian individuals and small businesses in Jakarta Selatan who need an authenticated legal document (akta) from a notaris/PPAT: couples before/after marriage (perjanjian pranikah), property buyers/sellers (AJB), families handling inheritance or gifts (waris, hibah), and founders/entrepreneurs incorporating or amending a PT/CV. Age 25-60, SES B+ to A. They are evaluating whether to book a consultation, not self-serving a transaction online; the site's job is to build enough trust and clarity that they pick up the phone or fill the form.

## Product Purpose

A marketing/lead-generation landing page for a notary practice. It exists to convert a visitor with a specific legal need (a wedding, a property purchase, incorporating a company, a will) into a booked consultation, by making the practice's credentials, services, process, and indicative pricing legible before first contact.

## Positioning

Two claims a generic competitor's brochure site typically doesn't make explicit: **published indicative pricing** (most Indonesian notary practices don't disclose fee ranges; this site shows a pricing reference table up front) and **process transparency** (a concrete 4-step timeline with per-service document checklists, rather than "hubungi kami untuk info lebih lanjut"). The visual system also deliberately avoids both extremes common in the category: government-cold formality and soft/cream boutique-law-firm aesthetics.

## Operating Context

Office-hours practice (Mon-Fri 09:00-17:00, Sat 09:00-13:00 by appointment), in-person document signing is the norm (Indonesian notarial acts generally require physical presence; electronic signing is the exception, not the default). Primary conversion paths: a Netlify-form consultation request, or a direct WhatsApp link for quick questions. No client portal, no online payment, no document upload; this is a pre-engagement marketing surface only.

## Capabilities and Constraints

- 8 service categories covering property/land acts, family acts, corporate acts, business agreements, debt/financial acts, legalization/waarmerking, government registration, and wills/gifts.
- The notaris also holds a PPAT (land-deed official) registration, a dual role that matters for the property-related services and is called out explicitly (visitors researching AJB need to know this).
- Static site, no backend beyond Netlify Forms; nothing here requires authentication, payments, or a database.
- Bahasa Indonesia only; no i18n requirement stated.

## Brand Commitments

- Name: "Kantor Notaris Pranata & Partners" - the "[Name] & Partners" convention is a deliberate trust signal following Indonesian legal-profession naming tradition.
- Tagline: "Aman Secara Hukum, Tenang Secara Pikiran."
- Voice: formal, professional, calm; precise legal terminology explained in plain language; avoid both dense legalese and overly casual phrasing.
- Formal serif wordmark direction (carried into DESIGN.md as the headline typeface).
- Social presence: LinkedIn only, deliberately no Instagram/TikTok - a considered part of the formal positioning, not an oversight.
- Single restrained gold/bronze accent against a deep-navy/white dual-surface system (see DESIGN.md); no dark-mode toggle, by design, for legibility across the 25-60 audience.

## Evidence on Hand

**This is a demo/portfolio project, not a real operating law practice.** Every piece of "evidence" currently in the codebase and PRD is fabricated for demonstration purposes and must not be treated as verified fact by future work:

- Notary name and credentials (Andi Pranata, S.H., M.Kn.; SK No. AHU-XXX/2012; team members Tika Hartono and Reza Wijaya) - invented.
- Office address (Jl. Kemang Selatan VIII No. 88), phone number, and WhatsApp number - placeholders.
- Client testimonials (Pak Hendra & Ibu Rinda, Andini, Lisa & Daniel, Keluarga Hartono) - fabricated, not real client quotes.
- Team and client portrait photography - real stock photography (Unsplash), chosen to visually match the described people but not actual photos of them.
- Pricing reference figures - representative of real Indonesian notary fee ranges (grounded in UU No. 30/2004 conventions) but not this specific practice's actual rate card.

Before any real deployment, all of the above must be replaced with the actual practice's verified name, license numbers, address, contact details, and real client-consented testimonials.

## Product Principles

1. **Trust before persuasion.** Every section should make the practice look credible and careful (credentials, licensing, process transparency) before it tries to close; this is a high-stakes, low-frequency purchase, not an impulse buy.
2. **One accent, used sparingly.** The gold/bronze accent is a "seal" - restraint is what makes it read as confident rather than decorative; it never washes across a whole section.
3. **Dense content needs structure, not decoration.** Pricing, document checklists, and FAQs are inherently list-heavy; group and cluster them rather than dressing them up or flattening them into raw tables.
4. **Formality without coldness.** The serif/mono/sans three-role typography and navy/white dual-surface rhythm carry the "established, trustworthy" tone; motion stays subtle (fades, slow eases, no bounce) to match.
5. **Content stays in Bahasa Indonesia, plain but precise.** Explain legal terms inline rather than assuming prior knowledge, but don't dumb down actual terminology (akta, PPAT, waarmerking) that the audience needs to recognize elsewhere.

## Accessibility & Inclusion

No regulatory accessibility mandate stated. Target is general WCAG AA (contrast, keyboard focus, touch targets, reduced-motion support) across the practice's stated 25-60 audience age range, which skews toward standard rather than assistive-technology-heavy usage, but nothing here should regress basic screen-reader or keyboard usability.
