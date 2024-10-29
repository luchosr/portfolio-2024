import profilePic from "../images/profilePiccrop.webp";
import { description, PROFILE_TITLE } from "../data/stringConstants";
export default function Header() {
  return (
    <header className="mx-auto mt-12 flex max-w-2xl flex-col items-center md:flex-row md:px-6">
      <div className="relative p-2">
        <a
          href="https://www.linkedin.com/in/luciano-ramello-b45411143/"
          target="_blank"
        >
          <img
            className="flex-1 cursor-pointer rounded-lg bg-white/30 grayscale transition hover:hue-rotate-0 hover:sepia-0 dark:sepia"
            src={profilePic}
            alt="Luciano Ramello"
            width={120}
            height={150}
            loading="lazy"
          />
        </a>
      </div>
      <div className="mt-2 flex-1 px-6 md:mt-0 md:w-2/3">
        <h1 className="text-start text-3xl no-underline dark:text-orange-200">
          {PROFILE_TITLE}
        </h1>
        <p className="mb-6 mt-3 text-start">{description}</p>
      </div>
    </header>
  );
}
