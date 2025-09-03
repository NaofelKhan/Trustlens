import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db"; // your pg connection

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");

    if (!query) {
      return NextResponse.json({ error: "Missing search query" }, { status: 400 });
    }

    const result = await pool.query(
      `SELECT product_id, name, price, avg_rating, details
      FROM Product
      WHERE name ILIKE $1 OR details::text ILIKE $1
      LIMIT 20`,
      [`%${query}%`]
    );

    return NextResponse.json(result.rows);
  } catch (error: any) {
    console.error("Search error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

