<script setup>
const props = defineProps({
  projects: Array
})

const { projects } = toRefs(props)
</script>

<template>
  <div class="grid">
    <ProjectListItem v-for="project in projects" :key="project.slug" :project="project" />
  </div>
</template>

<style lang="scss" scoped>
.grid {
  grid-row-gap: var(--grid-spacing-horizontal);
}
</style>
