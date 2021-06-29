
<template>
  <a
    target="_blank"
    class="
      text-denim-300
      hover:text-denim-400
      hover:underline
      transition
      duration-300
    "
    :href="url"
  >
    <slot />
  </a>
</template>
