<template>
  <a>
    <button
      :class="[
        'rounded-full px-4 py-2 font-bold transition duration-300 shadow-lg',
        primary
          ? 'bg-denim text-white hover:bg-denim-400'
          : 'text-denim border-2 border-denim hover:text-denim-300 hover:border-denim-300 ',
      ]"
      @click="$emit('click')"
    >
      <slot />
    </button>
  </a>
</template>

<script>
export default {
  props: {
    primary: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
