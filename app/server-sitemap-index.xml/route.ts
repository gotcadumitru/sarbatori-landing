import {
  getAllHolidays,
  getHolidaysWithDate,
  getMonthNameByMonthNumber,
  Holiday,
} from '@/enteties/holiday'
import { Locales } from '@/shared/config/i18n/consts'
import { pathnamePaths } from '@/shared/config/i18n/pathnames'
import { AppRoutes } from '@/shared/config/i18n/routes'
import { headerUrls } from '@/widgets/Header/HeaderConsts'
import { getServerSideSitemap } from 'next-sitemap'
import { ISitemapField } from 'next-sitemap/dist/@types/interface'

const getHolidayUrl = (locale: Locales, url: Holiday['url']) =>
  `${process.env.SITE_URL}${locale}${pathnamePaths[AppRoutes.holiday][locale]}/${url}`

const getHeaderUrl = (locale: Locales, pathname: string) =>
  `${process.env.SITE_URL}${locale}${pathnamePaths[pathname][locale]}`

// https://localhost:3000/en/archive/february/26
const getArchiveUrl = (locale: Locales, month: string, day: string) =>
  `${process.env.SITE_URL}${locale}${pathnamePaths[AppRoutes.archive][locale]}/${
    getMonthNameByMonthNumber(month, locale).monthNameForUrlUse
  }/${day}`

export async function GET() {
  const sitemapItems: ISitemapField[] = []
  const holidaysPage = getAllHolidays().map(
    (holiday): ISitemapField => ({
      loc: getHolidayUrl(Locales.en, holiday.urlen),
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: getHolidayUrl(Locales.ro, holiday.urlro),
          hreflang: Locales.ro,
        },
        {
          href: getHolidayUrl(Locales.ru, holiday.urlru),
          hreflang: Locales.ru,
        },
      ],
    }),
  )
  sitemapItems.push(...holidaysPage)

  const headerUrlsForSitemap = headerUrls.map((url) => ({
    loc: getHeaderUrl(Locales.en, url.href),
    lastmod: new Date().toISOString(),
    alternateRefs: [
      {
        href: getHeaderUrl(Locales.ro, url.href),
        hreflang: Locales.ro,
      },
      {
        href: getHeaderUrl(Locales.ru, url.href),
        hreflang: Locales.ru,
      },
    ],
  }))
  sitemapItems.push(...headerUrlsForSitemap)

  const archiveSitemap = getHolidaysWithDate().map((holidayWithDate) => ({
    loc: getArchiveUrl(Locales.en, holidayWithDate.date.month, holidayWithDate.date.day),
    lastmod: new Date().toISOString(),
    alternateRefs: [
      {
        href: getArchiveUrl(Locales.ro, holidayWithDate.date.month, holidayWithDate.date.day),
        hreflang: Locales.ro,
      },
      {
        href: getArchiveUrl(Locales.ru, holidayWithDate.date.month, holidayWithDate.date.day),
        hreflang: Locales.ru,
      },
    ],
  }))
  sitemapItems.push(...archiveSitemap)

  return getServerSideSitemap(sitemapItems)
}
