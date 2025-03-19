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
    <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header />
      <div className="space-y-20 pb-30">
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="pt-5">
          <About />
        </section>

        <section id="experience" className="pt-5">
          <WorkExperience />
        </section>

        <section id="skills" className="pt-5">
          <Skills />
        </section>

        <section id="projects" className="pt-5">
          <Projects />
        </section>

        <section id="contact" className="pt-5">
          <Contact />
        </section>
      </div>

      <Link href="#header">
        <ChevronDoubleUpIcon className="fixed bottom-5 right-5 h-10 w-10 m-2 text-[#F7AB0A]" />
      </Link>
    </div>
  );
}
