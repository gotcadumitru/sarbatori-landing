'use client'

import useOnClickOutside from '@/shared/lib/hooks/useOnClickOutside'
import useWindowSize from '@/shared/lib/hooks/useWindowSize'
import compareTwoStrings from '@/shared/lib/utils/compareTwoStrings'
import isScrolledIntoView from '@/shared/lib/utils/isScrolledIntoView'
import Input, { OnChangeMinType } from '@/shared/ui/Input'
import classNames from 'classnames'
import { FC, useEffect, useRef, useState } from 'react'
import Highlighter from 'react-highlight-words'
import './autosuggest.scss'
import type { AutosuggestPropsType } from './autosuggest.types'

const Autosuggestion: FC<AutosuggestPropsType> = ({
  options,
  name = '',
  onChange,
  label,
  value = '',
  className,
  ...props
}) => {
  const [isAutosuggestionPopupShow, setIsAutosuggestionPopupShow] = useState(false)
  const { height } = useWindowSize()
  const [inputValue, setInputValue] = useState(value)
  const inputTimeRef = useRef<HTMLInputElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(popupRef, () => setIsAutosuggestionPopupShow(false))
  const updatePopupPosition = () => {
    if (!inputTimeRef.current || !popupRef.current) return
    if (isScrolledIntoView(inputTimeRef.current)) {
      const inputRect = inputTimeRef.current.getBoundingClientRect()
      const popupRect = popupRef.current.getBoundingClientRect()

      popupRef.current.style.top = `${inputRect.y + 30}px`
      popupRef.current.style.left = `${inputRect.x}px`
      popupRef.current.style.width = `${inputRect.width}px`
      if (height - inputRect.bottom < 250) {
        popupRef.current.style.top = `${inputRect.y - popupRect.height}px`
      }
    } else {
      setIsAutosuggestionPopupShow(false)
    }
  }

  useEffect(() => {
    if (isAutosuggestionPopupShow) {
      updatePopupPosition()
      document.addEventListener('scroll', updatePopupPosition, true)
      return () => {
        document.removeEventListener('scroll', updatePopupPosition, true)
      }
    }
  }, [isAutosuggestionPopupShow])

  useEffect(updatePopupPosition, [inputValue])

  const getSuggestions = () =>
    [...options]
      .map((option) => ({
        label: option,
        similarityProcentage: compareTwoStrings(inputValue, option),
      }))
      .sort((option1, option2) => option2.similarityProcentage - option1.similarityProcentage)
      .filter((option, index) => option.similarityProcentage && index < 8)
      .map((option) => option.label)

  const onInputChangeInsideAutosuggest = (e: OnChangeMinType<string>) => {
    const inputValueOnChange = e.target.value.toString()
    setInputValue(inputValueOnChange)
    onChange?.(e)
    setIsAutosuggestionPopupShow(!!inputValueOnChange.length)
  }

  const onOptionClick = (suggestion: string) => {
    onInputChangeInsideAutosuggest({ target: { name, value: suggestion } })
    setIsAutosuggestionPopupShow(false)
  }

  const suggestions = getSuggestions()
  const autosuggestClassName = classNames('autosuggest', className)
  const onAutosuggestFocus = () => {
    if (inputValue.length) setIsAutosuggestionPopupShow(true)
  }
  return (
    <div className={autosuggestClassName}>
      <Input
        autoComplete='off'
        ref={inputTimeRef}
        onFocus={onAutosuggestFocus}
        name={name}
        label={label}
        value={inputValue}
        onChange={onInputChangeInsideAutosuggest}
        {...props}
      />
      {isAutosuggestionPopupShow && (
        <div ref={popupRef} className='autosuggest__popup'>
          {suggestions.length
            ? suggestions.map((suggestion) => (
                <div
                  className='autosuggest__option'
                  key={suggestion}
                  onClick={() => onOptionClick(suggestion)}
                >
                  <Highlighter
                    highlightClassName='autosuggest__suggestion-match'
                    searchWords={inputValue.split('')}
                    autoEscape
                    textToHighlight={suggestion}
                  />
                </div>
              ))
            : !!inputValue.length && (
                <div className='autosuggest__empty-text'>No matching results</div>
              )}
        </div>
      )}
    </div>
  )
}

export default Autosuggestion
