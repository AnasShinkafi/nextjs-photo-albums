
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Sidebar } from '../components/SideNavbar'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import Image from 'next/image'

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
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <div className=" border-b mx-auto">
          <div className=" flex h-16 items-center px-4">
            <Image src={'/album.png'} height={50} width={50} alt='' />
            Shinxs Photos
            <div className=" ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className=" flex">
          <Sidebar />
          <div className=" w-full px-8 pt-12">{children}</div>
        </div>
      </body>
    </html>
  )
}
