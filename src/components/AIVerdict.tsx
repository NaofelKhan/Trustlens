import VerdictCard from "./VerdictCard";
import {Montserrat,Outfit} from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const montserratbold = Montserrat({ subsets: ['latin'], weight: '600' });
const outfit = Outfit({ subsets: ['latin'], weight: '400' });



export default function AIVerdict() {
  return (
    <section className="flex justify-center pb-10">
      <div className="my-12 p-6 rounded-2xl border border-gray-300 bg-white shadow-sm w-2/3">
        <h2 className={`pb-8 mb-4 ${outfit.className} text-3xl text-center`}>AI Verdict</h2>

        <div className="grid md:grid-cols-3 gap-2 mb-8 place-items-center">
          <VerdictCard
            title="Key Insights"
            items={["Excellent build quality", "User-friendly design", "Possible choice in this category"]}
          />
          <VerdictCard
            title="Positive Concerns"
            items={["High build quality", "Good value for money"]}
            type="positive"
          />
          <VerdictCard
            title="Negative Concerns"
            items={["Price fluctuations", "Customer service could be better"]}
            type="negative"
          />
        </div>

        <div className="text-center">
          <p className={`font-medium ${montserratbold.className} text-lg`}>
            Final Recommendation: Based on the analysis, this product is{" "}
            <span className="text-green-600 font-semibold">highly recommended.</span>
          </p>
          <div className="flex justify-center gap-4 mt-4">
          <button className="px-16 py-3 rounded-md text-white font-normal bg-gradient-to-r from-[#701CF5] to-[#108F80] hover:opacity-90 transition shadow-md">
            Search Another Product
          </button>

          {/* Outline button */}
          <button className="px-16 py-3 rounded-md font-normal border border-purple-600 text-black hover:bg-purple-50 transition">
            Compare Product With Others
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}
