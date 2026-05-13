import { SectionWatcher } from "@/_components/SectionWatcher";
import SlideUpInView from "@/_components/SlideUpInView";
import SkillItems from "@/_components/skill/SkillItems";
import { getSkills } from "@/utils/api";

export default async function SkillSection() {
  const skills = await getSkills();

  return (
    <SectionWatcher id="skill">
      <SlideUpInView>
        <p className="section-eyebrow">Technical Skills</p>
        <h2 className="section-title">My Skillset</h2>
        <SkillItems skills={skills} />
      </SlideUpInView>
    </SectionWatcher>
  );
}
