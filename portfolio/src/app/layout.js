import "./../styles/globals.css"

import {
  Syne,
  DM_Sans,
  JetBrains_Mono,
} from "next/font/google"

const syne = Syne({
  subsets: ["latin"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
})

export const metadata = {
  title: "Mishell Portfolio",

  description:
    "Portfolio desarrollado con Next.js 14",
}

export default function RootLayout({
  children,
}) {

  return (
    <html lang="es">

      <body
        className={`
          ${syne.className}
          ${dmSans.className}
          ${jetbrains.className}
          bg-primary text-white
        `}
      >

        {children}

      </body>

    </html>
  )
}