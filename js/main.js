$(window).on('load', function() {
  $("#loader-wrapper").fadeOut(700);

  var thumbsSwiper = new Swiper(".ThumbsSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 5,
    slidesPerView: 2,
    watchSlidesProgress: true,
    breakpoints: {
      992: {
        spaceBetween: 10,
        slidesPerView: 3
      },
      400: {
        slidesPerView: 3
      }
    }
  });
  
  var mainSwiper = new Swiper(".MainSwiper", {
    spaceBetween: 10,
    thumbs: {
      swiper: thumbsSwiper,
    },
  });

  $(window).on('scroll', function() {
    if($(window).scrollTop() > 50) {
      $('header').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
    }
  });
});



