import { getAllHolidays, Holiday } from '@/enteties/holiday'
import { Locales } from '@/shared/config/i18n/consts'
import { pathnamePaths } from '@/shared/config/i18n/pathnames'
import { AppRoutes } from '@/shared/config/i18n/routes'
import { headerUrls } from '@/widgets/Header/HeaderConsts'
import { getServerSideSitemap } from 'next-sitemap'
import { ISitemapField } from 'next-sitemap/dist/@types/interface'

const getHolidayUrl = (locale: Locales, id: Holiday['id']) =>
  `${process.env.SITE_URL}${locale}${pathnamePaths[AppRoutes.holiday][locale]}/${id}`

const getHeaderUrl = (locale: Locales, pathname: string) =>
  `${process.env.SITE_URL}${locale}${pathnamePaths[pathname][locale]}`

export async function GET() {
  const sitemapItems: ISitemapField[] = []
  const holidaysPage = getAllHolidays().map(
    (holiday): ISitemapField => ({
      loc: getHolidayUrl(Locales.en, holiday.id),
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: getHolidayUrl(Locales.ro, holiday.id),
          hreflang: Locales.ro,
        },
        {
          href: getHolidayUrl(Locales.ru, holiday.id),
          hreflang: Locales.ru,
        },
      ],
    }),
  )
  sitemapItems.push(...holidaysPage)

  sitemapItems.push({
    loc: AppRoutes.main,
    lastmod: new Date().toISOString(),
  })

  sitemapItems.push({
    loc: `${AppRoutes.main}${Locales.en}`,
    lastmod: new Date().toISOString(),
    alternateRefs: [
      {
        href: `${AppRoutes.main}${Locales.ro}`,
        hreflang: Locales.ro,
      },
      {
        href: `${AppRoutes.main}${Locales.ru}`,
        hreflang: Locales.ru,
      },
    ],
  })

  sitemapItems.push({
    loc: `/${Locales.en}${AppRoutes.calendar}`,
    lastmod: new Date().toISOString(),
    alternateRefs: [
      {
        href: `/${Locales.ro}${AppRoutes.calendar}`,
        hreflang: Locales.ro,
      },
      {
        href: `/${Locales.ru}${AppRoutes.calendar}`,
        hreflang: Locales.ru,
      },
    ],
  })

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


  // sitemap for https://localhost:3000/en/archive/february/26
  // const headerUrlsForSitemap = headerUrls.map((url) => ({
  //   loc: getHeaderUrl(Locales.en, url.href),
  //   lastmod: new Date().toISOString(),
  //   alternateRefs: [
  //     {
  //       href: getHeaderUrl(Locales.ro, url.href),
  //       hreflang: Locales.ro,
  //     },
  //     {
  //       href: getHeaderUrl(Locales.ru, url.href),
  //       hreflang: Locales.ru,
  //     },
  //   ],
  // }))
  // sitemapItems.push(...headerUrlsForSitemap)


  return getServerSideSitemap(sitemapItems)
}
