import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

// GET /api/compare?query=MacBook
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");
    console.log(query);
    if (!query) {
      return NextResponse.json({ error: "Missing query" }, { status: 400 });
    }

    const result = await pool.query(
      `
      SELECT 
        p.product_name,
        p.rating,
        p.price,
        p.discounted_price,
        r.name AS retailer_name
      FROM products as p
      JOIN retailers as r ON p.retailer_id = r.retailer_id
      WHERE p.product_name ILIKE $1
      `,
      [`%${query}%`]
    );

    return NextResponse.json({ comparisons: result.rows }, { status: 200 });
  } catch (err) {
    console.error("Compare fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch comparison data" },
      { status: 500 }
    );
  }
}
