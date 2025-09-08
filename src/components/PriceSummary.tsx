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



type Data ={
    product_name: string,
    price: string,
    discounted_price: string,
    brand_name: string,
    retailer_name: string,
}
export default function PriceSummary({product_name,price,discounted_price,brand_name,retailer_name}:Data) {
    const originalPrice = parseFloat(price);
    const discountedPrice = parseFloat(discounted_price);
    // Drop amount
    const dropAmount = originalPrice - discountedPrice;
    // Drop percentage (how much it dropped relative to original)
    const dropPercentage = ((dropAmount / originalPrice) * 100).toFixed(2);
    // Discount percentage (savings relative to original)
    const discountPercentage = ((1 - discountedPrice / originalPrice) * 100).toFixed(2);
  return (
    <div className="rounded-xl border border-gray-200 p-4 mt-4 w-2/3">
      <h2 className="text-lg font-semibold">{product_name}</h2>
      <p className="text-sm text-gray-500">Electronics</p>
      <p className="text-sm text-gray-500">{retailer_name}</p>
      <p className="text-sm text-gray-500">{brand_name}</p>
      <div className="flex justify-between items-center gap-4" >
        <div className="mt-3 space-y-2 pr-10">
          <p>
            Current Price: <span className="font-bold text-gray-800">{price}</span>{" "}
            <span className="text-green-500 text-sm">{`↓ $${dropAmount}`}</span>
          </p>
          <p>
            Discounted Price: <span className="font-bold text-gray-800">{discounted_price}</span>{" "}
            <span className="text-green-500 text-sm">{`↓ ${discountPercentage}%`}</span>
          </p>
        </div>
        <div className="mt-3 flex flex-col items-end w-full">
          <button className="px-8 py-1 mb-10 rounded-2xl text-white font-normal bg-gradient-to-r from-[#701CF5] to-[#108F80] hover:opacity-90 transition shadow-md">
            Close Price Alert
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
