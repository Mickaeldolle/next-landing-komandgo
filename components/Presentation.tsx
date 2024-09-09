import Image from "next/image";
import polygon from "../assets/polygon.svg";
import officeImg from "../assets/office.png";
export default function Presentation() {
  return (
    <div className="px-4">
      <h2 className="text-center text-2xl mb-5 font-medium">
        <div className="text-5xl my-5 font-bold">Kom&GO</div>
        <span className="uppercase">c&apos;est quoi ?</span>
      </h2>
      <p className="mb-2 text-center text-lg">
        Une interface intuitive vous permettant de mettre en ligne facilement et
        gratuitement vos produits.
      </p>
      <div className="">
        <Image
          className="shadow-2xl border rounded-2xl my-8"
          src={officeImg}
          alt="interface de l'application back-office"
        />
      </div>
      <p className="mb-2 text-center text-lg">
        Une interface pour vos clients, accessible via un lien ou un QR code à
        partager sur vos réseaux sociaux.
      </p>

      <p className="uppercase text-center text-2xl">Pourquoi ?</p>
      <p className="mb-2 text-justify">
        Vous donner un outil qui permette un lien privilégié avec vos clients,
        24h/24 7j/7
      </p>
      <p className="mb-2 text-justify">
        Vous aider à être visible et facilement accessible.
      </p>
      <Image src={polygon} alt="" className="top-0" />
    </div>
  );
}
