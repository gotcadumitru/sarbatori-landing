// A list of all locales that are supported

import { locales } from '@/shared/config/i18n/consts'
import { AppRoutes } from '@/shared/config/i18n/routes'
import { Pathnames } from 'next-intl/navigation'

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.

export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  [AppRoutes.main]: AppRoutes.main,

  // If locales use different paths, you can
  // specify each external path per locale.
  [AppRoutes.terms_and_conditions]: {
    en: AppRoutes.terms_and_conditions,
    ro: '/termeni-si-conditii',
    ru: '/uslovia',
  },
  [AppRoutes.calendar]: AppRoutes.calendar,
  [AppRoutes.contact]: AppRoutes.contact,
  [AppRoutes.cookies]: AppRoutes.cookies,
  [AppRoutes.privacyPolicy]: {
    en: AppRoutes.privacyPolicy,
    ro: '/politica-de-confidentialitate',
    ru: '/politika-confidentialinosti',
  },
  [AppRoutes.archive]: {
    en: AppRoutes.archive,
    ro: '/arhiva',
    ru: '/arhiv',
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
} satisfies Pathnames<typeof locales>
