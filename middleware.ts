import { defaultLocale, locales } from '@/shared/config/i18n/config'
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|ro|ru)/:path*'],
}
