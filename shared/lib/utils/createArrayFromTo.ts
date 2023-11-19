const createArrayFromTo = (start: number, end: number) =>
  Array(end - start + 1)
    .fill(undefined)
    .map((_, idx) => start + idx)

export default createArrayFromTo
