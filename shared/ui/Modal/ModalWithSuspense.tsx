import { FC, Suspense } from 'react'
import lazyWithPreload from '@/shared/lib/utils/lazyWithPreload'
import { ModalPropsType } from './modalTypes'

const Modal = lazyWithPreload(() => import('./Modal'))
const ModalWithSuspense: FC<ModalPropsType> = ({ children, ...props }) => (
  <Suspense fallback={<div />}>
    <Modal {...props}>{children}</Modal>
  </Suspense>
)

export default ModalWithSuspense
