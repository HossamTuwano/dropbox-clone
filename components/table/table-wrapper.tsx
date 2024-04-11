import { FileType } from '@/typings'
import React from 'react'
import { Button } from '../ui/button'

function TableWrapper({ skeletonFiles }: { skeletonFiles: FileType[] }) {
  return (
    <div className=''>
      <Button>Sort By ...</Button>
      {/* <Datatable column={column} data={initialFiles} /> */}
    </div>
  )
}

export default TableWrapper
