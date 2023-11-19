'use client'

import { FC, Suspense } from 'react'
import lazyWithPreload from '@/shared/lib/utils/lazyWithPreload'
import type { PopupPropsType } from './popup.types'

const Popup = lazyWithPreload(() => import('./Popup'))
const PopupWithSuspense: FC<PopupPropsType> = (props) => (
  <Suspense fallback={<div />}>
    <Popup {...props} />
  </Suspense>
)

export default PopupWithSuspense
