import ProjectCard from "@/components/ui/ProjectCard"

import { getRepositories } from "@/lib/github"

export default async function ProjectsSection() {

  const repositories =
    await getRepositories()

  const courseProjects =
    repositories.filter(
      (repo) =>
        repo.category === "course"
    )

  const extraProjects =
    repositories.filter(
      (repo) =>
        repo.category === "extra"
    )

  const labs =
    repositories.filter(
      (repo) =>
        repo.category === "lab"
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

      {/* COURSE PROJECTS */}

      <div className="mb-24">

        <div
          className="
            flex items-center gap-6
            mb-10
          "
        >

          <h3
            className="
              text-3xl font-heading
              font-bold text-white
              whitespace-nowrap
            "
          >
            Proyectos del curso
          </h3>

          <div className="h-px bg-border flex-1" />

        </div>

        <div
          className="
            grid grid-cols-1
            md:grid-cols-2
            gap-8
          "
        >

          {courseProjects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </div>

      {/* EXTRA PROJECTS */}

      <div className="mb-24">

        <div
          className="
            flex items-center gap-6
            mb-10
          "
        >

          <h3
            className="
              text-3xl font-heading
              font-bold text-white
              whitespace-nowrap
            "
          >
            Otros proyectos
          </h3>

          <div className="h-px bg-border flex-1" />

        </div>

        <div
          className="
            grid grid-cols-1
            md:grid-cols-2
            gap-8
          "
        >

          {extraProjects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </div>

      {/* LABS */}

      <div>

        <div
          className="
            flex items-center gap-6
            mb-10
          "
        >

          <h3
            className="
              text-3xl font-heading
              font-bold text-white
              whitespace-nowrap
            "
          >
            Laboratorios
          </h3>

          <div className="h-px bg-border flex-1" />

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