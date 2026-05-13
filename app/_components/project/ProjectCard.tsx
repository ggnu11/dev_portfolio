import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import classnames from "classnames";
import SkillItem from "../skill/SkillItem";

type Skill = {
  id: number;
  item: string;
  blobUrl: string;
};

type Props = {
  id: number;
  title: string;
  subTitle: string;
  skills: Skill[];
};

export default function ProjectCard({ id, title, subTitle, skills }: Props) {
  const colorIdx = id % 3;
  const shapeVariant = id % 9;

  return (
    <Link
      href={`/project/${id}`}
      scroll={false}
      className={classnames(
        "group block w-full h-fit md:h-72 p-5 md:p-6 border border-foreground/15 hover:border-foreground/0 rounded-md md:rounded-lg transition-colors no-underline text-foreground",
        {
          "hover:bg-blue": colorIdx === 0,
          "hover:bg-green": colorIdx === 1,
          "hover:bg-lime hover:text-gray-800": colorIdx === 2,
        }
      )}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="w-8 h-8 mb-4 relative">
            <Image
              src={`/assets/shape-variant-${shapeVariant}.svg`}
              alt=""
              width={32}
              height={32}
              className="group-hover:hidden"
            />
            <Image
              src={`/assets/shape-variant-${shapeVariant}-invert.svg`}
              alt=""
              width={32}
              height={32}
              className="hidden group-hover:block absolute top-0 left-0"
            />
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-1">
            {parse(title)}
          </h3>
          <p className="text-sm opacity-60 hidden md:inline-block">
            {subTitle}
          </p>
        </div>
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill) => (
              <SkillItem
                key={skill.id}
                name={skill.item}
                iconUrl={skill.blobUrl}
                size="xs"
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
