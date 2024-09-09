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
        <li className="text-center border rounded-xl shadow-2xl p-2 w-2/5 flex flex-col justify-evenly">
          <QrCode size={100} strokeWidth={0.8} className="mx-auto" />
          Menu digital
        </li>
        <li className="text-center border rounded-xl shadow-2xl p-2 w-2/5 flex flex-col justify-evenly">
          {" "}
          <ConciergeBell size={100} strokeWidth={0.8} className="mx-auto" />
          Réception des commandes
        </li>
        <li className="text-center border rounded-xl shadow-2xl p-2 w-2/5 flex flex-col justify-evenly">
          {" "}
          <MousePointerClick size={100} strokeWidth={0.8} className="mx-auto" />
          Mis a jour du menu en un click
        </li>
        <li className="text-center border rounded-xl shadow-2xl p-2 w-2/5 flex flex-col justify-evenly">
          {" "}
          <Handshake size={100} strokeWidth={0.8} className="mx-auto" />
          Favoriser la vente direct
        </li>
      </ul>
      <div className="h-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-transparent opacity-100"></div>
      </div>
    </>
  );
}
