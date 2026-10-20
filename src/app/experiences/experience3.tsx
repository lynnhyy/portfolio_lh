import { link } from "fs/promises";
import Image from "next/image";
const project = {
    title: "Alternance développeur - Elyxoft",
    formation: "BUT informatique (3ème année)",
    formationLink: "https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/but-bachelor-universitaire-de-technologie-BUT/but-informatique-grenoble-KI4UEV4Y.html", 
    society: "Elyxoft",
    societyLink: "https://www.elyxoft.fr/",
    societyType:"ESN / Bureau d'étude",
    societySize: "2-5 employés",
    duration:"Septembre 2025 - Juillet 2026",
    objective1:"Participer au projet ElyBricks : implémentation d'une machine de tri de briques LEGO automatique et son interface utilisateur.",
    objective2:"Implémenter un site de commandes de photos, sans système bancaire.",
    objective3:"Contribuer aux différents projets et recherches de l'entreprise.",
    tags: [ "Python", "PHP", "JavaScript", "Game Design", "Git", "Blender", "AI", "UX/UI", "DBus", "UML", "Kivy", "FSM"],
    photo: "/society/logo-elyxoft.png",
  };

export default function Experience3() {
  return (
    <div className="w-full min-h-screen bg-transparent text-[var(--foreground)] px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Resume */}
        <section className="flex flex-col gap-8 mb-10 bg-[var(--elyxoft-bg)]/80 backdrop-blur-sm border border-[var(--border-white)/12] rounded-xl p-6 shadow-md">
          {/* Title */}
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-center">
              {project.title}
            </h1>
          </header>
          
          {/* Text */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-2/3">
              <ul className="text-sm space-y-2 text-[var(--foreground)]/80">
                <li><strong>Objectif :</strong> 
                  <ul className="list-disc pl-5">
                    <li>{project.objective1}</li>
                    <li>{project.objective2}</li>
                    <li>{project.objective3}</li>
                  </ul>
                </li>
                <li><strong>Entreprise :</strong> <a href={project.societyLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {project.society}</a>
                </li>
                <li><strong>Type de Société :</strong> {project.societyType}</li>
                <li><strong>Taille de la Société :</strong> {project.societySize}</li>
                <li><strong>Formation :</strong> <a href={project.formationLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {project.formation}</a>
                </li>
                <li><strong>Durée :</strong> {project.duration}</li>
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
              <div className="w-full max-w-[250px] aspect-square rounded-xl overflow-hidden border border-[var(--border-white)/12] shadow-md justify-center items-center flex">
                <Image
                  src={project.photo}
                  alt="Photo projet"
                  width={250}
                  height={250}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>

          {/* Intro */}
          <div>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
                Durant cette année au sein de l'entreprise Elyxoft, j'ai approfondi le projet rejoint en stage quelques mois plus tôt. Elybricks consiste à implémenter une machine de tri automatique de briques LEGO et son interface utilisateur.
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
                Au cours de l'année j'ai approché le projet sous toutes ses facettes. J'ai eu la chance de réfléchir à l'architecture de la machine avec mes tuteurs et modéliser différentes parties.
            </p>
          </div>
          {/* Part 1 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Logiciel de la Machine</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
             J'ai particulièrement participé à l'implémentation logicielle de la machine en réalisant les différents écrans de l'application utilisateur sous Kivy et en développant les interactions avec les firmwares des moteurs de la machine. J'ai implémenté une grande partie de la logique métier de la machine en faisant communiquer les différents modules via DBus (module Python) et en documentant et implémentant des machines d'état. 
            </p>
          </div>

          {/* Part 2 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Modélisation de Dataset</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
              Par ailleurs, j'ai passé une grande partie de l'année à concevoir un dataset synthtétique pour l'entraînement de l'Intelligence Artificielle de la machine, à l'aide de Blender. J'ai eu l'occasion de toucher aux différentes parties du logiciel telles que les différents éléments de scène, les modifications des objets, et les textures et shaders. Pour cette mission, j'ai été accompagné par mon collègue inénieur en IA pour déterminer les différents changements à apporter au dataset.
            </p>
          </div>

          {/* Part 3 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Missions Annexes</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
              Enfin, j'ai participé à plusieurs missions annnexes telles que la conception et le développement d'un site de commandes de photos avec le framework CakePHP, pour lequel recu des retours utilisateurs, ainsi que des missions plus exploratoires sur la comparaison de deux solutions ou des tests de nouveaux outils. J'ai aussi concu et implémenté un mini jeu web pour la promotion de la machine de tri en JavaScript (Disponible <a href="https://www.elylla.fr/" target="_blank" rel="noopener noreferrer">ici</a>).
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}