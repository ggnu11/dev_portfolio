import ProjectSectionClient from "@/_components/project/ProjectSectionClient";
import { getProjects, getSkills } from "@/utils/api";
import { parsePrismaJSON } from "@/utils/parsePrisma";

export default async function ProjectSection() {
  const projects = await getProjects();
  const allSkills = await getSkills();

  const fullProjects = projects.map((p) => ({
    id: p.id,
    title: p.title,
    sub_title: p.sub_title,
    period: p.period,
    member: p.member,
    skillData: allSkills.filter((s) => p.skill_ids.includes(s.id)),
    links: p.links.map((l) =>
      parsePrismaJSON<{ href: string; label: string }>(l)
    ),
    items: p.items.map((item) => ({
      id: item.id,
      title: item.title,
      content: item.content,
      blobUrl: item.blobUrl,
      image_ratio: item.image_ratio,
      row_number: item.row_number,
    })),
  }));

  return <ProjectSectionClient projects={fullProjects} />;
}
