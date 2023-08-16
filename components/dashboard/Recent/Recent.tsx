import React from 'react'

function Recent() {
  return (
    <div className="flex flex-col p-4 h-1/2 shadow-xl shadow-md space-y-3">
      <div className="flex justify-start mx-2">
        <h5 className="text-xl font-semibold">Recent</h5>
      </div>

      <div>
        <div className="flex justify-between border rounded-md p-3">
          <div className="flex">
            <span>Sometext.docx</span>
          </div>
          <h5 className="self-center">2.2 GB</h5>
        </div>
      </div>

      <div>
        <div className="flex justify-between border rounded-md p-3">
          <div className="flex">
            <span>Sometext.docx</span>
          </div>
          <h5 className="self-center">2.2 GB</h5>
        </div>
      </div>
      <div>
        <div className="flex justify-between border rounded-md p-3">
          <div className="flex">
            <span>Sometext.docx</span>
          </div>
          <h5 className="self-center">2.2 GB</h5>
        </div>
      </div>
    </div>
  )
}

export default Recent
