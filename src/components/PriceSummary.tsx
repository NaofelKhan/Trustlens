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

import { useState } from "react";

type Data ={
    product_name: string,
    price: string,
    discounted_price: string,
    brand_name: string,
    retailer_name: string,
}
export default function PriceSummary({product_name,price,discounted_price,brand_name,retailer_name}:Data) {
    const [alerts, setAlerts] = useState<any[]>([]);
    const handleDeleteAlert = async (alert_id: number) => {
        const user = JSON.parse(localStorage.getItem("user") || "{}");

        const res = await fetch("/api/pricealert/delete", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            alert_id,
            user_email: user.email,
          }),
        });

        const data = await res.json();
        console.log(data);

        if (res.ok) {
          // Refresh state to remove alert from UI
          setAlerts((prev) => prev.filter((a) => a.alert_id !== alert_id));
        }
}
    const originalPrice = parseFloat(price);
    const discountedPrice = parseFloat(discounted_price);
    // Drop amount
    const dropAmount = originalPrice - discountedPrice;
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
