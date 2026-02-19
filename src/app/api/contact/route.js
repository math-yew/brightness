// src/app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();

  try {
    const response = await fetch('https://api.staticforms.xyz/submit', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}