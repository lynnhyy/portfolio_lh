"use client";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  //List of projects
  const projects = [
    {
      id: "projet-1",
      title: "Projet 1 — Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      image: "/window.svg",
      href: "/projets/projet1",
    },
    {
      id: "projet-2",
      title: "Projet 2 — Dolor Sit Amet",
      description:
        "Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui.",
      image: "/window.svg",
      href: "/projets/projet2",
    },
    {
      id: "projet-3",
      title: "Projet 3 — Consectetur Adipiscing",
      description:
        "Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere.",
      image: "/window.svg",
      href: "/projets/projet3",
    },
    {
      id: "projet-4",
      title: "Projet 4 — Ultricies Sed",
      description:
        "Maecenas sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula.",
      image: "/window.svg",
      href: "/projets/projet4",
    },
    {
      id: "projet-5",
      title: "Projet 5 — Aenean Commodo",
      description:
        "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.",
      image: "/window.svg",
      href: "/projets/projet5",
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