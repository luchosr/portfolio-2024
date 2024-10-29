import { PROJECTS_DATA } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="mt-10 w-full max-w-2xl px-6">
      <h2 className="text-start text-2xl underline dark:text-orange-200">
        Here are some of my recent projects:
      </h2>
      {PROJECTS_DATA.map((project) => (
        <ProjectCard {...project} key={project.name} />
      ))}
    </section>
  );
}
