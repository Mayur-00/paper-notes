"use client";
import NavBar from "@/components/NavBar";
import NotesGrid from "@/components/NotesGrid";
import SearchComponent from "@/components/SearchComponent";
import { Plus } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <main className="bg-background relative h-screen w-full overflow-y-scroll">
      <NavBar />
      <main className="mx-auto h-[85%] max-w-6xl px-4 py-8">
        <Link
          href={"/editor"}
          className="bg-card text-foreground border-accent mt-20 mb-8 flex h-10 w-40 items-center justify-center gap-2 rounded border text-lg font-bold shadow-md hover:shadow-lg dark:hover:bg-neutral-600"
        >
          <Plus className="stroke-3" />{" "}
          <span className="text-shadow-sm">New Note</span>
        </Link>
        <NotesGrid />
        <SearchComponent />
      </main>
    </main>
  );
};

export default page;
