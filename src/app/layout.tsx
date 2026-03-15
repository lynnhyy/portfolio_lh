import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavLinks from './nav-link';
import "./ui/globals.css";
import StarsBackground from "./components/animation-stars";
/*shared between all pages*/
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LH - Portfolio",
  description: "Portfolio de Lynn Hayot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* star background*/}
        <div className="fixed inset-0 -z-10">
          <StarsBackground />
        </div>
        <nav className="sticky top-0 z-50">
          <NavLinks />
        </nav>
        {children}
      </body>
<footer className="w-full bg-[var(--banner-bg)] bg-opacity-70 backdrop-blur-sm border-t border-white/20 text-white py-6 px-6 mt-12">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
    {/* Crédentials */}
    <p className="text-center md:text-right text-white/60 text-xs md:text-sm">
      &copy; {new Date().getFullYear()} Lynn Hayot. Tous droits réservés.
    </p>

    {/* Message de fin */}
    <p className="text-center md:text-left text-sm md:text-base">
      Merci d’avoir visité mon portfolio !
    </p>

    {/* Liens principaux */}
    <div className="flex flex-wrap justify-center gap-6 text-[var(--text-link)] text-sm md:text-base">
      <a href="#contact" className="hover:text-[var(--text-link-hover)] transition">
        Contact
      </a>
      <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-link-hover)] transition">
        CV
      </a>
      <a href="#projects" className="hover:text-[var(--text-link-hover)] transition">
        Projets
      </a>
    </div>

    

  </div>
</footer>


    </html>
  );
}
