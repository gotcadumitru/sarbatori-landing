import type { CSSProperties, ReactNode } from 'react'

export interface ModalPropsType {
  className?: string
  children: ReactNode
  containerStyle?: CSSProperties
  onClose?: () => void
  isOpen?: boolean
  isCloseIconShow?: boolean
}
