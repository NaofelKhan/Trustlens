import { NextResponse } from "next/server";
import { pool } from "@/lib/db"; // adjust path to your db connection

// GET /api/search?query=MacBook
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    if (!query) {
      return NextResponse.json(
        { error: "Missing search query" },
        { status: 400 }
      );
    }

    const result = await pool.query(
      `
      SELECT 
        p.product_name AS product_name,
        r.name AS retailer_name,
        p.price,
        p.discounted_price
      FROM products p
      JOIN retailers r ON p.retailer_id = r.retailer_id
      WHERE p.product_name ILIKE $1
      `,
      [`%${query}%`]
    );

    return NextResponse.json({ products: result.rows }, { status: 200 });
  } catch (err) {
    console.error("Search error:", err);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
