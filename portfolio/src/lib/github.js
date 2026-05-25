import {
  featuredProjects,
  hiddenRepositories,
} from "@/lib/data"

export async function getRepositories() {

  const username = "bastmre44"

  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      next: {
        revalidate: 3600,
      },
    }
  )

  if (!response.ok) {
    throw new Error("Error obteniendo repositorios")
  }

  const repositories = await response.json()

  const filteredRepositories = repositories

    .filter((repo) => !repo.fork)

    .filter(
      (repo) =>
        !hiddenRepositories.includes(repo.name)
    )

    .filter(
      (repo) =>
        featuredProjects[repo.name]
    )

    .sort(
      (a, b) =>
        new Date(b.updated_at) -
        new Date(a.updated_at)
    )

  return filteredRepositories.map((repo) => {

    const customData =
      featuredProjects[repo.name] || {}

    return {

      id: repo.id,

      name: repo.name,

      description:
        repo.description ||
        "Sin descripción disponible",

      githubUrl: repo.html_url,

      homepage:
        repo.homepage || "",

      language:
        repo.language || "Code",

      stars:
        repo.stargazers_count || 0,

      updatedAt:
        repo.updated_at,

      image:
        customData.image || "",

      featured:
        customData.featured || false,

      type:
        customData.type || "project",

      live:
        customData.live || "",

      technologies:
        customData.technologies || [],
    }
  })
}