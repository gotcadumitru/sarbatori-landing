import { searchHolidays } from '@/enteties/holiday'
import { PropsWithLocale } from '@/shared/config/i18n/types'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest, context: PropsWithLocale) {
  const searchValue = req.nextUrl.searchParams.get('search')
  if (!searchValue) return new Response(JSON.stringify([]))
  const holidays = searchHolidays(searchValue, context.params.locale)
  return new Response(JSON.stringify(holidays))
}
