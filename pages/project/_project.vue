<template>
  <div class="min-h-screen grid grid-cols-12">
    <section class="col-span-3 border-r-2 border-denim-100">
      <ProjectDescription
        :project="project"
      />
    </section>
    <div class="col-span-9">
      <iframe class="w-full h-full" :src="project.url" />
      <!-- <iframe class="w-full h-full" src="http://localhost:3000/project/lol" /> -->
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
