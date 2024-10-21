import profilePic from "../images/profilePic.webp";

export default function Header() {
  return (
    <header className="mx-auto mt-24 flex max-w-2xl flex-col items-center md:flex-row">
      <div className="mt-2 flex-1 md:mt-0 md:w-2/3">
        <h1 className="text-center text-3xl no-underline md:text-left">
          Hey, I&#39;m Luciano.
        </h1>
        <p className="mb-6 mt-3 w-11/12 text-center md:text-left">
          I&#39;m a <span className="font-bold">React.js | Next.js</span>{" "}
          frontend developer based in Madrid, Spain. I&#39;m passionate about
          learning new technologies as <span className="font-bold">Rust</span>,
          and <span className="font-bold">TypeScript</span> and sharing
          knowledge with others.
        </p>
      </div>
      <div className="relative">
        <a
          href="https://www.linkedin.com/in/luciano-ramello-b45411143/"
          target="_blank"
        >
          <img
            className="flex-1 cursor-pointer rounded-lg bg-white/30 grayscale transition hover:hue-rotate-0 hover:sepia-0 dark:sepia"
            src={profilePic}
            alt="Luciano Ramello"
            width={150}
            height={175}
          />
        </a>
      </div>
    </header>
  );
}
