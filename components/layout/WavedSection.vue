<template>
  <div>
    <img class="col-span-4 transform translate-y-0.5 w-full scale-y-50 origin-bottom" :src="require('~/assets/waves.svg')">
    <div class="bg-peach z-10 py-4">
      <slot />
    </div>
    <div class="transform scale-y-50 origin-top z-0">
      <img class="col-span-4 transform -translate-y-0.5  w-full rotate-180" :src="require('~/assets/waves.svg')">
    </div>
  </div>
</template>
