'use client'

import { FC, ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  element?: HTMLElement
}

export const Portal: FC<PortalProps> = (props) => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const { children, element = document.body } = props

  return createPortal(children as any, element)
}
