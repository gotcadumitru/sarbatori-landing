import SearchInputWithIcon from '@/features/SearchInputWithIcon'
import { LocaleParams } from '@/shared/config/i18n/types'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { Header } from './Header'
import { headerUrls } from './HeaderConsts'

export const HeaderEntry: FC<LocaleParams> = ({ locale }) => {
  const t = useTranslations('header')
  const urlsTranslated = headerUrls.map((url) => ({
    text: t(url.i18nKey as any),
    href: url.href,
  }))
  return <Header urls={urlsTranslated} searchInput={<SearchInputWithIcon locale={locale} />} />
}
