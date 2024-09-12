import { Rocket } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a
            href="/"
            className="group flex items-center space-x-3 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="relative">
              <Rocket className="h-10 w-10 text-violet-500 transition-all duration-300 ease-in-out transform group-hover:rotate-12" />
              <div className="absolute -inset-0.5 bg-violet-500 opacity-20 rounded-full blur group-hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
            </div>
            <span className="text-2xl font-bold text-white tracking-wide">
              Launch<span className="text-violet-400">Ready</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
