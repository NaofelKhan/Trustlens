"use client";

import HeroSection from "@/components/HeroSection";
import TopStats from "@/components/TopStats";
import SentimentAnalysis from "@/components/SentimentAnalysis";
import ProductTrends from "@/components/ProductTrends";
import PriceComparison from "@/components/PriceComparison";
import UserReviews from "@/components/UserReviews";
import AIVerdict from "@/components/AIVerdict";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useCompare from "@/components/ComparePrices";
import ReviewSearch from "@/components/GetReviews";

type Details = {
  Color: string;
  Dimensions: string;
  Weight: string;
};

type Sentiment = {
  negative: number;
  neutral: number;
  overall_sentiment_label: string;
  overall_sentiment_score: string;
  positive: number;
};



interface fectchedData {
  description: string;
  details: Details;
  features: string;
  id : string;
  price: string;
  product_name: string;
  rating: string;
  reviews: string;
  sentiments: Sentiment;
}

export default function AnalyzePage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<fectchedData[]>([]);
  const [loading, setLoading] = useState(false);
  const { comresults } = useCompare(query);
  const { reviews, revloading } = ReviewSearch(query);
  useEffect(() => {
    async function fetchResults() {
      if (!query) return;
      setLoading(true);
      try{
        const res = await fetch(`/api/analyze?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        console.log("Fetched results:", data); // 👀 test in console
        setResults(data ? [data] : []); // Wrap data in an array if it's a single object
      } catch(error)  {
        console.error("Fetch error:", error);
      } finally {
      setLoading(false);}}
    fetchResults();
  }, [query]);
  
  
  return (
    <>
      <HeroSection />
      <section className="flex justify-center pb-10 mb-20">
        {results.length > 0 && results.map((result, index) => (
          <div key={index} className="bg-white/15 backdrop-blur-xs shadow-lg w-3/4 rounded-2xl border border-gray-200">
            <TopStats title={result.product_name} rating={result.rating} price={result.price} />
            <SentimentAnalysis product={result.sentiments} />
            <ProductTrends features={result.features} descriptions={result.description} />
            <PriceComparison prices={comresults} />
            <UserReviews rev={reviews} load={revloading} />
            <AIVerdict product_name={result.product_name} details={result.details} />
          </div>
        ))}
      </section>
    </>
  );
}