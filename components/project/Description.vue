<template>
  <div class="flex flex-col justify-between h-full">
    <div class="flex flex-col">
      <header>
        <BaseHeader as="h1">
          {{ project.name }}
        </BaseHeader>
      </header>
      <p class="my-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, blanditiis adipisci! Rerum omnis animi explicabo blanditiis perferendis nam, facere sint.
      </p>
      <BaseHeader text-size="text-3xl" class="self-end" as="h2">
        Tech Stack
      </BaseHeader>
      <ul class="my-6 list-inside list-disc">
        <li v-for="lorem in ['lorem', 'ipsum', 'dolor', 'sit']" :key="lorem">
          {{ lorem }}
        </li>
      </ul>
      <BaseHeader text-size="text-3xl" as="h3">
        Post Mortem
      </BaseHeader>
      <p class="my-12">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi animi praesentium earum!
      </p>
    </div>
    <footer class="flex justify-between">
      <NuxtLink to="/#projects">
        Previous
      </NuxtLink>
      <NuxtLink to="/#projects">
        Return
      </NuxtLink>
      <NuxtLink to="/#projects">
        Next
      </NuxtLink>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      required: true,
      type: Object
    }
  }

}
</script>

<style>

</style>
