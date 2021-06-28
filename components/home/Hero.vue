<template>
  <div class="bg-peach shadow-md py-12 no-clipped-path lg:clipped-path">
    <LayoutContainer>
      <div class="grid grid-cols-12 gap-4 items-center">
        <div class="col-span-1 hidden md:inline" />
        <img
          class="rounded-full col-span-4 shadow-lg sm:inline hidden"
          :src="require('~/assets/avatar.jpg')"
        >
        <div class="col-span-1 hidden sm:inline" />
        <section class="sm:col-span-6 col-span-11">
          <BaseHeader render-as="h1">
            Hey, I'm Paweł
          </BaseHeader>
          <section class="my-5">
            <p>
              I've been studying web development since the July of 2020. I learned a lot in the last year.
            </p>
            <p>
              Currently, I'm looking for my first job in the industry.
            </p>
          </section>
          <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <BaseButton href="#skills" primary>
              My Skills
            </BaseButton>
            <BaseButton href="#projects">
              My Projects
            </BaseButton>
          </div>
        </section>
      </div>
    </LayoutContainer>
  </div>
</template>

<style scoped>
@responsive {
  .clipped-path {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 43% 100%, 0 36%);
  }
  .no-clipped-path {
    clip-path: none;
  }
}
</style>
