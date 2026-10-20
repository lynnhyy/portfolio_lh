import { link } from "fs/promises";
import Image from "next/image";
const project = {
    title: "Stage développeur - Elyxoft",
    formation: "BUT informatique (2ème année)",
    formationLink: "https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/but-bachelor-universitaire-de-technologie-BUT/but-informatique-grenoble-KI4UEV4Y.html", 
    society: "Elyxoft",
    societyLink: "https://www.elyxoft.fr/",
    societyType:"ESN / Bureau d'étude",
    societySize: "2-5 employés",
    duration:"Avril 2025 - Juin 2025",
    objective1:"Participer au projet ElyBricks : implémentation d'une machine de tri de briques LEGO automatique et son interface utilisateur.",
    objective2:"Réaliser des outils utiles à l'analyse de données.",
    objective3:"Contribuer aux différents projets et recherches de l'entreprise.",
    tags: [ "Python", "Data Analysis", "Git", "AI", "Linux", "Blender"],
    photo: "/society/logo-elyxoft.png",
  };

export default function Experience1() {
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

          {/* Part 1 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Mission Principale</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed">
             Durant ces trois premiers mois en entreprise, j'ai pu participer au début du projet Elybicks consistant en l'implémentation d'une machine de tri de briques LEGO automatique. Lors de mon arrivée, l'étude de marché et l'état de l'art du produit avaient déjà été réalisés, mais le développement n'avait pas encore commencé. Ce stage a donc été très exploratoire, ancré dans la phase de conception du projet. 
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
              Ma tâche principale était de réaliser différents outils permettant d'analyser les centaines de milliers de données que nous avions à disposition sur les produits LEGO. Ces outils ont été réalisés à l'aide de Python et de la librairie pandas, mais j'ai dû en réécrire certains en C++, le choix technique n'étant pas encore fixé. 
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
              Un autre défi de ce stage a été l'analyse des couleurs des briques LEGO : celles-ci étant nombreuses, il fallait s'assurer qu'on était capable de retrouver la couleur numériquement, notamment à l'aide d'une Intelligence Artificielle. J'ai pu réaliser plusieurs tests sur la couleur des briques à l'aide d'une caméra, mais aussi d'un capteur de couleur Arduino, et réaliser plusieurs graphes sur les valeurs de chaque couleur en RGB et HSV. Pour l'entraînement de l'IA locale, j'ai commencé à générer des pièces LEGO synthétiques à l'aide de Blender. 
            </p>
          </div>

          {/* Part 2 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Mission Client</h2>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
              Par ailleurs, j'ai participé à certaines missions clients de l'entreprise, notamment en réalisant pour l'un d'entre eux un diaporama qui se lance automatiquement au démarrage du système Linux, en prenant en compte les photos d'une clé USB et d'un répertoire en ligne NTFS (Windows). Pour cela, j'ai touché aux différents fichiers de configuration des démons Linux sous Debian 11 et 12, comparé les différents outils adaptés au problème, et réalisé un script shell pour répondre à la demande.
            </p>
           
          </div>
        </section>
      </div>
    </div>
  );
}