"use client";
import {Montserrat,Outfit} from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const montserratbold = Montserrat({ subsets: ['latin'], weight: '600' });
const outfit = Outfit({ subsets: ['latin'], weight: '400' });


type Retailer = {
  name: string;
  price: string;
};

const retailers: Retailer[] = [
  { name: "Amazon", price: "$302" },
  { name: "BestBuy", price: "$322" },
  { name: "Walmart", price: "$361" },
];

export default function PriceComparison() {
  return (
    <section className="flex justify-center pb-10">
      <div className="rounded-xl border border-gray-300 bg-white p-6 w-2/3">
        <h2 className={`pb-8 mb-4 ${outfit.className} text-3xl text-center`}>
          Price Comparison
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {retailers.map((retailer, i) => (
            <div key={i} className="rounded-lg border border-gray-300 px-12 py-4 text-center w-full">
              <p className={`text-sm text-gray-600 ${montserrat.className}`}>{retailer.name}</p>
              <p className={`text-xl font-bold text-gray-900 ${montserratbold.className}`}>{retailer.price}</p>
            </div>
          ))}
      </div>
    </div>
  </section>
  )
}
