<template>
  <NuxtLink
    :class="['group','rounded-lg shadow-lg overflow-hidden ring-opacity-100 transition duration-500 ease-in', inCategory ? 'ring-8 ring-denim-200' : '']"
    :to="`/project/${project.slug}`"
  >
    <div class="relative">
      <img
        :alt="project.name"
        :src="require(`~/assets/img/project/${project.imgName}`)"
      >
      <div class="absolute left-0 top-0 z-10 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black">
        <h3 class="absolute text-white bottom-0 m-2 z-20 text-4xl text-center md:text-left md:text-3xl">
          {{ project.name }}
        </h3>
      </div>
      <div class="absolute inset-0 z-20 bg-yellow-500 transform -translate-y-full group-hover:translate-y-0 opacity-70">
        {{ project.about }}
      </div>
    </div>
  </NuxtLink>
  </a>
</template>

<script>
export default {
  props: {
    project: {
      required: true,
      type: Object
    },
    currentCategory: {
      required: true,
      type: String
    }
  },
  computed: {
    isSelected () {
      return this.currentCategory === 'All' || this.inCategory()
    },
    inCategory () {
      return this.project.categories.includes(this.currentCategory)
    }
  }
}
</script>
