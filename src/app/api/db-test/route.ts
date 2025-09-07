// app/api/db-test/route.ts
import { NextResponse } from "next/server";
import {testConnection} from "@/lib/db";


export async function GET() {
  try {
    const result = await testConnection();
    return NextResponse.json({ success: true, time: result });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Database connection failed" },
      { status: 500 }
    );
  }
}
