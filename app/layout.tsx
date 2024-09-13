import PageNav from 'app/ui/page-nav/PageNav'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import * as process from 'node:process'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${process.env.APP_NAME}`,
    default: process.env.APP_NAME as string,
  },
  description: 'News aggregator website',
}

export default function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <div className="flex flex-col min-h-screen">
      <PageNav/>
      <main className="flex flex-col flex-grow w-full">
        {children}
      </main>
    </div>
    </body>
    </html>
  )
}
