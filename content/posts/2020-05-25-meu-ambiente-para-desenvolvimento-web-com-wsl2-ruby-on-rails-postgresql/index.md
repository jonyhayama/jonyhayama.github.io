---
title:  "Meu ambiente para desenvolvimento web com WSL2 - Ruby on Rails (PostgreSQL)"
slug: "meu-ambiente-para-desenvolvimento-web-com-wsl2-ruby-on-rails-postgresql"
date: "2020-05-25T05:09:53-03:00"
author: "Jony Hayama"
cover: "cover.png"
#tags: ["", ""]
#keywords: ["", ""]
description: ""
showFullContent: false
readingTime: false
hideComments: false
---

Esse post é o segundo de uma série de 4

1. [Geral](https://dev.to/jonyhayama/meu-ambiente-para-desenvolvimento-web-com-wsl2-geral-3dag)
2. [Ruby on Rails (PostgreSQL)](https://dev.to/jonyhayama/meu-ambiente-para-desenvolvimento-web-com-wsl2-ruby-on-rails-postgresql-1g8d)
3. [Javascript (AdonisJS + React + VueJS)](https://dev.to/jonyhayama/meu-ambiente-para-desenvolvimento-web-com-wsl2-javascript-adonisjs-react-vuejs-3h4a)
4. [Apache + MySQL + PHP (WordPress)](https://dev.to/jonyhayama/meu-ambiente-para-desenvolvimento-web-com-wsl2-apache-mysql-php-wordpress-23of)

Na empresa onde trabalho, utilizamos Ruby on Rails com PostgreSQL para quase todos os projetos, é a nossa “_go to language_”. 

### PostgreSQL

Antes de mais nada, gosto de instalar o banco de dados. Estranhamente (ou não), durante a escrita deste post encontrei um erro ao fazer a instalação do banco que (até hoje) não consegui descobrir o motivo exato. 

Depois de instalado tudo parece ok, entretanto, não é possível conectar-se ao banco. Sempre ocorre o erro de que o servidor não foi iniciado. Tentei fazer diversos ajustes no `postgresql.conf` e no `pg_hba.conf`, mas o fato é que há algum problema na instalação do PostgreSQL no WSL2. É necessário, portanto, reverter ao WSL1 para fazer a instalação. Ao final, pode voltar ao WSL2 que tudo funcionará perfeitamente.

Caso não se lembre, o comando a ser executado no PowerShell é:

```powershell
wsl --set-version <Distro> <Version>
```

Agora, abra seu WSL e rode os comandos abaixo:

```bash
sudo apt update  
sudo apt install postgresql postgresql-contrib libpq-dev
```

Via de regra, sempre crio um usuário de banco “superuser” com o mesmo nome do meu usuário Linux. Para isso, basta mudarmos para a conta postgres:

```bash
sudo -i -u postgres
```

e usar o comando abaixo para criar o usuário:

```bash
createuser --interactive
```

O próprio script irá te solicitar que preencha os dados do novo usuário. Como disse antes, sempre crio um usuário que possui o mesmo nome do meu usuário linux. Caso não seja solicitada a senha durante a criação do usuário, pasta acessar o `psql` e executar o comando abaixo substituindo `[nome-do-usuario]` pelo nome de usuário que você acabou de criar.

```txt
\password [nome-do-usuario]
```

Se foi necessário criar uma senha utilizando o comando acima, digite `\q` para sair do `psql`.

Depois de criado o nosso usuário, já não há mais necessidade de estar logado com a conta postgres, portanto pode sair utilizando o comando `exit`.

Por força do hábito, sempre que preciso criar um banco, utilizo o comando abaixo:

```bash
sudo -u postgres createdb [nome-do-banco]
```

Há, naturalmente, diversas formas mais práticas de criar e gerenciar seus bancos de dados do que o terminal. Minha sugestão é instalar o [pgAdmin](https://www.pgadmin.org/). É só baixar a versão para Windows e configurar o acesso como `localhost`.

Uma característica do WSL é que é necessário iniciar o servidor sempre que o WSL for fechado, portanto segue o comando:

sudo service postgresql start

### RVM

Para gerenciar as versões do Ruby, utilizo o RVM. Há uma versão dedicada ao Ubuntu e para instalá-la, precisamos, primeiramente instalar o `software-properties-common`:

```bash
sudo apt-get install software-properties-common
```

Agora, precisamos adicionar o PPA e instalá-lo via `apt` :

```bash
sudo apt-add-repository -y ppa:rael-gc/rvmsudo apt-get updatesudo apt-get install rvm
```

Por fim, para que o RVM venha sempre carregado, precisamos executar o comando abaixo:

```bash
echo 'source "/etc/profile.d/rvm.sh"' >> ~/.zshrc
```

Esse último é um pouco diferente da documentação oficial, pois utilizamos o `zsh` e não o `bash`. Caso encontre algum problema, acesse o repositório oficial: [https://github.com/rvm/ubuntu_rvm](https://github.com/rvm/ubuntu_rvm)

Agora você já pode rodar o comando abaixo para instalar a versão do Ruby que seu projeto utiliza:

```bash
rvm install ruby[-versao-do-ruby]
```

Caso seja uma aplicação novinha em folha, basta omitir a versão e instalar a mais recente :)

Agora que temos o Ruby instalado, precisamos também instalar o bundler

```bash
gem install bundler
```

#### Letter Opener

Se você, como eu, utiliza a gem `letter_opener`, você perceberá que o navegador não abre quando o e-mail é enviado. Isso pois o comando para abrir o navegador é enviado para seu WSL, portanto é necessário fazer uma configuração adicional para que o WSL encontrei seu browser. No meu caso, utilizo o Chrome, portanto, basta adicionar a seguinte linha ao seu `~/.zshrc`

```txt
# Add BROWSER  
export BROWSER='/mnt/c/Program\ Files\ \\(x86\\)/Google/Chrome/Application/chrome.exe'
```

Outro probleminha que encontrará é que, agora, seu navegador abre, mas o endereço do arquivo é incorreto

![](/2020-05-25_01.png)

Ainda não descobri uma forma de fazer isso automaticamente, por hora eu simplesmente adiciono o endereço abaixo ao caminho gerado:

```
wsl%24/Ubuntu-20.04/
```

o caminho acaba ficando algo como:

```
file://wsl%24/Ubuntu-20.04/home/jony/www/...
```

### NodeJS

Por fim, as versões mais recentes do Rails precisam do Node para funcionar. Em especial por terem substituído o Sprockets pelo Webpacker. Como eu utilizo o mesmo ambiente para desenvolver aplicações JS eu prefiro usar o NVM (que vou explicar como instalar na próxima postagem da série), mas nada impede que você instale a versão do node disponível no `apt`:

```bash
sudo apt install nodejs
```

A partir daqui já podemos seguir com um fluxo trabalho comum... Podemos executar `bundle install`, `rails db:migration`, `rails s`, etc... 

Como o objetivo desse post é compartilhar meu ambiente de trabalho, vou parando por aqui, mas se tiver interesse em “continuar nesse caminho”, dê uma olhada no Guia oficial: [https://guides.rubyonrails.org/getting_started.html#creating-the-blog-application](https://guides.rubyonrails.org/getting_started.html#creating-the-blog-application)