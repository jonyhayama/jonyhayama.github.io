<script setup>
const route = useRoute();
// const { data: article } = await useFetch(`https://dev.to/api/articles/jonyhayama/${route.params.slug}`, {
//   key: `/blog/${route.params.slug}`,
// })
const { data: article } = await useBlog().fetchArticle(route.params.slug)
if (!article.value || article.value.status === 404) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

useHead({
  title: article.value.title,
  meta: [
    { name: 'description', content: article.value.description },
    { name: 'og:description', content: article.value.description },
    { name: 'og:image', content: article.value.social_image }
  ],
  link: [
    { rel: 'canonical', href: article.value.canonical_url }
  ]
})
</script>

<template>
  <div>
    <!-- <pre>{{ JSON.stringify(article,null,2) }}</pre> -->
    <h2>{{ article.title }}</h2>

    <div v-html="article.body_html"></div>
  </div>
</template>