import { Search } from "lucide-react";
import GradientText from './GradientText';
import {Montserrat,Outfit} from 'next/font/google'



const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const montserratbold = Montserrat({ subsets: ['latin'], weight: '400' });
const outfit = Outfit({ subsets: ['latin'], weight: '400' });




export default function HeroSection() {

  return (
    <section className="relative h-screen  bg-[url(/bg-hero.jpg)] bg-cover bg-no-repeat text-white">

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center px-4">
        <div className="mt-[25vh]">
          <GradientText
            colors={["#701CF5", "#118D81","#701CF5", "#118D81","#701CF5"]}
            animationSpeed={3}
            showBorder={false}
            className={`custom-class ${montserratbold.className}`}
          >
            AI-Powered Insights for Every Product.
          </GradientText>
          <h1 className={`text-7xl pb-4 mb-4 text-black ${outfit.className}`}>
          Smart Product Reviews
          </h1>
          <h1 className={`text-7xl pb-4 mb-4 text-black ${outfit.className}`}>
          With AI Intelligence
          </h1>
          <p className={`text-md max-w-2xl text-[#797979] pb-4 mb-4 ${montserrat.className}`}>
            Discover the best products through AI-powered review analysis, price comparisons, and trend insights. Make informed decisions with our intelligent recommendation system.
          </p>
        </div>
      </div>
      {/* Search Bar */}
      <div className={`flex justify-center pb-4 mb-4 ${montserrat.className}`}>
          <div className="relative w-1/2 mb-6">
              <Search size={18} className="absolute left-2 top-1/2 -translate-y-1/2 text-[#bdbdbd]" />
              <input
              type="text"
              placeholder="Search something..."
              className="w-full rounded-full py-3 pl-8 pr-20 text-[#bdbdbd] focus:outline-none shadow-lg bg-white"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#701CF5] to-[#108F80] text-white px-12 py-2 rounded-full flex items-center gap-2 shadow-md">
              Search and Analyze
              </button>
          </div>
      </div>
      {/* Suggestions */}
      <div className={`flex flex-wrap justify-center gap-3 items-center ${montserrat.className}`}>
        <h2 className="text-lg text-black">Popular Searches:</h2>
        {["Next.js", "Tailwind CSS", "React", "TypeScript", "AI Apps"].map(
          (item) => (
              <button
              key={item}
              className="bg-white hover:bg-white/30 text-black px-4 py-2 rounded-full text-sm border border-black"
              >
              {item}
              </button>
          )
          )}
      </div>
    </section>
  );
}
