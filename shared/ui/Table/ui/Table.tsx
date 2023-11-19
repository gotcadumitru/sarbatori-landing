import classNames from 'classnames'
import { FC, memo } from 'react'
import Skeleton from 'react-loading-skeleton'
import { FetchStatus } from '@/shared/api'
import { getGridTemplateColumnsProperty } from '../lib/getGridTemplateColumnsProperty'
import type { TablePropsType } from '../lib/table.types'
import { TableRowsSize, TableType } from '../lib/table.types'
import '../styles/table.scss'

const Table: FC<TablePropsType> = ({
  headerItems = [],
  rows = [],
  tableType = TableType.WITH_BORDER,
  rowSize = TableRowsSize.LARGE,
  // this value should be bigger than all table width
  minWidth = '500px',
  emptyMessage = 'No data.',
  containerClassName,
  fetchStatus = FetchStatus.SUCCESS,
}) => {
  const gridTemplateColumns = getGridTemplateColumnsProperty(headerItems)
  const headerItemClassName = classNames('table__header-item', {
    'table__header-item--no-borders': tableType === TableType.NO_BORDERS,
    'table__header-item--with-borders': tableType === TableType.WITH_BORDER,
  })
  const tableClassName = classNames('table', {
    'table--with-borders': tableType === TableType.WITH_BORDER,
    'table--small': rowSize === TableRowsSize.SMALL,
    'table--large': rowSize === TableRowsSize.LARGE,
  })

  const rowContentClassName = classNames('table__row-content', {
    'table__row-content--with-borders': tableType === TableType.WITH_BORDER,
  })

  const tableContainerClassName = classNames('table__container', containerClassName)

  const getInfoMessage = () => {
    if (fetchStatus === FetchStatus.IN_PROGRESS && !rows.length)
      return <Skeleton count={5} height={25} />

    if (fetchStatus === FetchStatus.SUCCESS && !rows.length)
      return <div className='empty-message'>{emptyMessage}</div>

    if (fetchStatus === FetchStatus.FAIL)
      return (
        <div className='empty-message'>Something went wrong, please try to reload the page</div>
      )

    return ''
  }
  return (
    <div className={tableContainerClassName}>
      <div className={tableClassName} style={{ minWidth }}>
        <div className='table__header' style={{ gridTemplateColumns }}>
          {headerItems.map((item) => (
            <div key={item.id} className={headerItemClassName}>
              {item.element}
            </div>
          ))}
        </div>
        {getInfoMessage()}
        {rows.map((item) => {
          const { id, columns } = item
          return (
            <div key={id} className='table__row'>
              <div
                className='table__row-content-container'
                style={{
                  gridTemplateColumns,
                }}
              >
                {columns.map((column, index) => (
                  <div className={rowContentClassName} key={index}>
                    {column}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default memo(Table)
