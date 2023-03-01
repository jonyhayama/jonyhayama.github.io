<script setup>
const props = defineProps({
  projects: Array
})

const { projects } = toRefs(props)
</script>

<template>
  <div class="grid">
    <div v-for="project in projects" :key="project.slug">
      <ProjectListItem :project="project" />
    </div>
  </div>
</template>
