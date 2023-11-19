import { FC, SVGProps } from 'react'

interface SvgComponentProps extends SVGProps<SVGSVGElement> {
  title?: string
  titleId?: string
}

const SvgComponent: FC<SvgComponentProps> = ({ title, titleId, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={19}
    fill='none'
    aria-labelledby={titleId}
    {...rest}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#6F7A8B'
      fillOpacity={0.75}
      d='M17.031 4.28c.116-.439 0-.762-.556-.762h-1.84c-.47 0-.685.278-.8.587 0 0-.938 2.57-2.263 4.236-.428.482-.625.637-.86.637-.115 0-.293-.155-.293-.595V4.281c0-.528-.132-.763-.52-.763H7.007a.47.47 0 0 0-.469.474c0 .5.663.616.732 2.022v3.052c0 .667-.107.79-.341.79-.625 0-2.144-2.58-3.044-5.533-.181-.573-.36-.805-.831-.805h-1.84c-.526 0-.632.278-.632.587 0 .548.625 3.273 2.91 6.873 1.521 2.457 3.665 3.79 5.615 3.79 1.172 0 1.316-.296 1.316-.805 0-2.349-.107-2.57.48-2.57.273 0 .742.154 1.835 1.34 1.25 1.406 1.457 2.035 2.157 2.035h1.84c.525 0 .79-.296.638-.879-.35-1.227-2.716-3.751-2.822-3.92-.272-.394-.194-.57 0-.921.003-.004 2.25-3.561 2.481-4.767Z'
    />
  </svg>
)
export default SvgComponent
