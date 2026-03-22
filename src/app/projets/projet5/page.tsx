"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  /*Data of the project*/
  const project = {
    title: "Etude de données sur le Titanic",
    shortDescription:
      "Nous devions modéliser, puis implémenter une base de données et la remplir avec des données que nous avions mises à disposition, dans le but d'effectuer des requêtes pour répondre à la problématique.",
    objective: "Interroger une base de données avec des requêtes SQL pour répondre à la problématique : Quels sont les facteurs ayant influencé la survie d'un passager lors du naufrage du Titanic ?",
    deliverables: ["Synthèse du sauvetage du Titanic", "SEA des données fournies", "Ensemble de règles organisées (RG)", "Fichiers de création et configuration d’une BD", "Fichiers des requêtes SQL", "Bilan"],
    participants: ["Léa Garaix (administrateur BD)", "Lynn Hayot (administrateur BD)"],
    duration: "Décembre 2023 - Janvier 2024",
    location : "IUT2, Grenoble",
    tags: ["PostgreSQL", "Documentation"],
    images: ["/projets/projet5/exemple_requete.png", "/projets/projet5/exemple_requete_test.png", "/projets/projet5/exemple_requete_test2.png", "/projets/projet5/sea.png", "/projets/projet5/sea_justifications.png",],
    photo: "/projets/projet5/cover.png",
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
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Conception</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
            On a commencé par découvrir la base de données et faire des recherches sur le Titanic chacun de notre côté en se servant de la webographie fournie, tout en complétant par nos propres recherches, sur d’autres sites.
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
Ma collègue Léa s’est occupée d’écrire le compte-rendu sur l’histoire du Titanic à partir de ces recherches mises en commun et de mettre en page le document final. On a décidé des règles de gestion ensemble pour éviter tout malentendu dans la suite du projet. Pour ma part, je me suis chargé de réaliser le SEA ci-contre à l’aide d’un logiciel. J’ai également justifié mes choix de modélisation dans le document final (ensuite relus et complétés par ma collègue).
            </p>
          </div>

          {/* Part 2 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Création de la Base de Données</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
            La seconde étape consistait à réaliser la base de données en fonction du SEA et la remplir avec le fichier de données fourni.
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
            Ma camarade s’est beaucoup occupée de la justification du SEA et du fichier de tests sur l'entrée des informations, tandis que j’ai créé la table et son fichier de suppression. Ensuite, j’ai écrit et commenté 38 tests permettant de vérifier que toutes les contraintes concernant les tables fonctionnaient correctement. Cette fois encore, ma collègue a fait la mise en page du document. 
            </p>
                <div className="flex flex-wrap gap-4">
                {[
                    "/projets/projet5/sea.png",
                    "/projets/projet5/exemple_requete_test.png",
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
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Requêtes sur la Base de Données</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
Cette étape était la dernière du projet, on a donc dû faire les requêtes imposées dans les consignes, et en ajouter quelques autres pour pouvoir répondre à la problématique et trouver les facteurs ayant influencé la survie d'un passager.
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
Pour cette partie, nous nous sommes réparti les requêtes à réaliser et à commenter.  Je me suis chargée de la mise en page et de rédiger la conclusion.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                  "/projets/projet5/exemple_requete.png",
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

        </section>
      </div>
    </div>
  );
}