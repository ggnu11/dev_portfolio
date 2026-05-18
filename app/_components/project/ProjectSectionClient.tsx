"use client";

import { SectionWatcher } from "@/_components/SectionWatcher";
import SlideUpInView from "@/_components/SlideUpInView";
import SectionHeader from "@/_components/SectionHeader";
import ProjectGrid from "./ProjectGrid";
import type { FullProject } from "./types";

export default function ProjectSectionClient({
  projects,
}: {
  projects: FullProject[];
}) {
  return (
    <SectionWatcher id="project">
      <SlideUpInView className="flex flex-col items-center">
        <SectionHeader section="project" />
        <ProjectGrid projects={projects} />
      </SlideUpInView>
    </SectionWatcher>
  );
}
