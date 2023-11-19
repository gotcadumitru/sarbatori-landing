import { FormEvent, HTMLProps } from 'react'

export interface FormPropsType extends HTMLProps<HTMLFormElement> {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}
