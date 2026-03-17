"use client";

import Image from "next/image";
import { useState } from "react";

export default function Page() {

  //form utils
  //TODO : test and config mails
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ type: "success", msg: "Message envoyé avec succès !" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", msg: "Erreur lors de l'envoi du message." });
      }
    } catch (err) {
      setStatus({ type: "error", msg: "Erreur réseau, réessayez plus tard." });
    }
  };

  return (
    <div className="w-full min-h-screen bg-transparent text-[var(--foreground)] px-4 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

        {/* Informations */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 gap-6">
          {/* Photo */}
          <div className="w-40 h-40 rounded-full overflow-hidden border border-[var(--border-white)/12] shadow-lg">
            <Image
              src="/perso/image-perso.jpg"
              alt="Photo de profil"
              width={160}
              height={160}
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Infos */}
          <div className="text-center md:text-left space-y-3">
            
            <p className="text-lg font-semibold flex items-center justify-center md:justify-start gap-2">
              Lynn Hayot
            </p>

            <p className="text-sm text-[var(--foreground)]/80 flex items-center justify-center md:justify-start gap-2">
              Développeur Informatique
            </p>

            <p className="text-sm text-[var(--foreground)]/80 flex items-center justify-center md:justify-start gap-2">
              <img src="/window.svg" alt="Ville" className="w-4 h-4" />
              Grenoble, France
            </p>

            <p className="text-sm text-[var(--foreground)]/80 flex items-center justify-center md:justify-start gap-2">
              <img src="/window.svg" alt="Email" className="w-4 h-4" />
              lynn.hayot@gmail.com
            </p>

            <p className="text-sm text-[var(--foreground)]/80 flex items-center justify-center md:justify-start gap-2">
              <img src="/window.svg" alt="Téléphone" className="w-4 h-4" />
              06 60 79 37 13
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="md:w-2/3 bg-[var(--banner-bg)]/80 backdrop-blur-sm border border-[var(--border-white)/12] rounded-xl p-6 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center md:text-left">
            Contactez-moi
          </h2>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className="w-full px-4 py-2 rounded-md border border-[var(--border-white)/20] bg-[var(--banner-bg)]/50 text-[var(--foreground)] placeholder:text-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--text-link)]"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
              className="w-full px-4 py-2 rounded-md border border-[var(--border-white)/20] bg-[var(--banner-bg)]/50 text-[var(--foreground)] placeholder:text-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--text-link)]"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message"
              rows={6}
              className="w-full px-4 py-2 rounded-md border border-[var(--border-white)/20] bg-[var(--banner-bg)]/50 text-[var(--foreground)] placeholder:text-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--text-link)]"
              required
            ></textarea>

            <button
              type="submit"
              className="mt-2 px-6 py-3 rounded-full border border-[var(--button-border)] bg-[var(--button-bg)] text-[var(--button-text)] shadow-sm hover:scale-105 transition"
            >
              Envoyer
            </button>

            {status && (
              <p
                className={`mt-2 text-sm ${
                  status.type === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                {status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}