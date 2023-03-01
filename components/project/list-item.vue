<script setup>
const props = defineProps({
  project: Object
})

const { project } = toRefs(props)
</script>

<template>
  <NuxtLink :to="project.url" target="_blank">
    <img :src="project.cover" />
    <strong>{{ project.name }}</strong>
    <div>{{ project.excerpt }}</div>
  </NuxtLink>
</template>
