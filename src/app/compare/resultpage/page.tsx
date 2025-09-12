'use client';


import RetailerTable from '@/components/RetailerTable';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

type Comparison = {
  product_name: string;
  rating: number;
  price: number;
  discounted_price: number | null;
  retailer_name: string;
};

async function fetchComparisons(query: string) {
  const res = await fetch(`/api/compare/resultpage?q=${encodeURIComponent(query)}`);
  if (!res.ok) return [];
  const data = await res.json();
  return data.comparisons || [];
}
export default function CompareResultPage() {
  const searchParams = useSearchParams();
    
    const query1 = searchParams.get("q1") || "";
    const query2 = searchParams.get("q2") || "";
    const query3 = searchParams.get("q3") || "";

    const [results1, setResults1] = useState<Comparison[]>([]);
    const [results2, setResults2] = useState<Comparison[]>([]);
    const [results3, setResults3] = useState<Comparison[]>([]);
    
    console.log(query1, query2, query3);
    useEffect(() => {
      if (query1) fetchComparisons(query1).then(setResults1);
    }, [query1]);

    
    
    useEffect(() => {
      if (query2) fetchComparisons(query2).then(setResults2);
    }, [query2]);

    
    
    useEffect(() => {
      if (query3) fetchComparisons(query3).then(setResults3);
    }, [query3]);
  
      //console.log(results1, results2, results3);
    return (
    <>
      <section className="flex flex-col gap-16 justify-center pb-10 mb-20 items-center">
        { results1.length > 0 && <div className="bg-white/15 backdrop-blur-xs shadow-lg w-3/4 rounded-2xl border border-gray-200 flex flex-col items-center pb-20 pt-10">
          <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
            >
              <X className="w-6 h-6" />
          </button>
          <h1 className="text-3xl font-bold mb-6">Comparison Results</h1>
          <RetailerTable product={results1}/>
        </div>}
        {results2.length > 0 && <div className="bg-white/15 backdrop-blur-xs shadow-lg w-3/4 rounded-2xl border border-gray-200 flex flex-col items-center pb-20 pt-10">
          <RetailerTable product={results2}/>
        </div>}
        {results3.length > 0 && <div className="bg-white/15 backdrop-blur-xs shadow-lg w-3/4 rounded-2xl border border-gray-200 flex flex-col items-center pb-20 pt-10">
          <RetailerTable product={results3}/>
        </div>}        
      </section>
    </>
  );
}