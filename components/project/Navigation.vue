<template>
  <NuxtLink :to="to" class="p-6 flex-1 text-center transition duration-500 ease-out hover:bg-bright-sun-300 text-gray-500 hover:text-gray-800 uppercase text-sm font-bold">
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: {
      required: true,
      type: String
    }

  }
}
</script>
