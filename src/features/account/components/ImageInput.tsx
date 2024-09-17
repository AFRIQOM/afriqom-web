import React, { useEffect, useRef } from 'react'
import { PickedImageList } from './images'
import { IoCloudUploadOutline } from 'react-icons/io5'
import FileInput, { ImagePickerProps } from './FileInput'

type ImageBoxInputProps = ImagePickerProps & {
  hasError?: boolean
  value?: PickedImageList[0]
  wrapperClassName?: string
  renderImage?: (value?: PickedImageList[0]) => React.ReactElement
}

function ImageBoxInput({
  value,
  onChange,
  name,
  id,
  wrapperClassName,
  hasError,
  renderImage,
  ...rest
}: ImageBoxInputProps) {
  const isImage = value && ['image'].some((el) => value.file?.type.includes(el))

  return (
    <FileInput
      wrapperClassName={wrapperClassName}
      name={name}
      id={id}
      multiple={false}
      error={hasError}
      // @ts-ignore
      onChange={(files) => onChange(files[0])}
      {...rest}
    >
      {renderImage && <React.Fragment>{renderImage(value)}</React.Fragment>}
      {!renderImage && (
        <React.Fragment>
          {value ? (
            <div className={'relative h-full w-full rounded-full '}>
              <img
                className={'h-full w-full  rounded-full object-cover'}
                alt={'Selected Image'}
                src={value.image}
                {...rest}
              />
            </div>
          ) : (
            <div
              className={
                ' flex size-full items-center justify-center rounded-2xl bg-surface-tertiary'
              }
            >
              <div className="flex flex-col text-center items-center">
                <IoCloudUploadOutline
                  className=" text-content-default"
                  size={32}
                />
                <p className="text-content-default">
                  Select or drag and drop here
                </p>
              </div>
            </div>
          )}
        </React.Fragment>
      )}
    </FileInput>
  )
}

export type { ImageBoxInputProps }
export default ImageBoxInput
