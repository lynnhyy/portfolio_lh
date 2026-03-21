"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  /*Data of the project*/
  const project = {
    title: "PEP : ProEventPlanner",
    shortDescription:
      "PEP : ProEventPlanner est une application lourde de gestion d'évènements en entreprise. Réalisée en Java et JavaFX, elle représente mon premier projet réalisé en équipe.",
    objective: "Réaliser une application lourde de gestion d’évènements réalisée en java et javaFX.",
    deliverables: ["Dossier de gestion", "Document Rmd avec fonctions d’optimisation", "Document sur des graphes", "Dossier de conception", "Code", "Bilan de revenu sur le projet"],
    participants: ["Emile Dechenaud (chef de projet)", "Jarod Tivollier (développeur)", "Léo Ducruet (développeur)", "Emilie Dubief (développeur)", "Sarah Sekma(développeur)", "Lynn Hayot (développeur)"],
    duration: "Avril 2024 – Juin 2024",
    location : "IUT2, Grenoble",
    tags: ["Java", "JavaFX", "HTML","CSS", "Whimsical", "RStudio", "Git"],
    images: ["/projets/projet4/pep_accueil.png", "/projets/projet4/pep_creation_event.png", "/projets/projet4/pep_materiel.png", "/projets/projet4/pep_menu.png", "/projets/projet4/pep_budget.png", "/projets/projet4/pep_add_guest.png",  "/projets/projet4/pep_playlist.png", "/projets/projet4/pep_archives.png", "/projets/projet4/personna_exemple.png", "/projets/projet4/personna_exemple2.png", "/projets/projet4/fonctions.png", "/projets/projet4/graphe.png"],
    photo: "/projets/projet4/pep_accueil.png",
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
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Cadrage</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
            Suite à nos premiers cours sur la gestion de projet, nous avons pu choisir ce que nous voulions faire comme application. Nous avons décidé de créer un logiciel de gestion d’évènements en entreprise nommé PEP : ProEventPlanner. L’appliation permettrait de créer un évènement avec une date, un budget, une liste d’invités, et une checklist de besoins. Elle compterait plusieurs types dévènements et adapterait les besoins et les playlists proposés en fonction de ce type.
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
Nous avons ainsi choisi nos utilisateurs cible, analysé les risques, designé notre logo et choisi notre charte graphique.
            </p>

            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
Lors de cette phase, nous avons également eu plusieurs séances de maths sur les graphes et l’optimisation de fonctions pour nous permettre de mieux gérer notre organisation et le financement potentiel du logiciel (dans un contexte imaginaire).
             </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
J’ai participé activement à toutes les activités de cette phase et plus particulièrement la définition des utilisateurs et la réalisation du document en Rstudio sur l’optimisation de fonctions.
            </p>

            <div className="flex flex-wrap gap-4">
                {[
                    "/projets/projet4/fonctions.png",
                    "/projets/projet4/graphe.png"
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
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Conception</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
            Cette phase était dédiée à l’aspect un peu plus technique du projet. Nous devions trouver nos cas d’utilisation, les prioriser, et réaliser un diagramme des cas d’utilisation. En plus de cela, il nous a fallu réaliser un diagramme de séquence, et deux diagrammes UML (l’un moins détaillé). Nous avons également dû préparer les maquettes pour la partie Frontend de notre future application. Malheureusement, nous n’avons pas réellement respecté le design d’une application lourde classique, cependant, le manque de fonctionnalités dû au manque de temps pour l’implémenter m’a fait plus pencher pour un design plus simpliste rappelant les applications web.
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
            Nous avons tous participé aux choix des cas d’utilisation, cependant la mise au propre sur Visual Paradigm a été quasi individuelle. J’ai aidé un peu partout pour répondre aux questions, mais ma réelle tâche a été de réaliser les personnas, rédiger les scénarios alternatifs et de rédiger et mettre en forme le document final. 
            </p>
                <div className="flex flex-wrap gap-4">
                {[
                    "/projets/projet4/personna_exemple.png",
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
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Développement</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
Cette phase était la plus intense. Nous avions 5 jours pour implémenter la totalité de notre application et préparer une soutenance, une démo de l’application et un pitch de marketing. Nous avons utilisé Java et JavaFX avec un modèle MVC comme il était imposé dans le sujet pour la réalisation de l’application. 
             </p>

            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
J’ai participé activement au code, aidant mes camarades lorsque j’en avais la possibilité. Je me suis d’abord chargé de l’implémentation du modèle avec une autre personne. Puis j’ai beaucoup participé à l’implémentation des controlers et la création d’une page en JavaFX. Au final, nous avons dû retravailler la construction de notre modèle à cause de différentes pratiques entre les membres. J’ai passé beaucoup de temps avec ma collègue pour tout remettre en place et renommer correctement. Enfin, j’ai été l’une des deux personnes ayant rédigé et mis en place le pitch et notre support de présentation en plus d’avoir écrit le plan de la soutenance finale qui s’est très bien passée.
             </p>

            <div className="flex flex-wrap gap-4">
              {[
                  "/projets/projet4/pep_add_guest.png",
                  "/projets/projet4/pep_budget.png"
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
            
          {/* Part 4 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Retour d'expérience</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
Ce projet a été très enrichissant. Il nous a appris à la fois le travail en équipe, les différentes méthodes de conception et les différentes sortes de livrables attendus. De plus, il nous a permis de mettre en pratique le code applicatif dans un vrai contexte pour la première fois.
             </p>
          </div>

        </section>
      </div>
    </div>
  );
}