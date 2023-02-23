$(window).on('load', function() {
  $("#loader-wrapper").fadeOut(700);

  var thumbsSwiper = new Swiper(".ThumbsSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 10,
    slidesPerView: 3,
    watchSlidesProgress: true,
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



