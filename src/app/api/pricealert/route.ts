// src/app/api/price-alert/route.ts
import { NextResponse } from "next/server";
import { pool } from "@/lib/db"; // your Neon Postgres connection
import { schedulePriceCheck } from "@/lib/priceTracker";

export async function POST(req: Request) {
  try {
    const { product_id, user_email } = await req.json();
    console.log("Price Alert Request:", product_id, user_email);

    // Check if product exists in DB
    const productRes = await pool.query(
      "SELECT * FROM products WHERE id = $1",
      [product_id]
    );

    if (productRes.rows.length === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Save price alert subscription
    await pool.query(
      `INSERT INTO pricealerts (product_id, user_email, created_at) 
       VALUES ($1, $2, NOW()) 
       ON CONFLICT DO NOTHING`,
      [product_id, user_email]
    );

    // Schedule daily price check (Google AI API integration inside)
    schedulePriceCheck(product_id);

    return NextResponse.json({
      message: "Price alert set successfully",
      product: productRes.rows[0],
    });
  } catch (err) {
    console.error("❌ Price Alert Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}



export async function GET(req: Request) {
  try {
    const res = await pool.query("SELECT * FROM PriceAlerts");
    return NextResponse.json({ success: true, alerts: res.rows });
  } catch (err) {
    console.error("❌ Price Alert Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}