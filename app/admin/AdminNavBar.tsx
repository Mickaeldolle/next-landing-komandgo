"use client";
import { ChartCandlestick, House, Mail, User, UserPlus } from "lucide-react";
import Link from "next/link";
// import { usePathname } from "next/navigation";

export default function AdminNavBar() {
  // const pathname = usePathname(); // Récupère le chemin actuel de l'URL
  // console.log(pathname);
  const links = [
    {
      href: "/admin",
      label: "Dashboard",
      icon: <ChartCandlestick className="md:me-4" />,
    },
    {
      href: "/admin/prospect",
      label: "Prospect",
      icon: <UserPlus className="md:me-4" />,
    },
    {
      href: "/",
      label: "Home",
      icon: <House className="md:me-4" />,
    },
    {
      href: "/admin/user",
      label: "User",
      icon: <User className="md:me-4" />,
    },
    {
      href: "/admin/contact",
      label: "Contact",
      icon: <Mail className="md:me-4" />,
    },
  ];

  return (
    <div className="fixed w-full bg-white shadow-xl rounded-b-xl">
      <ul className="flex p-5 justify-around md:justify-evenly">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="flex items-center">
              {link.icon}
              <div className="hidden md:block">{link.label}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
