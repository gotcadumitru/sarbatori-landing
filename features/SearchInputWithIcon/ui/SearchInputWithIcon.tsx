import SearchIcon from '@/shared/assets/icons/SearchIcon'
import { LocaleParams } from '@/shared/config/i18n/types'
import Input from '@/shared/ui/Input'
import Modal from '@/shared/ui/Modal/Modal'
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import classes from '../styles/searchInput.module.css'

export const SearchInputWithIcon: FC<LocaleParams> = ({ locale }) => {
  console.log(locale)
  const [isDisplayed, setIsDisplayed] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isDisplayed && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isDisplayed])

  const onSearchInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className={classes.searchInput}>
      <Modal
        onClose={() => setIsDisplayed(false)}
        isOpen={isDisplayed}
        className={classes.searchModal}
      >
        <h2 className='modal__title'>Cauta sarbatori</h2>
        <div className='modal__body'>
          <Input
            className={classes.input}
            inputContainerClassName={classes.inputContainerClassName}
            value={searchValue}
            onChange={onSearchInputValueChange}
            ref={inputRef}
            placeholder='Search...'
            icons={<SearchIcon />}
          />
        </div>
      </Modal>
      <SearchIcon className={classes.searchIcon} onClick={() => setIsDisplayed(true)} />
      {/*)}*/}
    </div>
  )
}
