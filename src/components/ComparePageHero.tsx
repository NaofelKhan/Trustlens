import SearchBar from "./searchbar";
import {Montserrat,Outfit} from 'next/font/google'



const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const outfit = Outfit({ subsets: ['latin'], weight: '400' });
export default function ComparePageHero() {
  return (
    <section className="relative h-[calc(100vh-150px)] bg-[url(/bg-hero.jpg)] bg-cover bg-no-repeat">
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center pt-60 text-center px-4">
        <h1 className={`text-7xl pb-4 mb-4 ${outfit.className}`}>
         Compare Products Across Retailers
        </h1>
        <p className={`text-md max-w-2xl ${montserrat.className} text-[#797979]`}>
          Discover the best products through AI-powered review analysis, price comparisons, and trend insights. Make informed decisions with our intelligent recommendation system.
        </p>
      </div>
      {/* Search Bar */}
      <div className="flex flex-col items-center justify-center pt-10">
        <SearchBar paramKey="q1"/>
        <SearchBar paramKey="q2"/>
        <SearchBar paramKey="q3"/>
      </div>
    </section>
  );
}