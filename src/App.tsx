import React, { useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TechStackSection from "./components/TechStack";

import { techStackData } from "./data/techStack";

const ProjectsSection = React.lazy(
  () => import("./components/ProjectsSection"),
);

function App() {
  useEffect(() => {
    document.body.classList.toggle("dark", true);
  }, []);

  return (
    <main className="text-brown-900 flex flex-col items-center bg-orange-100 dark:bg-gray-800 dark:text-slate-200">
      <Navbar />
      <Header />
      <TechStackSection techStack={techStackData} />
      <ProjectsSection />
    </main>
  );
}

export default App;
