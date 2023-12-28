import { useCallback, useEffect } from 'react'

interface UseModalProps {
  onClose?: () => void
  isOpen?: boolean
}

/**
 * Hook for modals (drawer/modal)
 * @param isOpen
 * @param onClose
 */
export function useModal({ isOpen, onClose }: UseModalProps) {
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.()
      }
    },
    [onClose],
  )

  useEffect(() => {
    if (isOpen) {
      const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent)
      window.addEventListener('keydown', onKeyDown)
      const { scrollY } = window
      if (isIos) {
        document.body.style.position = 'fixed'
        document.body.style.top = `-${scrollY}px`
      }
      document.body.style.overflow = 'hidden'

      return () => {
        window.removeEventListener('keydown', onKeyDown)
        document.body.style.overflow = 'auto'
        if (isIos) {
          document.body.style.top = ''
          document.body.style.position = ''
          window.scrollBy({
            top: scrollY,
            behavior: 'instant',
          })
        }
      }
    }
  }, [isOpen, onKeyDown])
}
