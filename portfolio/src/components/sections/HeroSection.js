"use client"

import { useEffect } from "react"

import {
  personalInfo,
  technologies,
} from "@/lib/data"

export default function HeroSection() {

  useEffect(() => {

    const elements =
      document.querySelectorAll(".reveal")

    elements.forEach((element, index) => {

      setTimeout(() => {

        element.classList.add(
          "opacity-100",
          "translate-y-0"
        )

      }, index * 150)

    })

  }, [])

  return (

    <section
      id="inicio"

      className="
        relative min-h-screen
        flex items-center
        overflow-hidden
      "
    >

      {/* EXTRA GLOW */}

      <div
        className="
          absolute top-0 left-1/2
          -translate-x-1/2

          w-[700px]
          h-[700px]

          rounded-full

          bg-[rgba(108,99,255,0.08)]

          blur-[140px]

          pointer-events-none
        "
      />

      <div className="section-container relative z-10">

        <div className="max-w-5xl">

          {/* TAG */}

          <div
            className="
              reveal opacity-0
              translate-y-10

              transition-all duration-700
            "
          >

            <span className="section-tag">
              Portfolio 2026
            </span>

          </div>

          {/* TITLE */}

          <div
            className="
              reveal opacity-0
              translate-y-10

              transition-all duration-700
            "
          >

            <h1
              className="
                mt-8

                text-5xl
                sm:text-6xl
                md:text-8xl

                font-heading
                font-bold

                leading-[0.95]
                tracking-tight

                text-white
              "
            >

              {personalInfo.firstName}

              <br />

              <span
                className="
                  text-accent
                "
              >
                {personalInfo.lastName}
              </span>

            </h1>

          </div>

          {/* CAREER */}

          <div
            className="
              reveal opacity-0
              translate-y-10

              transition-all duration-700
            "
          >

            <p
              className="
                text-xl md:text-2xl

                text-muted

                mt-10

                max-w-3xl
              "
            >
              {personalInfo.career}
            </p>

          </div>

          {/* DESCRIPTION */}

          <div
            className="
              reveal opacity-0
              translate-y-10

              transition-all duration-700
            "
          >

            <p
              className="
                text-base
                md:text-lg

                text-muted

                mt-8

                leading-relaxed

                max-w-2xl
              "
            >
              {personalInfo.description}
            </p>

          </div>

          {/* BUTTONS */}

          <div
            className="
              reveal opacity-0
              translate-y-10

              transition-all duration-700

              flex flex-wrap gap-5

              mt-12
            "
          >

            <a
              href="#proyectos"

              className="
                btn-primary
              "
            >
              Ver proyectos
            </a>

            <a
              href="#contacto"

              className="
                btn-outline
              "
            >
              Contactarme
            </a>

          </div>

          {/* SOCIALS */}

          <div
            className="
              reveal opacity-0
              translate-y-10

              transition-all duration-700

              flex items-center gap-5

              mt-12
            "
          >

            {/* GITHUB */}

            <a
              href={
                personalInfo.socialLinks.github
              }

              target="_blank"

              className="
                text-muted hover:text-white

                transition-all duration-300

                hover:scale-110
              "
            >

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >

                <path
                  d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.04 17.62 15.97 17.11 15.79 16.63C15.61 16.15 15.32 15.72 14.93 15.38C18.62 14.95 22.5 13.54 22.5 7.52C22.5 5.98 21.96 4.48 21 3.29C21.45 2.05 21.42 0.68 20.91 -0.54C20.91 -0.54 19.73 -0.89 16.99 0.91C14.71 0.29 12.29 0.29 10.01 0.91C7.27 -0.89 6.09 -0.54 6.09 -0.54C5.58 0.68 5.55 2.05 6 3.29C5.03 4.49 4.5 5.99 4.5 7.52C4.5 13.53 8.37 14.95 12.07 15.38C11.68 15.72 11.39 16.15 11.21 16.63C11.03 17.11 10.96 17.62 11 18.13V22"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

              </svg>

            </a>

            {/* LINKEDIN */}

            <a
              href={
                personalInfo.socialLinks.linkedin
              }

              target="_blank"

              className="
                text-muted hover:text-white

                transition-all duration-300

                hover:scale-110
              "
            >

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >

                <path
                  d="M16 8A6 6 0 0 1 22 14V21H18V14A2 2 0 0 0 16 12A2 2 0 0 0 14 14V21H10V9H14V11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <rect
                  x="2"
                  y="9"
                  width="4"
                  height="12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <circle
                  cx="4"
                  cy="4"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

              </svg>

            </a>

          </div>

          {/* TECH STACK */}

          <div
            className="
              reveal opacity-0
              translate-y-10

              transition-all duration-700

              flex flex-wrap gap-3

              mt-16
            "
          >

            {technologies.map((tech) => (

              <span
                key={tech}

                className="
                  tech-badge

                  hover:scale-105
                  transition-transform
                "
              >
                {tech}
              </span>

            ))}

          </div>

        </div>

      </div>

      {/* SCROLL INDICATOR */}

      <div
        className="
          absolute bottom-10 left-1/2
          -translate-x-1/2

          flex flex-col items-center
          gap-3

          text-muted

          scroll-indicator
        "
      >

        <span className="text-xs tracking-[0.3em] uppercase">
          Scroll
        </span>

        <div
          className="
            w-px h-14
            bg-gradient-to-b
            from-accent
            to-transparent
          "
        />

      </div>

    </section>
  )
}