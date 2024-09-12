"use client";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { FormEvent } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function Contact() {
  const sendContactMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Récupérer les données du formulaire
    const formData = new FormData(e.currentTarget);

    // Convertir en objet JSON
    const data = Object.fromEntries(formData.entries());

    // Afficher les données dans la console
    console.log(data);
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h3 className="text-lg md:text-5xl my-5 font-bold text-center">
        Vous souhaitez plus d&apos;informations ?
      </h3>
      <h4 className="text-gray-500 mb-5">
        N&apos;hésitez pas à poser vos questions !
      </h4>
      <form
        onSubmit={(e) => sendContactMessage(e)}
        className=" w-11/12 p-3 rounded-lg md:w-3/6 md:rounded-3xl backdrop-blur-xl text-gray-800"
      >
        <Label htmlFor="email">Email</Label>
        <Input className="mb-2" type="email" id="email" name="email" />
        <Label htmlFor="phone">N°Tel</Label>
        <Input className="mb-2" type="tel" id="phone" name="tel" />
        <Label className="mb-2" htmlFor="phone">
          N°Tel
        </Label>
        <Textarea id="phone" className="mb-2" name="content" />
        <Button type="submit" className="block w-full">
          Envoyer
        </Button>
      </form>
    </div>
  );
}
