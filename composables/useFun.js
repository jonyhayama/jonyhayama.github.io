/* Load Assets based on: 
* https://github.com/nuxt/nuxt/issues/14766#issuecomment-1397365205
*/
import { basename } from 'pathe';
const glob = import.meta.glob('~/assets/img/for-fun/*', { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [basename(key), value.default])
);

const funProjects = [
  {
    name: 'Starlink Near Me',
    slug: 'starlink-near-me',
    excerpt: 'Encontrando satélites próximos',
    url: 'https://starlink-near-me.apps.jony.dev/',
    cover: images['starlink-near-me.jpg'],
  },
  {
    name: 'Bingo',
    slug: 'bingo',
    excerpt: 'Um simples jogo de bingo',
    url: 'https://jony.dev/bingo',
    cover: images['bingo.jpg'],
  },
  {
    name: 'Find Marvel Characters',
    slug: 'find-marvel-characters',
    excerpt: 'Um simples campo de autocomplete',
    url: 'https://marvel.apps.jony.dev/',
    cover: images['find-marvel-characters.jpg'],
  },
  {
    name: 'JS Clock',
    slug: 'js-clock',
    excerpt: 'Apenas um relógio em JS',
    url: 'https://jony.dev/js-clock',
    cover: images['clock.jpg'],
  },
  {
    name: 'Hello Phaser',
    slug: 'hello-phaser',
    excerpt: 'Mini-game feito utilizando Phaser',
    url: 'https://jony.dev/hello-phaser',
    cover: images['hello-phaser.jpg'],
  },
  {
    name: 'Super Shop',
    slug: 'super-shop',
    excerpt: '"Gaste" o dinheiro do seu bilionário favorito 😜',
    url: 'https://jony.dev/super-shop',
    cover: images['super-shop.jpg'],
  },
];




export const useFun = () => {
  const fetchProjects = () => {
    return { data: funProjects };
  }

  return {
    fetchProjects
  }
}