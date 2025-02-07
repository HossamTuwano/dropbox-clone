'use client'
import { db, storage } from '@/firebase'
import { cn } from '@/lib/utils'
import { useUser } from '@clerk/nextjs'
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore'
import { useState } from 'react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import DropzoneComponent, { useDropzone } from 'react-dropzone'
function Dropzone() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { isLoaded, isSignedIn, user } = useUser()
  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = async () => {
        await uploadPost(file)
      }
      reader.readAsArrayBuffer(file)
    })
  }

  const uploadPost = async (selectedFile: File) => {
    if (isLoading) return
    if (!user) return
    setIsLoading(true)
    //addDoc ->  user/user123/files

    const docRef = await addDoc(collection(db, 'users', user.id, 'files'), {
      userId: user.id,
      filename: selectedFile.name,
      fullName: user.fullName,
      timestamp: serverTimestamp(),
      type: selectedFile.type,
      size: selectedFile.size,
    })

    const imageRef = ref(storage, `users/${user.id}/files/${docRef.id}`)

    await uploadBytes(imageRef, selectedFile).then(async (snapshot) => {
      const downloadURL = await getDownloadURL(imageRef)
      await updateDoc(doc(db, 'users', user.id, 'files', docRef.id), {
        downloadURL: downloadURL,
      })
    })
    setIsLoading(false)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  // max file size 20MB
  const maxSize = 20971520

  return (
    <DropzoneComponent minSize={0} maxSize={maxSize} onDrop={onDrop}>
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
