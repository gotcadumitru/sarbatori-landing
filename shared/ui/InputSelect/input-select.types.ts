import type { DetailedHTMLProps, FocusEvent, InputHTMLAttributes } from 'react'
import type { FormDataField } from '@/shared/lib/utils/checkIfExistErrors'
import type { InputOptionType, OnChangeMinType } from '@/shared/ui/Input'
import type { LabelProps } from '@/shared/ui/Label'

interface InputSelectPropsType
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
    'onChange' | 'onBlur' | 'onFocus'
  > {
  errorMessage?: string
  containerClassName?: string
  className?: string
  disabled?: boolean
  isLoading?: boolean
  options: InputOptionType<number | string>[]
  valueFullType?: FormDataField<string | number | null>
  isFirstOptionDisabled?: boolean
  onChange: (e: OnChangeMinType) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void
}

export type InputSelectWithLabel = InputSelectPropsType & LabelProps
