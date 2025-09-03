import { NextResponse } from "next/server";
import fs from "fs";
import csv from "csv-parser";
import { pool } from "@/lib/db";

interface CsvRow {
  asin: string;
  category: string;
  price: string;
  name: string;
  avg_rating: string;
  review_count: string;
  features: string;
  description: string;
  details: string;
}

async function insertRow(row: CsvRow) {
  try {
    // Parse brand from details JSON
    let brandName = "Unknown";
    try {
      const parsedDetails = JSON.parse(row.details || "{}");
      brandName = parsedDetails.Brand || "Unknown";
    } catch {
      console.warn("⚠️ Invalid JSON in details:", row.details);
    }

    // Insert Brand
    const brandRes = await pool.query(
      `INSERT INTO Brand (name)
       VALUES ($1)
       ON CONFLICT (name) DO UPDATE SET name=EXCLUDED.name
       RETURNING brand_id;`,
      [brandName]
    );
    const brandId = brandRes.rows[0].brand_id;

    // Insert Category
    const categoryRes = await pool.query(
      `INSERT INTO Category (name)
       VALUES ($1)
       ON CONFLICT (name) DO UPDATE SET name=EXCLUDED.name
       RETURNING category_id;`,
      [row.category || "Misc"]
    );
    const categoryId = categoryRes.rows[0].category_id;

    // Insert Product
    await pool.query(
      `INSERT INTO Product (name, brand_id, category_id, price, avg_rating, features, description, details)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8::jsonb)
       ON CONFLICT (name) DO NOTHING;`,
      [
        row.name,
        brandId,
        categoryId,
        row.price ? parseFloat(row.price) : null,
        row.avg_rating ? parseFloat(row.avg_rating) : null,
        row.features,
        row.description,
        row.details || "{}",
      ]
    );
  } catch (err) {
    console.error("❌ Insert error:", err);
  }
}

export async function GET() {
  return new Promise((resolve, reject) => {
    fs.createReadStream("E:\\5 projects\\Trustlens\\Docs\\datasets\\reviews_clean.csv")
      .pipe(csv())
      .on("data", async (row: CsvRow) => {
        await insertRow(row);
      })
      .on("end", async () => {
        console.log("✅ CSV data inserted successfully!");
        resolve(NextResponse.json({ message: "CSV imported" }));
      })
      .on("error", (err) => {
        console.error(err);
        reject(NextResponse.json({ error: err.message }, { status: 500 }));
      });
  });
}