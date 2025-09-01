"use client";
import {Montserrat,Outfit} from 'next/font/google'
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

const popularityData = [
  { month: "Jan", users: 120 },
  { month: "Feb", users: 180 },
  { month: "Mar", users: 220 },
  { month: "Apr", users: 260 },
];

const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const montserratbold = Montserrat({ subsets: ['latin'], weight: '400' });
const outfit = Outfit({ subsets: ['latin'], weight: '400' });



export default function ProductTrends() {
  return (
    <section className="flex justify-center pb-10">
      <div className="rounded-xl border border-gray-300 bg-white p-6 w-2/3">
        <h2 className={`pb-8 mb-4 ${outfit.className} text-3xl text-center`}>
          Recent Product Trends
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Price Trend */}
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={priceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#701CF5" />
          </LineChart>
        </ResponsiveContainer>

        {/* Popularity Trend */}
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={popularityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#2563eb" />
          </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
