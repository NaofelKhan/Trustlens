// app/api/add-review/route.ts
import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { product_name, user_id, username, review_title, review } = await req.json();

    if (!product_name || !user_id || !username || !review_title || !review) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Step 1: Get product_id by product_name
    const productResult = await pool.query(
      "SELECT id FROM products WHERE product_name ILIKE $1 LIMIT 1;",
      [`%${product_name}%`]
    );

    if (productResult.rows.length === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const product_id = productResult.rows[0].id;

    // Step 2: Insert into reviews table
    await pool.query(
      `INSERT INTO reviews (product_id, user_id, username, review_title, reviews) 
       VALUES ($1, $2, $3, $4, $5)`,
      [product_id, user_id, username, review_title, review]
    );

    return NextResponse.json({ message: "Review added successfully" }, { status: 201 });
  } catch (err) {
    console.error("Error inserting review:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
