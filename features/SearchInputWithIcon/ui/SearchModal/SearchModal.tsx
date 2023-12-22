import type { SearchHolidayItem } from '@/features/SearchInputWithIcon'
import SearchIcon from '@/shared/assets/icons/SearchIcon'
import { AppParams, AppRoutes } from '@/shared/config/i18n/routes'
import Input from '@/shared/ui/Input'
import Modal from '@/shared/ui/Modal/Modal'
import NavigationLink from '@/shared/ui/NavigationLink'
import axios from 'axios'
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import classes from '../../styles/searchInput.module.css'
import type { SearchInputWithIconType } from '../SearchInputWithIcon/SearchInputWithIcon'

interface SearchModalType extends SearchInputWithIconType {
  isDisplayed: boolean
  setIsDisplayed: (isDisplayed: boolean) => void
}

export const SearchModal: FC<SearchModalType> = ({
  isDisplayed,
  locale,
  setIsDisplayed,
  title,
  placeholder,
}) => {
  const [searchValue, setSearchValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const [listOfHolidays, setListOfHolidays] = useState<SearchHolidayItem[]>([])

  useEffect(() => {
    if (isDisplayed && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isDisplayed])

  useEffect(() => {
    if (searchValue.length > 3) {
      const controller = new AbortController()
      axios
        .get<SearchHolidayItem[]>(`/${locale}/api/search-holiday?search=${searchValue}`, {
          signal: controller.signal,
        })
        .then((response) => {
          setListOfHolidays(response.data)
        })
        .catch(console.log)
      return () => controller.abort()
    }
  }, [searchValue])
  const onSearchInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <Modal
      onClose={() => setIsDisplayed(false)}
      isOpen={isDisplayed}
      className={classes.searchModal}
    >
      <h2 className='modal__title'>{title}</h2>
      <div className='modal__body'>
        <Input
          className={classes.input}
          inputContainerClassName={classes.inputContainerClassName}
          value={searchValue}
          onChange={onSearchInputValueChange}
          ref={inputRef}
          placeholder={placeholder}
          icons={<SearchIcon />}
        />
        <div>
          {listOfHolidays.map((holiday) => (
            <div key={holiday.id}>
              <NavigationLink
                href={
                  {
                    pathname: `${AppRoutes.holiday}/${AppParams.id}`,
                    params: { id: holiday.id },
                  } as any
                }
              >
                {holiday.name}
              </NavigationLink>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  )
}
