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
    <path stroke='none' d='M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z' />
  </svg>
)
export default SvgComponent
