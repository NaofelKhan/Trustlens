import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import CallToAction from "@/components/CallToAction";
import { Outfit } from "next/font/google";


const outfit = Outfit({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <>
      <HeroSection />
      <section>
        <div className="flex flex-col items-center justify-center text-center px-4">
          <h1 className={`text-7xl font-normal pb-2 mb-2 ${outfit.className}`}>Powerful Features for</h1>
          <h1 className={`text-7xl font-normal ${outfit.className}`}>Smart Shopping</h1>
        </div>
        <Features />
        <Stats />
        <CallToAction />
      </section>
    </>
  );
}
