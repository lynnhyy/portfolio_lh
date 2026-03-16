"use client";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  /*Data of the project*/
  const project = {
    title: "Projet 1",
    shortDescription:
      "Blabla",
    objective: "Créer une page projet claire, simple et agréable à lire.",
    deliverables: ["Livrable","Livrable", "Livrable", "Livrable"],
    participants: ["Lynn Hayot (dev)", "Alice Dupont (designer)"],
    duration: "Jan 2026 — Fév 2026",
    tags: ["Skill", "Skill", "Skill", "Skill"],
    images: ["/window.svg", "/window.svg", "/window.svg"],
    photo: "/window.svg",
  };

  return (
    <div className="w-full min-h-screen bg-transparent text-[var(--foreground)] px-4 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Back button */}
        <div className="mb-6 flex justify-start">
          <Link
            href="/#projects"
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
            <p className="text-base text-[var(--foreground)]/90 leading-relaxed mb-4">
              {project.shortDescription}
            </p>
            <ul className="text-sm space-y-2 text-[var(--foreground)]/80">
              <li><strong>Objectif :</strong> {project.objective}</li>
              <li><strong>Durée :</strong> {project.duration}</li>
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

        {/* Description */}
        <section className="bg-[var(--banner-bg)]/80 backdrop-blur-sm border border-[var(--border-white)/12] rounded-xl p-6 shadow-md flex flex-col gap-8">
          
          {/* Part 1 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Titre</h2>
            <p className="text-[var(--foreground)]/90 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              consectetur, nisl a imperdiet sagittis, lorem sem venenatis elit, sed
              tincidunt orci justo eget nunc. Nulla facilisi. Sed nec purus vel
              ligula luctus efficitur.
            </p>
          </div>

          {/* Part 2 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Titre</h2>
            <p className="text-[var(--foreground)]/90 leading-relaxed mb-4">
              Phasellus ac nisl id odio volutpat luctus. Morbi euismod, sapien nec
              sagittis consequat, velit magna vehicula libero, eget tincidunt enim
              sapien nec erat. Duis ut sapien in massa dignissim tristique non a
              ligula.
            </p>
            <div className="flex flex-wrap gap-4">
              {project.images.map((src, i) => (
                <div key={i} className="w-full sm:w-[70%] md:w-[48%] h-64 relative border border-[var(--border-white)/12] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={src}
                    alt={`Image ${i + 1} du projet`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(min-width: 768px) 33vw, 48vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Part 3 */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Titre</h2>
            <p className="text-[var(--foreground)]/90 leading-relaxed">
              Aliquam erat volutpat. Sed sit amet dolor vitae lectus faucibus
              sollicitudin. Fusce id luctus erat. Integer gravida sagittis velit, at
              dignissim orci pretium a. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}