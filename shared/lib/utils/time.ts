export const secondsToHms = (d: number) => {
  const hour = Math.floor(d / 3600)
  const minute = Math.floor((d % 3600) / 60)
  const seconds = Math.floor((d % 3600) % 60)
  return { hour, minute, seconds }
}

export const smhToSeconds = (s: number, m: number, h: number) => s + m * 60 + h * 60 * 60

export const getFormatWithZero = (time: number) => `${time < 10 ? '0' : ''}${time}`
