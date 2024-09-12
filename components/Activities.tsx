"use client";

import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Button } from "./ui/button";
// import ActivitiesCard from "../components/ActivitiesCard";
import { useState } from "react";
import ActivitiesCard from "./ActivitiesCard";

export default function Activities() {
  const [initialPosition] = useState([
    {
      x: 0,
      y: 0,
      icon: <Home className="text-white" />,
      card: {
        title: "test",
        description: "lorem",
        mainContent: "heelo",
        footer: "toooo",
      },
    },
    {
      x: 0,
      y: 0,
      icon: <Home className="text-white" />,
      card: {
        title: "test",
        description: "lorem",
        mainContent: "heelo",
        footer: "toooo",
      },
    },
    {
      x: 0,
      y: 0,
      icon: <Home className="text-white" />,
      card: {
        title: "test",
        description: "lorem",
        mainContent: "heelo",
        footer: "toooo",
      },
    },
    {
      x: 0,
      y: 0,
      icon: <Home className="text-white" />,
      card: {
        title: "test",
        description: "lorem",
        mainContent: "heelo",
        footer: "toooo",
      },
    },
    {
      x: 0,
      y: 0,
      icon: <Home className="text-white" />,
      card: {
        title: "test",
        description: "lorem",
        mainContent: "heelo",
        footer: "toooo",
      },
    },
  ]);
  const [position, setPosition] = useState(initialPosition);
  const [visible, setVisible] = useState(false);
  const finalPosition = [
    { x: -150, y: -150 },
    { x: -150, y: 150 },
    { x: 150, y: -150 },
    { x: 150, y: 150 },
    { x: -50, y: 300 },
  ];

  function animateIconHandler() {
    setPosition((prev) => {
      if (prev[0].x === initialPosition[0].x) {
        setVisible(true);
        const updatedPosition = prev.map((pos, index) => ({
          ...pos,
          x: finalPosition[index].x,
          y: finalPosition[index].y,
        }));
        return updatedPosition;
      }
      setVisible(false);
      return initialPosition;
    });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen relative overflow-hidden">
      {/* Les boutons doivent avoir un z-index plus élevé */}
      <div className="mx-auto relative z-10">
        <Button onClick={animateIconHandler} className="border">
          Je suis maraicher
        </Button>
        <Button onClick={animateIconHandler} className="border">
          Je suis restaurateur
        </Button>
      </div>

      {/* Les cartes d'activités doivent avoir un z-index inférieur */}
      <div className="absolute z-0">
        {initialPosition.map((pos, index) => (
          <motion.div
            key={index}
            initial={{
              x: initialPosition[index].x,
              y: initialPosition[index].y,
              opacity: 0,
              display: "none",
            }}
            animate={
              visible
                ? {
                    x: position[index].x,
                    y: position[index].y,
                    opacity: 1,
                    display: "block",
                  }
                : {
                    opacity: 0,
                    display: "none",
                  }
            }
            transition={{ type: "spring", stifness: 100 }}
          >
            <div className="text-center">{pos.icon}</div>
            <ActivitiesCard content={pos.card} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
