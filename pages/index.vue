<template>
  <div>
    <HomeHero />
    <HomeSkills />
    <HomeProjects />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Paweł Kołaczyński | Portfolio'
    }
  }
}
</script>

<style scoped>
h1 > span {
  background-color: red;
  background-size: 100% 0.2em;
}</style>
