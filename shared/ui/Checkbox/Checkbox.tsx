import classNames from 'classnames'
import { FC, useId } from 'react'
import './checkbox.scss'
import type { CheckboxPropsType } from './checkbox.types'

const Checkbox: FC<CheckboxPropsType> = ({
  label,
  errorMessage,
  value,
  valueFullType,
  isBig,
  className = '',
  disabled,
  checked,
  ...props
}) => {
  const checkboxId = useId()

  const valueLocal = valueFullType?.value ?? value
  const checkboxLabelClassName = classNames('checkbox', className, {
    'checkbox--big': isBig,
    'checkbox--disabled': disabled,
  })
  const checkboxTextClassName = classNames('checkbox__checkmark', {
    'checkbox--big__checkmark': isBig,
  })
  return (
    <label htmlFor={checkboxId} className={checkboxLabelClassName}>
      {label}
      <input id={checkboxId} type='checkbox' disabled={disabled} checked={valueLocal} {...props} />
      <span className={checkboxTextClassName} />
    </label>
  )
}
export default Checkbox
