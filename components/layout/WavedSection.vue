<template>
  <div>
    <img alt="" class="bg-peach sm:bg-transparent col-span-4 transform translate-y-0.5 w-full scale-y-50 origin-bottom" :src="require('~/assets/waves.svg')">
    <div class="bg-peach z-10 py-4">
      <slot />
    </div>
    <!-- I know that this component has a weird structure, but I don't want to spend time to figure out a more clean way -->
    <div class="h-12 bg-peach" />
    <!-- <div class="bg-peach sm:bg-transparent transform scale-y-50 origin-top z-0">
        <img alt="" class="col-span-4 transform -translate-y-0.5  w-full rotate-180" :src="require('~/assets/waves.svg')">
      </div> -->
  </div>
</template>
