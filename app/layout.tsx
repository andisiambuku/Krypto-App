import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Krypto App',
  description: 'A cryptocurrency market analysis app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
