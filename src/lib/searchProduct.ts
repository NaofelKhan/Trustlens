// src/lib/searchProduct.ts
import { pool } from "./db";

export async function searchProduct(query: string): Promise<{ product_id: string; title: string } | null> {
  try {
    const res = await pool.query(
      `SELECT id AS product_id, product_name
       FROM products 
       WHERE product_name ILIKE $1
       LIMIT 1`,
      [`%${query}%`]
    );

    if (res.rows.length === 0) {
      return null;
    }

    return res.rows[0];
  } catch (err) {
    console.error("❌ Error searching product:", err);
    throw new Error("Database search failed");
  }
}
