// A list of all locales that are supported

import { Locales } from '@/shared/config/i18n/consts'
import { AppRoutes } from '@/shared/config/i18n/routes'
import type { PathNamesWithLocales } from '@/shared/config/i18n/types'
import { monthsWithNumber } from '@/shared/defaults/dates/dates'

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.

const archivePathnames: PathNamesWithLocales = monthsWithNumber.reduce(
  (monthsPathNames: PathNamesWithLocales, month) => ({
    ...monthsPathNames,
    [`${[AppRoutes.archive]}/${month.name[Locales.en]}/[day]`]: {
      en: `${[AppRoutes.archive]}/${month.name[Locales.en]}/[day]`,
      ro: `/arhiva/${month.name[Locales.ro]}/[day]`,
      ru: `/arhiv/${month.name[Locales.ru]}/[day]`,
    },
  }),
  {} as PathNamesWithLocales,
)
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  [AppRoutes.main]: AppRoutes.main,

  // If locales use different paths, you can
  // specify each external path per locale.
  [AppRoutes.terms_and_conditions]: {
    [Locales.en]: AppRoutes.terms_and_conditions,
    [Locales.ro]: '/termeni-si-conditii',
    [Locales.ru]: '/uslovia',
  },
  [AppRoutes.calendar]: AppRoutes.calendar,
  [AppRoutes.contact]: AppRoutes.contact,
  [AppRoutes.cookies]: AppRoutes.cookies,
  [AppRoutes.privacyPolicy]: {
    [Locales.en]: AppRoutes.privacyPolicy,
    [Locales.ro]: '/politica-de-confidentialitate',
    [Locales.ru]: '/politika-confidentialinosti',
  },
  [`${AppRoutes.holiday}/[id]`]: {
    [Locales.en]: `${AppRoutes.holiday}/[id]`,
    [Locales.ro]: '/sarbatoare/[id]',
    [Locales.ru]: '/prazdniki/[id]',
  },
  // // Dynamic params are supported via square brackets
  // '/news/[articleSlug]-[articleId]': {
  //   en: '/news/[articleSlug]-[articleId]',
  //   de: '/neuigkeiten/[articleSlug]-[articleId]',
  // },
  //
  // // Also (optional) catch-all segments are supported
  // '/categories/[...slug]': {
  //   en: '/categories/[...slug]',
  //   de: '/kategorien/[...slug]',
  // },
  ...archivePathnames,
} satisfies PathNamesWithLocales
