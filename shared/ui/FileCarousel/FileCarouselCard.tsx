import type { MouseEvent } from 'react'
import AiOutlineDelete from '@/shared/assets/icons/AiOutlineDelete'
import Button, { ButtonTheme } from '@/shared/ui/Button'
import File, { FileBaseType } from '@/shared/ui/File'

interface FileCarouselCardProps<T> {
  file: T
  onRemoveFileClick?: (uid: string) => void
}

const FileCarouselCard = <T extends FileBaseType>({
  file,
  onRemoveFileClick,
}: FileCarouselCardProps<T>) => {
  const onRemoveIconClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onRemoveFileClick?.(file.uid)
  }

  return (
    <div key={file.uid} className='file-carousel__card'>
      {onRemoveFileClick && (
        <Button
          type='button'
          theme={ButtonTheme.EMPTY}
          onClick={onRemoveIconClick}
          className='file-carousel__remove-icon'
        >
          <AiOutlineDelete />
        </Button>
      )}
      <File
        fileSrc={file.fileUrl}
        mimetype={file.mimetype}
        name={file.name}
        size={file.size}
        className='file-carousel__card-file'
      />
    </div>
  )
}
export default FileCarouselCard
