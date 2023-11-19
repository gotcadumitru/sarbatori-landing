import lazyWithPreload from '@/shared/lib/utils/lazyWithPreload'

export const FileCarouselAsync = lazyWithPreload(() => import('./FileCarousel'))
