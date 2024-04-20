import { locales, Locales } from '@/shared/config/i18n/consts'
import { PropsWithLocale } from '@/shared/config/i18n/types'
import { FC } from 'react'
import CookiesEN from './CookiesEN'
import CookiesRO from './CookiesRO'
import CookiesRU from './CookiesRU'

export const generateStaticParams = () => [...locales]
const Cookies: FC<PropsWithLocale> = ({ params: { locale } }) => {
  if (locale === Locales.ru) return <CookiesRU />
  if (locale === Locales.ro) return <CookiesRO />
  return <CookiesEN />
}
export default Cookies
