"use client";

import RetailerRow, { Retailer } from "./RetailerRow";
import {Montserrat,Outfit} from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const montserratbold = Montserrat({ subsets: ['latin'], weight: '600' });
const outfit = Outfit({ subsets: ['latin'], weight: '400' });


const retailers: Retailer[] = [
  { name: "Amazon", price: 302, rating: 4.3, reviews: 12543, stock: true, link: "#", tag: "Best Price" },
  { name: "Apple Store", price: 332, rating: 4.6, reviews: 8921, stock: true, link: "#" },
  { name: "Best Buy", price: 352, rating: 4.7, reviews: 6754, stock: false, link: "#", tag: "Top Rated" },
  { name: "Walmart", price: 402, rating: 4.2, reviews: 3421, stock: true, link: "#" },
  { name: "Ebay", price: 392, rating: 4.5, reviews: 2514, stock: true, link: "#" },
];

export default function RetailerTable() {
  return (
    <table className="w-2/3 border rounded-xl overflow-hidden">
      <thead className={`bg-gray-50 backdrop-blur-xs text-left ${outfit.className}`}>
        <tr>
          <th className="py-8 px-4">Retailers</th>
          <th className="py-8 px-4">Price</th>
          <th className="py-8 px-4">Ratings</th>
          <th className="py-8 px-4">Reviews</th>
          <th className="py-8 px-4">Stock</th>
          <th className="py-8 px-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {retailers.map((r, i) => (
          <RetailerRow key={i} retailer={r} />
        ))}
      </tbody>
    </table>
  );
}
