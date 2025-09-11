"use client";

import RetailerRow from "./RetailerRow";
import {Outfit} from 'next/font/google'


const outfit = Outfit({ subsets: ['latin'], weight: '400' });


type Comparison = {
  product_name: string;
  rating: number;
  price: number;
  discounted_price: number | null;
  retailer_name: string;
};
export default function RetailerTable({product}:{product:Comparison[]}) {
  if (!product) return null;
  return (
    <table className="w-2/3 border rounded-xl overflow-hidden">
      <thead className={`bg-gray-50 backdrop-blur-xs text-left ${outfit.className}`}>
        <tr>
          <th className="py-8 px-4">Product</th>
          <th className="py-8 px-4">Rating</th>
          <th className="py-8 px-4">Price</th>
          <th className="py-8 px-4">Discount Price</th>
          <th className="py-8 px-4">Retailer</th>
          {/* <th className="py-8 px-4">Actions</th> */}
        </tr>
      </thead>
      <tbody>
        {product.map((r, i) => (
          <RetailerRow key={i} retailer={r} />
        ))}
      </tbody>
    </table>
  );
}
