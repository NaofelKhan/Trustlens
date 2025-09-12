'use client';

import PriceSummary from '@/components/PriceSummary';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';


interface Data{
  message : "Price alert set successfully",
  product : Product
}
type Details = { 
  Color : string,
  Dimensions : string,
  Weight : string
};
type Product = {
brand_id: number;
category_id: number;
created_at: string;
description: string;
details: Details;
discounted_price: string;
features: string;
id: number;
price: string;
product_name: string;
rating: string;
retailer: string;
retailer_id: number;
verified_purchase: boolean;
}
export default function PriceAlertResultPage() {
  const [data, setData] = useState<Data|null>(null);
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

  useEffect(() => {
    if (productId) {
      const fetchPriceAlert = async (productId: number) => {
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
      fetchPriceAlert(productId);
    }
  }, [productId]);

  if (!data || !data.product) return <p>Loading...</p>;
  console.log(data);
  const { product } = data;

  return (
  <>
{ data &&
    <div className="flex flex-col items-center justify-center">
      <PriceSummary product_name={product.product_name} price={product.price} discounted_price={product.discounted_price} brand_name={"Amazon"} retailer_name={product.retailer}/>
    </div>
    }
  </>
  );
}