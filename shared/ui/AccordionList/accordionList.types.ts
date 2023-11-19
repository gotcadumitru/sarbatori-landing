import { HTMLProps, ReactNode } from 'react'

export type AccordionListItem = {
  title: ReactNode
  description: ReactNode
}
export interface AccordionListPropsType {
  items: AccordionListItem[]
}
