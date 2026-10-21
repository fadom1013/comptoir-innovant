'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-comptoir-fond/90 backdrop-blur-md border-b-2 border-comptoir-encre/10 transition-all">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LOGO / BRANDING */}
        <Link 
          href="/" 
          onClick={() => setIsOpen(false)}
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo-comptoir.png"
            alt="Le Comptoir Innovant - Fabrique Digitale"
            width={240}
            height={52}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center space-x-6 font-mono-bistro text-xs font-bold uppercase text-comptoir-encre">
          <Link 
            href="/offres/principale" 
            className="hover:text-comptoir-accent transition-colors py-1 underline decoration-transparent hover:decoration-comptoir-accent underline-offset-4"
          >
            Outils métiers
          </Link>
          <Link 
            href="/offres/secondaire" 
            className="hover:text-comptoir-accent transition-colors py-1 underline decoration-transparent hover:decoration-comptoir-accent underline-offset-4"
          >
            Sites webs
          </Link>
          <Link 
            href="/philosophie" 
            className="hover:text-comptoir-accent transition-colors py-1 underline decoration-transparent hover:decoration-comptoir-accent underline-offset-4"
          >
            Ma méthode
          </Link>
          
          <Link 
            href="/contact" 
            className="bg-comptoir-accent text-white font-extrabold px-4 py-2 rounded-lg border-2 border-comptoir-encre shadow-btn hover:translate-x-0.5 hover:translate-y-0.5 transition-all ml-2"
          >
            Démarrer un projet
          </Link>
        </nav>

        {/* BOUTON BURGER (MOBILE UNIQUEMENT) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label="Ouvrir le menu"
          className="md:hidden p-2 rounded-lg border-2 border-comptoir-encre bg-white shadow-btn text-comptoir-encre focus:outline-none"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            )}
          </svg>
        </button>

      </div>

      {/* DROPDOWN MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden bg-comptoir-fond border-b-4 border-comptoir-encre px-4 pt-2 pb-6 space-y-4 font-mono-bistro text-sm font-bold uppercase">
          <Link 
            href="/offres/principale" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-comptoir-encre border-b border-comptoir-encre/10 hover:text-comptoir-accent"
          >
            Outils métiers
          </Link>
          <Link 
            href="/offres/secondaire" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-comptoir-encre border-b border-comptoir-encre/10 hover:text-comptoir-accent"
          >
            Sites webs
          </Link>
          <Link 
            href="/philosophie" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-comptoir-encre border-b border-comptoir-encre/10 hover:text-comptoir-accent"
          >
            Ma méthode
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="block text-center bg-comptoir-accent text-white font-extrabold py-3 rounded-lg border-2 border-comptoir-encre shadow-btn mt-4"
          >
            Démarrer un projet
          </Link>
        </div>
      )}
    </header>
  );
}