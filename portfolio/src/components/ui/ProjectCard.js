export default function ProjectCard({
  project,
}) {

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
          h-52 overflow-hidden
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
              duration-500

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

      </div>

      {/* CONTENT */}

      <div className="p-6">

        {/* TYPE */}

        <div className="mb-4">

          <span
            className="
              px-3 py-1 rounded-full
              text-xs font-medium

              bg-[rgba(108,99,255,0.12)]
              border border-[rgba(108,99,255,0.2)]

              text-accent
            "
          >

            {project.type === "project"
              ? "Proyecto"
              : "Laboratorio"}

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

          {project.technologies?.map((tech) => (

            <span
              key={tech}
              className="tech-badge"
            >
              {tech}
            </span>

          ))}

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

          {/* BUTTON */}

          <a
            href={project.githubUrl}

            target="_blank"

            className="btn-outline"
          >
            GitHub
          </a>

        </div>

      </div>

    </article>
  )
}