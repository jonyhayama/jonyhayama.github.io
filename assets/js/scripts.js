document.addEventListener("DOMContentLoaded", function() {

  /* Night Mode Button */
  document.getElementById('btn-night-mode').addEventListener('click', function(e){
    e.preventDefault();
    var $body = document.querySelector('body');
    if( $body.classList.contains('night-mode') ){
      $body.classList.remove('night-mode');
    } else {
      $body.classList.add('night-mode')
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

  /* Tabs */
  var selectTab = function($elem){
    if( !$elem ){ return }
    var isCurrentItem = $elem.parentNode.classList.contains('active');
    var selector = $elem.parentNode.getAttribute('data-tab-content');
    var other_tabs = document.querySelectorAll('.tab-content, .tabs li');
    for( var j = 0, other_tab; other_tab = other_tabs[j]; j++ ){
      other_tab.classList.remove('active');
    }
    if( !isCurrentItem ){
      var selected_tabs = document.querySelectorAll( selector );
      window.history.replaceState(window.location.href, document.title, '#' + selected_tabs[0].id );
      $elem.parentNode.classList.add('active');
      for( var k = 0, selected_tab; selected_tab = selected_tabs[k]; k++ ){
        selected_tab.classList.add('active');
      }
    }
  }
  var selectTabHash = function(){
    var hash = window.location.hash;
    if( hash ){
      selectTab( document.querySelector('.tabs li:not(.active) a[href="' + hash + '"]') );
    }
  }
  selectTabHash()
  window.onhashchange = selectTabHash;

  var tabs = document.querySelectorAll('.tabs li a');
  for( var i = 0, tab; tab = tabs[i]; i++ ){
    tab.addEventListener('click', function(e){
      e.preventDefault();
      selectTab( this );
    }); 
  }

  /* Accordion */
  var accordion_titles = document.querySelectorAll('.accordion > .accordion-title');
  for( var i = 0, title; title = accordion_titles[i]; i++ ){
    title.addEventListener('click', function(e){
      var isCurrentItem = this.classList.contains('active');
      var other_divs = document.querySelectorAll('.accordion > .accordion-title.active');
      for( var j = 0, other_div; other_div = other_divs[j]; j++ ){
        other_div.classList.remove('active');
      }
      if( !isCurrentItem ){
        this.classList.add('active');
      }
    });
  }

  /* More Clients */
  function resizeSlider(){
    var height = document.querySelector('#more-clients .slider__contents:first-child > ul').offsetHeight;
    document.querySelector('#more-clients > .slider').style.height = (height + 26) + 'px';
  }
  var more_clients = document.querySelectorAll('#more-clients > ul > li');
  var clients = document.getElementById('more-clients');
  var chunk = parseInt(clients.getAttribute('data-per-page'));
  var style = document.createElement('style');
  var slides_html = '';
  var radios_html = '';
  clients.innerHTML = '';
  for (i = 0, j = more_clients.length, count = 1; i < j; i += chunk, count++ ) {
    var lis = Array.prototype.slice.call( more_clients, i, i+chunk);
    var checked = (count == 1) ? 'checked="checked"' : '';
    var left = (count == 1) ? 0 : ( ((count - 1) * 100 ) * -1 );
    radios_html = radios_html + '<input type="radio" name="slider" title="slide' + count + '" ' + checked + ' class="slider__nav"/>';
    slides_html = slides_html + '<div class="slider__contents"><ul class="gallery gallery-columns-' + chunk + '">' + lis.map(function(elem){ return elem.outerHTML }).join('') + '</ul></div>';
    style.innerHTML += '.slider__nav:checked:nth-of-type(' + count + ') ~ .slider__inner { left: ' + left + '%; }';
  }
  style.innerHTML += '.slider__inner{width:' + ((count-1) * 100) + '%}';
  document.head.appendChild(style);

  clients.innerHTML = '<div class="slider">' + radios_html + '<div class="slider__inner">' + slides_html + '</div></div>';
  
  window.addEventListener('resize', function(){
    resizeSlider();
  });

  var images = document.querySelectorAll('#more-clients .slider__contents:first-child img');
  var total_images = images.length;
  var img_counter = 0;
  [].forEach.call( images, function( img ) {
    img.addEventListener( 'load', incrementCounter, false );
  } );
  function incrementCounter() {
    img_counter++;
    if ( img_counter === total_images ) {
      resizeSlider();
    }
  }

});