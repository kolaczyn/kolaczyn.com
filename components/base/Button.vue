<template>
  <button class="rounded-fulls bg-blue-500 text-white p-2" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    href: {
      required: true,
      type: String
    }
  }
}
</script>
