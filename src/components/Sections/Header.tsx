"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <header className="sticky top-0 p-5 max-w-7xl mx-auto z-20">
      <div className="flex items-center justify-between">
        <motion.div
          className="flex items-center"
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <SocialIcon
            network="github"
            fgColor="gray"
            bgColor="transparent"
            url="https://github.com/mateus-schultz"
          />
          <SocialIcon
            network="linkedin"
            fgColor="gray"
            bgColor="transparent"
            url="https://www.linkedin.com/in/mateus-schultz-980380149/"
          />
        </motion.div>

        <motion.div
          className="flex items-center text-gray-300 cursor-pointer"
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
            url="#contact"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in touch
          </p>
        </motion.div>
      </div>
    </header>
  );
};
