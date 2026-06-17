import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Container from "../Container";
import { Logo } from "../Logo";

const Navbar = () => {
  return (
    <Container
      className={cn(
        "border-accent-foreground/10 my-3 flex h-20 items-center justify-between rounded-md px-4 py-4",
        "bg-background/20 border backdrop-blur-lg",
        "fixed inset-0 top-0 z-50",
      )}
    >
      <Logo className="" />

      <div className="flex items-center gap-5">
        <Button asChild variant="ghost" className="handwritten">
          <Link href="/sign-in">Sign In</Link>
        </Button>
        <Button asChild className="btn-paper handwritten">
          <Link href="/sign-up">Get Started</Link>
        </Button>
      </div>
    </Container>
  );
};

export default Navbar;
