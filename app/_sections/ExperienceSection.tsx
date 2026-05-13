import { SectionWatcher } from "@/_components/SectionWatcher";
import SlideUpInView from "@/_components/SlideUpInView";
import SectionHeader from "@/_components/SectionHeader";
import ExpCard from "@/_components/ExpCard";
import { getExperiences, getSkills } from "@/utils/api";
import { parsePrismaJSON } from "@/utils/parsePrisma";
import ExperienceDividers from "@/_components/ExperienceDividers";

export default async function ExperienceSection() {
  const experiences = await getExperiences();
  const allSkills = await getSkills();

  const workExperiences = experiences.filter((e) => e.category === "WORK");
  const projectExperiences = experiences.filter((e) => e.category === "PROJECT");

  const getSkillsForExp = (skillIds: number[]) =>
    allSkills.filter((s) => skillIds.includes(s.id));

  const renderExpList = (exps: typeof experiences) =>
    exps.map((exp) => (
      <ExpCard
        key={exp.id}
        title={exp.title}
        subTitle={exp.sub_title}
        period={exp.period}
        items={exp.items}
        links={exp.links.map((l) =>
          parsePrismaJSON<{ href: string; label: string }>(l)
        )}
        isActive={exp.is_active}
        skills={getSkillsForExp(exp.skill_ids)}
      />
    ));

  return (
    <SectionWatcher id="experience">
      <SlideUpInView>
        <SectionHeader section="experience" />
        <ExperienceDividers
          workChildren={<div className="divide-y divide-foreground/10">{renderExpList(workExperiences)}</div>}
          projectChildren={<div className="divide-y divide-foreground/10">{renderExpList(projectExperiences)}</div>}
        />
      </SlideUpInView>
    </SectionWatcher>
  );
}
