import Image from "next/image"

export default function ProjectCard({ project }) {

  return (

    <article
      className="
        card-base overflow-hidden
        group
      "
    >

      {/* IMAGE */}

      <div
        className="
          relative h-52 overflow-hidden
          border-b border-border
        "
      >

        {project.image ? (

          <Image
            src={project.image}
            alt={project.name}
            fill
            className="
              object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
          />

        ) : (

          <div
            className="
              w-full h-full
              flex items-center justify-center
              bg-surface
            "
          >

            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              className="text-accent opacity-40"
            >

              <path
                d="M4 5H20V19H4V5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              <path
                d="M4 15L9 10L13 14L16 11L20 15"
                stroke="currentColor"
                strokeWidth="1.5"
              />

            </svg>

          </div>

        )}

        {/* TYPE BADGE */}

        <div
          className="
            absolute top-4 left-4
            px-3 py-1 rounded-full
            text-xs font-medium
            bg-[rgba(10,10,15,0.8)]
            backdrop-blur-md
            border border-border
          "
        >

          {project.type === "project"
            ? "Proyecto"
            : "Laboratorio"}

        </div>

      </div>

      {/* CONTENT */}

      <div className="p-6">

        {/* HEADER */}

        <div className="flex items-start justify-between gap-4">

          <div>

            <h3
              className="
                text-2xl font-heading
                font-bold text-white
              "
            >
              {project.name}
            </h3>

            <p
              className="
                text-muted mt-3
                leading-relaxed
              "
            >
              {project.description}
            </p>

          </div>

        </div>

        {/* TECH STACK */}

        <div
          className="
            flex flex-wrap gap-2
            mt-6
          "
        >

        {project.technologies?.map((tech) => (
            <span
              key={tech}
              className="tech-badge"
            >
              {tech}
            </span>

          ))}

        </div>

        {/* STATS */}

        <div
          className="
            flex items-center gap-5
            mt-6 text-sm text-muted
          "
        >

          {/* LANGUAGE */}

          {project.language && (

            <div className="flex items-center gap-2">

              <span
                className="
                  w-2.5 h-2.5 rounded-full
                  bg-accent
                "
              />

              <span>
                {project.language}
              </span>

            </div>

          )}

          {/* STARS */}

          <div className="flex items-center gap-2">

            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >

              <path
                d="M12 3L14.7 8.5L21 9.4L16.5 13.8L17.6 20L12 17L6.4 20L7.5 13.8L3 9.4L9.3 8.5L12 3Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />

            </svg>

            <span>
              {project.stars}
            </span>

          </div>

        </div>

        {/* BUTTONS */}

        <div
          className="
            flex gap-3 mt-8
          "
        >

          {/* GITHUB */}

          <a
            href={project.githubUrl}
            target="_blank"
            className="btn-primary flex-1"
          >

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >

              <path
                d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.04 17.62 15.97 17.11 15.79 16.63C15.61 16.15 15.32 15.72 14.93 15.38C18.62 14.95 22.5 13.54 22.5 7.52C22.5 5.98 21.96 4.48 21 3.29C21.45 2.05 21.42 0.68 20.91 -0.54C20.91 -0.54 19.73 -0.89 16.99 0.91C14.71 0.29 12.29 0.29 10.01 0.91C7.27 -0.89 6.09 -0.54 6.09 -0.54C5.58 0.68 5.55 2.05 6 3.29C5.03 4.49 4.5 5.99 4.5 7.52C4.5 13.53 8.37 14.95 12.07 15.38C11.68 15.72 11.39 16.15 11.21 16.63C11.03 17.11 10.96 17.62 11 18.13V22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

            </svg>

            Repositorio

          </a>

          {/* LIVE */}

          {project.live && (

            <a
              href={project.live}
              target="_blank"
              className="btn-outline flex-1"
            >

              Ver sitio

            </a>

          )}

        </div>

      </div>

    </article>
  )
}