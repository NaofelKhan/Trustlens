import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";


export async function POST(req: NextRequest) {
  try {
    const { full_name, email, issue_type, subject, message } = await req.json();
    console.log({ full_name, email, issue_type, subject, message });

    if (!full_name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Full name, email, subject, and message are required" },
        { status: 400 }
      );
    }

    await pool.query(
      `INSERT INTO contact_messages (full_name, email, issue_type, subject, message) 
       VALUES ($1, $2, $3, $4, $5)`,
      [full_name, email, issue_type, subject, message]
    );

    return NextResponse.json({ message: "Message sent successfully" }, { status: 201 });
  } catch (err) {
    console.error("Error saving contact message:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
