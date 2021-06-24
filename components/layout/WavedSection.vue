<template>
  <div>
    <img class="col-span-4 transform translate-y-0.5" :src="require('~/assets/waves.svg')">
    <div class="bg-peach">
      <slot />
    </div>
    <img class="col-span-4 transform -translate-y-0.5 rotate-180" :src="require('~/assets/waves.svg')">
  </div>
</template>
