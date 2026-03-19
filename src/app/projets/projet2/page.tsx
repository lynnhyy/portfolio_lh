"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  /*Data of the project*/
  const project = {
    title: "Jeu de Elylla",
    shortDescription:
      "Le jeu de la marque Elylla est un jeu sur le thème de tri de briques LEGO où l'objectif est de récupérer les bonnes pièces tout en évitant les mauvaises. Le jeu a été réalisé dans le cadre de mon alternance dans l'entreprise ELYXOFT.",
    objective: " Réaliser un mini jeu web sur le thème du tri de pièces LEGO, pour pallier l'attente des utilisateurs en arrivant sur le site de présentation de la marque.",
    deliverables: ["Code du jeu"],
    participants: ["Lynn Hayot (alternante en informatique, responsable développement)","Loïc Marion (stagiaire en communication, développeur)"],
    duration: "24 février - 13 mars (projet secondaire, en alternance)",
    location : "ELYXOFT, Gillonnay (38)",
    link: "https://www.elylla.fr/",
    tags: [ "Javascript", "HTML", "CSS", "Game Design", "Git"],
    images: ["/projets/projet2/elylla_game.png", "/projets/projet2/elylla_target.png", "/projets/projet2/elylla_pause.png", "/projets/projet2/elylla_game_over.png"],
    photo: "/projets/projet2/elylla_intro.png",
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
              <li><strong>Lien vers le site :</strong> <a href={project.link} target="_blank" className="text-[var(--text-link)] cursor-pointer transition-all duration-300 hover:text-[var(--text-link-hover)]">Elylla</a></li>
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
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Gestion</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
              L'objectif du projet était de créer un jeu simple et saisissant, sur le thème du tri de LEGO, en assez peu de temps. Le jeu est déployé sur le site web du nouveau produit de l'entreprise, qui est en cours de développement : une machine de tri de briques LEGO automatique. 
Nous étions deux sur le projet, moi et Loïc qui n'est pas dans une filière informatique. Nous avons donc dû choisir un jeu assez simple à comprendre, qui serait adapté au format web. Ainsi, nous avons opté pour l'idée d'un Catch Game. 

Pour la répartition des tâches, je me suis principalement chargée de la conception et de l'implémentation des méthodes plus complexes du jeu. Loïc quant à lui, s'est occupé de la création des visuels, la documentation du projet et a également participé au code de la logique métier et du style.
            </p>
          </div>

          {/* Part 2 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Objectif du jeu</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
              Le but du jeu est d'attraper uniquement les bonnes briques qui apparaissent en haut à droite de la page. Plus on obtient de bonnes briques, plus la vitesse et le combo augmentent.
 Oublier de prendre une bonne brique termine immédiatement la partie, par contre prendre une mauvaise brique ou un malus fait perdre une vie et réinitialise le combo. Les malus font également perdre des points. 
L'objectif est de faire le meilleur score ! 
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                  "/projets/projet2/elylla_game.png"
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
              Après avoir fait valider le choix du jeu par notre employeur, nous avons commencé à réfléchir à l'implémentation.
Pour le choix des technologies, j'ai décidé de faire du Javascript vanilla, sans framework, car mon collègue n'était pas habitué à la programmation et un framework aurait demander un apprentissage en plus, et le jeu est assez léger.
Concernant l'architecture, j'ai opté pour un modèle simple en MVC (Modèle, Vue, Contrôleur) qui permettrait de bien distinguer la logique métier et les interactions visuelles. J'ai réalisé un diagramme de classe et ai détaillé quelques fonctions clé pour nous guider dans l'implémentation, j'ai par ailleurs demandé à Loïc de réaliser la maquette de la vue du jeu.
</p>
          </div>

          {/* Part 4 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Développement</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
              J'ai rapidement réalisé les classes principales du modèle du jeu pour qu'on puisse ensuite se pencher sur la partie interactive entre le contrôleur et la vue. 
Lorsqu'on a enfin pu relier les trois composants, on a pu commencer à tester et corriger les erreurs de code.
Ensuite, j'ai implémenté la liaison entre le site et le lancement d'une partie, Loïc a ensuite mis en place l'écran de fin de jeu, et j'ai complété avec un écran de pause. 
A la fin, nous avons testé l'ensemble du jeu et ajusté les timings et les petits bugs, ainsi que modifier les différents éléments de style.
</p>
          </div>
          <div className="flex flex-wrap gap-4">
              {[
                  "/projets/projet2/elylla_game_over.png",
                  "/projets/projet2/elylla_pause.png"
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
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Retour d'expérience</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
              Étant en alternance, donc pas toujours présente, et sur un autre projet plus prioritaire en même temps, le jeu a mis plus de temps que prévu à se terminer. Il est néanmoins désormais fonctionnel et prêt à être déployé.
Cette expérience a été vraiment bénéfique pour moi, car elle m'a permis de découvrir le vrai métier d'un développeur informatique : concevoir et implémenter. Je me suis rendu compte qu'on oublie souvent la première partie, cependant celle-ci est vraiment importante pour construire une application qui soit fonctionnelle et maintenable. Avec ce jeu, j'ai vraiment été responsable de la conception et développement, et j'ai pu comprendre la difficulté de concevoir une application de A à Z, sans aucun guide ou avis d'un autre développeur.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}