"use client";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-transparent">
      <div className="contact w-11/12 p-3 rounded-lg md:w-3/6 md:rounded-3xl text-gray-800">
        <h3 className="text-lg text-gray-200 md:text-4xl my-5 font-bold text-center ">
          Vous souhaitez plus d&apos;informations ?
        </h3>
        <h4 className="text-gray-200 mb-5 text-center">
          N&apos;hésitez pas à poser vos questions !
        </h4>
        <form className="w-5/6 mx-auto  backdrop-blur-[2px]">
          <Label className="text-gray-500" htmlFor="email">
            Email
          </Label>
          <Input
            className="mb-2 text-gray-200"
            type="email"
            id="email"
            name="email"
          />
          <Label htmlFor="phone" className="text-gray-500">
            N°Tel
          </Label>
          <Input
            className="mb-2 text-gray-200"
            type="tel"
            id="phone"
            name="tel"
          />
          <Label className="mb-2 text-gray-500 " htmlFor="content">
            Message
          </Label>
          <Textarea
            rows={10}
            id="content"
            className="mb-2 text-gray-200"
            name="content"
          />
          <Button
            type="submit"
            variant={"outline"}
            className="block w-full text-gray-500"
          >
            Envoyer
          </Button>
        </form>
      </div>
    </div>
  );
}
