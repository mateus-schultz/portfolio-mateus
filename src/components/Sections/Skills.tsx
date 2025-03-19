"use client";

import { motion } from "framer-motion";

import { Skill, type SkillType } from "../Skill";

export const Skills = () => {
  const skills: SkillType[] = [
    {
      id: 1,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      title: "HTML",
    },
    {
      id: 2,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      title: "CSS",
    },
    {
      id: 3,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      title: "JavaScript",
    },
    {
      id: 4,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      title: "TypeScript",
    },
    {
      id: 5,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      title: "React",
    },
    {
      id: 6,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      title: "Next.js",
    },
    {
      id: 7,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      title: "Tailwind",
    },
    {
      id: 8,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      title: "Git",
    },
    {
      id: 9,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      title: "Angular",
    },
    {
      id: 10,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg",
      title: "Adonis",
    },
    {
      id: 11,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      title: "Vue",
    },
    {
      id: 12,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      title: "NestJS",
    },
    {
      id: 13,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      title: "Vite",
    },
    {
      id: 14,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      title: "Docker",
    },
    {
      id: 15,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      title: "Flutter",
    },
    {
      id: 16,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      title: "Material UI",
    },
    {
      id: 17,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      title: "GraphQL",
    },
    {
      id: 18,
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      title: "Node.js",
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
        Hover over a skill for description
      </h3>

      <div className="overflow-y-auto overflow-x-hidden h-1/2 scrollbar scrollbar-thin">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 mr-5 mb-1">
          {skills.map((skill) => (
            <Skill key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
