import { SectionWatchProvider } from "@/_components/SectionWatcher";
import Header from "@/_components/Header";
import MainSection from "@/_sections/MainSection";
import SkillSection from "@/_sections/SkillSection";
import ExperienceSection from "@/_sections/ExperienceSection";
import ProjectSection from "@/_sections/ProjectSection";

import EducationSection from "@/_sections/EducationSection";
import OutroSection from "@/_sections/OutroSection";

export default function Home() {
  return (
    <SectionWatchProvider>
      <main className="w-full max-w-screen-lg min-h-screen mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center relative">
        <MainSection />
        <Header className="mb-10" />
        <SkillSection />
        <ExperienceSection />
        <ProjectSection />
        <EducationSection />
        <OutroSection />
      </main>
    </SectionWatchProvider>
  );
}
