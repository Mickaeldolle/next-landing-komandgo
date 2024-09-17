/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { XCircle } from "lucide-react"; // For showing valid/invalid icons
import Spinner from "./ui/Spinner";

// Password security requirements
const requirements = {
  minLength: { regex: /.{8,}/, message: "Au moins 8 caractères" },
  lowercase: { regex: /[a-z]/, message: "Une minuscule" },
  uppercase: { regex: /[A-Z]/, message: "Une majuscule" },
  number: { regex: /\d/, message: "Un chiffre" },
  specialChar: { regex: /[\W_]/, message: "Un caractère spécial" },
};

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const formSchema = z
  .object({
    password: z.string().regex(regexPassword, {
      message: "",
    }),
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Les mots de passe ne correspondent pas",
        path: ["confirmPassword"],
      });
    }
  });

export default function CreatePassword({
  setShowSteps,
}: {
  setShowSteps: (value: boolean) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [passwordCreated, setPasswordCreated] = useState(false);
  const [error, setError] = useState<string | null>(null); // Pour gérer les erreurs

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const [passwordValidations, setPasswordValidations] = useState({
    minLength: false,
    lowercase: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });

  // Update validation status based on password input
  const validatePassword = (password: string) => {
    setPasswordValidations({
      minLength: requirements.minLength.regex.test(password),
      lowercase: requirements.lowercase.regex.test(password),
      uppercase: requirements.uppercase.regex.test(password),
      number: requirements.number.regex.test(password),
      specialChar: requirements.specialChar.regex.test(password),
    });
  };

  const createPassword = async (data: z.infer<typeof formSchema>) => {
    // Ce code ne sera appelé que si les données sont valides
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/password`,
        {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }
      // const result = await response.json();
      setPasswordCreated(true);
      setShowSteps(true);
    } catch (error: unknown) {
      setError("Une erreur s'est produite");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!passwordCreated && (
        <div className="md:w-2/5 md:mx-auto shadow-xl rounded-xl border p-4 my-5">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(createPassword)}
              className="space-y-4"
            >
              <legend>Choissiez un mot de passe </legend>
              <fieldset className="space-y-3">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mot de passe</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          onChange={(e) => {
                            field.onChange(e);
                            validatePassword(e.target.value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />

                      {/* Password Strength Indicators */}
                      <div className="mt-2 space-y-1">
                        {Object.keys(requirements).map((key) => (
                          <div
                            key={key}
                            className="flex items-center space-x-2 text-sm"
                          >
                            {passwordValidations[
                              key as keyof typeof passwordValidations
                            ] ? (
                              <></>
                            ) : (
                              <>
                                <XCircle
                                  className="text-red-500 text-xs"
                                  size={10}
                                />
                                <span className="text-xs">
                                  {
                                    requirements[
                                      key as keyof typeof requirements
                                    ].message
                                  }
                                </span>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirmez le mot de passe :</FormLabel>
                      <FormControl>
                        <Input {...field} type="password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </fieldset>
              <Button type="submit" className="w-full">
                {loading ? <Spinner /> : "Valider"}
              </Button>
            </form>
          </Form>
          {error && <span className="text-red-500">{error}</span>}
        </div>
      )}
    </>
  );
}
