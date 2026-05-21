"use client";

import { useI18n } from "@/i18n/context";
import { resolveText, type I18nText } from "@/data";
import SkillItem from "../skill/SkillItem";

type Skill = {
  id: number;
  item: string;
  blobUrl: string;
};

type Link = {
  href: string;
  label: string;
};

type Props = {
  subTitle: I18nText | string;
  skills: Skill[];
  member: string;
  period: I18nText | string;
  links: Link[];
};

export default function ProjectMetaGrid({
  subTitle,
  skills,
  member,
  period,
  links,
}: Props) {
  const { t, locale } = useI18n();

  return (
    <div className="grid grid-cols-2 gap-4 text-sm mb-6">
      <div>
        <span className="text-foreground/50 block mb-1">
          {t.projectDetail.description}
        </span>
        <span>{resolveText(subTitle, locale)}</span>
      </div>
      <div>
        <span className="text-foreground/50 block mb-1">
          {t.projectDetail.skills}
        </span>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <SkillItem
              key={s.id}
              name={s.item}
              iconUrl={s.blobUrl}
              size="xs"
            />
          ))}
        </div>
      </div>
      <div>
        <span className="text-foreground/50 block mb-1">
          {t.projectDetail.members}
        </span>
        <span>{member}</span>
      </div>
      <div>
        <span className="text-foreground/50 block mb-1">
          {t.projectDetail.period}
        </span>
        <span>{resolveText(period, locale)}</span>
      </div>
      {links.length > 0 && (
        <div className="col-span-2">
          <span className="text-foreground/50 block mb-1">
            {t.projectDetail.links}
          </span>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
