"use client";

import { Star } from "lucide-react";

type Comparison = {
  product_name: string;
  rating: number;
  price: number;
  discounted_price: number | null;
  retailer_name: string;
};

export default function RetailerRow({ retailer }: { retailer: Comparison }) {
  return (
    <tr className="border-b">
      <td className="p-8 font-medium">{retailer.product_name}</td>
      <td className="p-8">
        ${retailer.price}{" "}
        {/* {retailer.tag === "Best Price" && (
          <span className="ml-2 rounded bg-green-100 px-2 py-0.5 text-xs text-green-700">Best Price</span>
        )} */}
      </td>
      <td className="p-8 flex items-center gap-1">
        <Star size={14} className="text-yellow-400" />
        {retailer.rating}
        {/* {retailer.tag === "Top Rated" && (
          <span className="ml-2 rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-700">Top Rated</span>
        )} */}
      </td>
      <td className="p-8">{retailer.discounted_price}</td>
      <td className="p-8">
        {retailer.retailer_name}
        {/* <span
          className={`rounded px-2 py-0.5 text-xs ${
            retailer.stock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {retailer.stock ? "In Stock" : "Out of Stock"}
        </span> */}
      </td>
      {/* <td className="p-2">
        <a
          href={retailer.link}
          className="rounded bg-black px-3 py-1 text-xs text-white hover:bg-gray-800"
        >
          Visit Product Page
        </a>
      </td> */}
    </tr>
  );
}
