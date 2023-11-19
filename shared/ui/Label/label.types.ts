import type { HTMLAttributes, ReactNode } from 'react'

export interface LabelProps extends Omit<HTMLAttributes<HTMLLabelElement>, 'onChange'> {
  className?: string
  inputId?: string
  infoText?: string | ReactNode
  label?: string
}
