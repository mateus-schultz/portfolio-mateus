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
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
          title: "Angular",
        },
        {
          id: 3,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
          title: "Vue",
        },
        {
          id: 4,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          title: "Next.js",
        },
        {
          id: 5,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
          title: "Vite",
        },
        {
          id: 6,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
          title: "Tailwind",
        },
        {
          id: 7,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
          title: "Material UI",
        },
        {
          id: 8,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          title: "Bootstrap",
        },
        {
          id: 9,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
          title: "Sass",
        },
        {
          id: 10,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
          title: "Redux",
        },
        {
          id: 11,
          url: "https://zustand-demo.pmnd.rs/logo192.png",
          title: "Zustand",
        },
      ],
    },
    {
      id: 3,
      group: "Mobile Frameworks and Tools",
      skills: [
        {
          id: 1,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          title: "React Native",
        },
        {
          id: 2,
          url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAOVBMVEVHcEwAABQAABQAABQAABQAABQAABMAABQAABMAABQAAACkpKaQkJPDw8T+/v5SUlfg4OF1dXkvLzZWMrGaAAAACnRSTlMAPJLF5PX/xAPaQKz+0wAAAKxJREFUeAF904UBhDAMAMBQd9t/2CeP1YNzdYEzDkIZF1VwJsmBAkqLaWh1ItpcAQ6xjAPIGgnINVJg9acx9ReDpg/WNT2COp8Pwdd5KzQxnBHNHBNimqLJ4R/ZzBDLxJInaBy2BtvkzIiY53l0aOxVG9ZsTY/YzqfNHWLGcmHBrC265w+mcw2iGjG8vgP/2vfKgYllMKBrlPtlsl1g26W5X9S4HWS/Heh/O/wA4LAUsuFVSoYAAAAASUVORK5CYII=",
          title: "Expo",
        },
        {
          id: 3,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
          title: "Flutter",
        },
        {
          id: 4,
          url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAMFBMVEVHcExOOfpOOflOOflOOflOOflOOflOOflOOflOOflPOfpOOflOOfpOOflOOflOOflDUmf/AAAAEHRSTlMAEsnmtO7/1HuIHmgwRpeki/D/EgAAAORJREFUeAFEzyFMQlEUgOEPJ4j4mBbtww2rm5P8En1zMwPKdTwYmLCS3GwmJk0ryUQ2mUlkLWz2PtzbnfKXk87Od1A4vfgrRbFTq4Va3tktHidMX8EVhS5KKRz02Blgtw2lFqsUlSE0lwRQR9Kh3AerCcU2h4N53nF7/rZ+phr+60JjlvcSnmYTWLyD6ZJ4LI57oHz3kDfOgEKI3+T83BcivyEC6ilUR8D1lo/9fjKEdbx3cm6Myg3Q/JDz9zLgkmKLxZeICzHibu+nPtxsvomKLAlHACSjzwwAxhHpd1CwvAqJAwCHaUPtIQFi4AAAAABJRU5ErkJggg==",
          title: "FlutterFlow",
        },
      ],
    },
    {
      id: 4,
      group: "Test Frameworks and Tools",
      skills: [
        {
          id: 1,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
          title: "Jest",
        },
        {
          id: 2,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
          title: "Cypress",
        },
        {
          id: 3,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
          title: "Playwright",
        },
        {
          id: 4,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg",
          title: "Vitest",
        },
      ],
    },
    {
      id: 5,
      group: "Monorepo Frameworks",
      skills: [
        {
          id: 1,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg",
          title: "Yarn",
        },
        {
          id: 2,
          url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAMFBMVEVHcEzL1eHL1eHL1eHL1eHL1eHL1eHL1uHL1eHL1eHL1eHL1eHL1eHL1eHL1eHL1eEEq73kAAAAEHRSTlMAMmljRIH/GnO30uylmQ/EUCCQwAAAALtJREFUeAGtzzEIQWEUxfEjkpXJbHjZDPZiUfayAv09pKw2C7NJmeyDMlmUTIoMBpNBBslon3y3V7A7w61f99bp6o9JZHPBCFKiKY0Yv9mWvC+S+9lSkbfafNhV/3BUeHcKSK9ILQSsjUueQygAXB3LNLwRcNjydLzQ8WZQn85pOh7dvQ+nW2ZfN0ahvWUgJX1jBGrWLuWNmrCHlmNcxjvWbk/JGPPp3FkE3EhnqjG6xkTKHT3cSKX117wA4IBOhWXLrx4AAAAASUVORK5CYII=",
          title: "Nx",
        },
      ],
    },
    {
      id: 6,
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
      id: 7,
      group: "Build Tools and Deployment",
      skills: [
        {
          id: 1,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
          title: "Webpack",
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
        {
          id: 4,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          title: "GitHub",
        },
        {
          id: 5,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
          title: "Gitlab",
        },
        {
          id: 6,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg",
          title: "BitBucket",
        },
        {
          id: 7,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
          title: "Vercel",
        },
        {
          id: 8,
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          title: "Figma",
        },
      ],
    },
    {
      id: 8,
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
