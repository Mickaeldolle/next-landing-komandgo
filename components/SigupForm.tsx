/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Spinner from "./ui/Spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, AlertDescription } from "./ui/alert";
import { AlertCircle, Check, Eye, EyeOff, XCircle } from "lucide-react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";

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
    email: z.string().email({ message: "Adresse email invalide" }),
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

export default function SignupForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alertSignUp, setAlertSignup] = useState({ message: "", type: "" });
  const [passwordIsEntered, setPasswordIsEntered] = useState(false);
  const [showPasswordIndicator, setShowPasswordIndicators] = useState(false);
  const [revealPassword, setRevealPassword] = useState(false);
  const [passwordValidations, setPasswordValidations] = useState({
    minLength: false,
    lowercase: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });

  const validatePassword = (password: string) => {
    setPasswordValidations({
      minLength: requirements.minLength.regex.test(password),
      lowercase: requirements.lowercase.regex.test(password),
      uppercase: requirements.uppercase.regex.test(password),
      number: requirements.number.regex.test(password),
      specialChar: requirements.specialChar.regex.test(password),
    });
  };

  useEffect(() => {
    Object.values(passwordValidations).every((value) => value === true)
      ? setShowPasswordIndicators(false)
      : setShowPasswordIndicators(true);
  }, [passwordValidations]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function signUpWithCredentials(data: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const formValues = {
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    console.log(formValues);
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message ?? "Désolé, Une erreur est survenu..");
      }

      if (response.status === 201) {
        setAlertSignup({ message: result.message, type: "sucess" });
        const signInResponse = await signIn("credentials", {
          email: formValues.email,
          password: formValues.password,
          redirect: false,
        });
        if (signInResponse?.error) {
          console.error(signInResponse.error);
          throw new Error(signInResponse.error);
        }
        window.location.href = "/welcome";
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        setAlertSignup({ message: error.message, type: "error" });
      } else {
        setAlertSignup({
          message: "An unknown error occurred",
          type: "error",
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    return () => {
      setAlertSignup({ message: "", type: "" });
      setIsLoading(false);
    };
  }, []);

  return (
    <div className="text-gray-700">
      {alertSignUp?.message && (
        <Alert
          className={`mb-4 text-xs ${
            alertSignUp.type === "error" ? "border-red-500" : "border-green-500"
          }`}
        >
          {alertSignUp.type === "error" ? (
            <AlertCircle className="h-4 w-4" color="red" />
          ) : (
            <Check className="h-4 w-4" />
          )}

          <AlertDescription
            className={`text-md ${
              alertSignUp.type === "error"
                ? "text-red-500 border-red-500"
                : "text-green-500 border-green-500"
            }`}
          >
            {alertSignUp.message}
          </AlertDescription>
        </Alert>
      )}

      <Button
        onClick={() => {
          setIsLoading(true);
          signIn("google");
        }}
        className="w-full"
        variant="outline"
        type="button"
        disabled={isLoading}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <svg
              className="w-[20px] h-[20px] me-5"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Continuer avec Google
          </>
        )}
      </Button>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(signUpWithCredentials)}>
          <div className="">
            <div className="mb-5">
              {" "}
              <div className="connexion-btn">
                <div className="google-connexion mb-2"></div>
                <div className="facebook-connexion">
                  {/* <Button
                  onClick={() =>
                    (window.location.href = "/api/auth/signin/facebook")
                  }
                  className="w-full"
                  variant="outline"
                  type="button"
                  disabled={isLoading}
                > */}
                  {/* {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "} */}
                  {/* <svg
                    className="w-[20px] h-[20px] me-5"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#039be5"
                      d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                    ></path>
                  </svg>
                  Continuer avec Facebook
                </Button> */}
                </div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground py-3">
                  Or continue with email
                  <div className="relative"></div>
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                </span>
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-2">
                    <FormLabel className="sr-only" htmlFor="email">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        {...field}
                        placeholder="name@example.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage className="font-normal" />
                  </FormItem>
                )}
              />
              <div className="mb-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Mot de passe</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            id="password"
                            autoComplete="new-password"
                            placeholder="Mot de passe"
                            {...field}
                            type={`${revealPassword ? "text" : "password"}`}
                            onChange={(e) => {
                              if (e.target.value.length > 0) {
                                setPasswordIsEntered(true);
                              } else {
                                setPasswordIsEntered(false);
                              }
                              field.onChange(e);
                              validatePassword(e.target.value);
                            }}
                          />
                        </FormControl>
                        <Button
                          type="button"
                          variant={"ghost"}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                          onClick={() => {
                            setRevealPassword(!revealPassword);
                            setTimeout(() => {
                              setRevealPassword(false);
                            }, 1500);
                          }} // Basculer l'état
                        >
                          {revealPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-500" /> // Icône pour cacher
                          ) : (
                            <Eye className="h-5 w-5 text-gray-500" /> // Icône pour afficher
                          )}
                        </Button>
                      </div>
                      <FormMessage className="font-normal" />

                      {/* Password Strength Indicators */}
                      {passwordIsEntered &&
                        showPasswordIndicator &&
                        Object.keys(requirements).map((key) => (
                          <div
                            key={key}
                            className="flex items-center space-x-2 text-sm"
                          >
                            {passwordValidations[
                              key as keyof typeof passwordValidations
                            ] ? null : (
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
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Confirmez le mot de passe :</FormLabel> */}
                    <FormControl>
                      <Input
                        id="confirmPassword"
                        autoComplete="new-password"
                        {...field}
                        type={`${revealPassword ? "text" : "password"}`}
                        placeholder="Confirmez le mot de passe"
                      />
                    </FormControl>
                    <FormMessage className="font-normal" />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? <Spinner /> : "Valider"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
