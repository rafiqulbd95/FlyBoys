(function ($) {
  'use strict'


  $(window).on("scroll", function () {
    var qScroll = $(this).scrollTop();
    if (qScroll > 1) {
      $("#NavMenu").addClass("menu-fixed");
    } else {
      $("#NavMenu").removeClass("menu-fixed");
    };
  });

  if ($('.flyboy-item').length) {
      var swiper = new Swiper(".flyboy-item", {
          effect: "coverflow",
          loop: true,
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: "auto",
          coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
          },
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
          },
          
          breakpoints: {
              640: {
                  coverflowEffect: {  
                      depth: 100,
                      modifier: 2,
                      slideShadows: true,
                  },
              }
          },
      });
  }

  if ($('.roadmap-slider').length) {
      $('.roadmap-slider').slick({
          dots: false,
          infinite: true,
          speed: 300,
          prevArrow: '<button class="fa-solid fa-angle-right slide-arrow prev-arrow"></button>',
          nextArrow: '<button class="fa-solid fa-angle-left slide-arrow next-arrow"></button>',
          autoplay: false,
          autoplaySpeed: 4000,
          centerMode: true,
          responsive: [{
              breakpoint: 3000,
              settings: {
                  slidesToShow: 3.1,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 1100,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false,
                  dots: true, 
              }
          }
          ]

      });
  }

  $(document).ready(($) => {
      $('.quantity').on('click', '.plus', function() {
        var $input = $(this).prev('input.qnty');
        var val = parseInt($input.val());
        $input.val( val+1 ).change();
    });
    
    $('.quantity').on('click', '.minus', function() {
        var $input = $(this).next('input.qnty');
        var val = parseInt($input.val());
        if (val > 0) {
            $input.val( val-1 ).change();
        } 
    });
  });





})(jQuery);





