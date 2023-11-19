import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import File, { FileBaseType } from '@/shared/ui/File'
import Modal from '@/shared/ui/Modal'
import './file-carousel.scss'
import FileCarouselCard from './FileCarouselCard'

interface FileCarouselProps<T> {
  files: T[]
  filesToPreview?: T[]
  onRemoveFileClick?: (uid: string) => void
  renderCarouselFile?: (file: T) => any
  renderFile?: (file: T) => any
  showIndicators?: boolean
  showArrows?: boolean
}

const FileCarousel = <T extends FileBaseType>({
  files,
  filesToPreview,
  renderFile,
  renderCarouselFile,
  onRemoveFileClick,
  showIndicators = true,
  showArrows = true,
}: FileCarouselProps<T>) => {
  const [selectedImageId, setSelectedImageId] = useState<string>('')
  const selectedImageIndex = files.findIndex((file) => file.uid === selectedImageId)

  return (
    <>
      {(filesToPreview || files).map((file) => (
        <div
          className='file-carousel__file-container'
          key={file.uid}
          onClick={() => setSelectedImageId(file.uid)}
        >
          {renderFile ? (
            renderFile(file)
          ) : (
            <FileCarouselCard file={file} onRemoveFileClick={onRemoveFileClick} />
          )}
        </div>
      ))}
      <Modal
        isCloseIconShow
        onClose={() => setSelectedImageId('')}
        isOpen={selectedImageIndex !== -1}
      >
        <Carousel
          infiniteLoop
          emulateTouch
          selectedItem={selectedImageIndex}
          useKeyboardArrows
          showIndicators={showIndicators}
          showArrows={showArrows}
          swipeable
          showThumbs={false}
          dynamicHeight={false}
        >
          {files.map(
            renderCarouselFile ||
              ((file) => (
                <File
                  key={file.uid}
                  fileSrc={file.fileUrl}
                  mimetype={file.mimetype}
                  name={file.name}
                  size={file.size}
                  className='file-carousel__file-modal'
                />
              )),
          )}
        </Carousel>
      </Modal>
    </>
  )
}
export default FileCarousel
