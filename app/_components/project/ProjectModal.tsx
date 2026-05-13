import Image from "next/image";
import parse from "html-react-parser";
import { getProjectById, getSkills } from "@/utils/api";
import { parsePrismaJSON } from "@/utils/parsePrisma";
import SkillItem from "../skill/SkillItem";

const imageRatioMap = {
  SQUARE: { w: 312, h: 312 },
  PORTRAIT: { w: 468, h: 903 },
  LANDSCAPE: { w: 384, h: 208 },
};

export default async function ProjectModal({ id }: { id: number }) {
  const project = await getProjectById(id);
  if (!project) return <div className="p-8">Project not found</div>;

  const skills = await getSkills(project.skill_ids);
  const links = project.links.map((l) =>
    parsePrismaJSON<{ href: string; label: string }>(l)
  );

  const shapeVariant = project.id % 9;

  return (
    <div className="p-6 md:p-8">
      {/* Shape icon */}
      <Image
        src={`/assets/shape-variant-${shapeVariant}.svg`}
        alt=""
        width={32}
        height={32}
        className="mb-4"
      />

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left">
        {parse(project.title)}
      </h2>

      {/* Metadata grid */}
      <div className="grid grid-cols-2 gap-4 text-sm mb-6">
        <div>
          <span className="text-foreground/50 block mb-1">Description</span>
          <span>{project.sub_title}</span>
        </div>
        <div>
          <span className="text-foreground/50 block mb-1">Skills</span>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <SkillItem
                key={s.id}
                name={s.item}
                iconUrl={s.blobUrl}
                size="xs"
              />
            ))}
          </div>
        </div>
        <div>
          <span className="text-foreground/50 block mb-1">Members</span>
          <span>{project.member}</span>
        </div>
        <div>
          <span className="text-foreground/50 block mb-1">Period</span>
          <span>{project.period}</span>
        </div>
        {links.length > 0 && (
          <div className="col-span-2">
            <span className="text-foreground/50 block mb-1">Links</span>
            <div className="flex flex-wrap gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Divider */}
      <hr className="border-foreground/15 mb-6" />

      {/* Detail items */}
      <ol className="space-y-8">
        {project.items.map((item, idx) => (
          <li key={item.id}>
            <h3 className="text-base md:text-lg font-semibold mb-2">
              {idx + 1}. {item.title}
            </h3>
            <ul className="text-sm text-foreground/80 space-y-1 mb-4">
              {item.content.map((c, i) => (
                <li key={i}>{parse(c)}</li>
              ))}
            </ul>
            {item.blobUrl && (
              <div className="relative">
                <Image
                  src={item.blobUrl}
                  alt={item.title}
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
