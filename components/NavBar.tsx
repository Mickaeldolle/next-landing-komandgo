"use client";
import Image from "next/image";
import logowhite from "../assets/logowhite.png";
import { ChartCandlestick, ChevronRight, LogOut, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { buttonVariants } from "@/components/ui/button";
import { Session } from "next-auth";

function MenuBar({
  session,
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  session: Session | null | undefined;
}) {
  return (
    <div className="menubar h-screen fixed top-0 right-0 bg-black/80 w-4/6 text-white shadow-2xl backdrop-blur-lg z-50 md:w-1/4">
      <button
        onClick={() => setIsOpen((value) => !value)}
        className="uppercase flex p-2 ml-auto"
      >
        ✖ fermer
      </button>
      <div className="items uppercase font-medium text-xl">
        <ul className="flex flex-col gap-y-5 p-4 text-gray-400 justify-between">
          <li>
            <Link href={"/"} className="flex justify-between">
              Accueil{" "}
              <span>
                <ChevronRight size={32} />
              </span>
            </Link>
          </li>
          {/* <li>
            <Link href={"#"} className="flex justify-between">
              nav 1{" "}
              <span>
                <ChevronRight size={32} />
              </span>
            </Link>
          </li>{" "}
          <li>
            <Link href={"#"} className="flex justify-between">
              nav 1{" "}
              <span>
                <ChevronRight size={32} />
              </span>
            </Link>
          </li>{" "}
          <li>
            <Link href={"#"} className="flex justify-between">
              nav 1{" "}
              <span>
                <ChevronRight size={32} />
              </span>
            </Link>
          </li> */}
          <li className="border-t pt-2">
            <Button
              type="button"
              onClick={() => signOut({ callbackUrl: "/", redirect: true })}
              className="flex justify-between w-full"
            >
              Deconnexion{" "}
              <span>
                <LogOut size={24} />
              </span>
            </Button>
          </li>
          {session?.user?.email === "dolle.mickael@gmail.com" && (
            <li className="">
              <Link
                href={"/admin"}
                className={`${buttonVariants({
                  variant: "default",
                })} flex justify-between w-full`}
              >
                Dashboard{" "}
                <span>
                  <ChartCandlestick size={24} />
                </span>{" "}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default function NavBar({
  session,
}: {
  session: Session | null | undefined;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="navbar w-full px-4 relative h-20">
        <div className="z-10 bg-[#161b2f]/60 top-0 md:left-1/2 md:transform md:-translate-x-1/2 w-11/12 flex items-center justify-between px-5 rounded-full fixed mt-3 shadow-2xl backdrop-blur-sm md:w-1/5">
          <Image width={50} src={logowhite} alt="logo de komandgo" />
          {session?.user?.name && (
            <div className="text-gray-500">{session?.user.name}</div>
          )}
          <Button variant={"ghost"} onClick={() => setIsOpen(!isOpen)}>
            <Menu size={40} color="white" />
          </Button>
        </div>
      </div>
      {isOpen && <MenuBar setIsOpen={setIsOpen} session={session} />}
    </>
  );
}
