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
  negative: string;
  neutral: string;
  overall_sentiment_label: string;
  overall_sentiment_score: string;
  positive: string;}


export default function SentimentAnalysis({ product }: { product: score_type }) {
  const data = [
    { name: "Positive", value: 50, color: "#108F80" },
    { name: "Neutral", value: 40, color: "#701CF5" },
    { name: "Negative", value: 10, color: "#F50057" },
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
                  <div className={`flex items-center justify-between mb-4 bg-white rounded-lg py-6 px-3 shadow-sm ${montserratbold.className}`}>
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
                  <p className="text-sm text-gray-700">Overall Sentiment Score</p>
                  <p className="text-xl font-bold text-purple-700">
                    {product.overall_sentiment_label}
                    {product.overall_sentiment_score}
                  </p>
                </div>
              </div>
          </div>
    </section>
  );
}
