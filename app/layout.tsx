import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "@/components/Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kyle | Portfolio',
  description: 'Aspiring software developer studying at the University of Waterloo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}
      bg-slate-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className="bg-[#f6cbc7] top-[-6rem] right-[11rem] -z-10 absolute 
              h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" ></div>
        <div className="bg-[#c8ebf0] top-[-1rem] left-[-35rem] -z-10 absolute 
              h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] 
              md:left-[-33rem] lg:left[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" ></div>
        <Header />
        {children}
      </body>
    </html>
  )
}
