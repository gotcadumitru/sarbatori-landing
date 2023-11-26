import { useTranslations } from 'next-intl'
import { Header } from './Header'

const urls = [
  {
    i18nKey: 'holidaysToday',
    href: '/',
  },
  {
    i18nKey: 'calendar',
    href: '/calendar',
  },
  {
    i18nKey: 'contact',
    href: '/contact',
  },
  {
    i18nKey: 'privacyPolicy',
    href: '/politica-de-confidentialitate',
  },
  {
    i18nKey: 'cookies',
    href: '/cookies',
  },
  {
    i18nKey: 'termsAndConditions',
    href: '/termeni-si-conditii',
  },
]
export const HeaderEntry = () => {
  const t = useTranslations('header')
  const urlsTranslated = urls.map((url) => ({
    text: t(url.i18nKey),
    href: url.href,
  }))
  return <Header urls={urlsTranslated} />
}
