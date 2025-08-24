import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import CallToAction from "@/components/CallToAction";
export default function Home() {
  return (
    <>
      <HeroSection />
      <section>
        <div className="flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-7xl font-normal pb-2 mb-2">Powerful Features for</h1>
          <h1 className="text-7xl font-normal">Smart Shopping</h1>
        </div>
        <Features />
        <Stats />
        <CallToAction />


      </section>
    </>
  );
}
