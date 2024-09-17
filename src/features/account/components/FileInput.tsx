import React from 'react'
import Dropzone from 'react-dropzone'
import { getListFiles, PickedImageList } from './images'
import cn from 'classnames'

export type ImagePickerProps = {
  multiple?: boolean
  onChange?: (files: PickedImageList) => void
  error?: boolean
  name?: string
  id?: string
  children?: React.ReactNode
  wrapperClassName?: string
}

function ImagePicker({
  name,
  id,
  multiple = true,
  onChange,
  children,
  wrapperClassName,
  error
}: ImagePickerProps) {
  const onDrop = React.useCallback(
    async (acceptedFiles: any) => {
      const imageFiles: PickedImageList = await getListFiles(acceptedFiles)
      onChange && onChange(imageFiles)
    },
    [onChange]
  )
  return (
    <Dropzone
      accept={{
        'image/*': [],
        'audio/*': [],
        'image/jpg': [],
        'image/png': [],
        'video/mp4': []
      }}
      multiple={multiple}
      onDrop={onDrop}
    >
      {({ getRootProps, getInputProps }) => (
        <div
          className={cn(
            'w-full h-full border',
            error ? 'red' : 'light.600',
            wrapperClassName
          )}
          {...getRootProps()}
        >
          <React.Fragment>
            <input
              name={name}
              id={id}
              {...getInputProps()}
              className={'hidden'}
            />

            {children}
          </React.Fragment>
        </div>
      )}
    </Dropzone>
  )
}

export default ImagePicker
