$(document).ready(function() {

  // Close navbar after clicked
  $('.on-page').click(function() {
     $('nav').removeClass('expanded');
     $('body').addClass('f-topbar-fixed')
     $('div.contain-to-grid').addClass('fixed')
  });

  // Smooth scroll
  $('a.smooth').click(function(){
      $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 75
      }, 500);
      return false;
  });


});