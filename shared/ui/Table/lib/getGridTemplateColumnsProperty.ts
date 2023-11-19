import type { TableHeaderItem } from './table.types'

export const getGridTemplateColumnsProperty = (headerItems: TableHeaderItem[]) => {
  const gridTemplateColumns = headerItems.map((headerItem) => headerItem.width)
  return gridTemplateColumns.join(' ')
}
