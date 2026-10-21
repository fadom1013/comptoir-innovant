'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function OffrePrincipalePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "En combien de temps mon site sera-t-il en ligne ?",
      r: "Selon votre réactivité pour la fourniture des contenus, un site peut être mis en ligne en 1 à 2 semaines (contre 3 à 5 mois en agence classique)."
    },
    {
      q: "Mon site sera-t-il facile à gérer ?",
      r: "Oui ! J'installe des outils simples et intuitifs. Une visio de 30 minutes ainsi qu'une procédure sont incluses pour vous rendre 100% autonome dans l'alimentation du site (modification des articles/pages/photos ...)."
    },
    {
      q: "Dois-je payer un abonnement ?",
      r: "Non, le site vous appartient à 100%. Seuls votre nom de domaine et l'hébergement (et éventuellement les formules que vous prenez) nécessitent un renouvellement annuel auprès de votre prestataire."
    },
    {
      q: "Proposez-vous un service de maintenance ?",
      r: "Oui, nous proposons plusieurs formules sans engagement pour assurer la sécurité, les sauvegardes et la mise à jour régulière de votre outil (voir les différentes formules au-dessus)."
    }
  ];

  return (
    <main className="min-h-screen bg-comptoir-fond text-comptoir-encre py-12 px-4 selection:bg-tech-spark selection:text-white">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* EN-TÊTE PAGE */}
        <section className="space-y-4 border-b-4 border-comptoir-encre pb-8">
          <div className="inline-block bg-comptoir-accent text-white font-mono-bistro text-xs font-bold px-3 py-1 rounded border border-comptoir-encre">
            SITES VITRINES & CONTENU
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Tout ce dont vous avez besoin pour réussir en ligne sous 2 semaines.
          </h1>
          <p className="text-xl font-bold text-comptoir-bois max-w-3xl">
            Un site vitrine ou un blog clair, léger, sans usine à gaz, pensé pour offrir une autonomie totale à votre activité.
          </p>
        </section>

        {/* PACK PRINCIPAL */}
        <section className="bg-white rounded-2xl border-[3px] border-comptoir-encre p-8 shadow-brut space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b-2 border-comptoir-encre/10 pb-6">
            <div>
              <span className="font-mono-bistro text-xs font-bold uppercase text-comptoir-accent">Formule Clé en main</span>
              <h2 className="text-3xl font-black">Le pack essentiel</h2>
              <p className="text-sm font-medium text-comptoir-encre/70 mt-1">Livraison sous 1 à 2 semaines</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-comptoir-accent">À partir de 690€</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3 font-semibold text-sm">
              <li className="flex items-start gap-2">
                <span className="text-tech-glow font-bold">✔</span>
                <span><strong>Design personnalisé :</strong> Votre logo, vos couleurs et votre univers unique.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-glow font-bold">✔</span>
                <span><strong>Structure efficace :</strong> Présentation claire de votre activité pour convertir vos visiteurs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-glow font-bold">✔</span>
                <span><strong>Design mobile :</strong> Navigation fluide et optimisée sur tous les smartphones.</span>
              </li>
            </ul>
            <ul className="space-y-3 font-semibold text-sm">
              <li className="flex items-start gap-2">
                <span className="text-tech-glow font-bold">✔</span>
                <span><strong>Référencement de base (SEO) de base :</strong> Code propre et structuré pour être correctement référencé par Google.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-glow font-bold">✔</span>
                <span><strong>Formation 30 min :</strong> Prise en main ensemble pour vous montrer comment modifier vos textes et images en autonomie. Fourniture d'un mémo PDF qui vous appartient.</span>
              </li>
            </ul>
          </div>

          {/* TABLEAU DES UPSELLS */}
          <div className="pt-6 border-t-2 border-comptoir-encre/10 space-y-4">
            <h3 className="font-mono-bistro text-sm font-bold uppercase text-comptoir-encre">// Catalogue d'options complémentaires</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-bold font-mono-bistro">
              <div className="p-3 bg-comptoir-fond rounded-lg border-2 border-comptoir-encre flex justify-between items-center">
                <span>Achat du domaine & setup emails</span>
                <span className="text-comptoir-accent">+90€</span>
              </div>
              <div className="p-3 bg-comptoir-fond rounded-lg border-2 border-comptoir-encre flex justify-between items-center">
                <span>Rédaction de vos contenus (articles, pages ...) si vos contenus ne sont pas prêts au début du projet.</span>
                <span className="text-comptoir-accent">+200€</span>
              </div>
              <div className="p-3 bg-comptoir-fond rounded-lg border-2 border-comptoir-encre flex justify-between items-center">
                <span>Développement d'une page supplémentaire.</span>
                <span className="text-comptoir-accent">+150€</span>
              </div>
              <div className="p-3 bg-comptoir-fond rounded-lg border-2 border-comptoir-encre flex justify-between items-center">
                <span>Recherche d'images (Sélection de 10 visuels HD libres de droits).</span>
                <span className="text-comptoir-accent">+150€</span>
              </div>
              <div className="p-3 bg-comptoir-fond rounded-lg border-2 border-comptoir-encre flex justify-between items-center">
                <span>Maintenance annuelle (Mises à jour technique et de sécurité).</span>
                <span className="text-comptoir-accent">+200€</span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Link 
              href="/contact" 
              className="inline-block bg-comptoir-accent text-white font-extrabold text-base py-4 px-8 rounded-xl border-[3px] border-comptoir-encre shadow-btn hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              Commander mon site simple →
            </Link>
          </div>
        </section>

        {/* OFFRES DE MAINTENANCE */}
        <section className="space-y-6">
          <div className="border-b-2 border-comptoir-encre pb-2">
            <h2 className="text-2xl font-black uppercase font-mono-bistro text-comptoir-encre">
              // Formules de Maintenance & Sécurité
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* OFFRE 60€ */}
            <div className="bg-white rounded-2xl border-[3px] border-comptoir-encre p-6 shadow-brut flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="font-mono-bistro text-xs font-bold uppercase text-comptoir-encre/60">Sans Engagement</span>
                <h3 className="text-xl font-bold">Maintenance</h3>
                <div className="text-2xl font-black text-comptoir-accent">60 € <span className="text-xs text-comptoir-encre font-normal">/ mois</span></div>
                <h3 className="text-2xl font-bold">OU</h3>
                <div className="text-2xl font-black text-comptoir-accent">600 € <span className="text-xs text-comptoir-encre font-normal">/ an (2 mois offerts)</span></div>
                <p className="text-xs text-comptoir-encre/80 font-medium">Un site disponible, mis à jour et performant sans effort.</p>
                <ul className="text-xs space-y-2 font-semibold pt-2 border-t border-comptoir-encre/10">
                  <li>✔ Mises à jour</li>
                  <li>✔ Intervention réactive sous 24h</li>
                  <li>✔ Gestion technique du site</li>
                </ul>
              </div>
            </div>

            {/* OFFRE 200€ */}
            <div className="bg-white rounded-2xl border-[3px] border-comptoir-encre p-6 shadow-brut flex flex-col justify-between space-y-4 relative overflow-hidden">
              <div className="space-y-3">
                <span className="font-mono-bistro text-xs font-bold uppercase bg-tech-spark text-white px-2 py-0.5 rounded border border-comptoir-encre inline-block">Populaire</span>
                <h3 className="text-xl font-bold">Tranquillité</h3>
                <div className="text-2xl font-black text-comptoir-accent">120 € <span className="text-xs text-comptoir-encre font-normal">/ mois</span></div>
                <p className="text-xs text-comptoir-encre/80 font-medium">Faire évoluer votre site durant les premiers mois.</p>
                <ul className="text-xs space-y-2 font-semibold pt-2 border-t border-comptoir-encre/10">
                  <li>✔ Tout le forfait Maintenance</li>
                  <li>✔ <strong>Crédit temps de 3h *</strong> (valable 3 mois)</li>
                  <li>✔ Modifications design & contenu </li>
                  <li>✔ Support prioritaire</li>
                </ul>
              </div>
            </div>

            {/* OFFRE 600€ */}
            <div className="bg-white rounded-2xl border-[3px] border-comptoir-encre p-6 shadow-brut flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="font-mono-bistro text-xs font-bold uppercase text-comptoir-encre/60">Support Annuel</span>
                <h3 className="text-xl font-bold">Sérénité</h3>
                <div className="text-2xl font-black text-comptoir-accent">1200 € <span className="text-xs text-comptoir-encre font-normal">/ an (soit 100 € / mois)</span></div>
                <p className="text-xs text-comptoir-encre/80 font-medium">Votre partenaire technique à vos côtés toute l'année.</p>
                <ul className="text-xs space-y-2 font-semibold pt-2 border-t border-comptoir-encre/10">
                  <li>✔ Tout le forfait Maintenance</li>
                  <li>✔ <strong>Crédit temps de 15h *</strong> (valable 12 mois)</li>
                  <li>✔ Créations de nouvelles sections & pages de votre site</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-comptoir-accent/10 border-2 border-comptoir-accent p-4 rounded-xl text-xs font-semibold text-comptoir-encre">
            💡 <strong> * Pourquoi le crédit temps ?</strong> Il évite de refaire un devis pour chaque petite modification. C'est une réserve d'heures mobilisable immédiatement pour vos ajustements avec une priorité sur le planning.
          </div>
        </section>

        {/* FAQ CARROUSEL / ACCORDÉON */}
        <section className="space-y-6 pt-6">
          <div className="border-b-2 border-comptoir-encre pb-2">
            <h2 className="text-2xl font-black uppercase font-mono-bistro text-comptoir-encre">
              // Questions Fréquentes (FAQ)
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border-[3px] border-comptoir-encre rounded-xl shadow-btn overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-4 font-bold text-base flex justify-between items-center"
                >
                  <span>{faq.q}</span>
                  <span className="font-mono-bistro text-xl">{openFaq === idx ? '-' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className="p-4 pt-0 text-sm font-medium border-t border-comptoir-encre/10 text-comptoir-encre/80 bg-comptoir-fond/30">
                    {faq.r}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}