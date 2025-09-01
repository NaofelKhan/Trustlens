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
const data = [
  { name: "Positive", value: 60, color: "#00B200" },
  { name: "Neutral", value: 20, color: "#facc15" },
  { name: "Negative", value: 10, color: "#f87171" },
];

export default function SentimentAnalysis() {
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
            {data.map((item, i) => (
              <div key={i} className={`flex items-center justify-between mb-4 bg-white rounded-lg py-6 px-3 shadow-sm ${montserratbold.className}`}>
                {item.name}
                <span className="font-medium">{item.value}%</span>
              </div>
            ))}

            <div className={`mt-6 rounded-lg border border-purple-300 bg-purple-50 p-4 text-center ${montserrat.className}`}>
              <p className="text-sm text-gray-700">Overall Sentiment Score</p>
              <p className="text-xl font-bold text-purple-700">
                96/100 - Highly Positive
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
