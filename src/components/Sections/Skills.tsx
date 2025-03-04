"use client";

import { motion } from "framer-motion";

import { Skill, type SkillType } from "../Skill";

export const Skills = () => {
  const skills: SkillType[] = [
    {
      id: 1,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      title: "HTML",
      percentage: 100,
    },
    {
      id: 2,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      title: "CSS",
      percentage: 100,
    },
    {
      id: 3,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      title: "JavaScript",
      percentage: 100,
    },
    {
      id: 4,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      title: "TypeScript",
      percentage: 100,
    },
    {
      id: 5,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      title: "React",
      percentage: 100,
    },
    {
      id: 6,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      title: "Next.js",
      percentage: 100,
    },
    {
      id: 7,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      title: "Tailwind",
      percentage: 100,
    },
    {
      id: 8,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      title: "Git",
      percentage: 100,
    },
    {
      id: 9,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      title: "Angular",
      percentage: 70,
    },
    {
      id: 10,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg",
      title: "Adonis",
      percentage: 60,
    },
    {
      id: 11,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      title: "Vue",
      percentage: 90,
    },
    {
      id: 12,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      title: "NestJS",
      percentage: 70,
    },
    {
      id: 13,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      title: "Vite",
      percentage: 100,
    },
    {
      id: 14,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      title: "Docker",
      percentage: 80,
    },
    {
      id: 15,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      title: "Flutter",
      percentage: 70,
    },
    {
      id: 16,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      title: "Material UI",
      percentage: 100,
    },
    {
      id: 17,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      title: "GraphQL",
      percentage: 100,
    },
    {
      id: 18,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      title: "Node.js",
      percentage: 90,
    },
  ];

  return (
    <motion.div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 overflow-y-auto h-1/2 scrollbar scrollbar-thin">
        {skills.map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};
