type Skill = {
  id: number;
  item: string;
  blobUrl: string;
  category: string;
};

export default function SkillKeywords({ skills }: { skills: Skill[] }) {
  if (skills.length === 0) return null;

  return (
    <div className="mt-1 flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill.id}
          className="text-[12px] font-semibold px-2.5 py-0.5 rounded-full bg-[#00C676] text-white border border-[#00C676]"
        >
          {skill.item}
        </span>
      ))}
    </div>
  );
}
