import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    app: "aquarela60",
    timestamp: new Date().toISOString(),
  });
}
