import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header.tsx";

export const metadata: Metadata = {
  title: "Le Comptoir Innovant | Développement Produit & Tech Pragmatique",
  description: "Applications sur-mesure, MVP SaaS et sites web simples. Du code propre, livré rapidement, sans sur-architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased bg-brand-light text-slate-800">
        <Header />
        {children}
      </body>
    </html>
  );
}