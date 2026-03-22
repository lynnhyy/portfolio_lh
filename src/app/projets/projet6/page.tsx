"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  /*Data of the project*/
  const project = {
    title: "Installation d'une Machine Client",
    shortDescription:
      "Le but de ce projet était de nous apprendre les bases de l’administration système en produisant un guide d’installation d’un système d’exploitation côté client, sous forme de carte mentale.",
    objective: "Interroger une base de données avec des requêtes SQL pour répondre à la problématique : Quels sont les facteurs ayant influencé la survie d'un passager lors du naufrage du Titanic ?",
    deliverables: ["Captures d’écran de l’installation", "Carte mentale"],
    participants: ["Lynn Hayot (administrateur système)"],
    duration: "17 Octobre 2023 (4 heures)",
    location : "IUT2, Grenoble",
    tags: ["Administration Système", "Documentation"],
    images: ["/projets/projet6/mindmap1.png", "/projets/projet6/mindmap2.png", "/projets/projet6/screen1.png", "/projets/projet6/screen2.png"],
    photo: "/projets/projet6/debian11.jpeg",
  };

  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="w-full min-h-screen bg-transparent text-[var(--foreground)] px-4 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Back button */}
        <div className="mb-6 flex justify-start">
          <Link
            href="/projets"
            className="text-[var(--text-link)] hover:text-[var(--text-link-hover)] text-sm"
          >
            ← Retour aux projets
          </Link>
        </div>

        {/* Title */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-center">
            {project.title}
          </h1>
        </header>

        {/* Resume */}
        <section className="mb-10 bg-[var(--banner-bg)]/80 backdrop-blur-sm border border-[var(--border-white)/12] rounded-xl p-6 shadow-md flex flex-col md:flex-row gap-6 items-start">
          {/* Text */}
          <div className="md:w-2/3">
            <p className="text-base text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
              {project.shortDescription}
            </p>
            <ul className="text-sm space-y-2 text-[var(--foreground)]/80">
              <li><strong>Objectif :</strong> {project.objective}</li>
              <li><strong>Durée :</strong> {project.duration}</li>
              <li><strong>Lieu :</strong> {project.location}</li>
              <li><strong>Livrables :</strong> {project.deliverables.join(", ")}</li>
              <li><strong>Participants :</strong> {project.participants.join(", ")}</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-md bg-[var(--skill-bg)]/80 text-[var(--foreground)] shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="w-full max-w-[300px] h-64 rounded-xl overflow-hidden border border-[var(--border-white)/12] shadow-md">
              <Image
                src={project.photo}
                alt="Photo projet"
                width={300}
                height={256}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>


        {/* Photo Carousel */}
        <section className="mb-10 relative">
          {/* Desktop / tablette : carrousel avec animation */}
          <div className="hidden md:block relative w-full h-[650px] rounded-2xl overflow-hidden border border-[var(--border-white)/20] bg-[var(--banner-bg)]/60 backdrop-blur-sm shadow-md">
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-5xl font-light text-[var(--foreground)/70] hover:text-[var(--foreground)] hover:scale-110 transition select-none cursor-pointer"
              aria-label="Image précédente"
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-5xl font-light text-[var(--foreground)/70] hover:text-[var(--foreground)] hover:scale-110 transition select-none cursor-pointer"
              aria-label="Image suivante"
            >
              ›
            </button>

            {/* Image avec animation fade + slide */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                key={current} // important pour que React refasse le rendu
                src={project.images[current]}
                alt={`Image ${current + 1} du projet`}
                fill
                style={{ objectFit: "contain" }}
                className="p-10 transition-all duration-700 ease-in-out transform scale-95 opacity-0 animate-slideIn"
                priority
              />
            </div>
          </div>

          {/* Mobile : slider swipeable */}
          <div className="md:hidden flex overflow-x-auto gap-4 scrollbar-hide py-4 px-2">
            {project.images.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[80%] sm:w-[70%] h-64 rounded-xl overflow-hidden border border-[var(--border-white)/12] shadow-md relative"
              >
                <Image
                  src={src}
                  alt={`Image ${i + 1} du projet`}
                  fill
                  style={{ objectFit: "contain" }}
                  className="p-4"
                  priority
                />
              </div>
            ))}
          </div>
        </section>


        {/* Description */}
        <section className="bg-[var(--banner-bg)]/80 backdrop-blur-sm border border-[var(--border-white)/12] rounded-xl p-6 shadow-md flex flex-col gap-8">
          
          {/* Part 1 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Installation</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
Nous avions deux heures pour suivre des instructions nous permettant d’installer le système d’exploitation Debian 11, avec environnement graphique, sur une machine virtuelle. Les rendus demandés étaient des captures d’écran de notre avancée à des endroits particuliers, par exemple à la création du nom d’utilisateur ou encore lors de l’installation d’un logiciel. 
            </p>
            <div className="flex flex-wrap gap-4">
                {[
                    "/projets/projet6/screen1.png",
                    "/projets/projet6/screen2.png",
                    ].map((src, i) => (
                    <div key={i} className="w-full sm:w-[70%] md:w-[48%] h-64 relative border border-[var(--border-white)/12] rounded-lg overflow-hidden shadow-md">
                    <Image
                        src={src}
                        alt={`Image du projet`}
                        fill
                        style={{ objectFit: "contain" }}
                        sizes="(min-width: 768px) 33vw, 48vw"
                    />
                    </div>
                ))}
                </div>
          </div>

          {/* Part 2 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Réalisation de la Carte Mentale</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
            La seconde étape consistait à réaliser la base de données en fonction du SEA et la remplir avec le fichier de données fourni.
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
            Nous avions ensuite deux heures dédiées à la réalisation de notre carte mentale qui devait être assez précise pour nous permettre de refaire l’installation sans les instructions données pour le projet. Nous étions totalement libres du choix de présentation de la carte mentale, nous pouvions la réaliser grâce à un logiciel ou manuellement selon nos préférences. Pour ma part, j’ai décidé de prendre en main le logiciel Mindomo.
            </p>
                <div className="flex flex-wrap gap-4">
                {[
                    "/projets/projet6/mindmap1.png",
                    "/projets/projet6/mindmap2.png",
                    ].map((src, i) => (
                    <div key={i} className="w-full sm:w-[70%] md:w-[48%] h-64 relative border border-[var(--border-white)/12] rounded-lg overflow-hidden shadow-md">
                    <Image
                        src={src}
                        alt={`Image du projet`}
                        fill
                        style={{ objectFit: "contain" }}
                        sizes="(min-width: 768px) 33vw, 48vw"
                    />
                    </div>
                ))}
                </div>
            </div>

          {/* Part 3 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Retour d'expérience</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
En conclusion, ce projet, bien que plus court que les autres, m’a beaucoup appris. J’ai pu enrichir mes connaissances sur Linux et je sais désormais comment installer un système d’exploitation, j’ai d’ailleurs installé Debian 12 sur mon propre ordinateur par la suite. Par ailleurs, bien que je m’y connaisse un peu en montage photo et vidéo, c’était la première fois que j’utilisais un logiciel pour créer une carte mentale et j’ai donc dû apprendre à le manipuler pour finr mon travail dans un temps restreint.
            </p>
          </div>

        </section>
      </div>
    </div>
  );
}