import { useRef } from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const sectionsRef = {
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    contact: useRef(null),
  };

  return (
    <div className="font-sans bg-base-100 text-base-content scroll-smooth">
      <HeroSection refs={sectionsRef} />

      <main className="space-y-20 px-4 md:px-12 py-16">
        <section ref={sectionsRef.about}>
          <About />
        </section>
        <section ref={sectionsRef.skills}>
          <Skills />
        </section>
        <section ref={sectionsRef.projects}>
          <Projects />
        </section>
        <section ref={sectionsRef.experience}>
          <Experience />
        </section>
        <section ref={sectionsRef.education}>
          <Education />
        </section>
        <section ref={sectionsRef.contact}>
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
