
# ScaleGiga Luxury Rebrand - Complete Implementation Plan

## Overview
Transform ScaleGiga from a digital agency aesthetic (neon green/black) into a luxury growth partner brand targeting $1M+ brands. This involves a complete color scheme shift (green to gold), new typography, rewritten copy, new page sections, and conversion-optimized UX patterns.

## Scope Summary
- Color system: Neon green to gold (#D4AF37) luxury palette
- Typography: Switch to DM Serif Display (heading, Canela substitute) + Inter (body, Suisse Int'l substitute) via Google Fonts
- Copy: Complete rewrite across all pages to target luxury/enterprise brands
- Layout: New sections (social proof marquee, testimonial, ROI calculator, exit-intent modal, scroll-triggered trust bar)
- All 6 pages + Header + Footer redesigned
- Navigation: Rename "Our Story" to "Process", "Our Work" to "Results", "Blog" to "Insights"

---

## Phase 1: Design System Foundation

### 1.1 Color Variables (src/index.css)
Replace all neon green HSL values with gold luxury palette:
- Primary: `43 80% 49%` (gold #D4AF37)
- Primary glow: `43 90% 60%` (light gold)
- Primary deep: `38 70% 35%` (deep gold)
- Background stays dark: `0 0% 4%` (obsidian black)
- Foreground: `0 0% 97%` (#F8F8FF ghost white)
- Border: `0 0% 10%` (#1a1a1b)
- Muted foreground: `0 0% 66%` (#A8A8A8)
- Update all gradient variables to use gold tones
- Update all shadow/glow variables from green to gold

### 1.2 Typography (src/index.css + tailwind.config.ts)
- Import DM Serif Display from Google Fonts (replaces Canela Text for serif headings)
- Keep Inter for body text (serves as Suisse Int'l substitute)
- Remove Space Grotesk and Outfit imports
- Update font-display to DM Serif Display
- Add letter-spacing utilities for luxury feel

### 1.3 Tailwind Config (tailwind.config.ts)
- Update neon color palette to gold palette
- Update font-family references
- Adjust shadow/glow keyframes to use gold hues

---

## Phase 2: Global Components

### 2.1 Header (src/components/Header.tsx)
- Rename nav links: "Services", "Process", "Results", "Insights", "Contact"
- Update routes accordingly
- CTA button: "Strategy Call" with gold gradient, border-radius: 2px (sharp/luxury)
- Logo text: Use DM Serif Display with 1.5px letter-spacing
- Header height: 80px, rgba(10,10,11,0.95) background
- Hide CTA on mobile (it appears in hero)

### 2.2 Footer (src/components/Footer.tsx)
- Update to dark background (matching brand)
- Gold accent colors throughout
- Update service names and links to match new nav structure

---

## Phase 3: Homepage (src/pages/Index.tsx)

### 3.1 Hero Section
- New copy: "Build Digital Empires, Not Websites."
- Subhead: "We engineer growth infrastructure for luxury brands doing $2M-$50M..."
- Primary CTA: "Book Your Private Strategy Session" (280x60px, gold bg)
- Secondary CTA: "View Our Results" (text link, anchors to case studies)
- Badge: Remove "Digital Growth Agency", no badge or subtle "Exclusive Growth Partner"

### 3.2 Services Grid (replaces current 6-card grid)
- Reduce to 3 core services with luxury card styling
- Cards: dark bg (#111112), 1px border #1a1a1b, gold border on hover
- Each card has: icon, headline, description (140 chars max), micro-stat in gold
- Services: "Growth Infrastructure" (340% ROI), "AI Automation" ($2.1M Saved/yr), "Partnership Ecosystems" (5x Market Reach)

### 3.3 Process Section ("The Infinite Growth Process")
- Horizontal timeline with 4 nodes on desktop
- Numbered circles with gold stroke outline
- Phases: AUDIT & BLUEPRINT, BUILD & INTEGRATE, LAUNCH & VALIDATE, SCALE & COMPOUND
- New luxury copy for each phase

### 3.4 Social Proof Section (NEW)
- Marquee scroll of 12 client logos (placeholder grayscale blocks, gold on hover)
- Label: "Trusted by category leaders in luxury, fintech, and enterprise SaaS"
- Static testimonial card below with gold left border
- Quote from "CEO, Renova Luxury Skincare" with revenue metric

### 3.5 Pre-Footer CTA
- New copy: "Your competition uses agencies. You need a growth board."
- Scarcity element: "Book a Strategy Call (3 spots left this month)"
- "Spots remaining: 7" counter in corner

### 3.6 Remove "Why ScaleGiga" and "Featured Work Preview" sections

---

## Phase 4: Services Page (src/pages/Services.tsx)

### 4.1 Hero
- New copy: "Your Website Is Either a Revenue Engine or a Business Card."
- Subhead about custom infrastructure for brands

### 4.2 ROI Calculator (NEW interactive module)
- Three inputs: Current Monthly Revenue, Conversion Rate (slider), Average Order Value
- Real-time output: "Potential Annual Gain: $X.X M" in large gold text
- Micro-copy: "Based on our 340% average ROI across 47 luxury brands"

### 4.3 Tech Stack Bar (NEW)
- 6 tech icons with labels: React, Next.js, AWS, Vercel, Stripe, Shopify Plus
- Label: "Infrastructure trusted by $100M+ brands"

### 4.4 Case Study Teaser
- Split layout: image left, content right
- Category tag, headline, 3 bullet points with metrics
- CTA: "Read Full Case Study"

### 4.5 Keep existing service detail sections but update copy tone to luxury

---

## Phase 5: Other Pages

### 5.1 Process Page (rename from Story, src/pages/Story.tsx, update route)
- Reframe as the methodology/process page
- Keep values and team sections, update copy tone

### 5.2 Results Page (rename from Work, src/pages/Work.tsx, update route)
- Update copy to luxury tone
- Larger metric callouts in gold

### 5.3 Insights Page (rename from Blog, src/pages/Blog.tsx, update route)
- Update styling to match gold theme
- Keep newsletter section

### 5.4 Contact Page (src/pages/Contact.tsx)
- Reduce form to 4 fields: Name, Company, Revenue Range, Challenge
- Update CTA copy to "Book a Strategy Call"

---

## Phase 6: Conversion Features

### 6.1 Exit-Intent Modal (NEW component)
- Triggers when mouse leaves top 25% of viewport
- 600x400px, dark bg, gold border
- Copy: "Wait. Before you go: Download our $2M to $8M case study breakdown."
- Email capture field

### 6.2 Scroll-Triggered Trust Bar (NEW component)
- Fixed bottom bar, activates at 35% scroll
- "Trusted by luxury brands. 340% avg. ROI. Booked 47 calls this month."

### 6.3 Update SVG Illustrations
- Change all green (hsl 142) color references to gold (hsl 43) throughout Illustrations.tsx

---

## Phase 7: Routing Updates (src/App.tsx)

- `/story` becomes `/process`
- `/work` becomes `/results`
- `/blog` becomes `/insights`
- Add redirects from old routes for any external links

---

## Files Modified
1. `src/index.css` - Color variables, typography, component classes
2. `tailwind.config.ts` - Color palette, fonts, shadows, animations
3. `src/components/Header.tsx` - Nav links, CTA, styling
4. `src/components/Footer.tsx` - Links, colors, copy
5. `src/pages/Index.tsx` - Complete hero/services/process/social proof/CTA rewrite
6. `src/pages/Services.tsx` - Hero, ROI calculator, tech bar, case study
7. `src/pages/Story.tsx` - Rebrand to Process page
8. `src/pages/Work.tsx` - Rebrand to Results page
9. `src/pages/Blog.tsx` - Rebrand to Insights page
10. `src/pages/Contact.tsx` - Simplified form, luxury copy
11. `src/components/Illustrations.tsx` - Green to gold color swap
12. `src/App.tsx` - Route updates

## New Files
13. `src/components/ExitIntentModal.tsx` - Exit-intent popup
14. `src/components/TrustBar.tsx` - Scroll-triggered trust bar
15. `src/components/LogoMarquee.tsx` - Client logo marquee
16. `src/components/ROICalculator.tsx` - Interactive ROI calculator

---

## Technical Notes
- DM Serif Display is a free Google Font that closely mimics Canela Text's luxury serif aesthetic
- All existing animation infrastructure (ScrollReveal, AnimatedCard, framer-motion) will be preserved
- Gold color values: primary `#D4AF37`, deep `#B8860B`, glow `#E8C547`
- No new npm dependencies required
- SVG illustrations retain human characters per brand guidelines but shift accent colors to gold
