import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CalendarDaysIcon, Clock8Icon } from "lucide-react";

const NotesCard = ({
  title,
  description,
  time,
}: {
  title: string;
  description: string;
  time: string;
}) => {
  return (
    <Card className=" p-4 flex flex-col justify-between">
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardHeader className="text-sm text-neutral-400 flex items-center justify-end-safe w-full"><Clock8Icon className="size-4"/> <span>{time}</span></CardHeader>
    </Card>
  );
};

export default NotesCard;
