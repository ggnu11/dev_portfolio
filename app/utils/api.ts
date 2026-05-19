import {
  intros,
  skills,
  experiences,
  projects,
  blogs,
  educations,
} from "@/data";

export async function getIntros() {
  return intros;
}

export async function getSkills(ids?: number[]) {
  if (ids && ids.length > 0) {
    return skills.filter((s) => ids.includes(s.id));
  }
  return skills;
}

export async function getExperiences() {
  return [...experiences].sort((a, b) => a.index - b.index);
}

export async function getProjects() {
  return [...projects]
    .sort((a, b) => (a.row_number ?? 0) - (b.row_number ?? 0));
}

export async function getProjectById(id: number) {
  return projects.find((p) => p.id === id) ?? null;
}

export async function getBlogs() {
  return blogs;
}

export async function getEducations() {
  return educations;
}
