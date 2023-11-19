import classNames from 'classnames'
import type { FC, PropsWithChildren, SVGAttributes } from 'react'
import MdOutlineSettings from '@/shared/assets/icons/MdOutlineSettings'
import Popup from '@/shared/ui/Popup'

type TableOptionsProps = {
  className?: string
  title: string
  Icon?: FC<SVGAttributes<SVGElement>>
}

export const TableOptions: FC<PropsWithChildren<TableOptionsProps>> = ({
  className,
  title,
  children,
  Icon = MdOutlineSettings,
}) => (
  <div key={1} className={classNames('table__options', className)}>
    {title}
    <Popup
      referenceElement={<Icon className='table__setting-icon' />}
      popupElement={<div className='table__options-container'>{children}</div>}
    />
  </div>
)
