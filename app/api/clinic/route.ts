import { NextResponse } from "next/server"
import { getClinicData } from "@/lib/clinic-api"

// Mock API returning site content
export async function GET() {
  const data = await getClinicData()
  return NextResponse.json(data)
}
