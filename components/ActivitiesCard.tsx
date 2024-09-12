import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type ActivitiesCardProps = {
  content: {
    title: string;
    description: string;
    mainContent: React.ReactNode;
    footer: string;
  };
};

export default function ActivitiesCard({ content }: ActivitiesCardProps) {
  return (
    <Card className="w-72 text-center">
      <CardHeader>
        <CardTitle>{content.title}</CardTitle>
        <CardDescription>{content.description}</CardDescription>
      </CardHeader>
      <CardContent>{content.mainContent}</CardContent>
      <CardFooter>{content.footer}</CardFooter>
    </Card>
  );
}
