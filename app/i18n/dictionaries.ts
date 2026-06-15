export type Locale = "kr" | "jp";

const dictionaries = {
  kr: {
    nav: {
      skills: "스킬",
      experience: "경험",
      projects: "프로젝트",
      blog: "블로그",
      education: "교육",
      documentation: "문서화",
      japan: "일본 경험",
    },
    hero: {
      greeting: "안녕하세요,",
      role: "프론트엔드 엔지니어",
      name: "최영훈",
      subtitle: "통신 관제 시스템 10개+를 1인으로 설계·운영하며, 실시간 데이터 처리와 레거시 현대화를 주도한 프론트엔드 엔지니어입니다.",
      cta: "이력서 다운로드",
    },
    introduce: {
      eyebrow: "INTRODUCE",
      title: "자기소개",
      lastUpdated: "Latest Updated",
      paragraphs: [
        "통신 인프라 관제 시스템을 개발해 온 프론트엔드 엔지니어입니다.",
        "React와 TypeScript를 기반으로 EMS/NMS 환경에서 실시간 모니터링 시스템 개발, WebSocket(STOMP) 기반 데이터 처리, 장애 대응 및 운영 안정화 업무를 수행해 왔습니다.",
        "실시간 알람, 장비 상태 모니터링, 통계 시각화, 프로비저닝 기능 등을 개발했으며, 3만 건 이상의 데이터 렌더링 최적화, API 호출 약 50% 감소, 장애 대응 시간 약 50% 단축 등의 개선 작업을 진행했습니다.",
        "또한 문서와 표준이 정비되지 않은 환경에서 테스트 케이스, 운영 문서, Wiki를 구축하여 운영 효율을 높였으며, 4년 이상 운영된 레거시 프로젝트의 마이그레이션을 수행하여 빌드 시간을 약 40초에서 6.7초로 단축하고 유지보수성을 개선했습니다.",
        "기능 구현에 그치지 않고 운영 환경에서 발생하는 문제를 분석하고 재발을 방지할 수 있는 구조를 만드는 데 집중합니다.",
      ],
    },
    intro: {
      eyebrow: "핵심 역량",
      title: "유연하게 소통하고, 견고하게 개발합니다.",
    },
    skill: {
      eyebrow: "기술 스택",
      title: "보유 스킬",
    },
    experience: {
      eyebrow: "경험",
      title: "업무 & 프로젝트",
      work: "업무 경험",
      project: "프로젝트",
      viewDetails: "상세 보기",
      hideDetails: "접기",
    },
    project: {
      eyebrow: "프로젝트",
      title: "만들어 온 것들",
      company: "회사 프로젝트",
      personal: "개인 프로젝트",
      featured: "대표 프로젝트",
      core: "운영 관제 시스템",
      coreDesc: "위 대표 프로젝트 외에도 아래 EMS/NMS 시스템을 단독으로 설계·운영하였습니다.",
      showMore: "더 보기",
      showLess: "접기",
    },
    blog: {
      eyebrow: "블로그",
      title: "작성한 글",
      viewDetails: "자세히 보기",
      goToBlog: "블로그 바로가기",
    },
    documentation: {
      eyebrow: "문서화 & 품질",
      title: "문서화 & 품질 관리",
    },
    japan: {
      eyebrow: "일본 경험",
      title: "일본 생활 & 커뮤니케이션",
    },
    education: {
      eyebrow: "교육",
      title: "학력 & 자격증",
    },
    outro: {
      title: "감사합니다",
      message: "궁금한 점이 있으시면\n편하게 연락해주세요.",
      phone: "전화",
      email: "이메일",
      github: "깃허브",
    },
    projectDetail: {
      description: "설명",
      skills: "기술 스택",
      members: "참여 인원",
      period: "기간",
      links: "링크",
      backToHome: "← 홈으로",
      notFound: "프로젝트를 찾을 수 없습니다",
    },
  },
  jp: {
    nav: {
      skills: "スキル",
      experience: "経験",
      projects: "プロジェクト",
      blog: "ブログ",
      education: "教育",
      documentation: "ドキュメント",
      japan: "日本経験",
    },
    hero: {
      greeting: "こんにちは、",
      role: "フロントエンドエンジニア",
      name: "チェ・ヨンフン",
      subtitle: "通信管制システム10件以上を単独で設計・運用し、リアルタイムデータ処理とレガシー刷新を推進したフロントエンドエンジニアです。",
      cta: "履歴書ダウンロード",
    },
    introduce: {
      eyebrow: "INTRODUCE",
      title: "自己紹介",
      lastUpdated: "Latest Updated",
      paragraphs: [
        "通信インフラ管制システムを開発してきたフロントエンドエンジニアです。",
        "ReactとTypeScriptをベースに、EMS/NMS環境でリアルタイムモニタリングシステム開発、WebSocket（STOMP）ベースのデータ処理、障害対応及び運用安定化業務を遂行してきました。",
        "リアルタイムアラーム、設備状態モニタリング、統計可視化、プロビジョニング機能などを開発し、3万件以上のデータレンダリング最適化、API呼び出し約50%削減、障害対応時間約50%短縮などの改善作業を行いました。",
        "また、ドキュメントや標準が整備されていない環境でテストケース、運用ドキュメント、Wikiを構築して運用効率を高め、4年以上運用されたレガシープロジェクトのマイグレーションを実施し、ビルド時間を約40秒から6.7秒に短縮し保守性を改善しました。",
        "機能実装にとどまらず、運用環境で発生する問題を分析し、再発を防止できる構造を作ることに集中します。",
      ],
    },
    intro: {
      eyebrow: "コアコンピテンシー",
      title: "柔軟にコミュニケーションし、堅牢に開発します。",
    },
    skill: {
      eyebrow: "技術スタック",
      title: "スキルセット",
    },
    experience: {
      eyebrow: "経験",
      title: "業務 & プロジェクト",
      work: "業務経験",
      project: "プロジェクト",
      viewDetails: "詳細を見る",
      hideDetails: "閉じる",
    },
    project: {
      eyebrow: "プロジェクト",
      title: "作ってきたもの",
      company: "会社プロジェクト",
      personal: "個人プロジェクト",
      featured: "代表プロジェクト",
      core: "運用管制システム",
      coreDesc: "上記の代表プロジェクト以外にも、以下のEMS/NMSシステムを単独で設計・運用しました。",
      showMore: "もっと見る",
      showLess: "閉じる",
    },
    blog: {
      eyebrow: "ブログ",
      title: "書いた記事",
      viewDetails: "詳細を見る",
      goToBlog: "ブログへ",
    },
    documentation: {
      eyebrow: "ドキュメント & 品質",
      title: "ドキュメント & 品質管理",
    },
    japan: {
      eyebrow: "日本経験",
      title: "日本生活 & コミュニケーション",
    },
    education: {
      eyebrow: "教育",
      title: "学歴 & 資格",
    },
    outro: {
      title: "ありがとうございます",
      message: "ご質問がございましたら\nお気軽にご連絡ください。",
      phone: "電話",
      email: "メール",
      github: "GitHub",
    },
    projectDetail: {
      description: "説明",
      skills: "技術スタック",
      members: "メンバー",
      period: "期間",
      links: "リンク",
      backToHome: "← ホームへ",
      notFound: "プロジェクトが見つかりません",
    },
  },
};

export type Dictionary = typeof dictionaries.kr;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
