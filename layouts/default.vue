<template>
  <div class="bg-bone">
    <Nuxt />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@500&display=swap");
html {
  scroll-behavior: smooth;
}
body {
  font-family: "Lato", sans-serif;
  @apply text-ink;
  @apply text-2xl;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto", sans-serif;
}
h1 {
  @apply text-5xl;
}
h2 {
  @apply text-4xl;
}
h3 {
  @apply text-3xl;
}
h3,
h4,
h5,
h6 {
  @apply text-2xl;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
/* nice scrollbar */
::-webkit-scrollbar {
  width: 12px;
}
html {
  --scrollbar-track: white;
  --scrollbar-thumb: #C6D7F9;
  --scrollbar-hover: #98B7F4;
}
::-webkit-scrollbar-track {
  background: var(--scrollbar-track);
}
::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-hover);
}
body {
  overflow-y: scroll;
}
</style>
