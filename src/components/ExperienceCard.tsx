"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src="/soitic.svg"
          alt="Soitic"
          width={200}
          height={200}
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Engineer</h4>
        <p className="font-bold text-2xl mt-1">Soitic</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-10 w-10 rounded-full"
            src="https://github.com/mateus-schultz.png"
            alt="Mateus Schultz"
            width={200}
            height={200}
          />
        </div>

        <p className="uppercase py-5 text-gray-300">Blabla... - bla...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};
