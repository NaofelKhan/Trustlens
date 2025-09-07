// src/lib/priceTracker.ts
import cron from "node-cron";
import { pool } from "./db";

export function schedulePriceCheck(product_id: string) {
  // Run every 24 hours (midnight)
  cron.schedule("0 0 * * *", async () => {
    console.log(`🔍 Checking price for product ${product_id}`);

    // Get product details
    const res = await pool.query("SELECT * FROM Product WHERE parent_asin = $1", [product_id]);
    const product = res.rows[0];

    if (!product) return;

    // TODO: Replace this with Google AI Studio API
    const aiPrice = await mockGoogleAIPriceCheck(product.title);

    console.log(`✅ New price for ${product.title}: $${aiPrice}`);
    
    // Save to DB (optional: keep a price history table)
    await pool.query(
      "INSERT INTO PriceHistory (product_id, price, checked_at) VALUES ($1, $2, NOW())",
      [product_id, aiPrice]
    );
  });
}

// Mock Google AI call (replace later with real fetch)
async function mockGoogleAIPriceCheck(query: string): Promise<number> {
  // simulate AI response
  return (Math.random() * 100 + 20).toFixed(2) as unknown as number;
}
