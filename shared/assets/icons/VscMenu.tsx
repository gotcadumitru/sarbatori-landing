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
    viewBox='0 0 16 16'
    aria-labelledby={titleId}
    {...rest}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path stroke='none' d='M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z' />
  </svg>
)
export default SvgComponent
