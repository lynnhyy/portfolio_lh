"use client";

import Image from "next/image";

export default function Page() {
  const imgSrc = "/perso/cv-developpeur-informatique.png";
  const pdfSrc = "/perso/cv-developpeur-informatique.pdf";

  return (
    <div className="w-full min-h-screen bg-transparent text-[var(--foreground)] px-4 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Mon CV</h1>
        </header>

        {/* Preview */}
        <div className="rounded-xl overflow-hidden border border-[var(--border-white)/12] shadow-lg bg-[var(--banner-bg)]/30 mb-6">
          <Image
            src={imgSrc}
            alt="Aperçu"
            width={1200}
            height={1200}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={pdfSrc}
            download
            className="px-5 py-2 rounded-full border border-[var(--button-border)] bg-[var(--button-bg)] text-[var(--button-text)] shadow-sm hover:scale-105 transition text-center"
          >
            Télécharger PDF
          </a>
          <a
            href={imgSrc}
            download
            className="px-5 py-2 rounded-full border border-[var(--button-border)] bg-[var(--button-bg)] text-[var(--button-text)] shadow-sm hover:scale-105 transition text-center"
          >
            Télécharger l'image
          </a>
        </div>
      </div>
    </div>
  );
}