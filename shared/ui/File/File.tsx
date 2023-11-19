import { FC } from 'react'
import './file.scss'
import { FILE_TYPE, MIME_TYPE_TO_FILE_TYPE } from './fileConsts'

interface FilePropsType {
  className?: string
  fileSrc: string
  name: string
  mimetype: string
  disabled?: boolean
  size: number
  controls?: boolean
  onClick?: () => void
}

const File: FC<FilePropsType> = ({
  className,
  fileSrc,
  name,
  controls,
  mimetype,
  size,
  ...props
}) => {
  if (MIME_TYPE_TO_FILE_TYPE[mimetype] === FILE_TYPE.PDF) {
    return <embed className={className} src={fileSrc} {...props} />
  }
  if (MIME_TYPE_TO_FILE_TYPE[mimetype] === FILE_TYPE.VIDEO) {
    if (size > 99) {
      return (
        <div className='too-large-file' {...props}>
          <div>This file is too large to see in the application!</div>
          <div>max size: 100MB</div>
        </div>
      )
    }
    return (
      <video className={className} src={fileSrc} controls={controls} {...props}>
        Loading
      </video>
    )
  }
  if (MIME_TYPE_TO_FILE_TYPE[mimetype] === FILE_TYPE.IMG) {
    return <img className={className} src={fileSrc} alt={name} {...props} />
  }

  return (
    <div className='file__too-large' {...props}>
      <div>Acest tip de fisier nu poate fi vazut in aplicatie</div>
      <div>Incercati sa il descarcati</div>
    </div>
  )
}
export default File
