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
        <div className="bg-[#e08282] top-[-6rem] right-[11rem] -z-10 absolute 
              h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" ></div>
        <div className="bg-[#c8ebf0] top-[-1rem] left-[-35rem] -z-10 absolute 
              h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] 
              md:left-[-30rem] lg:left[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" ></div>
        <div className="bg-[#f2eac6] top-[35rem] left-[25rem] -z-10 absolute 
              h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] 
              md:right-[-33rem] lg:right[-28rem] xl:right-[-15rem] 2xl:right-[-5rem]" ></div>
        <Header />
        {children}
      </body>
    </html>
  )
}
