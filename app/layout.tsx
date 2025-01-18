import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mobile Solutionz - Premium Mobile Car Detailing in Medford, Oregon',
  description: 'Experience professional mobile car detailing services in Medford and Southern Oregon. We bring excellence to your doorstep with our premium auto detailing solutions.',
  keywords: 'car detailing, mobile detailing, Medford, Southern Oregon, auto detailing, vehicle cleaning, ceramic coating',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Import your additional font (Impact) from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Impact&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} bg-black overflow-x-hidden`}
        style={{ minHeight: '100vh' }}
      >
        {children}
      </body>
    </html>
  )
}
