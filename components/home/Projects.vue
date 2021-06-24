<template>
  <LayoutWavedSection>
    <LayoutContainer>
      <BaseHeader id="projects" class="text-center">
        My Projects
      </BaseHeader>
      <section>
        <span>All</span>
        <span>React</span>
        <span>Vue</span>
        <span>Full Stack</span>
      </section>
      <section class="grid grid-cols-3 grid-rows-3 gap-4">
        <ProjectCard
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </section>
    </LayoutContainer>
  </LayoutWavedSection>
</template>

<script>
import projects from '../../fixtures/projects'
export default {
  // provide: {
  //   activeCategory: this.activeCategory
  // },
  data () {
    return {
      projects,
      activeCategory: 'all'
    }
  }
}
</script>
