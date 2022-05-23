---
title:  "Meu ambiente para desenvolvimento web com WSL2 - Javascript (AdonisJS + React + VueJS)"
slug: "meu-ambiente-para-desenvolvimento-web-com-wsl2-javascript-adonisjs-react-vuejs"
date: "2020-06-02T05:09:53-03:00"
author: "Jony Hayama"
cover: "cover.png"
#tags: ["", ""]
#keywords: ["", ""]
description: ""
showFullContent: false
readingTime: false
hideComments: false
---

Esse post é o terceiro de uma série de 4

1. [Geral](https://dev.to/jonyhayama/meu-ambiente-para-desenvolvimento-web-com-wsl2-geral-3dag)
2. [Ruby on Rails (PostgreSQL)](https://dev.to/jonyhayama/meu-ambiente-para-desenvolvimento-web-com-wsl2-ruby-on-rails-postgresql-1g8d)
3. [Javascript (AdonisJS + React + VueJS)](https://dev.to/jonyhayama/meu-ambiente-para-desenvolvimento-web-com-wsl2-javascript-adonisjs-react-vuejs-3h4a)
4. [Apache + MySQL + PHP (WordPress)](https://dev.to/jonyhayama/meu-ambiente-para-desenvolvimento-web-com-wsl2-apache-mysql-php-wordpress-23of)

Como banco de dados para o AdonisJS, utilizo o PostgreSQL, que já mostrei como faço a instalação no post anterior, portanto não vou repeti-lo :)

O fato mais interessante do WSL é que ele permite que executemos comandos na Distro (quase) como se estivéssemos rodando o Linux diretamente. Há alguns detalhes aqui e ali, mas confesso que fiquei bastante surpreso com o fato da instalação do Node ser exatamente igual à que fazia diretamente no Ubuntu.

### NVM

Esse é o gerenciador de versões do Node, da mesma forma que o RVM é para o Ruby.

```bash
curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh) | bash
```

**IMPORTANTE:** durante a escrita desse post, a última versão disponível era a `0.35.3`, recomendo que dê uma olhada no repositório oficial para instalar a versão mais recente: [https://github.com/nvm-sh/nvm#install--update-script](https://github.com/nvm-sh/nvm#install--update-script)

Durante a instalação o NVM faz o seu melhor para já se adicionar ao arquivo `~/.zshrc`, mas ele nem sempre consegue 🤷‍♀️. Portanto, abra uma nova aba e verifique se é possível executar o comando `nvm -v` (se você vêm seguindo desde o começo, pode só verificar se o termo `nvm` fica verde 😉).

Caso o NVM não esteja disponível, não se desespere, basta adicionar as linhas abaixo ao final do seu arquivo `~./zshrc`:

```bash
export NVM_DIR="$HOME/.nvm"  
\[ -s "$NVM\_DIR/nvm.sh" \] && \\. "$NVM\_DIR/nvm.sh" # This loads nvm
```

#### Node e NPM

Depois de instalado o NVM, é hora de instalar o Node. Particularmente sempre instalo a versão LTS primeiro para deixá-la como padrão, portanto aí vai o comando:

```bash
nvm install --lts
```

### Yarn

Via de regra prefiro usar o Yarn como gerenciador de dependências. Em linhas gerais eu o considero mais performático e, como estamos num ambiente que é — por definição — mais lento do que se estivéssemos diretamente no Linux, qualquer milésimo de segundo conta!

Primeiro precisamos adicionar o yarn ao repositório apt:

```bash
curl -sS [https://dl.yarnpkg.com/debian/pubkey.gpg](https://dl.yarnpkg.com/debian/pubkey.gpg) | sudo apt-key add -  
echo "deb [https://dl.yarnpkg.com/debian/](https://dl.yarnpkg.com/debian/) stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

Agora é só rodar

```bash
sudo apt update && sudo apt install yarn
```

Se tudo ocorreu bem, você deve conseguir rodar `yarn -v` e ver a versão instalada.

Além disso, para conseguirmos instalar pacotes globalmente, precisamos adicionar a linha abaixo no nosso `~/.zshrc` :

```bash
export PATH="$PATH:$(yarn global bin)"
```

Caso tenha dúvidas, basta dar um pulinho da documentação oficial: [https://classic.yarnpkg.com/en/docs/install/#debian-stable](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

Como diria o ditado, estamos com a faca e o queijo na mão. Agora que o ambiente está pronto, podemos seguir com nosso desenvolvimento JS normalmente. Abaixo vou listar os comandos para instalação dos CLIs de cada biblioteca/framework que utilizo e como verificar sua instalação.

### AdonisJS

Instale com:

```bash
yarn global add [@adonisjs/cli](http://twitter.com/adonisjs/cli "Twitter profile for @adonisjs/cli")
```

Verifique com:

```bash
adonis --version
```

Documentação: [https://adonisjs.com/docs/4.1/installation](https://adonisjs.com/docs/4.1/installation)

### React

Instale com:

```bash
yarn global add create-react-app
```

Verifique com:

```bash
create-react-app --version
```

Documentação: [https://create-react-app.dev/docs/getting-started/](https://create-react-app.dev/docs/getting-started/)

### Vue

Instale com:

```bash
yarn global add [@vue/cli](http://twitter.com/vue/cli "Twitter profile for @vue/cli")
```

Verifique com:

```bash
vue --version
```

Documentação: [https://cli.vuejs.org/guide/installation.html](https://cli.vuejs.org/guide/installation.html)