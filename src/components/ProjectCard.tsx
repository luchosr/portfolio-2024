import { IoLogoGithub } from "react-icons/io5";
import TechChip from "./TechChip";

type ProjectCardProps = {
  name: string;
  description: string;
  link: string;
  stack: string[];
};
export default function ProjectCard({
  name,
  description,
  link,
  stack,
}: ProjectCardProps) {
  return (
    <article className="my-4 flex max-w-xl flex-row rounded-md border border-slate-800 px-2 dark:border-slate-300">
      <a
        href={link}
        target="_blank"
        rel=" noopener noreferrer"
        aria-label="Drinks Cart App"
      >
        <div className="flex flex-col px-4 py-2">
          <div className="space-around flex w-2/3 flex-row py-2 md:w-2/5">
            <h3 className="text-xl font-bold">{name}</h3>

            <IoLogoGithub className="m-auto w-1/5 text-2xl" />
          </div>

          <p className="text-sm">{description}</p>
          <div className="my-4 flex flex-row flex-wrap">
            {stack.map((tech) => (
              <TechChip key={tech} tech={tech} />
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}
