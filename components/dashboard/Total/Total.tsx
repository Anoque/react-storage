import React from 'react'
import Image from 'next/image'
import FileIcon from '@/images/file-icon.svg'

function Total() {
  return (
    <div className="flex flex-col p-4 w-1/5 space-y-4 shadow-xl rounded-md">
      <h5 className="text-xl font-semibold">Total</h5>

      <div className="flex justify-between border rounded-md p-3">
        <div className="flex flex-col">
          <div className="flex">
            <Image priority src={FileIcon} alt="FileIcon" />{' '}
            <span>Documents</span>
          </div>
          <span>7 files</span>
        </div>
        <h5 className="self-center">1 GB</h5>
      </div>

      <div>
        <div className="flex justify-between border rounded-md p-3">
          <div className="flex flex-col">
            <div className="flex">
              <Image priority src={FileIcon} alt="FileIcon" />{' '}
              <span>Photos</span>
            </div>
            <span>5 files</span>
          </div>
          <h5 className="self-center">2.2 GB</h5>
        </div>
      </div>

      <div className="flex justify-between border rounded-md p-3">
        <div className="flex flex-col">
          <div className="flex">
            <Image priority src={FileIcon} alt="FileIcon" /> <span>Videos</span>
          </div>
          <span>2 files</span>
        </div>
        <h5 className="self-center">17 GB</h5>
      </div>

      <div className="flex justify-between border rounded-md p-3">
        <div className="flex flex-col">
          <div className="flex">
            <Image priority src={FileIcon} alt="FileIcon" /> <span>Musics</span>
          </div>
          <span>10 files</span>
        </div>
        <h5 className="self-center">0.7 GB</h5>
      </div>

      <div className="flex justify-between border rounded-md p-3">
        <div className="flex flex-col">
          <div className="flex">
            <Image priority src={FileIcon} alt="FileIcon" />{' '}
            <span>Other Files</span>
          </div>
          <span>27 files</span>
        </div>
        <h5 className="self-center">5.5 GB</h5>
      </div>
    </div>
  )
}

export default Total
