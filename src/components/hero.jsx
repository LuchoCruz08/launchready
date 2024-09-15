import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-700 relative overflow-hidden">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            <span className="inline-block animate-float">Ideas</span> to{" "}
            <span className="inline-block animate-float animation-delay-150">
              Reality
            </span>
            <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600 animate-pulse">
              LaunchReady.
            </span>
          </h1>

          <p className="mb-12 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-32 animate-fade-in">
            Turn your idea into a real, market-ready product. We help startups and entrepreneurs launch their MVPs quickly and efficiently.
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="https://launchready.fillout.com/t/tNCx2FDgBvus" target="_blank">
              <Button
                size="lg"
                className="group bg-violet-600 hover:bg-violet-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
