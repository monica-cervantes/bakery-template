$(window).on('load', function() {
  $("#loader-wrapper").fadeOut(700);
  console.log("hi!");
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});