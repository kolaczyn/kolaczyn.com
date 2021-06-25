<template>
  <div>
    <img class="col-span-4 transform translate-y-0.5 w-full" :src="require('~/assets/waves.svg')">
    <div class="bg-peach pb-14">
      <slot />
    </div>
    <img class="col-span-4 transform -translate-y-0.5 w-full rotate-180" :src="require('~/assets/waves.svg')">
  </div>
</template>
