<template>
  <div class="bg-peach shadow-md py-12 clipped-path">
    <LayoutContainer>
      <div class="grid grid-cols-12 items-center">
        <div class="col-span-1" />
        <img
          class="rounded-full col-span-4 shadow-lg"
          :src="require('~/assets/profile.png')"
        >
        <div class="col-span-1" />
        <section class="col-span-6">
          <BaseHeader render-as="h1">
            Hey, I'm Paweł
          </BaseHeader>
          <section class="my-5">
            <p>
              I've been studying web developmene since the July of 2020. I’ve learned a ton last year.
            </p>
            <p>
              Now I just want to get a job.
            </p>
          </section>
          <div>
            <BaseButton href="#projects" primary class="mr-4">
              My Projects
            </BaseButton>
            <BaseButton href="#skills">
              My Skills
            </BaseButton>
          </div>
        </section>
      </div>
    </LayoutContainer>
  </div>
</template>

<style scoped>
.clipped-path {
clip-path: polygon(0 0, 100% 0, 100% 100%, 43% 100%, 0 36%);

}
</style>
