<template>
  <div>
    <nav class="container-fluid">
      <ul>
        <li>
          <NuxtLink to="/" class="contrast logo">
            <strong>Jony Hayama</strong>
          </NuxtLink>
        </li>
      </ul>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li><NuxtLink to="/curriculo">Currículo</NuxtLink></li>
      </ul>
    </nav>
    <main class="container">
      <slot></slot>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  & > strong {
    display: none;
  }

  &:before {
    content: url('~/assets/img/jony-logo.png');
  }
}
</style>