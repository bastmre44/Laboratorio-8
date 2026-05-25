import {
  aboutMe,
} from "@/lib/data"

export default function AboutSection() {

  return (

    <section
      id="sobre-mi"
      className="section-container"
    >

      {/* HEADER */}

      <div className="mb-16">

        <span className="section-tag">
          Sobre mí
        </span>

        <h2 className="section-title mt-4">

          Conociendo más sobre mi
          experiencia y objetivos

        </h2>

      </div>

      {/* GRID */}

      <div
        className="
          grid grid-cols-1
          lg:grid-cols-2
          gap-8
        "
      >

        {/* LEFT COLUMN */}

        <div className="space-y-8">

          {/* STORY */}

          <article className="card-base p-8">

            <h3
              className="
                text-2xl font-heading
                font-bold text-white
                mb-6
              "
            >
              Mi historia
            </h3>

            <p
              className="
                text-muted
                leading-relaxed
              "
            >
              {aboutMe.story}
            </p>

          </article>

          {/* LEARNING */}

          <article className="card-base p-8">

            <h3
              className="
                text-2xl font-heading
                font-bold text-white
                mb-6
              "
            >
              Lo que aprendí
            </h3>

            <p
              className="
                text-muted
                leading-relaxed
              "
            >
              {aboutMe.learning}
            </p>

          </article>

          {/* EXPERIENCE */}

          <article className="card-base p-8">

            <h3
              className="
                text-2xl font-heading
                font-bold text-white
                mb-6
              "
            >
              Experiencia
            </h3>

            <p
              className="
                text-muted
                leading-relaxed
              "
            >
              {aboutMe.experience}
            </p>

          </article>

        </div>

        {/* RIGHT COLUMN */}

        <div className="space-y-8">

          {/* INTERESTS */}

          <article className="card-base p-8">

            <h3
              className="
                text-2xl font-heading
                font-bold text-white
                mb-6
              "
            >
              Intereses profesionales
            </h3>

            <ul className="space-y-4">

              {aboutMe.professionalInterests.map((item) => (

                <li
                  key={item}
                  className="
                    text-muted
                    flex items-start gap-3
                  "
                >

                  <span className="text-accent">
                    ▸
                  </span>

                  {item}

                </li>

              ))}

            </ul>

          </article>

          {/* FAVORITE TECH */}

          <article className="card-base p-8">

            <h3
              className="
                text-2xl font-heading
                font-bold text-white
                mb-6
              "
            >
              Tecnologías favoritas
            </h3>

            <div className="flex flex-wrap gap-3">

              {aboutMe.favoriteTechnologies.map((tech) => (

                <span
                  key={tech}
                  className="tech-badge"
                >
                  {tech}
                </span>

              ))}

            </div>

          </article>

          {/* LEARNING GOALS */}

          <article className="card-base p-8">

            <h3
              className="
                text-2xl font-heading
                font-bold text-white
                mb-6
              "
            >
              Áreas que deseo aprender
            </h3>

            <ul className="space-y-4">

              {aboutMe.learningGoals.map((item) => (

                <li
                  key={item}
                  className="
                    text-muted
                    flex items-start gap-3
                  "
                >

                  <span className="text-accent">
                    ◦
                  </span>

                  {item}

                </li>

              ))}

            </ul>

          </article>

        </div>

      </div>

    </section>
  )
}