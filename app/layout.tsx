import { inter } from 'app/fonts'
import PageNav from 'components/page-nav/PageNav'
import type { Metadata } from 'next'
import './globals.css'
import * as process from 'node:process'

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
    <body className={`${inter.className} antialiased`}>
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
