import { ReactNode } from "react";

type CTAButtonProps = {
  children: ReactNode;
  href?: string;
  icon?: ReactNode;
};

export default function CTAButton({ children, href, icon }: CTAButtonProps) {
  const content = (
    <button className="flex items-center justify-center gap-2 px-7 py-2 min-w-40 bg-foreground/5 rounded-lg hover:bg-foreground/10 text-foreground/65 font-semibold text-base md:text-sm transition-colors">
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline"
      >
        {content}
      </a>
    );
  }

  return content;
}
