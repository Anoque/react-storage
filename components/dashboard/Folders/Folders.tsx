import React from 'react'
import Image from 'next/image'
import FileIcon from '@/images/file-icon.svg'

function Folders() {
  return (
    <div className="flex flex-col p-2 w-1/5 shadow-xl rounded-md">
      <div className="flex justify-between m-2">
        <h5 className="text-xl font-semibold">Folders</h5>
        <span>View all</span>
      </div>

      <div className="flex flex-wrap">
        <div className="flex flex-col justify-between w-40 h-28 border rounded-md m-2 p-4">
          <div className="flex justify-between">
            <Image priority src={FileIcon} alt="FileIcon" />
            ...
          </div>
          <div className="flex flex-col">
            <h5>Folder Name</h5>
            <h5>5 Files</h5>
          </div>
        </div>

        <div className="flex flex-col justify-between w-40 h-28 border rounded-md m-2 p-4">
          <div className="flex justify-between">
            <Image priority src={FileIcon} alt="FileIcon" />
            ...
          </div>
          <div className="flex flex-col">
            <h5>Folder Name</h5>
            <h5>5 Files</h5>
          </div>
        </div>

        <div className="flex flex-col justify-between w-40 h-28 border rounded-md m-2 p-4">
          <div className="flex justify-between">
            <Image priority src={FileIcon} alt="FileIcon" />
            ...
          </div>
          <div className="flex flex-col">
            <h5>Folder Name</h5>
            <h5>5 Files</h5>
          </div>
        </div>

        <div className="flex flex-col justify-between w-40 h-28 border rounded-md m-2 p-4">
          <div className="flex justify-between">
            <Image priority src={FileIcon} alt="FileIcon" />
            ...
          </div>
          <div className="flex flex-col">
            <h5>Folder Name</h5>
            <h5>5 Files</h5>
          </div>
        </div>

        <div className="flex flex-col justify-between w-40 h-28 border rounded-md m-2 p-4">
          <div className="flex justify-between">
            <Image priority src={FileIcon} alt="FileIcon" />
            ...
          </div>
          <div className="flex flex-col">
            <h5>Folder Name</h5>
            <h5>5 Files</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Folders
