import { searchHolidays } from '@/enteties/holiday'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const searchValue = req.nextUrl.searchParams.get('search')
  if (!searchValue) return new Response(JSON.stringify([]))
  const holidays = searchHolidays(searchValue)
  return new Response(JSON.stringify(holidays))
}
