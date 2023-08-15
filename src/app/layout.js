import './globals.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'Todo List | Next.js',
  description: 'A simple todo list app built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-slate-950 text-white` } >{children}</body>
    </html>
  )
}
