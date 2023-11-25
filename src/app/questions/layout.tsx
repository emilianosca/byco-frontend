import { Suspense } from "react";

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Loading from "@/app/loading";
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Questions',
  description: 'Byco is a platfrom that brings together cities, communities, governments, and people to create better futures.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Suspense fallback={<Loading />} >
        {children}
      </Suspense>
      </body>
    </html>
  )
}
