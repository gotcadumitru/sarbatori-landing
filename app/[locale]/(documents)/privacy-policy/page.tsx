import { locales, Locales } from '@/shared/config/i18n/consts'
import { PropsWithLocale } from '@/shared/config/i18n/types'
// eslint-disable-next-line camelcase
import { unstable_setRequestLocale } from 'next-intl/server'
import { FC } from 'react'
import PrivacyPolicyEN from './PrivacyPolicyEN'
import PrivacyPolicyRO from './PrivacyPolicyRO'
import PrivacyPolicyRU from './PrivacyPolicyRU'

export const generateStaticParams = () => [...locales]
const PrivacyPolicy: FC<PropsWithLocale> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale)

  if (locale === Locales.ru) return <PrivacyPolicyRU />
  if (locale === Locales.ro) return <PrivacyPolicyRO />
  return <PrivacyPolicyEN />
}
export default PrivacyPolicy
