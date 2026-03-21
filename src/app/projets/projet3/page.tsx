"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  /*Data of the project*/
  const project = {
    title: "Chât'Odyssée",
    shortDescription:
      "Chât'Odyssée est une application web permettant de découvrir les châteaux de la Région Auvergne-Rhône-Alpes. Elle présente brièvement chacun d'entre eux et permet aux utilisateurs d'entrer leurs propres impressions.",
    objective: "Réaliser une application fullstack en PHP, incluant l'utilisation d'une base de données. L'application doit mettant en valeur le patrimoine culturel.",
    deliverables: ["Pitch de présentation", "Dossier de cadrage", "Soutenance de cadrage", "Dossier de conception", "Soutenance de conception", "Code", "3 soutenances de suivi en anglais"],
    participants: ["Lynn Hayot (chef de projet)", "Léo Ducruet (responsable technique)", "Nolan Dupont (responsable serveur et BD)", "Léa Garaix (développeur)", "Lili Goy (développeur)", "Jarod Tivollier (développeur)"],
    duration: "8 octobre 2024 - 24 janvier 2025",
    location : "IUT2, Grenoble",
    tags: [ "Javascript", "HTML", "CSS", "PHP","SQL", "UML", "Git", "Management"],
    images: ["/projets/projet3/site1.png", "/projets/projet3/site2.png", "/projets/projet3/site3.png", "/projets/projet3/personna1.png", "/projets/projet3/personna2.png", "/projets/projet3/personna3.png", "/projets/projet3/personna4.png", "/projets/projet3/plan_site.png", "/projets/projet3/maquette1.png", "/projets/projet3/maquette2.png", "/projets/projet3/maquette3.png", "/projets/projet3/diagramme_classe.png","/projets/projet3/BPMN1.jpg", "/projets/projet3/BPMN2.jpg"],
    photo: "/projets/projet3/site1.png",
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
              Le but de ce projet était de nous apprendre à gérer un projet et à développer une application web complète en PHP. 
Pour nous, l'objectif était de développer une application, interagissant avec une base de données libre de droit, mettant en valeur le patrimoine culturel. Le sujet étant assez large, il a fallu que nous nous limitions à une région et à un type de patrimoine.
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
Ainsi, nous avons choisi pour concept de faire un carnet de voyage en ligne, qui se concentrerait sur les châteaux de la région Auvergne-Rhône-Alpes. L'utilisateur aurait accès à la liste des différents châteaux avec leur présentation. S'il crée un compte, il sera en mesure de personnaliser son compte, ajouter des amis, ajouter un château dans une liste de favoris, ou bien créer une page de carnet sur ce château.
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
Il pourra éditer cette page à sa guise avec une image et du texte entrés directement sur l'application. Ensuite, il décidera de la rendre publique ou de partager sa page de carnet avec d'autres utilisateurs. S'il la rend publique, ses amis auront la possibilité de laisser un commentaire sur sa page, s'il la partage, les utilisateurs concernés seront avertis et seront capable de copier la page pour l'ajouter à leur propre carnet.
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
Avant de nous lancer dans la conception de ce gros projet, nous avons déterminé les différents risques auxquels nous pourrions être confrontés et la meilleure façon de leurs faire face.
            </p>
          </div>

          {/* Part 2 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Conception</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
            Cette phase a sûrement été la plus difficile, car il a fallu choisir l'architecture la plus adaptée à notre projet. 
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
            Avant de partir sur l'aspect technique, nous avons réfléchi aux profils de nos utilisateurs grâce à la création de personnas et priorisés leurs besoins. Nous avons ensuite réfléchi au visuel de l'application et déterminé l'architecture générale grâce à un Brain Storming. 
            </p>
                <div className="flex flex-wrap gap-4">
                {[
                    "/projets/projet3/personna2.png",
                    "/projets/projet3/diagramme_classe.png"
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
        <div>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
            Suite à cela, l'équipe s'est divisée en plusieurs groupes, chacun chargé d'une tâche à réaliser. Pour ma part, je me suis occupée du plan du site, qui résume les interactions entre les pages, et des maquettes de plusieurs pages. J'ai aussi grandement participé à la rédaction du rapport de cadrage et à la correction.
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
            Enfin, j'ai veillé sur l'avancée de chaque personne et ai relu la plupart des travaux en tant que chef de projet.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                  "/projets/projet3/plan_site.png",
                  "/projets/projet3/maquette1.png"
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
La phase de développement a duré trois semaines. Pendant cette période, on a rencontré plusieurs problèmes auxquels nous n'avions pas pensé pendant la conception, notamment l'édition de la page de château et plus particulièrement quand la page est partagée avec un autre utilisateur. 
Nous avons eu aussi quelques problèmes pour le déploiement sur notre serveur, mais nous avons finalement réussi à tout finir dans les temps.
            </p>

            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
Au niveau du code de cette application, j'ai surtout programmé du côté Backend, en ajoutant des fonctionnalités côté serveur, notamment pour l'inscription, la connexion et les listes de châteaux. Cependant, j'ai aussi réalisé les pages d'inscription et connexion et le profil utilisateur, et ai aidé mes camarades sur plusieurs autres pages, je connaissais donc à la fin la grande majorité du code. 
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
Par ailleurs, j'ai mis en place certaines règles et une liste de choses à faire écrite pour garder à l'œil l'avancée générale de l'équipe et nous organiser. 
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                  "/projets/projet3/site2.png",
                  "/projets/projet3/site3.png"
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
Ce long projet m'avait paru assez difficile, étant donné que c'était la première fois qu'on réalisait une application aussi complexe avec une si grande équipe. De plus, le fait d'avoir le rôle de chef de projet a été une charge mentale en plus car il fallait faire en sorte de motiver l'équipe, tout en vérifiant son avancée par rapport à la date de rendu, en plus de faire mes propres tâches de développeur. 
            </p>
           <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
Malgré cela, je pense que cette expérience a été très enrichissante. D'une part, elle nous a appris la procédure de création d'une application en réfléchissant aux besoins des utilisateurs et à la conception du projet, et nous a permis de mieux comprendre le PHP. D'autre part, j'ai pu expérimenter le rôle de chef de projet et apprendre de mes erreurs. 
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
Enfin, les différentes soutenances, en anglais et en français, au cours du projet nous ont entraînés à présenter les choses de façon claire et concise devant un jury.
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
Finalement, je suis maintenant capable de concevoir et de développer des applications fullstak avec beaucoup moins de difficulté.
            </p>
          </div>

        </section>
      </div>
    </div>
  );
}