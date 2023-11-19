/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://carmaster-landing.vercel.app',
  generateRobotsTxt: true,
}
