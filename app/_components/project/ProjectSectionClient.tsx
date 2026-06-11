"use client";

import { SectionWatcher } from "@/_components/SectionWatcher";
import ProjectGrid from "./ProjectGrid";
import type { FullProject } from "./types";

export default function ProjectSectionClient({
  projects,
}: {
  projects: FullProject[];
}) {
  return (
    <SectionWatcher id="project">
      <ProjectGrid projects={projects} />
    </SectionWatcher>
  );
}
