"use client";
import { useTheme } from "next-themes";
import React from "react";
import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "./direction-aware-hover.tsx";

const box = [
  { name: '"P" 小屁', description: "My fat pet cat (Age: 5)", url: "/cat.jpg" },
  {
    name: "Neon Genesis Evangelion",
    description: "My fav animation",
    url: "/eva.jpg",
  },
  {
    name: "ENTJ",
    description: "My mbti personality type",
    url: "/entj.png",
  },
  {
    name: "The Legend of Zelda",
    description: "Best video game ever",
    url: "/zelda.jpg",
  },
  {
    name: "Rusty Lake",
    description: "I also enjoy puzzle-solving games, especially weird ones",
    url: "/rusty.png",
  },
  {
    name: "Splendor Duel",
    description: "My roommate and I could play this board game all night",
    url: "/duel.png",
  },
  {
    name: "Real Madrid",
    description:
      "I'm a huge fan of Real Madrid soccer club. I'm a goalkeeper myself btw",
    url: "/rma.jpg",
  },
  {
    name: "Inside the Cable Temple 冀西南林路行",
    description: "My fav album by my fav band",
    url: "/cable.jpg",
  },
  {
    name: "Mario Vargas Llosa",
    description: "The author of my fav novel (Conversation in the Cathedral)",
    url: "/llosa.jpg",
  },
  {
    name: "Mulholland Drive",
    description:
      "I'm fascinated with dreams and mysteries created by David Lynch",
    url: "/drive.jpg",
  },
  {
    name: "Subway Fanatic",
    description:
      "Taking subway is always a must-do for me whenever I visit new places",
    url: "/subway.jpg",
  },
  {
    name: "Kuromi",
    description: "I always love adorable things",
    url: "/kuromi.jpg",
  },
];

const LifeSection = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <section id="life">
      <h1 className="text-center font-bold text-4xl">
        Life
        <hr
          className={`w-12 h-1 mx-auto my-4 border-0 rounded  ${
            currentTheme === "dark" ? "bg-red-500" : "bg-yellow-300"
          }`}
        ></hr>
      </h1>

      <div className="flex pt-6 flex-wrap flex-row justify-center z-10 ">
        {box.map((item, idx) => {
          return (
            <div key={idx}>
              <div className="px-4 py-2 mr-2">
                <DirectionAwareHover imageUrl={item.url}>
                  <p className="font-bold text-xl">{item.name}</p>
                  <p className="font-normal text-sm">{item.description}</p>
                </DirectionAwareHover>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LifeSection;
