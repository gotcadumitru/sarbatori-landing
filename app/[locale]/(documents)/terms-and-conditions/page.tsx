import { locales, Locales } from '@/shared/config/i18n/consts'
import { PropsWithLocale } from '@/shared/config/i18n/types'
import { useTranslations } from 'next-intl'
// eslint-disable-next-line camelcase
import { unstable_setRequestLocale } from 'next-intl/server'
import { FC } from 'react'
import TermsAndConditionsRO from './TermsAndConditionsRO'
import TermsAndConditionsEN from './TermsAndConditionsEN'
import TermsAndConditionsRU from './TermsAndConditionsRU'

export const generateStaticParams = () => [...locales]

const TermsAndConditions: FC<PropsWithLocale> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale)
  useTranslations('contact')

  if (locale === Locales.ru) return <TermsAndConditionsRU />
  if (locale === Locales.ro) return <TermsAndConditionsRO />
  return <TermsAndConditionsEN />
}
export default TermsAndConditions
