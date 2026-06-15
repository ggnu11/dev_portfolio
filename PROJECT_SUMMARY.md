# IPAGEON 프로젝트 종합 요약

> 작성일: 2026-06-12 | 원본: `PROJECT_MASTER_ARCHIVE.md`
> 대상: 최영훈 (Choi-Yeonghun / choi0712) | 재직: 2023.06 ~ 현재

---

## 총괄 개요

| 항목 | 내용 |
|------|------|
| 소속 | IPAGEON (통신 솔루션 기업) |
| 도메인 | 통신 인프라 / 네트워크 장비 관제 (EMS/NMS) |
| 역할 | 프론트엔드 개발자 |
| 참여 프로젝트 | 14개 EMS/NMS 웹 프론트엔드 |
| 핵심 기술 | React 16~19, TypeScript, WebSocket(STOMP), Recoil/Zustand, React Query |
| 공통 인프라 | GitLab CI/CD → RPM 패키징 → Nexus Repository 배포 |

---

## 프로젝트 목록 (기여도 순)

### 1. POTS EMS (핵심 프로젝트)

| 항목 | 내용 |
|------|------|
| 기간 | 2023.09 ~ 2026.06 (진행 중, 약 2년 9개월) |
| 커밋 | **800건** (전체 4,650건 중 28.8%) |
| 코드 | +24,850줄 / -9,986줄 |
| 기술 | React 18, TypeScript 5, Recoil, React Query, WebSocket(STOMP), ECharts, Cytoscape.js, Kendo UI, Framer Motion |

**주요 업무:**
- **알람 관리 시스템 (25.4%)**: 실시간 알람 수신/표시, 등급별 필터링, Toast 알람, 알람 패널(Framer Motion 애니메이션), 패널 설정 개발
- **통계 시스템 (11.4%)**: 조회 화면 전체 개발, MultiSelectTree 컴포넌트 최초 개발, 클러스터 탭별 독립 관리, 논리/물리 구분별 조회, 페이징 최적화, Excel 다운로드
- **설정 관리 (16.5%)**: 인터페이스 설정 최초 개발, NTP 설정, POTS 구성, EMS-POTS 관리, 데이터 보관주기, 외부 서버 관리(ACL), NMS 연동 설정
- **대시보드/POTS 관리 (15.2%)**: Host 연동 화면 최초 개발, 트리 메뉴, 클러스터 토폴로지, Block 상태, 구성정보 탭
- **자원감시**: WebSocket 구독 기반 실시간 차트, 서버 시간 기준 시간 범위 계산, Threshold 음영 표시
- **트래픽 차트**: ECharts 기반 트리 차트 최초 개발, 차트 갯수별 동적 레이아웃
- **논리/물리 표시 기능**: 전체 시스템에 논리/물리 전환 기능 구현 (알람, 이력, 통계, 차트 등)
- **보안**: httpOnly 쿠키 전환, 보안정책 모달, 운용자 관리, 권한별 기능 제한
- **이력관리**: NMS/청약 연동이력 화면 최초 개발, XML beautify, 조회기간 제한 공통 구현
- **ACT/DR 절체**: 절체 모달, 권한별 제한, 상태별 호버 색상
- **공통 컴포넌트**: PotsCustomTooltip(createPortal), MultiSelect, FormModal, 로딩 컴포넌트
- **세션/인증**: httpOnly 쿠키 전환, 세션 만료 → WebSocket 해제 → 로그인 이동, 패스워드 정책
- **CI/CD**: GitLab CI nvm 자동 설치, build_rpm 안정화

---

### 2. 메시징 게이트웨이 관제 시스템

| 항목 | 내용 |
|------|------|
| 기간 | 2023.11 ~ 2025.05 (약 1년 7개월) |
| 커밋 | **1,670건** (전체 6,100건 중 27%) |
| 코드 | +19,648줄 / -14,477줄 |
| 기술 | React 18, TypeScript 4, Recoil, React Query 3, styled-components, Kendo UI, ReactFlow 11, StompJS |

**주요 업무:**
- **다크모드 전체 적용 (100건+)**: ThemeProvider 기반 테마 시스템 구현, 전체 모듈/컴포넌트 대응
- **실시간 Trace/Call Flow**: ReactFlow v11 마이그레이션, WebSocket 기반 실시간 Call Flow 시각화, BroadcastChannel 멀티윈도우 상태 공유, html2canvas 이미지 저장
- **네트워크 스위치 모니터링 신규 개발**: 48포트 시각화, Port/Fan/Power 상태 아이콘, 5초 폴링, 포트관리 인라인 편집
- **통계 모듈 고도화**: TheadTable(다중 행 헤더) 컴포넌트 신규 개발, 동적 colspan/rowspan, 조회조건 반응형
- **Dashboard 고도화**: 트래픽 차트(RPS/CPS), 호스트 상세 WebSocket 재구독, 다크모드
- **CLI 인터페이스**: 명령어 필터링, Batch Job 관리, WebSocket 기반 메뉴 갱신
- **구성정보**: 호스트 상세(WebSocket), 프로세스 상태 시각화, Network 차트, DB 모니터링, 하드웨어 상태
- **서비스관리**: 사업자 프리픽스 Virtual Scroll, 필터링+인라인 편집 동시 관리
- **이력관리**: 메시지 이력, 장애감시 이력, 운용이력 점검, 호처리이력 엑셀/CSV
- **백업관리**: 파일 업로드, Tree 관리, 보안정책
- **문서화**: README.md, old.README.md, app.README.md, axios.README.md, routes.README.md, components.common.README.md (6건)

---

### 3. 메시징 플랫폼 EMS (대규모 마이그레이션 포함)

| 항목 | 내용 |
|------|------|
| 기간 | 2023.09 ~ 2026.06 (진행 중, 약 2년 9개월) |
| 커밋 | **369건** |
| 코드 | +63,350줄 / -111,091줄 (마이그레이션으로 삭제 많음) |
| 기술 | React 18→19, TypeScript 5, Recoil→Zustand 5, React Query v3→TanStack Query v5, styled-components→Tailwind CSS v4, CRA→Vite 6, KendoReact→Radix UI + 커스텀 |

**주요 업무:**
- **12단계 대규모 기술 마이그레이션 (단독 주도, 2026.04~06)**:
  1. CRA + CRACO → Vite 6
  2. Yarn → pnpm
  3. ESLint + Prettier → Biome
  4. Jest → Vitest
  5. React Router v6 → v7
  6. React 18 → React 19
  7. Recoil → Zustand
  8. React Query v3 → TanStack Query v5
  9. KendoReact Grid → Custom Table (@tanstack/react-virtual 가상 스크롤)
  10. KendoReact UI → Radix UI (shadcn/ui) + react-resizable-panels
  11. styled-components → Tailwind CSS v4
  12. Yup → Zod, moment → date-fns
- **커스텀 Table 컴포넌트 설계/구현**: 가상 스크롤, 정렬, 필터링, 페이지네이션, 그룹 헤더, 서브 컬럼 — 50개 화면 적용
- **WebSocket 실시간 통신**: `useWebSocketSubscribe` 통합 훅, EMS 절체(Failover) 재연결
- **알람 시스템**: 실시간 알람 수신/해제, 가청 로직, 다국어 처리
- **Trace 기능 전담**: Job 등록/History/Monitoring, resize 기능
- **통계**: ECharts 차트, timezone 대응, 필터 UI, 빈 데이터 처리
- **CLI**: Host 선택, Lookup History, 검색 초기화
- **Configuration**: 클러스터 배치(이중화/단일), 호스트 상세, 코드 스플릿
- **KendoReact v4.9→v13.3 대응 (20건)**: DOM 구조 변경에 따른 전반적 UI 수정
- **리팩토링**: Zustand 전역 상태 정리, cva + clsx 패턴 도입, 전역 함수 개선
- **README 작성**: 마이그레이션 이력, 커스텀 컴포넌트 사용법, 다중 클러스터 대응 가이드

---

### 4. 통신 장비 통합 관제 시스템

| 항목 | 내용 |
|------|------|
| 기간 | 2023.06 ~ 2025.06 (약 2년) |
| 커밋 | **400건** |
| 코드 | +23,264줄 / -20,761줄 |
| 기술 | React 17, TypeScript 4, Recoil, React Query 3, styled-components, Kendo UI, ECharts, Chart.js |

**주요 업무:**
- **Dashboard 토폴로지 (핵심)**: 호스트 이중화(Active-Standby/Active-Active/ActiveAlone) 동적 레이아웃, 프로세스 블록 팝업 위치 계산, 8개 호스트 표시 확장
- **CLI 원격 명령어 (핵심)**: Tree 메뉴 구현, recoil-persist→session 전환, 검색/스크롤, 코드 분할
- **Sidebar 리뉴얼 (단독)**: 축소/확장 상태별 이미지, hover 전환, PNG→SVG, 코드 최적화
- **알람**: 상세 버튼 고정, elementDisplayName 수정, 해제 버튼, 체크리스트 초기화
- **통계**: 가로 스크롤, 동적 width 계산(calculate-size), API 경로 수정
- **공통**: 비밀번호 확인 모달, NotoSansKR 폰트 적용, WebSocket 재연결

---

### 5. 통신 장비 관제 시스템 (CLI/통계/Trace 중심)

| 항목 | 내용 |
|------|------|
| 기간 | 2023.07 ~ 2025.05 (약 1년 10개월) |
| 커밋 | **137건** |
| 기술 | React 17, TypeScript 4, Recoil, React Query 3, Kendo UI, ECharts |

**주요 업무:**
- **CLI 리팩토링 (22건)**: Tree 메뉴, 검색-선택-실행-이력 UX, Recoil 상태 최적화, 하드코딩 제거
- **통계 (19건)**: ECharts 다중 통계 차트(SIP/서비스/PNSUP/INSUP), 조회 구분별 날짜 형식 동적 전환
- **Trace (17건)**: Job 감시/이력 필터링, 커스텀 필터 셀 컴포넌트 구현
- **호처리이력/샘플링 (22건)**: 복합 조회 조건 UI, 엑셀 내보내기
- **알람 (6건)**: 드롭다운 필터, Fault 알람 카운트 Hook

---

### 6. 통신 장비 통합 관제 웹 시스템

| 항목 | 내용 |
|------|------|
| 기간 | 2023.06 ~ 2025.02 (약 1년 8개월) |
| 커밋 | **212건** |
| 기술 | React (CRA + CRACO), Recoil, styled-components, Kendo UI |

**주요 업무:**
- **CLI (가장 많은 기여)**: TreeView 메뉴, 동적 입력 필드(8+ 타입), 결과 영역(세션 저장/다운로드/Trace 유지), recoil-persist
- **Dashboard**: 프로세스 블록 시각화, 팝업 위치 계산, 호 트래픽/미디어 차트 폴링, 토폴로지 ACT/STBY/DOWN
- **통계**: 테이블 동적 너비 계산(calculate-size), 가로 스크롤
- **알람**: 상세 버튼/필드 고정, 필드 리사이즈 버그 수정

---

### 7. 통신 장비 관제 시스템 (알람/Overview 중심)

| 항목 | 내용 |
|------|------|
| 기간 | 2024.01 ~ 2026.05 (약 1년 5개월, 비연속) |
| 커밋 | **147건** |
| 기술 | React 17, TypeScript, Recoil, React Query, ECharts, Kendo UI |

**주요 업무:**
- **알람 시스템 UI 전면 개선 (2024.01)**: 등급별 해제/필터링, 가청 윈도우 팝업, 상세 정보 모달
- **Overview 시스템 모니터링 UI 신규 개발 (2025.05~07)**: 클러스터/호스트 시각화, 시스템 상세 모달, 100개 색상 팔레트
- **차트 라이브러리 마이그레이션 (2026.05)**: Kendo Chart → ECharts 전면 마이그레이션
- **WebSocket 재연결 안정화**: ping 기반 5초 타임아웃 감지, 자동 재연결

---

### 8. VHVMS Web EMS (VMS/ARS 관제)

| 항목 | 내용 |
|------|------|
| 기간 | 2023.09 ~ 2025.05 (약 1년 9개월) |
| 커밋 | **77건** |
| 기술 | React 17, TypeScript 4, Recoil, React Query, Kendo UI, ECharts |

**주요 업무:**
- **CLI 명령어 이력 관리**: 별도 윈도우 팝업(react-new-window), 이력 테이블/검색, 다국어
- **호스트 상세 팝업 UI (30건)**: CPU/Memory/Disk/Network 차트, 프로세스 상태 테이블, 알람 영역, 전체화면/축소 모드
- **최근 이벤트**: 알람 해제 필드 추가, 테이블 width 조정
- **이력관리**: 이벤트 null 값 수정, 초기화 버그, 가입자번호 trim
- **통계/프로비저닝/Call Log**: 조회조건 수정, 초기화 기능, 공백 제거

---

### 9. PTT 프로비저닝 관리 시스템

| 항목 | 내용 |
|------|------|
| 기간 | 2025.07 ~ 2026.02 (약 8개월) |
| 커밋 | **50건** |
| 신규 파일 | 93개 |
| 기술 | React 18, TypeScript 5, Zustand 4, React Query 3, Emotion, Kendo UI, ECharts |

**주요 업무:**
- **Customer 관리 모듈 전체 신규 개발**: CRUD, 필터링, 인라인 편집/삭제, Active 상태 토글 — React Hook Form + Yup + React Query + Zustand 3-Layer 패턴
- **Contact 관리 모듈 전체 신규 개발**: 목록/상세/생성/삭제/사용자 할당(ASSIGN), 이중 테이블(Selected/Total) UI, 3-Depth 네비게이션
- **Subscriber API 연동**: 단일/일괄 등록, 수정, 서비스 권한, Device Lock 검증
- **전체 반응형 UI 개선**: Organization, Header, Activity Log, License, 권한별 레이아웃 분기
- **CI/CD**: GitLab CI 빌드 에러 수정

---

### 10. HSS EMS Web UI

| 항목 | 내용 |
|------|------|
| 기간 | 2023.08 ~ 2026.06 (약 2년 11개월, 공백 있음) |
| 커밋 | **72건** (non-merge) |
| 기술 | React 17, TypeScript 4, Recoil, React Query, Kendo UI, ECharts |

**주요 업무:**
- **CLI 원격 명령 실행 (20건, 최다)**: LocalStorage 기반 이력 저장(용량 초과 자동 shift), Trace 메시지, 코드 분할
- **통계**: 차트 버그 수정, 조회 기간 동적 제한(cycleDay API), 날짜 UX 개선
- **WebSocket**: ws/wss 프로토콜 자동 분기, URL 동적 생성
- **전체 UI 레이아웃 리팩터링 (2024.12)**: 10개 이상 화면 일괄 수정
- **CI/CD**: 빌드 러너 태그/경로 수정

---

### 11. EMS/NMS Web (보안 개선)

| 항목 | 내용 |
|------|------|
| 기간 | 2023.10 ~ 2026.06 |
| 커밋 | **13건** (실 작업 7건) |
| 기술 | React 18, TypeScript, Recoil, React Query, KendoReact |

**주요 업무:**
- **웹 보안 강화 (Phase 1, 34개 파일)**: 하드코딩 JWT 토큰 제거, 내부 IP 환경변수화, Source Map 비활성화, wss 자동 감지, 인증 쿠키 보안 옵션, 인증 가드 추가, CORS 헤더 제거, console.log 제거, 불필요 패키지 삭제
- **CLI 도움말 배경색 버그 수정**
- **Merge Request 관리** (Merge 권한 보유)

---

### 12. 전술정보통신 TICN (단기 투입)

| 항목 | 내용 |
|------|------|
| 기간 | 2024.08.14 ~ 2024.08.23 (**10일**) |
| 커밋 | **14건** (non-merge) |
| 기술 | React 16, TypeScript 3, MobX, Bootstrap, SockJS+STOMP, ECharts |

**주요 업무:**
- **CI/CD 파이프라인 정비**: npm→yarn 전환, 빌드 트러블슈팅
- **운용자 계정 등록 권한 표시 버그 수정**
- **UI 브랜딩 (로고 교체)**: 헤더/로그인/파비콘

---

### 13. NMS Web (IMS/MCPTT, 단기 투입)

| 항목 | 내용 |
|------|------|
| 기간 | 2025.07.09 ~ 2025.07.14 (**4일**) |
| 커밋 | **21건** |
| 기술 | React 16, TypeScript 3, MobX, SockJS+STOMP, ECharts, date-fns-tz |

**주요 업무:**
- **서버 타임존 기반 시간 표시 통합 개선**: 10개+ 컴포넌트(알람, 이력, 프로세스, 사용자) 일괄 적용, date-fns-tz 활용
- **CLI 메시지 스크롤 UX 개선**: 자동 스크롤, 탭 전환 대응
- **CI/CD**: npm→yarn 전환

---

## 기술 스택 경험 범위

### 프레임워크 / 라이브러리

| 분류 | 기술 |
|------|------|
| React | 16 → 17 → 18 → **19** (전 버전 경험) |
| 빌드 | CRA + CRACO → **Vite 6** |
| 상태 관리 | MobX → Recoil → **Zustand 5** |
| 서버 상태 | React Query v3 → **TanStack Query v5** |
| 스타일링 | Bootstrap → styled-components → Emotion → **Tailwind CSS v4** |
| UI | Kendo UI(유료) → **Radix UI (shadcn/ui)** + 커스텀 컴포넌트 |
| 차트 | Chart.js, Nivo, ECharts, Kendo Charts → **ECharts 단일화** |
| 폼 | React Hook Form + Yup → React Hook Form + **Zod 4** |
| 라우팅 | React Router v5 → v6 → **v7** |
| 실시간 | StompJS (WebSocket/STOMP) — 전 프로젝트 공통 |
| Lint | ESLint + Prettier → **Biome** |
| 테스트 | Jest → **Vitest** |
| 패키지 | npm → Yarn → **pnpm** |
| 시각화 | ReactFlow, Cytoscape.js |
| 애니메이션 | Framer Motion |
| 가상 스크롤 | react-virtualized, **@tanstack/react-virtual** |

### 아키텍처

- Feature-Sliced Design (FSD)
- Custom Hooks 패턴 (88개+)
- Proxy 기반 다중 API 라우팅 (4~12개 백엔드 서비스)
- WebSocket STOMP 토픽 기반 구독
- GitLab Flow (master → develop → feature)
- RPM 패키징 → Nexus → YUM 배포

---

## 핵심 성과 Top 5

### 1. 대규모 기술 마이그레이션 (단독 주도)
- 12단계 기술 스택 전면 전환 (CRA→Vite, Recoil→Zustand, styled-components→Tailwind, KendoReact→shadcn/ui 등)
- KendoReact(유료) 전체 제거, 오픈소스/커스텀 컴포넌트로 교체 → 라이선스 비용 절감
- 커스텀 Table 컴포넌트 설계/구현 (@tanstack/react-virtual 가상 스크롤) → 50개 화면 적용

### 2. 실시간 관제 시스템 프론트엔드 (전 프로젝트 공통)
- WebSocket(STOMP) 기반 실시간 알람/모니터링/차트 데이터 처리
- EMS 절체(Failover) 시 WebSocket 재접속 장애 분석/해결
- 공통 WebSocket 구독 훅 설계 (`useWebSocketSubscribe`)

### 3. POTS EMS 알람 관리 시스템 (800건 커밋, 프로젝트 28.8%)
- 실시간 알람 수신/패널/필터링/Toast 알람 전체 개발
- MultiSelectTree, PotsCustomTooltip 등 커스텀 컴포넌트 개발
- 논리/물리 장비 구분 전체 시스템 적용

### 4. 엔터프라이즈 다크모드 전체 적용 (메시징 게이트웨이)
- 전 모듈 다크모드 테마 시스템 구현 (100건+ 커밋)
- ReactFlow v11 기반 Call Flow 시각화 + BroadcastChannel 멀티윈도우
- 네트워크 스위치 모니터링 시스템 신규 개발 (48포트 시각화)

### 5. 신규 모듈 독립 설계/구현 (PTT 프로비저닝)
- Customer/Contact 관리 모듈 전체 설계 및 구현 (60개+ 컴포넌트)
- 3-Layer 상태 관리 (React Hook Form + React Query + Zustand)
- 전체 반응형 UI 개선

---

## 문서화 실적

| 프로젝트 | 작성 문서 |
|----------|-----------|
| 메시징 플랫폼 EMS | README.md (FSD 구조, 마이그레이션 이력, 커스텀 Table 사용법, 다중 클러스터 가이드) |
| 메시징 게이트웨이 | README.md, old.README.md, app.README.md, axios.README.md, routes.README.md, components.common.README.md (6건) |
| 공통 | .gitlab-ci.yml (CI/CD 파이프라인), 다중 클러스터 마이그레이션 가이드 |

---

## 이력서 핵심 키워드 (ATS)

### 기술
```
React (16~19), TypeScript, Vite, Tailwind CSS v4, Zustand, TanStack Query v5,
Radix UI (shadcn/ui), @tanstack/react-virtual, WebSocket (STOMP),
ECharts, Cytoscape.js, ReactFlow, Framer Motion,
React Hook Form, Zod, React Router v7, Biome, Vitest,
Recoil, React Query, styled-components, Kendo UI, MobX,
Axios, i18next, date-fns, pnpm, GitLab CI/CD, RPM
```

### 도메인
```
EMS (Element Management System), NMS, 실시간 모니터링, 관제 시스템,
통신 인프라, 메시징 플랫폼, 네트워크 장비 관리, 장애 대응 (failover),
다중 클러스터, 이중화, 논리/물리 장비 구분, ACT/DR 절체,
WebSocket 실시간 통신, 다국어 지원, 엔터프라이즈 SPA, B2B
```

### 역량
```
대규모 기술 마이그레이션 주도, 커스텀 UI 컴포넌트 설계/구현,
실시간 데이터 처리, 프론트엔드 아키텍처 설계,
Feature-Sliced Design, Custom Hooks 패턴,
기술 문서 작성, CI/CD 파이프라인 운영
```
