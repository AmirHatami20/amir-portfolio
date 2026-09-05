import { notFound } from "next/navigation";

import ProjectDetails from "@/components/sections/projects/ProjectDetails";
import { getProjectBySlug, projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const generateStaticParams = () => {
  return projects.map((project) => ({
    slug: project.slug,
  }));
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
