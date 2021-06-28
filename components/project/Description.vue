<template>
  <div class="flex flex-col justify-between h-full">
    <div class="flex flex-col p-6">
      <header>
        <div class="flex items-center justify-between mb-2">
          <BaseHeader as="h1">
            {{ project.name }}
          </BaseHeader>
          <span>{{ projectIdx + 1 }} of {{ numberOfProjects }}</span>
        </div>
        <div class="flex justify-between">
          <ProjectLink :url="project.url">
            Visit Website
          </ProjectLink>
          <ProjectLink :url="project.repo">
            Repository
          </ProjectLink>
        </div>
      </header>
      <p class="mt-6 my-10">
        {{
          project.about
        }}
      </p>
      <BaseHeader text-size="text-3xl" class="self-end" as="h2">
        Tech Stack
      </BaseHeader>
      <ul class="my-6 list-inside list-disc">
        <li v-for="tech in project.techStack" :key="tech">
          {{ tech }}
        </li>
      </ul>
      <BaseHeader text-size="text-3xl" as="h3">
        Post Mortem
      </BaseHeader>
      <p class="my-10">
        {{
          project.postMortem
        }}
      </p>
    </div>
    <footer class="flex justify-between bg-bright-sun-200">
      <ProjectNavigation :to="'/project/' + previousUrl">
        <fa icon="chevron-left" />
        <span class="ml-2">
          Previous
        </span>
      </ProjectNavigation>
      <ProjectNavigation to="/#projects">
        Return
      </ProjectNavigation>
      <ProjectNavigation :to="'/project/' + nextUrl">
        <span class="mr-2">
          Next
        </span>
        <fa icon="chevron-right" />
      </ProjectNavigation>
    </footer>
  </div>
</template>

<script>
import projects from '../../fixtures/projects'
export default {
  props: {
    project: {
      required: true,
      type: Object
    }
  },
  computed: {
    projectIdx () {
      return projects.allIds.findIndex(element => element === this.project.slug)
    },
    // reimplement this with clamp
    previousUrl () {
      let potentialId = this.projectIdx - 1
      if (potentialId < 0) {
        potentialId = projects.allIds.length - 1
      }
      return projects.allIds[potentialId]
    },
    nextUrl () {
      let potentialId = this.projectIdx + 1
      if (potentialId > projects.allIds.length - 1) {
        potentialId = 0
      }
      return projects.allIds[potentialId]
    },
    numberOfProjects () {
      return projects.allIds.length
    }
  }

}
</script>
