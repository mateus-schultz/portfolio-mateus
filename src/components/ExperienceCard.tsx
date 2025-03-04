"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface ExperienceType {
  id: number;
  url: string;
  title: string;
  company: string;
  date: string;
  summaryPoints: string[];
}

export const ExperienceCard = ({
  experience,
}: {
  experience: ExperienceType;
}) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] snap-center bg-[#292929] p-10 opacity-100 transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={experience.url}
          alt={experience.company}
          width={200}
          height={200}
        />
      </motion.div>

      <div className="px-0 md:px-10 overflow-y-auto">
        <h4 className="text-4xl font-light">{experience.title}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <p className="uppercase py-5 text-gray-300">{experience.date}</p>

        <ul className="list-disc space-y-4 ml-5 text-lg text-left">
          {experience.summaryPoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};
