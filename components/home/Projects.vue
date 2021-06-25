<template>
  <!-- <LayoutWavedSection>
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
  </LayoutWavedSection> -->

  <LayoutWavedSection>
    <LayoutContainer id="projects" class="py-20 space-y-8 flex align-middle">
      <div>
        <BaseHeader>
          My Projects
        </BaseHeader>
        <p class="my-3 opacity-75">
          Click to see the project
        </p>
        <ul
          class="list-inside list-disc"
        >
          <li
            v-for="({name, url}) in projects"
            :key="name"
          >
            <a class="text-ink-300" :href="url" target="_blank">
              {{ name }}
            </a>
          </li>
        </ul>
      </div>
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
