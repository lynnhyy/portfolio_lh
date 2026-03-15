
"use client";

import { useEffect, useState } from "react";
import TypingText from "./components/animation-typing-text";
import Image from "next/image";

/* Projects container*/
const projects = [
  {
    title: "Projet 1",
    image: "/window.svg",
    description:
      "Proinde die funestis interrogationibus praestituto imaginarius iudex equitum resedit magister adhibitis aliis iam quae essent agenda praedoctis, etadsistebant hinc inde notarii, quid quaesitum esset, quidve responsum, cursim ad Caesarem perferentes, cuius imperio truci, stimulis reginae",
  },
  {
    title: "Projet 2",
    image: "/window.svg",
    description:
    "Proinde die funestis interrogationibus praestituto imaginarius iudex equitum resedit magister adhibitis aliis iam quae essent agenda praedoctis, etadsistebant hinc inde notarii, quid quaesitum esset, quidve responsum, cursim ad Caesarem perferentes, cuius imperio truci, stimulis reginae",
  },
  {
    title: "Projet 3",
    image: "/window.svg",
    description:
            "Proinde die funestis interrogationibus praestituto imaginarius iudex equitum resedit magister adhibitis aliis iam quae essent agenda praedoctis, etadsistebant hinc inde notarii, quid quaesitum esset, quidve responsum, cursim ad Caesarem perferentes, cuius imperio truci, stimulis reginae",
  },
];


  const categories = [
    { category: "Catégorie 1", skills: ["Skill", "Skill", "Skill", "Skill", "Skill"] },
    { category: "Catégorie 2", skills: ["Skill", "Skill", "Skill", "Skill"] },
    { category: "Catégorie 3", skills: ["Skill", "Skill", "Skill"] },
    { category: "Catégorie 4", skills: ["Skill", "Skill", "Skill"] },
  ];


export default function Home() {

  /*Utils for Projects Section*/
  const [index, setIndex] = useState(0);

  const nextProject = () => {
    setIndex((index + 1) % projects.length);
  };

  const prevProject = () => {
    setIndex((index - 1 + projects.length) % projects.length);
  };

  type Pos = { top: number; left: number; delay: number };

  const [positions, setPositions] = useState<Pos[][]>([]);
    useEffect(() => {
    const p: Pos[][] = categories.map((cat) =>
      cat.skills.map(() => ({
        top: 6 + Math.random() * 70,
        left: 3 + Math.random() * 80,
        delay: Math.random() * 2,
      }))
    );
    setPositions(p);
  }, []);
  
  const project = projects[index];
  
  /*Home*/
  return (
    <div>

      {/* Introduction*/}
      <div className="w-full min-h-screen flex flex-col items-center justify-center relative text-[var(--foreground)] px-4">
        {/* Typing Text desktop */}
        <div className="w-full text-center font-mono text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
          <TypingText
            text={"Enchanté, Lynn Hayot, développeur en informatique.\nBienvenue sur mon portfolio."}
            speed={60}
          />
        </div>

        {/* Fxed text mobile */}
        <div className="w-full text-center font-mono text-2xl sm:hidden">
          Enchanté, Lynn Hayot, développeur en informatique. Bienvenue sur mon portfolio.
        </div>

        {/* Introduction text */}
        <div className="flex justify-center items-center w-full mt-8">
          <p className="w-full max-w-4xl text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[var(--foreground)] border-t-[var(--border-color)] pt-4">
            Proinde die funestis interrogationibus praestituto imaginarius iudex equitum
            resedit magister adhibitis aliis iam quae essent agenda praedoctis, et
            adsistebant hinc inde notarii, quid quaesitum esset, quidve responsum,
            cursim ad Caesarem perferentes, cuius imperio truci, stimulis reginae
          </p>
        </div>

        {/* Continue Button -> go to next section */}
        <a
          href="#about"
          className="
            mt-12
            flex flex-col items-center
            text-[var(--text-link)]
            cursor-pointer
            transition-all
            duration-300
            hover:text-[var(--text-link-hover)]
          "
        >
          <span className="text-lg tracking-wide">Continuer</span>
          <span className="animate-bounce text-2xl mt-1">↓</span>
        </a>
      </div>


      {/* About me*/}
      <div id="about" className="w-full flex justify-center items-center py-16 px-6">
        <div className="flex flex-col md:flex-row w-full max-w-6xl gap-12">

          {/* Photo */}
          <div className="md:w-1/3 flex">
            <img
              src="window.svg"
              alt="portrait"
              className="w-auto max-w-[240px] h-full rounded-xl border-3 border-[var(--border-white)] shadow-lg object-cover"
            />
          </div>

          {/* Text about*/}
          <div className="flex md:w-2/3">
            <div className="border-l border-[var(--border-white)] pl-6 max-w-2xl flex flex-col justify-between">
              
              {/* Title */}
              <div className="-ml-6 bg-[var(--banner-bg)] rounded-r-md px-4 py-3 mb-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">
                  À propos de moi
                </h3>
              </div>

              {/* Text*/}
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-justify text-[var(--foreground)]">
                Proinde die funestis interrogationibus praestituto imaginarius iudex
                equitum resedit magister adhibitis aliis iam quae essent agenda
                praedoctis, et adsistebant hinc inde notarii, quid quaesitum esset,
                quidve responsum, cursim ad Caesarem perferentes.
              </p>

              {/* Button contacts*/}
              <div className="flex justify-end mt-10">
                <a href="/contact"  target="_blank" className="px-8 py-3 text-lg text-[var(--button-text)] border border-[var(--button-border)] rounded-full cursor-pointer hover:bg-[var(--button-bg-hover)] hover:border-[var(--button-border-hover)] hover:scale-105 active:scale-95">
                  Contacter
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* Skills */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center py-20 px-6">
        {/* Title*/}
        <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-center text-[var(--foreground)]">
          Skills
        </h2>

        {/* Link -> Go to cv*/}
        <a href="/cv" className="mb-8 text-[var(--text-link)] hover:text-[var(--text-link-hover)] transition text-sm md:text-base" target="_blank">
          Voir mon CV →
        </a>

        {/* Boxes animated*/}
        <div className="hidden md:flex w-full justify-between gap-6">
          {/*for each category we need a box*/}
          {categories.map((cat, i) => (
            <div
              key={cat.category}
              className="relative w-[23%] rounded-xl p-5 border border-[var(--border-white)/12]"
              aria-label={`Compétences ${cat.category}`}
            >
              {/* Title of boxe */}
              <div className="absolute top-0 left-0 w-full bg-[var(--banner-bg)] rounded-tl-xl rounded-tr-xl px-3 py-2">
                <h3 className="text-lg font-semibold text-[var(--foreground)] text-center">{cat.category}</h3>
              </div>

              {/* Words  animated*/}
              <div className="mt-8 min-h-[9rem] flex flex-wrap gap-2 items-start">
                {cat.skills.map((skill, idx) => (
                  <span
                    key={skill}
                    className="inline-flex items-center text-sm px-2 py-0.5 rounded-md whitespace-nowrap shadow-sm bg-[var(--skill-bg)] backdrop-blur-sm transition-transform duration-200 animate-skillFloat text-[var(--foreground)]"
                    style={{
                      transform:
                        (idx % 3) === 0 ? "translateY(0px)" :
                        (idx % 3) === 1 ? "translateY(6px)" : "translateY(-6px)", animationDelay: `${idx * 0.3}s`
                    }}
                    title={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Boxes mobile */}
        <div className="flex flex-col w-full gap-6 md:hidden">
          {categories.map((cat) => (
            <div
              key={cat.category}
              className="relative w-full rounded-xl p-5 border border-[var(--border-white)/12]"
              aria-label={`Compétences ${cat.category}`}
            >
              {/* Title */}
              <div className="absolute top-0 left-0 w-full bg-[var(--banner-bg)] rounded-tl-xl rounded-tr-xl px-3 py-2">
                <h3 className="text-lg font-semibold text-[var(--foreground)] text-center">{cat.category}</h3>
              </div>

              {/* Words without animation */}
              <div className="mt-8 flex flex-wrap gap-2 items-start min-h-[9rem]">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center text-sm px-2 py-0.5 rounded-md whitespace-nowrap shadow-sm bg-[var(--skill-bg)] backdrop-blur-sm transition-transform duration-200 text-[var(--foreground)]"
                    title={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Projects*/}
      <div id="projects" className="w-full flex justify-center py-24 px-4 sm:px-6">
        <div className="w-full max-w-6xl">
          {/*Title*/}
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 md:mb-16 text-center text-[var(--foreground)]">
            Mes projets
          </h2>

          {/* ---------- DESKTOP -----------*/}
          <div className="hidden md:block relative w-full">
            {/* Track  project */}
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {projects.map((proj, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-full flex flex-row gap-12 items-center
                              bg-[var(--banner-bg)] bg-opacity-60 backdrop-blur-sm border border-[var(--border-white)/20] rounded-2xl
                              p-12 min-h-[400px]"
                  >
                    <div className="w-1/2 flex justify-center">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-auto rounded-xl object-cover"
                      />
                    </div>
                    <div className="w-1/2 flex flex-col justify-center text-left">
                      <h3 className="text-3xl font-semibold mb-4 text-[var(--foreground)]">{proj.title}</h3>
                      <p className="text-xl leading-relaxed mb-8 text-[var(--foreground)]">{proj.description}</p>
                      <div className="flex justify-end">
                        <a href={`/projet${i}`} className="text-[var(--text-link)] hover:text-[var(--text-link-hover)] transition cursor-pointer">
                          Voir plus →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows for navigation */}
            <button onClick={prevProject}
              className="absolute left-[-3rem] top-1/2 -translate-y-1/2 z-20 text-6xl font-light text-[var(--foreground)/70] hover:text-[var(--foreground)] hover:scale-110 transition select-none cursor-pointer"
            >
              ‹
            </button>
            <button onClick={nextProject}
              className="absolute right-[-3rem] top-1/2 -translate-y-1/2 z-20 text-6xl font-light text-[var(--foreground)/70] hover:text-[var(--foreground)] hover:scale-110 transition select-none cursor-pointer"
            >
              ›
            </button>

            {/* Points + count */}
            <div className="grid grid-cols-3 items-center mt-10">
              <div className="text-sm text-[var(--foreground)/60]">{index + 1} / {projects.length}</div>
              <div className="flex justify-center gap-3">
                {projects.map((_, i) => {
                  const isActive = i === index;
                  return (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className="w-3 h-3 rounded-full transition-transform cursor-pointer"
                      style={{
                        backgroundColor: isActive
                          ? "var(--foreground)"           // point active
                          : "rgba(255, 255, 255, 0.4)",  // point inactive
                        transform: isActive ? "scale(1.25)" : "scale(1)"
                      }}
                    />
                  );
                })}
              </div>
              {/*Link to list of projects*/}
              <div className="flex justify-end">
                <a href="/projets" className="text-[var(--text-link)] hover:text-[var(--text-link-hover)] transition cursor-pointer">
                  Voir la liste complète →
                </a>
              </div>
            </div>
          </div>

          {/* ---------- MOBILE -----------*/}
          <div className="flex gap-6 overflow-x-auto md:hidden scrollbar-hide px-2 mt-10">
            {projects.map((proj, i) => (
              <div key={i} onClick={() => window.location.href = "#"} //page of project
                className="flex-shrink-0 w-[80%] sm:w-[70%] flex flex-col gap-6 items-center
                          bg-[var(--banner-bg)] bg-opacity-60 backdrop-blur-sm border border-[var(--border-white)/20] rounded-2xl
                          p-6 min-h-[400px] cursor-pointer"
              >
                <div className="w-full flex justify-center mb-4">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full max-w-[300px] h-auto rounded-xl object-cover"
                  />
                </div>
                <div className="w-full flex flex-col justify-center text-center">
                  <h3 className="text-2xl font-semibold mb-3 text-[var(--foreground)]">{proj.title}</h3>
                  <p className="text-lg leading-relaxed text-[var(--foreground)]">{proj.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Link to go to list of projects */}
          <div className="flex justify-end mt-6 md:hidden">
            <a href="/projets" className="text-[var(--text-link)] hover:text-[var(--text-link-hover)] transition cursor-pointer">
              Voir la liste complète →
            </a>
          </div>
        </div>
      </div>


      {/*Experiences*/}
      <div id="experiences" className="w-full flex justify-center py-24 px-6 min-h-[600px]">
        <div className="w-full max-w-6xl relative">

          <h2 className="text-3xl md:text-4xl font-semibold mb-20 text-center">
            Expériences
          </h2>

          {/*------------- DESKTOP ------------- */}
          <div className="hidden md:block relative w-full h-[460px]">

            {/*Lines*/}
            <div className="absolute top-[210px] left-[12%] w-[12%] h-[2px] bg-white/30"></div>
            <div className="absolute top-[210px] left-[24%] w-[8%] h-[2px] bg-white/30"></div>

            <div className="absolute top-[150px] left-[32%] w-[2px] h-[60px] bg-white/30"></div>
            <div className="absolute top-[150px] left-[32%] w-[8%] h-[2px] bg-white/30"></div>
            <div className="absolute top-[150px] left-[40%] w-[8%] h-[2px] bg-white/30"></div>

            <div className="absolute top-[150px] left-[48%] w-[2px] h-[90px] bg-white/30"></div>

            <div className="absolute top-[240px] left-[48%] w-[10%] h-[2px] bg-white/30"></div>
            <div className="absolute top-[240px] left-[58%] w-[16%] h-[2px] bg-white/30"></div>
            <div className="absolute top-[240px] left-[74%] w-[8%] h-[2px] bg-white/30"></div>

            <div className="absolute top-[190px] left-[82%] w-[2px] h-[50px] bg-white/30"></div>
            <div className="absolute top-[190px] left-[82%] w-[8%] h-[2px] bg-white/30"></div>

            {/* Cubes*/}
            <a href="/exp1" className="group absolute top-[180px] left-[8%] -translate-x-1/2 flex flex-col items-center cursor-pointer">
              <div className="w-32 h-32 bg-[var(--banner-bg)] rounded-lg border border-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg transition group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <img src="/window.svg" alt="Formation" className="w-32 h-32 object-contain"/>
              </div>
              <span className="mt-2 text-sm text-white/70 group-hover:text-white">exp1</span>
            </a>

            <a href="/exp2" className="group absolute top-[180px] left-[24%] -translate-x-1/2 flex flex-col items-center cursor-pointer">
              <div className="w-32 h-32 bg-[var(--banner-bg)] rounded-lg border border-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg transition group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <img src="/window.svg" alt="Formation" className="w-32 h-32 object-contain"/>
              </div>
              <span className="mt-2 text-sm text-white/70 group-hover:text-white">exp2</span>
            </a>

            <a href="/exp3" className="group absolute top-[110px] left-[40%] -translate-x-1/2 flex flex-col items-center cursor-pointer">
              <div className="w-32 h-32 bg-[var(--banner-bg)] rounded-lg border border-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg transition group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <img src="/window.svg" alt="Formation" className="w-32 h-32 object-contain"/>
              </div>
              <span className="mt-2 text-sm text-white/70 group-hover:text-white">exp3</span>
            </a>

            <a href="/exp4" className="group absolute top-[210px] left-[58%] -translate-x-1/2 flex flex-col items-center cursor-pointer">
              <div className="w-32 h-32 bg-[var(--banner-bg)] rounded-lg border border-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg transition group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <img src="/window.svg" alt="Formation" className="w-32 h-32 object-contain"/>
              </div>
              <span className="mt-2 text-sm text-white/70 group-hover:text-white">exp4</span>
            </a>

            <a href="/exp5" className="group absolute top-[210px] left-[74%] -translate-x-1/2 flex flex-col items-center cursor-pointer">
              <div className="w-32 h-32 bg-[var(--banner-bg)] rounded-lg border border-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg transition group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <img src="/window.svg" alt="Formation" className="w-32 h-32 object-contain"/>
              </div>
              <span className="mt-2 text-sm text-white/70 group-hover:text-white">exp5</span>
            </a>

            <a href="/exp6" className="group absolute top-[150px] left-[90%] -translate-x-1/2 flex flex-col items-center cursor-pointer">
              <div className="w-32 h-32 bg-[var(--banner-bg)] rounded-lg border border-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg transition group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <img src="/window.svg" alt="Formation" className="w-32 h-32 object-contain"/>
              </div>
              <span className="mt-2 text-sm text-white/70 group-hover:text-white">exp6</span>
            </a>
          </div>
          {/* ----------------- MOBILE -------------- */}
          <div className="md:hidden flex flex-col items-center w-full gap-8">
            {[
              { img: "/window.svg", label: "exp1", href: "/exp1" },
              { img: "/window.svg", label: "exp2", href: "/exp2" },
              { img: "/window.svg", label: "exp2", href: "/exp3" },
              { img: "/window.svg", label: "exp3", href: "/exp4" },
              { img: "/window.svg", label: "exp4", href: "/exp5" },
              { img: "/window.svg", label: "exp5", href: "/exp6" },
            ].map((cube, i) => (
              <div key={i} className="flex flex-col items-center w-full relative">
                <a href={cube.href} className="group flex flex-col items-center cursor-pointer">
                  <div className="w-32 h-32 bg-[var(--banner-bg)] rounded-lg border border-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg transition group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                    <img src={cube.img} alt="formation" className="w-32 h-32  object-contain"/>
                  </div>
                  <span className="mt-2 text-sm text-white/70 group-hover:text-white">{cube.label}</span>
                </a>
                {i < 5 && <div className="w-1 h-12 bg-white/30 mt-2"></div>}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/*Formations*/}
      <div id="formations" className="w-full flex justify-center py-24 px-6">
        <div className="w-full max-w-6xl">
          {/*Title*/}
          <h2 className="text-3xl md:text-4xl font-semibold mb-20 text-center">
            Formations
          </h2>

          {/* -------- MOBILE ------------ */}
          <div className="md:hidden relative flex flex-col items-center gap-16">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/30"></div>
            {/*formations list*/}
            {[
              { title: "formation 1", date: "2026 - 2026", icon: "/window.svg", url : "/"},
              { title: "formation 1", date: "2026 - 2026", icon: "/window.svg", url : "/" },
              { title: "formation 1", date: "2026 - 2026", icon: "/window.svg", url : "/" },
              { title: "formation 1", date: "2026 - 2026", icon: "/window.svg", url : "/" },
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center w-full">
                <div className="w-6 h-6 bg-white rounded-full shadow-lg z-10"></div>
                {/*Links to formation*/}
                <a
                  href={f.url}
                  aria-label={f.title}
                  className="
                    mt-6 bg-[var(--banner-bg)] backdrop-blur-sm border border-white/20
                    rounded-xl px-6 py-5 shadow-lg w-64 min-h-[140px] flex flex-col justify-between
                    transition-transform duration-300 group cursor-pointer
                    hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]
                    focus:outline-none focus:ring-2 focus:ring-[var(--text-link)]
                  "
                >
                  <div className="flex justify-center mb-3">
                    <Image
                      src={f.icon}
                      alt={f.title} 
                      width={36}
                      height={36}
                    />
                  </div>
                  <h3 className="text-lg font-semibold break-words whitespace-normal">{f.title}</h3>
                  <p className="text-white/60 text-sm break-words whitespace-normal">{f.date}</p>
                </a>
              </div>
            ))}
          </div>

          {/* --------- DESKTOP ------------- */}
          <div className="hidden md:block">
            <div className="grid grid-rows-[auto_auto] gap-y-6">

              {/* Lines + points*/}
              <div className="relative">
                <div className="absolute inset-x-0 top-1/2 h-[2px] bg-white/30 -translate-y-1/2"></div>
                <div className="grid grid-cols-4 gap-x-8">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex justify-center">
                      <div className="w-6 h-6 bg-white rounded-full shadow-lg z-10"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Boxes */}
              <div>
                <div className="grid grid-cols-4 gap-x-8">
                  {/*formations list*/}
                  {[
                    { title: "formation 1", date: "2026 - 2026", icon: "/window.svg", url : "/"},
                    { title: "formation 1", date: "2026 - 2026", icon: "/window.svg", url : "/" },
                    { title: "formation 1", date: "2026 - 2026", icon: "/window.svg", url : "/" },
                    { title: "formation 1", date: "2026 - 2026", icon: "/window.svg", url : "/" },
                  ].map((f, i) => (
                    <div key={i} className="flex justify-center">
                      <a
                        href={f.url}
                        aria-label={f.title}
                        className="
                          bg-[var(--banner-bg)] backdrop-blur-sm border border-white/20
                          rounded-xl px-6 py-5 shadow-lg w-full min-h-[160px] flex flex-col justify-between
                          text-center transition-transform duration-300 group cursor-pointer
                          hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]
                          focus:outline-none focus:ring-2 focus:ring-[var(--text-link)]
                        "
                      >
                        <div className="flex justify-center mb-3">
                          <Image
                            src={f.icon}
                            alt={f.title} 
                            width={36}
                            height={36}
                          />
                        </div>
                        <h3 className="font-semibold break-words whitespace-normal">{f.title}</h3>
                        <p className="text-sm text-white/60 break-words whitespace-normal">{f.date}</p>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/*Hobbies*/}
      <div id="hobbies" className="w-full flex flex-col items-center py-20 px-6">
        {/*Title*/}
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          Loisirs et Intérêts
        </h2>
        
      {/*Hobbies list*/}
        <div className="w-full max-w-6xl flex flex-wrap justify-center gap-6">
          {[
            {
              title: "Loisir 1",
              description:
                "Proinde die funestis interrogationibus praestituto imaginarius iudex equitum resedit magister adhibitis aliis iam quae essent agenda praedoctis."
            },
            {
              title: "Loisir 2",
              description:
                "Proinde die funestis interrogationibus praestituto imaginarius iudex equitum resedit magister adhibitis aliis iam quae essent agenda praedoctis."
            },
            {
              title: "Loisir 3",
              description:
                "Proinde die funestis interrogationibus praestituto imaginarius iudex equitum resedit magister adhibitis aliis iam quae essent agenda praedoctis."
            }
          ].map((loisir, i) => (
            <article
              key={i}
              className="flex-1 min-w-[320px] sm:min-w-[360px] flex flex-col transition-transform duration-200 hover:scale-102"
              aria-label={`Loisir ${loisir.title}`}
            >
              {/* Box */}
              <div className="border-l border-[var(--border-white)] pl-6 p-4 flex flex-col h-full">
        
                {/* Title of box */}
                <div className="bg-[var(--banner-bg)] px-4 py-2 mb-4 w-full">
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    {loisir.title}
                  </h3>
                </div>

                {/* Text */}
                <p className="text-sm md:text-base leading-relaxed text-justify text-[var(--foreground)] flex-1">
                  {loisir.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>


  </div>    
  );
}
