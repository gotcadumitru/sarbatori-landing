import { FC, SVGProps } from 'react'

interface SvgComponentProps extends SVGProps<SVGSVGElement> {
  title?: string
  titleId?: string
}

const SvgComponent: FC<SvgComponentProps> = ({ title, titleId, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='currentColor'
    stroke='currentColor'
    strokeWidth={0}
    viewBox='0 0 24 24'
    {...rest}
  >
    <path fill='none' stroke='none' d='M0 0h24v24H0V0z' />
    <path stroke='none' d='M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
  </svg>
)
export default SvgComponent
