import { IoMoon, IoSunny } from "react-icons/io5";

type DarkModeButtonProps = {
  dark: boolean;
  darkModeHandler: () => void;
};

export default function DarkModeButton({
  dark,
  darkModeHandler,
}: DarkModeButtonProps) {
  return (
    <div className="bg-orange-skin dark:bg-gray-800">
      <button
        type="button"
        aria-label="Dark Mode"
        onClick={() => darkModeHandler()}
      >
        {!dark && <IoMoon className="text-2xl text-gray-700" />}
        {dark && <IoSunny className="text-orange-skin text-2xl" />}
      </button>
    </div>
  );
}
