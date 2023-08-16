import React from 'react'

function Favourites() {
  return (
    <div className="flex flex-col p-4 h-1/2 shadow-xl rounded-md space-y-3">
      <div className="flex justify-between mx-2">
        <h5 className="text-xl font-semibold">Favourites</h5>
        <span>View all</span>
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

export default Favourites
