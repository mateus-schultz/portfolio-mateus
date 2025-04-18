"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full top-0 p-5 z-20 bg-[rgb(36,36,36)]" id="header">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
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
            target="_blank"
          />
          <SocialIcon
            network="linkedin"
            fgColor="gray"
            bgColor="transparent"
            url="https://www.linkedin.com/in/mateus-schultz-980380149/"
            target="_blank"
          />
        </motion.div>

        <Link href="#contact">
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
              as="span"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Get in touch
            </p>
          </motion.div>
        </Link>
      </div>
    </header>
  );
};
