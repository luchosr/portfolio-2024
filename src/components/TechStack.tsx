import React from "react";

type TechStackSectionProps = {
  techStack: string[];
};
export default function TechStackSection({ techStack }: TechStackSectionProps) {
  return (
    <section className="mt-10 w-full px-6">
      <h2 className="text-start text-2xl underline dark:text-orange-200">
        This is my tech stack:
      </h2>
      <article className="flex flex-wrap gap-2 py-4 text-xs uppercase text-neutral-800">
        {techStack.map((tech) => (
          <div
            className="text-brown-900 rounded-md border p-2 dark:text-slate-200"
            key={tech}
          >
            <p>{tech}</p>
          </div>
        ))}
      </article>
      <div className=""></div>
    </section>
  );
}
