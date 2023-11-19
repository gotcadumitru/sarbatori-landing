import type { HTMLProps } from 'react'
import type { FormDataField } from '@/shared/lib/utils/checkIfExistErrors'

export type CheckboxOptionType<LabelType> = {
  id: string | number
  label: LabelType
}

export interface CheckboxPropsType extends Omit<HTMLProps<HTMLInputElement>, 'value'> {
  valueFullType?: FormDataField<boolean>
  errorMessage?: string
  value?: boolean
  label?: string
  isBig?: boolean
}
