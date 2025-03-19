"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export const Projects = () => {
  const [projectNumber, setProjectNumber] = useState(0);
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      className="h-screen flex relative flex-col overflow-hidden text-center md:text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        id="animation-carousel"
        className="relative w-full z-20"
        data-carousel="static"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className={`duration-200 ease-linear flex flex-col items-center justify-center space-y-5 p-20 md:p-44 ${
              i === projectNumber ? "" : "hidden"
            }`}
            data-carousel-item={i === projectNumber ? "active" : "inactive"}
            initial={{
              opacity: 0,
              x: i > projectNumber ? 200 : -200,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              className="md:w-[200px] md:h-[200px] xl:w-[300px] xl:h-[300px] object-contain"
              src="https://github.com/mateus-schultz.png"
              alt="Mateus Schultz"
              width={200}
              height={200}
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS clone
              </h4>

              <p className="text-lg text-center md:text-left">
                Summary of the Project, Summary of the Project, Summary of the
                Project
              </p>
            </div>
          </motion.div>
        ))}
        <button
          type="button"
          className={`absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none ${
            projectNumber === 0 ? "hidden" : ""
          }`}
          data-carousel-prev
          disabled={projectNumber === 0}
          onClick={() => setProjectNumber((prev) => prev - 1)}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
            <ChevronLeftIcon className="fill-[#F7AB0A] size-6" />
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className={`absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none ${
            projectNumber === projects.length - 1 ? "hidden" : ""
          }`}
          data-carousel-next
          disabled={projectNumber === projects.length - 1}
          onClick={() => setProjectNumber((prev) => prev + 1)}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
            <ChevronRightIcon className="fill-[#F7AB0A] size-6" />
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};
