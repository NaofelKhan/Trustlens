import { NextRequest, NextResponse } from "next/server";
import { searchProduct } from "@/lib/searchProduct";


export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q"); // ?
  if (!query) {
    return NextResponse.json({ error: "Missing query parameter" }, { status: 400 });
  }

  const results = await searchProduct(query);
  return NextResponse.json(results);
}