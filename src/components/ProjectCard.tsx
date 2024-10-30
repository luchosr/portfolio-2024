import TechChip from "./TechChip";

type ProjectCardProps = {
  name: string;
  description: string;
  link: string;
  stack: string[];
  imgsrc: string;
};
export default function ProjectCard({
  name,
  description,
  link,
  stack,
  imgsrc,
}: ProjectCardProps) {
  return (
    <article className="my-4 flex flex-row rounded-md border border-slate-800 px-2 dark:border-slate-300">
      <a
        href={link}
        target="_blank"
        rel=" noopener noreferrer"
        aria-label="Drinks Cart App"
      >
        <div className="flex flex-col px-4 py-2">
          <div className="space-around flex flex-row py-2">
            <h3 className="text-xl font-bold">{name}</h3>
          </div>

          <p className="text-sm">{description}</p>
          <div className="my-4 flex flex-row flex-wrap">
            {stack.map((tech) => (
              <TechChip key={tech} tech={tech} />
            ))}
          </div>
          <figure>
            <img
              src={imgsrc}
              alt="Luciano Ramello"
              loading="lazy"
              className="mb-2 w-auto"
            />
          </figure>
        </div>
      </a>
    </article>
  );
}
