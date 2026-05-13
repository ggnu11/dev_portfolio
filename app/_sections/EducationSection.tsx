import { SectionWatcher } from "@/_components/SectionWatcher";
import SlideUpInView from "@/_components/SlideUpInView";
import EducationCard from "@/_components/EducationCard";
import { getEducations } from "@/utils/api";

export default async function EducationSection() {
  const educations = await getEducations();

  const educationItems = educations.filter((e) => e.category === "EDUCATION");
  const certItems = educations.filter((e) => e.category === "CERTIFICATION");

  return (
    <SectionWatcher id="education">
      <SlideUpInView>
        <p className="section-eyebrow">Education</p>
        <h2 className="section-title">Education & Certifications</h2>

        {educationItems.length > 0 && (
          <div className="divide-y divide-foreground/10 mb-8">
            {educationItems.map((edu) => (
              <EducationCard
                key={edu.id}
                title={edu.title}
                subTitle={edu.sub_title}
                period={edu.period}
                items={edu.items}
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
                  title={cert.title}
                  subTitle={cert.sub_title}
                  period={cert.period}
                  items={cert.items}
                />
              ))}
            </div>
          </>
        )}
      </SlideUpInView>
    </SectionWatcher>
  );
}
