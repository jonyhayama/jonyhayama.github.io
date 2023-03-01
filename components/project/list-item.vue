<script setup>
const props = defineProps({
  project: Object
})

const { project } = toRefs(props)
</script>

<template>
  <NuxtLink :to="project.url" target="_blank" class="project-list-item">
    <img :src="project.cover" />
    <strong>{{ project.name }}</strong>
    <div>{{ project.excerpt }}</div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.project-list-item {
  position: relative;
  display: inline-block;
  padding: calc(var(--spacing) / 2);
  border-radius: var(--border-radius);
  overflow: hidden;

  img {
    margin-bottom: calc(var(--spacing) / 2);
  }

  div {
    color: var(--muted-color);
    font-size: 0.8em;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--card-background-color);
    z-index: -1;
  }

  &:after {
    content: '🔗';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    background: var(--color);
    color: var(--primary-inverse);
    padding: calc(var(--spacing) / 2);
    white-space: nowrap;
    border-radius: 50%;
    font-size: 0.8em;
    opacity: 0;
    transition: opacity .2s ease-in-out;
  }

  &:hover {
    text-decoration: none;

    img {
      opacity: 0.7;
    }

    &:before {
      opacity: 0.2;
    }

    &:after {
      opacity: 1;
    }
  }
}
</style>
