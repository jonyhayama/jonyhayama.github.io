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
