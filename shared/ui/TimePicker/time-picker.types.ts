import type { FormDataField } from '@/shared/lib/utils/checkIfExistErrors'
import type { OnChangeMinType } from '@/shared/ui/Input'
import type { LabelProps } from '@/shared/ui/Label'

export interface TimePickerPropsType extends LabelProps {
  name: string
  isOnTop?: boolean
  onChange: (e: OnChangeMinType) => void
  placeholder: string
  errorMessage?: string
  valueFullType?: FormDataField<number>
  disabled?: boolean
  value?: number
  isShowHours?: boolean
  isShowMinutes?: boolean
  isShowSeconds?: boolean
}
