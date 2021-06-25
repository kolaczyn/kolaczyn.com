<template>
  <LayoutWavedSection id="projects">
    <LayoutContainerBig>
      <BaseHeader id="projects" class="text-center">
        My Projects
      </BaseHeader>
      <section class="my-4 flex justify-around">
        <button v-for="label in categories" :key="label" @click="setCurrentCategory(label)">
          {{ label }}
        </button>
      </section>
      <section class="grid grid-cols-3 gap-6">
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
    }
  }
}
</script>
