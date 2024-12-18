import { useState } from "react";
import DarkModeButton from "./DarkModeButton";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <nav className="m-auto flex w-3/4 flex-row justify-end pt-4 md:w-1/3">
      <DarkModeButton dark={dark} darkModeHandler={darkModeHandler} />
    </nav>
  );
}
