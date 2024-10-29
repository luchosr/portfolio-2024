type TechChipProps = {
  tech: string;
};
export default function TechChip({ tech }: TechChipProps) {
  return (
    <div
      className="text-brown-900 m-1 rounded-md border border-slate-950 p-2 dark:border-slate-400 dark:text-slate-200"
      key={tech}
    >
      <p>{tech}</p>
    </div>
  );
}
