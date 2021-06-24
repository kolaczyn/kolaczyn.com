<template>
  <section :class="['flex items-center', reverse ? 'flex-row-reverse': '']">
    <div class="flex-1">
      <header>
        <BaseHeader>
          <slot name="header" />
        </BaseHeader>
      </header>
      <slot />
    </div>
    <div class="flex-1">
      <img class="self-center transform mx-auto" :src="require(`~/assets/${imgUrl}`)">
    </div>
  </section>
</template>

<script>
export default {
  props: {
    imgUrl: {
      required: true,
      type: String
    },
    reverse: {
      required: false,
      default: false,
      type: Boolean
    }
  }
}
</script>

<style>
</style>
