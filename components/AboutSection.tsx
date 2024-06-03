"use client";
import { useTheme } from "next-themes";
import React from "react";

const ComputerSkills = [
  { skill: "Python" },
  { skill: "Jupyter Notebook" },
  { skill: "HTML" },
  { skill: "Javascript" },
  { skill: "Typescript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Github" },
];

const MLSkills = [
  { skill: "Pandas" },
  { skill: "Numpy" },
  { skill: "Scikit-Learn" },
  { skill: "Matplotlib" },
  { skill: "PyTorch" },
  { skill: "Generalized Linear Models (GLMs)" },
  { skill: "Random Forest" },
  { skill: "XGBoost" },
  { skill: "Deep Neural Network" },
  { skill: "Transformer" },
  { skill: "Large Language Models (LLMs)" },
];

const AboutSection = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr
            className={`w-12 h-1 mx-auto my-4 border-0 rounded  ${
              currentTheme === "dark" ? "bg-red-500" : "bg-yellow-300"
            }`}
          ></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to Know Me!
            </h1>
            <p>
              My name is Luca Wang and my Chinese name is 王瑞霖. I named myself
              Luca because of the Croatian soccer player {""}
              <a href="https://en.wikipedia.org/wiki/Luka_Modri%C4%87">
                <u>Luka Modrić</u>
              </a>
              . (Not Luka Dončić)
            </p>
            <br />
            <p>
              I'm currently a MS in Data Science student at NYU. My academic
              interests are natural language processing and generative language
              models. In my undergraduate, I double majored in Nutrition and
              Data Science (I know. It's a weird combination.) With outstanding
              academic performances, I was honored exclusively as the
              undergraduate class representative of NYU Steinhardt in 2023.
            </p>
            <br />
            <p>
              In my free time, I enjoy editing videos, feeding cat, reading
              books, watching soccer, playing video games, exploring exotic
              cuisine and taking subway (check the Life section for more
              details). I also have special interest in beverages and I always
              dream of running my own beverage store some day.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div>
              <h2 className="font-bold mb-3">Computer Science</h2>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {ComputerSkills.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className={`px-4 py-2 mr-2 mt-2 rounded font-semibold  ${
                        currentTheme === "dark"
                          ? "bg-red-500 text-neutral"
                          : "bg-yellow-300 text-black"
                      }`}
                    >
                      {item.skill}
                    </p>
                  );
                })}
              </div>
              <h2 className="font-bold mt-6 mb-3">Data Science</h2>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {MLSkills.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className={`px-4 py-2 mr-2 mt-2 rounded font-semibold  ${
                        currentTheme === "dark"
                          ? "bg-red-500 text-neutral"
                          : "bg-yellow-300 text-black"
                      }`}
                    >
                      {item.skill}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
