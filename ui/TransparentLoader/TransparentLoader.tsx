import React, { ReactNode } from 'react'
import './styles.scss'
import classNames from 'classnames'
import PulseLoader from 'react-spinners/PulseLoader'

interface ITransparentLoader {
  children: ReactNode
  isLoading: boolean
  opacity?: number
}

function TransparentLoader({
  children,
  isLoading,
  opacity,
}: ITransparentLoader) {
  const TransparentLoaderWrapperClass = classNames(
    'transparent-loader-wrapper',
    isLoading && 'pointer-events-none',
    isLoading && (opacity ? `opacity-${opacity}` : 'opacity-40'),
  )
  const LoaderWrapper = classNames('loader-wrapper')

  return (
    <div className={TransparentLoaderWrapperClass}>
      {isLoading && (
        <div className={LoaderWrapper}>
          <PulseLoader color="#ec4899" size={20} />
        </div>
      )}
      {children}
    </div>
  )
}

export default TransparentLoader
