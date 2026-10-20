'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      alert("Impossible d'envoyer le formulaire pour le moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-comptoir-fond text-comptoir-encre py-12 px-4 selection:bg-tech-spark selection:text-white">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* EN-TÊTE */}
        <section className="space-y-4 border-b-4 border-comptoir-encre pb-6">
          <div className="inline-block bg-tech-spark text-white font-mono-bistro text-xs font-bold px-3 py-1 rounded border border-comptoir-encre">
            QUALIFICATION & CONTACT
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Démarrons votre projet.
          </h1>
          <p className="text-base font-bold text-comptoir-bois">
            Vous avez un projet de site internet ou vous souhaitez déléguer la maintenance de votre outil actuel ? Remplissez ce formulaire et je reviendrai vers vous sous 24h.
          </p>
        </section>

        {/* FORMULAIRE */}
        <section className="bg-white rounded-2xl border-[3px] border-comptoir-encre p-8 shadow-brut">
          {submitted ? (
            <div className="p-6 bg-tech-glow/10 border-2 border-tech-glow rounded-xl text-center space-y-3">
              <h3 className="text-2xl font-bold text-comptoir-encre">Merci ! Message bien reçu.</h3>
              <p className="text-sm font-semibold text-comptoir-encre/80">
                Un email vient de m&apos;être envoyé. Je prends connaissance de votre demande et je vous réponds sous 24h.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* IDENTITÉ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-mono-bistro font-bold uppercase">Nom & Prénom *</label>
                  <input 
                    type="text" 
                    name="nom_prenom"
                    required 
                    placeholder="Jean Dupont"
                    className="w-full p-3 bg-comptoir-fond border-2 border-comptoir-encre rounded-lg text-sm font-semibold focus:outline-none focus:border-comptoir-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-mono-bistro font-bold uppercase">Société / Association</label>
                  <input 
                    type="text" 
                    name="structure"
                    placeholder="Nom de votre structure"
                    className="w-full p-3 bg-comptoir-fond border-2 border-comptoir-encre rounded-lg text-sm font-semibold focus:outline-none focus:border-comptoir-accent"
                  />
                </div>
              </div>

              {/* EMAIL & SECTEUR */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-mono-bistro font-bold uppercase">Email de contact *</label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    placeholder="jean@exemple.fr"
                    className="w-full p-3 bg-comptoir-fond border-2 border-comptoir-encre rounded-lg text-sm font-semibold focus:outline-none focus:border-comptoir-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-mono-bistro font-bold uppercase">Domaine d'activité *</label>
                  <input 
                    type="text" 
                    name="activite"
                    required
                    placeholder="Ex: Artisanat, BTP, Association..."
                    className="w-full p-3 bg-comptoir-fond border-2 border-comptoir-encre rounded-lg text-sm font-semibold focus:outline-none focus:border-comptoir-accent"
                  />
                </div>
              </div>

              {/* ÉTAT DU PROJET & DÉLAI */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-mono-bistro font-bold uppercase">État de vos contenus *</label>
                  <select name="etat_contenus" className="w-full p-3 bg-comptoir-fond border-2 border-comptoir-encre rounded-lg text-sm font-semibold focus:outline-none focus:border-comptoir-accent">
                    <option value="Prêts">Prêts (Textes et photos)</option>
                    <option value="En cours">En cours de rédaction</option>
                    <option value="Non préparés">Non préparés</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-mono-bistro font-bold uppercase">Délai idéal pour la mise en ligne</label>
                  <select name="delai" className="w-full p-3 bg-comptoir-fond border-2 border-comptoir-encre rounded-lg text-sm font-semibold focus:outline-none focus:border-comptoir-accent">
                    <option value="Moins de 2 semaines">Moins de 2 semaines</option>
                    <option value="Dans le mois">Dans le mois</option>
                    <option value="Pas d'urgence">Pas d'urgence</option>
                  </select>
                </div>
              </div>

              {/* BESOIN SPÉCIFIQUE */}
              <div className="space-y-2">
                <label className="block text-xs font-mono-bistro font-bold uppercase">Votre besoin principal :</label>
                <div className="space-y-2 text-sm font-semibold">
                  <label className="flex items-center gap-3 p-3 bg-comptoir-fond border-2 border-comptoir-encre rounded-lg cursor-pointer">
                    <input type="checkbox" name="besoin_pack_essentiel" className="accent-comptoir-accent w-4 h-4" />
                    <span>Création d'un site complet (Pack Essentiel)</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 bg-comptoir-fond border-2 border-comptoir-encre rounded-lg cursor-pointer">
                    <input type="checkbox" name="besoin_outil_metier" className="accent-comptoir-accent w-4 h-4" />
                    <span>Outil métier ou application V1 / MVP</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 bg-comptoir-fond border-2 border-comptoir-encre rounded-lg cursor-pointer">
                    <input type="checkbox" name="besoin_maintenance" className="accent-comptoir-accent w-4 h-4" />
                    <span>Maintenance et sécurité d'un site existant</span>
                  </label>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="space-y-2">
                <label className="block text-xs font-mono-bistro font-bold uppercase">Parlez-moi de votre projet *</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="Décrivez brièvement vos attentes ou votre problème actuel..."
                  className="w-full p-3 bg-comptoir-fond border-2 border-comptoir-encre rounded-lg text-sm font-semibold focus:outline-none focus:border-comptoir-accent"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-comptoir-accent text-white font-extrabold text-base py-4 px-8 rounded-xl border-[3px] border-comptoir-encre shadow-brut hover:translate-x-0.5 hover:translate-y-0.5 transition-all disabled:opacity-50"
              >
                {loading ? "Envoi en cours..." : "Envoyer ma demande de projet →"}
              </button>

            </form>
          )}
        </section>

      </div>
    </main>
  );
}