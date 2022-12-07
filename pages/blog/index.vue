<script setup>
useHead({
  title: 'Blog'
})
const { data: articles } = await useBlog().fetchArticles();
</script>

<template>
  <div>
    Page: Blog
    <BlogList :articles="articles" />
  </div>
</template>

<style scoped></style>
