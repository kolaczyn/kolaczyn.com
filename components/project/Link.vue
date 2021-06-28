<template>
  <a target="_blank" class="text-denim-300 hover:text-denim-400 hover:underline transition duration-300" :href="url">
    <span class="text-xl mr-1">
      <slot />
    </span>
    <fa class="text-sm" icon="external-link-alt" />
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  }
}
</script>
