import ProjectCard from "@/components/ui/ProjectCard"

import { getRepositories } from "@/lib/github"

export default async function ProjectsSection() {

  const repositories =
    await getRepositories()

  const projects =
    repositories.filter(
      (repo) => repo.type === "project"
    )

  const labs =
    repositories.filter(
      (repo) => repo.type === "lab"
    )

  return (

    <section
      id="proyectos"
      className="section-container"
    >

      {/* HEADER */}

      <div className="mb-16">

        <span className="section-tag">
          Proyectos
        </span>

        <h2 className="section-title mt-4">

          Algunos proyectos y laboratorios
          desarrollados durante mi aprendizaje

        </h2>

      </div>

      {/* MAIN PROJECTS */}

      <div className="mb-24">

        <div className="flex items-center justify-between mb-10">

          <h3
            className="
              text-3xl font-heading
              font-bold text-white
            "
          >
            Proyectos principales
          </h3>

          <div
            className="
              h-px flex-1 ml-6
              bg-border
            "
          />

        </div>

        <div
          className="
            grid grid-cols-1
            md:grid-cols-2
            gap-8
          "
        >

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </div>

      {/* LABS */}

      <div>

        <div className="flex items-center justify-between mb-10">

          <h3
            className="
              text-3xl font-heading
              font-bold text-white
            "
          >
            Laboratorios
          </h3>

          <div
            className="
              h-px flex-1 ml-6
              bg-border
            "
          />

        </div>

        <div
          className="
            grid grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >

          {labs.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </div>

    </section>
  )
}