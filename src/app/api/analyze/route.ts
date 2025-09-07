import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db"; // your pg connection
import { analyzeSentiment } from "@/lib/action"; // your analyze function

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");

    if (!query) {
      return NextResponse.json({ error: "Missing search query" }, { status: 400 });
    }

    const result = await pool.query(
      `SELECT p.id, p.product_name, p.price, p.rating, p.details, p.description, p.features, r.reviews
      FROM products as p, reviews as r
      WHERE p.product_name ILIKE $1
      AND p.id = r.product_id
      LIMIT 20`,
      [`%${query}%`]
    ); // 👀 test in console
    
    
    const rev = result.rows.map(p => ({ id: p.id, review: p.reviews }));
    const sentiments = await analyzeSentiment(rev[0].review);
    if (sentiments) {
      const cleanedString = sentiments.replace(/```json|```/g, "").trim();
      const sentimentObj = JSON.parse(cleanedString);    
      const final_result = result.rows[0];
      final_result.sentiments = sentimentObj;
      return NextResponse.json(final_result);
    } else {
      console.error("Error: sentiments is undefined");
      return NextResponse.json({ error: "Sentiment analysis failed Because of the token limit" }, { status: 500 });
    }
  } catch (error: any) {
    console.error("Search error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

