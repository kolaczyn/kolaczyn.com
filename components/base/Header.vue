<template>
  <h1 class="text-2xl">
    <slot />
  </h1>
</template>

<style scoped>
h1 {
}
h1::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  z-index: -1;
  background-color: teal;
}
</style>
