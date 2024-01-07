/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.sarbatori.net',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: './public',
  exclude: ['/server-sitemap-index.xml'], // <= exclude here
  robotsTxtOptions:{
    additionalSitemaps:[
        `${process.env.SITE_URL}server-sitemap-index.xml`
    ]
  }

}
