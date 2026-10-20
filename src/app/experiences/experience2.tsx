import { link } from "fs/promises";
import Image from "next/image";
const project = {
    title: "CDD développeur - Elyxoft",
    society: "Elyxoft",
    societyLink: "https://www.elyxoft.fr/",
    societyType:"ESN / Bureau d'étude",
    societySize: "2-5 employés",
    duration:"Juillet 2025",
    objective1:"Participer au projet ElyBricks : implémentation d'une machine de tri de briques LEGO automatique et son interface utilisateur.",
    objective2:"Participer à l'entraînement d'une IA et rechercher des datasets pour la reconnaissance de briques LEGO.",
    tags: ["Python", "AI", "Jupyter Notebook", "TensorFlow", "Classification"],
    photo: "/society/logo-elyxoft.png",
  };

export default function Experience2() {
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
                  </ul>
                </li>
                <li><strong>Entreprise :</strong> <a href={project.societyLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {project.society}</a>
                </li>
                <li><strong>Type de Société :</strong> {project.societyType}</li>
                <li><strong>Taille de la Société :</strong> {project.societySize}</li>
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
             Ce contrat s'est déroulé dans le contexte du projet Elybicks consistant en l'implémentation d'une machine de tri de briques LEGO automatique. Ces trois semaines chez Elyxoft étaient dédiées à la recherche sur l'entraînement de l'IA qui reconnaîtrait les briques LEGO de la machine. 
            </p>
            <p className="text-[var(--foreground)]/90 text-justify leading-relaxed mb-4">
             Durant ces trois semaines, j'ai participé à la recherche de datasets de briques LEGO déjà existants et de leur licence associée. J'ai également été initié aux réseaux de neurones et à l'entraînement d'un modèle d'IA à l'aide de Jupyter Notebook et de TensorFlow. L'objectif était de réussir à entraîner un modèle d'IA fonctionnel de manière autonome et de le transférer sur un environnement restreint en espace mémoire sans perdre de performance.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}