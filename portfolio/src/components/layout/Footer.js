import {
  personalInfo,
} from "@/lib/data"

export default function Footer() {

  return (

    <footer
      className="
        border-t border-border
        mt-32
      "
    >

      <div
        className="
          section-container
          py-10

          flex flex-col
          md:flex-row

          items-center
          justify-between

          gap-6
        "
      >

        {/* LEFT */}

        <div>

          <h3
            className="
              text-xl font-heading
              font-bold text-white
            "
          >

            &lt;
            <span className="text-accent">
              Mishell
            </span>
            /&gt;

          </h3>

          <p
            className="
              text-muted mt-2
              text-sm
            "
          >
            Portfolio desarrollado con
            Next.js 14 y TailwindCSS.
          </p>

        </div>

        {/* RIGHT */}

        <div
          className="
            flex flex-col
            md:items-end
            items-center
            gap-2
          "
        >

          <p
            className="
              text-sm text-muted
            "
          >
            © {new Date().getFullYear()}
            {" "}
            {personalInfo.firstName}
            {" "}
            {personalInfo.lastName}
          </p>

          <div
            className="
              flex items-center gap-4
            "
          >

            <a
              href={
                personalInfo.socialLinks.github
              }

              target="_blank"

              className="
                text-muted hover:text-white
                transition-colors duration-300
              "
            >
              GitHub
            </a>

            <a
              href={
                personalInfo.socialLinks.linkedin
              }

              target="_blank"

              className="
                text-muted hover:text-white
                transition-colors duration-300
              "
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}