<template>
  <component :is="renderAs" :class="['font-bold']">
    <BaseUnderlined>
      <slot />
    </BaseUnderlined>
  </component>
</template>

<script>
export default {
  props: {
    renderAs: {
      type: String,
      required: false,
      default: 'h2'
    }
  }
}
</script>

<style scoped></style>
