"use client";

import { ExternalLink } from "react-feather";
import CTAButton from "./buttons/CTAButton";
import { useI18n } from "@/i18n/context";

export default function BlogGoButton() {
  const { t } = useI18n();

  return (
    <CTAButton href="https://velog.io" icon={<ExternalLink size={16} />}>
      {t.blog.goToBlog}
    </CTAButton>
  );
}
