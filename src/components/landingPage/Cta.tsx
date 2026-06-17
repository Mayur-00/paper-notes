import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Cta = () => {
  return (
    <section className="px-4 py-50">
      <div className="mx-auto max-w-4xl text-center">
        <div className="bg-card text-foreground note-shadow -rotate-1 transform rounded-lg border-2 border-accent p-12">
          <h2 className="handwritten mb-6 text-4xl font-bold md:text-5xl">
            Ready to Start Writing?
          </h2>
          <p className="handwritten mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            {
              "Join thousands of writers who've rediscovered the joy of note-taking with Paper Notes."
            }
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild className="btn-paper handwritten px-8 py-4 text-xl">
              <Link href="/signup">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="handwritten text-sm text-gray-500">
              No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
