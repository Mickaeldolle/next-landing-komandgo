import Image from "next/image";
import phoneImage from "../assets/imagehero.png";
import { Cta } from "./ui/cta";

export default function Hero() {
  return (
    <div className="md:flex md:m-auto md:justify-evenly px-3">
      <div className="max-w-screen-md md:flex md:flex-col md:justify-center">
        <div className="text-container">
          <h1 className="text-4xl uppercase mb-5 tracking-widest leading-9 text-center md:text-end md:text-7xl text-gray-300">
            <div className="bg-gradient-to-r from-teal-500 to-blue-900 bg-clip-text text-transparent font-extrabold">
              Automatisez
            </div>{" "}
            la prise de commande
          </h1>
          <p className="text-gray-400 mb-8 text-xl text-center md:text-end md:text-2xl">
            Gagnez du temps, boostez votre CA et créez une expérience forte pour
            vos clients 🚀
          </p>
        </div>
        <div className="text-center md:text-end">
          <Cta
            variant={"cta"}
            size={"lg"}
            className="uppercase font-bold mb-10 md:text-xl md:p-7"
          >
            Tester gratuitement
          </Cta>
        </div>
      </div>
      <div className="max-h-80 overflow-hidden relative md:max-h-none md:static md:overflow-visible">
        <Image
          width={300}
          priority
          className="mx-auto md:mx-10"
          src={phoneImage}
          alt="exemple de l'application"
        />
        <div className="md:hidden absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
      </div>
    </div>
  );
}
