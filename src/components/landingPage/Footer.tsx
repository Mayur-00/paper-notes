import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-foreground border-t-2 border-accent px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="handwritten mb-4 text-xl font-bold">Paper Notes</h3>
            <p className="handwritten text-sm text-gray-600">
              {
                "Beautiful, distraction-free note-taking with the feel of pen and paper."
              }
            </p>
          </div>

          <div>
            <h4 className="handwritten mb-4 font-bold">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#features"
                  className="handwritten text-gray-600 hover:underline"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="handwritten text-gray-600 hover:underline"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/demo"
                  className="handwritten text-gray-600 hover:underline"
                >
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="handwritten mb-4 font-bold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/help"
                  className="handwritten text-gray-600 hover:underline"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="handwritten text-gray-600 hover:underline"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/status"
                  className="handwritten text-gray-600 hover:underline"
                >
                  Status
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="handwritten mb-4 font-bold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="handwritten text-gray-600 hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="handwritten text-gray-600 hover:underline"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="handwritten text-gray-600 hover:underline"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt- pt-8 text-center">
          <p className="handwritten text-sm text-gray-500">
            © 2025 Paper Notes. Made with ❤️ for writers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
