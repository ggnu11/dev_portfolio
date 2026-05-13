# Portfolio Website - Development Specification

> A comprehensive development specification for building a single-page portfolio website.
> This document captures every architectural decision, style, animation, layout, and logic so that any developer can reproduce this project from scratch.

---

## Table of Contents

1. [Tech Stack & Dependencies](#1-tech-stack--dependencies)
2. [Project Architecture](#2-project-architecture)
3. [Database Schema (Prisma + PostgreSQL)](#3-database-schema-prisma--postgresql)
4. [Global Styles & Design System](#4-global-styles--design-system)
5. [Layout & Page Structure](#5-layout--page-structure)
6. [Header / Navigation Bar](#6-header--navigation-bar)
7. [Section-by-Section Breakdown](#7-section-by-section-breakdown)
8. [Animations & Motion](#8-animations--motion)
9. [Modal System (Intercepting Routes)](#9-modal-system-intercepting-routes)
10. [Reusable Components](#10-reusable-components)
11. [Utility Hooks & Helpers](#11-utility-hooks--helpers)
12. [SEO & Performance](#12-seo--performance)
13. [Deployment & Infrastructure](#13-deployment--infrastructure)
14. [SVG Assets](#14-svg-assets)

---

## 1. Tech Stack & Dependencies

### Core

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 14.0.4 | React framework (App Router) |
| React | 18.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.3.x | Utility-first styling |
| Prisma | 5.8.1 | ORM for database access |
| PostgreSQL | (Vercel Postgres) | Database |

### Key Libraries

| Library | Purpose |
|---|---|
| `framer-motion` (^10.18.0) | All animations: scroll-triggered, stagger, modal transitions, SVG path drawing |
| `classnames` (^2.5.1) | Conditional CSS class merging |
| `react-feather` (^2.0.10) | Icon set (Menu, X, Download, ExternalLink, ChevronRight, ChevronsRight, Moon, Globe) |
| `html-react-parser` (^5.1.1) | Parse HTML strings from database into React elements |
| `react-remove-scroll` (^2.5.7) | Prevent background scroll when modal is open |
| `@vercel/analytics` | Vercel web analytics |
| `@vercel/speed-insights` | Vercel speed insights |
| `@svgr/webpack` (^8.1.0) | Import SVG files as React components |

### Dev Tools

- ESLint + Prettier (with TypeScript parser)
- PostCSS + Autoprefixer

---

## 2. Project Architecture

### Directory Structure

```
app/
├── layout.tsx              # Root layout (font, metadata, modal portal)
├── page.tsx                # Home page (single-page portfolio)
├── globals.css             # Global styles, CSS variables, Tailwind layers
├── sitemap.ts              # Dynamic sitemap generation
├── robots.txt              # SEO robots file
├── favicon.ico
├── opengraph-image.png
│
├── _sections/              # Page sections (rendered top-to-bottom)
│   ├── MainSection.tsx     # Hero with animated shapes
│   ├── IntroSection.tsx    # Core competencies
│   ├── SkillSection.tsx    # Skills with category filter
│   ├── ExperienceSection.tsx  # Work experience & projects
│   ├── ProjectSection.tsx  # Project cards grid
│   ├── BlogSection.tsx     # Blog post cards
│   ├── EducationSection.tsx   # Education & certifications
│   └── OutroSection.tsx    # Closing / contact info
│
├── _components/            # Shared components
│   ├── Header.tsx          # Sticky header with nav pills
│   ├── Navigation.tsx      # Sidebar navigation (unused in current layout)
│   ├── Logo.tsx            # Three colored dots
│   ├── Modal.tsx           # Portal-based modal with animations
│   ├── SectionWatcher.tsx  # Intersection observer for active nav state
│   ├── SlideUpInView.tsx   # Scroll-triggered slide-up animation wrapper
│   ├── Switch.tsx          # Toggle switch component
│   ├── DarkModeSwitch.tsx  # Dark mode toggle (commented out)
│   ├── LangSelect.tsx      # Language selector (commented out)
│   ├── ExpCard.tsx         # Experience card with expandable details
│   ├── FeatureItem.tsx     # Single feature card (intro section)
│   ├── FeatureItems.tsx    # Staggered feature cards container
│   ├── BlogCard.tsx        # Blog post card with background image
│   ├── EducationCard.tsx   # Education/certification entry
│   ├── buttons/
│   │   └── CTAButton.tsx   # Call-to-action button (with optional link)
│   ├── skill/
│   │   ├── SkillItem.tsx   # Single skill icon with hover tooltip
│   │   ├── SkillItems.tsx  # Skill grid with animated category filter tabs
│   │   └── SkillCard.tsx   # Skill card variant (unused in current layout)
│   ├── project/
│   │   ├── ProjectCard.tsx    # Project card with color hover effect
│   │   ├── ProjectCards.tsx   # Grid with "show more" pagination
│   │   ├── ProjectModal.tsx   # Project detail content (server component)
│   │   └── types.ts           # Project type definition
│   └── MotionShapes/       # Animated SVG shapes for hero section
│       ├── FirstShape.tsx     # Blue triangle (letter "A" shape)
│       ├── SecondShape.tsx    # Green arrow/line (letter "A" with bar)
│       ├── ThirdShape.tsx     # Lime circle with dot
│       └── constants.ts       # Shared animation timing constants
│
├── project/[id]/           # Full-page project detail route
│   ├── page.tsx
│   └── HomeButton.tsx
│
├── @modal/                 # Parallel route for intercepted modal
│   ├── default.tsx            # Returns null (required by Next.js)
│   └── (.)project/[id]/      # Intercepting route
│       ├── page.tsx
│       ├── layout.tsx         # Wraps content in Modal component
│       └── loading.tsx        # Skeleton loading state
│
├── lib/
│   └── prisma.ts           # Prisma client singleton
│
├── utils/
│   ├── api.ts              # Shared data fetching functions
│   ├── parsePrisma.ts      # JSON parsing utility for Prisma JsonValue
│   └── useOnClickOutside.ts   # Custom hook for outside click detection
│
└── data/
    └── project.ts          # Static project data (legacy, now uses DB)
```

### Path Aliases (tsconfig.json)

```json
{
  "@/*": ["./app/*"],
  "@/assets/*": ["./public/assets/*"]
}
```

### Rendering Strategy

- **Server Components** (default): All section components (`IntroSection`, `SkillSection`, `ExperienceSection`, `ProjectSection`, `BlogSection`, `EducationSection`) fetch data directly from the database using Prisma.
- **Client Components** (`"use client"`): Components with interactivity, state, or animations (Header, SkillItems, FeatureItems, ProjectCards, ExpCard, Modal, SlideUpInView, SectionWatcher, MotionShapes).

---

## 3. Database Schema (Prisma + PostgreSQL)

### Models

#### `experience`
| Field | Type | Description |
|---|---|---|
| id | Int (PK, autoincrement) | |
| title | VarChar(100) | Company/project name |
| period | VarChar(30) | Date range string |
| items | String[] | Detail bullet points |
| links | Json[] | Array of `{href, label}` objects |
| is_active | Boolean? | Show active indicator (sparkle icon) |
| sub_title | VarChar(100)? | Role or position |
| index | Int | Sort order |
| skill_ids | Int[] | References to skill model |
| category | VarChar(100)? | "WORK" or "PROJECT" |

#### `project`
| Field | Type | Description |
|---|---|---|
| id | Int (PK) | |
| title | VarChar(100) | Project name (supports HTML) |
| sub_title | VarChar(150) | Short description |
| period | VarChar(30) | |
| member | VarChar(100) | Team composition |
| skills | String[] | Legacy field |
| links | Json[] | `{href, label}` |
| skill_ids | Int[] | References to skill model |
| row_number | Int? | Sort order |

#### `ProjectItem`
| Field | Type | Description |
|---|---|---|
| id | Int (PK) | |
| title | VarChar(150) | Item heading |
| content | String[] | Bullet points |
| projectId | Int? (FK -> project) | |
| blobUrl | VarChar(255)? | Screenshot/image URL |
| row_number | Int? | Sort order |
| image_ratio | ratio? | PORTRAIT / LANDSCAPE / SQUARE |

#### `intro`
| Field | Type | Description |
|---|---|---|
| id | Int (PK) | |
| title | VarChar(100) | Feature title |
| detail | String | Description (supports HTML) |
| blobUrl | VarChar(255)? | Feature image URL |

#### `blog`
| Field | Type | Description |
|---|---|---|
| id | Int (PK) | |
| title | VarChar(150) | |
| date | VarChar(50) | |
| forwardLink | VarChar(255) | External blog URL |
| bgImageUrl | VarChar(255) | Background image for card |

#### `skill`
| Field | Type | Description |
|---|---|---|
| id | Int (PK) | |
| category | Category enum | FRONTEND / FRONTEND_LIBRARY / ENV / DESIGN / ETC |
| items | String[] | Legacy field |
| item | VarChar(255) | Skill name (display label) |
| blobUrl | VarChar(255) | Skill icon image URL |

#### `education`
| Field | Type | Description |
|---|---|---|
| id | Int (PK) | |
| title | VarChar(100) | |
| sub_title | VarChar(150) | |
| period | VarChar(50) | |
| items | String[] | Additional details (supports HTML) |
| category | VarChar(50)? | "EDUCATION" or "CERTIFICATION" |

### Enums

```prisma
enum Category {
  FRONTEND
  FRONTEND_LIBRARY
  ENV
  DESIGN
  ETC
}

enum ratio {
  PORTRAIT
  LANDSCAPE
  SQUARE
}
```

---

## 4. Global Styles & Design System

### Color System (CSS Custom Properties)

```css
/* Light mode (default) */
:root {
  --foreground-rgb: 34, 34, 34;        /* Near-black text */
  --background-rgb: 255, 255, 255;     /* White background */
  --color-primary: 0, 122, 255;        /* Blue */
  --color-secondary: 0, 198, 118;      /* Green */
  --color-point: 226, 255, 0;          /* Lime */
}

/* Dark mode (prefers-color-scheme: dark) */
:root {
  --foreground-rgb: 255, 255, 255;     /* White text */
  --background-rgb: 15, 24, 42;       /* Dark navy background */
  --color-primary: 0, 209, 125;       /* Green */
  --color-secondary: 203, 229, 0;     /* Lime */
  --color-point: 0, 122, 255;         /* Blue */
}
```

**Key design pattern**: Colors are stored as RGB triplets (without `rgb()` wrapper) to allow alpha-value usage with Tailwind: `rgba(var(--color-primary), <alpha-value>)`.

### Brand Colors (Fixed)

| Name | Hex | Usage |
|---|---|---|
| Blue | `#007AFF` | Logo dot, project card hover, links |
| Green | `#00C676` | Logo dot, project card hover |
| Lime | `#E2FF00` | Logo dot, project card hover |
| Black | `#222222` | Base text color |
| Dark BG | `rgb(15, 24, 42)` | Dark mode background |

### Typography

- **Font**: `Gothic_A1` (Google Fonts) - Korean-optimized font
- **Weights loaded**: 400 (normal), 600 (semibold), 700 (bold), 800 (extrabold)
- **Letter spacing**: `-0.025rem` (global)
- **Subsets**: `latin`

### Typography Scale (Base Styles)

```
h1: center, 3xl -> sm:4xl -> md:5xl, bold, tight leading
h2: center, 2xl -> sm:3xl -> md:3xl, semibold, mb-2
section: w-full, pt-16 pb-24 -> md:pt-20 md:pb-32 -> lg:pt-20 lg:pb-40
a: underline, underline-offset-2
em: not-italic, bold, text-primary (used for name emphasis)
ul: list-disc, list-inside, -indent-5 pl-5
ol: list-decimal, list-inside, -indent-5 pl-5
```

### Component-Level CSS Classes

```css
.section-eyebrow: text-primary, font-semibold, text-sm -> md:text-base, mb-1, text-center
.section-title: text-2xl, font-semibold, break-keep, mb-8 -> md:mb-12, text-center
.section-description: text-center, text-sm -> md:text-base, font-normal, text-gray-400, mb-6 -> md:mb-8
```

### Section Pattern

Every section follows this visual pattern:
1. **Eyebrow text** (`.section-eyebrow`): Small primary-colored label
2. **Section title** (`.section-title`): Large centered heading
3. **Content**: Cards, lists, or grids

### Tailwind Custom Configuration

```typescript
// Extended theme
backgroundColor: { dark: "rgb(15, 24, 42)", light: "#ffffff" }
colors: { blue, green, lime, black, primary, secondary, point, foreground, background }
zIndex: { "modal-overlay": "899", "modal-content": "900" }
```

---

## 5. Layout & Page Structure

### Root Layout (`layout.tsx`)

```
<html lang="en">
  <body className={gothicA1Font}>
    {children}           <!-- Main page content -->
    {modal}              <!-- Parallel route slot for intercepted modals -->
    <div id="modal-root" />  <!-- Portal target for modal -->
    <Analytics />
    <SpeedInsights />
  </body>
</html>
```

- Uses Next.js parallel routes: `@modal` slot for project detail modal
- Modal portal target `<div id="modal-root" />` at the end of body

### Main Page Layout (`page.tsx`)

```
<SectionWatchProvider>
  <main className="w-full min-w-96 max-w-screen-lg min-h-screen mx-auto px-5 md:px-8 lg:px-10 flex flex-col items-center relative">
    <MainSection />         <!-- Hero / no id -->
    <Header className="mb-10" />   <!-- Sticky nav, placed AFTER hero in DOM -->
    <IntroSection />        <!-- id="intro" -->
    <SkillSection />        <!-- id="skill" -->
    <ExperienceSection />   <!-- id="experience" -->
    <ProjectSection />      <!-- id="project" -->
    <BlogSection />         <!-- id="blog" -->
    <EducationSection />    <!-- id="education" -->
    <OutroSection />        <!-- no id -->
  </main>
</SectionWatchProvider>
```

**Layout constraints**:
- `min-w-96` (384px minimum width)
- `max-w-screen-lg` (1024px maximum width)
- Centered with `mx-auto`
- Responsive horizontal padding: `px-5` -> `md:px-8` -> `lg:px-10`

---

## 6. Header / Navigation Bar

### Sticky Header Bar

- **Position**: `sticky top-4 z-50` - sticks 16px from top
- **Shape**: Pill-shaped (`rounded-full`)
- **Height**: `h-10` -> `md:h-12`
- **Background**: Frosted glass effect - `bg-foreground/[0.07] backdrop-blur-lg`
- **Dark mode**: `dark:bg-light/10`

### Logo

Three colored circles in a row:
- Blue (`#007AFF`), Green (`#00C676`), Lime (`#E2FF00`)
- Size: `w-3 h-3` -> `md:w-4 md:h-4`
- Each is `rounded-full`
- Separated by `gap-2`
- Clicking logo scrolls to `#top`

### Desktop Navigation (>= 640px / `sm:`)

- Horizontal pill-shaped nav items inside the header bar
- Items: "Skills", "Experience", "Projects", "Blog" (Korean labels)
- Each item: `px-3 md:px-4 py-1.5 md:py-2 rounded-full`
- **Active state**: Background changes to `bg-background` (solid), text becomes `text-foreground`
- **Inactive state**: Text is `text-foreground/60`
- Active detection: Uses `SectionWatcher` (Intersection Observer with `margin: "-50% 0px 0px 0px"`) to detect which section is in the viewport center
- Links use anchor `href="#sectionId"` for smooth scroll

### Mobile Navigation (< 640px)

- Hamburger menu button (Menu / X icons from react-feather, `w-5 h-5`)
- Dropdown menu appears below header
- **Animation**: `clipPath` transition using `framer-motion`'s `useAnimate`
  - Open: `inset(0% 0% 0% 0% round 16px)`
  - Closed: `inset(0% 10% 100% 90% round 16px)`
  - Spring animation: `bounce: 0, duration: 0.5`
- Menu items stagger fade-in: `stagger(0.1, { startDelay: 0.15 })`
- Background: Same frosted glass as header
- Close on outside click using `useOnClickOutside` hook
- Uses `pointer-events-auto/none` to prevent interaction when hidden

---

## 7. Section-by-Section Breakdown

### 7.1 MainSection (Hero)

**Layout**: Full width, `pb-28`, flex column centered

**Animated SVG Shapes** (top area):
- Three animated SVG shapes positioned with absolute coordinates
- Scaled down: `scale-[32%] sm:scale-[40%]` with `origin-bottom`
- Each shape is 200x200 SVG viewBox
- Three-scene animation sequence (see Section 8 for details)
- After animation completes, shapes respond to hover (bounce up -30px) and tap (scale 0.9)

**Hero Text**:
```
"Hello,
 I'm a frontend developer
 [Name in primary color]."
```
- `h1` tag, centered, with `bg-light z-40 dark:bg-dark` (covers shapes)
- Name wrapped in `<em>` tag (styled as `not-italic font-bold text-primary`)

**Subtitle**: Centered, `text-base md:text-lg`, `text-gray-400`

**CTA Button**: "Download Resume" with Download icon
- Links to `process.env.NEXT_PUBLIC_RESUME_DOWNLOAD_URL`

### 7.2 IntroSection (Core Competencies)

**Data source**: `prisma.intro.findMany({ orderBy: { id: "asc" } })`

**Layout**:
- Wrapped in `SlideUpInView` (scroll-triggered animation)
- Eyebrow: "Core Competencies"
- Title: "I communicate flexibly and develop robustly."

**Feature Cards**:
- Horizontal on desktop (`md:flex-row`), vertical on mobile (`flex-col`)
- Gap: `gap-16 md:gap-8`
- Each card: image (aspect `w-full h-60`, `object-cover`, rounded-lg with shadow), title (`text-lg md:text-xl font-semibold`), detail (`text-sm text-foreground/60`)
- **Stagger animation**: Items animate in sequence when scrolled into view
  - `stagger(0.2, { startDelay: 0.1 })`
  - Each item: `{ opacity: 0, y: 100 }` -> `{ opacity: 1, y: 0 }`
  - Duration: `0.6s`, ease: `easeOut`
  - Trigger: `useInView` with `margin: "-180px"`

### 7.3 SkillSection (Technical Skills)

**Data source**: `prisma.skill.findMany({ orderBy: { category: "asc" } })`

**Layout**:
- Wrapped in `SectionWatcher` (for nav active state) + `SlideUpInView`
- Eyebrow + Title pattern

**Category Filter Tabs**:
- Pill-shaped nav bar: `bg-gray-100 p-1.5 rounded-full`
- Four categories: Frontend, Library, Environment & Deploy, Design
- Tab text: `text-sm sm:text-base font-semibold text-gray-400`
- **Active tab indicator**: Animated background pill (`bg-background rounded-full`) that slides to the active tab
  - Uses `framer-motion` `useMotionValue` for x position and width
  - Spring animation: `stiffness: 700, damping: 30`
- Clicking same tab again deselects (shows all)

**Skill Icons Grid**:
- `flex flex-wrap gap-4 max-w-96 justify-center`
- Each skill: Image icon with hover tooltip
- **Sizes**: xs (24px), sm (32px), md (48px) - used in different contexts
- **Inactive state** (filtered out): `opacity-15 blur-md`
- **Tooltip**: Appears on hover below the icon
  - `bg-foreground/75 text-background rounded text-xs md:text-sm`
  - Absolutely positioned, `invisible` -> `group-hover:visible`
- Icons use `next/image` with responsive `sizes` attribute calculated per breakpoint

### 7.4 ExperienceSection (Work & Projects)

**Data source**: `prisma.experience.findMany({ orderBy: { index: "asc" } })` with related skills

**Layout**:
- Two sub-sections divided by gradient line dividers: "Work Experience" and "Projects"
- Divider: `h-[1px]` with gradient `from-foreground/15` from both sides, centered text label

**Experience Card (ExpCard)**:
- Grid layout: `sm:grid-cols-3 sm:gap-x-10`
- **Left column**: Period text with sparkle SVG icon (primary color if `is_active`, else `foreground/30`)
- **Right column** (2-col span):
  - Title: `text-base md:text-lg font-semibold`
  - Subtitle: `text-xs md:text-sm text-foreground/60` (HTML parsed)
  - Skill icons: Horizontal flex wrap list using `SkillItem` (xs size)
  - **Expandable details**: Toggle button with `ChevronRight` icon
    - Chevron rotates 90deg when expanded (`rotate-90 transition-transform`)
    - Details shown in `bg-foreground/5 rounded-lg p-4` container
    - Bullet list of work items

### 7.5 ProjectSection (Project Showcase)

**Data source**: `prisma.project.findMany()` with skills, ordered by `row_number`

**Layout**:
- Grid: `md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8`
- **Pagination**: Shows 6 items initially, "Show More" button adds 6 more

**Project Card**:
- Size: `w-full h-fit md:h-72`
- Padding: `p-5 md:p-6`
- Border: `border border-foreground/15` (default), `hover:border-foreground/0` (on hover)
- Rounded: `rounded-md md:rounded-lg`
- **Hover color effect**: Background changes based on `id % 3`:
  - 0 -> `hover:bg-blue`
  - 1 -> `hover:bg-green`
  - 2 -> `hover:bg-lime hover:text-gray-800`
- **Shape icon**: SVG variant from `/assets/shape-variant-{id % 9}.svg`
  - Swaps to `-invert.svg` version on hover (`group-hover:hidden` / `hidden group-hover:block`)
- Title: `text-lg md:text-xl font-semibold` (HTML parsed)
- Subtitle: `text-sm opacity-60` (hidden on mobile, `hidden md:inline-block`)
- Skill icons at bottom: `SkillItem` (xs size)
- **Click**: Navigates to `/project/{id}` with `scroll={false}` (triggers intercepting route modal)

### 7.6 BlogSection

**Data source**: `prisma.blog.findMany()`

**Layout**:
- Grid: `md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`
- CTA button at bottom: "Go to Blog" with ExternalLink icon

**Blog Card**:
- Full-bleed background image using `next/image` with `fill` + `object-cover`
- Dark overlay: `bg-black/50 backdrop-blur-[2px]`
- **Hover effect**: `group-hover:backdrop-blur` (increases blur)
- Size: `w-full h-fit md:h-64 xl:h-72`
- Content (over image):
  - Title: `text-white text-lg md:text-xl font-bold`
  - Date + "View details" link with `ChevronsRight` icon
  - `text-white/60`

### 7.7 EducationSection

**Data source**: `prisma.education.findMany({ orderBy: { id: "asc" } })`

**Layout**:
- Split into "EDUCATION" and "CERTIFICATION" entries
- Separated by horizontal gradient divider: `from-foreground/0 via-foreground/15 to-foreground/0`

**Education Card**:
- Grid: `sm:grid-cols-3 sm:gap-x-10`
- Left: Period with asterisk pseudo-element (`before:content-['*']`)
- Right: Title, subtitle, bullet list of items (HTML parsed)

### 7.8 OutroSection (Contact)

- Closing message: "Thank you / If you have questions / feel free to contact me"
- Contact info card: `w-72 md:w-80`, `rounded-2xl bg-dark/5 dark:bg-light/10`
  - Grid: `grid-cols-3`
  - Fields: Phone, Email, Github
- Custom padding: `py-20 md:py-24` (different from default section padding)

---

## 8. Animations & Motion

### 8.1 SlideUpInView (Global Section Animation)

Used by every section to animate content on scroll entry.

```typescript
initial={{ opacity: 0, translateY: 100 }}
whileInView={{ opacity: 1, translateY: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
```

### 8.2 Hero SVG Shape Animation (Initial Page Load — 3-Scene Sequence)

This is the **first thing the user sees** when the page loads. Three thick-stroked SVG shapes with `strokeWidth: 72` and `strokeLinecap: "round"` animate in a choreographed sequence. Because of the round linecap and thick stroke, when `pathLength` is near zero the shapes visually appear as **colored dots/circles**. As `pathLength` increases toward 1, the dots extend into full shapes — creating a "dots appear, then draw into letterforms" effect.

The entire animation container is scaled down to `scale-[32%] sm:scale-[40%]` with `origin-bottom`.

#### Initial State (Before Animation)

All three SVGs start **off-screen below** and **horizontally scattered**, with paths invisible (`pathLength: 0`):

| Shape | Initial x | Initial y | zIndex | Path Color | Path Initial State |
|---|---|---|---|---|---|
| FirstShape (Blue Triangle) | `x: 250` | `y: 300` | 3 | `#007AFF` | `pathLength: 0` |
| SecondShape (Green Arrow) | `x: 50` | `y: 300` | 2 | `#00C676` | `pathLength: 0` (path1), `pathLength: 0.001` (path2) |
| ThirdShape (Lime Circle) | `x: -150` | `y: 300` | 1 | `#E2FF00` | `pathLength: 0`, `x: -50` (path1), `scale: 0` (path2 dot) |

Additionally, SecondShape's path1 (horizontal bar) starts with `style={{ y: 86 }}` (shifted down to overlap with path2's position).

#### Scene 1 — Shapes Fly Up (at: 0.5s)

Each SVG container animates from `y: 300` to `y: -10` — a dramatic upward entrance.
- Spring: `duration: 0.5, damping: 7, bounce: 0.25`
- **Stagger**: Each shape is delayed by `0.1s` (Shape1: 0s, Shape2: 0.1s, Shape3: 0.2s)
- Paths are still invisible at this point (pathLength ≈ 0)

#### Scene 2 — Shapes Slide to Center (at: 2s)

Each SVG container animates its x-position to `x: 0` — the three shapes converge horizontally.
- Spring: `duration: 0.5, ease: "easeInOut"`
- All three animate simultaneously
- Paths are still invisible at this point

#### Scene 3 — Path Drawing Sequence (at: 3s)

Paths draw themselves sequentially. Due to `strokeLinecap: "round"` and `strokeWidth: 72`, the start of each path draw looks like a **colored dot** that extends into a stroke.

**Shape 1 — ㅊ (Blue, chieut — dot + bar + chevron):**
- 3 paths drawn sequentially
- Step 1: dot (filled circle) scales from `0` to `1`, duration: ~0.3s
- Step 2: bar draws itself (`pathLength: 0 → 1`), duration: ~0.8s
- Step 3: chevron draws itself (`pathLength: 0 → 1`), duration: ~1s, overlap with bar by ~0.3s
- Total: adjust via `getTotalDuration()` with `durationOffset: 0.5`

**Shape 2 — ㅇ (Green, ieung — circle):**
- Starts after Shape 1 completes (delay: `scene3shape1TotalDuration`)
- Single path: circle draws itself (`pathLength: 0 → 1`), duration: ~1s
- Simplest of the three shapes
- Total: adjust via `getTotalDuration()`

**Shape 3 — ㅎ (Lime, hieut — dot + bar + circle):**
- Starts after Shapes 1+2 complete (delay: `shape1Total + shape2Total`)
- Step 1: dot (filled circle) scales from `0` to `1`, duration: ~0.3s
- Step 2: bar draws itself (`pathLength: 0 → 1`), duration: ~0.8s
- Step 3: circle draws itself (`pathLength: 0 → 1`), duration: ~1s, overlap by ~0.3s
- Animation complete → `isDone` state set to `true`

#### Duration Calculation Logic

```typescript
const getTotalDuration = (obj) => {
  const durationOffset = 0.5;
  return sum_of_all_durations - durationOffset;
};
// Shape1 total: 1 - 0.5 = 0.5s
// Shape2 total: 0.5 + 1 - 0.5 = 1.0s
// Shape3 total: 0.5 + 1 + 0.5 - 0.5 = 1.5s
// Full sequence from Scene 3 start: ~3s
// Total from page load: ~6s
```

#### Post-Animation Interaction (after `isDone = true`)

- `whileHover`: `{ y: -30 }` (bounce up)
- `whileTap`: `{ scale: 0.9 }` (press effect)
- Spring: `duration: 0.1, damping: 7, bounce: 0.25`
- Before animation completes, hover/tap interactions are disabled (`undefined`)

### 8.3 Feature Items Stagger Animation

```typescript
stagger(0.2, { startDelay: 0.1 })
// Each item: opacity 0->1, y 100->0
// Duration: 0.6s, ease: "easeOut"
// Triggered by useInView with margin: "-180px"
```

### 8.4 Mobile Menu Animation

```typescript
// Clip path animation (open/close)
clipPath: isExpanded
  ? "inset(0% 0% 0% 0% round 16px)"      // Fully visible
  : "inset(0% 10% 100% 90% round 16px)"   // Collapsed to top-right
// Spring: bounce: 0, duration: 0.5

// Menu items fade in with stagger
stagger(0.1, { startDelay: 0.15 })
// Each item: opacity 0->1, duration: 0.2
```

### 8.5 Skill Tab Indicator Animation

```typescript
// Sliding pill indicator
transition={{ duration: 0.5, type: "spring", stiffness: 700, damping: 30 }}
// Uses useMotionValue for x and width to avoid re-renders
```

### 8.6 Modal Animation

```typescript
// Overlay
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.1 }}

// Content
initial={{ opacity: 0, translateY: 20, scale: 0.95 }}
animate={{ opacity: 1, translateY: 0, scale: 1 }}
exit={{ opacity: 0, translateY: 20, scale: 0.9 }}
transition={{ duration: 0.1, damping: 0, ease: "easeOut" }}
```

### 8.7 Experience Card Expand/Collapse

- `ChevronRight` icon: `transition-transform` + `rotate-90` when expanded
- Content simply renders/unmounts (no motion animation)

---

## 9. Modal System (Intercepting Routes)

### Architecture

Uses Next.js App Router's **Parallel Routes** + **Intercepting Routes** pattern:

1. **Parallel route slot**: `@modal` in root layout receives `{modal}` prop
2. **Intercepting route**: `@modal/(.)project/[id]` intercepts navigation to `/project/[id]`
3. **Full page fallback**: Direct URL access to `/project/[id]` renders full-page view

### Flow

1. User clicks `ProjectCard` -> `Link href="/project/{id}" scroll={false}`
2. Next.js intercepts and renders `@modal/(.)project/[id]/page.tsx` in the modal slot
3. Layout wraps content in `Modal` component
4. `Modal` uses `createPortal` to render into `#modal-root`
5. Close: click outside, click X button, or press back -> `router.back()`

### Modal Component Details

- **Overlay**: Full-screen black overlay at `z-modal-overlay` (899), `bg-black/30`
- **Content container**: Centered, `w-96 md:w-[688px]`, `max-h-[calc(100vh_-_6rem)]`
- **Styling**: `bg-background border border-foreground/15 rounded-md md:rounded-lg`
- **Scroll**: `overflow-y-scroll` inside `RemoveScroll` (prevents body scroll)
- **Close button**: X icon, `absolute top-5 right-5`, `opacity-45 hover:opacity-60`
- **Exit animation**: 200ms timeout before `router.back()` to allow exit animation

### Loading State

Skeleton UI with gray rectangles (`bg-foreground/10 rounded`) mimicking the project detail layout.

### Project Detail Content

Displayed inside both modal and full-page:
- Shape icon variant
- Title (large, HTML parsed)
- Metadata grid: Description, Skills, Members, Period, Links
- Horizontal divider
- Ordered list of detail items with:
  - Sub-bullets
  - Optional images (sized by `image_ratio`: SQUARE=312/602px, PORTRAIT=468/903px, LANDSCAPE=208/384px)

---

## 10. Reusable Components

### CTAButton
- Pill-shaped button: `px-7 py-2 min-w-40 bg-foreground/5 rounded-lg`
- Hover: `hover:bg-foreground/10`
- Text: `text-foreground/65 font-semibold text-base md:text-sm`
- Optional suffix icon (right side)
- Optional link wrapper (opens in new tab)

### SkillItem
- Responsive icon sizes: xs(24px), sm(32px), md(48px)
- Hover tooltip: Label appears below on hover
- Inactive state: `opacity-15 blur-md`
- Uses `next/image` with calculated responsive `sizes` attribute

### SectionWatcher
- Context-based system: `SectionWatchProvider` + `useSectionWatch` hook
- Each section wrapped in `motion.section` with viewport detection
- Viewport margin: `"-50% 0px 0px 0px"` (triggers when section crosses the vertical center)
- Updates `activeId` state for header nav highlighting

---

## 11. Utility Hooks & Helpers

### `useOnClickOutside(ref, handler)`
- Listens for `mousedown` and `touchstart` on document
- Calls handler if click target is outside the ref element
- Used by: Header (close mobile menu), Modal (close on outside click)

### `parsePrismaJSON<T>(json)`
- Converts Prisma `JsonValue` to typed object via `JSON.parse(JSON.stringify())`
- Used for parsing link objects from database

### `getSkills(ids: number[])`
- Fetches skills by ID array from Prisma
- Ordered by category ascending

---

## 12. SEO & Performance

### Metadata

```typescript
metadataBase: new URL("https://meganmagic.com")
title: "Song Jinkyung | Frontend Developer"
description: "Portfolio of frontend developer..."
keywords: ["frontend", "frontend developer", "portfolio"]
alternates: { canonical: "/" }
```

### Sitemap (`sitemap.ts`)

Dynamic sitemap generated from:
- Home page (priority: 1)
- All project detail pages (priority: 0.8)
- Change frequency: monthly

### Image Optimization

- Remote patterns configured for:
  - `velog.velcdn.com/images/mari/**` (blog images)
  - `lh8zlkkhlslw0zyz.public.blob.vercel-storage.com` (Vercel Blob storage)
- SVGs imported as React components via `@svgr/webpack`
- SVGs in public folder used as `<Image>` src for project card icons

### Open Graph

- `opengraph-image.png` placed in app directory (auto-detected by Next.js)

---

## 13. Deployment & Infrastructure

### Platform: Vercel

- **Database**: Vercel Postgres (PostgreSQL)
- **Image Storage**: Vercel Blob Storage
- **Analytics**: `@vercel/analytics`
- **Speed Insights**: `@vercel/speed-insights`

### Environment Variables

```
POSTGRES_PRISMA_URL        # Prisma connection string (pooled)
POSTGRES_URL_NON_POOLING   # Direct connection string
NEXT_PUBLIC_RESUME_DOWNLOAD_URL  # Resume download link
```

### Build Command

```bash
npx prisma generate && npx prisma migrate deploy && next build
```

---

## 14. SVG Assets

### Public Assets (`/public/assets/`)

| File | Description |
|---|---|
| `shape-sparkle.svg` | Sparkle icon for experience timeline |
| `shape-design.svg` | Design category shape |
| `shape-env.svg` | Environment category shape |
| `shape-frontend.svg` | Frontend category shape |
| `shape-variant-{0-8}.svg` | 9 unique decorative shapes for project cards |
| `shape-variant-{0-8}-invert.svg` | Inverted versions for hover state |

### Inline SVGs (MotionShapes) — Korean Initial Consonants (Choseong)

The three hero shapes draw the **Korean initial consonants (choseong)** of the developer's name.
All shapes share: `viewBox="0 0 200 200"`, `strokeWidth="72"`, `strokeLinecap="round"`, `strokeLinejoin="round"`.

The shapes are rendered inside a `flex justify-center` container, so the reading order is **left to right**: FirstShape → SecondShape → ThirdShape.

#### Target Name: Choi Young-Hun (최영훈) → ㅊ ㅇ ㅎ

| Shape | Color | Choseong | Structure | Paths |
|---|---|---|---|---|
| FirstShape | Blue (#007AFF) | **ㅊ** (chieut) | dot + horizontal bar + V-chevron | 3 paths |
| SecondShape | Green (#00C676) | **ㅇ** (ieung) | circle | 1 path |
| ThirdShape | Lime (#E2FF00) | **ㅎ** (hieut) | dot + horizontal bar + circle | 3 paths |

#### FirstShape — ㅊ (chieut) Design

ㅊ is composed of three elements stacked vertically: a dot on top, a horizontal bar, and a V-shaped chevron at the bottom.

```
Suggested SVG paths (200x200 viewBox, strokeWidth: 72):

path1 (dot):     Small filled circle at top, center ~(100, 25), radius ~16-18
                  → Animate with scale: 0 → 1
path2 (bar):     M55 80H145  (horizontal line)
                  → Animate with pathLength: 0 → 1
path3 (chevron): M50 155L100 108L150 155  (V-shape)
                  → Animate with pathLength: 0 → 1
```

Animation sequence: dot pops in → bar draws left-to-right → chevron draws.

#### SecondShape — ㅇ (ieung) Design

ㅇ is a simple circle, the simplest of the three shapes.

```
Suggested SVG path (200x200 viewBox, strokeWidth: 72):

path1 (circle):  M100 144C75.7 144 56 124.3 56 100C56 75.7 75.7 56 100 56
                  C124.3 56 144 75.7 144 100C144 124.3 124.3 144 100 144Z
                  → Animate with pathLength: 0 → 1
```

Animation sequence: circle draws itself (single continuous stroke).

#### ThirdShape — ㅎ (hieut) Design

ㅎ is composed of three elements: a dot on top, a horizontal bar in the middle, and a circle at the bottom. Structurally similar to ㅊ but with a circle instead of a chevron.

```
Suggested SVG paths (200x200 viewBox, strokeWidth: 72):

path1 (dot):     Small filled circle at top, center ~(100, 25), radius ~16-18
                  → Animate with scale: 0 → 1
path2 (bar):     M55 75H145  (horizontal line)
                  → Animate with pathLength: 0 → 1
path3 (circle):  Circle centered at ~(100, 145), radius ~35-40
                  → Animate with pathLength: 0 → 1
```

Animation sequence: dot pops in → bar draws → circle draws.

> **NOTE**: The exact coordinates above are approximate starting points. Due to `strokeWidth: 72`, each stroke occupies 36px on each side of its center line. Fine-tuning of positions and spacing is required through visual testing. Consider reducing strokeWidth (e.g., to 56-64) if three elements feel too crowded vertically within the 200x200 viewBox.

---

## Appendix: Key Design Principles

1. **Single-page scroll layout** with anchor-based section navigation
2. **Frosted glass aesthetic** for header and overlays (`backdrop-blur-lg` + low-opacity backgrounds)
3. **Three-color brand identity** (Blue, Green, Lime) used consistently across logo, shapes, hover states, and active states
4. **Progressive disclosure** - experience details are expandable, projects show 6 at a time with "show more"
5. **Consistent animation language**: All scroll-in animations use `SlideUpInView` (0.6s slide-up), interactive elements use springs
6. **Mobile-first responsive design** with breakpoints at sm(640), md(768), lg(1024), xl(1280)
7. **Server-side data fetching** for SEO - all content sections are server components that query Prisma directly
8. **Dark mode support** via `prefers-color-scheme: dark` CSS media query (automatic, not toggleable in current version)
9. **Intercepting route modal** pattern for project details - keeps scroll position on main page
10. **Korean language content** but the UI structure is language-agnostic (labels come from data or can be swapped)
