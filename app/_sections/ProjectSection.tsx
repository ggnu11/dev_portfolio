import { SectionWatcher } from "@/_components/SectionWatcher";
import SlideUpInView from "@/_components/SlideUpInView";
import SectionHeader from "@/_components/SectionHeader";
import ProjectCards from "@/_components/project/ProjectCards";
import { getProjects, getSkills } from "@/utils/api";

export default async function ProjectSection() {
  const projects = await getProjects();
  const allSkills = await getSkills();

  const projectsWithSkills = projects.map((p) => ({
    id: p.id,
    title: p.title,
    sub_title: p.sub_title,
    skillData: allSkills.filter((s) => p.skill_ids.includes(s.id)),
  }));

  return (
    <SectionWatcher id="project">
      <SlideUpInView className="flex flex-col items-center">
        <SectionHeader section="project" />
        <ProjectCards projects={projectsWithSkills} />
      </SlideUpInView>
    </SectionWatcher>
  );
}
