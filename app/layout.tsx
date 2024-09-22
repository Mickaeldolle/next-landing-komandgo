import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Komandgo - Boostez votre activité !",
  description: `L'application komandgo est une web app qui va vous rendre visible et accessible pour vos clients. Vous allez pouvoir mettre vos produits en ligne gratuiement, et automatiser la prise de commande. Fini les commandes par téléphone, attendez simplement que vos clients commandes et concentrez vous sur votre coeur de métier !`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
