import classNames from 'classnames'
import { FC, FocusEvent, useEffect, useId, useRef, useState } from 'react'
import InfoIcon from '@/shared/assets/icons/InfoIcon'
import Popup from '@/shared/ui/Popup'
import './textarea.scss'
import type { TextAreaWithLabelProps } from './textarea.types'

const TextArea: FC<TextAreaWithLabelProps> = ({
  containerClassName = '',
  disabled,
  valueFullType,
  label,
  value,
  errorMessage,
  onFocus,
  onBlur,
  className = '',
  infoText,
  ...props
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const inputId = useId()
  const [isInputFocused, setIsInputFocused] = useState(false)

  const errorMessageLocal = valueFullType?.errorMessage ?? errorMessage
  const valueLocal = valueFullType?.value ?? value

  const containerClassNames = classNames('input__field-group', containerClassName, {
    'input--disabled': disabled,
    'input__field-group--error': errorMessageLocal,
  })

  const textAreaClassName = classNames('input', 'textarea', className, {
    'input--error': errorMessageLocal,
  })

  const inputLabelClassName = classNames('input__label', {
    'input__label--top': valueLocal?.toString().length || isInputFocused,
  })

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = '5px'
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`
      if (inputRef.current.scrollHeight >= 200) {
        inputRef.current.style.overflow = 'auto'
      } else {
        inputRef.current.style.overflow = 'hidden'
      }
    }
  }, [valueLocal])

  const onInputFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
    setIsInputFocused(true)
    onFocus?.(e)
  }
  const onInputBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    setIsInputFocused(false)
    onBlur?.(e)
  }
  return (
    <div className={containerClassNames}>
      <span className='input__container'>
        <textarea
          id={inputId}
          className={textAreaClassName}
          ref={inputRef}
          value={valueLocal}
          disabled={disabled}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          {...props}
        />
        <label htmlFor={inputId} className={inputLabelClassName}>
          {label}{' '}
          {infoText && (
            <Popup
              referenceElement={<InfoIcon className='input__info-icon' />}
              popupElement={<div className='input__info-text'>{infoText}</div>}
            />
          )}
        </label>
      </span>
      {errorMessageLocal && <div className='input__error-message'>{errorMessageLocal} </div>}
    </div>
  )
}

export default TextArea
