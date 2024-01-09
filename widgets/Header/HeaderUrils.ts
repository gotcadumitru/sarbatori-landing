import { AppRoutes } from '@/shared/config/i18n/routes'

export const checkIsRouteWithSearchInput = (pathname: string): boolean => {
  if (pathname === AppRoutes.main) return true

  return !![AppRoutes.archive, AppRoutes.calendar, AppRoutes.holiday].find((route) =>
    pathname.startsWith(route),
  )
}
