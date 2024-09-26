"use client";
import { ChartCandlestick, House, Mail, User, UserPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminNavBar() {
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
    <div className="fixed w-full bg-white rounded-b-xl">
      <ul className="flex p-5 justify-around md:justify-evenly">
        {links.map((link, index) => (
          <LinkButton key={index} link={link} />
        ))}
      </ul>
    </div>
  );
}

type LinkButtonProps = {
  link: {
    href: string;
    label: string;
    icon: JSX.Element;
  };
};

function LinkButton({ link }: LinkButtonProps) {
  const [currentLinkActive, setCurrentLinkActive] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    if (pathName === link.href) {
      setCurrentLinkActive(true);
    } else {
      setCurrentLinkActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  return (
    <li
      className={`hover:bg-gray-200 p-3 py-2 lg:px-8 rounded-lg ${
        currentLinkActive ? "shadow-[0px_0px_20px_gray]" : ""
      }`}
    >
      {/* <Link href={link.href} className={buttonVariants({ variant: "ghost" })}>
        Click here
      </Link> */}
      {/* <Button asChild variant={"default"}> */}
      <Link href={link.href} className="flex">
        {link.icon}
        <div className="hidden md:block">{link.label}</div>
      </Link>
      {/* </Button> */}
    </li>
  );
}
