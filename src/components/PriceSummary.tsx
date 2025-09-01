"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const priceData = [
  { month: "Jan", price: 420 },
  { month: "Feb", price: 410 },
  { month: "Mar", price: 430 },
  { month: "Apr", price: 400 },
];
export default function PriceSummary() {
  return (
    <div className="rounded-xl border border-gray-200 p-4 mt-4 w-2/3">
      <h2 className="text-lg font-semibold">Airpods Pro</h2>
      <p className="text-sm text-gray-500">Electronics • Wireless Audio</p>
      <div className="flex justify-between items-center gap-4" >
        <div className="mt-3 space-y-2 pr-10">
          <p>
            Current Price: <span className="font-bold text-gray-800">$302</span>{" "}
            <span className="text-green-500 text-sm">↓ 15.1%</span>
          </p>
          <p>
            Target Price: <span className="font-bold text-gray-800">$300</span>{" "}
            <span className="text-green-500 text-sm">Below Target</span>
          </p>
          <p>
            Discounted Price: <span className="font-bold text-gray-800">$297</span>{" "}
            <span className="text-green-500 text-sm">10% Off</span>
          </p>
        </div>
        <div className="mt-3 flex flex-col items-end w-full">
          <button className="px-8 py-1 mb-10 rounded-2xl text-white font-normal bg-gradient-to-r from-[#701CF5] to-[#108F80] hover:opacity-90 transition shadow-md">
            Add Price Alert
          </button>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={priceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#701CF5" />
            </LineChart>
          </ResponsiveContainer>
        </div>        
      </div>
    </div>
  );
}
