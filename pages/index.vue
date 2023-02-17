<script setup>
const { data: articles } = await useBlog().fetchArticles();
const { data: funProjects } = useFun().fetchProjects();
</script>

<template>
  <div role="document">
    <section>
      <div class="headings">
        <h2>Blog</h2>
        <hr />
      </div>
      <BlogList :articles="articles.slice(0, 4)" />
      <NuxtLink to="/blog" role="button">Mais Postagens</NuxtLink>
    </section>
    <section>
      <div class="headings">
        <h2>Just For Fun</h2>
        <hr />
      </div>
      <div class="grid">
        <div v-for="project in funProjects.slice(0, 4)" :key="project.slug">
          <NuxtLink :to="project.url" target="_blank">
            <img :src="project.cover" />
            <strong>{{ project.name }}</strong>
            <div>{{ project.excerpt }}</div>
          </NuxtLink>
        </div>
      </div>
      <NuxtLink to="/fun" role="button">Mais Projetos</NuxtLink>
    </section>
    <section>
      <div class="headings">
        <h2>Sobre</h2>
        <hr />
      </div>
      <p>Sou doido por programação. Sério. Desde que fiz meu primeiro cursinho de Web Design há 15 anos atrás (e fui contratado para lecionar nessa escola) nunca parei.</p>
      <p>Depois de me formar em Análise e Desenvolvimento de Sistemas, trabalhar bastante, fundar minha própria empresa (junto com alguns sócios), fazer pós em Tecnologias para Aplicações Web, sair da empresa que co-fundei e trabalhar mais um pouco, conheci um parceiro de trabalho (grande Thalim, é noix) que me mostrou uma forma diferente de fazer as coisas. Foi então que comecei a fazer freelas. Já não sou mais 100% do tempo dedicado aos projetos paralelos, mas ainda estou disponível para trabalharmos juntos.</p>
      <p>Mineiro com orgulho, sou um desenvolvedor no estilo "me dá esse trem aí que eu faço". Já trabalhei com HTML, CSS, JS, PHP, Ruby on Rails, Elixir, WordPress e estou sempre disposto a "dar um pitaco"</p>  
      <NuxtLink to="https://jony.dev/resume/pt-br/" target="_blank" role="button">Currículo</NuxtLink>
    </section>
  </div>
</template>

<style scoped></style>
