import Header from '@/components/Header';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className='dark'>
      <body className={`${inter.className} bg-gray-100 text-gray-600 space-y-3 dark:bg-gray-900 dark:text-gray-100`}>
      <Header />
        {children}
      </body>
    </html>
  )
}
