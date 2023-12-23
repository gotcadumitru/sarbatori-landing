import { Locales } from '@/shared/config/i18n/consts'
import { PropsWithLocale } from '@/shared/config/i18n/types'
import { FC } from 'react'
import TermsAndConditionsRO from './TermsAndConditionsRO'
import TermsAndConditionsEN from './TermsAndConditionsEN'
import TermsAndConditionsRU from './TermsAndConditionsRU'

const TermsAndConditions: FC<PropsWithLocale> = ({ params: { locale } }) => {
  if (locale === Locales.ru) return <TermsAndConditionsRU />
  if (locale === Locales.ro) return <TermsAndConditionsRO />
  return <TermsAndConditionsEN />
}
export default TermsAndConditions
