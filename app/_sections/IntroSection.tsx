import SlideUpInView from "@/_components/SlideUpInView";
import FeatureItems from "@/_components/FeatureItems";
import { getIntros } from "@/utils/api";

export default async function IntroSection() {
  const intros = await getIntros();

  return (
    <section id="intro">
      <SlideUpInView>
        <p className="section-eyebrow">Core Competencies</p>
        <h2 className="section-title">
          I communicate flexibly and develop robustly.
        </h2>
        <FeatureItems items={intros} />
      </SlideUpInView>
    </section>
  );
}
