import classNames from 'classnames'
import { ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, useId } from 'react'
import BiImageAdd from '@/shared/assets/icons/BiImageAdd'
import { FormDataField } from '@/shared/lib/utils/checkIfExistErrors'
import { FileCarouselAsync } from '@/shared/ui/FileCarousel'
import { v4 } from 'uuid'
import { FileInputType } from '../File'
import './file-input.scss'

interface FileInputPropsType
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'onChange' | 'value'
  > {
  label: string
  containerClassName?: string
  errorMessage?: string
  value?: FileInputType[]
  valueFullType?: FormDataField<FileInputType[]>
  isDisplayImagesEnabled?: boolean
  onChange: (files: FileInputType[]) => void
}

const FileInput: FC<FileInputPropsType> = ({
  label,
  errorMessage,
  disabled,
  onChange,
  accept = 'image/*',
  containerClassName,
  value = [],
  valueFullType,
  multiple = true,
  isDisplayImagesEnabled = true,
}) => {
  const fileInputId = useId()
  const errorMessageLocal = valueFullType?.errorMessage ?? errorMessage
  const valueLocal = valueFullType?.value ?? value
  const handleFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const filesArray = Array.from(event.target.files || [])

    const filesFromPC: FileInputType[] = filesArray.map((file) => ({
      name: file.name,
      file,
      fileUrl: URL.createObjectURL(file as Blob),
      mimetype: file.type,
      size: file.size,
      uid: v4(),
    }))
    onChange([...valueLocal, ...filesFromPC])
  }

  const removeFile = (id: string) => {
    onChange(valueLocal.filter((file) => file.uid !== id))
  }

  const containerClassNames = classNames('input__field-group', 'file-input', containerClassName, {
    'input--disabled': disabled,
    'file-input--error': errorMessageLocal,
    'file-input--no-margin': !valueLocal.length,
  })
  const inputContainerClassNames = classNames('file-input__container', {
    'file-input__container--no-margin': errorMessageLocal,
  })
  return (
    <div className={inputContainerClassNames}>
      <label htmlFor={fileInputId} className={containerClassNames}>
        {label && (
          <div className='file-input__label'>
            <span>{label}</span>
            <BiImageAdd className='file-input__icon' />
          </div>
        )}
        {!disabled && (
          <input
            id={fileInputId}
            multiple={multiple}
            type='file'
            accept={accept}
            onChange={handleFiles}
          />
        )}
      </label>
      {isDisplayImagesEnabled && (
        <div className='file-input__files'>
          <FileCarouselAsync files={valueLocal} onRemoveFileClick={removeFile} />
        </div>
      )}
      {errorMessageLocal && <div className='input__error-message'>{errorMessageLocal} </div>}
    </div>
  )
}
export default FileInput
