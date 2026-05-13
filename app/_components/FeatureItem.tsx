import Image from "next/image";
import parse from "html-react-parser";

type Props = {
  title: string;
  detail: string;
  blobUrl?: string | null;
};

export default function FeatureItem({ title, detail, blobUrl }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {blobUrl && (
        <div className="w-full h-60 relative rounded-lg overflow-hidden shadow">
          <Image
            src={blobUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
      <p className="text-sm text-foreground/60">{parse(detail)}</p>
    </div>
  );
}
