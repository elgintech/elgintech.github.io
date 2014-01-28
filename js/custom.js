$(document).ready(function() {

  // stretch image on home page to be full window height
  // $('.home-image').height($(window).height() - $('#nav').height());

  // Smooth scroll
  $('a.smooth').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top - 45
      }, 500);
      return false;
  });


});