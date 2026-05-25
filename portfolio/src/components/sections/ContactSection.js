"use client"

import { useState } from "react"

import {
  personalInfo,
} from "@/lib/data"

export default function ContactSection() {

  const [status, setStatus] =
    useState("idle")

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      message: "",
    })

  function handleChange(event) {

    setFormData({
      ...formData,
      [event.target.name]:
        event.target.value,
    })
  }

  function handleSubmit(event) {

    event.preventDefault()

    setStatus("sending")

    const subject =
      `Mensaje de ${formData.name}`

    const body =
      `
Nombre: ${formData.name}

Email: ${formData.email}

Mensaje:
${formData.message}
`

    window.location.href =
      `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setTimeout(() => {
      setStatus("success")
    }, 1000)
  }

  return (

    <section
      id="contacto"
      className="section-container"
    >

      {/* HEADER */}

      <div className="mb-16">

        <span className="section-tag">
          Contacto
        </span>

        <h2 className="section-title mt-4">

          ¿Te interesa trabajar conmigo
          o colaborar en un proyecto?

        </h2>

      </div>

      {/* GRID */}

      <div
        className="
          grid grid-cols-1
          lg:grid-cols-2
          gap-10
        "
      >

        {/* LEFT SIDE */}

        <div className="space-y-6">

          {/* EMAIL */}

          <a
            href={personalInfo.socialLinks.email}

            className="
              card-base p-6
              flex items-center gap-5
            "
          >

            <div
              className="
                w-14 h-14 rounded-2xl
                bg-accent
                flex items-center justify-center
              "
            >

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >

                <path
                  d="M4 6H20V18H4V6Z"
                  stroke="white"
                  strokeWidth="1.5"
                />

                <path
                  d="M4 7L12 13L20 7"
                  stroke="white"
                  strokeWidth="1.5"
                />

              </svg>

            </div>

            <div>

              <p className="text-sm text-muted">
                Email
              </p>

              <h3 className="text-white font-medium">
                {personalInfo.email}
              </h3>

            </div>

          </a>

          {/* GITHUB */}

          <a
            href={personalInfo.socialLinks.github}

            target="_blank"

            className="
              card-base p-6
              flex items-center gap-5
            "
          >

            <div
              className="
                w-14 h-14 rounded-2xl
                bg-accent
                flex items-center justify-center
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
                  stroke="white"
                  strokeWidth="1.5"
                />

              </svg>

            </div>

            <div>

              <p className="text-sm text-muted">
                GitHub
              </p>

              <h3 className="text-white font-medium">
                bastmre44
              </h3>

            </div>

          </a>

          {/* LINKEDIN */}

          <a
            href={personalInfo.socialLinks.linkedin}

            target="_blank"

            className="
              card-base p-6
              flex items-center gap-5
            "
          >

            <div
              className="
                w-14 h-14 rounded-2xl
                bg-accent
                flex items-center justify-center
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
                  stroke="white"
                  strokeWidth="1.5"
                />

                <rect
                  x="2"
                  y="9"
                  width="4"
                  height="12"
                  stroke="white"
                  strokeWidth="1.5"
                />

                <circle
                  cx="4"
                  cy="4"
                  r="2"
                  stroke="white"
                  strokeWidth="1.5"
                />

              </svg>

            </div>

            <div>

              <p className="text-sm text-muted">
                LinkedIn
              </p>

              <h3 className="text-white font-medium">
                Mishell Jiménez
              </h3>

            </div>

          </a>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}

          className="
            card-base p-8
            space-y-6
          "
        >

          <div>

            <label className="text-sm text-muted">
              Nombre
            </label>

            <input
              type="text"
              name="name"
              required

              value={formData.name}

              onChange={handleChange}

              className="
                w-full mt-2
                bg-surface
                border border-border
                rounded-xl
                px-4 py-3
                text-white
                outline-none
              "
            />

          </div>

          <div>

            <label className="text-sm text-muted">
              Email
            </label>

            <input
              type="email"
              name="email"
              required

              value={formData.email}

              onChange={handleChange}

              className="
                w-full mt-2
                bg-surface
                border border-border
                rounded-xl
                px-4 py-3
                text-white
                outline-none
              "
            />

          </div>

          <div>

            <label className="text-sm text-muted">
              Mensaje
            </label>

            <textarea
              name="message"
              rows="6"
              required

              value={formData.message}

              onChange={handleChange}

              className="
                w-full mt-2
                bg-surface
                border border-border
                rounded-xl
                px-4 py-3
                text-white
                outline-none
                resize-none
              "
            />

          </div>

          <button
            type="submit"

            className="btn-primary w-full"
          >

            {
              status === "idle" &&
              "Enviar mensaje"
            }

            {
              status === "sending" &&
              "Abriendo correo..."
            }

            {
              status === "success" &&
              "Correo preparado"
            }

          </button>

        </form>

      </div>

    </section>
  )
}