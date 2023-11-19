import classNames from 'classnames'
import { FC, memo } from 'react'
import './overlay.scss'

interface OverlayProps {
  className?: string
  onClick?: () => void
}

const Overlay: FC<OverlayProps> = ({ className, onClick }) => (
  <div onClick={onClick} className={classNames('overlay', className)} />
)

export default memo(Overlay)
