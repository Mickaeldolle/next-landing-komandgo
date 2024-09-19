/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import { signIn, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Spinner from "./ui/Spinner";

async function getUserPhoneNumber(accessToken: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://people.googleapis.com/v1/people/me?personFields=phoneNumbers`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch phone number");
    }

    const data = await res.json();
    const phoneNumber = data.phoneNumbers?.[0]?.value || null;
    return phoneNumber;
  } catch (error) {
    console.error("Error fetching phone number:", error);
    return null;
  }
}

export default function SignupForm() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }
  return (
    <div className="text-gray-700">
      <form onSubmit={onSubmit}>
        <div className="">
          <div className="mb-5">
            {" "}
            <div className="connexion-btn">
              <div className="google-connexion mb-2">
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
              </div>
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
            <div className="mb-2">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            <Label className="sr-only" htmlFor="pswd">
              Mot de passe
            </Label>
            <Input
              id="pswd"
              placeholder="Mot de passe"
              type="password"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button className="w-full" disabled={isLoading}>
            {/* {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )} */}
            Valider
          </Button>
        </div>
      </form>
    </div>
  );
}
