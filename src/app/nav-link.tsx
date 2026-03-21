'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/' },
  { name: 'CV', href: '/cv' },
  { name: 'Contact', href: '/contact' },
];

const projectLinks = [
  { name: 'La Sorcière des Ombres', href: '/projets/projet1' },
  { name: 'Jeu de Elylla', href: '/projets/projet2' },
  { name: "Chât'Odyssée", href: '/projets/projet3' },
  { name: 'Plus...', href: '/projets' },
];

export default function NavLinks() {

  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  /*Allow scroll nav*/
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /*Nav bar*/
  return (
    <nav
      className={`relative transition-transform duration-300 z-50 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      } bg-[var(--color-bg-nav)] text-[var(--color-text-nav)]`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Desktop links */}
        <div className="hidden md:flex flex-1 gap-2">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex-1 text-center px-4 py-2 rounded-md font-medium text-sm ${
                pathname === link.href
                  ? 'bg-[var(--color-bg-link-hover)] text-[var(--color-text-link)]'
                  : 'bg-[var(--color-bg-link)] text-[var(--color-text-link)] hover:bg-[var(--color-bg-link-hover)] hover:text-[var(--color-text-link-hover)]'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Dropdown projects */}
          <div className="relative group flex-1">
            <button className="w-full text-center px-4 py-2 rounded-md font-medium text-sm bg-[var(--color-bg-link)] text-[var(--color-text-link)] hover:bg-[var(--color-bg-link-hover)] hover:text-[var(--color-text-link-hover)]">
              Projets
            </button>
            <div className="absolute mt-1 w-full bg-[var(--color-bg-dropdown)] border border-[var(--color-border-dropdown)] rounded shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
              {projectLinks.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="block px-4 py-2 text-sm hover:bg-[var(--color-bg-link-hover)] hover:text-[var(--color-text-link-hover)]"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Logo on the right */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <Link href="/">
            <img src="/logo-ghost.png" alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Mobile burger */}
        <div className="md:hidden relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 bg-[var(--color-bg-link)] rounded z-50 relative"
          >
            ☰
          </button>
          {menuOpen && (
            <div className="fixed top-0 left-0 h-screen w-1/2 bg-[var(--color-bg-dropdown)] border-r shadow-lg z-50 p-4 flex flex-col gap-2">
              {/* Back button, TODO : change style */}
              <button
                className="block px-4 py-2 text-sm font-medium bg-[var(--color-bg-link)] text-[var(--color-text-link)] rounded-md hover:bg-[var(--color-bg-link-hover)] hover:text-[var(--color-text-link-hover)] transition-colors"
                onClick={() => {
                  setMenuOpen(false);
                  setProjectsOpen(false);
                }}
              >
                Retour
              </button>

              {/* Mobile Links */}
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-2 text-sm font-medium bg-[var(--color-bg-link)] text-[var(--color-text-link)] rounded-md hover:bg-[var(--color-bg-link-hover)] hover:text-[var(--color-text-link-hover)] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Dropdown projects */}
              <div>
                <button
                  onClick={() => setProjectsOpen(!projectsOpen)}
                  className="block px-4 py-2 text-sm font-medium w-full text-left bg-[var(--color-bg-link)] text-[var(--color-text-link)] rounded-md hover:bg-[var(--color-bg-link-hover)] hover:text-[var(--color-text-link-hover)] transition-colors"
                >
                  Projets
                </button>
                {projectsOpen && (
                  <div className="flex flex-col gap-2 mt-2 bg-[var(--color-bg-dropdown)] rounded-md p-2">
                    {projectLinks.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="block px-4 py-2 text-sm font-medium bg-[var(--color-bg-link)] text-[var(--color-text-link)] rounded-md hover:bg-[var(--color-bg-link-hover)] hover:text-[var(--color-text-link-hover)] transition-colors"
                        onClick={() => {
                          setMenuOpen(false);
                          setProjectsOpen(false);
                        }}
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
