import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  // Clean existing data
  await prisma.projectItem.deleteMany();
  await prisma.project.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.intro.deleteMany();
  await prisma.blog.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.education.deleteMany();

  // ─── Skills ───
  const skills = await Promise.all([
    prisma.skill.create({
      data: {
        id: 1,
        category: "FRONTEND",
        items: [],
        item: "HTML5",
        blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 2,
        category: "FRONTEND",
        items: [],
        item: "CSS3",
        blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 3,
        category: "FRONTEND",
        items: [],
        item: "JavaScript",
        blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 4,
        category: "FRONTEND",
        items: [],
        item: "TypeScript",
        blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 5,
        category: "FRONTEND_LIBRARY",
        items: [],
        item: "React",
        blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 6,
        category: "FRONTEND_LIBRARY",
        items: [],
        item: "Next.js",
        blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 7,
        category: "FRONTEND_LIBRARY",
        items: [],
        item: "Vue.js",
        blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 8,
        category: "FRONTEND_LIBRARY",
        items: [],
        item: "Redux",
        blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 9,
        category: "ENV",
        items: [],
        item: "Node.js",
        blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 10,
        category: "ENV",
        items: [],
        item: "Docker",
        blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 11,
        category: "ENV",
        items: [],
        item: "Git",
        blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 12,
        category: "ENV",
        items: [],
        item: "AWS",
        blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 13,
        category: "DESIGN",
        items: [],
        item: "Figma",
        blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 14,
        category: "DESIGN",
        items: [],
        item: "Storybook",
        blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 15,
        category: "FRONTEND_LIBRARY",
        items: [],
        item: "Tailwind CSS",
        blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    }),
  ]);

  console.log(`Created ${skills.length} skills`);

  // ─── Intro ───
  const intros = await Promise.all([
    prisma.intro.create({
      data: {
        title: "Flexible Communication",
        detail:
          "I value clear and open communication with team members. I actively participate in code reviews and discussions to build better products together.",
        blobUrl: null,
      },
    }),
    prisma.intro.create({
      data: {
        title: "Robust Development",
        detail:
          "I write clean, maintainable code with comprehensive test coverage. I focus on building scalable architecture that can grow with the product.",
        blobUrl: null,
      },
    }),
    prisma.intro.create({
      data: {
        title: "User-Centered Design",
        detail:
          "I prioritize user experience in every development decision. I combine technical expertise with design sensibility to create intuitive interfaces.",
        blobUrl: null,
      },
    }),
  ]);

  console.log(`Created ${intros.length} intros`);

  // ─── Experience (WORK) ───
  const workExperiences = await Promise.all([
    prisma.experience.create({
      data: {
        title: "TechCorp Inc.",
        sub_title: "Senior Frontend Developer",
        period: "2023.01 - Present",
        items: [
          "Led the migration from legacy jQuery codebase to React/TypeScript",
          "Implemented design system with Storybook, improving UI consistency across 5 products",
          "Reduced initial page load time by 40% through code splitting and lazy loading",
          "Mentored 3 junior developers through pair programming sessions",
        ],
        links: [{ href: "https://example.com", label: "Company Website" }],
        is_active: true,
        index: 1,
        skill_ids: [4, 5, 6, 15],
        category: "WORK",
      },
    }),
    prisma.experience.create({
      data: {
        title: "StartupHub",
        sub_title: "Frontend Developer",
        period: "2021.03 - 2022.12",
        items: [
          "Built a real-time dashboard using React and WebSocket",
          "Developed a reusable component library used across 3 projects",
          "Integrated CI/CD pipeline with GitHub Actions, reducing deployment time by 60%",
        ],
        links: [],
        is_active: false,
        index: 2,
        skill_ids: [3, 5, 8, 11],
        category: "WORK",
      },
    }),
    prisma.experience.create({
      data: {
        title: "WebAgency Co.",
        sub_title: "Junior Frontend Developer",
        period: "2019.06 - 2021.02",
        items: [
          "Developed responsive web applications for 10+ client projects",
          "Implemented pixel-perfect UI from Figma designs",
          "Collaborated with backend team to design RESTful API contracts",
        ],
        links: [],
        is_active: false,
        index: 3,
        skill_ids: [1, 2, 3, 7],
        category: "WORK",
      },
    }),
  ]);

  // ─── Experience (PROJECT) ───
  const projectExperiences = await Promise.all([
    prisma.experience.create({
      data: {
        title: "Open Source Design System",
        sub_title: "Creator & Maintainer",
        period: "2022.06 - Present",
        items: [
          "Created an open-source React component library with 500+ GitHub stars",
          "Published on npm with 2,000+ weekly downloads",
          "Wrote comprehensive documentation with interactive examples",
        ],
        links: [
          { href: "https://github.com", label: "GitHub" },
        ],
        is_active: true,
        index: 4,
        skill_ids: [4, 5, 14, 15],
        category: "PROJECT",
      },
    }),
    prisma.experience.create({
      data: {
        title: "Tech Blog Platform",
        sub_title: "Full-stack Developer",
        period: "2021.09 - 2022.05",
        items: [
          "Built a blog platform with Next.js and PostgreSQL",
          "Implemented server-side rendering for SEO optimization",
          "Achieved 95+ Lighthouse score across all metrics",
        ],
        links: [],
        is_active: false,
        index: 5,
        skill_ids: [4, 6, 9],
        category: "PROJECT",
      },
    }),
  ]);

  console.log(
    `Created ${workExperiences.length + projectExperiences.length} experiences`
  );

  // ─── Projects ───
  const projects = await Promise.all([
    prisma.project.create({
      data: {
        id: 1,
        title: "E-Commerce <em>Dashboard</em>",
        sub_title: "Admin dashboard for managing products, orders, and analytics",
        period: "2023.06 - 2023.09",
        member: "Frontend 2, Backend 2, Designer 1",
        skills: [],
        links: [{ href: "https://github.com", label: "GitHub" }],
        skill_ids: [4, 5, 8, 15],
        row_number: 1,
        items: {
          create: [
            {
              title: "Real-time Analytics Dashboard",
              content: [
                "Implemented real-time chart updates using WebSocket",
                "Built custom chart components with D3.js integration",
                "Optimized rendering performance for large datasets",
              ],
              row_number: 1,
              image_ratio: "LANDSCAPE",
            },
            {
              title: "Order Management System",
              content: [
                "Designed filterable/sortable data table with virtual scrolling",
                "Implemented bulk action support for order processing",
              ],
              row_number: 2,
            },
          ],
        },
      },
    }),
    prisma.project.create({
      data: {
        id: 2,
        title: "Social Media <em>App</em>",
        sub_title: "Mobile-first social platform with real-time messaging",
        period: "2023.01 - 2023.05",
        member: "Frontend 3, Backend 2, Designer 1",
        skills: [],
        links: [
          { href: "https://github.com", label: "GitHub" },
          { href: "https://example.com", label: "Live Demo" },
        ],
        skill_ids: [4, 5, 6, 9],
        row_number: 2,
        items: {
          create: [
            {
              title: "Real-time Chat System",
              content: [
                "Built WebSocket-based messaging with typing indicators",
                "Implemented message read receipts and online status",
                "Added support for image/file sharing in conversations",
              ],
              row_number: 1,
            },
            {
              title: "Infinite Scroll Feed",
              content: [
                "Implemented virtualized list for smooth scrolling",
                "Built optimistic UI updates for like/comment actions",
              ],
              row_number: 2,
            },
          ],
        },
      },
    }),
    prisma.project.create({
      data: {
        id: 3,
        title: "Portfolio <em>Website</em>",
        sub_title: "Personal portfolio with animated SVG shapes and dark mode",
        period: "2024.01 - 2024.02",
        member: "Solo Project",
        skills: [],
        links: [{ href: "https://github.com", label: "GitHub" }],
        skill_ids: [4, 6, 15, 13],
        row_number: 3,
        items: {
          create: [
            {
              title: "SVG Animation System",
              content: [
                "Designed choreographed 3-scene SVG animation sequence",
                "Implemented path drawing animations with Framer Motion",
              ],
              row_number: 1,
            },
          ],
        },
      },
    }),
    prisma.project.create({
      data: {
        id: 4,
        title: "Task <em>Manager</em>",
        sub_title: "Kanban-style project management tool with drag and drop",
        period: "2022.08 - 2022.11",
        member: "Frontend 2, Backend 1",
        skills: [],
        links: [],
        skill_ids: [3, 5, 8, 11],
        row_number: 4,
        items: {
          create: [
            {
              title: "Drag & Drop Board",
              content: [
                "Implemented smooth drag-and-drop with react-beautiful-dnd",
                "Built optimistic updates for seamless board interactions",
                "Added multi-select and bulk move functionality",
              ],
              row_number: 1,
            },
          ],
        },
      },
    }),
    prisma.project.create({
      data: {
        id: 5,
        title: "Weather <em>App</em>",
        sub_title: "Location-based weather forecast with beautiful animations",
        period: "2022.03 - 2022.05",
        member: "Solo Project",
        skills: [],
        links: [{ href: "https://example.com", label: "Live Demo" }],
        skill_ids: [4, 5, 15],
        row_number: 5,
        items: {
          create: [
            {
              title: "Weather Visualization",
              content: [
                "Built animated weather icons using CSS and SVG",
                "Implemented 7-day forecast with interactive charts",
              ],
              row_number: 1,
            },
          ],
        },
      },
    }),
    prisma.project.create({
      data: {
        id: 6,
        title: "Code <em>Editor</em>",
        sub_title: "Browser-based code editor with live preview and collaboration",
        period: "2023.10 - 2024.01",
        member: "Frontend 2, Backend 1",
        skills: [],
        links: [{ href: "https://github.com", label: "GitHub" }],
        skill_ids: [4, 5, 6, 9, 10],
        row_number: 6,
        items: {
          create: [
            {
              title: "Live Collaboration",
              content: [
                "Implemented real-time code syncing with CRDT algorithm",
                "Built cursor presence and selection highlighting",
              ],
              row_number: 1,
            },
          ],
        },
      },
    }),
    prisma.project.create({
      data: {
        id: 7,
        title: "Design <em>System</em>",
        sub_title: "Comprehensive component library with accessibility focus",
        period: "2022.06 - Present",
        member: "Frontend 3, Designer 2",
        skills: [],
        links: [{ href: "https://github.com", label: "GitHub" }],
        skill_ids: [4, 5, 14, 15],
        row_number: 7,
        items: {
          create: [
            {
              title: "Accessible Components",
              content: [
                "Built 40+ WCAG 2.1 AA compliant components",
                "Implemented keyboard navigation and screen reader support",
                "Created automated accessibility testing pipeline",
              ],
              row_number: 1,
            },
          ],
        },
      },
    }),
  ]);

  console.log(`Created ${projects.length} projects`);

  // ─── Blog ───
  const blogs = await Promise.all([
    prisma.blog.create({
      data: {
        title: "Understanding React Server Components",
        date: "2024.01.15",
        forwardLink: "https://velog.io",
        bgImageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
      },
    }),
    prisma.blog.create({
      data: {
        title: "TypeScript Tips for Better DX",
        date: "2023.11.20",
        forwardLink: "https://velog.io",
        bgImageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=80",
      },
    }),
    prisma.blog.create({
      data: {
        title: "Building Animations with Framer Motion",
        date: "2023.09.05",
        forwardLink: "https://velog.io",
        bgImageUrl: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=600&q=80",
      },
    }),
    prisma.blog.create({
      data: {
        title: "CSS Grid vs Flexbox: When to Use What",
        date: "2023.07.12",
        forwardLink: "https://velog.io",
        bgImageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&q=80",
      },
    }),
    prisma.blog.create({
      data: {
        title: "Web Performance Optimization Guide",
        date: "2023.05.28",
        forwardLink: "https://velog.io",
        bgImageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      },
    }),
    prisma.blog.create({
      data: {
        title: "Next.js App Router Deep Dive",
        date: "2024.02.10",
        forwardLink: "https://velog.io",
        bgImageUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=600&q=80",
      },
    }),
  ]);

  console.log(`Created ${blogs.length} blogs`);

  // ─── Education ───
  const educations = await Promise.all([
    prisma.education.create({
      data: {
        title: "Korea University",
        sub_title: "B.S. in Computer Science",
        period: "2015.03 - 2019.02",
        items: [
          "GPA: 3.8 / 4.5",
          "Relevant coursework: Data Structures, Algorithms, Web Programming",
        ],
        category: "EDUCATION",
      },
    }),
    prisma.education.create({
      data: {
        title: "Samsung SW Academy (SSAFY)",
        sub_title: "Full-stack Web Development Track",
        period: "2019.01 - 2019.06",
        items: [
          "Completed 800+ hours of intensive training",
          "Built 5 team projects with agile methodology",
        ],
        category: "EDUCATION",
      },
    }),
    prisma.education.create({
      data: {
        title: "AWS Certified Developer - Associate",
        sub_title: "Amazon Web Services",
        period: "2023.06",
        items: [],
        category: "CERTIFICATION",
      },
    }),
    prisma.education.create({
      data: {
        title: "SQLD (SQL Developer)",
        sub_title: "Korea Data Agency",
        period: "2019.09",
        items: [],
        category: "CERTIFICATION",
      },
    }),
  ]);

  console.log(`Created ${educations.length} educations`);

  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
