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
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 2,
        category: "FRONTEND",
        items: [],
        item: "CSS3",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 3,
        category: "FRONTEND",
        items: [],
        item: "JavaScript",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 4,
        category: "FRONTEND",
        items: [],
        item: "TypeScript",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 5,
        category: "FRONTEND_LIBRARY",
        items: [],
        item: "React",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 6,
        category: "FRONTEND_LIBRARY",
        items: [],
        item: "React Router",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 7,
        category: "FRONTEND_LIBRARY",
        items: [],
        item: "Tailwind CSS",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 8,
        category: "FRONTEND_LIBRARY",
        items: [],
        item: "Styled Components",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 9,
        category: "FRONTEND_LIBRARY",
        items: [],
        item: "Framer Motion",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 10,
        category: "FRONTEND_LIBRARY",
        items: [],
        item: "Recoil",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 11,
        category: "ENV",
        items: [],
        item: "Git",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 12,
        category: "ENV",
        items: [],
        item: "Webpack",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 13,
        category: "ENV",
        items: [],
        item: "Vite",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 14,
        category: "ENV",
        items: [],
        item: "Firebase",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 15,
        category: "ENV",
        items: [],
        item: "GitHub Actions",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 16,
        category: "ENV",
        items: [],
        item: "Node.js",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 17,
        category: "ENV",
        items: [],
        item: "Express",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 18,
        category: "ENV",
        items: [],
        item: "MongoDB",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 19,
        category: "ENV",
        items: [],
        item: "Supabase",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 20,
        category: "DESIGN",
        items: [],
        item: "Figma",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 21,
        category: "FRONTEND_LIBRARY",
        items: [],
        item: "ECharts",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachecharts/apachecharts-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 22,
        category: "FRONTEND_LIBRARY",
        items: [],
        item: "React Query",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg",
      },
    }),
    prisma.skill.create({
      data: {
        id: 23,
        category: "FRONTEND_LIBRARY",
        items: [],
        item: "Zustand",
        blobUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    }),
  ]);

  console.log(`Created ${skills.length} skills`);

  // ─── Intro ───
  const intros = await Promise.all([
    prisma.intro.create({
      data: {
        title: "사용자 중심 개발",
        detail:
          "React 기반의 사용자 중심 웹 서비스 개발에 집중합니다. 직관적인 인터페이스와 매끄러운 사용자 경험을 최우선으로 생각합니다.",
        blobUrl: null,
      },
    }),
    prisma.intro.create({
      data: {
        title: "유연한 소통",
        detail:
          "다양한 직군과의 협업에 열린 자세를 갖추고 있습니다. 일본어 일상회화가 가능하며, 해외 체류 경험을 통해 다문화 환경에서의 적응력을 키웠습니다.",
        blobUrl: null,
      },
    }),
    prisma.intro.create({
      data: {
        title: "견고한 코드",
        detail:
          "TypeScript와 모던 프론트엔드 기술로 유지보수하기 쉬운 코드를 작성합니다. 성능 최적화와 코드 품질 개선에 지속적으로 관심을 갖고 있습니다.",
        blobUrl: null,
      },
    }),
  ]);

  console.log(`Created ${intros.length} intros`);

  // ─── Experience (WORK) ───
  const workExperiences = await Promise.all([
    prisma.experience.create({
      data: {
        title: "아이페이지온 (iPageOn)",
        sub_title: "프론트엔드 개발자",
        period: "2023.06 - 현재",
        items: [
          "React, TypeScript 기반 통신 솔루션 및 산업용 IoT 솔루션 웹 애플리케이션 개발",
          "WebSocket 기반 실시간 데이터 통신 구현",
          "ECharts를 활용한 데이터 시각화 대시보드 개발",
          "코드 유지보수, 성능 최적화, UI/UX 개선 담당",
        ],
        links: [],
        is_active: true,
        index: 1,
        skill_ids: [4, 5, 8, 21],
        category: "WORK",
      },
    }),
    prisma.experience.create({
      data: {
        title: "한국 소프트웨어 인재 개발원",
        sub_title: "JAVA 개발자 양성과정 수료",
        period: "2022.10 - 2023.04",
        items: [
          "정부 지원 풀스택 개발 교육 과정 (6개월 집중)",
          "HTML, CSS, JavaScript 웹 개발 기초부터 심화까지 학습",
          "팀 프로젝트를 통한 실전 개발 경험 습득",
        ],
        links: [],
        is_active: false,
        index: 2,
        skill_ids: [1, 2, 3, 11],
        category: "WORK",
      },
    }),
    prisma.experience.create({
      data: {
        title: "일본 체류 (하마마츠 & 오사카)",
        sub_title: "일본어 학습 및 게임 프로그래밍",
        period: "2021.03 - 2022.10",
        items: [
          "하마마츠 일본어 학교에서 일본어 집중 학습",
          "오사카 휴먼 아카데미 게임 프로그래밍학과 수학 (Unity, C#)",
          "다문화 환경에서의 적응력 및 커뮤니케이션 능력 향상",
        ],
        links: [],
        is_active: false,
        index: 3,
        skill_ids: [],
        category: "WORK",
      },
    }),
  ]);

  // ─── Experience (PROJECT) ───
  const projectExperiences = await Promise.all([
    prisma.experience.create({
      data: {
        title: "SiteDash",
        sub_title: "풀스택 웹 애플리케이션 (프로젝트 대시보드)",
        period: "2025.05",
        items: [
          "React 19 + TypeScript 프론트엔드, Express.js 백엔드 개발",
          "Google OAuth 2.0 + JWT 인증 구현",
          "FSD (Feature-Sliced Design) 아키텍처 적용",
          "Framer Motion 인터랙티브 애니메이션 구현",
        ],
        links: [
          {
            href: "https://ggnu11.github.io/site-dash/",
            label: "Live Demo",
          },
        ],
        is_active: true,
        index: 4,
        skill_ids: [4, 5, 7, 9, 16, 17, 19, 23],
        category: "PROJECT",
      },
    }),
    prisma.experience.create({
      data: {
        title: "NoteSnap",
        sub_title: "텍스트 파일 요약 웹 애플리케이션",
        period: "2025.04",
        items: [
          "업로드된 텍스트 파일에서 핵심 문장을 추출하는 인브라우저 요약 앱",
          "외부 AI API 없이 브라우저 내에서 동작",
          "Firebase Hosting + GitHub Actions CI/CD 파이프라인 구축",
        ],
        links: [
          {
            href: "https://notesnap-6966c.web.app",
            label: "Live Demo",
          },
          {
            href: "https://github.com/ggnu11/notesnap",
            label: "GitHub",
          },
        ],
        is_active: false,
        index: 5,
        skill_ids: [4, 5, 7, 13, 14, 15],
        category: "PROJECT",
      },
    }),
    prisma.experience.create({
      data: {
        title: "ABC Company Site",
        sub_title: "풀스택 웹 애플리케이션 (회사 소개 사이트)",
        period: "2025.01",
        items: [
          "React 프론트엔드 + Express.js RESTful API 백엔드",
          "MongoDB Atlas 클라우드 데이터베이스 연동",
          "JWT 인증 및 CORS 보안 구현",
          "Netlify(프론트) + Render(백엔드) 배포 아키텍처",
        ],
        links: [
          {
            href: "https://abc-company1216.netlify.app",
            label: "Live Demo",
          },
        ],
        is_active: false,
        index: 6,
        skill_ids: [5, 7, 16, 17, 18],
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
        title: "<em>SiteDash</em>",
        sub_title:
          "React 19 + Express.js 풀스택 프로젝트 대시보드",
        period: "2025.05",
        member: "Solo Project",
        skills: [],
        links: [
          { href: "https://ggnu11.github.io/site-dash/", label: "Live Demo" },
        ],
        skill_ids: [4, 5, 7, 9, 16, 17, 19, 23],
        row_number: 1,
        items: {
          create: [
            {
              title: "인증 및 아키텍처",
              content: [
                "Google OAuth 2.0 + JWT 토큰 기반 인증 시스템 구현",
                "FSD (Feature-Sliced Design) 아키텍처로 확장 가능한 구조 설계",
                "Supabase PostgreSQL 데이터베이스 연동",
              ],
              row_number: 1,
            },
            {
              title: "UI/UX 및 배포",
              content: [
                "Framer Motion 인터랙티브 애니메이션 구현",
                "shadcn/ui + Tailwind CSS 반응형 디자인",
                "Frontend: GitHub Pages / Backend: Railway 배포",
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
        title: "<em>NoteSnap</em>",
        sub_title:
          "외부 AI 없이 브라우저에서 동작하는 텍스트 요약 앱",
        period: "2025.04",
        member: "Solo Project",
        skills: [],
        links: [
          { href: "https://notesnap-6966c.web.app", label: "Live Demo" },
          { href: "https://github.com/ggnu11/notesnap", label: "GitHub" },
        ],
        skill_ids: [4, 5, 7, 13, 14, 15],
        row_number: 2,
        items: {
          create: [
            {
              title: "핵심 기능",
              content: [
                "텍스트 파일 업로드 → 핵심 문장 자동 추출",
                "외부 AI API/GPT 없이 인브라우저에서 완전 동작",
                "깔끔하고 직관적인 UI 설계",
              ],
              row_number: 1,
            },
            {
              title: "배포 파이프라인",
              content: [
                "Firebase Hosting으로 정적 파일 배포",
                "GitHub Actions CI/CD 파이프라인 구축",
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
        title: "ABC <em>Company</em> Site",
        sub_title:
          "모던 웹 기술 기반 풀스택 회사 소개 웹사이트",
        period: "2025.01",
        member: "Solo Project",
        skills: [],
        links: [
          {
            href: "https://abc-company1216.netlify.app",
            label: "Live Demo",
          },
        ],
        skill_ids: [5, 7, 16, 17, 18],
        row_number: 3,
        items: {
          create: [
            {
              title: "풀스택 구조",
              content: [
                "React 반응형 UI/UX 프론트엔드",
                "Express.js RESTful API 백엔드",
                "MongoDB Atlas 클라우드 데이터베이스",
              ],
              row_number: 1,
            },
            {
              title: "보안 및 배포",
              content: [
                "JWT 인증 + CORS 보안 설정",
                "Mongoose ODM을 활용한 스키마 관리",
                "Netlify(프론트) + Render(백엔드) 배포",
              ],
              row_number: 2,
            },
          ],
        },
      },
    }),
    prisma.project.create({
      data: {
        id: 4,
        title: "Dev <em>Portfolio</em>",
        sub_title:
          "Next.js 14 + Prisma 기반 개인 포트폴리오 웹사이트",
        period: "2025.03 - 현재",
        member: "Solo Project",
        skills: [],
        links: [
          { href: "https://github.com/ggnu11", label: "GitHub" },
        ],
        skill_ids: [4, 5, 7, 9],
        row_number: 4,
        items: {
          create: [
            {
              title: "프론트엔드",
              content: [
                "Next.js 14 App Router + React 18 서버/클라이언트 컴포넌트",
                "Framer Motion 기반 SVG 초성 애니메이션 (ㅊㅇㅎ)",
                "한국어/일본어 클라이언트 사이드 i18n",
                "다크모드/라이트모드 자동 전환",
              ],
              row_number: 1,
            },
            {
              title: "백엔드 & 인프라",
              content: [
                "Prisma 7 + PostgreSQL 어댑터 패턴",
                "Intercepting Routes를 활용한 프로젝트 모달",
              ],
              row_number: 2,
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
        title: "React Server Components 이해하기",
        date: "2024.01.15",
        forwardLink: "https://velog.io",
        bgImageUrl:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
      },
    }),
    prisma.blog.create({
      data: {
        title: "TypeScript로 더 나은 DX 만들기",
        date: "2023.11.20",
        forwardLink: "https://velog.io",
        bgImageUrl:
          "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=80",
      },
    }),
    prisma.blog.create({
      data: {
        title: "Framer Motion으로 애니메이션 구현하기",
        date: "2023.09.05",
        forwardLink: "https://velog.io",
        bgImageUrl:
          "https://images.unsplash.com/photo-1550439062-609e1531270e?w=600&q=80",
      },
    }),
    prisma.blog.create({
      data: {
        title: "WebSocket 실시간 통신 구축 가이드",
        date: "2024.03.12",
        forwardLink: "https://velog.io",
        bgImageUrl:
          "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&q=80",
      },
    }),
    prisma.blog.create({
      data: {
        title: "ECharts로 데이터 시각화하기",
        date: "2024.05.28",
        forwardLink: "https://velog.io",
        bgImageUrl:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      },
    }),
    prisma.blog.create({
      data: {
        title: "Next.js App Router 심층 분석",
        date: "2024.02.10",
        forwardLink: "https://velog.io",
        bgImageUrl:
          "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=600&q=80",
      },
    }),
  ]);

  console.log(`Created ${blogs.length} blogs`);

  // ─── Education ───
  const educations = await Promise.all([
    prisma.education.create({
      data: {
        title: "서울 사이버대학교",
        sub_title: "컴퓨터공학 전공",
        period: "2021 - 2025",
        items: [],
        category: "EDUCATION",
      },
    }),
    prisma.education.create({
      data: {
        title: "오사카 휴먼 아카데미",
        sub_title: "게임 프로그래밍학과",
        period: "2022.01 - 2022.10",
        items: ["Unity, C# 기반 게임 프로그래밍 학습"],
        category: "EDUCATION",
      },
    }),
    prisma.education.create({
      data: {
        title: "하마마츠 일본어 학교",
        sub_title: "일본어 집중 학습",
        period: "2021.03 - 2021.12",
        items: [],
        category: "EDUCATION",
      },
    }),
    prisma.education.create({
      data: {
        title: "정보처리기사",
        sub_title: "한국산업인력공단",
        period: "2025.09 (예정)",
        items: [],
        category: "CERTIFICATION",
      },
    }),
    prisma.education.create({
      data: {
        title: "SQL 개발자 (SQLD)",
        sub_title: "한국데이터산업진흥원",
        period: "2025.06 (예정)",
        items: [],
        category: "CERTIFICATION",
      },
    }),
    prisma.education.create({
      data: {
        title: "JLPT N2",
        sub_title: "일본어능력시험",
        period: "2022.01",
        items: [],
        category: "CERTIFICATION",
      },
    }),
    prisma.education.create({
      data: {
        title: "JLPT N3",
        sub_title: "일본어능력시험",
        period: "2021.08",
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
