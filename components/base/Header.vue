<template>
  <component :is="renderAs" :class="[textSize,'font-bold']">
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
    },
    textSize: {
      type: String,
      required: false,
      default: 'text-4xl'
    }
  }
}
</script>

<style scoped></style>
