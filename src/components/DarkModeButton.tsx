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
    <div className="bg-orange-100 dark:bg-gray-800">
      <button onClick={() => darkModeHandler()}>
        {!dark && <IoMoon className="text-2xl text-gray-700" />}
        {dark && <IoSunny className="text-2xl text-orange-200" />}
      </button>
    </div>
  );
}
