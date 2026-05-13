import ProjectModal from "@/_components/project/ProjectModal";
import HomeButton from "./HomeButton";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="max-w-screen-md mx-auto py-10 px-5">
      <HomeButton />
      <ProjectModal id={Number(id)} />
    </div>
  );
}
