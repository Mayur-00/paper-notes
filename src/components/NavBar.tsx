"use client";

import { Search } from "lucide-react";
import React from "react";
import { useSearchStore } from "@/stores/useSearchStore";
import { ModeToggle } from "./ThemeToggler";
import Container from "./Container";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const { openSearch } = useSearchStore();

  const searchClickHandler = () => {
    openSearch();
  };
  return (
    <Container
      className={cn(
        "my-3 h-20 flex items-center justify-between rounded-md px-4 py-4 border-accent-foreground/10",
        "bg-background/20 border backdrop-blur-md",
        "fixed top-0  inset-0"
      )}
    >
      <Logo className="" />

      <div className="flex items-center gap-5">
        <button
          onClick={searchClickHandler}
          className="flex h-10 w-25 cursor-pointer items-center gap-1 rounded border border-black bg-white p-2 text-black transition-all delay-75 hover:bg-neutral-200 md:h-10 md:w-50 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600"
        >
          <Search className="size-5" />
          <span>Search</span>
        </button>
        <ModeToggle />
      </div>
    </Container>
  );
};

export default NavBar;
