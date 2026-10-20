import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const nom_prenom = formData.get('nom_prenom') as string;
    const structure = formData.get('structure') as string;
    const email = formData.get('email') as string;
    const activite = formData.get('activite') as string;
    const etat_contenus = formData.get('etat_contenus') as string;
    const delai = formData.get('delai') as string;
    const message = formData.get('message') as string;

    const besoin_pack_essentiel = formData.get('besoin_pack_essentiel') === 'on' ? 'Oui' : 'Non';
    const besoin_outil_metier = formData.get('besoin_outil_metier') === 'on' ? 'Oui' : 'Non';
    const besoin_maintenance = formData.get('besoin_maintenance') === 'on' ? 'Oui' : 'Non';

    await resend.emails.send({
      from: 'Le Comptoir Innovant <contact@le-comptoir-innovant.fr>',// Adresse d'envoi par défaut de Resend
      to: ['contact@le-comptoir-innovant.fr'],
      replyTo: email, // Répondre directement au prospect en cliquant sur "Répondre"
      subject: `🎯 Nouvelle demande de projet - ${nom_prenom}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1E1A17; background-color: #F4EFE6;">
          <h2 style="color: #D44B28; border-bottom: 2px solid #1E1A17; pb-2;">Nouveau prospect qualifié</h2>
          
          <p><strong>Nom & Prénom :</strong> ${nom_prenom}</p>
          <p><strong>Structure :</strong> ${structure || 'Non précisé'}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Secteur / Activité :</strong> ${activite}</p>

          <hr style="border: 1px solid #1E1A17; margin: 20px 0;" />

          <h3>Besoins identifiés :</h3>
          <ul>
            <li><strong>Pack Essentiel (Site complet) :</strong> ${besoin_pack_essentiel}</li>
            <li><strong>Outil métier / V1 MVP :</strong> ${besoin_outil_metier}</li>
            <li><strong>Maintenance / Sécurité :</strong> ${besoin_maintenance}</li>
          </ul>

          <p><strong>État des contenus :</strong> ${etat_contenus}</p>
          <p><strong>Délai souhaité :</strong> ${delai}</p>

          <hr style="border: 1px solid #1E1A17; margin: 20px 0;" />

          <h3>Message du prospect :</h3>
          <p style="white-space: pre-wrap; background-color: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #1E1A17;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de l’envoi de l’email :', error);
    return NextResponse.json({ error: 'Erreur lors de l’envoi de l’email' }, { status: 500 });
  }
}