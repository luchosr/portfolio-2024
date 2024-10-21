import { useState } from "react";
import Header from "./components/Header";
import DarkModeButton from "./components/DarkModeButton";

function App() {
  const [dark, setDark] = useState(true);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <main className="text-brown-900 flex h-screen flex-col items-center bg-orange-100 dark:bg-gray-800 dark:text-slate-200">
      <nav className="flex w-3/4 flex-row justify-end pt-4 xl:w-1/2">
        <DarkModeButton dark={dark} darkModeHandler={darkModeHandler} />
      </nav>
      <Header />

      <section>
        <h2 className="text-center text-2xl no-underline md:text-left">
          Here are some of my latest projects
        </h2>
      </section>
    </main>
  );
}

export default App;
