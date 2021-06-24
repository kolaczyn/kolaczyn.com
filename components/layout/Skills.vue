<template>
  <section class="grid grid-cols-2">
    <div>
      <header>
        <h2>
          <slot name="header" />
        </h2>
      </header>
      <slot />
    </div>
    <img :src="imgUrl">
  </section>
</template>

<script>
export default {
  props: {
    imgUrl: {
      required: true,
      type: String
    }
  }
}
</script>

<style>
</style>
