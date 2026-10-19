import Link from 'next/link';

export default function OffrePrincipalePage() {
  return (
    <main className="min-h-screen bg-comptoir-fond text-comptoir-encre py-12 px-4 selection:bg-tech-spark selection:text-white">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* EN-TÊTE PAGE */}
        <section className="space-y-4 border-b-4 border-comptoir-encre pb-8">
          <div className="inline-block bg-tech-spark text-white font-mono-bistro text-xs font-bold px-3 py-1 rounded border border-comptoir-encre">
            OFFRE SUR-MESURE
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Outils Métiers, Back-Offices & MVP SaaS
          </h1>
          <p className="text-xl font-bold text-comptoir-bois max-w-2xl">
            Remplacer les tableurs complexes, automatiser les saisies répétitives 
            et lancer votre première version fonctionnelle rapidement.
          </p>
        </section>

        {/* CONTENU & TARIFICATION (Grid avec stretch vertical) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* CARTE TARIF / PACK V1 */}
          <div className="md:col-span-1 bg-white rounded-2xl border-[3px] border-comptoir-encre p-6 shadow-brut flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="font-mono-bistro text-xs font-bold uppercase text-tech-spark">
                  Développement Sur-Mesure
                </span>
                <h2 className="text-2xl font-black">MVP & Outil Métier</h2>
              </div>

              <div>
                <div className="text-3xl font-black text-comptoir-accent">Sur devis</div>
                <span className="text-xs font-semibold text-comptoir-encre/70 block font-mono-bistro mt-1">
                  Livraison sous 3 à 6 semaines
                </span>
              </div>

              <hr className="border-comptoir-encre/10" />

              <ul className="space-y-3 text-sm font-semibold">
                <li className="flex items-start gap-2">
                  <span className="text-tech-glow font-bold">✔</span>
                  <span>Authentification & gestion des rôles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-glow font-bold">✔</span>
                  <span>Formulaires complexes & logique métier</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-glow font-bold">✔</span>
                  <span>Intégrations tiers (Paiement, Emails)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-glow font-bold">✔</span>
                  <span>Application évolutive vers V2 sans tout refaire</span>
                </li>
              </ul>
            </div>

            <Link 
              href="/contact" 
              className="block text-center bg-tech-spark text-white text-base font-extrabold py-3.5 px-6 rounded-xl border-[2px] border-comptoir-encre shadow-btn hover:translate-x-0.5 hover:translate-y-0.5 transition-all mt-auto"
            >
              Cadrer mon besoin
            </Link>
          </div>

          {/* DÉTAILS DE L'APPROCHE */}
          <div className="md:col-span-2 bg-white rounded-2xl border-[3px] border-comptoir-encre p-8 shadow-brut flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Pourquoi développer une V1 sur-mesure ?</h3>
              <div className="space-y-4 text-base font-medium leading-relaxed text-comptoir-encre/90">
                <p>
                  Lorsque les outils standards du marché ou les feuilles de calcul atteignent leurs limites, la tentation est grande de commander une « usine à gaz ». Mon approche privilégie le pragmatisme : nous identifions la fonctionnalité <strong>unique et indispensable</strong> qui résout votre blocage réel.
                </p>
                <p>
                  Je conçois des back-offices clairs et des applications SaaS robustes utilisant des technologies modernes qui garantissent rapidité d&apos;exécution et maîtrise de la dette technique.
                </p>
              </div>
            </div>

            <div className="bg-comptoir-fond p-4 rounded-xl border-2 border-comptoir-encre space-y-2 mt-auto">
              <span className="font-mono-bistro text-xs font-bold text-comptoir-accent uppercase">// Garanties du projet</span>
              <p className="text-sm font-bold">
                Aucun composant inutile, code propre et documenté, hébergement sécurisé sur infrastructure cloud.
              </p>
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}