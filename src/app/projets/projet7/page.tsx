"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  /*Data of the project*/
  const project = {
    title: "Installation d'une Machine Serveur",
    shortDescription:
      "Nous avions pour mission d’installer Debian 12 sur une machine, sans environnement graphique, en plus de configurer les logiciels Apache, PostgreSQL et PHP afin de recréer l’environnement d’une machine serveur. De plus, nous avons rédigé un guide d’installation en Anglais dans le but de garder une trace de nos acquis.",
    objective: "Réaliser un guide d’installation rédigé en Anglais d'un serveur Debian 11 équipé d'Apache, PostgreSQL et PHP.",
    deliverables: ["Machine serveur équipée des logiciels attendus", "Guide d’installation en anglais"],
    participants: ["Lynn Hayot (administrateur système)"],
    duration: "Mai 2024 - Juin 2024 (8h dédiées)",
    location : "IUT2, Grenoble",
    tags: ["Administration Système", "Qemu", "PostgreSQL", "Anglais", "Documentation"],
    images: ["/projets/projet7/extrait_guide.png", "/projets/projet7/software-selection.png", "/projets/projet7/apache2.png", "/projets/projet7/page-default-apache.png", "/projets/projet7/conf1_ap.png", "/projets/projet7/conf1_av.png","/projets/projet7/systemctl-postgres.png","/projets/projet7/databases.png","/projets/projet7/sql_linux.png",],
    photo: "/projets/projet7/debian12.jpeg",
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
            Pour réaliser ce projet, nous avons utilisé une machine virtuelle (lancée avec Qemu). Pendant cette phase, je me suis concentré principalement sur l’installation des logiciels, en prenant quelques notes et des captures d’écran pour m’aider à rédiger le guide d’installation.
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
La première étape était d’installer l’Operating System (OS) sur la machine virtuelle. J’ai donc vérifié les paramètres de la VM, et la clé d’installation de Debian, puis j’ai lancé l’installation. Par la suite, il m’a fallu installer Apache2 sur la machine virtuelle, le lancer, et vérifier son installation avec quelques commandes simples.
            </p>
          </div>

          {/* Part 2 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Création de la Base de Données</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
            La deuxième partie, la plus longue de ce projet, a été l’installation et la configuration de la base de données. 
Il a fallu d’abord installer PostgreSQL puis créer un nouvel utilisateur et une base de données. Pour le projet, nous devions également créer quelques instances dans la base de données et les exploiter afin de voir si le logiciel fonctionnait correctement.
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
            Comme nous étions sur une machine virtuelle pour le projet, il fallait également rendre possible l’accès à notre base depuis la machine physique en modifiant les fichiers de configuration de postgreSQL.
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
            Enfin, nous devions installer PHP et le tester avec un script par défaut. Puis installer PHPPgAdmin pour le configurer et avoir accès à nos bases de données depuis un navigateur.
            </p>
                <div className="flex flex-wrap gap-4">
                {[
                    "/projets/projet7/systemctl-postgres.png",
                    "/projets/projet7/sql_linux.png",
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
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Rédaction du Guide</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
Finalement, j’ai dû rédiger un guide d’installation détaillé sur tout le projet, en ajoutant les images récupérées au cours du projet et les commandes du shell utilisées à chaque étape.
            </p>
          </div>

{/* Part 2 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Création de la Base de Données</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
Ce projet est la suite du projet <a href="/projets/projet6" target="_blank" className="text-[var(--text-link)] cursor-pointer transition-all duration-300 hover:text-[var(--text-link-hover)]">Installation d’une Machine Client</a>, qui était plus rapide et simple à faire, car la notion de configuration était moins présente et le guide n’était pas dans le même format. J’ai beaucoup apprécié le fait de rédiger un guide en anglais cette fois-ci, d’abord parce que je trouve les guides plus lisibles qu’une carte mentale, et ensuite, car cela m’a permis de travailler mon anglais.
            </p>
                <div className="flex flex-wrap gap-4">
                {[
                    "/projets/projet7/extrait_guide.png",
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