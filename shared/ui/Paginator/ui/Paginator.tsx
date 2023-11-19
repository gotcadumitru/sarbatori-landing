import classNames from 'classnames'
import type { ChangeEvent, FC } from 'react'
import ReactPaginate, { ReactPaginateProps } from 'react-paginate'
import { INPUT_LABEL } from '@/shared/defaults/text'
import Input from '@/shared/ui/Input'
import Label from '@/shared/ui/Label'
import { MAX_ITEMS_ON_PAGE } from '../consts/paginatorConsts'
import './pagination.scss'

interface PaginatorProps extends ReactPaginateProps {
  className?: string
  onItemsPerPageChange?: (itemsPerPage: number) => void
  itemsPerPage?: number
}

const Paginator: FC<PaginatorProps> = ({
  className,
  itemsPerPage,
  onItemsPerPageChange,
  containerClassName,
  ...props
}) => {
  const onPageInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const regex = /^\d+$/
    const valueConvertedToNumber = +value
    if (
      !onItemsPerPageChange ||
      (value !== '' &&
        (!regex.test(value) ||
          Number.isNaN(valueConvertedToNumber) ||
          valueConvertedToNumber > MAX_ITEMS_ON_PAGE))
    )
      return
    onItemsPerPageChange(valueConvertedToNumber)
  }
  return (
    <div className={classNames('pagination__container', className)}>
      {!!onItemsPerPageChange && (
        <>
          <Label className='label--no-margin' label={INPUT_LABEL.RECORDS_TO_DISPLAY} />
          <Input
            type='number'
            min={1}
            max={MAX_ITEMS_ON_PAGE}
            value={itemsPerPage || ''}
            onChange={onPageInputChange}
            step={1}
            className='pagination__input'
            containerClassName='pagination__input-container'
          />
        </>
      )}
      <ReactPaginate
        previousLabel={INPUT_LABEL.PREVIOUS}
        nextLabel={INPUT_LABEL.NEXT}
        pageClassName='pagination__page-item'
        pageLinkClassName='pagination__page-link'
        previousClassName='pagination__page-item'
        previousLinkClassName='pagination__page-link'
        nextClassName='pagination__page-item'
        nextLinkClassName='pagination__page-link'
        breakLabel='...'
        disabledClassName='pagination__page-item--disabled'
        breakClassName='pagination__page-item'
        breakLinkClassName='pagination__page-link'
        containerClassName={classNames('pagination', containerClassName)}
        activeClassName='pagination__page-item--active'
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        {...props}
      />
    </div>
  )
}
export default Paginator
