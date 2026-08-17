# Kantor Notaris Pranata & Partners — Landing Page

Landing page untuk kantor notaris (Astro 5 + Tailwind v4 + TypeScript + React islands). Lihat `139-jasa-notaris-PRD.md` untuk spec lengkap tiap section dan `DESIGN.md` untuk design system (token warna, tipografi, komponen).

## Development

**Known issue:** the project folder name contains `&` ("Kantor Notaris Pranata & Partners"), which breaks `npm run <script>` and `npx <pkg>` on Windows — npm's `.cmd` batch wrapper mangles the path before it ever reads `package.json`. Until the folder is renamed (see repo owner), invoke Astro directly through `node` instead:

```
node ./node_modules/astro/bin/astro.mjs dev
node ./node_modules/astro/bin/astro.mjs build
node ./node_modules/astro/bin/astro.mjs preview
```

If the folder is later renamed to something without `&`, the normal commands below work as documented:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Agent skills

### Issue tracker

Issues dan spec untuk repo ini hidup sebagai GitHub Issues, pakai `gh` CLI. See `docs/agents/issue-tracker.md`.

### Domain docs

Single-context — satu `CONTEXT.md` + `docs/adr/` di root repo (dibuat lazily saat dibutuhkan). See `docs/agents/domain.md`.
