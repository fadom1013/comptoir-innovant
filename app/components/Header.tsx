import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Branding */}
        <Link href="/" className="font-extrabold text-brand-navy text-lg tracking-tight">
          LE COMPTOIR <span className="text-brand-orange">INNOVANT</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
          <Link href="/offres/principale" className="hover:text-brand-orange transition-colors">
            Outils Essentiels & V1
          </Link>
          <Link href="/offres/secondaire" className="hover:text-brand-orange transition-colors">
            Sites Web Simples
          </Link>
          <Link href="/philosophie" className="hover:text-brand-orange transition-colors">
            Ma Méthode
          </Link>
          <Link 
            href="/contact" 
            className="bg-brand-orange hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-bold transition-all shadow-sm"
          >
            Démarrer un projet
          </Link>
        </nav>
      </div>
    </header>
  );
}