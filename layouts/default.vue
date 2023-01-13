<template>
  <div class="container-fluid">
    <aside class="header">
      <div>
        <NuxtLink to="/">
          <img src="~/assets/img/jony-logo.png" />
        </NuxtLink>
        <img src="~/assets/img/jony-profile-2019-lowres.jpg" />
        <h1 class="site-name">Jony Hayama</h1>
      </div>
      <nav>
        <ul class="icon-menu">
          <li>
            <NuxtLink to="https://github.com/jonyhayama" target="_blank">
              <IconGithub />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.linkedin.com/in/jonathanhayama/" target="_blank">
              <IconLinkedIn />
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
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

  .site-name {
    margin-bottom: var(--spacing);
  }
}

.icon-menu {
  text-align: center;

  li {
    display: inline-block;
    margin: 0 8px;

    a {
      width: 32px;
      height: 32px;
      display: block;
      background: #fff;
      border-radius: 50%;
      line-height: 0;
      padding: 8px;

      &:hover {
        background: var(--primary);
        color: #fff;
      }
    }
  }
}
</style>
