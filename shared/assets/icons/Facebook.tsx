import { FC, SVGProps } from 'react'

interface SvgComponentProps extends SVGProps<SVGSVGElement> {
  title?: string
  titleId?: string
}

const SvgComponent: FC<SvgComponentProps> = ({ title, titleId, ...rest }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={16} height={17} {...rest} fill='none'>
    <g clipPath='url(#a)'>
      <path
        fill='#6F7A8B'
        fillOpacity={0.75}
        d='M15.75 8.143A7.749 7.749 0 0 0 8 .393a7.749 7.749 0 0 0-7.75 7.75 7.753 7.753 0 0 0 6.54 7.656v-5.416H4.82v-2.24h1.97V6.435c0-1.942 1.155-3.015 2.926-3.015.848 0 1.735.152 1.735.152v1.906h-.977c-.963 0-1.263.597-1.263 1.21v1.455h2.15l-.344 2.24H9.21V15.8a7.753 7.753 0 0 0 6.539-7.656Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 .143h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
