"use client";

import { motion } from "framer-motion";

import { Skill, type SkillType } from "../Skill";

type SkillsType = {
  id: number;
  group: string;
  skills: SkillType[];
};

export const Skills = () => {
  const skillsImproved: SkillsType[] = [
    {
      id: 1,
      group: "Essentials",
      skills: [
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
      ],
    },
    {
      id: 2,
      group: "Frontend Frameworks and Libraries",
      skills: [
        {
          id: 1,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          title: "React",
        },
        {
          id: 2,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          title: "Next.js",
        },
        {
          id: 3,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
          title: "Angular",
        },
        {
          id: 4,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
          title: "Vue",
        },
        {
          id: 5,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
          title: "Tailwind",
        },
        {
          id: 6,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
          title: "Material UI",
        },
      ],
    },
    {
      id: 3,
      group: "Backend Frameworks and Tools",
      skills: [
        {
          id: 1,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          title: "Node.js",
        },
        {
          id: 2,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
          title: "NestJS",
        },
        {
          id: 3,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg",
          title: "Adonis",
        },
      ],
    },
    {
      id: 4,
      group: "Build Tools and Deployment",
      skills: [
        {
          id: 1,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
          title: "Vite",
        },
        {
          id: 2,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          title: "Docker",
        },
        {
          id: 3,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          title: "Git",
        },
      ],
    },
    {
      id: 5,
      group: "Other Utilities and Libraries",
      skills: [
        {
          id: 1,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
          title: "GraphQL",
        },
        {
          id: 2,
          url: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3254403/strapi-icon-icon-md.png",
          title: "Strapi",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-10">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <motion.div
        className="space-y-10 px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {skillsImproved.map((group) => (
          <div key={group.id} className="space-y-5">
            <h4 className="text-2xl text-gray-500">{group.group}</h4>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Skill key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
