"use client";

import {Montserrat,Outfit} from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const montserratbold = Montserrat({ subsets: ['latin'], weight: '400' });
const outfit = Outfit({ subsets: ['latin'], weight: '400' });

type Stat = {
  label: string;
  value: string | number;
};

const stats: Stat[] = [
  { label: "Total Reviews", value: "4,325" },
  { label: "Average Rating", value: "3.7" },
  { label: "Price Range", value: "$392 - $647" },
  { label: "Accuracy", value: "84%" },
];




export default function TopStats() {
  return (
    <div className="w-full place-items-center pt-10">
      <h2 className={`pb-8 mb-4 ${outfit.className} text-3xl`}>Analysis Results for "{}"</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-2/3 pb-6 mb-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`rounded-xl border border-gray-300 bg-white p-4 text-center ${montserrat.className}`}
          >
            <p className={`text-2xl font-bold ${montserratbold.className}`}>{stat.value}</p>
            <p className={`text-sm text-gray-600 ${montserrat.className}`}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
