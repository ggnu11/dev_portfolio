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
  { id: 29, category: "FRONTEND_LIBRARY", items: [] as string[], item: "Styled Components", blobUrl: "/assets/styled-components.svg" },
  { id: 30, category: "FRONTEND_LIBRARY", items: [] as string[], item: "shadcn/ui", blobUrl: "/assets/shadcn-ui.svg" },
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
];

// ─── Intros ───
export const intros = [
  {
    id: 1,
    title: { kr: "실시간 관제 시스템", jp: "リアルタイム管制システム" },
    detail: {
      kr: "WebSocket(STOMP) 15개+ 토픽 기반 실시간 모니터링 시스템 설계·운영. 알람·차트·장비 상태를 끊김 없이 스트리밍하고, 절체(Failover) 시 자동 복구까지 구현합니다.",
      jp: "WebSocket（STOMP）15個以上のトピックベースのリアルタイムモニタリングシステム設計・運用。アラーム・チャート・設備状態を途切れなくストリーミングし、切替（Failover）時の自動復旧まで実装します。",
    },
    blobUrl: null,
  },
  {
    id: 2,
    title: { kr: "성능 최적화 · 레거시 현대화", jp: "パフォーマンス最適化・レガシー刷新" },
    detail: {
      kr: "3만 건 데이터 렌더링 최적화(API 50% 감소)부터 4년 레거시 12단계 마이그레이션(빌드 6배↑, -11,389줄)까지. 측정 가능한 수치로 개선을 증명합니다.",
      jp: "3万件データレンダリング最適化（API 50%削減）から4年レガシー12段階マイグレーション（ビルド6倍↑、-11,389行）まで。測定可能な数値で改善を証明します。",
    },
    blobUrl: null,
  },
  {
    id: 3,
    title: { kr: "운영 안정화 · 장애 대응", jp: "運用安定化・障害対応" },
    detail: {
      kr: "장애 분석 프로세스 정립으로 대응 시간 50% 단축. WebSocket 절체 자동 복구 설계, 웹 보안 강화, 인수시험 전건 100% 통과. 서비스를 멈추지 않는 것에 집중합니다.",
      jp: "障害分析プロセス確立で対応時間50%短縮。WebSocket切替自動復旧設計、Webセキュリティ強化、受入試験全件100%通過。サービスを止めないことに集中します。",
    },
    blobUrl: null,
  },
  {
    id: 4,
    title: { kr: "1인 풀사이클 · 문서화", jp: "1人フルサイクル・ドキュメント" },
    detail: {
      kr: "설계→개발→테스트→문서화→인수시험→장애 대응까지 1인 전담. VuePress 매뉴얼 6건, 기능 Wiki, 테스트케이스 구축으로 팀의 지식 자산을 남깁니다.",
      jp: "設計→開発→テスト→文書化→受入試験→障害対応まで1人専任。VuePresマニュアル6件、機能Wiki、テストケース構築でチームの知識資産を残します。",
    },
    blobUrl: null,
  },
];

// ─── Experiences (WORK only) ───
export const experiences = [
  {
    id: 1,
    title: { kr: "아이페이지온 (iPageOn)", jp: "iPageOn（アイページオン）" },
    sub_title: { kr: "UX솔루션팀 · 프론트엔드 엔지니어 (1인 전담)", jp: "UXソリューションチーム · フロントエンドエンジニア（1人専任）" },
    period: { kr: "2023.06 - 현재", jp: "2023.06 - 現在" },
    items: [
      { kr: "통신 관제 시스템 10개+ 프로젝트의 프론트엔드 설계·개발·운영·장애 대응을 1인으로 전담", jp: "通信管制システム10件以上プロジェクトのフロントエンド設計・開発・運用・障害対応を1人で専任" },
      { kr: "3만 건 실시간 데이터 렌더링 최적화 — React.memo + 가상 스크롤로 API 호출 50% 감소", jp: "3万件リアルタイムデータレンダリング最適化 — React.memo + 仮想スクロールでAPI呼び出し50%削減" },
      { kr: "WebSocket(STOMP) 15개+ 토픽 기반 관제 시스템 구축 + 절체(Failover) 자동 복구 설계", jp: "WebSocket（STOMP）15件以上トピックベース管制システム構築 + 切替（Failover）自動復旧設計" },
      { kr: "장애 분석 프로세스 정립 + WebSocket 재연결 설계로 대응 시간 50% 단축", jp: "障害分析プロセス確立 + WebSocket再接続設計で対応時間50%短縮" },
      { kr: "12단계 레거시 마이그레이션 주도 — 빌드 6배↑, 유료 라이선스 전면 제거, 코드 -11,389줄", jp: "12段階レガシーマイグレーション主導 — ビルド6倍↑、有料ライセンス全面除去、コード-11,389行" },
      { kr: "운영 매뉴얼 6건 + 테스트케이스 구축으로 KT 등 통신사 인수시험 전건 100% 통과", jp: "運用マニュアル6件 + テストケース構築でKT等通信社受入試験全件100%通過" },
      { kr: "백엔드 5명과 REST/WebSocket API 설계 협의 및 Mock 서버 자체 구축으로 독립 개발 환경 확보", jp: "バックエンド5名とREST/WebSocket API設計協議及びMockサーバー自体構築で独立開発環境確保" },
    ],
    links: [] as { href: string; label: string }[],
    is_active: true, index: 1,
    skill_ids: [4, 5, 7, 13, 21, 22, 23, 24, 25, 26, 28],
    category: "WORK",
  },
];

// ─── Projects ───
export type ProjectCategory = "COMPANY" | "PERSONAL";
export type ProjectTier = "FEATURED" | "CORE";

export const projects = [
  // ── Personal Projects ──
  {
    id: 5, title: "My <em>Recipe</em>", category: "PERSONAL" as ProjectCategory,
    sub_title: { kr: "Pinterest 스타일 개인 요리 레시피 관리 앱", jp: "Pinterestスタイル個人料理レシピ管理アプリ" },
    period: { kr: "2026.05 - 현재", jp: "2026.05 - 現在" }, member: "Solo Project", skills: [] as string[],
    links: [{ href: "https://my-recipe-self.vercel.app/", label: "Live Demo" }],
    skill_ids: [4, 5, 6, 7, 9, 19, 23], row_number: 1,
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
  // ── IPAGEON - Major Projects ──
  {
    id: 1, title: "실시간 통신 장비 <em>관제</em> 시스템", category: "COMPANY" as ProjectCategory, tier: "FEATURED" as ProjectTier,
    sub_title: { kr: "WebSocket 기반 대규모 EMS 프론트엔드 단독 개발 (800 commits)", jp: "WebSocketベース大規模EMSフロントエンド単独開発（800コミット）" },
    period: { kr: "2023.09 - 현재", jp: "2023.09 - 現在" }, member: "Frontend Solo", skills: [] as string[],
    links: [] as { href: string; label: string }[],
    skill_ids: [4, 5, 21, 22, 26, 28], row_number: 2,
    items: [
      { id: 1, title: { kr: "실시간 모니터링 시스템", jp: "リアルタイムモニタリングシステム" }, content: [
        { kr: "WebSocket(STOMP) 15개+ 토픽 구독으로 알람·차트·장비 상태 실시간 스트리밍", jp: "WebSocket（STOMP）15個以上トピック購読でアラーム・チャート・設備状態リアルタイムストリーミング" },
        { kr: "ECharts 기반 CPU, Memory, Network, Disk 사용률 실시간 시각화 대시보드", jp: "EChartsベースのCPU・Memory・Network・Disk使用率リアルタイム可視化ダッシュボード" },
        { kr: "EMS 절체(Failover) 시 WebSocket 자동 재연결 로직 설계·구현으로 서비스 안정성 확보", jp: "EMS切替（Failover）時WebSocket自動再接続ロジック設計・実装でサービス安定性確保" },
        { kr: "공통 WebSocket 구독 훅(useWebSocketSubscribe) 통합으로 코드 중복 제거", jp: "共通WebSocket購読フック（useWebSocketSubscribe）統合でコード重複除去" },
      ], projectId: 1, blobUrl: null, row_number: 1, image_ratio: null },
      { id: 2, title: { kr: "성능 최적화 및 안정화", jp: "パフォーマンス最適化及び安定化" }, content: [
        { kr: "3만 건 알람 데이터 렌더링 병목을 React.memo + Infinite Scroll 커스텀 구현으로 해결", jp: "3万件アラームデータのレンダリングボトルネックをReact.memo + Infinite Scrollカスタム実装で解決" },
        { kr: "React Query 캐싱 전략 개선으로 불필요 API 호출 약 50% 감소", jp: "React Queryキャッシング戦略改善で不要API呼び出し約50%削減" },
        { kr: "react-tooltip → createPortal 기반 커스텀 툴팁으로 렌더링 성능 최적화", jp: "react-tooltip→createPortalベースカスタムツールチップでレンダリング性能最適化" },
        { kr: "장애 분석 프로세스 정립으로 대응 시간 약 50% 단축, 인수시험 100% 통과", jp: "障害分析プロセス確立で対応時間約50%短縮、受入試験100%通過" },
      ], projectId: 1, blobUrl: null, row_number: 2, image_ratio: null },
    ],
  },
  {
    id: 2, title: "관제 시스템 <em>대규모</em> 현대화", category: "COMPANY" as ProjectCategory, tier: "FEATURED" as ProjectTier,
    sub_title: { kr: "12단계 체계적 기술 스택 전환 (419파일, -11,389줄)", jp: "12段階体系的技術スタック転換（419ファイル、-11,389行）" },
    period: "2025.02 - 2025.06", member: "Frontend Solo", skills: [] as string[],
    links: [] as { href: string; label: string }[],
    skill_ids: [4, 5, 7, 13, 22, 23, 25, 30], row_number: 3,
    items: [
      { id: 3, title: { kr: "빌드 및 상태관리 전환", jp: "ビルド及び状態管理転換" }, content: [
        { kr: "CRA → Vite 전환으로 빌드 시간 40초 → 6.7초 (6배 개선), 개발 서버 15초 → 1초 미만", jp: "CRA→Vite転換でビルド時間40秒→6.7秒（6倍改善）、開発サーバー15秒→1秒未満" },
        { kr: "Recoil → Zustand 전환 (172파일, useEffect 무한루프 해결 포함)", jp: "Recoil→Zustand転換（172ファイル、useEffect無限ループ解決含む）" },
        { kr: "React Query 3 → TanStack Query v5 마이그레이션 (150파일)", jp: "React Query 3→TanStack Query v5マイグレーション（150ファイル）" },
        { kr: "ESLint + Prettier → Biome 통합 (린트 속도 수십초 → 110ms)", jp: "ESLint + Prettier→Biome統合（リント速度数十秒→110ms）" },
      ], projectId: 2, blobUrl: null, row_number: 1, image_ratio: null },
      { id: 4, title: { kr: "UI 라이브러리 및 스타일링 전환", jp: "UIライブラリ及びスタイリング転換" }, content: [
        { kr: "KendoReact(유료) 전면 제거 → @tanstack/react-virtual 기반 커스텀 Table + shadcn/ui (50파일)", jp: "KendoReact（有料）全面除去→@tanstack/react-virtualベースカスタムTable + shadcn/ui（50ファイル）" },
        { kr: "styled-components → Tailwind CSS v4 전환 (177파일)", jp: "styled-components→Tailwind CSS v4転換（177ファイル）" },
        { kr: "Yup → Zod 전환으로 TypeScript 타입 추론 자동화", jp: "Yup→Zod転換でTypeScript型推論自動化" },
        { kr: "유료 라이선스 완전 제거로 라이센스 비용 절감 및 번들 크기 대폭 감소", jp: "有料ライセンス完全除去でライセンスコスト削減及びバンドルサイズ大幅削減" },
      ], projectId: 2, blobUrl: null, row_number: 2, image_ratio: null },
    ],
  },
  {
    id: 6, title: "메시징 플랫폼 <em>통합 관제</em> 시스템", category: "COMPANY" as ProjectCategory, tier: "FEATURED" as ProjectTier,
    sub_title: { kr: "다크모드·ReactFlow Call Flow·네트워크 스위치 모니터링 (1,670 commits)", jp: "ダークモード・ReactFlow Call Flow・ネットワークスイッチモニタリング（1,670コミット）" },
    period: "2023.11 - 2025.05", member: "Frontend Solo", skills: [] as string[],
    links: [] as { href: string; label: string }[],
    skill_ids: [4, 5, 21, 22, 28], row_number: 4,
    items: [
      { id: 20, title: { kr: "핵심 기능 개발", jp: "コア機能開発" }, content: [
        { kr: "ThemeProvider 기반 다크모드 전체 적용 (100건+ 커밋, 전 모듈 대응)", jp: "ThemeProviderベースのダークモード全面適用（100件以上コミット、全モジュール対応）" },
        { kr: "ReactFlow v11 기반 실시간 Call Flow 시각화 + BroadcastChannel 멀티윈도우 상태 공유", jp: "ReactFlow v11ベースのリアルタイムCall Flow可視化 + BroadcastChannelマルチウィンドウ状態共有" },
        { kr: "48포트 네트워크 스위치 모니터링 시스템 신규 개발 (Port/Fan/Power 상태 시각화)", jp: "48ポートネットワークスイッチモニタリングシステム新規開発（Port/Fan/Power状態可視化）" },
        { kr: "TheadTable(다중 행 헤더) 컴포넌트 신규 개발, 동적 colspan/rowspan 통계 모듈 고도화", jp: "TheadTable（多重行ヘッダー）コンポーネント新規開発、動的colspan/rowspan統計モジュール高度化" },
      ], projectId: 6, blobUrl: null, row_number: 1, image_ratio: null },
      { id: 21, title: { kr: "Dashboard 및 실시간 통신", jp: "ダッシュボード及びリアルタイム通信" }, content: [
        { kr: "트래픽 차트(RPS/CPS), 호스트 상세 WebSocket 재구독, CLI 인터페이스", jp: "トラフィックチャート（RPS/CPS）、ホスト詳細WebSocket再購読、CLIインターフェース" },
        { kr: "사업자 프리픽스 Virtual Scroll + 인라인 편집 동시 관리", jp: "事業者プレフィックスVirtual Scroll + インライン編集同時管理" },
        { kr: "README.md 외 5건 기술 문서 작성 (아키텍처, API, 라우팅, 공통 컴포넌트)", jp: "README.md他5件の技術文書作成（アーキテクチャ、API、ルーティング、共通コンポーネント）" },
      ], projectId: 6, blobUrl: null, row_number: 2, image_ratio: null },
    ],
  },
  {
    id: 3, title: "<em>SiteDash</em>", category: "PERSONAL" as ProjectCategory,
    sub_title: { kr: "React 19 + Express.js 풀스택 프로젝트 대시보드", jp: "React 19 + Express.jsフルスタックプロジェクトダッシュボード" },
    period: "2025.06 - 2025.12", member: "Solo Project", skills: [] as string[],
    links: [{ href: "https://ggnu11.github.io/site-dash/", label: "Live Demo" }],
    skill_ids: [4, 5, 7, 9, 16, 17, 19, 23, 25, 28, 30], row_number: 5,
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
    id: 18, title: "<em>NoteSnap</em>", category: "PERSONAL" as ProjectCategory,
    sub_title: { kr: "AI 없이 브라우저에서 동작하는 텍스트 파일 요약 웹앱", jp: "AI不要でブラウザ内で動作するテキストファイル要約Webアプリ" },
    period: "2025.04", member: "Solo Project", skills: [] as string[],
    links: [
      { href: "https://notesnap-6966c.web.app", label: "Live Demo" },
      { href: "https://github.com/ggnu11/notesnap", label: "GitHub" },
    ],
    skill_ids: [4, 5, 7, 13, 14, 15, 30], row_number: 6,
    items: [
      { id: 33, title: { kr: "주요 특징", jp: "主な特徴" }, content: [
        { kr: "텍스트 파일 업로드 시 주요 문장을 추출하여 요약 결과 제공", jp: "テキストファイルアップロード時に主要文を抽出し要約結果を提供" },
        { kr: "GPT/외부 AI API 없이 브라우저 내 자체 요약 알고리즘 구현", jp: "GPT/外部AI APIなしでブラウザ内自体要約アルゴリズム実装" },
        { kr: "Firebase Hosting 배포 + GitHub Actions CI/CD 자동 배포 파이프라인", jp: "Firebase Hostingデプロイ + GitHub Actions CI/CD自動デプロイパイプライン" },
        { kr: "shadcn/ui + Tailwind CSS 기반 깔끔하고 직관적인 UI", jp: "shadcn/ui + Tailwind CSSベースのクリーンで直感的なUI" },
      ], projectId: 18, blobUrl: null, row_number: 1, image_ratio: null },
    ],
  },
  {
    id: 20, title: "ABC <em>Company</em> Site", category: "PERSONAL" as ProjectCategory,
    sub_title: { kr: "React + Express.js 풀스택 회사 웹사이트", jp: "React + Express.jsフルスタック企業Webサイト" },
    period: "2025.01", member: "Solo Project", skills: [] as string[],
    links: [
      { href: "https://abc-company1216.netlify.app", label: "Live Demo" },
    ],
    skill_ids: [5, 7, 16, 17, 18, 28], row_number: 7,
    items: [
      { id: 34, title: { kr: "주요 특징", jp: "主な特徴" }, content: [
        { kr: "React + Express.js 풀스택 구조로 회사 소개 웹사이트 구현", jp: "React + Express.jsフルスタック構造で企業紹介Webサイト実装" },
        { kr: "MongoDB + Mongoose ODM 기반 데이터 관리 및 JWT 인증 구현", jp: "MongoDB + Mongoose ODMベースのデータ管理及びJWT認証実装" },
        { kr: "Tailwind CSS 반응형 디자인 + 모던 UI/UX 구현", jp: "Tailwind CSSレスポンシブデザイン + モダンUI/UX実装" },
        { kr: "Netlify(Frontend) + Render(Backend) 배포 환경 구성", jp: "Netlify（Frontend）+ Render（Backend）デプロイ環境構成" },
      ], projectId: 20, blobUrl: null, row_number: 1, image_ratio: null },
    ],
  },
  // ── IPAGEON - Additional Projects ──
  {
    id: 7, title: "통합 알람·Trace <em>모니터링</em> 시스템", category: "COMPANY" as ProjectCategory, tier: "CORE" as ProjectTier,
    sub_title: { kr: "WebSocket 실시간 통신·알람·Trace·CLI 전담 개발 (369 commits)", jp: "WebSocketリアルタイム通信・アラーム・Trace・CLI専任開発（369コミット）" },
    period: { kr: "2023.09 - 현재", jp: "2023.09 - 現在" }, member: "Frontend Solo", skills: [] as string[],
    links: [] as { href: string; label: string }[],
    skill_ids: [4, 5, 7, 13, 21, 22, 23, 25, 28, 29], row_number: 6,
    items: [
      { id: 22, title: { kr: "주요 업무", jp: "主な業務" }, content: [
        { kr: "useWebSocketSubscribe 통합 훅 설계, EMS 절체(Failover) 재연결 로직 구현", jp: "useWebSocketSubscribe統合フック設計、EMS切替（Failover）再接続ロジック実装" },
        { kr: "실시간 알람 수신/해제, 가청 로직, 다국어(i18next) 처리", jp: "リアルタイムアラーム受信/解除、可聴ロジック、多言語（i18next）処理" },
        { kr: "Trace Job 등록/History/Monitoring 전담, resize 기능 구현", jp: "Trace Job登録/History/Monitoring専任、resize機能実装" },
        { kr: "커스텀 Table 컴포넌트 (가상 스크롤, 정렬, 필터, 그룹 헤더) 50개 화면 적용", jp: "カスタムTableコンポーネント（仮想スクロール、ソート、フィルタ、グループヘッダー）50画面適用" },
      ], projectId: 7, blobUrl: null, row_number: 1, image_ratio: null },
    ],
  },
  {
    id: 13, title: "통신 고객 <em>프로비저닝</em> 관리 시스템", category: "COMPANY" as ProjectCategory, tier: "FEATURED" as ProjectTier,
    sub_title: { kr: "Customer/Contact 모듈 전체 신규 설계·구현 (93개 신규 파일)", jp: "Customer/Contactモジュール全体新規設計・実装（93個新規ファイル）" },
    period: "2025.07 - 2026.02", member: "Frontend Solo", skills: [] as string[],
    links: [] as { href: string; label: string }[],
    skill_ids: [4, 5, 8, 21, 22, 23, 24, 28], row_number: 7,
    items: [
      { id: 23, title: { kr: "주요 업무", jp: "主な業務" }, content: [
        { kr: "Customer 관리 모듈 전체 신규 개발 (CRUD, 필터링, 인라인 편집, Active 상태 토글)", jp: "Customer管理モジュール全体新規開発（CRUD、フィルタリング、インライン編集、Active状態トグル）" },
        { kr: "Contact 관리 모듈 전체 신규 개발 (목록/상세/생성/삭제, 이중 테이블 UI, 3-Depth 네비게이션)", jp: "Contact管理モジュール全体新規開発（一覧/詳細/作成/削除、二重テーブルUI、3-Depthナビゲーション）" },
        { kr: "React Hook Form + React Query + Zustand 3-Layer 상태 관리 패턴 적용", jp: "React Hook Form + React Query + Zustand 3-Layer状態管理パターン適用" },
        { kr: "전체 반응형 UI 개선 (Organization, Header, Activity Log, License, 권한별 레이아웃 분기)", jp: "全体レスポンシブUI改善（Organization、Header、Activity Log、License、権限別レイアウト分岐）" },
      ], projectId: 13, blobUrl: null, row_number: 1, image_ratio: null },
    ],
  },
  {
    id: 11, title: "관제 알람 대시보드 · <em>Overview</em> 시스템", category: "COMPANY" as ProjectCategory, tier: "CORE" as ProjectTier,
    sub_title: { kr: "알람 UI 전면 개선 및 Overview 모니터링 신규 개발 (147 commits)", jp: "アラームUI全面改善及びOverviewモニタリング新規開発（147コミット）" },
    period: "2024.01 - 2026.05", member: "Frontend Solo", skills: [] as string[],
    links: [] as { href: string; label: string }[],
    skill_ids: [4, 5, 21, 22, 28], row_number: 8,
    items: [
      { id: 24, title: { kr: "주요 업무", jp: "主な業務" }, content: [
        { kr: "알람 시스템 UI 전면 개선 — 등급별 해제/필터링, 가청 윈도우 팝업, 상세 정보 모달", jp: "アラームシステムUI全面改善 — 等級別解除/フィルタリング、可聴ウィンドウポップアップ、詳細情報モーダル" },
        { kr: "Overview 시스템 모니터링 UI 신규 개발 — 클러스터/호스트 시각화, 100개 색상 팔레트", jp: "Overviewシステムモニタリング UI新規開発 — クラスター/ホスト可視化、100個カラーパレット" },
        { kr: "Kendo Chart → ECharts 전면 마이그레이션", jp: "Kendo Chart→ECharts全面マイグレーション" },
        { kr: "WebSocket ping 기반 5초 타임아웃 감지, 자동 재연결 안정화", jp: "WebSocket pingベース5秒タイムアウト検知、自動再接続安定化" },
      ], projectId: 11, blobUrl: null, row_number: 1, image_ratio: null },
    ],
  },
  {
    id: 14, title: "통신 네트워크 장비 <em>통합 관제</em> 시스템", category: "COMPANY" as ProjectCategory, tier: "CORE" as ProjectTier,
    sub_title: { kr: "시스템 토폴로지·CLI 원격 제어·실시간 알람 프론트엔드 (400 commits)", jp: "システムトポロジー・CLI遠隔制御・リアルタイムアラームフロントエンド（400コミット）" },
    period: "2023.06 - 2025.06", member: "Frontend Solo", skills: [] as string[],
    links: [] as { href: string; label: string }[],
    skill_ids: [4, 5, 21, 22, 28, 29], row_number: 9,
    items: [
      { id: 25, title: { kr: "주요 업무", jp: "主な業務" }, content: [
        { kr: "호스트 이중화(Active-Standby/Active-Active) 상태별 동적 토폴로지 대시보드 구현", jp: "ホスト冗長化（Active-Standby/Active-Active）状態別動的トポロジーダッシュボード実装" },
        { kr: "CLI 원격 명령어 Tree 메뉴 구현 및 명령어 검색·실행·이력 관리 UX 개선", jp: "CLI遠隔コマンドTreeメニュー実装及びコマンド検索・実行・履歴管理UX改善" },
        { kr: "ECharts 기반 통계 차트 시스템 구현 (SIP/서비스/연동 통계, 조회 구분별 날짜 형식 동적 전환)", jp: "EChartsベース統計チャートシステム実装（SIP/サービス/連携統計、照会区分別日付形式動的切替）" },
        { kr: "사이드바 UI 리뉴얼, WebSocket 실시간 프로세스 블록 상태 시각화", jp: "サイドバーUIリニューアル、WebSocketリアルタイムプロセスブロック状態可視化" },
      ], projectId: 14, blobUrl: null, row_number: 1, image_ratio: null },
    ],
  },
  {
    id: 15, title: "호 처리·통계 <em>관제</em> 시스템", category: "COMPANY" as ProjectCategory, tier: "CORE" as ProjectTier,
    sub_title: { kr: "CLI 리팩토링·ECharts 통계 차트·호 처리이력·Trace 모듈 개발 (268 commits)", jp: "CLIリファクタリング・ECharts統計チャート・呼処理履歴・Traceモジュール開発（268コミット）" },
    period: "2023.07 - 2025.05", member: "Frontend Solo", skills: [] as string[],
    links: [] as { href: string; label: string }[],
    skill_ids: [4, 5, 21, 22, 28, 29], row_number: 10,
    items: [
      { id: 26, title: { kr: "주요 업무", jp: "主な業務" }, content: [
        { kr: "CLI 원격 명령어 모듈 전면 리팩토링 — Recoil 상태 최적화, 하드코딩 제거, 검색·이력 UX 개선", jp: "CLI遠隔コマンドモジュール全面リファクタリング — Recoil状態最適化、ハードコーディング除去、検索・履歴UX改善" },
        { kr: "호 처리이력/샘플링 데이터 복합 조회 UI 및 엑셀 내보내기 기능 구현", jp: "呼処理履歴/サンプリングデータ複合照会UI及びExcelエクスポート機能実装" },
        { kr: "Trace Job 감시·이력 필터링, Kendo UI Grid 커스텀 필터 셀 컴포넌트 공통 개발", jp: "Trace Job監視・履歴フィルタリング、Kendo UI Gridカスタムフィルタセルコンポーネント共通開発" },
        { kr: "ECharts 기반 다중 통계 차트 (SIP/서비스/PNSUP/INSUP), 조회 구분별 날짜 형식 동적 전환", jp: "EChartsベース多重統計チャート（SIP/サービス/PNSUP/INSUP）、照会区分別日付形式動的切替" },
      ], projectId: 15, blobUrl: null, row_number: 1, image_ratio: null },
    ],
  },
  {
    id: 19, title: "Core Network(<em>CSCF</em>) 관제 시스템", category: "COMPANY" as ProjectCategory, tier: "CORE" as ProjectTier,
    sub_title: { kr: "장애감시·통계·CLI·Trace·보고서·구성정보 전담 개발 (2,144 commits)", jp: "障害監視・統計・CLI・Trace・レポート・構成情報専任開発（2,144コミット）" },
    period: "2023.11 - 2026.03", member: "Frontend Solo", skills: [] as string[],
    links: [] as { href: string; label: string }[],
    skill_ids: [4, 5, 21, 22, 28, 29], row_number: 11,
    items: [
      { id: 27, title: { kr: "주요 업무", jp: "主な業務" }, content: [
        { kr: "장애감시 알람 virtual-scroll 적용, 보고서 모듈 신규 개발, MQTT 차트 연동", jp: "障害監視アラームvirtual-scroll適用、レポートモジュール新規開発、MQTTチャート連携" },
        { kr: "ReactFlow 기반 실시간 Call Flow 시각화, 48포트 네트워크 스위치 모니터링, 다크모드 전체 적용", jp: "ReactFlowベースリアルタイムCall Flow可視化、48ポートネットワークスイッチモニタリング、ダークモード全面適用" },
        { kr: "TheadTable(다중 행 헤더) 컴포넌트 신규 개발, 통계 차트 고도화, DatePicker 개선", jp: "TheadTable（多重行ヘッダー）コンポーネント新規開発、統計チャート高度化、DatePicker改善" },
        { kr: "프로젝트 전체 커밋의 약 49% 기여 (2,144 / ~4,400건)", jp: "プロジェクト全体コミットの約49%寄与（2,144 / ~4,400件）" },
      ], projectId: 19, blobUrl: null, row_number: 1, image_ratio: null },
    ],
  },
  {
    id: 16, title: "통신 장비 <em>통합 관제</em> 웹 시스템", category: "COMPANY" as ProjectCategory, tier: "CORE" as ProjectTier,
    sub_title: { kr: "다중 백엔드 프록시 연동 관제 프론트엔드 (212 commits)", jp: "多重バックエンドプロキシ連携管制フロントエンド（212コミット）" },
    period: "2023.06 - 2025.02", member: "Frontend Solo", skills: [] as string[],
    links: [] as { href: string; label: string }[],
    skill_ids: [4, 5, 21, 22, 28, 29], row_number: 12,
    items: [
      { id: 28, title: { kr: "주요 업무", jp: "主な業務" }, content: [
        { kr: "Trace 기능 필터링/정렬, Dashboard 차트 레이아웃, 호 트래픽 차트 폴링", jp: "Trace機能フィルタリング/ソート、ダッシュボードチャートレイアウト、呼トラフィックチャートポーリング" },
        { kr: "알람 상세 기능, CLI 명령어 실행/조회이력, 통계 API 연동", jp: "アラーム詳細機能、CLIコマンド実行/照会履歴、統計API連携" },
      ], projectId: 16, blobUrl: null, row_number: 1, image_ratio: null },
    ],
  },
  {
    id: 17, title: "VMS/ARS 장비 <em>관제</em> 시스템", category: "COMPANY" as ProjectCategory, tier: "CORE" as ProjectTier,
    sub_title: { kr: "음성사서함·ARS 장비 14개 모듈 관제 프론트엔드 (113 commits)", jp: "ボイスメール・ARS装備14モジュール管制フロントエンド（113コミット）" },
    period: "2023.09 - 2025.05", member: "Frontend Solo", skills: [] as string[],
    links: [] as { href: string; label: string }[],
    skill_ids: [4, 5, 21, 22, 28, 29], row_number: 13,
    items: [
      { id: 29, title: { kr: "주요 업무", jp: "主な業務" }, content: [
        { kr: "프로비저닝·호 처리이력·CLI·Trace·DB 모니터링 등 14개 메뉴 모듈 개발·유지보수", jp: "プロビジョニング・呼処理履歴・CLI・Trace・DBモニタリングなど14メニューモジュール開発・保守" },
        { kr: "WebSocket(STOMP) 실시간 알람·리소스 모니터링, 다국어(한/영) 지원", jp: "WebSocket（STOMP）リアルタイムアラーム・リソースモニタリング、多言語（韓/英）対応" },
      ], projectId: 17, blobUrl: null, row_number: 1, image_ratio: null },
    ],
  },
  {
    id: 9, title: "<em>HSS</em> Core Network 관제 시스템", category: "COMPANY" as ProjectCategory, tier: "CORE" as ProjectTier,
    sub_title: { kr: "통신 Core Network 장비(HSS) 관제 웹 프론트엔드", jp: "通信Core Network装備（HSS）管制Webフロントエンド" },
    period: "2023.08 - 2026.06", member: "Frontend Solo", skills: [] as string[],
    links: [] as { href: string; label: string }[],
    skill_ids: [4, 5, 21, 22, 28, 29], row_number: 14,
    items: [
      { id: 30, title: { kr: "주요 업무", jp: "主な業務" }, content: [
        { kr: "멀티 사이트 공통 플랫폼 기반 사이트별 커스터마이징 및 운영", jp: "マルチサイト共通プラットフォームベースのサイト別カスタマイズ及び運用" },
        { kr: "WebSocket 실시간 모니터링, CLI 원격 제어, 알람 관제, 통계 차트 개발", jp: "WebSocketリアルタイムモニタリング、CLI遠隔制御、アラーム管制、統計チャート開発" },
      ], projectId: 9, blobUrl: null, row_number: 1, image_ratio: null },
    ],
  },
  {
    id: 8, title: "<em>전술정보통신</em> 장비 관제 시스템", category: "COMPANY" as ProjectCategory, tier: "CORE" as ProjectTier,
    sub_title: { kr: "군용 전술통신 네트워크 장비 EMS 유지보수 및 CI/CD 정비", jp: "軍用戦術通信ネットワーク装備EMS保守及びCI/CD整備" },
    period: "2024.08", member: "Frontend Solo", skills: [] as string[],
    links: [] as { href: string; label: string }[],
    skill_ids: [4, 5, 21], row_number: 15,
    items: [
      { id: 31, title: { kr: "주요 업무", jp: "主な業務" }, content: [
        { kr: "GitLab CI/CD 파이프라인 정비 (Docker 빌드 환경 + RPM 패키징)", jp: "GitLab CI/CDパイプライン整備（Dockerビルド環境 + RPMパッケージング）" },
        { kr: "MobX + React 16 레거시 환경에서 버그 수정 및 UI 커스터마이징", jp: "MobX + React 16レガシー環境でバグ修正及びUIカスタマイズ" },
      ], projectId: 8, blobUrl: null, row_number: 1, image_ratio: null },
    ],
  },
  {
    id: 10, title: "통신 장비 관제 <em>보안·운영</em> 시스템", category: "COMPANY" as ProjectCategory, tier: "CORE" as ProjectTier,
    sub_title: { kr: "웹 보안 취약점 개선 및 CI/CD 운영 (Merge 권한 보유)", jp: "Webセキュリティ脆弱性改善及びCI/CD運用（Merge権限保有）" },
    period: "2023.10 - 2026.06", member: "Frontend Solo", skills: [] as string[],
    links: [] as { href: string; label: string }[],
    skill_ids: [4, 5, 28], row_number: 16,
    items: [
      { id: 32, title: { kr: "주요 업무", jp: "主な業務" }, content: [
        { kr: "웹 보안 취약점 분석·패치, CI/CD 파이프라인 설정, 코드 리뷰 및 Merge 운영", jp: "Webセキュリティ脆弱性分析・パッチ、CI/CDパイプライン設定、コードレビュー及びMerge運用" },
        { kr: "JWT 인증 기반 보안 강화, XSS/CSRF 대응, 쿠키 보안 속성 적용", jp: "JWT認証ベースのセキュリティ強化、XSS/CSRF対応、Cookie保安属性適用" },
      ], projectId: 10, blobUrl: null, row_number: 1, image_ratio: null },
    ],
  },
  {
    id: 12, title: "통합 <em>NMS</em> 관제 대시보드", category: "COMPANY" as ProjectCategory, tier: "CORE" as ProjectTier,
    sub_title: { kr: "IMS/MCPTT 통합 관제 서버 타임존 통합 개선 및 CI/CD", jp: "IMS/MCPTT統合管制サーバータイムゾーン統合改善及びCI/CD" },
    period: "2025.07", member: "Frontend Solo", skills: [] as string[],
    links: [] as { href: string; label: string }[],
    skill_ids: [4, 5, 21], row_number: 17,
    items: [
      { id: 33, title: { kr: "주요 업무", jp: "主な業務" }, content: [
        { kr: "서버 타임존 기반 시간 표시 통합 개선 (10개+ 컴포넌트 일괄 적용)", jp: "サーバータイムゾーンベース時間表示統合改善（10個以上コンポーネント一括適用）" },
        { kr: "MobX + React 16 레거시 환경, react-virtualized 가상 스크롤 활용", jp: "MobX + React 16レガシー環境、react-virtualized仮想スクロール活用" },
      ], projectId: 12, blobUrl: null, row_number: 1, image_ratio: null },
    ],
  },
];

// ─── Documentation & Quality ───
export const documentations: { id: number; title: I18nText; items: I18nText[] }[] = [
  {
    id: 1,
    title: { kr: "운영 매뉴얼 · 기술 문서", jp: "運用マニュアル・技術文書" },
    items: [
      { kr: "VuePress 2.0 기반 6개 EMS 프로젝트 운영 매뉴얼 작성·배포 (Apache + RPM 패키징)", jp: "VuePress 2.0ベース6つのEMSプロジェクト運用マニュアル作成・配布（Apache + RPMパッケージング）" },
      { kr: "프로젝트 README, 아키텍처 문서, 알람 시나리오, 운용자 교육 자료 등 10건+ 작성", jp: "プロジェクトREADME、アーキテクチャ文書、アラームシナリオ、運用者教育資料など10件以上作成" },
      { kr: "마이그레이션 타당성·로드맵 기술 검토 보고서 작성으로 의사결정 근거 확보", jp: "マイグレーション妥当性・ロードマップ技術検討報告書作成で意思決定根拠確保" },
    ],
  },
  {
    id: 2,
    title: { kr: "테스트 · 품질 보증", jp: "テスト・品質保証" },
    items: [
      { kr: "테스트케이스 + 기능명세서 구축으로 KT 등 통신사 인수시험 전건 100% 통과", jp: "テストケース + 機能仕様書構築でKT等通信社受入試験全件100%通過" },
      { kr: "Jest → Vitest 마이그레이션, Testing Library 기반 컴포넌트 테스트", jp: "Jest→Vistestマイグレーション、Testing Libraryベースのコンポーネントテスト" },
    ],
  },
  {
    id: 3,
    title: { kr: "CI/CD · 개발 환경", jp: "CI/CD・開発環境" },
    items: [
      { kr: "GitLab CI/CD 파이프라인 구축 (빌드 → RPM 패키징 → Nexus 배포)", jp: "GitLab CI/CDパイプライン構築（ビルド→RPMパッケージング→Nexusデプロイ）" },
      { kr: "Docker 기반 빌드 환경 + Express STOMP Mock 서버로 프론트 독립 개발 환경 확보", jp: "Dockerベースビルド環境 + Express STOMP Mockサーバーでフロント独立開発環境確保" },
    ],
  },
];

// ─── Japan Experience ───
export const japanTimeline: { id: number; period: string; title: I18nText; items: I18nText[] }[] = [
  {
    id: 1,
    period: "2020.12 - 2021.12",
    title: { kr: "일본 워킹홀리데이 · 일본어 학교 졸업", jp: "日本ワーキングホリデー・日本語学校卒業" },
    items: [
      { kr: "하마마츠 일본어 학교 졸업, JLPT N3 취득", jp: "浜松日本語学校卒業、JLPT N3取得" },
      { kr: "현지 생활을 통한 일본어 실무 커뮤니케이션 경험", jp: "現地生活を通じた日本語実務コミュニケーション経験" },
    ],
  },
  {
    id: 2,
    period: "2022.01 - 2022.09",
    title: { kr: "JLPT N2 취득 · 오사카 IT 교육", jp: "JLPT N2取得・大阪IT教育" },
    items: [
      { kr: "JLPT N2 취득 — 비즈니스 수준 일본어 능력 인증", jp: "JLPT N2取得 — ビジネスレベルの日本語能力認証" },
      { kr: "오사카 휴먼 아카데미에서 프로그래밍 기초 학습 및 팀 프로젝트 경험", jp: "大阪ヒューマンアカデミーでプログラミング基礎学習及びチームプロジェクト経験" },
    ],
  },
  {
    id: 3,
    period: "2022.09",
    title: { kr: "한국 귀국 → IT 커리어 시작", jp: "韓国帰国→ITキャリア開始" },
    items: [
      { kr: "약 2년의 일본 생활로 다문화 환경 적응력 및 일본어 비즈니스 커뮤니케이션 역량 확보", jp: "約2年の日本生活で多文化環境適応力及び日本語ビジネスコミュニケーション能力確保" },
      { kr: "일본 경험을 바탕으로 웹 개발 본격 시작", jp: "日本での経験を基にWeb開発を本格開始" },
    ],
  },
];

// ─── Education ───
export const educations = [
  { id: 1, title: { kr: "서울 사이버대학교", jp: "ソウルサイバー大学" }, sub_title: { kr: "컴퓨터공학 전공 (졸업, 3.83/4.5)", jp: "コンピュータ工学専攻（卒業、3.83/4.5）" }, period: "2021 - 2024", items: [{ kr: "재학생 대상 멘토·멘티 활동", jp: "在学生対象メンター・メンティー活動" }], category: "EDUCATION" },
  { id: 8, title: { kr: "한국 소프트웨어 인재 개발원", jp: "韓国ソフトウェア人材開発院" }, sub_title: { kr: "빅데이터 서비스 구축 전문가 과정 수료", jp: "ビッグデータサービス構築専門家課程修了" }, period: "2022.12 - 2023.06", items: [{ kr: "팀 프로젝트 우수상 수상 (실시간 경매 시스템)", jp: "チームプロジェクト優秀賞受賞（リアルタイムオークションシステム）" }], category: "EDUCATION" },
  { id: 4, title: { kr: "정보처리기사", jp: "情報処理技師" }, sub_title: { kr: "한국산업인력공단", jp: "韓国産業人力公団" }, period: "2025.09", items: [] as I18nText[], category: "CERTIFICATION" },
  { id: 5, title: "SQL Developer (SQLD)", sub_title: { kr: "한국데이터산업진흥원", jp: "韓国データ産業振興院" }, period: "2025.06", items: [] as I18nText[], category: "CERTIFICATION" },
  { id: 6, title: "JLPT N2", sub_title: { kr: "일본어능력시험", jp: "日本語能力試験" }, period: "2022.01", items: [] as I18nText[], category: "CERTIFICATION" },
];
