import Image from "next/image";
import phoneImage from "../assets/imagehero.png";
import CallToAction from "./CallToAction";
import AuthProvider from "./AuthProvider";
// import Link from "next/link";

export default function Hero() {
  return (
    <div className="md:flex md:m-auto md:justify-evenly px-3 items-center">
      <div className="max-w-screen-md md:flex md:flex-col">
        <div className="text-container">
          <h1 className="text-4xl uppercase mb-5 tracking-widest leading-9 text-center md:text-end md:text-7xl text-gray-200">
            <div className="bg-gradient-to-r from-teal-200 to-blue-700 bg-clip-text text-transparent font-extrabold">
              Automatisez
            </div>{" "}
            la prise de commande
          </h1>
          <p className="text-gray-100 md:text-gray-400 mb-8 text-xl text-center md:text-end md:text-2xl">
            Gagnez du temps, boostez votre CA et créez une expérience forte pour
            vos clients 🚀
          </p>
        </div>
        {/* //! à supprimé, juste pour redirigé l'utilisateur pour le remercier après la connexion ! */}
        {/* <div className="border text-white">
          <Link href="/thank">Ici</Link>
        </div> */}
        <div className="text-center md:text-end">
          <AuthProvider>
            <CallToAction />
          </AuthProvider>
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
