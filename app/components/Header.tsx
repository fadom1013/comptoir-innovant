import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-comptoir-fond/90 backdrop-blur-md border-b-2 border-comptoir-encre/10 transition-all">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LOGO / BRANDING COMPACT */}
        <Link href="/" className="font-extrabold text-xl tracking-tight text-comptoir-encre hover:opacity-80 transition-opacity">
          LE COMPTOIR <span className="text-comptoir-accent">INNOVANT</span>
        </Link>

        {/* NAVIGATION LIENS */}
        <nav className="hidden md:flex items-center space-x-6 font-mono-bistro text-xs font-bold uppercase text-comptoir-encre">
          <Link 
            href="/offres/principale" 
            className="hover:text-comptoir-accent transition-colors py-1 underline decoration-transparent hover:decoration-comptoir-accent underline-offset-4"
          >
            Outils Essentiels & V1
          </Link>
          <Link 
            href="/offres/secondaire" 
            className="hover:text-comptoir-accent transition-colors py-1 underline decoration-transparent hover:decoration-comptoir-accent underline-offset-4"
          >
            Sites Web Simples
          </Link>
          <Link 
            href="/philosophie" 
            className="hover:text-comptoir-accent transition-colors py-1 underline decoration-transparent hover:decoration-comptoir-accent underline-offset-4"
          >
            Ma Méthode
          </Link>
          
          {/* BOUTON ACTION RELIEF */}
          <Link 
            href="/contact" 
            className="bg-comptoir-accent text-white font-extrabold px-4 py-2 rounded-lg border-2 border-comptoir-encre shadow-btn hover:translate-x-0.5 hover:translate-y-0.5 transition-all ml-2"
          >
            Démarrer un projet
          </Link>
        </nav>

      </div>
    </header>
  );
}