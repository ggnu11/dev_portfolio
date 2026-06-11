import { SectionWatcher } from "@/_components/SectionWatcher";
import ExpTimeline from "@/_components/ExpTimeline";
import { getExperiences, getSkills } from "@/utils/api";

export default async function ExperienceSection() {
  const experiences = await getExperiences();
  const allSkills = await getSkills();

  const getSkillsForExp = (skillIds: number[]) =>
    allSkills.filter((s) => skillIds.includes(s.id));

  const entries = experiences
    .filter((e) => e.category === "WORK")
    .map((exp) => ({
      id: exp.id,
      title: exp.title,
      subTitle: exp.sub_title,
      period: exp.period,
      items: exp.items,
      links: exp.links,
      isActive: exp.is_active,
      skills: getSkillsForExp(exp.skill_ids),
    }));

  return (
    <SectionWatcher id="experience">
      <ExpTimeline entries={entries} />
    </SectionWatcher>
  );
}
