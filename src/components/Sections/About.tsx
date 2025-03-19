"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
  return (
    <div className="flex flex-col items-center space-y-10">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        className="flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-center items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="flex-shrink-0"
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Image
            className="mb-4 md:mb-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            src="https://github.com/mateus-schultz.png"
            alt="Mateus Schultz"
            width={500}
            height={500}
          />
        </motion.div>

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            Here is a little background
          </h4>
          <p className="text-base">
            Hello! My name is Mateus Schultz, I am a Software Engineer with a
            passion for creating innovative and user-friendly software
            solutions. With a strong background in web development, I have honed
            my skills in HTML, CSS, JavaScript, and React, enabling me to build
            dynamic and interactive web applications.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
