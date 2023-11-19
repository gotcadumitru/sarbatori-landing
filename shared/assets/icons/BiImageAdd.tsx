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
    <path
      stroke='none'
      d='M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z'
    />
    <path stroke='none' d='m8 11-3 4h11l-4-6-3 4z' />
    <path stroke='none' d='M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z' />
  </svg>
)
export default SvgComponent
