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
    <div className="flex flex-col min-h-screen max-w-screen overflow-hidden relative">
      <div className="h-20 w-full mb-2">
        <AdminNavBar />
      </div>
      <main
        className={`${roboto.className} flex-grow bg-gray-100 border rounded-t-[20px] md:rounded-t-[40px] shadow-inner p-5`}
      >
        {children}
      </main>
    </div>
  );
}
