import Link from 'next/link';

export default function PhilosophiePage() {
  const tableauComparatif = [
    { critere: "Délai de livraison", agence: "Souvent entre 3 et 5 mois.", moi: "En moyenne 2 semaines." },
    { critere: "Tarification", agence: "Devis complexes, frais cachés, prix monstres.", moi: "Prix fixe et transparent." },
    { critere: "Processus", agence: "Processus lourd, réunions interminables.", moi: "Méthode agile & pragmatique centrée produit." },
    { critere: "Gestion technique", agence: "Dépendance technique et outils complexes.", moi: "Outils simples, autonomie garantie à 100%." },
    { critere: "Propriété du site", agence: "Parfois floue (systèmes propriétaires).", moi: "Propriétaire à 100%, sans abonnement requis." }
  ];

  return (
    <main className="min-h-screen bg-comptoir-fond text-comptoir-encre py-12 px-4 selection:bg-tech-spark selection:text-white">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* HERO MÉTHODE */}
        <section className="space-y-6 border-b-4 border-comptoir-encre pb-8">
          <div className="inline-block bg-comptoir-accent text-white font-mono-bistro text-xs font-bold px-3 py-1 rounded border border-comptoir-encre">
            PHILOSOPHIE PRODUIT
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Ma méthode : Le "product-first".
          </h1>
          <p className="text-xl font-bold text-comptoir-bois leading-relaxed max-w-3xl">
            "Beaucoup de prestataires complexifient le web. Mon approche est celle d'un artisan : je bâtis des outils solides, rapides et utiles. J'utilise des bases techniques éprouvées pour ne pas réinventer l'eau chaude et me concentrer sur ce qui compte : votre message."
          </p>
        </section>

        {/* PROCESSUS EN 3 ÉTAPES */}
        <section className="space-y-6">
          <div className="border-b-2 border-comptoir-encre pb-2">
            <h2 className="text-2xl font-black uppercase font-mono-bistro text-comptoir-encre">
              // Le processus de travail
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border-[3px] border-comptoir-encre p-6 shadow-brut space-y-3">
              <span className="font-mono-bistro text-xl font-black text-comptoir-accent">01.</span>
              <h3 className="text-xl font-bold">Échange</h3>
              <p className="text-sm font-medium text-comptoir-encre/80">Nous cadrons votre besoin réel, vos objectifs et éliminons tout superflu.</p>
            </div>
            <div className="bg-white rounded-2xl border-[3px] border-comptoir-encre p-6 shadow-brut space-y-3">
              <span className="font-mono-bistro text-xl font-black text-comptoir-accent">02.</span>
              <h3 className="text-xl font-bold">Création</h3>
              <p className="text-sm font-medium text-comptoir-encre/80">Je construis votre site ou outil sur des bases techniques propres et légères.</p>
            </div>
            <div className="bg-white rounded-2xl border-[3px] border-comptoir-encre p-6 shadow-brut space-y-3">
              <span className="font-mono-bistro text-xl font-black text-comptoir-accent">03.</span>
              <h3 className="text-xl font-bold">Livraison & formation</h3>
              <p className="text-sm font-medium text-comptoir-encre/80">Mise en ligne, transmission des accès et 30 min de formation à votre autonomie.</p>
            </div>
          </div>
        </section>

        {/* TABLEAU COMPARATIF */}
        <section className="space-y-6">
          <div className="border-b-2 border-comptoir-encre pb-2">
            <h2 className="text-2xl font-black uppercase font-mono-bistro text-comptoir-encre">
              // Comparatif : Agence classique vs le comptoir innovant
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-[3px] border-comptoir-encre bg-white shadow-brut border-collapse">
              <thead>
                <tr className="bg-comptoir-encre text-white font-mono-bistro text-xs uppercase">
                  <th className="p-4 border-b-2 border-comptoir-encre">Critère</th>
                  <th className="p-4 border-b-2 border-comptoir-encre text-comptoir-fond/70">Agence Web Classique</th>
                  <th className="p-4 border-b-2 border-comptoir-encre text-comptoir-accent">Le comptoir innovant</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-comptoir-encre/10 text-xs md:text-sm font-semibold">
                {tableauComparatif.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-comptoir-fond/30"}>
                    <td className="p-4 font-bold border-r-2 border-comptoir-encre/10">{row.critere}</td>
                    <td className="p-4 text-comptoir-encre/70 border-r-2 border-comptoir-encre/10">{row.agence}</td>
                    <td className="p-4 font-bold text-comptoir-encre">{row.moi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="text-center pt-4">
          <Link 
            href="/contact" 
            className="inline-block bg-comptoir-accent text-white font-extrabold text-base py-4 px-8 rounded-xl border-[3px] border-comptoir-encre shadow-brut hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            Discuter de mon projet →
          </Link>
        </div>

      </div>
    </main>
  );
}