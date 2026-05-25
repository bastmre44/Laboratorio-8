import "./../styles/globals.css"

import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "Portfolio",
  description: "Personal portfolio made with Next.js 14",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`
          ${syne.variable}
          ${dmSans.variable}
          ${jetbrains.variable}
        `}
      >
        {children}
      </body>
    </html>
  )
}