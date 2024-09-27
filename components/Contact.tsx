"use client";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { FormEvent, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function Contact({
  email,
}: {
  email: string | null | undefined;
}) {
  const [successMessageAlert, setSuccessContactAlert] = useState(false);

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          method: "POST",
        }
      );
      if (!response.ok) {
        throw new Error("une erreur est survenue...");
      }
      setSuccessContactAlert(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-transparent">
      <div className="contact w-11/12 p-3 rounded-lg md:w-3/6 md:rounded-3xl text-gray-800">
        {successMessageAlert ? (
          <Alert className="text-green-700 border-green-700">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Merci pour votre message !</AlertTitle>
            <AlertDescription>Je vous répond au plus vite !</AlertDescription>
          </Alert>
        ) : (
          <>
            <h3 className="text-lg text-gray-200 md:text-4xl my-5 font-bold text-center ">
              Vous souhaitez plus d&apos;informations ?
            </h3>
            <h4 className="text-gray-200 mb-5 text-center">
              N&apos;hésitez pas à poser vos questions !
            </h4>
            <form
              className="w-5/6 mx-auto  backdrop-blur-[2px]"
              onSubmit={(event) => sendMessage(event)}
            >
              <Label className="text-gray-500" htmlFor="email">
                Email
              </Label>
              <Input
                required
                className="mb-2 text-gray-200"
                type="email"
                id="email"
                name="email"
                defaultValue={email ? email : ""}
              />
              <Label htmlFor="phone" className="text-gray-500">
                N°Tel
              </Label>
              <Input
                required
                className="mb-2 text-gray-200"
                type="tel"
                id="phone"
                name="phone"
              />
              <Label className="mb-2 text-gray-500 " htmlFor="content">
                Message
              </Label>
              <Textarea
                required
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
          </>
        )}
      </div>
    </div>
  );
}
