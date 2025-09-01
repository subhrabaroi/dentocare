import { NextResponse } from "next/server"

// Configure for static export
export const dynamic = "force-static"

export async function POST(req: Request) {
  const payload = await req.json().catch(() => ({}))
  return NextResponse.json({ ok: true, received: payload }, { status: 200 })
}
