import React from 'react'
import './styles.scss'

function Table() {
  return (
    <div className="flex flex-col p-2 w-1/3 shadow-xl rounded-md">
      <div className="flex justify-between m-2">
        <h5 className="text-xl font-semibold">Files</h5>
        <span>View all</span>
      </div>
      <table className="m-2 table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Created</th>
            <th>Members</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sometext.docx</td>
            <td>2.2 MB</td>
            <td>Sep 25, 2021</td>
            <td> - </td>
            <td>...</td>
          </tr>
          <tr>
            <td>SoemVidevo.webm</td>
            <td>1 GB</td>
            <td>Sep 25, 2021</td>
            <td> - </td>
            <td>...</td>
          </tr>
          <tr>
            <td>Photo.png</td>
            <td>22,5 MB </td>
            <td>Sep 25, 2021</td>
            <td> - </td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
