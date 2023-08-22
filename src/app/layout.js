import './globals.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
  title: '*MNTodo List | Next.js',
  description: 'un simple todo list con Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${manrope.className} bg-neutral-950 text-white` } >{children}</body>
    </html>
  )
}
