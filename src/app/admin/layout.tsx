import '../globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import NavSideBar from '@/components/NavSideBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <div className='flex flex-row'>
          <NavSideBar/>
          {children}
        </div>
        </body>
    </html>
  )
}