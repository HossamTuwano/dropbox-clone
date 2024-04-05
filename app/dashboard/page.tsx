import Dropzone from '@/components/dropzone'
import Search from '@/components/search'
import SideNav from '@/components/side-nav'
import { auth } from '@clerk/nextjs/server'
import React from 'react'

function page() {
  const { userId } = auth()
  
  return (
    <div className=''>
      <div className='flex flex-row'>
        <div>
          <SideNav />
        </div>
        <div className='flex-1'>
          {/* <Search /> */}
          <Dropzone />
        </div>
      </div>
    </div>
  )
}

export default page
