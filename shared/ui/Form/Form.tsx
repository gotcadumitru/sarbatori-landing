import classNames from 'classnames'
import { FormEvent, forwardRef } from 'react'
import './form.css'
import type { FormPropsType } from './form.types'

const Form = forwardRef<HTMLFormElement, FormPropsType>(
  ({ onSubmit, children, className, ...props }, ref) => {
    const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onSubmit(e)
    }
    return (
      <form className={classNames('form', className)} onSubmit={onSubmitForm} ref={ref} {...props}>
        {children}
      </form>
    )
  },
)
Form.displayName = 'Form'
export default Form
