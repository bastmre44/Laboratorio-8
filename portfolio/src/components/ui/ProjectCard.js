export default function ProjectCard({
  project,
}) {

  return (

    <article
      className="
        card-base overflow-hidden
        group relative
      "
    >

      {/* GLOW */}

      <div
        className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500

          bg-[radial-gradient(circle_at_top,rgba(108,99,255,0.15),transparent_60%)]

          pointer-events-none
        "
      />

      {/* IMAGE */}

      <div
        className="
          relative h-56 overflow-hidden
          border-b border-border
          bg-surface
        "
      >

        {project.image ? (

          <img
            src={project.image}

            alt={project.name}

            className="
              w-full h-full object-cover

              transition-transform
              duration-700

              group-hover:scale-105
            "
          />

        ) : (

          <div
            className="
              w-full h-full
              flex items-center justify-center
            "
          >

            <span
              className="
                text-accent opacity-40
                text-lg
              "
            >
              Sin preview
            </span>

          </div>

        )}

        {/* OVERLAY */}

        <div
          className="
            absolute inset-0

            bg-gradient-to-t
            from-[rgba(10,10,15,0.7)]
            to-transparent
          "
        />

      </div>

      {/* CONTENT */}

      <div className="p-7 relative z-10">

        {/* BADGE */}

        <div className="mb-5">

          <span
            className="
              px-3 py-1 rounded-full
              text-xs font-medium

              bg-[rgba(108,99,255,0.12)]
              border border-[rgba(108,99,255,0.25)]

              text-accent
            "
          >

            {
              project.type === "project"
                ? "Proyecto"
                : "Laboratorio"
            }

          </span>

        </div>

        {/* TITLE */}

        <h3
          className="
            text-2xl font-heading
            font-bold text-white
          "
        >
          {project.name}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            text-muted mt-4
            leading-relaxed
          "
        >
          {project.description}
        </p>

        {/* TECH */}

        <div
          className="
            flex flex-wrap gap-2
            mt-6
          "
        >

          {project.technologies?.map(
            (tech) => (

              <span
                key={tech}
                className="tech-badge"
              >
                {tech}
              </span>

            )
          )}

        </div>

        {/* FOOTER */}

        <div
          className="
            flex items-center
            justify-between
            mt-8
          "
        >

          {/* LANGUAGE */}

          <div
            className="
              flex items-center gap-2
              text-sm text-muted
            "
          >

            <span
              className="
                w-2.5 h-2.5 rounded-full
                bg-accent
              "
            />

            {project.language}

          </div>

          {/* BUTTONS */}

          <div className="flex gap-3">

            {/* GITHUB */}

            <a
              href={project.githubUrl}

              target="_blank"

              className="btn-outline"
            >
              GitHub
            </a>

            {/* LIVE */}

            {(project.live ||
              project.homepage) && (

              <a
                href={
                  project.live ||
                  project.homepage
                }

                target="_blank"

                className="btn-primary"
              >
                Demo
              </a>

            )}

          </div>

        </div>

      </div>

    </article>
  )
}