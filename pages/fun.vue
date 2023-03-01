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
    <ProjectList :projects="funProjects" />
  </div>
</template>

<style lang="scss" scoped>
.grid {
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>