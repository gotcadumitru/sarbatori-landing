import type { InputWithLabelProps, OnChangeMinType } from '@/shared/ui/Input'

export interface AutosuggestPropsType extends InputWithLabelProps {
  className?: string
  options: string[]
  value?: string
  onChange?: (e: OnChangeMinType<string>) => void
}
