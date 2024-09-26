import type { Metadata } from "next";
// import localFont from "next/font/local";

import { Roboto } from "next/font/google";
import AdminNavBar from "./AdminNavBar";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Komandgo - Page d'administration",
  description: `Page d'administration de komandgo`,
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen w-screen relative">
      <div className="w-full mb-24 bg-white z-50">
        <AdminNavBar />
      </div>
      <main
        className={`${roboto.className} flex-grow border-t rounded-t-[20px] md:rounded-t-[40px] shadow-inner h-full`}
      >
        {children}
      </main>
    </div>
  );
}
