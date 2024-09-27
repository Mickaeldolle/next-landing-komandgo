"use client";
import { Check, UserRoundPlus } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { prospectSchema } from "@/validations/prospect.schema";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useEffect, useState } from "react";
import Spinner from "@/components/ui/Spinner";
import { Checkbox } from "@/components/ui/checkbox";

export default function AddProspectBtn() {
  const [open, setOpen] = useState(false); // Gérer l'état d'ouverture/fermeture du Sheet

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="border p-3 rounded-lg text-white bg-black hover:bg-gray-600">
          <UserRoundPlus className="h-4 w-4" />
        </SheetTrigger>
        <SheetContent className="bg-black text-white border-none w-[80%]">
          <SheetHeader>
            <SheetTitle>Création d&apos;une fiche prospect</SheetTitle>
            <SheetDescription>
              Création d&apos;une fiche prospect
            </SheetDescription>
          </SheetHeader>
          <CreateProspectForm setOpen={setOpen} />
        </SheetContent>
      </Sheet>
    </>
  );
}

type CreateProspectFormProps = {
  setOpen: (state: boolean) => void;
};

function CreateProspectForm({ setOpen }: CreateProspectFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      setSuccess(true);
      setTimeout(() => {
        setOpen(false);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  const form = useForm<z.infer<typeof prospectSchema>>({
    resolver: zodResolver(prospectSchema),
    defaultValues: {
      lastname: "",
      firstname: "",
      phone: "",
      email: "",
      user: false,
    },
  });

  const createProspectHandler = async (
    values: z.infer<typeof prospectSchema>
  ) => {
    setLoading(true);
    console.log(values);
    let result;
    try {
      const response = await fetch("/api/admin/prospect", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(values),
      });
      if (!response.ok)
        throw new Error("Erreur lors de la création du prospect");
      result = await response.json();
      if (result) setSuccess(true);
      setSuccess(true);
    } catch (error) {
      console.error("Erreur lors de la création du prospect", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => createProspectHandler(values))}
      >
        <fieldset className="pb-5 mb-5 border-b border-gray-500">
          <legend className="text-lg font-bold">Informations entreprise</legend>
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="mb-2">
                <FormLabel className="text-gray-400">Nom entreprise</FormLabel>
                <FormControl>
                  <Input {...field} type="tel" value={field.value ?? ""} />
                </FormControl>
              </FormItem>
            )}
          />
        </fieldset>
        <fieldset className="border-b border-gray-500">
          <legend className="text-lg font-bold">
            Informations personnelles
          </legend>
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-400">Nom</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value ?? ""} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-400">Prénom</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value ?? ""} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-400">Mail</FormLabel>
                <FormControl>
                  <Input {...field} type="email" value={field.value ?? ""} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-gray-400">N° Téléphone</FormLabel>
                <FormControl>
                  <Input {...field} type="tel" value={field.value ?? ""} />
                </FormControl>
              </FormItem>
            )}
          />
        </fieldset>
        <FormField
          control={form.control}
          name="user"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between">
              <FormLabel className="text-gray-400">
                Ajouter aussi en tant qu&apos;utilisateur
              </FormLabel>
              <FormControl>
                <Checkbox
                  className="w-6 h-6 bg-white"
                  checked={field.value ?? false}
                  onCheckedChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          className="w-full my-5 flex items-center justify-center gap-x-4"
          variant={"secondary"}
          type="submit"
        >
          {loading && <Spinner />}
          {success && <Check color="green" />}
          Valider
        </Button>
      </form>
    </Form>
  );
}
