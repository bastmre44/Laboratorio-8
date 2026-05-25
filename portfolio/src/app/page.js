"use client"

import { navLinks } from "@/lib/data"

export default function Navbar() {

  return (

    <header
      className="
        fixed top-0 left-0 w-full
        border-b border-border
        bg-[rgba(10,10,15,0.8)]
        backdrop-blur-xl
        z-50
      "
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

        {/* LINKS */}

        <div className="flex gap-8">

          {navLinks.map((link) => (

            <button
              key={link.href}
              className="
                text-muted hover:text-white
                transition-colors duration-300
              "
            >
              {link.label}
            </button>

          ))}

        </div>

      </nav>

    </header>
  )
}