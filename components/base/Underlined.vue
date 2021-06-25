<template>
  <div class="wrapper">
    <span class="underlined">
      <slot />
    </span>
  </div>
</template>

<style scoped>
.wrapper {
  /* background-color: palegreen; */
  display: inline-block;
  position: relative;
  /* z-index: 1; */
}
.wrapper {
  z-index: 1;
}
.underlined::after {
  content: '';
  width: calc(95% + .35rem);
  height: 50%;
  right: 0;
  top: 60%;
  left: 5%;
  z-index: -1;
  position: absolute;

  display: inline-block;
  /* background-color: palevioletred; */
  @apply bg-bright-sun;
}
</style>
