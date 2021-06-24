<template>
  <a :href="project.url" target="_blank">
    <img
      :src="require('~/assets/profile.png')"
    >
    <span v-for="category in project.categories" :key="category">{{ category }}</span>
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
