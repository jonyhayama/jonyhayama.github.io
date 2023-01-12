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
      <div class="main-column">
        <slot></slot>
      </div>
      <aside>
        <div>
          <h2>Sobre</h2>
          <div>
            <img src="~/assets/img/jony-profile-2019-lowres.jpg" />
            <p>Sou doido por programação. Sério. Desde que fiz meu primeiro cursinho de Web Design há 15 anos atrás (e fui contratado para lecionar nessa escola) nunca parei.</p>
            <p>Depois de me formar em Análise e Desenvolvimento de Sistemas, trabalhar bastante, fundar minha própria empresa (junto com alguns sócios), fazer pós em Tecnologias para Aplicações Web, sair da empresa que co-fundei e trabalhar mais um pouco, conheci um parceiro de trabalho (grande Thalim, é noix) que me mostrou uma forma diferente de fazer as coisas. Foi então que comecei a fazer freelas. Já não sou mais 100% do tempo dedicado aos projetos paralelos, mas ainda estou disponível para trabalharmos juntos.</p>
            <p>Mineiro com orgulho, sou um desenvolvedor no estilo "me dá esse trem aí que eu faço". Já trabalhei com HTML, CSS, JS, PHP, Ruby on Rails, Elixir, WordPress e estou sempre disposto a "dar um pitaco"</p>
          </div>
        </div>
      </aside>
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

.container {
  display: flex;
}

.main-column {
  width: 70%;

  & + aside {
    width: 30%;
  }
}

</style>