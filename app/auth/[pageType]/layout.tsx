import React from 'react'

export default function AuthLayout({ children }) {
  return <div className='container flex flex-row h-full'>
    <div className='container bg-[#fafafa] h-full basis-1/2 flex justify-center'>
      <div className='container border rounded-xl shadow-xl flex flex-col content-center w-3/6 m-auto p-6'>
        {children}
      </div>
    </div>

    <div className="basis-1/2 flex content-center">
      <div className="m-auto height-auto">
        <h5 className="text-9xl text-white underline decoration-pink-500 mb-3">
          React <br /> Storage.
        </h5>
        <span className="text-white italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor
            <br /> incididunt ut labore et dolore magna aliqua.
          </span>
      </div>
    </div>
  </div>
}
