import { Button } from "../ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section id="Pricing" className="bg-background px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="handwritten mb-4 rotate-1 transform text-4xl font-bold md:text-5xl">
            Simple Pricing
          </h2>
          <p className="handwritten text-xl text-gray-600">
            {"Start free, upgrade when you're ready"}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Free Plan */}
          <div className="bg-card note-shadow -rotate-1 transform rounded-lg flex flex-col justify-evenly border-2 border-accent p-8">
            <h3 className="handwritten mb-2 text-2xl font-bold">Free</h3>
            <div className="handwritten mb-6 text-4xl font-bold">
              $0<span className="text-lg text-gray-600">/month</span>
            </div>

            <ul className="mb-8 space-y-3 text-foreground/60">
              <li className="handwritten flex items-center">
                <Check className="mr-3 h-5 w-5 text-green-600" />
                Up to 50 notes
              </li>
              <li className="handwritten flex items-center">
                <Check className="mr-3 h-5 w-5 text-green-600" />
                Basic search
              </li>
              <li className="handwritten flex items-center">
                <Check className="mr-3 h-5 w-5 text-green-600" />
                Mobile & web access
              </li>
              <li className="handwritten flex items-center">
                <Check className="mr-3 h-5 w-5 text-green-600" />
                Paper-style themes
              </li>
            </ul>

            <Button
              className="btn-paper handwritten w-full py-3 text-lg"
              asChild
            >
              <Link href="/signup">Start Free</Link>
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="bg-card  note-shadow relative rotate-1 transform rounded-lg border-2 border-accent-foreground p-8">
            <div className="handwritten absolute -top-3 -right-3 rotate-12 transform bg-black px-3 py-1 text-sm text-white ">
              Popular
            </div>

            <h3 className="handwritten mb-2 text-2xl font-bold">Pro</h3>
            <div className="handwritten mb-6 text-4xl font-bold">
              $5<span className="text-lg text-gray-600">/month</span>
            </div>

            <ul className="mb-8 space-y-3 text-foreground/60">
              <li className="handwritten flex items-center ">
                <Check className="mr-3 h-5 w-5 text-green-600" />
                Unlimited notes
              </li>
              <li className="handwritten flex items-center">
                <Check className="mr-3 h-5 w-5 text-green-600" />
                Advanced search & tags
              </li>
              <li className="handwritten flex items-center">
                <Check className="mr-3 h-5 w-5 text-green-600" />
                Offline access
              </li>
              <li className="handwritten flex items-center">
                <Check className="mr-3 h-5 w-5 text-green-600" />
                Export to PDF
              </li>
              <li className="handwritten flex items-center">
                <Check className="mr-3 h-5 w-5 text-green-600" />
                Priority support
              </li>
            </ul>

            <Button
              className="btn-paper handwritten w-full py-3 text-lg"
              asChild
            >
              <Link href="/signup">Start Pro Trial</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
