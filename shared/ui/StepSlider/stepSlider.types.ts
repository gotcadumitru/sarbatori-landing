import type { InputHTMLAttributes, ReactNode } from 'react'
import type { OnChangeMinType } from '@/shared/ui/Input'
import type { LabelProps } from '@/shared/ui/Label'

export interface StepSliderProps extends InputHTMLAttributes<HTMLInputElement> {
  min: number
  max: number
  step: number
  className?: string
  onChange: (e: OnChangeMinType) => void
  name: string
  value: number
  infoTextLeft: ReactNode
  infoTextRight: ReactNode
}

export type StepSliderWithLabelProps = StepSliderProps & LabelProps
