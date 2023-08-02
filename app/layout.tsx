import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/store/providers'

import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'
import {ErrorBoundary} from 'next/dist/client/components/error-boundary'
import ErrorPage from './error'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Storage',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary errorComponent={ErrorPage}>
          <Providers>
            {children}
          </Providers>
        </ErrorBoundary>

        <ToastContainer />
      </body>
    </html>
  )
}
