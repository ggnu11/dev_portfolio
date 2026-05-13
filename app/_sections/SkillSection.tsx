import { SectionWatcher } from "@/_components/SectionWatcher";
import SlideUpInView from "@/_components/SlideUpInView";
import SectionHeader from "@/_components/SectionHeader";
import SkillItems from "@/_components/skill/SkillItems";
import { getSkills } from "@/utils/api";

export default async function SkillSection() {
  const skills = await getSkills();

  return (
    <SectionWatcher id="skill">
      <SlideUpInView>
        <SectionHeader section="skill" />
        <SkillItems skills={skills} />
      </SlideUpInView>
    </SectionWatcher>
  );
}
