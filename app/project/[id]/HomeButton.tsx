"use client";

import Link from "next/link";

export default function HomeButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-1 text-sm text-foreground/60 hover:text-foreground mb-6 no-underline"
    >
      &larr; Back to Home
    </Link>
  );
}
