<script setup>
const props = defineProps({
  article: Object
})

const { article } = toRefs(props)
</script>

<template>
  <article class="grid">
    <div>
      <img :src="article.cover_image || article.social_image" />
    </div>
    <div>
      <div class="headings">
        <h3><NuxtLink :to="`/blog/${article.slug}`">{{ article.title }}</NuxtLink></h3>
        <span><time :datetime="article.published_at">{{ new Date(article.published_at).toLocaleDateString("pt-BR") }}</time></span>
      </div>
      <div>
        {{ article.description }}
      </div>
      <NuxtLink :to="`/blog/${article.slug}`" role="button">Read more</NuxtLink>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.grid {
  grid-template-columns: 4fr 5fr;
  margin-bottom: var(--spacing);
  padding: var(--spacing);

  a[role="button"] {
    margin-top: var(--spacing);
    padding: calc(var(--spacing) / 2) var(--spacing);
    font-size: 0.8em;
  }
}
</style>