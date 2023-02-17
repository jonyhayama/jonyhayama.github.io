<script setup>
useHead({
  title: 'Fun Projects'
})
const { data: funProjects } = useFun().fetchProjects();
</script>

<template>
  <div role="document">
    <div class="headings">
      <h1>Just for fun</h1>
      <h2>Alguns projetos que fiz como estudo ou simplesmente (como o título diz) para me divertir 😜</h2>
    </div>
    <div class="grid">
      <div v-for="project in funProjects" :key="project.slug">
        <NuxtLink :to="project.url" target="_blank">
          <img :src="project.cover" />
          <strong>{{ project.name }}</strong>
          <div>{{ project.excerpt }}</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>