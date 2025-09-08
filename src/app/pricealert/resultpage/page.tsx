'use client';

import PriceSummary from '@/components/PriceSummary';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PriceAlertResultPage() {
  const [data, setData] = useState<any>(null);
  const [productId, setProductId] = useState<number | null>(null);
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  useEffect(() => {
    if (query) {
      const fetchProduct = async () => {
        const res = await fetch(`/api/getproduct?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setProductId(data.product_id)
      };
      fetchProduct()
    }
  }, [query]);

  const fetchPriceAlert = async () => {
      const user = localStorage.getItem("user");
      if (!user) return;
      const user_email = JSON.parse(user).email;
      console.log(user_email);
      const result = await fetch("/api/pricealert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({product_id: productId,user_email: user_email})
      });
      const data = await result.json();
      setData(data);
      };

  useEffect(() => {
    if (productId) {
      fetchPriceAlert();
    }
  }, [productId]);
  if (!data || !data.product) return <p>Loading...</p>;
  console.log(data);
  const { product } = data;

  return (
  <>
{ data &&
    <div className="flex flex-col items-center justify-center">
      <PriceSummary product_name={product.product_name} price={product.price} discounted_price={product.discounted_price} brand_name={product.brand_name} retailer_name={product.retailer}/>
    </div>
    }
  </>
  );
}