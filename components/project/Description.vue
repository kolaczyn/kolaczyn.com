<template>
  <div class="flex flex-col justify-between h-full">
    <div class="flex flex-col p-8">
      <header class="flex items-center justify-between">
        <BaseHeader as="h1">
          {{ project.name }}
        </BaseHeader>
        <span>{{ projectIdx + 1 }} of {{ numberOfProjects }}</span>
      </header>
      <p class="my-12">
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
      <p class="my-12">
        {{
          project.postMortem
        }}
      </p>
    </div>
    <footer class="flex justify-between p-8 bg-gray-200">
      <NuxtLink :to="'/project/' + previousUrl">
        Previous
      </NuxtLink>
      <NuxtLink to="/#projects">
        Return
      </NuxtLink>
      <NuxtLink :to="'/project/' + nextUrl">
        Next
      </NuxtLink>
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
