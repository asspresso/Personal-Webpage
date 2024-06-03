"use client";
import { useTheme } from "next-themes";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

const projects = [
  {
    name: "Refining Data Packing and Shuffling for GPT-2",
    description:
      "Discover that shuffling data in chunks of maximum sequence length yields optimal performance for generative language models.",
    image: "/shuffle.png",
    github: "https://github.com/asspresso/Sequence-Length-Warmup",
  },
  {
    name: "NYC Drinking Fountain Water Quality Prediction",
    description:
      "Predict the turbidity, Chloride and Fluoride concentration of more than 3,000 drinking fountains at NYC parks using RNN and LSTM.",
    image: "/quality.png",
    github: "https://github.com/asspresso/NYC-Water-Quality-Prediction",
  },
  {
    name: "Two Stages Air Temperature Modeling with GAN and CRNN",
    description:
      "Predict air temperature using thermal radiometer images and high-quality synthetic data generated from GANs.",
    image: "/thermal.jpg",
    github: "https://github.com/asspresso",
  },
];

const ProjectSection = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr
          className={`w-12 h-1 mx-auto my-4 border-0 rounded  ${
            currentTheme === "dark" ? "bg-red-500" : "bg-yellow-300"
          }`}
        ></hr>
      </h1>

      <div className="flex flex-col space-y-28 pb-12 md:pb-48">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="mt-8 md:w-1/2">
                    <Link href={project.github}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-3xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
