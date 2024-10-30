import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import {
  FOOTER_RIGHTS,
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
} from "../data/stringConstants";

export default function Footer() {
  return (
    <footer className="m-auto mb-6 flex max-w-2xl flex-row justify-start px-6 pt-4 dark:text-orange-skin">
      <article className="text-sm font-semibold">
        {new Date().getFullYear()} {FOOTER_RIGHTS}
      </article>
      <div className="mx-6 flex flex-row">
        <a href={LINKEDIN_PROFILE} target="_blank">
          <IoLogoLinkedin className="mx-2 text-xl" />
        </a>
        <a href={GITHUB_PROFILE} target="_blank">
          <IoLogoGithub className="mx-2 text-xl" />
        </a>
      </div>
    </footer>
  );
}
