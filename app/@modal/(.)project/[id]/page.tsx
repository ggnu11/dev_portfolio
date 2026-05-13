import ProjectModal from "@/_components/project/ProjectModal";

export default async function ModalProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProjectModal id={Number(id)} />;
}
