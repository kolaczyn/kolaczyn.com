<template>
  <LayoutWavedSection id="projects">
    <LayoutContainerBig>
      <BaseHeader id="projects" class="transform translate-y-0 sm:-translate-y-16 md:-translate-y-24 -mt-6 mb-8 text-center">
        My Projects
      </BaseHeader>
      <section class="transform max-w-md mx-auto translate-y-0 sm:-translate-y-12 flex justify-around my-4">
        <button v-for="label in categories" :key="label" @click="setCurrentCategory(label)">
          {{ label }}
        </button>
      </section>
      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6">
        <ProjectCard
          v-for="slug in projects.allIds"
          :key="slug"
          :project="{slug, ...projects.byId[slug]}"
          :current-category="currentCategory"
        />
      </section>
    </LayoutContainerBig>
  </LayoutWavedSection>
</template>

<script>
import projects, { categories } from '../../fixtures/projects'
export default {
  data () {
    return {
      projects,
      categories,
      // activeCategory: 'all',
      currentCategory: 'All'
    }
  },
  methods: {
    setCurrentCategory (category) {
      this.currentCategory = category
    },
    isActive: label => label === this.currentCategory
  }
}
</script>
