import { MutableRefObject, useEffect } from 'react'

const useOnClickOutside = (
  ref: MutableRefObject<any>,
  handler: (event: MouseEvent | TouchEvent) => void,
  classesToIgnore: string[] = [],
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current
      const elementsToIgnore = classesToIgnore.map((c) => document.getElementsByClassName(c)[0])
      const isElementToIgnoreClicked = elementsToIgnore.some((e) =>
        e?.contains(event.target as Node),
      )
      if (!el || el.contains(event.target) || isElementToIgnoreClicked) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export default useOnClickOutside
