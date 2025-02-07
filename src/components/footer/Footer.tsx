import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#FCAF3C] to-[#F7770F] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 h-1/2 w-1/2 rounded-full bg-[#F7770F] opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-[#FCAF3C] opacity-50 blur-3xl"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold">Tasty Recipes</h2>
            <p className="mt-4">
              Discover delicious recipes from around the world.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/recipe" className="hover:underline">
                  All Recipes
                </Link>
              </li>
              <li>
                <Link to="/add-recipe" className="hover:underline">
                  Add a recipe
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="mt-4 flex space-x-4">
              <Link to="#" className="hover:text-[#FCAF3C] transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="#" className="hover:text-[#FCAF3C] transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="#" className="hover:text-[#FCAF3C] transition-colors">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Tasty Recipes. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
