(function ($, Drupal) {
    Drupal.behaviors.myCustomBehavior = {
      attach: function (context, settings) {
        $('.tn-slider', context).slick({
          autoplay: true,
          infinite: true,
          dots: true,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        });
      }
    };
  })(jQuery, Drupal);
  