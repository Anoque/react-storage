import React from 'react'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/store/providers'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import ErrorPage from './error'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

/* axios.defaults.baseURL = 'http://localhost:5000/api' */

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
          <Providers>{children}</Providers>
        </ErrorBoundary>
        <ToastContainer />
      </body>
    </html>
  )
}
