import Image from "next/image";
import { ChevronsRight } from "react-feather";

type Props = {
  title: string;
  date: string;
  forwardLink: string;
  bgImageUrl: string;
};

export default function BlogCard({
  title,
  date,
  forwardLink,
  bgImageUrl,
}: Props) {
  return (
    <a
      href={forwardLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full h-fit md:h-64 xl:h-72 rounded-md md:rounded-lg overflow-hidden no-underline block"
    >
      <Image
        src={bgImageUrl}
        alt={title}
        fill
        className="object-cover"
      />
      <div className="relative z-10 bg-black/50 backdrop-blur-[2px] group-hover:backdrop-blur p-5 md:p-6 h-full flex flex-col justify-end">
        <h3 className="text-white text-lg md:text-xl font-bold mb-2">
          {title}
        </h3>
        <div className="flex items-center justify-between text-white/60 text-sm">
          <span>{date}</span>
          <span className="flex items-center gap-1">
            View details <ChevronsRight size={14} />
          </span>
        </div>
      </div>
    </a>
  );
}
