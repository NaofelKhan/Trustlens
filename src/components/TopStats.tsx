"use client";

import {Montserrat,Outfit} from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const montserratbold = Montserrat({ subsets: ['latin'], weight: '400' });
const outfit = Outfit({ subsets: ['latin'], weight: '400' });

type Stat = {
  label: string;
  value: string | number;
};






export default function TopStats({ title,rating,price }: { title: string, rating: number, price: number }) {
  return (
    <div className="w-full place-items-center pt-10">
      <h2 className={`pb-8 mb-4 ${outfit.className} text-3xl`}>Analysis Results for "{title}"</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-2/3 pb-6 mb-4">
          <div
            className={`rounded-xl border border-gray-300 bg-white p-4 text-center ${montserrat.className}`}>
            <p className={`text-2xl font-bold ${montserratbold.className}`}>N/A</p>
            <p className={`text-sm text-gray-600 ${montserrat.className}`}>"Total Reviews"</p>
          </div>
          <div
            className={`rounded-xl border border-gray-300 bg-white p-4 text-center ${montserrat.className}`}>
            <p className={`text-2xl font-bold ${montserratbold.className}`}>{rating}</p>
            <p className={`text-sm text-gray-600 ${montserrat.className}`}>"Average Rating"</p>
          </div>
          <div
            className={`rounded-xl border border-gray-300 bg-white p-4 text-center ${montserrat.className}`}>
            <p className={`text-2xl font-bold ${montserratbold.className}`}>{price}</p>
            <p className={`text-sm text-gray-600 ${montserrat.className}`}>"Price"</p>
          </div>
          <div
            className={`rounded-xl border border-gray-300 bg-white p-4 text-center ${montserrat.className}`}>
            <p className={`text-2xl font-bold ${montserratbold.className}`}>N/A</p>
            <p className={`text-sm text-gray-600 ${montserrat.className}`}>"Accuracy"</p>
          </div>          
      </div>
    </div>
  );
}
