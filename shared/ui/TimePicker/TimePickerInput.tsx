import { ChangeEvent, FC, InputHTMLAttributes } from 'react'

interface TimePickerInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (newTime: number) => void
  value: number
  min: number
  max: number
}

export const TimePickerInput: FC<TimePickerInputProps> = ({
  max,
  min,
  value,
  onChange,
  ...props
}) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTimeValue = +e.target.value.replace(/^0+/, '')
    if (newTimeValue > max || newTimeValue < min) return
    onChange?.(newTimeValue)
  }

  return (
    <input
      type='number'
      min={min}
      max={max}
      className='time-picker__input'
      onChange={onInputChange}
      value={value.toString()}
      {...props}
    />
  )
}
