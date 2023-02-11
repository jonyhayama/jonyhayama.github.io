<script setup>
const { data: articles } = await useBlog().fetchArticles();
const { data: funProjects } = useFun().fetchProjects();
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
        <div v-for="project in funProjects" :key="project.slug">
          <NuxtLink :to="project.url" target="_blank">
            <img :src="project.cover" />
            <strong>{{ project.name }}</strong>
            <span>{{ project.excerpt }}</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
