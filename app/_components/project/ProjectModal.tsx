import Image from "next/image";
import parse from "html-react-parser";
import { getProjectById, getSkills } from "@/utils/api";
import { parsePrismaJSON } from "@/utils/parsePrisma";
import { resolveText } from "@/data";
import ProjectMetaGrid from "./ProjectMetaGrid";
import ProjectNotFound from "./ProjectNotFound";

const imageRatioMap: Record<string, { w: number; h: number }> = {
  SQUARE: { w: 312, h: 312 },
  PORTRAIT: { w: 468, h: 903 },
  LANDSCAPE: { w: 384, h: 208 },
};

export default async function ProjectModal({ id }: { id: number }) {
  const project = await getProjectById(id);
  if (!project) return <ProjectNotFound />;

  const skills = await getSkills(project.skill_ids);
  const links = project.links.map((l) =>
    parsePrismaJSON<{ href: string; label: string }>(l)
  );

  const shapeVariant = project.id % 9;

  return (
    <div className="p-6 md:p-8">
      <Image
        src={`/assets/shape-variant-${shapeVariant}.svg`}
        alt=""
        width={32}
        height={32}
        className="mb-4"
      />

      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left">
        {parse(project.title)}
      </h2>

      <ProjectMetaGrid
        subTitle={project.sub_title}
        skills={skills}
        member={project.member}
        period={project.period}
        links={links}
      />

      <hr className="border-foreground/15 mb-6" />

      <ol className="space-y-8">
        {project.items.map((item, idx) => (
          <li key={item.id}>
            <h3 className="text-base md:text-lg font-semibold mb-2">
              {idx + 1}. {resolveText(item.title, "kr")}
            </h3>
            <ul className="text-sm text-foreground/80 space-y-1 mb-4">
              {item.content.map((c, i) => (
                <li key={i}>{parse(resolveText(c, "kr"))}</li>
              ))}
            </ul>
            {item.blobUrl && (
              <div className="relative">
                <Image
                  src={item.blobUrl}
                  alt={resolveText(item.title, "kr")}
                  width={
                    item.image_ratio
                      ? imageRatioMap[item.image_ratio].w
                      : 384
                  }
                  height={
                    item.image_ratio
                      ? imageRatioMap[item.image_ratio].h
                      : 208
                  }
                  className="rounded-lg"
                />
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
