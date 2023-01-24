<script setup>
const { data: articles } = await useBlog().fetchArticles();
</script>

<template>
  <div>
    <section class="grid">
      <div>
        <h2>Jony Hayama</h2>
        <h3>Web Developer</h3>
        <p>Sou doido por programação. Sério. Desde que fiz meu primeiro cursinho de Web Design há 15 anos atrás (e fui contratado para lecionar nessa escola) nunca parei.</p>
        <p>Depois de me formar em Análise e Desenvolvimento de Sistemas, trabalhar bastante, fundar minha própria empresa (junto com alguns sócios), fazer pós em Tecnologias para Aplicações Web, sair da empresa que co-fundei e trabalhar mais um pouco, conheci um parceiro de trabalho (grande Thalim, é noix) que me mostrou uma forma diferente de fazer as coisas. Foi então que comecei a fazer freelas. Já não sou mais 100% do tempo dedicado aos projetos paralelos, mas ainda estou disponível para trabalharmos juntos.</p>
        <p>Mineiro com orgulho, sou um desenvolvedor no estilo "me dá esse trem aí que eu faço". Já trabalhei com HTML, CSS, JS, PHP, Ruby on Rails, Elixir, WordPress e estou sempre disposto a "dar um pitaco"</p>  
        <NuxtLink to="https://jony.dev/resume/pt-br/" target="_blank">Currículo</NuxtLink>
      </div>
      <div>
        <img src="~/assets/img/jony-profile-2019-lowres.jpg" />
      </div>
    </section>
    <section>
      <h2>Blog</h2>
      <BlogList :articles="articles" />
    </section>
    <section>
      <h2>Just For Fun</h2>
      <div class="grid">
        <div>
          <NuxtLink to="https://starlink-near-me.apps.jony.dev/" target="_blank">
            <img src="~/assets/img/for-fun/starlink-near-me.jpg" />
            <strong>Starlink Near Me</strong>
            <span>Encontrando satélites próximos</span>
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to="https://jony.dev/bingo" target="_blank">
            <img src="~/assets/img/for-fun/bingo.jpg" />
            <strong>Bingo</strong>
            <span>Um simples jogo de bingo</span>
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to="https://marvel.apps.jony.dev/" target="_blank">
            <img src="~/assets/img/for-fun/find-marvel-characters.jpg" />
            <strong>Find Marvel Characters</strong>
            <span>Um simples campo de autocomplete</span>
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to="fun/clock" target="_blank">
            <img src="~/assets/img/for-fun/clock.jpg" />
            <strong>Clock</strong>
            <span>Apenas um relógio em JS</span>
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to="fun/hello-phaser" target="_blank">
            <img src="~/assets/img/for-fun/hello-phaser.jpg" />
            <strong>Hello Phaser</strong>
            <span>Mini-game feito utilizando Phaser</span>
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to="fun/super-shop" target="_blank">
            <img src="~/assets/img/for-fun/super-shop.jpg" />
            <strong>Super Shop</strong>
            <span>"Gaste" o dinheiro do seu bilionário favorito 😜</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
