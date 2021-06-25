<template>
  <a :href="project.url" class="rounded-lg shadow-lg overflow-hidden" target="_blank">
    <div class="relative">
      <img
        :src="require(`~/assets/img/project/${project.slug}.png`)"
      >
      <div class="absolute left-0 top-0 z-10 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black">
        <h3 class="absolute text-white bottom-0 m-2 z-20">
          {{ project.name }}
        </h3>
      </div>
    </div>
    <!-- <span v-for="category in project.categories" :key="category">{{ category }}</span> -->
  </a>
</template>

<script>
export default {
  props: {
    project: {
      required: true,
      type: Object
    }
  }
}
</script>
