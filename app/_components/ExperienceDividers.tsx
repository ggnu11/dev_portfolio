"use client";

import { ReactNode } from "react";
import { useI18n } from "@/i18n/context";

export default function ExperienceDividers({
  workChildren,
  projectChildren,
}: {
  workChildren: ReactNode;
  projectChildren: ReactNode;
}) {
  const { t } = useI18n();

  return (
    <>
      <div className="w-full mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-foreground/15" />
          <span className="text-sm text-foreground/40 font-medium">
            {t.experience.work}
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-foreground/15" />
        </div>
        {workChildren}
      </div>

      <div className="w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-foreground/15" />
          <span className="text-sm text-foreground/40 font-medium">
            {t.experience.project}
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-foreground/15" />
        </div>
        {projectChildren}
      </div>
    </>
  );
}
