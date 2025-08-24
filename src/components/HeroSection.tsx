import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen  bg-[url(/bg-hero.jpg)] bg-cover bg-no-repeat text-white">

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
        <p className="font-bold pb-4 mb-2">AI-Powered Insights for Every Product.</p>
        <h1 className="text-7xl pb-4 mb-4">
         Smart Product Reviews
        </h1>
        <h1 className="text-7xl pb-4 mb-4">
         With AI Intelligence
        </h1>
        <p className="text-lg max-w-2xl">
          Discover the best products through AI-powered review analysis, price comparisons, and trend insights. Make informed decisions with our intelligent recommendation system.
        </p>
      </div>
    {/* Search Bar */}
    <div className="flex justify-center">
        <div className="relative w-full max-w-xl mb-6">
            <input
            type="text"
            placeholder="Search something..."
            className="w-full rounded-full py-3 pl-6 pr-20 text-gray-900 focus:outline-none shadow-lg"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
            <Search size={18} />
            Search
            </button>
        </div>
    </div>
    {/* Suggestions */}
    <div className="flex flex-wrap justify-center gap-3">
        {["Next.js", "Tailwind CSS", "React", "TypeScript", "AI Apps"].map(
        (item) => (
            <button
            key={item}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm shadow-md"
            >
            {item}
            </button>
        )
        )}
    </div>
    </section>
  );
}
