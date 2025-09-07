'use client';

import PriceSummary from '@/components/PriceSummary';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function PriceAlertResultPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  useEffect(() => {
      async function fetchComparisons(query: string) {
      const res = await fetch(`/api/pricealert?q=${encodeURIComponent(query)}`);
      if (!res.ok) return [];
      const data = await res.json();
      return data.comparisons || [];
    }
    fetchComparisons(query);
  }, [query]);

  return (
  <>
    <div className="flex flex-col items-center justify-center">
      <PriceSummary />
      <PriceSummary />
      <PriceSummary />
    </div>
  </>
  );
}