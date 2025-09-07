import { NextResponse } from "next/server";
import {pool} from "@/lib/db"; // adjust path to your db connection
import bcrypt from "bcryptjs";
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Missing email or password" }, { status: 400 });
    }

    // Find user by email
    const userResult = await pool.query(
      "SELECT * FROM public.users WHERE email = $1",
      [email]
    );

    if (userResult.rows.length === 0) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const user = userResult.rows[0];

    // Compare password (plain text for now, use bcrypt in production)
    if (!bcrypt.compareSync(password, user.password)) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // Success – return user info (excluding password)
    return NextResponse.json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
