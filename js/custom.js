$(document).ready(function() {

  // Sticky footer
  $(window).bind("load", function () {
      var footer = $("#footer");
      var pos = footer.position();
      var height = $(window).height();
      height = height - pos.top;
      height = height - footer.height();
      if (height > 0) {
          footer.css({
              'margin-top': height + 'px'
          });
      }
  });

  // Close navbar after clicked
  $('.on-page').click(function() {
     $('nav').removeClass('expanded');
     $('body').addClass('f-topbar-fixed')
     $('div.contain-to-grid').addClass('fixed')
  });

  // Smooth scroll
  $('a.smooth').click(function(){
      $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 85
      }, 500);
      return false;
  });

  //SVG Fallback
  var svg = !!('createElementNS' in document && document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect);
    if (!svg){
      jQuery('body').addClass('no-svg');
      jQuery('img').each(function(){
        var $this = jQuery(this);
        var fp = $this.attr('src').split(".");
        var ext = fp.pop();
        if(ext.toLowerCase() == 'svg'){
          if($this.attr('data-svg-fallback') !== undefined){
            $this.attr('src', $this.attr('data-svg-fallback'));
            $this.removeAttr('data-svg-fallback');
          }else{
            $this.attr('src', fp.join('.')+'.png');
          }
        }
      });
    }else{ jQuery('body').addClass('svg'); }
  //Show More / Show Less
  $('.show-links a').click(function(e){
    $(this).parent().next('.show-more').slideToggle('slow');
    $(this).siblings().toggle();
    $(this).toggle();
    e.preventDefault();
  });
});