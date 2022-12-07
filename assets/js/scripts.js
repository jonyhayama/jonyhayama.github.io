document.addEventListener("DOMContentLoaded", function() {
  /* Get blog posts from dev.to */
  formatDate = function($date){
    return 'y-m-d h:i'
      .replace('d', ('0' + $date.getDate()).slice(-2))
      .replace('m', ('0' + ($date.getMonth() + 1)).slice(-2))
      .replace('y', $date.getFullYear())
      .replace('h', ('0' + $date.getHours()).slice(-2))
      .replace('i', ('0' + $date.getMinutes()).slice(-2));
  };

  getBlogPostTemplate = function($post){
    $cover_image = $post.cover_image || $post.social_image;
    $description = $post.description;
    $published = formatDate( new Date($post.published_at) );
    $title = $post.title;
    $url = $post.url;
    return ('<div class="post">' +
      '<div class="post-cover links-gallery"><a href="{{$url}}" target="_blank"><img src="{{$cover_image}}" /></a></div>' +
      '<div class="post-content">' +
        '<h3><a href="{{$url}}" target="_blank">{{$title}}</a></h3>' + 
        '<div class="post-meta">Publicado em: {{$published}}</div>' + 
        '<div class="post-excerpt">{{$description}}</div>' +
      '</div>' +
    '</div>')
    .replaceAll('{{$cover_image}}', $cover_image)
    .replaceAll('{{$description}}', $description)
    .replaceAll('{{$published}}', $published)
    .replaceAll('{{$title}}', $title)
    .replaceAll('{{$url}}', $url);
  };

  loadBlogPosts = function(){
    var $wrapper = document.getElementById('blog-posts');
    axios.get('https://dev.to/api/articles?username=jonyhayama')
      .then(function(res){
        for( var i in res.data ){
          var $post = res.data[i];
          $wrapper.innerHTML = $wrapper.innerHTML + getBlogPostTemplate($post);
        }
      }).catch(function(error){
        $wrapper.classList.add('has-error')
        $wrapper.innerHTML = 'Oops, houve um erro ao carregar minhas postagens, volte mais tarde 😋';
      }).then(function(){
        $wrapper.classList.remove('is-loading');
      });
  }
  loadBlogPosts();

  /* Night Mode Button */
  document.getElementById('btn-night-mode').addEventListener('click', function(e){
    e.preventDefault();
    var $body = document.querySelector('body');
    if( $body.classList.contains('night-mode') ){
      $body.classList.remove('night-mode');
      $body.classList.remove('hayama-dark');
    } else {
      $body.classList.add('night-mode');
      $body.classList.add('hayama-dark');
    }
  });

  /* Mobile Menu */
  document.getElementById('btn-mobile-nav').addEventListener('click', function(e){
    e.preventDefault();
    var $menu = document.querySelector('body');
    if( $menu.classList.contains('mobile-menu-active') ){
      $menu.classList.remove('mobile-menu-active');
    } else {
      $menu.classList.add('mobile-menu-active');
    }
  });
  var menu_items = document.querySelectorAll('#main-navigation a');
  for( var i = 0, item; item = menu_items[i]; i++ ){
    item.addEventListener('click', function(){
      document.querySelector('body').classList.remove('mobile-menu-active');
    });
  }

  /* Smooth Scroll */
  var $smoothScroll = new SmoothScroll('a[data-scroll]', {
    offset: 76
  });
});
