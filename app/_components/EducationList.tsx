"use client";

import { useI18n } from "@/i18n/context";
import { resolveText, type I18nText } from "@/data";
import EducationCard from "./EducationCard";

type EducationData = {
  id: number;
  title: I18nText | string;
  sub_title: I18nText | string;
  period: I18nText | string;
  items: (I18nText | string)[];
  category: string;
};

export default function EducationList({ educations }: { educations: EducationData[] }) {
  const { locale } = useI18n();

  const educationItems = educations.filter((e) => e.category === "EDUCATION");
  const certItems = educations.filter((e) => e.category === "CERTIFICATION");

  return (
    <>
      {educationItems.length > 0 && (
        <div className="divide-y divide-foreground/10 mb-8">
          {educationItems.map((edu) => (
            <EducationCard
              key={edu.id}
              title={resolveText(edu.title, locale)}
              subTitle={resolveText(edu.sub_title, locale)}
              period={resolveText(edu.period, locale)}
              items={edu.items.map((item) => resolveText(item, locale))}
            />
          ))}
        </div>
      )}

      {certItems.length > 0 && (
        <>
          <div className="w-full h-[1px] bg-gradient-to-r from-foreground/0 via-foreground/15 to-foreground/0 mb-8" />
          <div className="divide-y divide-foreground/10">
            {certItems.map((cert) => (
              <EducationCard
                key={cert.id}
                title={resolveText(cert.title, locale)}
                subTitle={resolveText(cert.sub_title, locale)}
                period={resolveText(cert.period, locale)}
                items={cert.items.map((item) => resolveText(item, locale))}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
