import { SectionWatcher } from "@/_components/SectionWatcher";
import SlideUpInView from "@/_components/SlideUpInView";
import SectionHeader from "@/_components/SectionHeader";
import EducationList from "@/_components/EducationList";
import { getEducations } from "@/utils/api";

export default async function EducationSection() {
  const educations = await getEducations();

  return (
    <SectionWatcher id="education">
      <SlideUpInView>
        <SectionHeader section="education" />
        <EducationList educations={educations} />
      </SlideUpInView>
    </SectionWatcher>
  );
}
