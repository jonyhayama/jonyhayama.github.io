<script setup>
const props = defineProps({
  articles: Array
})

const { articles } = toRefs(props)
</script>

<template>
  <div>
    <BlogListItem v-for="article in articles" :article="article" />
  </div>
</template>