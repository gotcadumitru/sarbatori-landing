import createArrayFromTo from '@/shared/lib/utils/createArrayFromTo'

export const secondsOptions = createArrayFromTo(0, 59).map((item) => ({
  key: `${item}`,
  text: `${item < 10 ? 0 : ''}${item}`,
  value: item,
}))

export const minuteOptions = secondsOptions

export const hourOptions = createArrayFromTo(0, 23).map((item) => ({
  key: `${item}`,
  text: `${item < 10 ? 0 : ''}${item}`,
  value: item,
}))
