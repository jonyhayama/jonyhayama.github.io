<script setup>
const props = defineProps({
  articles: Array
})

const { articles } = toRefs(props)
</script>

<template>
  <ul>
    <BlogListItem v-for="article in articles" :article="article" />
  </ul>
</template>