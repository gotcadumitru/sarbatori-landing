import classNames from 'classnames'
import { FC, FocusEvent, Suspense, useId, useState } from 'react'
import lazyWithPreload from '@/shared/lib/utils/lazyWithPreload'
import { InputSelectSkeleton } from '@/shared/ui/InputSelect/InputSelectSkeleton'
import type { InputSelectWithLabel } from './input-select.types'
import './inputSelect.scss'

const Select = lazyWithPreload(() => import('react-select-virtualized'))

const InputSelect: FC<InputSelectWithLabel> = ({
  label,
  errorMessage,
  className,
  containerClassName,
  disabled,
  isLoading,
  name,
  placeholder = '',
  options = [],
  value = '',
  valueFullType,
  onFocus,
  onBlur,
  onChange,
}) => {
  const inputId = useId()
  const [isInputFocused, setIsInputFocused] = useState(false)
  const errorMessageLocal = valueFullType?.errorMessage ?? errorMessage
  const valueLocal = valueFullType?.value ?? value
  const selectedOption = options.find((option) => option.value === valueLocal) || null
  const containerClassNames = classNames('input__field-group', containerClassName, {
    'input--disabled': disabled,
    'input__field-group--error': errorMessageLocal,
  })

  const inputClassName = classNames('input-select', className, {
    'input-select--error': !!errorMessageLocal,
    'input--select-grey': valueLocal === '',
  })

  const inputLabelClassName = classNames('input__label', {
    'input__label--top': valueLocal?.toString().length || isInputFocused,
  })
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
      <span className='input__container'>
        <Suspense fallback={<InputSelectSkeleton />}>
          <Select
            inputId={inputId}
            className={inputClassName}
            classNamePrefix='input-select'
            onChange={(newValue, actionMeta) => {
              if (actionMeta.action === 'clear') {
                onChange?.({ target: { name: name!, value: null } })
              } else {
                onChange?.({
                  target: { name: name!, value: newValue!.value },
                })
              }
            }}
            options={options}
            isDisabled={disabled}
            isLoading={isLoading}
            isClearable
            name={name}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            isSearchable
            value={selectedOption}
            menuPortalTarget={document.body}
            placeholder={placeholder}
            styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          />
        </Suspense>

        <label htmlFor={inputId} className={inputLabelClassName}>
          {label}{' '}
        </label>
      </span>
      {errorMessageLocal && <div className='input__error-message'>{errorMessageLocal} </div>}
    </div>
  )
}
export default InputSelect
