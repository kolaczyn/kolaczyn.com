<template>
  <div class="min-h-screen flex">
    <section class="border-r-4 border-denim-100 max-w-sm lg:max-w-md">
      <ProjectDescription
        :project="project"
      />
    </section>
    <div class="flex-1">
      <iframe class="w-full h-full" :src="project.url" />
    </div>
  </div>
</template>

<script>
import projects from '../../fixtures/projects'
export default {
  head () {
    return {
      title: `${this.project.name} | Paweł Kołaczyński`
    }
  },

  computed: {
    project () {
      const { project } = this.$route.params
      return { ...projects.byId[project], slug: project }
    }
  }
}
</script>
