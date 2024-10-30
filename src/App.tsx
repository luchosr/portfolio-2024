import React, { useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TechStackSection from "./components/TechStackSection";

import { techStackData } from "./data/techStack";
import Footer from "./components/Footer";

const ProjectsSection = React.lazy(
  () => import("./components/ProjectsSection"),
);

function App() {
  useEffect(() => {
    document.body.classList.toggle("dark", true);
  }, []);

  return (
    <>
      <Navbar />
      <main className="text-brown-900 flex flex-col items-center dark:text-slate-200">
        <Header />
        <TechStackSection techStack={techStackData} />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
