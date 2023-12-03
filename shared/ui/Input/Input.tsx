'use client'

import classNames from 'classnames'
import { FocusEvent, forwardRef, useId, useState } from 'react'
import InfoIcon from '../../assets/icons/InfoIcon'
import Popup from '../Popup'
import './input.scss'
import { InputWithLabelProps } from './input.types'

const Input = forwardRef<HTMLInputElement, InputWithLabelProps>(
  (
    {
      valueFullType,
      label,
      errorMessage,
      containerClassName = '',
      inputContainerClassName = '',
      className = '',
      disabled,
      value,
      onFocus,
      onBlur,
      infoText,
      icons,
      type = 'text',
      ...props
    },
    ref,
  ) => {
    const inputId = useId()
    const [isInputFocused, setIsInputFocused] = useState(false)
    const errorMessageLocal = valueFullType?.errorMessage ?? errorMessage
    const valueLocal = valueFullType?.value ?? value
    const containerClassNames = classNames('input__field-group', containerClassName, {
      'input--disabled': disabled,
      'input__field-group--error': errorMessageLocal,
    })

    const inputClassName = classNames('input', className, {
      'input--error': errorMessageLocal,
    })
    const inputLabelClassName = classNames('input__label', {
      'input__label--top': valueLocal?.toString().length || isInputFocused || type === 'date',
    })
    const inputContainerClassNameLocal = classNames('input__container', inputContainerClassName)
    const onInputFocus = (e: FocusEvent<HTMLInputElement>) => {
      setIsInputFocused(true)
      onFocus?.(e)
    }
    const onInputBlur = (e: FocusEvent<HTMLInputElement>) => {
      setIsInputFocused(false)
      onBlur?.(e)
    }
    return (
      <div className={containerClassNames}>
        <span className={inputContainerClassNameLocal}>
          <input
            ref={ref}
            type={type}
            id={inputId}
            value={valueLocal}
            className={inputClassName}
            disabled={disabled}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            {...props}
          />
          <label htmlFor={inputId} className={inputLabelClassName}>
            {label}{' '}
          </label>
          {(!!infoText || !!icons) && (
            <div className='input__icons'>
              {!!infoText && (
                <Popup
                  referenceElement={<InfoIcon className='input__info-icon' />}
                  popupElement={<div className='input__info-text'>{infoText}</div>}
                />
              )}
              {icons}
            </div>
          )}
        </span>
        {errorMessageLocal && <div className='input__error-message'>{errorMessageLocal} </div>}
      </div>
    )
  },
)
Input.displayName = 'Input'
export default Input
