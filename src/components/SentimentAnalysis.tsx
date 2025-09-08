"use client";


import {Montserrat,Outfit} from 'next/font/google'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const montserratbold = Montserrat({ subsets: ['latin'], weight: '500' });
const outfit = Outfit({ subsets: ['latin'], weight: '400' });
type score_type = {
  negative: string |undefined;
  neutral: string |undefined;
  overall_sentiment_label: string |undefined;
  overall_sentiment_score: string |undefined;
  positive: string |undefined;}


export default function SentimentAnalysis({ product }: { product: score_type }) {
  const data = [
    { name: "Positive", value: product.positive, color: "#78C841" },
    { name: "Neutral", value: product.neutral, color: "#FF9B2F" },
    { name: "Negative", value: product.negative, color: "#FB4141" },
  ];
  return (
    <section className="flex justify-center pb-10 mt-10">
      <div className="place-items-center w-full pb-10">
        <h2 className={`pb-8 mb-4 ${outfit.className} text-3xl`}>Sentiment Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-xl border border-gray-300 bg-white p-6 w-2/3">
          {/* Donut chart */}
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={150}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              {/* Legend + score */}
              <div>
                  <div className={`flex items-center justify-between mb-4 rounded-lg py-6 px-3 shadow-sm ${montserratbold.className}`}>
                    <span className="font-medium">Positive</span>
                    <span className="font-medium">{product.positive}</span>
                  </div>
                  <div className={`flex items-center justify-between mb-4 bg-white rounded-lg py-6 px-3 shadow-sm ${montserratbold.className}`}>
                    <span className="font-medium">Neutral</span>
                    <span className="font-medium">{product.neutral}</span>
                  </div>
                  <div className={`flex items-center justify-between mb-4 bg-white rounded-lg py-6 px-3 shadow-sm ${montserratbold.className}`}>
                    <span className="font-medium">Negative</span>
                    <span className="font-medium">{product.negative}</span>
                  </div>
                  <div className={`flex flex-col justify-between mb-4 bg-purple-50 border-1 border-purple-200 rounded-lg py-6 px-3 ${montserratbold.className}`}>
                    <p className="text-sm text-gray-700">Overall Sentiment Score</p>
                    <div className='flex justify-between'>
                      <p className="text-xl font-bold text-purple-700">
                        {product.overall_sentiment_label}
                      </p>
                      <p className="text-xl font-bold text-purple-700">
                        {`${product.overall_sentiment_score}%`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
    </section>
  );
}
