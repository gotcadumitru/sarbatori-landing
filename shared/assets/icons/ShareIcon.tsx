import { FC, SVGProps } from 'react'

interface SvgComponentProps extends SVGProps<SVGSVGElement> {
  title?: string
  titleId?: string
}

const SvgComponent: FC<SvgComponentProps> = ({ title, titleId, ...rest }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={28} height={28} fill='none' {...rest}>
    <path
      fill='#202328'
      d='M21 25.667c-.972 0-1.799-.34-2.48-1.021-.68-.68-1.02-1.507-1.02-2.48 0-.136.01-.277.03-.423a2.11 2.11 0 0 1 .087-.393l-8.225-4.783c-.33.291-.7.52-1.109.686A3.365 3.365 0 0 1 7 17.5c-.972 0-1.799-.34-2.48-1.02-.68-.681-1.02-1.508-1.02-2.48s.34-1.799 1.02-2.48c.681-.68 1.508-1.02 2.48-1.02.447 0 .875.083 1.283.248.409.166.778.394 1.109.685l8.225-4.783a2.14 2.14 0 0 1-.088-.393 3.187 3.187 0 0 1-.029-.424c0-.972.34-1.798 1.02-2.479.681-.68 1.508-1.02 2.48-1.02s1.799.34 2.48 1.02c.68.68 1.02 1.507 1.02 2.48 0 .972-.34 1.798-1.02 2.478-.681.681-1.508 1.021-2.48 1.021-.447 0-.875-.082-1.283-.247a3.819 3.819 0 0 1-1.109-.686l-8.225 4.783c.04.117.068.248.088.395a3.197 3.197 0 0 1 0 .846c-.02.146-.049.277-.088.393l8.225 4.783c.33-.292.7-.52 1.109-.685A3.413 3.413 0 0 1 21 18.667c.972 0 1.799.34 2.48 1.02.68.681 1.02 1.507 1.02 2.48 0 .972-.34 1.798-1.02 2.479-.681.68-1.508 1.02-2.48 1.02Z'
    />
  </svg>
)

export default SvgComponent