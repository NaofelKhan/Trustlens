import { useEffect, useState } from "react";

export default function useCompare(query: string) {
  const [comresults, comsetResults] = useState<any[]>([]);
  const [comloading, comsetLoading] = useState(false);
    
  useEffect(() => {
    async function fetchResults() {
      if (!query) return;
      comsetLoading(true);
      try {
        const res = await fetch(`/api/compare?query=${encodeURIComponent(query)}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();

        console.log("Compare results:", data.products); // 👀 check console
        comsetResults(data.products || []);
      } catch (error) {
        console.error("Compare fetch error:", error);
        comsetResults([]);
      } finally {
        comsetLoading(false);
      }
    }
    fetchResults(); // runs once when query changes
  }, [query]);

  return { comresults, comloading };
}
