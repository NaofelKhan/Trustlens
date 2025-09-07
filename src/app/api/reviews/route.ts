import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    if (!query) {
      return NextResponse.json({ error: "Missing query" }, { status: 400 });
    }

    const result = await pool.query(
      `
        SELECT 
            u.username,
            r.review_title,
            r.reviews,
            p.verified_purchase
        FROM reviews r
        JOIN users u ON r.user_id = u.id
        JOIN products p ON r.product_id = p.id
        WHERE p.product_name ILIKE $1;
      `,
      [`%${query}%`]
    );

    return NextResponse.json({ reviews: result.rows }, { status: 200 });
  } catch (err) {
    console.error("Review fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
