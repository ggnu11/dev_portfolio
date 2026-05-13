import { SectionWatcher } from "@/_components/SectionWatcher";
import SlideUpInView from "@/_components/SlideUpInView";
import ExpCard from "@/_components/ExpCard";
import { getExperiences, getSkills } from "@/utils/api";
import { parsePrismaJSON } from "@/utils/parsePrisma";

export default async function ExperienceSection() {
  const experiences = await getExperiences();
  const allSkills = await getSkills();

  const workExperiences = experiences.filter((e) => e.category === "WORK");
  const projectExperiences = experiences.filter(
    (e) => e.category === "PROJECT"
  );

  const getSkillsForExp = (skillIds: number[]) =>
    allSkills.filter((s) => skillIds.includes(s.id));

  const renderExpList = (exps: typeof experiences) =>
    exps.map((exp) => (
      <ExpCard
        key={exp.id}
        title={exp.title}
        subTitle={exp.sub_title}
        period={exp.period}
        items={exp.items}
        links={exp.links.map((l) =>
          parsePrismaJSON<{ href: string; label: string }>(l)
        )}
        isActive={exp.is_active}
        skills={getSkillsForExp(exp.skill_ids)}
      />
    ));

  return (
    <SectionWatcher id="experience">
      <SlideUpInView>
        <p className="section-eyebrow">Experience</p>
        <h2 className="section-title">Work & Projects</h2>

        {/* Work Experience */}
        <div className="w-full mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-foreground/15" />
            <span className="text-sm text-foreground/40 font-medium">
              Work Experience
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-foreground/15" />
          </div>
          <div className="divide-y divide-foreground/10">
            {renderExpList(workExperiences)}
          </div>
        </div>

        {/* Projects */}
        <div className="w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-foreground/15" />
            <span className="text-sm text-foreground/40 font-medium">
              Projects
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-foreground/15" />
          </div>
          <div className="divide-y divide-foreground/10">
            {renderExpList(projectExperiences)}
          </div>
        </div>
      </SlideUpInView>
    </SectionWatcher>
  );
}
