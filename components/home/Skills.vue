<template>
  <div>
    <LayoutContainer id="skills" class="pt-20 space-y-8 mb-6 sm:mb-0">
      <LayoutSkills
        v-for="({title, subtitle,bulletPoints, imgUrl}, skillIdx) in [frontendSkills, backendSkills, hobbies]"
        :key="title"
        :reverse="skillIdx %2=== 1"
        :img-url="imgUrl"
      >
        <template #header>
          {{ title }}
        </template>
        <p class="my-3 text-xl opacity-75">
          {{ subtitle }}
        </p>
        <ul class="list-inside list-disc">
          <li v-for="(bulletPoint, bulletIdx) in bulletPoints" :key="bulletIdx">
            {{ bulletPoint }}
          </li>
        </ul>
      </LayoutSkills>
    </LayoutContainer>
  </div>
</template>

<script>
import backendSkills from '../../fixtures/backendSkills'
import frontendSkills from '../../fixtures/frontendSkills'
import hobbies from '../../fixtures/hobbies'
export default {
  data () {
    return {
      backendSkills,
      frontendSkills,
      hobbies
    }
  }
}
</script>

<style>
</style>
