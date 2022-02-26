$(document).ready(function () {
  // Smooth scrolling using jQuery easing
  $('#NavMenu li a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#NavMenu li a').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#NavMenu',
    offset: 56
  });


  $(window).on("scroll", function () {
    var qScroll = $(this).scrollTop();
    if (qScroll > 1) {
      $("#NavMenu").addClass("menu-fixed");
    } else {
      $("#NavMenu").removeClass("menu-fixed");
    };
  });
  /*
      ========================================
      Scroll to top
      ========================================
   */
  $(window).on("scroll", function () {
    var qScroll = $(this).scrollTop();
    if (qScroll > 10) {
      $("#scroll-top").addClass("scroll-top");
    } else {
      $("#scroll-top").removeClass("scroll-top");
    };
  });

  $('.benner-slider').slick({
    dots: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<button class="fas fa-angle-left slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="fas fa-angle-right slide-arrow next-arrow"></button>'
  });



  
  
  
  $('.Nieuws-slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 3,
    centerPadding: '60px',
    arrows: true,
    autoPlay:true,
    autoplaySpeed: 4000,
    prevArrow: '<button class="fas fa-angle-left slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="fas fa-angle-right slide-arrow next-arrow"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


  $('.play').magnificPopup({
    type: 'iframe',
    disableOn: 400,
    mainClass: 'mfp-fade'
  });




  
  
  
  $('.client-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.client-slider-dot'
  });
  $('.client-slider-dot').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '0px',
    asNavFor: '.client-slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<button class="fas fa-angle-left slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="fas fa-angle-right slide-arrow next-arrow"></button>'
  });




  $('.team-slider').slick({
    dots: true,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]

  });


});