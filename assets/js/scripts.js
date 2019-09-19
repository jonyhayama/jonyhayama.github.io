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

  /* Header Hide on Scroll */
  var scrollPos = 0;
  var $mainHeader = document.getElementById('main-header');
  window.addEventListener('scroll', function() {
    var windowY = window.scrollY;
    if (windowY < scrollPos) {
      // Scrolling UP
      $mainHeader.classList.add('is-visible');
      $mainHeader.classList.remove('is-hidden');
    } else {
      // Scrolling DOWN
      $mainHeader.classList.add('is-hidden');
      $mainHeader.classList.remove('is-visible');
    }
    scrollPos = windowY;
  });

  /* Smooth Scroll */
  var $smoothScroll = new SmoothScroll('a[data-scroll]');

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
  for( var i = 0, tab; title = accordion_titles[i]; i++ ){
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
});