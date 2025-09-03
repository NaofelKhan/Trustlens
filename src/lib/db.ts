// src/lib/db.ts
import { Pool } from "pg";

// if (!process.env.DATABASE_URL) {
//   throw new Error("DATABASE_URL is not set in .env.local");
// }

export const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_CJl7kDwxK2He@ep-hidden-cherry-a1exx0b9-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
});

// Simple helper to run queries
export async function query(text: string, params?: any[]) {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res;
  } finally {
    client.release();
  }
}

export async function testConnection() {
  try {
    const client = await pool.connect();
    const res = await client.query("SELECT NOW()");
    client.release();
    return res.rows[0];
  } catch (err) {
    console.error("DB connection error:", err);
    throw err;
  }
}