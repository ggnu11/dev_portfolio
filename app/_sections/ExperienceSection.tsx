import { SectionWatcher } from "@/_components/SectionWatcher";
import SlideUpInView from "@/_components/SlideUpInView";
import SectionHeader from "@/_components/SectionHeader";
import ExpTimeline from "@/_components/ExpTimeline";
import { getExperiences, getSkills } from "@/utils/api";
import { parsePrismaJSON } from "@/utils/parsePrisma";

export default async function ExperienceSection() {
  const experiences = await getExperiences();
  const allSkills = await getSkills();

  const getSkillsForExp = (skillIds: number[]) =>
    allSkills.filter((s) => skillIds.includes(s.id));

  const entries = experiences
    .filter((e) => e.category === "WORK" || e.category === "PROJECT")
    .map((exp) => ({
      id: exp.id,
      title: exp.title,
      subTitle: exp.sub_title,
      period: exp.period,
      items: exp.items,
      links: exp.links.map((l) =>
        parsePrismaJSON<{ href: string; label: string }>(l)
      ),
      isActive: exp.is_active,
      skills: getSkillsForExp(exp.skill_ids),
      category: exp.category as "WORK" | "PROJECT",
    }));

  return (
    <SectionWatcher id="experience">
      <SlideUpInView>
        <SectionHeader section="experience" />
      </SlideUpInView>
      <ExpTimeline entries={entries} />
    </SectionWatcher>
  );
}
