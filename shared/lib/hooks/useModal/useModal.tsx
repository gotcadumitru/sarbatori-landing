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
      window.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onKeyDown])
}
