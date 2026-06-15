# 포트폴리오 사이트 콘텐츠 정리

> 현재 사이트에 표시되는 모든 텍스트를 섹션별로 정리한 문서입니다.
> 내용 보완 시 이 파일을 수정한 뒤 `app/data/index.ts`에 반영하세요.

---

## 1. Hero (메인)

| 항목 | KR | JP |
|------|----|---|
| 인사 | 안녕하세요, | こんにちは、 |
| 직책 | 프론트엔드 엔지니어 | フロントエンドエンジニア |
| 이름 | 최영훈 | チェ・ヨンフン |
| 부제 | 통신 관제 시스템 10개+를 1인으로 설계·운영하며, 실시간 데이터 처리와 레거시 현대화를 주도한 프론트엔드 엔지니어입니다. | 通信管制システム10件以上を単独で設計・運用し、リアルタイムデータ処理とレガシー刷新を推進したフロントエンドエンジニアです。 |
| CTA | 이력서 다운로드 | 履歴書ダウンロード |

---

## 2. 핵심 역량 (Intro) — 4장

### 2-1. 실시간 관제 시스템
- KR: WebSocket(STOMP) 15개+ 토픽 기반 실시간 모니터링 시스템 설계·운영. 알람·차트·장비 상태를 끊김 없이 스트리밍하고, 절체(Failover) 시 자동 복구까지 구현합니다.
- JP: WebSocket（STOMP）15個以上のトピックベースのリアルタイムモニタリングシステム設計・運用。アラーム・チャート・設備状態を途切れなくストリーミングし、切替（Failover）時の自動復旧まで実装します。

### 2-2. 성능 최적화 · 레거시 현대화
- KR: 3만 건 데이터 렌더링 최적화(API 50% 감소)부터 4년 레거시 12단계 마이그레이션(빌드 6배↑, -11,389줄)까지. 측정 가능한 수치로 개선을 증명합니다.
- JP: 3万件データレンダリング最適化（API 50%削減）から4年レガシー12段階マイグレーション（ビルド6倍↑、-11,389行）まで。測定可能な数値で改善を証明します。

### 2-3. 운영 안정화 · 장애 대응
- KR: 장애 분석 프로세스 정립으로 대응 시간 50% 단축. WebSocket 절체 자동 복구 설계, 웹 보안 강화, 인수시험 전건 100% 통과. 서비스를 멈추지 않는 것에 집중합니다.
- JP: 障害分析プロセス確立で対応時間50%短縮。WebSocket切替自動復旧設計、Webセキュリティ強化、受入試験全件100%通過。サービスを止めないことに集中します。

### 2-4. 1인 풀사이클 · 문서화
- KR: 설계→개발→테스트→문서화→인수시험→장애 대응까지 1인 전담. VuePress 매뉴얼 6건, 기능 Wiki, 테스트케이스 구축으로 팀의 지식 자산을 남깁니다.
- JP: 設計→開発→テスト→文書化→受入試験→障害対応まで1人専任。VuePresマニュアル6件、機能Wiki、テストケース構築でチームの知識資産を残します。

---

## 3. 스킬 (Skills)

### FRONTEND
HTML5, CSS3, JavaScript, TypeScript

### FRONTEND_LIBRARY
React, Next.js, Tailwind CSS, Emotion, Framer Motion, React Router, ECharts, TanStack Query, Zustand, React Hook Form, Zod, i18next, Styled Components, shadcn/ui

### ENV
Git, Vite, Firebase, GitHub Actions, Node.js, Express, MongoDB, Supabase, Axios

---

## 4. 업무 경험 (Experience)

### 아이페이지온 (iPageOn)
- **역할**: UX솔루션팀 · 프론트엔드 엔지니어 (1인 전담)
- **기간**: 2023.06 - 현재

**주요 성과 (우선순위순):**
1. 통신 관제 시스템 10개+ 프로젝트의 프론트엔드 설계·개발·운영·장애 대응을 1인으로 전담
2. 3만 건 실시간 데이터 렌더링 최적화 — React.memo + 가상 스크롤로 API 호출 50% 감소
3. WebSocket(STOMP) 15개+ 토픽 기반 관제 시스템 구축 + 절체(Failover) 자동 복구 설계
4. 장애 분석 프로세스 정립 + WebSocket 재연결 설계로 대응 시간 50% 단축
5. 12단계 레거시 마이그레이션 주도 — 빌드 6배↑, 유료 라이선스 전면 제거, 코드 -11,389줄
6. 운영 매뉴얼 6건 + 테스트케이스 구축으로 KT 등 통신사 인수시험 전건 100% 통과
7. 백엔드 5명과 REST/WebSocket API 설계 협의 및 Mock 서버 자체 구축으로 독립 개발 환경 확보

---

## 5. 프로젝트 (Projects)

### 회사 프로젝트 (15개 = Featured 4 + Core 11)

#### ── 대표 프로젝트 (Featured) ──

#### [id:1] 실시간 통신 장비 관제 시스템 ★ 대표작
- **부제**: WebSocket 기반 대규모 EMS 프론트엔드 단독 개발 (800 commits)
- **기간**: 2023.09 - 현재 | Frontend Solo
- **스킬**: TypeScript, React, ECharts, TanStack Query, i18next, Axios
- **상세**:
  - WebSocket(STOMP) 15개+ 토픽 구독으로 알람·차트·장비 상태 실시간 스트리밍
  - ECharts 기반 CPU, Memory, Network, Disk 사용률 실시간 시각화 대시보드
  - EMS 절체(Failover) 시 WebSocket 자동 재연결 로직 설계·구현으로 서비스 안정성 확보
  - 3만 건 알람 데이터 렌더링 병목을 React.memo + Infinite Scroll 커스텀 구현으로 해결
  - React Query 캐싱 전략 개선으로 불필요 API 호출 약 50% 감소
  - 장애 분석 프로세스 정립으로 대응 시간 약 50% 단축, 인수시험 100% 통과

#### [id:2] 관제 시스템 대규모 현대화 ★ 기술 리더십
- **부제**: 12단계 체계적 기술 스택 전환 (419파일, -11,389줄)
- **기간**: 2025.02 - 2025.06 | Frontend Solo
- **스킬**: TypeScript, React, Tailwind CSS, Vite, TanStack Query, Zustand, Zod, shadcn/ui
- **상세**:
  - CRA → Vite 전환으로 빌드 시간 40초 → 6.7초 (6배 개선), 개발 서버 15초 → 1초 미만
  - Recoil → Zustand 전환 (172파일, useEffect 무한루프 해결 포함)
  - React Query 3 → TanStack Query v5 마이그레이션 (150파일)
  - KendoReact(유료) 전면 제거 → @tanstack/react-virtual 기반 커스텀 Table + shadcn/ui (50파일)
  - styled-components → Tailwind CSS v4 전환 (177파일)
  - 유료 라이선스 완전 제거로 라이센스 비용 절감 및 번들 크기 대폭 감소

#### [id:6] 메시징 플랫폼 통합 관제 시스템 ★ 기술 다양성
- **부제**: 다크모드·ReactFlow Call Flow·네트워크 스위치 모니터링 (1,670 commits)
- **기간**: 2023.11 - 2025.05 | Frontend Solo
- **스킬**: TypeScript, React, ECharts, TanStack Query, Axios
- **상세**:
  - ThemeProvider 기반 다크모드 전체 적용 (100건+ 커밋, 전 모듈 대응)
  - ReactFlow v11 기반 실시간 Call Flow 시각화 + BroadcastChannel 멀티윈도우 상태 공유
  - 48포트 네트워크 스위치 모니터링 시스템 신규 개발 (Port/Fan/Power 상태 시각화)
  - TheadTable(다중 행 헤더) 컴포넌트 신규 개발, 동적 colspan/rowspan 통계 모듈 고도화
  - 트래픽 차트(RPS/CPS), 사업자 프리픽스 Virtual Scroll + 인라인 편집 동시 관리

#### [id:13] 통신 고객 프로비저닝 관리 시스템
- **부제**: Customer/Contact 모듈 전체 신규 설계·구현 (93개 신규 파일)
- **기간**: 2025.07 - 2026.02 | Frontend Solo
- **스킬**: TypeScript, React, ECharts, TanStack Query, React Hook Form, Axios
- **상세**:
  - Customer 관리 모듈 전체 신규 개발 (CRUD, 필터링, 인라인 편집, Active 상태 토글)
  - Contact 관리 모듈 전체 신규 개발 (목록/상세/생성/삭제, 이중 테이블 UI, 3-Depth 네비게이션)
  - React Hook Form + React Query + Zustand 3-Layer 상태 관리 패턴 적용
  - 전체 반응형 UI 개선 (Organization, Header, Activity Log, License, 권한별 레이아웃 분기)

#### ── 운영 관제 시스템 (Core EMS/NMS) ──
> 위 대표 프로젝트 외에도 아래 EMS/NMS 시스템을 단독으로 설계·운영하였습니다.

#### [id:19] Core Network(CSCF) 관제 시스템
- **부제**: 장애감시·통계·CLI·Trace·보고서·구성정보 전담 개발 (2,144 commits)
- **기간**: 2023.11 - 2026.03 | Frontend Solo
- **상세**: 장애감시 알람 virtual-scroll 적용, 보고서 모듈 신규 개발, MQTT 차트 연동 / ReactFlow 기반 실시간 Call Flow 시각화, 48포트 네트워크 스위치 모니터링, 다크모드 전체 적용 / 프로젝트 전체 커밋의 약 49% 기여 (2,144 / ~4,400건)

#### [id:7] 통합 알람·Trace 모니터링 시스템
- **부제**: WebSocket 실시간 통신·알람·Trace·CLI 전담 개발 (369 commits)
- **기간**: 2023.09 - 현재 | Frontend Solo
- **상세**: useWebSocketSubscribe 통합 훅 설계, EMS 절체(Failover) 재연결 로직 구현 / 실시간 알람 수신/해제, 가청 로직, 다국어(i18next) 처리 / 커스텀 Table 컴포넌트 (가상 스크롤, 정렬, 필터, 그룹 헤더) 50개 화면 적용

#### [id:14] 통신 네트워크 장비 통합 관제 시스템
- **부제**: 시스템 토폴로지·CLI 원격 제어·실시간 알람 프론트엔드 (400 commits)
- **기간**: 2023.06 - 2025.06 | Frontend Solo
- **상세**: 호스트 이중화(Active-Standby/Active-Active) 상태별 동적 토폴로지 대시보드 구현 / CLI 원격 명령어 Tree 메뉴 구현 / ECharts 기반 통계 차트 시스템

#### [id:15] 호 처리·통계 관제 시스템
- **부제**: CLI 리팩토링·ECharts 통계 차트·호 처리이력·Trace 모듈 개발 (268 commits)
- **기간**: 2023.07 - 2025.05 | Frontend Solo
- **상세**: CLI 원격 명령어 모듈 전면 리팩토링 / 호 처리이력/샘플링 데이터 복합 조회 UI 및 엑셀 내보내기 / ECharts 기반 다중 통계 차트 (SIP/서비스/PNSUP/INSUP)

#### [id:16] 통신 장비 통합 관제 웹 시스템
- **부제**: 다중 백엔드 프록시 연동 관제 프론트엔드 (212 commits)
- **기간**: 2023.06 - 2025.02 | Frontend Solo
- **상세**: Trace 기능 필터링/정렬, Dashboard 차트 레이아웃, 호 트래픽 차트 폴링 / 알람 상세 기능, CLI 명령어 실행/조회이력, 통계 API 연동

#### [id:17] VMS/ARS 장비 관제 시스템
- **부제**: 음성사서함·ARS 장비 14개 모듈 관제 프론트엔드 (113 commits)
- **기간**: 2023.09 - 2025.05 | Frontend Solo
- **상세**: 프로비저닝·호 처리이력·CLI·Trace·DB 모니터링 등 14개 메뉴 모듈 개발·유지보수 / WebSocket(STOMP) 실시간 알람·리소스 모니터링, 다국어(한/영) 지원

#### [id:11] 관제 알람 대시보드 · Overview 시스템
- **부제**: 알람 UI 전면 개선 및 Overview 모니터링 신규 개발 (147 commits)
- **기간**: 2024.01 - 2026.05 | Frontend Solo
- **상세**: 알람 시스템 UI 전면 개선 (등급별 해제/필터링, 가청 윈도우 팝업) / Overview 시스템 모니터링 UI 신규 개발 (클러스터/호스트 시각화, 100개 색상 팔레트) / WebSocket ping 기반 5초 타임아웃 감지

#### [id:9] HSS Core Network 관제 시스템
- **부제**: 통신 Core Network 장비(HSS) 관제 웹 프론트엔드
- **기간**: 2023.08 - 2026.06 | Frontend Solo
- **상세**: 멀티 사이트 공통 플랫폼 기반 사이트별 커스터마이징 및 운영 / WebSocket 실시간 모니터링, CLI 원격 제어, 알람 관제, 통계 차트 개발

#### [id:8] 전술정보통신 장비 관제 시스템
- **부제**: 군용 전술통신 네트워크 장비 EMS 유지보수 및 CI/CD 정비
- **기간**: 2024.08 | Frontend Solo
- **상세**: GitLab CI/CD 파이프라인 정비 (Docker 빌드 환경 + RPM 패키징) / MobX + React 16 레거시 환경에서 버그 수정 및 UI 커스터마이징

#### [id:10] 통신 장비 관제 보안·운영 시스템
- **부제**: 웹 보안 취약점 개선 및 CI/CD 운영 (Merge 권한 보유)
- **기간**: 2023.10 - 2026.06 | Frontend Solo
- **상세**: 웹 보안 취약점 분석·패치, CI/CD 파이프라인 설정, 코드 리뷰 및 Merge 운영 / JWT 인증 기반 보안 강화, XSS/CSRF 대응, 쿠키 보안 속성 적용

#### [id:12] 통합 NMS 관제 대시보드
- **부제**: IMS/MCPTT 통합 관제 서버 타임존 통합 개선 및 CI/CD
- **기간**: 2025.07 | Frontend Solo
- **상세**: 서버 타임존 기반 시간 표시 통합 개선 (10개+ 컴포넌트 일괄 적용) / MobX + React 16 레거시 환경, react-virtualized 가상 스크롤 활용

### 개인 프로젝트 (4개)

#### My Recipe
- **부제**: Pinterest 스타일 개인 요리 레시피 관리 앱
- **링크**: https://my-recipe-self.vercel.app/

#### SiteDash
- **부제**: React 19 + Express.js 풀스택 프로젝트 대시보드
- **링크**: https://ggnu11.github.io/site-dash/

#### NoteSnap
- **부제**: AI 없이 브라우저에서 동작하는 텍스트 파일 요약 웹앱
- **링크**: https://notesnap-6966c.web.app

#### ABC Company Site
- **부제**: React + Express.js 풀스택 회사 웹사이트
- **링크**: https://abc-company1216.netlify.app
- **스킬**: React, Tailwind CSS, Node.js, Express, MongoDB, Axios

---

## 6. 문서화 & 품질 (Documentation) — 3개 카테고리

### 6-1. 운영 매뉴얼 · 기술 문서
- VuePress 2.0 기반 6개 EMS 프로젝트 운영 매뉴얼 작성·배포 (Apache + RPM 패키징)
- 프로젝트 README, 아키텍처 문서, 알람 시나리오, 운용자 교육 자료 등 10건+ 작성
- 마이그레이션 타당성·로드맵 기술 검토 보고서 작성으로 의사결정 근거 확보

### 6-2. 테스트 · 품질 보증
- 테스트케이스 + 기능명세서 구축으로 KT 등 통신사 인수시험 전건 100% 통과
- Jest → Vitest 마이그레이션, Testing Library 기반 컴포넌트 테스트

### 6-3. CI/CD · 개발 환경
- GitLab CI/CD 파이프라인 구축 (빌드 → RPM 패키징 → Nexus 배포)
- Docker 기반 빌드 환경 + Express STOMP Mock 서버로 프론트 독립 개발 환경 확보

---

## 7. 일본 경험 (Japan) — 3개 타임라인

| 기간 | 제목 | 내용 |
|------|------|------|
| 2020.12 - 2021.12 | 일본 워킹홀리데이 · 일본어 학교 졸업 | 하마마츠 일본어 학교 졸업, JLPT N3 취득 / 현지 생활을 통한 일본어 실무 커뮤니케이션 경험 |
| 2022.01 - 2022.09 | JLPT N2 취득 · 오사카 IT 교육 | JLPT N2 취득 — 비즈니스 수준 일본어 능력 인증 / 오사카 휴먼 아카데미에서 프로그래밍 기초 학습 및 팀 프로젝트 경험 |
| 2022.09 | 한국 귀국 → IT 커리어 시작 | 약 2년의 일본 생활로 다문화 환경 적응력 및 일본어 비즈니스 커뮤니케이션 역량 확보 |

---

## 8. 교육 & 자격증 (Education)

### 학력
| 기간 | 학교 | 전공/과정 |
|------|------|-----------|
| 2021 - 2024 | 서울 사이버대학교 | 컴퓨터공학 (졸업, 3.83/4.5) |
| 2022.12 - 2023.06 | 한국 소프트웨어 인재 개발원 | 빅데이터 서비스 구축 전문가 과정 |

### 자격증
| 취득일 | 자격증 | 발급기관 |
|--------|--------|----------|
| 2025.09 | 정보처리기사 | 한국산업인력공단 |
| 2025.06 | SQLD | 한국데이터산업진흥원 |
| 2022.01 | JLPT N2 | 일본어능력시험 |
