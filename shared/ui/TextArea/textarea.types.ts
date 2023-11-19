import type { DetailedHTMLProps, ReactNode, TextareaHTMLAttributes } from 'react'
import type { FormDataField } from '@/shared/lib/utils/checkIfExistErrors'
import type { LabelProps } from '@/shared/ui/Label'

interface TextAreaPropsType
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  errorMessage?: string
  infoText?: string | ReactNode
  className?: string
  valueFullType?: FormDataField<string>
  containerClassName?: string
}

export type TextAreaWithLabelProps = TextAreaPropsType & LabelProps
