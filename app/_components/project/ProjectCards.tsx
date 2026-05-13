"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

type Skill = {
  id: number;
  item: string;
  blobUrl: string;
};

type Project = {
  id: number;
  title: string;
  sub_title: string;
  skillData: Skill[];
};

export default function ProjectCards({ projects }: { projects: Project[] }) {
  const [showCount, setShowCount] = useState(6);
  const visible = projects.slice(0, showCount);

  return (
    <>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 w-full">
        {visible.map((p) => (
          <ProjectCard
            key={p.id}
            id={p.id}
            title={p.title}
            subTitle={p.sub_title}
            skills={p.skillData}
          />
        ))}
      </div>
      {showCount < projects.length && (
        <button
          onClick={() => setShowCount((c) => c + 6)}
          className="mt-8 px-7 py-2 min-w-40 bg-foreground/5 rounded-lg hover:bg-foreground/10 text-foreground/65 font-semibold text-base md:text-sm transition-colors"
        >
          Show More
        </button>
      )}
    </>
  );
}
