(function ($) {
Drupal.behaviors.cloudZoom = {
  attach: function (context, settings) {
    items = $('.cloud-zoom:not(cloud-zoom-processed), .cloud-zoom-gallery:not(cloud-zoom-processed)', context);
    if (items.length) {
      items.addClass('cloud-zoom-processed').CloudZoom();
      items.parent().css('float', 'left');

$('.hover').mouseover(function() {
  $('.text').css("visibility","visible");
});

$('.hover').mouseout(function() {
  $('.text').css("visibility","hidden");
});
      
    }
  }
};
})(jQuery);
