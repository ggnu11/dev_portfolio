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
      { kr: "통신 솔루션 및 산업용 IoT 모니터링 시스템 프론트엔드 단독 개발 (10개+ 프로젝트 병행)", jp: "通信ソリューション及び産業用IoTモニタリングシステムフロントエンド単独開発（10個以上プロジェクト並行）" },
      { kr: "WebSocket(STOMP) 기반 실시간 장비 관제 시스템 구축 및 운영", jp: "WebSocket（STOMP）ベースのリアルタイム設備監視システム構築及び運用" },
      { kr: "3만 건 이상 알람 데이터의 렌더링 병목 해결 및 대용량 데이터 처리 최적화", jp: "3万件以上のアラームデータのレンダリングボトルネック解決及び大容量データ処理最適化" },
      { kr: "12단계 대규모 기술 스택 마이그레이션 설계·실행 (419파일, 코드 11,000줄+ 감소)", jp: "12段階の大規模技術スタックマイグレーション設計・実行（419ファイル、コード11,000行以上削減）" },
      { kr: "빌드 시간 6배 개선 (Webpack 40초 → Vite 6.7초), 상용 라이브러리 완전 제거로 번들 크기 대폭 감소", jp: "ビルド時間6倍改善（Webpack 40秒→Vite 6.7秒）、商用ライブラリ完全除去によるバンドルサイズ大幅削減" },
      { kr: "VuePress 기반 운영 매뉴얼 6건 작성 및 프로젝트 기술 문서화", jp: "VuePressベースの運用マニュアル6件作成及びプロジェクト技術文書化" },
    ],
    links: [] as { href: string; label: string }[],
    is_active: true, index: 1, skill_ids: [4, 5, 7, 13, 21, 22, 23, 24, 25, 26, 28], category: "WORK",
  },
  {
    id: 2,
    title: { kr: "국비 지원 풀스택 개발 과정", jp: "国費支援フルスタック開発課程" },
    sub_title: { kr: "한국 소프트웨어 인재 개발원 · JAVA 개발자 양성과정 수료", jp: "韓国ソフトウェア人材開発院 · JAVA開発者養成課程修了" },
    period: { kr: "2022.12 - 2023.05", jp: "2022.12 - 2023.05" },
    items: [
      { kr: "6개월간의 국비 IT 교육을 통해 웹 개발을 본격적으로 시작", jp: "6ヶ月間の国費IT教育を通じてWeb開発を本格的に開始" },
      { kr: "팀 프로젝트에서 실시간 경매 시스템 핵심 기능 개발 담당, 우수상 수상", jp: "チームプロジェクトでリアルタイムオークションシステムの核心機能開発担当、優秀賞受賞" },
      { kr: "WebSocket(STOMP) 기반 실시간 입찰 시스템 설계 및 구현 경험", jp: "WebSocket（STOMP）ベースのリアルタイム入札システム設計及び実装経験" },
    ],
    links: [] as { href: string; label: string }[],
    is_active: false, index: 2, skill_ids: [1, 2, 3, 11], category: "WORK",
  },
  {
    id: 3,
    title: { kr: "일본 체류 (하마마츠 & 오사카)", jp: "日本滞在（浜松＆大阪）" },
    sub_title: { kr: "일본어 학습 및 게임 프로그래밍", jp: "日本語学習及びゲームプログラミング" },
    period: { kr: "2021.03 - 2022.09", jp: "2021.03 - 2022.09" },
    items: [
      { kr: "하마마츠 일본어 학교에서 일본어 집중 학습 (JLPT N2 취득)", jp: "浜松日本語学校での日本語集中学習（JLPT N2取得）" },
      { kr: "오사카 휴먼 아카데미 게임 프로그래밍학과 수학 (Unity, C#) — 중퇴", jp: "大阪ヒューマンアカデミー ゲームプログラミング学科修学（Unity, C#）— 中退" },
      { kr: "다문화 환경에서의 적응력 및 커뮤니케이션 능력 향상", jp: "多文化環境での適応力及びコミュニケーション能力の向上" },
    ],
    links: [] as { href: string; label: string }[],
    is_active: false, index: 3, skill_ids: [] as number[], category: "WORK",
  },
  {
    id: 4,
    title: { kr: "통신 장비 실시간 관제 시스템 (EMS)", jp: "通信設備リアルタイム監視システム（EMS）" },
    sub_title: { kr: "프론트엔드 단독 개발 · 아이페이지온", jp: "フロントエンド単独開発 · iPageOn" },
    period: { kr: "2023.09 - 현재", jp: "2023.09 - 現在" },
    items: [
      { kr: "수천 대 통신 장비의 실시간 모니터링·관제를 위한 대규모 EMS 프론트엔드 구축", jp: "数千台の通信設備のリアルタイムモニタリング・管制のための大規模EMSフロントエンド構築" },
      { kr: "WebSocket(STOMP) 15개+ 토픽 구독으로 알람·차트·장비 상태 실시간 스트리밍 구현", jp: "WebSocket（STOMP）15個以上のトピック購読でアラーム・チャート・設備状態リアルタイムストリーミング実装" },
      { kr: "3만 건 알람 데이터 렌더링 병목을 Infinite Scroll 커스텀 및 React.memo 최적화로 해결", jp: "3万件アラームデータのレンダリングボトルネックをInfinite Scrollカスタム及びReact.memo最適化で解決" },
      { kr: "인수시험 100% 통과로 상용 서비스 안정화 달성", jp: "受入試験100%通過で商用サービス安定化達成" },
    ],
    links: [] as { href: string; label: string }[],
    is_active: true, index: 4, skill_ids: [4, 5, 21, 22, 26, 28], category: "PROJECT",
  },
  {
    id: 5,
    title: { kr: "EMS 프론트엔드 대규모 기술 스택 마이그레이션", jp: "EMSフロントエンド大規模技術スタックマイグレーション" },
    sub_title: { kr: "12단계 체계적 마이그레이션 설계·실행 · 아이페이지온", jp: "12段階体系的マイグレーション設計・実行 · iPageOn" },
    period: "2025.02 - 2025.06",
    items: [
      { kr: "CRA 지원 종료, Recoil 유지보수 중단 등 레거시 기술 부채 해소를 위한 전면 마이그레이션", jp: "CRAサポート終了、Recoilメンテナンス中断等レガシー技術負債解消のための全面マイグレーション" },
      { kr: "CRA → Vite 전환으로 빌드 시간 40초 → 6.7초 (6배 개선)", jp: "CRA→Vite転換でビルド時間40秒→6.7秒（6倍改善）" },
      { kr: "KendoReact 50개 파일을 shadcn/ui + @tanstack/react-virtual 커스텀 컴포넌트로 전환, 상용 라이브러리 완전 제거", jp: "KendoReact 50ファイルをshadcn/ui + @tanstack/react-virtualカスタムコンポーネントに転換、商用ライブラリ完全除去" },
      { kr: "419파일 리팩토링, 코드 11,000줄+ 감소로 유지보수성·확장성 대폭 향상", jp: "419ファイルリファクタリング、コード11,000行以上削減でメンテナンス性・拡張性大幅向上" },
    ],
    links: [] as { href: string; label: string }[],
    is_active: false, index: 5, skill_ids: [4, 5, 7, 13, 22, 23, 25], category: "PROJECT",
  },
  {
    id: 6,
    title: "SiteDash",
    sub_title: { kr: "풀스택 웹 애플리케이션 (프로젝트 대시보드)", jp: "フルスタックWebアプリケーション（プロジェクトダッシュボード）" },
    period: "2025.06 - 2025.12",
    items: [
      { kr: "회사 프로젝트 관리의 불편함을 해소하기 위해 직접 기획·개발한 사내 도구", jp: "社内プロジェクト管理の不便を解消するため自ら企画・開発した社内ツール" },
      { kr: "Google OAuth 2.0 + JWT 인증 및 FSD 아키텍처 적용", jp: "Google OAuth 2.0 + JWT認証及びFSDアーキテクチャ適用" },
      { kr: "Framer Motion 인터랙티브 캐러셀 UI 구현", jp: "Framer MotionインタラクティブカルーセルUI実装" },
      { kr: "GitHub Pages + Railway 배포 아키텍처 구축", jp: "GitHub Pages + Railwayデプロイアーキテクチャ構築" },
    ],
    links: [{ href: "https://ggnu11.github.io/site-dash/", label: "Live Demo" }],
    is_active: true, index: 6, skill_ids: [4, 5, 7, 9, 16, 17, 19, 23, 25, 28], category: "PROJECT",
  },
  {
    id: 7,
    title: "My Recipe",
    sub_title: { kr: "개인 요리 레시피 관리 웹 애플리케이션", jp: "個人料理レシピ管理Webアプリケーション" },
    period: { kr: "2026.05 - 현재", jp: "2026.05 - 現在" },
    items: [
      { kr: "Pinterest 스타일 UI/UX 디자인을 참고한 시네마틱 씬 전환 구현", jp: "PinterestスタイルUI/UXデザインを参考にしたシネマティックシーン遷移実装" },
      { kr: "Framer Motion 기반 트레인 애니메이션 및 인터랙티브 모션", jp: "Framer Motionベースのトレインアニメーション及びインタラクティブモーション" },
      { kr: "카테고리별 레시피 관리 (한식, 중식, 양식)", jp: "カテゴリ別レシピ管理（韓食、中華、洋食）" },
      { kr: "Next.js 16 App Router + React 19 최신 스택 적용", jp: "Next.js 16 App Router + React 19最新スタック適用" },
    ],
    links: [{ href: "https://my-recipe-self.vercel.app/", label: "Live Demo" }],
    is_active: true, index: 7, skill_ids: [4, 5, 6, 7, 9, 19, 23], category: "PROJECT",
  },
];

// ─── Projects ───
export const projects = [
  {
    id: 1, title: "통신 장비 <em>실시간 관제</em> 시스템",
    sub_title: { kr: "WebSocket 기반 대규모 EMS 프론트엔드 단독 개발", jp: "WebSocketベース大規模EMSフロントエンド単独開発" },
    period: { kr: "2023.09 - 현재", jp: "2023.09 - 現在" }, member: "Frontend Solo", skills: [] as string[],
    links: [] as { href: string; label: string }[],
    skill_ids: [4, 5, 21, 22, 26, 28], row_number: 1,
    items: [
      { id: 1, title: { kr: "실시간 모니터링 시스템", jp: "リアルタイムモニタリングシステム" }, content: [
        { kr: "WebSocket(STOMP) 15개+ 토픽 구독으로 알람·차트·장비 상태 실시간 스트리밍", jp: "WebSocket（STOMP）15個以上トピック購読でアラーム・チャート・設備状態リアルタイムストリーミング" },
        { kr: "ECharts 기반 CPU, Memory, Network, Disk 사용률 실시간 시각화 대시보드", jp: "EChartsベースのCPU・Memory・Network・Disk使用率リアルタイム可視化ダッシュボード" },
        { kr: "Severity 기반 알람 분류 및 실시간 알림 시스템 구현", jp: "Severityベースのアラーム分類及びリアルタイム通知システム実装" },
        { kr: "EMS 절체 시 WebSocket 자동 재연결 기능 개발", jp: "EMS切替時WebSocket自動再接続機能開発" },
      ], projectId: 1, blobUrl: null, row_number: 1, image_ratio: null },
      { id: 2, title: { kr: "성능 최적화 및 안정화", jp: "パフォーマンス最適化及び安定化" }, content: [
        { kr: "3만 건 알람 데이터 렌더링 병목을 Infinite Scroll 커스텀 구현으로 해결", jp: "3万件アラームデータのレンダリングボトルネックをInfinite Scrollカスタム実装で解決" },
        { kr: "React.memo / useMemo / useCallback 적용으로 불필요 렌더링 제거", jp: "React.memo / useMemo / useCallback適用で不必要なレンダリング除去" },
        { kr: "react-tooltip → createPortal 기반 커스텀 툴팁으로 렌더링 성능 최적화", jp: "react-tooltip→createPortalベースカスタムツールチップでレンダリング性能最適化" },
        { kr: "인수시험 100% 통과로 상용 서비스 안정화 달성", jp: "受入試験100%通過で商用サービス安定化達成" },
      ], projectId: 1, blobUrl: null, row_number: 2, image_ratio: null },
    ],
  },
  {
    id: 2, title: "EMS <em>대규모</em> 마이그레이션",
    sub_title: { kr: "12단계 체계적 기술 스택 전환 (419파일, -11,389줄)", jp: "12段階体系的技術スタック転換（419ファイル、-11,389行）" },
    period: "2025.02 - 2025.06", member: "Frontend Solo", skills: [] as string[],
    links: [] as { href: string; label: string }[],
    skill_ids: [4, 5, 7, 13, 22, 23, 25], row_number: 2,
    items: [
      { id: 3, title: { kr: "빌드 및 상태관리 전환", jp: "ビルド及び状態管理転換" }, content: [
        { kr: "CRA → Vite 전환으로 빌드 시간 40초 → 6.7초 (6배 개선)", jp: "CRA→Vite転換でビルド時間40秒→6.7秒（6倍改善）" },
        { kr: "Recoil → Zustand 전환 (172파일, useEffect 무한루프 해결 포함)", jp: "Recoil→Zustand転換（172ファイル、useEffect無限ループ解決含む）" },
        { kr: "React Query 3 → TanStack Query v5 마이그레이션 (150파일)", jp: "React Query 3→TanStack Query v5マイグレーション（150ファイル）" },
        { kr: "ESLint + Prettier → Biome 통합 (3개 설정 → 1개로 단순화)", jp: "ESLint + Prettier→Biome統合（3設定→1つに単純化）" },
      ], projectId: 2, blobUrl: null, row_number: 1, image_ratio: null },
      { id: 4, title: { kr: "UI 라이브러리 및 스타일링 전환", jp: "UIライブラリ及びスタイリング転換" }, content: [
        { kr: "KendoReact 50개 파일 → shadcn/ui + @tanstack/react-virtual 커스텀 컴포넌트 전환", jp: "KendoReact 50ファイル→shadcn/ui + @tanstack/react-virtualカスタムコンポーネント転換" },
        { kr: "styled-components → Tailwind CSS v4 전환 (177파일)", jp: "styled-components→Tailwind CSS v4転換（177ファイル）" },
        { kr: "Yup → Zod 전환으로 TypeScript 타입 추론 자동화", jp: "Yup→Zod転換でTypeScript型推論自動化" },
        { kr: "상용 라이브러리 완전 제거로 라이센스 비용 절감 및 번들 크기 대폭 감소", jp: "商用ライブラリ完全除去でライセンスコスト削減及びバンドルサイズ大幅削減" },
      ], projectId: 2, blobUrl: null, row_number: 2, image_ratio: null },
    ],
  },
  {
    id: 3, title: "<em>SiteDash</em>",
    sub_title: { kr: "React 19 + Express.js 풀스택 프로젝트 대시보드", jp: "React 19 + Express.jsフルスタックプロジェクトダッシュボード" },
    period: "2025.06 - 2025.12", member: "Solo Project", skills: [] as string[],
    links: [{ href: "https://ggnu11.github.io/site-dash/", label: "Live Demo" }],
    skill_ids: [4, 5, 7, 9, 16, 17, 19, 23, 25, 28], row_number: 3,
    items: [
      { id: 5, title: { kr: "인증 및 아키텍처", jp: "認証及びアーキテクチャ" }, content: [
        { kr: "Google OAuth 2.0 + JWT 토큰 기반 인증 시스템 구현", jp: "Google OAuth 2.0 + JWTトークンベースの認証システム実装" },
        { kr: "FSD (Feature-Sliced Design) 아키텍처로 확장 가능한 구조 설계", jp: "FSD（Feature-Sliced Design）アーキテクチャで拡張可能な構造設計" },
        { kr: "Supabase PostgreSQL 데이터베이스 연동", jp: "Supabase PostgreSQLデータベース連携" },
        { kr: "CORS 설정을 통한 안전한 프론트엔드-백엔드 통신", jp: "CORS設定による安全なフロントエンド-バックエンド通信" },
      ], projectId: 3, blobUrl: null, row_number: 1, image_ratio: null },
      { id: 6, title: { kr: "UI/UX 및 배포", jp: "UI/UX及びデプロイ" }, content: [
        { kr: "Framer Motion 인터랙티브 애니메이션 구현", jp: "Framer Motionインタラクティブアニメーション実装" },
        { kr: "Zustand를 활용한 실시간 상태 관리", jp: "Zustandを活用したリアルタイム状態管理" },
        { kr: "shadcn/ui + Tailwind CSS 반응형 디자인", jp: "shadcn/ui + Tailwind CSSレスポンシブデザイン" },
        { kr: "Frontend: GitHub Pages / Backend: Railway 배포", jp: "Frontend: GitHub Pages / Backend: Railwayデプロイ" },
      ], projectId: 3, blobUrl: null, row_number: 2, image_ratio: null },
    ],
  },
  {
    id: 5, title: "My <em>Recipe</em>",
    sub_title: { kr: "Pinterest 스타일 개인 요리 레시피 관리 앱", jp: "Pinterestスタイル個人料理レシピ管理アプリ" },
    period: { kr: "2026.05 - 현재", jp: "2026.05 - 現在" }, member: "Solo Project", skills: [] as string[],
    links: [{ href: "https://my-recipe-self.vercel.app/", label: "Live Demo" }],
    skill_ids: [4, 5, 6, 7, 9, 19, 23], row_number: 4,
    items: [
      { id: 9, title: { kr: "UI/UX 및 모션", jp: "UI/UX及びモーション" }, content: [
        { kr: "Pinterest에서 영감을 받은 시네마틱 씬 전환 시스템 (SceneManager)", jp: "Pinterestからインスピレーションを得たシネマティックシーン遷移システム（SceneManager）" },
        { kr: "Framer Motion 트레인 애니메이션, 카드 호버/탭 인터랙션", jp: "Framer Motionトレインアニメーション、カードホバー/タップインタラクション" },
        { kr: "Lenis 기반 스무스 스크롤 및 필름 스타일 레이아웃", jp: "Lenisベースのスムーススクロール及びフィルムスタイルレイアウト" },
      ], projectId: 5, blobUrl: null, row_number: 1, image_ratio: null },
      { id: 10, title: { kr: "기능 및 구조", jp: "機能及び構造" }, content: [
        { kr: "카테고리별 레시피 관리 (한식, 중식, 양식)", jp: "カテゴリ別レシピ管理（韓食、中華、洋食）" },
        { kr: "Next.js 16 App Router + React 19 + Zustand 상태관리", jp: "Next.js 16 App Router + React 19 + Zustand状態管理" },
        { kr: "History API 기반 SPA 네비게이션 (브라우저 뒤로가기 지원)", jp: "History APIベースSPAナビゲーション（ブラウザバック対応）" },
      ], projectId: 5, blobUrl: null, row_number: 2, image_ratio: null },
    ],
  },
];


// ─── Education ───
export const educations = [
  { id: 1, title: { kr: "서울 사이버대학교", jp: "ソウルサイバー大学" }, sub_title: { kr: "컴퓨터공학 전공", jp: "コンピュータ工学専攻" }, period: "2021 - 2025", items: [{ kr: "재학생 대상 멘토·멘티 활동", jp: "在学生対象メンター・メンティー活動" }], category: "EDUCATION" },
  { id: 3, title: { kr: "하마마츠 일본어 학교", jp: "浜松日本語学校" }, sub_title: { kr: "일본어 집중 학습", jp: "日本語集中学習" }, period: "2021.03 - 2021.12", items: [] as I18nText[], category: "EDUCATION" },
  { id: 8, title: { kr: "한국 소프트웨어 인재 개발원", jp: "韓国ソフトウェア人材開発院" }, sub_title: { kr: "JAVA 개발자 양성과정 수료 (국비 IT 교육)", jp: "JAVA開発者養成課程修了（国費IT教育）" }, period: "2022.12 - 2023.05", items: [{ kr: "6개월 집중 풀스택 웹 개발 교육", jp: "6ヶ月集中フルスタックWeb開発教育" }], category: "EDUCATION" },
  { id: 4, title: { kr: "정보처리기사", jp: "情報処理技師" }, sub_title: { kr: "한국산업인력공단", jp: "韓国産業人力公団" }, period: { kr: "2025.09 (예정)", jp: "2025.09（予定）" }, items: [] as I18nText[], category: "CERTIFICATION" },
  { id: 5, title: "SQL Developer (SQLD)", sub_title: { kr: "한국데이터산업진흥원", jp: "韓国データ産業振興院" }, period: { kr: "2025.06 (예정)", jp: "2025.06（予定）" }, items: [] as I18nText[], category: "CERTIFICATION" },
  { id: 6, title: "JLPT N2", sub_title: { kr: "일본어능력시험", jp: "日本語能力試験" }, period: "2022.01", items: [] as I18nText[], category: "CERTIFICATION" },
  { id: 7, title: "JLPT N3", sub_title: { kr: "일본어능력시험", jp: "日本語能力試験" }, period: "2021.08", items: [] as I18nText[], category: "CERTIFICATION" },
];
