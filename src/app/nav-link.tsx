// import {
//   UserGroupIcon,
//   HomeIcon,
//   DocumentDuplicateIcon,
// } from '@heroicons/react/24/outline';
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import clsx from 'clsx';
//routes
const links = [
  { name: 'Home', href: '/' },
  { name: 'cv', href: '/cv'},
  {name: 'contact', href:'/contact'}
];
const projectLinks = [
  { name: 'Project 1', href: '/projets/projet1' },
  {name: 'Projet 2 patati patataaaa', href: '/projets/projet2'},
  { name: 'Plus...', href: '/projets'},
];

export default function NavLinks() {
  /*Renvoie la barre de navigation */
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false); //pour afficher le contenu du menu mobile
  const [projectsOpen, setProjectsOpen] = useState(false); //pour afficher les projets
  return (
    <nav className="flex flex-col md:flex-row md:items-center md:gap-2 relative">
      {/* Menu pour mobile - caché sur dektop*/}
      <div className="md:hidden flex items-center mb-2">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 bg-gray-100 rounded"
        >
          ☰
        </button>
      </div>

      {/* Menu principal : récupération des liens et noms */}
      <div
        className={`flex flex-col md:flex-row md:items-center md:gap-2 ${
          menuOpen ? 'block' : 'hidden'
        } md:flex`}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium ${
              pathname === link.href
                ? 'bg-blue-100 text-blue-600'
                : 'bg-gray-100 text-black hover:bg-gray-200 hover:text-blue-600'
            }`}
          >
            {link.name}
          </Link>
        ))}

        {/* Dropdown Desktop */}
        <div className="relative group md:block hidden">
          <button
            className={`flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium ${
              pathname.startsWith('/projets')
                ? 'bg-blue-100 text-blue-600'
                : 'bg-gray-100 text-black hover:bg-gray-200 hover:text-blue-600'
            }`}
          >
            Projets
          </button>

          <div className="absolute flex flex-column mt-1 w-48 bg-white border rounded shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
            <div className="grid grid-cols-2 gap-0">
              {projectLinks.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className={`block px-4 py-2 text-sm ${
                    pathname === p.href
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-black hover:bg-gray-100 hover:text-blue-600'
                  }`}
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Dropdown Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setProjectsOpen(!projectsOpen)}
            className={`flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium ${
              pathname.startsWith('/projets')
                ? 'bg-blue-100 text-blue-600'
                : 'bg-gray-100 text-black hover:bg-gray-200 hover:text-blue-600'
            }`}
          >
            Projets
          </button>

          {projectsOpen && (
            <div className="flex flex-col mt-1 bg-white border rounded shadow-lg z-50">
              {projectLinks.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className={`block px-4 py-2 text-sm ${
                    pathname === p.href
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-black hover:bg-gray-100 hover:text-blue-600'
                  }`}
                  onClick={() => setProjectsOpen(false)}
                >
                  {p.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}