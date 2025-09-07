"use server";


import { NextResponse } from "next/server";   
import {pool} from "@/lib/db";
import { hash } from "bcryptjs";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  const { name, email, password, username } = await req.json();
  console.log({ name, email, password, username });

  if (!name || !email || !password || !username) {
       return NextResponse.json(
      { error: "Missing required fields" },
    );
  }

  try {
    // check if email or username exists
    const existingUser = await pool.query(
      "SELECT * FROM public.users WHERE email = $1 OR username = $2",
      [email, username]
    );
    if (existingUser.rows.length > 0) {
      return NextResponse.json({ error: "User already exists" });
    }
    // hash password
    const passwordHash = await hash(password, 10);

    // insert new user
    const result = await pool.query(
      `
      INSERT INTO public.users (name, email, password, username)
      VALUES ($1, $2, $3, $4)
      RETURNING id, name, email, username, created_at
      `,
      [name, email, passwordHash, username]
    );

    return NextResponse.json({
      message: "User created successfully",
      user: result.rows[0],
    })
  } catch (err) {
    console.error("DB error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
