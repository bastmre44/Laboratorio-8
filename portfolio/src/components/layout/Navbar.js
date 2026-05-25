"use client"

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

        <h1
          className="
            text-2xl font-bold text-white
          "
        >
          &lt;
          <span className="text-accent">
            Mishell
          </span>
          /&gt;
        </h1>

        <div className="flex gap-6">

          <button className="text-muted hover:text-white">
            Inicio
          </button>

          <button className="text-muted hover:text-white">
            Proyectos
          </button>

          <button className="text-muted hover:text-white">
            Contacto
          </button>

        </div>

      </nav>

    </header>
  )
}