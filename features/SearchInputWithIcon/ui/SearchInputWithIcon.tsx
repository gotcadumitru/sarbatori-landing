import SearchIcon from '@/shared/assets/icons/SearchIcon'
import { LocaleParams } from '@/shared/config/i18n/types'
import Input from '@/shared/ui/Input'
import { FC, useEffect, useRef, useState } from 'react'

export const SearchInputWithIcon: FC<LocaleParams> = ({ locale }) => {
  console.log(locale)
  const [isDisplayed, setIsDisplayed] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isDisplayed && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isDisplayed])
  return (
    <div>
      {isDisplayed ? (
        <Input onBlur={() => setIsDisplayed(false)} ref={inputRef} />
      ) : (
        <SearchIcon onClick={() => setIsDisplayed(true)} />
      )}
    </div>
  )
}
