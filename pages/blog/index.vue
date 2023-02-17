<script setup>
useHead({
  title: 'Blog'
})
const { data: articles } = await useBlog().fetchArticles();
</script>

<template>
  <div role="document">
    <div class="headings">
      <h1>Blog</h1>
      <h2>Alguns artigos que escrevi ao logno do tempo (originalmente postados em <NuxtLink to="https://dev.to/jonyhayama" target="_blank">dev.to</NuxtLink>)</h2>
    </div>
    <BlogList :articles="articles" />
  </div>
</template>

<style scoped></style>
