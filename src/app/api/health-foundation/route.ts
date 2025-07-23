import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: 'foundation-1.0',
    message: 'aiKODA Foundation is running solid!'
  })
}