"use client";

import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";

import { BackgroundCircles } from "./BackgroundCircles";

export const Hero = () => {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src="https://github.com/mateus-schultz.png"
        alt="Mateus Schultz"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        width={200}
        height={200}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">
            <Typewriter
              words={[
                "Hi, The Name's Mateus",
                "I'm a Web Developer",
                "<LoveToCode />",
              ]}
              loop
              cursor
              cursorStyle="_"
              cursorColor="#F7AB0A"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
