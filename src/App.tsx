import { useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import { techStack } from "./data/techStack";
import TechStackSection from "./components/TechStack";

function App() {
  useEffect(() => {
    document.body.classList.toggle("dark", true);
  }, []);

  return (
    <main className="text-brown-900 flex h-screen flex-col items-center bg-orange-100 dark:bg-gray-800 dark:text-slate-200">
      <Navbar />
      <Header />
      <TechStackSection techStack={techStack} />

      <section className="mt-10 w-full px-6">
        <h2 className="text-start text-2xl underline dark:text-orange-200">
          Here are some of my latest projects:
        </h2>
        <article className="my-4 flex w-full flex-row rounded-md border border-transparent px-2 hover:border-slate-300">
          <div className="flex flex-col px-4 py-2">
            <h3 className="text-xl font-bold">Drinks Cart App</h3>
            <p className="text-sm">
              <span>Stack: </span>React,js, Zustand, TailwindCSS
            </p>
          </div>
          <a
            href="https://github.com/luchosr/drinks-cart-app"
            target="_blank"
            rel=" noopener noreferrer"
            className="m-auto w-1/5 text-2xl"
          >
            <img
              src="https://raw.githubusercontent.com/luchosr/drinks-cart-app/refs/heads/main/public/drinks%20recipe%20main.png"
              alt=""
              width={80}
              height={80}
            />
          </a>
        </article>
      </section>
    </main>
  );
}

export default App;
