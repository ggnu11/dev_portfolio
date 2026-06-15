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
      role: "프론트엔드 개발자",
      name: "최영훈",
      subtitle: "모던 기술로 매끄러운 웹 경험을 만듭니다.",
      cta: "이력서 다운로드",
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
      role: "フロントエンド開発者",
      name: "チェ・ヨンフン",
      subtitle: "モダン技術で滑らかなWeb体験を作ります。",
      cta: "履歴書ダウンロード",
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
