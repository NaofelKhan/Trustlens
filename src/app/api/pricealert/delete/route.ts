import { NextResponse } from "next/server";
import {pool} from "@/lib/db";

export async function DELETE(req: Request) {
  try {
    const { alert_id, user_email } = await req.json();

    if (!alert_id || !user_email) {
      return NextResponse.json({ error: "alert_id and user_email are required" }, { status: 400 });
    }

    const result = await pool.query(
      `DELETE FROM pricealerts WHERE alert_id = $1 AND user_email = $2 RETURNING *`,
      [alert_id, user_email]
    );

    if (result.rowCount === 0) {
      return NextResponse.json({ error: "Price alert not found or unauthorized" }, { status: 404 });
    }

    return NextResponse.json({ message: "✅ Price alert deleted successfully" });
  } catch (err) {
    console.error("Delete price alert error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
