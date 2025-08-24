import { Search } from "lucide-react";

export default function ComparePageHero() {
  return (
    <section className="relative h-screen  bg-[url(/bg-hero.jpg)] bg-cover bg-no-repeat text-white">
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
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
    <div className="flex flex-col items-center justify-center">
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
    </section>
  );
}