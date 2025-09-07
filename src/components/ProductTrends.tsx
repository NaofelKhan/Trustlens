"use client";
import {Montserrat,Outfit} from 'next/font/google'


const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const montserratbold = Montserrat({ subsets: ['latin'], weight: '400' });
const outfit = Outfit({ subsets: ['latin'], weight: '400' });



export default function ProductTrends({ features, descriptions }: { features: string; descriptions: string }) {
  return (
    <section className="flex justify-center pb-10">
      <div className="rounded-xl border border-gray-300 bg-white p-6 w-2/3">
        <h2 className={`pb-8 mb-4 ${outfit.className} text-3xl text-center`}>
          Product Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className={`text-lg font-semibold mb-2 ${montserratbold.className}`}>Features</h3>
            <p className={`text-sm text-gray-500 mb-4 ${montserrat.className}`}>
              {features || "No features available."}
            </p>
          </div>
          <div>
            <h3 className={`text-lg font-semibold mb-2 ${montserratbold.className}`}>Descriptions</h3>
            <p className={`text-sm text-gray-500 mb-4 ${montserrat.className}`}>
              {descriptions || "No description available."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
