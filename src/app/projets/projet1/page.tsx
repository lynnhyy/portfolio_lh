"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  /*Data of the project*/
  const project = {
    title: "La Sorcière des Ombres",
    shortDescription:
      "La Sorcière des Ombres est un jeu narratif, intégrant énigmes et mécaniques, réalisé au cours d'une Game Jam éducative en septembre 2026.",
    objective: "Réaliser un jeu complet en une semaine sur le thème 'Apparaître/Disparaître' dans un contexte de Moyen Age.",
    deliverables: ["Code du jeu","Présentation", "Jaquette de jeu"],
    participants: ["Lili Goy (chef de projet)", "Léa Garaix(développeur)", "Jarod Tivollier(développeur)","Nolan Dupont (responsable système)", "Lynn Hayot (développeur)"],
    duration: "3 septembre 2026 - 7 septembre 2026",
    location : "IUT 2, Grenoble",
    tags: [ "Python", "PyGame", "Game Design", "Git"],
    images: ["/projets/projet1/intro_jeu.png", "/projets/projet1/exterieur_gardes.png", "/projets/projet1/cuisine_lore.png", "/projets/projet1/cuisine_inventaire.png", "/projets/projet1/donjon_gardes.png", "/projets/projet1/donjon_indice.png", "/projets/projet1/prison_indice.png", "/projets/projet1/credits_jeu.png" ],
    photo: "/projets/projet1/jaquette_jeu.png",
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
                style={{ objectFit: "contain" }}
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
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Gestion</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
              L'objectif du projet était de créer un jeu en très peu de temps, avec peu d'expérience en Python pour la plupart des étudiants. Le thème était 'Apparaître/Disparaître' dans une ambiance de Moyen Age, offrant un large champ pour l'imagination. Le jeu devait être réalisé avec la librairie PyGame, sans outils supplémentaire.
En partant de ces éléments, nous avons dû nous adapter à la situation. Tout d'abord, il fallait prendre en compte le fait que trois d'entre nous n'avaient pas fait de Python avant cette Game Jam, et moi et mon camarade ne connaissions pas les spécificités de PyGame. Il ne fallait donc pas prévoir un concept trop ambitieux pour le temps imparti.
Ainsi, après une séance de Brain Storming à cinq, nous avons choisi de réaliser un jeu narratif à énigmes, composés de différents niveaux. Ainsi, nous pourrions ajouter ou enlever des niveaux en fonction du temps. 
            </p>
          </div>

          {/* Part 2 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Objectif du jeu</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
              La sorcière des Ombres est un jeu en 2D racontant l'histoire de Circée, une petite sorcière venue sauver son clan d'une mort certaine. Circée s'introduit donc discrètement dans le château du roi qui a pris en otage ses sœurs, et doit résoudre plusieurs énigmes pour avancer, sans se faire repérer par les gardes royaux. 
Grâce à son pouvoir de sorcière, Circée peut se transformer et se fondre parmi les ombres, devenant ainsi invisible aux yeux des gardes. 

Parmi les différentes salles, des éléments de l'histoire et des indices sont cachés. Pour avancer, il faut parler aux différents PNJ et interagir avec l'environnement et l'inventaire. 
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                  "/projets/projet1/cuisine_lore.png",
                  "/projets/projet1/prison_indice.png"
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
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Conception</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
              Avant de passer au développement du jeu et des mécaniques, nous avons réfléchi à ce que nous devions implémenter. Nous avons réfléchi aux différentes classes nécessaires, et à la structure du projet. Nous avons également pensé aux mécaniques des différents niveaux et à l'aspect des différentes cartes.
Notre plus grand défi ici était de savoir comment implémenter le champ de vision des gardes et comment réinitialiser les placements des objets et les mécaniques lorsque le joueur se fait repérer par un garde.
            </p>
          </div>

          {/* Part 4 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Développement</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
              Les jours suivants, nous avons codé tous ensemble, partageant le travail sur Git. 
Nous nous sommes réparti le travail de façon à ce que chaque développeur travaille sur une carte et code les différentes mécaniques associées. Chacun avait également un petit rôle en plus à tenir, pour ma part, j'ai écrit l'histoire et recherché les sprites des différents personnages. Je tiens à remercier particulièrement Nolan pour avoir jouer les musiques du eu au piano, apportant ainsi une véritable personnalité au jeu.
Concernant les mécaniques essentielles, comme le changement de scène, l'animation ou encore les déplacements, nous nous sommes entraidés pour réussir à obtenir un jeu fonctionnel et maintenable. 
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
              {[
                  "/projets/projet1/exterieur_gardes.png",
                  "/projets/projet1/cuisine_inventaire.png"
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
          {/* Part 5 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Développement</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
              À la fin de cette semaine de Game Jam bien mouvementée, nous avons dû présenter ce jeu avec une jaquette et une petite démo devant le reste de la promo. Suite à cette présentation, les jeux ont été classés selon un vote. Nous avons finalement fini 4ème sur 16, cela nous convient parfaitement, d'autant plus que notre format de jeu narratif ne nous a pas beaucoup avantagé sur la présentation.
              </p>
          </div>

          {/* Part 6 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Retour d'expérience</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
              Le seul problème qu'on a eu pour cette Game Jam, c'est le temps. La fin du jeu a été assez sportive, mais nous avons tout de même réussi à finir dans les temps.
J'ai vraiment apprécié cette expérience. Brève mais intense, elle m’a fait découvrir la sensation de créer un jeu et m’a confirmé que je pouvais en faire ma vocation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}