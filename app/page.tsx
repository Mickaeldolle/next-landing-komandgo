import Image from "next/image";

import { Button } from "@/components/ui/button";
import logo from "../assets/logowhite.png";
import phoneImage from "../assets/imagehero.png";

export default function Home() {
  return (
    <div className="hero text-gray-100 h-screen p-5 overflow-hidden">
      <Image
        src={logo}
        alt="logo de komandgo"
        className="mx-auto mb-8 drop-shadow-default"
        width={100}
      />
      <h1 className="text-4xl uppercase mb-5 tracking-widest leading-9 text-center font-medium">
        <span className="bg-gradient-to-r from-teal-500 to-blue-900 bg-clip-text text-transparent font-bold">
          Automatisez
        </span>{" "}
        la prise de commande
      </h1>
      <p className="text-gray-400 mb-8 text-xl text-justify ">
        Gagnez du temps, boostez votre CA et créez une expérience forte pour vos
        clients 🚀
      </p>
      <div className="text-center">
        <Button
          variant={"cta"}
          size={"lg"}
          className="uppercase font-bold mb-10"
        >
          Click, c&apos;est gratuit 💰
        </Button>
      </div>
      <Image
        className="mx-auto"
        src={phoneImage}
        alt="exemple de l'application"
      />
    </div>
  );
}
