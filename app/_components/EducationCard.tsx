import parse from "html-react-parser";

type Props = {
  title: string;
  subTitle: string;
  period: string;
  items: string[];
};

export default function EducationCard({
  title,
  subTitle,
  period,
  items,
}: Props) {
  return (
    <div className="grid sm:grid-cols-3 sm:gap-x-10 py-6">
      <div className="mb-2 sm:mb-0">
        <span className="text-sm text-foreground/60 before:content-['*'] before:mr-1">
          {period}
        </span>
      </div>
      <div className="sm:col-span-2">
        <h3 className="text-base md:text-lg font-semibold">{title}</h3>
        <p className="text-xs md:text-sm text-foreground/60 mt-1">
          {subTitle}
        </p>
        {items.length > 0 && (
          <ul className="mt-3 text-sm text-foreground/80 space-y-1">
            {items.map((item, idx) => (
              <li key={idx}>{parse(item)}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
