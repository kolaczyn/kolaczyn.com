<template>
  <LayoutContainerBig class="bg-peach-500 border-t-2 border-peach-600 py-4">
    <ul class="flex sm:justify-around justify-between">
      <li v-for="{url, label} in footerLinks" :key="label">
        <BaseLink class="text-ink hover:text-ink-400" :href="url">
          {{ label }}
        </BaseLink>
      </li>
    </ul>
  </LayoutContainerBig>
</template>

<script>
import footerLinks from '../../fixtures/footer'
export default {
  data () {
    return {
      footerLinks
    }
  }
}
</script>
