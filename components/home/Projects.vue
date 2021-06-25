<template>
  <LayoutWavedSection>
    <LayoutContainerBig>
      <BaseHeader id="projects" class="text-center">
        My Projects
      </BaseHeader>
      <section class="my-4 flex justify-around">
        <button v-for="label in ['All', 'React', 'Vue', 'Full Stack']" :key="label" @click="setCurrentCategory(label)">
          {{ label }}
        </button>
      </section>
      <section class="grid grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.name"
          :project="project"
          :current-category="currentCategory"
        />
      </section>
    </LayoutContainerBig>
  </LayoutWavedSection>
</template>

<script>
import projects from '../../fixtures/projects'
export default {
  data () {
    return {
      projects,
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
