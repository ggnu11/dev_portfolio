import SlideUpInView from "@/_components/SlideUpInView";
import SectionHeader from "@/_components/SectionHeader";
import FeatureItems from "@/_components/FeatureItems";
import { getIntros } from "@/utils/api";

export default async function IntroSection() {
  const intros = await getIntros();

  return (
    <section id="intro">
      <SlideUpInView>
        <SectionHeader section="intro" />
        <FeatureItems items={intros} />
      </SlideUpInView>
    </section>
  );
}
