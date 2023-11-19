import { Key, ReactNode } from 'react'
import { FetchStatus } from '@/shared/api'

export type TableRowItemType = {
  id: string | number
  columns: ReactNode[]
}

export type TableHeaderItem = {
  id: Key
  element: ReactNode
  width: string
}

export type TablePropsType = {
  headerItems: TableHeaderItem[]
  rows: TableRowItemType[]
  minWidth?: string
  emptyMessage?: string
  tableType?: TableType
  rowSize?: TableRowsSize
  containerClassName?: string
  fetchStatus?: FetchStatus
}

export enum TableType {
  NO_BORDERS = 'NO_BORDERS',
  WITH_BORDER = 'WITH_BORDER',
}

export enum TableRowsSize {
  SMALL = 'SMALL',
  LARGE = 'LARGE',
}

export type TableCellEllipsisPropsType = {
  text: ReactNode
  isWithCopyButton?: boolean
}

export enum TableSortDirection {
  ASCENDING = 'ASCENDING',
  DESCENDING = 'DESCENDING',
}
export type TableSortBy = {
  column: string
  direction: TableSortDirection
}
