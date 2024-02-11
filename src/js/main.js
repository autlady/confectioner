
const swiper = new Swiper('#products-slider', {

  slidesPerView: 3,
  spaceBetween: 32,
  loop: true,

  pagination: {
    el: '#products-slider-pagination',
  },

  navigation: {
    nextEl: '#btn-next',
    prevEl: '#btn-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    510: {
      slidesPerView: 1.5,
    },
    690: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});


