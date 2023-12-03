import type { InputHTMLAttributes, ReactNode } from 'react'
import type { FormDataField } from '../../lib/utils/checkIfExistErrors'
import type { LabelProps } from '../Label'

export type InputOptionType<LabelType> = {
  readonly value: string | number
  readonly label: LabelType
  readonly color?: string
  readonly isDisabled?: boolean
  readonly isFixed?: boolean
}

export type OnChangeMinType<T = number | string | null> = {
  target: {
    name: string
    value: T
  }
}

interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  containerClassName?: string
  inputContainerClassName?: string
  className?: string
  disabled?: boolean
  valueFullType?: FormDataField<string>
  icons?: ReactNode
}

export type InputWithLabelProps = InputPropsType & LabelProps
