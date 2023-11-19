import { FC, useEffect, useRef, useState } from 'react'
import useWindowSize from '@/shared/lib/hooks/useWindowSize'
import Popup from '@/shared/ui/Popup'
import type { TableCellEllipsisPropsType } from '../../lib/table.types'
import './table-cell.scss'

const TableCellEllipsis: FC<TableCellEllipsisPropsType> = ({ text, isWithCopyButton }) => {
  const [isTextEllipsisActive, setIsTexEllipsisActive] = useState(false)
  const screenSize = useWindowSize()
  const textDivRef = useRef<HTMLDivElement>(null)

  const checkIsEllipsisActive = (e: HTMLDivElement) => e.offsetWidth < e.scrollWidth

  useEffect(() => {
    if (textDivRef.current) {
      setIsTexEllipsisActive(checkIsEllipsisActive(textDivRef.current))
    }
  }, [screenSize, text])

  return (
    <Popup
      isEnabled={isTextEllipsisActive}
      isWithCopyButton={isWithCopyButton}
      referenceElement={
        <div ref={textDivRef} className='table-cell table-cell--ellipsis'>
          {text}
        </div>
      }
      popupElement={<div className='table-cell__popup'>{text}</div>}
    />
  )
}

export default TableCellEllipsis
