import { SectionWatchProvider } from "@/_components/SectionWatcher";
import Header from "@/_components/Header";
import MainSection from "@/_sections/MainSection";
import IntroduceSection from "@/_sections/IntroduceSection";
import IntroSection from "@/_sections/IntroSection";
import ExperienceSection from "@/_sections/ExperienceSection";
import ProjectSection from "@/_sections/ProjectSection";
import SkillSection from "@/_sections/SkillSection";
import DocumentationSection from "@/_sections/DocumentationSection";
import JapanSection from "@/_sections/JapanSection";
import EducationSection from "@/_sections/EducationSection";
import OutroSection from "@/_sections/OutroSection";

export default function Home() {
  return (
    <SectionWatchProvider>
      <main className="w-full max-w-screen-lg min-h-screen mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center relative">
        <MainSection />
        <Header className="mb-10" />
        <IntroduceSection />
        <IntroSection />
        <ExperienceSection />
        <ProjectSection />
        <SkillSection />
        <DocumentationSection />
        <JapanSection />
        <EducationSection />
        <OutroSection />
      </main>
    </SectionWatchProvider>
  );
}
