import {
  ConciergeBell,
  Handshake,
  MousePointerClick,
  QrCode,
} from "lucide-react";

export default function Features() {
  return (
    <>
      <ul className="flex py-8 bg-gray-100 justify-evenly gap-y-5 flex-wrap md:flex-nowrap md:px-16 md:gap-16 ">
        <li className="text-center text-sm font-medium p-2 w-2/5 flex flex-col justify-evenly md:text-xl">
          <QrCode
            // size={150}
            strokeWidth={0.8}
            className="mx-auto border rounded-xl shadow-2xl mb-5 w-24 h-24 md:w-36 md:h-36"
          />
          Menu digital
        </li>
        <li className="text-center text-sm font-medium p-2 w-2/5 flex flex-col justify-evenly md:text-xl">
          {" "}
          <ConciergeBell
            // size={150}
            strokeWidth={0.8}
            className="mx-auto border rounded-xl shadow-2xl mb-5 w-24 h-24 md:w-36 md:h-36"
          />
          Réception des commandes
        </li>
        <li className="text-center text-sm font-medium p-2 w-2/5 flex flex-col justify-evenly md:text-xl">
          {" "}
          <MousePointerClick
            // size={150}
            strokeWidth={0.8}
            className="mx-auto border rounded-xl shadow-2xl mb-5 w-24 h-24 md:w-36 md:h-36"
          />
          Mis a jour du menu en un click
        </li>
        <li className="text-center text-sm font-medium p-2 w-2/5 flex flex-col justify-evenly md:text-xl">
          {" "}
          <Handshake
            // size={150}
            strokeWidth={0.8}
            className="mx-auto border rounded-xl shadow-2xl mb-5 w-24 h-24 md:w-36 md:h-36"
          />
          Favoriser la vente direct
        </li>
      </ul>
      <div className="h-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-transparent opacity-100"></div>
      </div>
    </>
  );
}
