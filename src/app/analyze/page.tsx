import HeroSection from "@/components/HeroSection";
import TopStats from "@/components/TopStats";
import SentimentAnalysis from "@/components/SentimentAnalysis";
import ProductTrends from "@/components/ProductTrends";
import PriceComparison from "@/components/PriceComparison";
import UserReviews from "@/components/UserReviews";
import AIVerdict from "@/components/AIVerdict";


export default function AnalyzePage() {
  return (
    <>
      <HeroSection/> 
      <section className="flex justify-center pb-10 mb-20">
        <div className="bg-white/15 backdrop-blur-xs shadow-lg w-3/4 rounded-2xl border border-gray-200">
          <TopStats/>
          <SentimentAnalysis/>
          <ProductTrends/>
          <PriceComparison/>
          <UserReviews/>
          <AIVerdict/>
        </div>
      </section>
    </>
  );
}