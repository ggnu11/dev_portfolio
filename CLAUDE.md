# Portfolio Project - Claude Guide

## Overview
Single-page portfolio website for frontend developer Choi Young-Hun (최영훈).
Full spec is in `DEVELOPMENT_SPECIFICATION.md` — always reference it for design/animation details.

## Tech Stack
- **Framework**: Next.js 14 (App Router), React 18, TypeScript 5
- **Styling**: Tailwind CSS 3 (darkMode: "media"), CSS variables for colors
- **ORM**: Prisma 7.x with PostgreSQL (adapter pattern, NOT url in schema)
- **Animation**: Framer Motion
- **Package Manager**: bun (NOT npm/yarn)
- **Icons**: react-feather
- **SVG**: @svgr/webpack for inline imports

## Commands
```bash
bun dev              # Dev server (localhost:3000)
bun run build        # prisma generate + migrate + next build
bun run db:seed      # Seed database (prisma/seed.ts)
bun run prisma:migrate  # Run migrations
bun run prisma:studio   # Open Prisma Studio
```

## Database
- **Local PostgreSQL** user: `younghunchoi` (no password)
- DATABASE_URL in `.env`: `postgresql://younghunchoi@localhost:5432/dev_portfolio?schema=public`
- Prisma 7.x: URL goes in `prisma.config.ts` (CLI) and `app/lib/prisma.ts` (runtime adapter), NOT in `schema.prisma`

### Prisma 7 Client Pattern
```ts
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
export const prisma = new PrismaClient({ adapter });
```

## Project Structure
```
app/
├── layout.tsx              # Root layout (Gothic_A1 font, I18nProvider, @modal slot, #modal-root)
├── page.tsx                # SectionWatchProvider wrapping all sections
├── i18n/
│   ├── dictionaries.ts     # KR/JP translation dictionaries
│   └── context.tsx         # I18nProvider + useI18n hook
├── globals.css             # CSS variables, base styles, component classes
├── sitemap.ts / robots.ts  # SEO
├── lib/prisma.ts           # Prisma client singleton
├── utils/
│   ├── api.ts              # Data fetching (getIntros, getSkills, getExperiences, etc.)
│   ├── parsePrisma.ts      # JSON parse utility
│   └── useOnClickOutside.ts
├── types/svg.d.ts          # SVG module declaration
│
├── _sections/              # 8 sections rendered top-to-bottom
│   ├── MainSection.tsx     # Hero (client) - MotionShapes animation
│   ├── IntroSection.tsx    # Core competencies (server)
│   ├── SkillSection.tsx    # Skills with filter tabs (server)
│   ├── ExperienceSection.tsx  # WORK + PROJECT (server)
│   ├── ProjectSection.tsx  # Project cards grid (server)
│   ├── BlogSection.tsx     # Blog cards (server)
│   ├── EducationSection.tsx   # Education + certs (server)
│   └── OutroSection.tsx    # Contact info (server)
│
├── _components/
│   ├── Header.tsx          # Sticky frosted-glass nav (client)
│   ├── SectionWatcher.tsx  # Intersection observer context (client)
│   ├── SlideUpInView.tsx   # Scroll animation wrapper (client)
│   ├── Modal.tsx           # Portal modal with animations (client)
│   ├── Logo.tsx            # Three colored dots
│   ├── FeatureItem[s].tsx  # Intro section cards
│   ├── ExpCard.tsx         # Experience card with expand toggle
│   ├── BlogCard.tsx        # Blog card with bg image
│   ├── EducationCard.tsx   # Education entry
│   ├── buttons/CTAButton.tsx
│   ├── skill/SkillItem.tsx + SkillItems.tsx
│   ├── project/ProjectCard.tsx + ProjectCards.tsx + ProjectModal.tsx + types.ts
│   └── MotionShapes/       # Hero SVG animation (ㅊㅇㅎ)
│       ├── FirstShape.tsx  # Blue ㅊ
│       ├── SecondShape.tsx # Green ㅇ
│       └── ThirdShape.tsx  # Lime ㅎ
│
├── project/[id]/           # Full-page project detail
├── @modal/(.)project/[id]/ # Intercepting route modal
│
public/assets/              # 22 SVG files (shape-variant-{0-8} + invert, sparkle, etc.)
prisma/
├── schema.prisma           # 7 models, 2 enums
├── seed.ts                 # Sample data (15 skills, 7 projects, etc.)
└── migrations/
```

## i18n
- **Client-side only** — no server i18n needed (DB content is language-agnostic)
- Default locale: `kr` (Korean), toggle to `jp` (Japanese)
- `app/i18n/dictionaries.ts` — flat dictionary with `kr`/`jp` keys
- `app/i18n/context.tsx` — `I18nProvider` (in layout.tsx), `useI18n()` hook
- `LangToggle` component in Header — pill-shaped KR/JP toggle
- Server components that need translated labels use client wrapper components:
  - `SectionHeader` — eyebrow + title for each section
  - `ExperienceDividers` — Work/Project divider labels
  - `BlogGoButton` — "Go to Blog" CTA
  - `ProjectMetaGrid` — project detail metadata labels
  - `ProjectNotFound` — "not found" message

## Key Architecture Decisions
- **Server Components** by default for all data-fetching sections
- **Client Components** only for interactive/animated parts (Header, SkillItems, FeatureItems, ProjectCards, ExpCard, Modal, MotionShapes, SectionWatcher, SlideUpInView)
- **Intercepting routes** for project detail modal (keeps scroll position)
- **CSS variables as RGB triplets** (e.g., `--color-primary: 0, 122, 255`) for alpha-value usage with Tailwind
- **Dark mode**: automatic via `prefers-color-scheme: dark`, not toggleable
- Path aliases: `@/*` -> `./app/*`, `@/assets/*` -> `./public/assets/*`

## Design Tokens
- **Brand colors**: Blue `#007AFF`, Green `#00C676`, Lime `#E2FF00`
- **Font**: Gothic_A1 (Google Fonts), weights 400/600/700/800
- **Breakpoints**: sm(640), md(768), lg(1024), xl(1280)
- **Layout**: min-w-96, max-w-screen-lg, centered

## Conventions
- KR/JP bilingual UI via client-side i18n context
- Section pattern: eyebrow text (`.section-eyebrow`) -> title (`.section-title`) -> content
- All scroll-in animations use `SlideUpInView` (0.6s slide-up)
- Project card hover colors cycle by `id % 3` (blue/green/lime)
- Shape variants cycle by `id % 9`

## Completed Phases
1. Config files (Prisma schema, tailwind, next.config, globals.css, tsconfig paths)
2. All components, sections, layouts, routes
3. SEO (sitemap, robots), Prisma 7 adapter pattern, build scripts, .gitignore
4. SVG assets (22 files), smooth scroll, dark mode polish, ProjectCard fix
5. i18n (KR/JP toggle, all UI text translated via client-side context)
