import { NextResponse } from "next/server"
import { getClinicData } from "@/lib/clinic-data"

// Configure for static export
export const dynamic = "force-static"

// Mock API returning site content
export async function GET() {
  const data = await getClinicData()
  return NextResponse.json(data)
}
