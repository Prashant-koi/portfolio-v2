import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: 'Prasant Koirala — Software Engineer',
  description: 'Portfolio of Prasant Koirala — Software Engineer, Meta Production Engineering Fellow, and open source contributor.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="grid-background">
        {children}
        <Analytics />
      </body>
    </html>
  )
}