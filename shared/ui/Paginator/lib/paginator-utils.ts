export const getPaginatorData = <T>(itemOffset: number, itemsOnPage: number, items: T[]) => {
  const itemsOnPageLocal = itemsOnPage || 10
  const endOffset = itemOffset + itemsOnPageLocal
  const currentItems = items.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(items.length / itemsOnPageLocal)
  return {
    currentItems,
    pageCount,
  }
}
export const getNewOffset = <T>(selectedPage: number, itemsOnPage: number, items: T[]) => {
  const itemsOnPageLocal = itemsOnPage || 10
  return (selectedPage * itemsOnPageLocal) % items.length
}
