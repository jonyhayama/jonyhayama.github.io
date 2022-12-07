export const useBlog = () => {
  const username = 'jonyhayama'
  const url = `https://dev.to/api/articles?username=${username}`;

  const fetchArticles = () => {
    return useFetch(url, {
      key: `/blog`
    })
  }

  // const fetchArticle = async (slug) => {
  //   console.log(slug);
  //   const { data } = await useFetch(`https://dev.to/api/articles/${username}/${slug}`, {
  //     key: `/blog/${slug}`,
  //   })
  //   // if (!data.value || data.value.status === 404) {
  //   //   throw createError({
  //   //     statusCode: 404,
  //   //     statusMessage: 'Page Not Found'
  //   //   })
  //   // }

  //   return { data: data.value }
  // }

  const fetchArticle = (slug) => {
    return useFetch(`https://dev.to/api/articles/${username}/${slug}`, {
      key: `/blog/${slug}`,
    })
  }

  return {
    fetchArticles,
    fetchArticle
  }
}