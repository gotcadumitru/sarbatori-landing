/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.sarbatori.net',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: './public',
  alternateRefs: [
    {
      href: `${process.env.SITE_URL}/en`,
      hreflang: 'en',
    },
    {
      href: `${process.env.SITE_URL}/ro`,
      hreflang: 'ro',
    },
    {
      href: `${process.env.SITE_URL}/ru`,
      hreflang: 'ru',
    },
  ],
}
