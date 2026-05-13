import { prisma } from "@/lib/prisma";

export async function getIntros() {
  return prisma.intro.findMany({ orderBy: { id: "asc" } });
}

export async function getSkills(ids?: number[]) {
  if (ids && ids.length > 0) {
    return prisma.skill.findMany({
      where: { id: { in: ids } },
      orderBy: { category: "asc" },
    });
  }
  return prisma.skill.findMany({ orderBy: { category: "asc" } });
}

export async function getExperiences() {
  return prisma.experience.findMany({ orderBy: { index: "asc" } });
}

export async function getProjects() {
  return prisma.project.findMany({
    include: { items: { orderBy: { row_number: "asc" } } },
    orderBy: { row_number: "asc" },
  });
}

export async function getProjectById(id: number) {
  return prisma.project.findUnique({
    where: { id },
    include: { items: { orderBy: { row_number: "asc" } } },
  });
}

export async function getBlogs() {
  return prisma.blog.findMany();
}

export async function getEducations() {
  return prisma.education.findMany({ orderBy: { id: "asc" } });
}
