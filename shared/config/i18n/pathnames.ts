// A list of all locales that are supported

import { Locales } from '@/shared/config/i18n/consts'
import { AppParams, AppRoutes } from '@/shared/config/i18n/routes'
import type { PathNamesWithLocales } from '@/shared/config/i18n/types'
import { ArchivePathnamesWithLocales } from '@/shared/config/i18n/types'
import { monthsWithNumber } from '@/shared/defaults/dates/dates'

export const pathnamePaths: Record<
  string,
  {
    [Key in Locales[number]]: string
  }
> = {
  [AppRoutes.main]: {
    [Locales.en]: AppRoutes.main,
    [Locales.ro]: AppRoutes.main,
    [Locales.ru]: AppRoutes.main,
  },
  [AppRoutes.archive]: {
    [Locales.en]: AppRoutes.archive,
    [Locales.ro]: '/arhiva',
    [Locales.ru]: '/arhiv',
  },
  [AppRoutes.holiday]: {
    [Locales.en]: AppRoutes.holiday,
    [Locales.ro]: '/sarbatoare',
    [Locales.ru]: '/prazdniki',
  },
  [AppRoutes.privacyPolicy]: {
    [Locales.en]: AppRoutes.privacyPolicy,
    [Locales.ro]: '/politica-de-confidentialitate',
    [Locales.ru]: '/politika-confidentialinosti',
  },
  [AppRoutes.termsAndConditions]: {
    [Locales.en]: AppRoutes.termsAndConditions,
    [Locales.ro]: '/termeni-si-conditii',
    [Locales.ru]: '/uslovia',
  },
  [AppRoutes.calendar]: {
    [Locales.en]: AppRoutes.calendar,
    [Locales.ro]: AppRoutes.calendar,
    [Locales.ru]: AppRoutes.calendar,
  },
  [AppRoutes.contact]: {
    [Locales.en]: AppRoutes.contact,
    [Locales.ro]: AppRoutes.contact,
    [Locales.ru]: AppRoutes.contact,
  },
  [AppRoutes.cookies]: {
    [Locales.en]: AppRoutes.cookies,
    [Locales.ro]: AppRoutes.cookies,
    [Locales.ru]: AppRoutes.cookies,
  },
}
export const archivePathnames: ArchivePathnamesWithLocales = monthsWithNumber.reduce(
  (monthsPathNames: ArchivePathnamesWithLocales, month) => ({
    ...monthsPathNames,
    [`${[AppRoutes.archive]}/${month.name[Locales.en]}/${AppParams.day}`]: {
      [Locales.en]: `${pathnamePaths[AppRoutes.archive][Locales.en]}/${month.name[Locales.en]}/${
        AppParams.day
      }`,
      [Locales.ro]: `${pathnamePaths[AppRoutes.archive][Locales.ro]}/${month.name[Locales.ro]}/${
        AppParams.day
      }`,
      [Locales.ru]: `${pathnamePaths[AppRoutes.archive][Locales.ru]}/${month.name[Locales.ru]}/${
        AppParams.day
      }`,
    },
  }),
  {} as ArchivePathnamesWithLocales,
)

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  [AppRoutes.main]: {
    [Locales.en]: pathnamePaths[AppRoutes.main][Locales.en],
    [Locales.ro]: pathnamePaths[AppRoutes.main][Locales.ro],
    [Locales.ru]: pathnamePaths[AppRoutes.main][Locales.ru],
  },

  [AppRoutes.termsAndConditions]: {
    [Locales.en]: pathnamePaths[AppRoutes.termsAndConditions][Locales.en],
    [Locales.ro]: pathnamePaths[AppRoutes.termsAndConditions][Locales.ro],
    [Locales.ru]: pathnamePaths[AppRoutes.termsAndConditions][Locales.ru],
  },
  [AppRoutes.calendar]: {
    [Locales.en]: pathnamePaths[AppRoutes.calendar][Locales.en],
    [Locales.ro]: pathnamePaths[AppRoutes.calendar][Locales.ro],
    [Locales.ru]: pathnamePaths[AppRoutes.calendar][Locales.ru],
  },
  [AppRoutes.contact]: {
    [Locales.en]: pathnamePaths[AppRoutes.contact][Locales.en],
    [Locales.ro]: pathnamePaths[AppRoutes.contact][Locales.ro],
    [Locales.ru]: pathnamePaths[AppRoutes.contact][Locales.ru],
  },
  [AppRoutes.cookies]: {
    [Locales.en]: pathnamePaths[AppRoutes.cookies][Locales.en],
    [Locales.ro]: pathnamePaths[AppRoutes.cookies][Locales.ro],
    [Locales.ru]: pathnamePaths[AppRoutes.cookies][Locales.ru],
  },
  [AppRoutes.privacyPolicy]: {
    [Locales.en]: pathnamePaths[AppRoutes.privacyPolicy][Locales.en],
    [Locales.ro]: pathnamePaths[AppRoutes.privacyPolicy][Locales.ro],
    [Locales.ru]: pathnamePaths[AppRoutes.privacyPolicy][Locales.ru],
  },
  [`${AppRoutes.holiday}/${AppParams.holidayUrl}`]: {
    [Locales.en]: `${pathnamePaths[AppRoutes.holiday][Locales.en]}/${AppParams.holidayUrl}`,
    [Locales.ro]: `${pathnamePaths[AppRoutes.holiday][Locales.ro]}/${AppParams.holidayUrl}`,
    [Locales.ru]: `${pathnamePaths[AppRoutes.holiday][Locales.ru]}/${AppParams.holidayUrl}`,
  },
  ...archivePathnames,
} satisfies PathNamesWithLocales
