"use client";
import {Montserrat} from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });


export default function AiInsight() {
  return (
    <div className="rounded-xl border p-4 flex justify-between mt-4 w-2/3 bg-purple-50 border-purple-200">
      <div>
        <h3 className={`font-semibold mb-2 text-center`}>AI Insight</h3>
        <p className={`p-4 ${montserrat.className}`}><strong>Best Value:</strong> Walmart offers the lowest price at $297</p>
        <p className={`p-4 ${montserrat.className}`}><strong>Quality Leader:</strong> Apple Store has the highest rating</p>
        <p className={`p-4 ${montserrat.className}`}><strong>Recommendation:</strong> Highly recommended based on reviews and pricing</p>
        <p className={`p-4 ${montserrat.className}`}><strong>Price Trend:</strong> Prices trending upward</p>
      </div>
      <div>
        <h3 className={`font-semibold mb-2 text-center`}>Features</h3>
        <ul className={`list-disc pl-5 text-md text-gray-600`}>
          <li className={`p-2 ${montserrat.className}`}>AI-driven insights</li>
          <li className={`p-2 ${montserrat.className}`}>Price tracking</li>
          <li className={`p-2 ${montserrat.className}`}>Stock monitoring</li>
        </ul>
      </div>
    </div>
  );
}
