// A list of all locales that are supported

import { Locales } from '@/shared/config/i18n/consts'
import { AppParams, AppRoutes } from '@/shared/config/i18n/routes'
import type { PathNamesWithLocales } from '@/shared/config/i18n/types'
import { ArchivePathnamesWithLocales } from '@/shared/config/i18n/types'
import { monthsWithNumber } from '@/shared/defaults/dates/dates'

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.

export const archivePathnames: ArchivePathnamesWithLocales = monthsWithNumber.reduce(
  (monthsPathNames: ArchivePathnamesWithLocales, month) => ({
    ...monthsPathNames,
    [`${[AppRoutes.archive]}/${month.name[Locales.en]}/${AppParams.day}`]: {
      en: `${[AppRoutes.archive]}/${month.name[Locales.en]}/${AppParams.day}`,
      ro: `/arhiva/${month.name[Locales.ro]}/${AppParams.day}`,
      ru: `/arhiv/${month.name[Locales.ru]}/${AppParams.day}`,
    },
  }),
  {} as ArchivePathnamesWithLocales,
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
  [`${AppRoutes.holiday}/${AppParams.id}`]: {
    [Locales.en]: `${AppRoutes.holiday}/${AppParams.id}`,
    [Locales.ro]: `/sarbatoare/${AppParams.id}`,
    [Locales.ru]: `/prazdniki/${AppParams.id}`,
  },
  ...archivePathnames,
} satisfies PathNamesWithLocales
