<template>
  <div class="container-fluid">
    <aside class="header">
      <nav>
        <div>
          <NuxtLink to="/">
            <img src="~/assets/img/jony-logo.png" />
          </NuxtLink>
          <img src="~/assets/img/jony-profile-2019-lowres.jpg" />
          <h1>Jony Hayama</h1>
        </div>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          <li><NuxtLink to="/curriculo">Currículo</NuxtLink></li>
        </ul>
      </nav>
    </aside>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--grid-spacing-horizontal);
}

.header {
  background: var(--primary-muted);
  padding: var(--grid-spacing-horizontal);
  margin-left: calc(var(--grid-spacing-horizontal) * -1);
}
</style>
