import Image from "next/image";
import polygon from "../assets/polygon.svg";
import customerImg1 from "../assets/1725952254228.jpg";
import customerImg2 from "../assets/1725952254241.jpg";
import officeImg from "../assets/office.png";
import { ShoppingBag, Truck, UtensilsCrossed } from "lucide-react";
import { Separator } from "../components/ui/separator";
export default function Presentation() {
  return (
    <div className="px-4 md:px-32">
      <Image src={polygon} alt="" className="mx-auto md:h-24" />
      <h2 className="text-center text-2xl mb-5 font-medium md:mb-16">
        <div className="text-5xl my-5 font-bold">Kom&GO</div>
        <span className="uppercase">c&apos;est quoi ?</span>
      </h2>
      <div className="md:flex md:justify-evenly">
        <div className="md:w-2/6 text-gray-600">
          <p className="mb-4 text-justify text-lg  md:text-xl">
            Une interface intuitive vous permettant de mettre en ligne
            facilement et gratuitement vos produits.
          </p>
          <p className="mb-8 text-justify text-lg md:text-xl">
            Un espace pour recevoir vos commandes clients en temps réel.
          </p>
          <p className="mb-4 text-center text-lg md:text-xl text-gray-400">
            Définissez vos modes de commandes
          </p>
          <div className="mb-8 text-justify text-lg md:text-xl flex justify-between">
            <p className="border p-3 rounded-xl w-32 text-center">
              Emporter
              <ShoppingBag className="mx-auto my-2 w-8 h-8 md:w-12 md:h-12" />
            </p>
            <p className="border p-3 rounded-xl w-32 text-center">
              Livraison
              <Truck className="mx-auto my-2 w-8 h-8 md:w-12 md:h-12" />
            </p>
            <p className="border p-3 rounded-xl w-32 text-center">
              A table
              <UtensilsCrossed className="mx-auto my-2 w-8 h-8 md:w-12 md:h-12" />
            </p>
          </div>
        </div>
        <figure className=" md:w-3/6">
          <Image
            className="shadow-2xl border rounded-2xl mb-1 md:mb-5"
            src={officeImg}
            alt="interface de l'application back-office"
          />
          <figcaption className="text-gray-400 text-sm text-center md:text-base">
            Application back-office pour les professionnels
          </figcaption>
        </figure>
      </div>
      <Separator className="my-12" />
      <div className="md:flex md:justify-evenly md:items-center">
        <figure className="w-40 mb-8 mx-auto md:mx-0 md:w-48">
          <Image
            className="shadow-2xl border rounded-lg mb-1 md:rounded-2xl"
            src={customerImg2}
            alt="interface de l'application back-office"
          />
          <figcaption className="text-gray-400 text-sm text-center">
            Page d&apos;accueil d&apos;un restaurant.
          </figcaption>
        </figure>
        <div className="md:w-2/6">
          <p className="mb-8 text-justify text-lg md:text-xl">
            Une web app pour vos clients, optimisée sur mobile, accessible via
            un lien ou un QR code à partager sur vos réseaux sociaux.
          </p>
          <p className="hidden md:block text-lg text-center md:text-xl">
            Présentez votre etablissement, donnez envie, fidélisez !
          </p>
        </div>
        <figure className="w-40 mb-8 mx-auto md:mx-0 md:w-48">
          <Image
            className="shadow-2xl border rounded-lg mb-1 md:rounded-2xl"
            src={customerImg1}
            alt="interface de l'application back-office"
          />
          <figcaption className="text-gray-400 text-sm text-center">
            Votre carte en ligne.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
