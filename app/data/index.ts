import type { Locale } from "@/i18n/dictionaries";

// ─── i18n helper ───
export type I18nText = { kr: string; jp: string };
export function resolveText(text: I18nText | string, locale: Locale): string {
  if (typeof text === "string") return text;
  return text[locale];
}

// ─── Skills ───
export const skills = [
  // FRONTEND
  { id: 1, category: "FRONTEND", items: [] as string[], item: "HTML5", blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { id: 2, category: "FRONTEND", items: [] as string[], item: "CSS3", blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { id: 3, category: "FRONTEND", items: [] as string[], item: "JavaScript", blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { id: 4, category: "FRONTEND", items: [] as string[], item: "TypeScript", blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  // FRONTEND_LIBRARY
  { id: 5, category: "FRONTEND_LIBRARY", items: [] as string[], item: "React", blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { id: 6, category: "FRONTEND_LIBRARY", items: [] as string[], item: "Next.js", blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { id: 7, category: "FRONTEND_LIBRARY", items: [] as string[], item: "Tailwind CSS", blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { id: 8, category: "FRONTEND_LIBRARY", items: [] as string[], item: "Emotion", blobUrl: "/assets/emotion.svg" },
  { id: 9, category: "FRONTEND_LIBRARY", items: [] as string[], item: "Framer Motion", blobUrl: "/assets/framer-motion.svg" },
  { id: 10, category: "FRONTEND_LIBRARY", items: [] as string[], item: "React Router", blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg" },
  { id: 21, category: "FRONTEND_LIBRARY", items: [] as string[], item: "ECharts", blobUrl: "/assets/echart.svg" },
  { id: 22, category: "FRONTEND_LIBRARY", items: [] as string[], item: "TanStack Query", blobUrl: "/assets/react-query.svg" },
  { id: 23, category: "FRONTEND_LIBRARY", items: [] as string[], item: "Zustand", blobUrl: "/assets/zustand.svg" },
  { id: 24, category: "FRONTEND_LIBRARY", items: [] as string[], item: "React Hook Form", blobUrl: "/assets/react-hook-form.svg" },
  { id: 25, category: "FRONTEND_LIBRARY", items: [] as string[], item: "Zod", blobUrl: "/assets/zod.svg" },
  { id: 26, category: "FRONTEND_LIBRARY", items: [] as string[], item: "i18next", blobUrl: "/assets/i18next.svg" },
  { id: 27, category: "FRONTEND_LIBRARY", items: [] as string[], item: "MUI", blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
  // ENV
  { id: 11, category: "ENV", items: [] as string[], item: "Git", blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { id: 13, category: "ENV", items: [] as string[], item: "Vite", blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  { id: 14, category: "ENV", items: [] as string[], item: "Firebase", blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
  { id: 15, category: "ENV", items: [] as string[], item: "GitHub Actions", blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
  { id: 16, category: "ENV", items: [] as string[], item: "Node.js", blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { id: 17, category: "ENV", items: [] as string[], item: "Express", blobUrl: "/assets/express.svg" },
  { id: 18, category: "ENV", items: [] as string[], item: "MongoDB", blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { id: 19, category: "ENV", items: [] as string[], item: "Supabase", blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { id: 28, category: "ENV", items: [] as string[], item: "Axios", blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg" },
  // DESIGN
  { id: 20, category: "DESIGN", items: [] as string[], item: "Figma", blobUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

// ─── Intros ───
export const intros = [
  {
    id: 1,
    title: { kr: "사용자 중심 개발", jp: "ユーザー中心の開発" },
    detail: {
      kr: "React 기반의 사용자 중심 웹 서비스 개발에 집중합니다. 직관적인 인터페이스와 매끄러운 사용자 경험을 최우선으로 생각합니다.",
      jp: "Reactベースのユーザー中心Webサービス開発に集中しています。直感的なインターフェースと滑らかなユーザー体験を最優先に考えています。",
    },
    blobUrl: null,
  },
  {
    id: 2,
    title: { kr: "유연한 소통", jp: "柔軟なコミュニケーション" },
    detail: {
      kr: "다양한 직군과의 협업에 열린 자세를 갖추고 있습니다. 일본어 일상회화가 가능하며, 해외 체류 경험을 통해 다문화 환경에서의 적응력을 키웠습니다.",
      jp: "多様な職種との協業にオープンな姿勢を持っています。日本語の日常会話が可能で、海外滞在経験を通じて多文化環境への適応力を養いました。",
    },
    blobUrl: null,
  },
  {
    id: 3,
    title: { kr: "견고한 코드", jp: "堅牢なコード" },
    detail: {
      kr: "TypeScript와 모던 프론트엔드 기술로 유지보수하기 쉬운 코드를 작성합니다. 성능 최적화와 코드 품질 개선에 지속적으로 관심을 갖고 있습니다.",
      jp: "TypeScriptとモダンフロントエンド技術でメンテナンスしやすいコードを作成します。パフォーマンス最適化とコード品質改善に継続的に関心を持っています。",
    },
    blobUrl: null,
  },
];

// ─── Experiences ───
export const experiences = [
  {
    id: 1,
    title: { kr: "아이페이지온 (iPageOn)", jp: "iPageOn" },
    sub_title: { kr: "프론트엔드 개발자", jp: "フロントエンド開発者" },
    period: { kr: "2023.06 - 현재", jp: "2023.06 - 現在" },
    items: [
      { kr: "React, TypeScript 기반 통신 솔루션 및 산업용 IoT 솔루션 웹 애플리케이션 개발", jp: "React, TypeScriptベースの通信ソリューション及び産業用IoTソリューションWebアプリケーション開発" },
      { kr: "WebSocket 기반 실시간 데이터 통신 구현", jp: "WebSocketベースのリアルタイムデータ通信実装" },
      { kr: "ECharts를 활용한 데이터 시각화 대시보드 개발", jp: "EChartsを活用したデータ可視化ダッシュボード開発" },
      { kr: "코드 유지보수, 성능 최적화, UI/UX 개선 담당", jp: "コードメンテナンス、パフォーマンス最適化、UI/UX改善担当" },
    ],
    links: [] as { href: string; label: string }[],
    is_active: true, index: 1, skill_ids: [4, 5, 7, 21, 22, 23, 24, 25, 26, 28], category: "WORK",
  },
  {
    id: 2,
    title: { kr: "한국 소프트웨어 인재 개발원", jp: "韓国ソフトウェア人材開発院" },
    sub_title: { kr: "JAVA 개발자 양성과정 수료", jp: "JAVA開発者養成課程修了" },
    period: { kr: "2022.10 - 2023.04", jp: "2022.10 - 2023.04" },
    items: [
      { kr: "정부 지원 풀스택 개발 교육 과정 (6개월 집중)", jp: "政府支援フルスタック開発教育課程（6ヶ月集中）" },
      { kr: "HTML, CSS, JavaScript 웹 개발 기초부터 심화까지 학습", jp: "HTML, CSS, JavaScript Web開発の基礎から応用まで学習" },
      { kr: "팀 프로젝트를 통한 실전 개발 경험 습득", jp: "チームプロジェクトを通じた実践開発経験の習得" },
    ],
    links: [] as { href: string; label: string }[],
    is_active: false, index: 2, skill_ids: [1, 2, 3, 11], category: "WORK",
  },
  {
    id: 3,
    title: { kr: "일본 체류 (하마마츠 & 오사카)", jp: "日本滞在（浜松＆大阪）" },
    sub_title: { kr: "일본어 학습 및 게임 프로그래밍", jp: "日本語学習及びゲームプログラミング" },
    period: { kr: "2021.03 - 2022.10", jp: "2021.03 - 2022.10" },
    items: [
      { kr: "하마마츠 일본어 학교에서 일본어 집중 학습", jp: "浜松日本語学校での日本語集中学習" },
      { kr: "오사카 휴먼 아카데미 게임 프로그래밍학과 수학 (Unity, C#)", jp: "大阪ヒューマンアカデミー ゲームプログラミング学科修学（Unity, C#）" },
      { kr: "다문화 환경에서의 적응력 및 커뮤니케이션 능력 향상", jp: "多文化環境での適応力及びコミュニケーション能力の向上" },
    ],
    links: [] as { href: string; label: string }[],
    is_active: false, index: 3, skill_ids: [] as number[], category: "WORK",
  },
  {
    id: 4,
    title: "SiteDash",
    sub_title: { kr: "풀스택 웹 애플리케이션 (프로젝트 대시보드)", jp: "フルスタックWebアプリケーション（プロジェクトダッシュボード）" },
    period: { kr: "2025.05", jp: "2025.05" },
    items: [
      { kr: "React 19 + TypeScript 프론트엔드, Express.js 백엔드 개발", jp: "React 19 + TypeScriptフロントエンド、Express.jsバックエンド開発" },
      { kr: "Google OAuth 2.0 + JWT 인증 구현", jp: "Google OAuth 2.0 + JWT認証実装" },
      { kr: "FSD (Feature-Sliced Design) 아키텍처 적용", jp: "FSD（Feature-Sliced Design）アーキテクチャ適用" },
      { kr: "Framer Motion 인터랙티브 애니메이션 구현", jp: "Framer Motionインタラクティブアニメーション実装" },
    ],
    links: [{ href: "https://ggnu11.github.io/site-dash/", label: "Live Demo" }],
    is_active: true, index: 4, skill_ids: [4, 5, 7, 9, 16, 17, 19, 23, 25, 28], category: "PROJECT",
  },
  {
    id: 5,
    title: "NoteSnap",
    sub_title: { kr: "텍스트 파일 요약 웹 애플리케이션", jp: "テキストファイル要約Webアプリケーション" },
    period: { kr: "2025.04", jp: "2025.04" },
    items: [
      { kr: "업로드된 텍스트 파일에서 핵심 문장을 추출하는 인브라우저 요약 앱", jp: "アップロードされたテキストファイルから核心文を抽出するインブラウザ要約アプリ" },
      { kr: "외부 AI API 없이 브라우저 내에서 동작", jp: "外部AI APIなしでブラウザ内で動作" },
      { kr: "Firebase Hosting + GitHub Actions CI/CD 파이프라인 구축", jp: "Firebase Hosting + GitHub Actions CI/CDパイプライン構築" },
    ],
    links: [
      { href: "https://notesnap-6966c.web.app", label: "Live Demo" },
      { href: "https://github.com/ggnu11/notesnap", label: "GitHub" },
    ],
    is_active: false, index: 5, skill_ids: [4, 5, 7, 13, 14, 15], category: "PROJECT",
  },
  {
    id: 6,
    title: "ABC Company Site",
    sub_title: { kr: "풀스택 웹 애플리케이션 (회사 소개 사이트)", jp: "フルスタックWebアプリケーション（会社紹介サイト）" },
    period: { kr: "2025.01", jp: "2025.01" },
    items: [
      { kr: "React 프론트엔드 + Express.js RESTful API 백엔드", jp: "Reactフロントエンド + Express.js RESTful APIバックエンド" },
      { kr: "MongoDB Atlas 클라우드 데이터베이스 연동", jp: "MongoDB Atlasクラウドデータベース連携" },
      { kr: "JWT 인증 및 CORS 보안 구현", jp: "JWT認証及びCORSセキュリティ実装" },
      { kr: "Netlify(프론트) + Render(백엔드) 배포 아키텍처", jp: "Netlify（フロント）+ Render（バックエンド）デプロイアーキテクチャ" },
    ],
    links: [{ href: "https://abc-company1216.netlify.app", label: "Live Demo" }],
    is_active: false, index: 6, skill_ids: [5, 7, 8, 16, 17, 18, 27, 28], category: "PROJECT",
  },
];

// ─── Projects ───
export const projects = [
  {
    id: 1, title: "<em>SiteDash</em>",
    sub_title: { kr: "React 19 + Express.js 풀스택 프로젝트 대시보드", jp: "React 19 + Express.jsフルスタックプロジェクトダッシュボード" },
    period: "2025.05", member: "Solo Project", skills: [] as string[],
    links: [{ href: "https://ggnu11.github.io/site-dash/", label: "Live Demo" }],
    skill_ids: [4, 5, 7, 9, 16, 17, 19, 23, 25, 28], row_number: 1,
    items: [
      { id: 1, title: { kr: "인증 및 아키텍처", jp: "認証及びアーキテクチャ" }, content: [
        { kr: "Google OAuth 2.0 + JWT 토큰 기반 인증 시스템 구현", jp: "Google OAuth 2.0 + JWTトークンベースの認証システム実装" },
        { kr: "FSD (Feature-Sliced Design) 아키텍처로 확장 가능한 구조 설계", jp: "FSD（Feature-Sliced Design）アーキテクチャで拡張可能な構造設計" },
        { kr: "Supabase PostgreSQL 데이터베이스 연동", jp: "Supabase PostgreSQLデータベース連携" },
      ], projectId: 1, blobUrl: null, row_number: 1, image_ratio: null },
      { id: 2, title: { kr: "UI/UX 및 배포", jp: "UI/UX及びデプロイ" }, content: [
        { kr: "Framer Motion 인터랙티브 애니메이션 구현", jp: "Framer Motionインタラクティブアニメーション実装" },
        { kr: "shadcn/ui + Tailwind CSS 반응형 디자인", jp: "shadcn/ui + Tailwind CSSレスポンシブデザイン" },
        { kr: "Frontend: GitHub Pages / Backend: Railway 배포", jp: "Frontend: GitHub Pages / Backend: Railwayデプロイ" },
      ], projectId: 1, blobUrl: null, row_number: 2, image_ratio: null },
    ],
  },
  {
    id: 2, title: "<em>NoteSnap</em>",
    sub_title: { kr: "외부 AI 없이 브라우저에서 동작하는 텍스트 요약 앱", jp: "外部AIなしでブラウザで動作するテキスト要約アプリ" },
    period: "2025.04", member: "Solo Project", skills: [] as string[],
    links: [
      { href: "https://notesnap-6966c.web.app", label: "Live Demo" },
      { href: "https://github.com/ggnu11/notesnap", label: "GitHub" },
    ],
    skill_ids: [4, 5, 7, 13, 14, 15], row_number: 2,
    items: [
      { id: 3, title: { kr: "핵심 기능", jp: "コア機能" }, content: [
        { kr: "텍스트 파일 업로드 → 핵심 문장 자동 추출", jp: "テキストファイルアップロード → 核心文自動抽出" },
        { kr: "외부 AI API/GPT 없이 인브라우저에서 완전 동작", jp: "外部AI API/GPTなしでインブラウザで完全動作" },
        { kr: "깔끔하고 직관적인 UI 설계", jp: "クリーンで直感的なUI設計" },
      ], projectId: 2, blobUrl: null, row_number: 1, image_ratio: null },
      { id: 4, title: { kr: "배포 파이프라인", jp: "デプロイパイプライン" }, content: [
        { kr: "Firebase Hosting으로 정적 파일 배포", jp: "Firebase Hostingで静的ファイルデプロイ" },
        { kr: "GitHub Actions CI/CD 파이프라인 구축", jp: "GitHub Actions CI/CDパイプライン構築" },
      ], projectId: 2, blobUrl: null, row_number: 2, image_ratio: null },
    ],
  },
  {
    id: 3, title: "ABC <em>Company</em> Site",
    sub_title: { kr: "모던 웹 기술 기반 풀스택 회사 소개 웹사이트", jp: "モダンWeb技術ベースのフルスタック会社紹介ウェブサイト" },
    period: "2025.01", member: "Solo Project", skills: [] as string[],
    links: [{ href: "https://abc-company1216.netlify.app", label: "Live Demo" }],
    skill_ids: [5, 7, 8, 16, 17, 18, 27, 28], row_number: 3,
    items: [
      { id: 5, title: { kr: "풀스택 구조", jp: "フルスタック構造" }, content: [
        { kr: "React 반응형 UI/UX 프론트엔드", jp: "ReactレスポンシブUI/UXフロントエンド" },
        { kr: "Express.js RESTful API 백엔드", jp: "Express.js RESTful APIバックエンド" },
        { kr: "MongoDB Atlas 클라우드 데이터베이스", jp: "MongoDB Atlasクラウドデータベース" },
      ], projectId: 3, blobUrl: null, row_number: 1, image_ratio: null },
      { id: 6, title: { kr: "보안 및 배포", jp: "セキュリティ及びデプロイ" }, content: [
        { kr: "JWT 인증 + CORS 보안 설정", jp: "JWT認証 + CORSセキュリティ設定" },
        { kr: "Mongoose ODM을 활용한 스키마 관리", jp: "Mongoose ODMを活用したスキーマ管理" },
        { kr: "Netlify(프론트) + Render(백엔드) 배포", jp: "Netlify（フロント）+ Render（バックエンド）デプロイ" },
      ], projectId: 3, blobUrl: null, row_number: 2, image_ratio: null },
    ],
  },
  {
    id: 4, title: "Dev <em>Portfolio</em>",
    sub_title: { kr: "Next.js 14 기반 개인 포트폴리오 웹사이트", jp: "Next.js 14ベースの個人ポートフォリオウェブサイト" },
    period: { kr: "2025.03 - 현재", jp: "2025.03 - 現在" }, member: "Solo Project", skills: [] as string[],
    links: [{ href: "https://github.com/ggnu11", label: "GitHub" }],
    skill_ids: [4, 5, 6, 7, 9], row_number: 4,
    items: [
      { id: 7, title: { kr: "프론트엔드", jp: "フロントエンド" }, content: [
        { kr: "Next.js 14 App Router + React 18 서버/클라이언트 컴포넌트", jp: "Next.js 14 App Router + React 18 サーバー/クライアントコンポーネント" },
        { kr: "Framer Motion 기반 SVG 초성 애니메이션 (ㅊㅇㅎ)", jp: "Framer MotionベースSVG初声アニメーション（ㅊㅇㅎ）" },
        { kr: "한국어/일본어 클라이언트 사이드 i18n", jp: "韓国語/日本語クライアントサイドi18n" },
        { kr: "다크모드/라이트모드 자동 전환", jp: "ダークモード/ライトモード自動切替" },
      ], projectId: 4, blobUrl: null, row_number: 1, image_ratio: null },
      { id: 8, title: { kr: "백엔드 & 인프라", jp: "バックエンド＆インフラ" }, content: [
        { kr: "정적 데이터 기반 서버 컴포넌트 아키텍처", jp: "静的データベースサーバーコンポーネントアーキテクチャ" },
        { kr: "Intercepting Routes를 활용한 프로젝트 모달", jp: "Intercepting Routesを活用したプロジェクトモーダル" },
      ], projectId: 4, blobUrl: null, row_number: 2, image_ratio: null },
    ],
  },
];

// ─── Blogs ───
export const blogs = [
  { id: 1, title: "React Server Components 이해하기", date: "2024.01.15", forwardLink: "https://velog.io", bgImageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80" },
  { id: 2, title: "TypeScript로 더 나은 DX 만들기", date: "2023.11.20", forwardLink: "https://velog.io", bgImageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=80" },
  { id: 3, title: "Framer Motion으로 애니메이션 구현하기", date: "2023.09.05", forwardLink: "https://velog.io", bgImageUrl: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=600&q=80" },
  { id: 4, title: "WebSocket 실시간 통신 구축 가이드", date: "2024.03.12", forwardLink: "https://velog.io", bgImageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&q=80" },
  { id: 5, title: "ECharts로 데이터 시각화하기", date: "2024.05.28", forwardLink: "https://velog.io", bgImageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
  { id: 6, title: "Next.js App Router 심층 분석", date: "2024.02.10", forwardLink: "https://velog.io", bgImageUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=600&q=80" },
];

// ─── Education ───
export const educations = [
  { id: 1, title: { kr: "서울 사이버대학교", jp: "ソウルサイバー大学" }, sub_title: { kr: "컴퓨터공학 전공", jp: "コンピュータ工学専攻" }, period: "2021 - 2025", items: [] as I18nText[], category: "EDUCATION" },
  { id: 2, title: { kr: "오사카 휴먼 아카데미", jp: "大阪ヒューマンアカデミー" }, sub_title: { kr: "게임 프로그래밍학과", jp: "ゲームプログラミング学科" }, period: "2022.01 - 2022.10", items: [{ kr: "Unity, C# 기반 게임 프로그래밍 학습", jp: "Unity, C#ベースのゲームプログラミング学習" }], category: "EDUCATION" },
  { id: 3, title: { kr: "하마마츠 일본어 학교", jp: "浜松日本語学校" }, sub_title: { kr: "일본어 집중 학습", jp: "日本語集中学習" }, period: "2021.03 - 2021.12", items: [] as I18nText[], category: "EDUCATION" },
  { id: 4, title: { kr: "정보처리기사", jp: "情報処理技師" }, sub_title: { kr: "한국산업인력공단", jp: "韓国産業人力公団" }, period: { kr: "2025.09 (예정)", jp: "2025.09（予定）" }, items: [] as I18nText[], category: "CERTIFICATION" },
  { id: 5, title: "SQL Developer (SQLD)", sub_title: { kr: "한국데이터산업진흥원", jp: "韓国データ産業振興院" }, period: { kr: "2025.06 (예정)", jp: "2025.06（予定）" }, items: [] as I18nText[], category: "CERTIFICATION" },
  { id: 6, title: "JLPT N2", sub_title: { kr: "일본어능력시험", jp: "日本語能力試験" }, period: "2022.01", items: [] as I18nText[], category: "CERTIFICATION" },
  { id: 7, title: "JLPT N3", sub_title: { kr: "일본어능력시험", jp: "日本語能力試験" }, period: "2021.08", items: [] as I18nText[], category: "CERTIFICATION" },
];
