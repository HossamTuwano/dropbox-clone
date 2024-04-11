import Dropzone from '@/components/dropzone'
import Search from '@/components/search'
import SideNav from '@/components/side-nav'
import TableWrapper from '@/components/table/table-wrapper'
import { db } from '@/firebase'
import { FileType } from '@/typings'
import { auth } from '@clerk/nextjs/server'
import { collection, getDocs } from 'firebase/firestore'
import React from 'react'

async function page() {
  const { userId } = auth()
  const docsResult = await getDocs(collection(db, 'users', userId!, 'files'))
  const skeletonFiles: FileType[] = docsResult.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.second * 1000) || undefined,
    fullName: doc.data().fullName,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
  }))

  console.log(skeletonFiles)
  return (
    <div className='border-t'>
      {/* <div className='flex flex-row'> */}
      {/* <div>
          <SideNav />
        </div> */}
      skeletonFiles.
      <div className='flex-1'>
        {/* <Search /> */}
        <Dropzone />
        <section className='container space-y-5'>
          <h2 className='font-bold'>All Files</h2>
          <div>
            {/* table wrapper */}
            <TableWrapper skeletonFiles={skeletonFiles} />
          </div>
        </section>
      </div>
    </div>
    // </div>
  )
}

export default page
