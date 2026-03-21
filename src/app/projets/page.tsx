"use client";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  //List of projects
  const projects = [
    {
      id: "projet-1",
      title: "La Sorcière des Ombres",
      description:
        "La Sorcière des Ombres est un jeu narratif, intégrant énigmes et mécaniques, réalisé au cours d'une Game Jam éducative en septembre 2026.",
      image: "/projets/projet1/jaquette_jeu.png",
      href: "/projets/projet1",
    },
    {
      id: "projet-2",
      title: "Jeu de Elylla",
      description:
          "Le jeu de la marque Elylla est un jeu sur le thème de tri de briques LEGO où l'objectif est de récupérer les bonnes pièces tout en évitant les mauvaises. Le jeu a été réalisé dans le cadre de mon alternance dans l'entreprise ELYXOFT.",
      image: "/projets/projet2/elylla_intro.png",
      href: "/projets/projet2",
    },
    {
      id: "projet-3",
      title: "Chât'Odyssée",
      description:
        "Chât'Odyssée est une application web permettant de découvrir les châteaux de la Région Auvergne-Rhône-Alpes. Elle présente brièvement chacun d'entre eux et permet aux utilisateurs d'entrer leurs propres impressions.",
      image: "/projets/projet3/site1.png",
      href: "/projets/projet3",
    },
    {
      id: "projet-4",
      title: "PEP : ProEventPlanner",
      description:
        "PEP : ProEventPlanner est une application lourde de gestion d'évènements en entreprise. Réalisée en Java et JavaFX, elle représente mon premier projet réalisé en équipe.",
      image: "/projets/projet4/pep_accueil.png",
      href: "/projets/projet4",
    },
  ];

  return (
    <div className="w-full bg-transparent text-[var(--foreground)] px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Projets</h1>
        </header>

        {/* Grid to display projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group block h-full"
              aria-label={`Voir ${project.title}`}
            >
              <article
                className={`
                  flex flex-col md:flex-row h-full
                  bg-[var(--banner-bg)]/80 backdrop-blur-sm
                  border border-[var(--border-white)/12] rounded-xl
                  overflow-hidden
                  transition-transform duration-250
                  hover:scale-[1.01]
                  shadow-[0_6px_18px_rgba(0,0,0,0.18)]
                  hover:shadow-[0_12px_48px_rgba(99,102,241,0.35)]
                  hover:ring-4 hover:ring-[rgba(99,102,241,0.18)]
                `}
              >
                {/* Image */}
                <div className="w-full md:w-1/3 h-44 md:h-auto relative flex-shrink-0 overflow-hidden p-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="object-cover rounded-lg"
                  />
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 flex flex-col justify-center md:w-2/3">
                  <div className="mb-2">
                    <h3 className="inline-block bg-[var(--banner-bg)]/90 px-2 py-1 rounded-md text-lg font-semibold text-[var(--foreground)]">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-[var(--foreground)]/85 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}