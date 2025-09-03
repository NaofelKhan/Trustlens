import AiInsight from '@/components/AiInsight';
import RetailerTable from '@/components/RetailerTable';
import PriceSummary from '@/components/PriceSummary';



export default function CompareResultPage() {
  return (
    <>
      <section className="flex flex-col gap-16 justify-center pb-10 mb-20 items-center">
        <div className="bg-white/15 backdrop-blur-xs shadow-lg w-3/4 rounded-2xl border border-gray-200 flex flex-col items-center pb-20 pt-10">
          <h1 className="text-3xl font-bold mb-6">Comparison Results</h1>
          <RetailerTable />
          <AiInsight />
          <PriceSummary />
        </div>
        <div className="bg-white/15 backdrop-blur-xs shadow-lg w-3/4 rounded-2xl border border-gray-200 flex flex-col items-center pb-20 pt-10">
          <RetailerTable />
          <AiInsight />
          <PriceSummary />
        </div>
        <div className="bg-white/15 backdrop-blur-xs shadow-lg w-3/4 rounded-2xl border border-gray-200 flex flex-col items-center pb-20 pt-10">
          <RetailerTable />
          <AiInsight />
          <PriceSummary />
        </div>        
      </section>
    </>
  );
}