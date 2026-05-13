import Image from "next/image";
import classnames from "classnames";

type Size = "xs" | "sm" | "md";

const sizeMap: Record<Size, number> = {
  xs: 24,
  sm: 32,
  md: 48,
};

type Props = {
  name: string;
  iconUrl: string;
  size?: Size;
  isActive?: boolean;
};

export default function SkillItem({
  name,
  iconUrl,
  size = "md",
  isActive = true,
}: Props) {
  const px = sizeMap[size];

  return (
    <div
      className={classnames("relative group flex items-center justify-center", {
        "opacity-15 blur-md": !isActive,
      })}
    >
      <Image src={iconUrl} alt={name} width={px} height={px} />
      <span className="absolute top-full mt-1 bg-foreground/75 text-background rounded text-xs md:text-sm px-2 py-0.5 whitespace-nowrap invisible group-hover:visible">
        {name}
      </span>
    </div>
  );
}
