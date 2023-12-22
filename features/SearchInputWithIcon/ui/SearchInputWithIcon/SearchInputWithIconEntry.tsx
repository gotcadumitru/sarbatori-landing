// 'use server'

import { LocaleParams } from '@/shared/config/i18n/types'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { SearchInputWithIcon } from './SearchInputWithIcon'

export const SearchInputWithIconEntry: FC<LocaleParams> = (props) => {
  const t = useTranslations('header')
  return (
    <SearchInputWithIcon title={t('searchTitle')} placeholder={t('searchPlaceholder')} {...props} />
  )
}
