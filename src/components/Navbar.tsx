import { useState } from "react";
import DarkModeButton from "./DarkModeButton";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <nav className="flex w-3/4 flex-row justify-end pt-4 xl:w-1/2">
      <DarkModeButton dark={dark} darkModeHandler={darkModeHandler} />
    </nav>
  );
}
