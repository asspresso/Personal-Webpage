"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import { useTheme } from "next-themes";

const HeroSection = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 md:flex-row md:space-x-4 md:text-left md:py-32">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded-full shadow-2xl"
            src="/photo.jpg"
            alt="photo"
            width={200}
            height={200}
          />
        </div>
        <div className="md:mt:2 md:w-6/5">
          <h1 className="font-bold text-4xl mt-6">Hi, I&#39;m Luca!</h1>
          <p className="text-lg mt-4 mb-6">
            I&#39;m a MS in Data Science student at New York University (NYU),
            passionate about machine learning methods that make things more
            efficient and interesting.
          </p>
          <Link
            to="projects"
            // className="text-black dark:text-neutral font-semibold px-6 py-3 bg-yellow-300 dark:bg-red500 rounded shadow hover:bg-yellow-400"
            className={`text-black dark:text-white font-semibold px-6 py-3 rounded shadow cursor-pointer ${
              currentTheme === "dark"
                ? "bg-red-500 hover:bg-red-600"
                : "bg-yellow-300 hover:bg-yellow-400"
            }`}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
