"use client";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Clock8Icon } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const NotesCard = ({
  title,
  description,
  time,
  noteId,
}: {
  title: string;
  description: string;
  time: string;
  noteId: string;
}) => {
  const router = useRouter();

  const handleNoteClick = () => {
    toast.success("redirecting");
    router.push(`editor/${noteId}`);
  };

  return (
    <Card
    key={noteId}
      onClick={handleNoteClick}
      className={cn("flex flex-col justify-between p-4 cursor-pointer hover:shadow-lg",
        "transition-all delay-150 duration-100 "
      )}
    >
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardHeader className="flex w-full items-center justify-end-safe text-sm text-neutral-400">
        <Clock8Icon className="size-4" /> <span>{time}</span>
      </CardHeader>
    </Card>
  );
};

export default NotesCard;
