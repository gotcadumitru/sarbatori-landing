import classNames from 'classnames'
import { FC, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'
import AiOutlineClose from '@/shared/assets/icons/AiOutlineClose'
import Overlay from '@/shared/ui/Overlay'
import { Portal } from '@/shared/ui/Portal'
import './modal.scss'
import type { ModalPropsType } from './modalTypes'

const Modal: FC<ModalPropsType> = ({
  onClose,
  isCloseIconShow,
  isOpen,
  containerStyle,
  className,
  ...props
}) => {
  useModal({ onClose, isOpen })

  const modalContentClassName = classNames('modal__content', className)
  const modalClassName = classNames('modal')
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])
  return (
    <Portal>
      <CSSTransition in={isOpen} timeout={200} classNames='modal-anim' unmountOnExit>
        <div className={modalClassName}>
          <Overlay onClick={onClose} />
          <div className={modalContentClassName}>
            {isCloseIconShow && <AiOutlineClose onClick={onClose} className='modal__close-icon' />}
            {props.children}
          </div>
        </div>
      </CSSTransition>
    </Portal>
  )
}
export default Modal
