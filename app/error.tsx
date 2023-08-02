'use client'

import { useEffect } from 'react'

interface IError {
  error: Error
  reset: () => void
}

export default function Error({
                                error,
                                reset,
                              }: IError) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>

      <button onClick={reset}>
        Try again
      </button>
    </div>
  )
}
