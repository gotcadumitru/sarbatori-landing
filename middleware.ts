import { defaultLocale, locales } from '@/shared/config/i18n/consts'
import { pathnames } from '@/shared/config/i18n/pathnames'
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // localePrefix: 'as-needed',
  // Used when no locale matches
  defaultLocale,
  pathnames,
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!_next|.*\\..*).*)'],
}
