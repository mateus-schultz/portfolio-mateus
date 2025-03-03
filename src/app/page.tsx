import Link from "next/link";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

import { Header } from "@/components/Sections/Header";
import { Hero } from "@/components/Sections/Hero";
import { About } from "@/components/Sections/About";
import { WorkExperience } from "@/components/Sections/WorkExperience";
import { Skills } from "@/components/Sections/Skills";
import { Projects } from "@/components/Sections/Projects";
import { Contact } from "@/components/Sections/Contact";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <ChevronDoubleUpIcon className="sticky bottom-5 h-10 w-10 ml-auto m-2 text-[#F7AB0A]" />
      </Link>
    </div>
  );
}
