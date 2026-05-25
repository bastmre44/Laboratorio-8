"use client"

import { useEffect, useState } from "react"

import { navLinks } from "@/lib/data"

export default function Navbar() {

  const [scrolled, setScrolled] =
    useState(false)

  const [menuOpen, setMenuOpen] =
    useState(false)

  useEffect(() => {

    function handleScroll() {

      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

    }

    window.addEventListener(
      "scroll",
      handleScroll
    )

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      )
    }

  }, [])

  function scrollToSection(id) {

    const section =
      document.getElementById(id)

    if (!section) return

    section.scrollIntoView({
      behavior: "smooth",
    })

    setMenuOpen(false)
  }

  return (

    <header
      className={`
        fixed top-0 left-0 w-full
        z-50 transition-all duration-300

        ${
          scrolled
            ? "bg-[rgba(10,10,15,0.8)] backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }
      `}
    >

      <nav
        className="
          max-w-6xl mx-auto
          px-6 py-5
          flex items-center justify-between
        "
      >

        {/* LOGO */}

        <button
          onClick={() =>
            scrollToSection("inicio")
          }
          className="
            text-2xl font-bold text-white
            font-heading
          "
        >
          &lt;
          <span className="text-accent">
            Mishell
          </span>
          /&gt;
        </button>

        {/* DESKTOP LINKS */}

        <div
          className="
            hidden md:flex
            items-center gap-8
          "
        >

          {navLinks.map((link) => (

            <button
              key={link.href}

              onClick={() =>
                scrollToSection(link.href)
              }

              className="
                text-muted hover:text-white
                transition-colors duration-300
              "
            >
              {link.label}
            </button>

          ))}

        </div>

        {/* MOBILE BUTTON */}

        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }

          className="
            md:hidden
            flex flex-col gap-1.5
          "
        >

          <span
            className={`
              w-6 h-0.5 bg-white
              transition-all duration-300

              ${
                menuOpen
                  ? "rotate-45 translate-y-2"
                  : ""
              }
            `}
          />

          <span
            className={`
              w-6 h-0.5 bg-white
              transition-all duration-300

              ${
                menuOpen
                  ? "opacity-0"
                  : ""
              }
            `}
          />

          <span
            className={`
              w-6 h-0.5 bg-white
              transition-all duration-300

              ${
                menuOpen
                  ? "-rotate-45 -translate-y-2"
                  : ""
              }
            `}
          />

        </button>

      </nav>

      {/* MOBILE MENU */}

      <div
        className={`
          md:hidden overflow-hidden
          transition-all duration-300

          ${
            menuOpen
              ? "max-h-96 border-t border-border"
              : "max-h-0"
          }

          bg-card
        `}
      >

        <div className="p-6 flex flex-col gap-5">

          {navLinks.map((link) => (

            <button
              key={link.href}

              onClick={() =>
                scrollToSection(link.href)
              }

              className="
                text-left text-muted
                hover:text-white
                transition-colors duration-300
              "
            >
              {link.label}
            </button>

          ))}

        </div>

      </div>

    </header>
  )
}