import './globals.css'
import type React from "react"
import { Inter } from "next/font/google"
import ClientLayout from "../components/client-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pacific Agriscience Hong Kong",
  description: "Leading provider of innovative agricultural solutions and crop protection products across Asia Pacific.",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-page text-page`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
