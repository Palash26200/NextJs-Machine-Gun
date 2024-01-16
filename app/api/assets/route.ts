import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
  return NextResponse.json({ message: 'It is really a headache' }, { status: 200 })
}