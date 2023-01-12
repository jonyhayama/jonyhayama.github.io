<script setup>
const siteName = 'Jony Hayama';
useHead({
  titleTemplate: (title) => (title ? `${title} | ${siteName}` : siteName)
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
:root:not([data-theme=light]) {
  --background-color: #373435;
  --color: #ffffff;
  --primary: #ba25fb;
  --primary-hover: #69f2c6;
  --primary-muted: #170120;
  --muted-border-color: var(--primary-muted);
}
</style>