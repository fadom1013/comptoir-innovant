import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  metadataBase: new URL('https://le-comptoir-innovant.fr'),
  title: "Le Comptoir Innovant | Fabrique Digitale, MVP SaaS & Outils Métiers",
  description: "Applications sur-mesure, MVP SaaS et sites web simples. Du code propre, livré rapidement, sans sur-architecture.",
  keywords: ['développeur MVP', 'SaaS', 'outil métier', 'Next.js', 'WordPress', 'création site web', 'fabrique digitale'],
  authors: [{ name: 'Le Comptoir Innovant' }],
  openGraph: {
    title: 'Le Comptoir Innovant | Fabrique Digitale',
    description: 'Transformez vos idées en produits digitaux concrets : MVP SaaS, outils métiers & sites WordPress.',
    url: 'https://le-comptoir-innovant.fr',
    siteName: 'Le Comptoir Innovant',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/logo-comptoir.png',
        width: 1200,
        height: 630,
        alt: 'Le Comptoir Innovant Logo',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Le Comptoir Innovant',
    url: 'https://le-comptoir-innovant.fr',
    logo: 'https://le-comptoir-innovant.fr/logo-comptoir.png',
    description: 'Développement de MVP SaaS, d’outils métiers sur-mesure et de sites WordPress.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
    },
    priceRange: '€€',
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-brand-light text-slate-800">
        <Header />
        {children}
      </body>
    </html>
  );
}