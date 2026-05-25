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

  title:
    "Mishell Jiménez | Frontend Developer",

  description:
    "Portfolio profesional desarrollado con Next.js 14 mostrando proyectos, laboratorios y experiencia en desarrollo web frontend y full stack.",

  keywords: [
    "Frontend Developer",
    "Next.js",
    "React",
    "JavaScript",
    "Portfolio",
    "Web Developer",
    "TailwindCSS",
  ],

  authors: [
    {
      name: "Mishell Jiménez",
    },
  ],

  creator: "Mishell Jiménez",

  openGraph: {

    title:
      "Mishell Jiménez | Portfolio",

    description:
      "Portfolio profesional con proyectos frontend, full stack y aplicaciones web modernas.",

    url:
      "https://tu-portfolio.vercel.app",

    siteName:
      "Mishell Portfolio",

    locale: "es_GT",

    type: "website",
  },
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