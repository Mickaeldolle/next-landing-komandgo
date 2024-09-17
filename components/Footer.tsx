"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Mail } from "lucide-react";
import logoFooter from "../assets/logofooter.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="min-h-screen md:min-h-0 flex justify-center items-center mt-5 border-t md:pt-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:flex-row-reverse md: justify-evenly items-center">
          {/* Logo */}
          {/* Call to Action */}
          <div className="">
            <h2 className="text-3xl font-bold text-center">
              Restons en contact !
            </h2>
            <p className="text-gray-400 mb-5 text-center">
              Inscrivez-vous à notre newsletter pour recevoir les dernières
              actualités et offres.
            </p>
            <div className="flex justify-center items-center gap-3">
              <Label htmlFor="email" className="sr-only">
                Email
              </Label>
              <div className="w-full flex items-center mb-5">
                <Input
                  id="email"
                  type="email"
                  placeholder="Votre adresse email"
                  className="w-3/5 mx-auto"
                />
                <Button
                  variant="default"
                  className="flex items-center mx-auto gap-2 bg-[#272f51] text-white"
                >
                  <Mail size={18} />
                  S&apos;inscrire
                </Button>
              </div>
            </div>
          </div>
          <Image
            src={logoFooter}
            alt="Logo Kom&GO"
            className="mb-5 md:w-3/12 rounded-xl"
          />
        </div>

        {/* Réseaux sociaux */}

        {/* Liens vers les pages */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-col md:flex-row items-center gap-5 justify-center w-full">
            <a
              href="/mentions-legales"
              className="text-gray-400 hover:text-gray-700"
            >
              Mentions légales
            </a>
            <a
              href="/politique-confidentialite"
              className="text-gray-400 hover:text-gray-700"
            >
              Politique de confidentialité
            </a>
            <a
              href="/conditions-utilisation"
              className="text-gray-400 hover:text-gray-700"
            >
              Conditions d&apos;utilisation
            </a>
            <a href="/cookies" className="text-gray-400 hover:text-gray-700">
              Politique des cookies
            </a>
          </div>
        </div>
        <div className="mt-5 md:mt-0 text-center">
          <p className="text-gray-500">
            &copy; 2024 Kom&GO. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
