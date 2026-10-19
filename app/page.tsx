import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-comptoir-fond text-comptoir-encre py-10 px-4 selection:bg-tech-spark selection:text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* HERO SECTION / ATTACK DIRECTE */}
        <section className="space-y-8 pt-4">
          
          {/* BULLE D'ÉTAT DISPONIBILITÉ */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border-2 md:border-[3px] border-comptoir-encre shadow-btn rounded-lg transform -rotate-1">
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-glow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-tech-glow"></span>
            </span>
            <span className="font-mono-bistro text-xs font-bold uppercase text-comptoir-encre">
              Disponible vos sites et applications métiers
            </span>
          </div>

          {/* ACCROCHE ET PROMESSE */}
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-comptoir-encre leading-[1.05]">
              Arrêtez de vous battre avec des outils inadaptés.
            </h1>
            <div className="inline-block bg-comptoir-accent/15 px-4 py-2 border-l-4 border-comptoir-accent rounded-r-md">
              <p className="text-xl font-bold tracking-tight text-comptoir-bois">
                Vos idées. Mon code. Des solutions simples, livrées rapidement.
              </p>
            </div>
          </div>

          {/* BOUTONS D'ACTION */}
          <div className="pt-2 flex flex-wrap items-center gap-6">
            <Link 
              href="/contact" 
              className="group relative inline-block bg-comptoir-accent text-white text-lg font-extrabold px-8 py-5 rounded-xl border-[3px] border-comptoir-encre shadow-brut hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#1E1A17] transition-all"
            >
              Démarrer un projet
            </Link>
            <Link 
              href="/philosophie" 
              className="font-mono-bistro font-bold text-md text-comptoir-encre hover:text-comptoir-accent transition-colors underline underline-offset-8 decoration-[3px] decoration-comptoir-encre hover:decoration-comptoir-accent"
            >
              Découvrir ma méthode →
            </Link>
          </div>
        </section>

        {/* PANNEAU DES SOLUTIONS / LES 2 PILIERS D'OFFRES */}
        <section className="space-y-6 pt-6">
          <div className="border-b-2 border-comptoir-encre pb-2">
            <h2 className="text-2xl font-black uppercase font-mono-bistro text-comptoir-encre">
              // Choisissez la solution adaptée à votre besoin
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* PILIER 1 : APPLICATIONS & OUTILS SUR-MESURE */}
            <div className="bg-white rounded-2xl border-[3px] border-comptoir-encre p-6 shadow-brut flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono-bistro text-xs font-bold uppercase bg-tech-spark text-white px-3 py-1 rounded border border-comptoir-encre">
                    APPLICATIONS 
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-comptoir-encre">
                  Outils métiers & applications
                </h3>
                <p className="text-sm font-medium text-comptoir-encre/80 leading-relaxed">
                  Pour automatiser vos processus, remplacer des fichiers Excel trop lourds, ou lancer la V1 d'un produit SaaS.
                </p>
                <ul className="space-y-2 text-xs font-semibold text-comptoir-encre/90">
                  <li className="flex items-center gap-2"><span className="text-tech-glow font-bold">✔</span> Back-office & espaces clients dédiés</li>
                  <li className="flex items-center gap-2"><span className="text-tech-glow font-bold">✔</span> Formulaires complexes et logique métier</li>
                  <li className="flex items-center gap-2"><span className="text-tech-glow font-bold">✔</span> Zéro sur-architecture, évolution facile</li>
                </ul>
              </div>

              <Link 
                href="/offres/principale" 
                className="font-mono-bistro text-xs font-bold uppercase text-comptoir-encre group-hover:text-tech-spark flex items-center gap-2 pt-4 border-t border-comptoir-encre/10"
              >
                En savoir plus sur les outils métiers →
              </Link>
            </div>

            {/* PILIER 2 : SITES WEB SIMPLES & AUTONOMES */}
            <div className="bg-white rounded-2xl border-[3px] border-comptoir-encre p-6 shadow-brut flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono-bistro text-xs font-bold uppercase bg-comptoir-accent text-white px-3 py-1 rounded border border-comptoir-encre">
                    SITES
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-comptoir-encre">
                  Sites web simples & contenu
                </h3>
                <p className="text-sm font-medium text-comptoir-encre/80 leading-relaxed">
                  Pour les associations, PME et indépendants qui veulent un site clair, léger, et modifiable en totale autonomie.
                </p>
                <ul className="space-y-2 text-xs font-semibold text-comptoir-encre/90">
                  <li className="flex items-center gap-2"><span className="text-tech-glow font-bold">✔</span> Blogs, actualités, vitrines institutionnelles</li>
                  <li className="flex items-center gap-2"><span className="text-tech-glow font-bold">✔</span> Édition facile des textes et images sans coder</li>
                  <li className="flex items-center gap-2"><span className="text-tech-glow font-bold">✔</span> Site épuré, zéro usine à gaz</li>
                </ul>
              </div>

              <Link 
                href="/offres/secondaire" 
                className="font-mono-bistro text-xs font-bold uppercase text-comptoir-encre group-hover:text-comptoir-accent flex items-center gap-2 pt-4 border-t border-comptoir-encre/10"
              >
                En savoir plus sur les sites web →
              </Link>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}