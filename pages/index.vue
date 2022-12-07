<script setup>
const { data: articles } = await useBlog().fetchArticles();
</script>

<template>
  <div>
    <BlogList :articles="articles" />
  </div>
</template>

<style scoped></style>
