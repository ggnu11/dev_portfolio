import type { I18nText } from "@/data";

export type ProjectLink = {
  href: string;
  label: string;
};

export type ProjectItemType = {
  id: number;
  title: I18nText | string;
  content: (I18nText | string)[];
  blobUrl: string | null;
  row_number: number | null;
  image_ratio: "PORTRAIT" | "LANDSCAPE" | "SQUARE" | null;
};

export type ProjectType = {
  id: number;
  title: string;
  sub_title: I18nText | string;
  period: I18nText | string;
  member: string;
  skills: string[];
  links: ProjectLink[];
  skill_ids: number[];
  row_number: number | null;
  items: ProjectItemType[];
};

export type SkillData = {
  id: number;
  item: string;
  blobUrl: string;
  category: string;
};

export type FullProject = {
  id: number;
  title: string;
  sub_title: I18nText | string;
  period: I18nText | string;
  member: string;
  skillData: SkillData[];
  links: ProjectLink[];
  items: ProjectItemType[];
  category: "COMPANY" | "PERSONAL";
};
