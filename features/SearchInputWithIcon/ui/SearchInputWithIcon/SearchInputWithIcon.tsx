'use client'

import SearchIcon from '@/shared/assets/icons/SearchIcon'
import { LocaleParams } from '@/shared/config/i18n/types'
import { FC, useState } from 'react'
import classes from '../../styles/searchInput.module.css'
import { SearchModal } from '../SearchModal/SearchModal'

export interface SearchInputWithIconType extends LocaleParams {
  title: string
  placeholder: string
}

export const SearchInputWithIcon: FC<SearchInputWithIconType> = (props) => {
  const [isDisplayed, setIsDisplayed] = useState(false)

  return (
    <div className={classes.searchInput}>
      <SearchModal {...props} isDisplayed={isDisplayed} setIsDisplayed={setIsDisplayed} />
      <SearchIcon className={classes.searchIcon} onClick={() => setIsDisplayed(true)} />
    </div>
  )
}
