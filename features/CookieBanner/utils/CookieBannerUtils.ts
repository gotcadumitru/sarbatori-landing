'use client'

export const getLocalStorage = (key: string, defaultValue: any) => {
  const stickyValue = localStorage.getItem(key)

  return stickyValue && stickyValue !== 'undefined' ? JSON.parse(stickyValue) : defaultValue
}

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}
