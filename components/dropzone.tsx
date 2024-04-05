'use client'
import { cn } from '@/lib/utils'
import { useUser } from '@clerk/nextjs'
import { read } from 'fs'
import React, { useCallback, useState } from 'react'

import DropzoneComponent, { useDropzone } from 'react-dropzone'
function Dropzone() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { isLoaded, isSignedIn, user } = useUser()
  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onload = async () => {
        await uploadPost(file)
      }
      reader.readAsArrayBuffer(file)
    })
  }

  const uploadPost = async () => {
    if (isLoading) return
    setIsLoading(true)
    setIsLoading(false)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  // max file size 20MB
  const maxSize = 20971520

  return (
    <DropzoneComponent onDrop={(acceptFiles) => console.log(acceptFiles)}>
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        fileRejections,
      }: any) => {
        const isFileTooLarge =
          fileRejections.length > 0 && fileRejections[0].file.size > maxSize
        return (
          <section className='m-4'>
            <div
              {...getRootProps()}
              className={cn(
                'w-full h-52  flex justify-center items-center p-5 border border-dashed rounded-lg text-center',
                isDragActive
                  ? 'bg-[#035ffe] text-white animate-pulse'
                  : 'bg-slate-100/50 dark:slate-800/80 text-slate-400'
              )}
            >
              <input {...getInputProps()} />
              {!isDragActive && 'click here or drop files to upload'}
              {isDragActive && !isDragReject && 'Drop to upload this file'}
              {isDragReject && 'File not accepted, sorry!'}
              {isFileTooLarge && (
                <div className='text-danger mt-2'>File is too large</div>
              )}
            </div>
          </section>
        )
      }}
    </DropzoneComponent>
  )
}

export default Dropzone
