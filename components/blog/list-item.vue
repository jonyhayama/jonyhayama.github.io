<script setup>
const props = defineProps({
  article: Object
})

const { article } = toRefs(props)
</script>

<template>
  <li>
    <img :src="article.cover_image || article.social_image" style="width: 150px;" />
    <div>
      <NuxtLink :to="`/blog/${article.slug}`">{{ article.title }}</NuxtLink>
    </div>
    {{ article.description }}
    {{ article.published_at }}
  </li>
</template>