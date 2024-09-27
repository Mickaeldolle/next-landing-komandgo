"use client";

import { useEffect } from "react";
import { useScreenStore } from "@/store/screenWidth.store";

export const ScreenWidthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const setScreenWidth = useScreenStore((state) => state.setScreenWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Initialiser la largeur de l'écran au premier rendu
    handleResize();

    // Ajouter l'événement de redimensionnement
    window.addEventListener("resize", handleResize);

    // Nettoyer l'événement de redimensionnement lors du démontage
    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenWidth]);

  return <>{children}</>;
};
