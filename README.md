# FocusOn Interiors — Official Website

**Spaces Styled, Stories Told.**

Production-ready redesign of [focusoninteriors.com](https://focusoninteriors.com/) for
**FocusOn Interior Decorators Pvt. Ltd.** — end-to-end interior design and turnkey
execution for commercial and corporate spaces across India.

All content (copy, statistics, team profiles, project photos, client logos, media
coverage, blog posts, and contact details) is migrated 1:1 from the live site.

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero slider, stats counters, services, featured projects, industries, process, clientele, testimonials, media & blog previews, CTA |
| `/about` | Company story, stats, why choose us, portfolio, clientele, testimonials |
| `/team` | Super Senior Leaders + Senior Management Team with slider |
| `/projects` | Portfolio filterable by sector and city |
| `/projects/[slug]` | Project case studies (8 projects) |
| `/services` | Design-build, fit-outs, renovation, PM, construction + 5-step process |
| `/media` | 29 press features and news coverage |
| `/blog` | 10 blog articles linking to the live posts |
| `/career` | Careers, resume submission |
| `/contact` | Contact cards, form (API route), WhatsApp click-to-chat, Google Map |

## Tech Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS 4** with FocusOn brand theme (signature orange-red `oklch(0.62 0.19 35)` on warm off-white / deep charcoal)
- **Framer Motion** — scroll reveals, parallax hero, animated counters, staggered cards, marquee
- **Lenis** smooth scrolling
- SSG for all content pages; dynamic API route for the contact form
- SEO: metadata + Open Graph, JSON-LD `LocalBusiness` schema, `sitemap.xml`, `robots.txt`

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Contact

- **Email:** info@focusoninterior.in
- **Phone:** +91 011 4928 7589 · +91 99 1025 8820
- **Address:** UN-150, Near Shiv Mandir, Sikanderpur, Gurugram, 122002

© 2026 FocusOn Interiors: Spaces Styled, Stories Told
