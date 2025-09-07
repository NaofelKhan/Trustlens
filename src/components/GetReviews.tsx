import { useState, useEffect } from "react";

export default function ReviewSearch(query: string) {
  const [reviews, setReviews] = useState<any[]>([]);
  const [revloading, setLoading] = useState(false);
  
  
  useEffect(() => {
  async function fetchReviews() {
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/reviews?query=${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setReviews(data.reviews || []);
    } catch (err) {
      console.error("Review fetch error:", err);
      setReviews([]);
    } finally {
      setLoading(false);
    }
  }
  fetchReviews();}, [query]);
  return { reviews, revloading};

}