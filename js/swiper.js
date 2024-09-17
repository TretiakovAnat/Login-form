//=========== Swiper ====================//
new Swiper(".swiper__food", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },

  //
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper__food-button-next",
    prevEl: ".swiper__food-button-prev",
  },
});

// ================================================
new Swiper(".comment__swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 7000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper__food-button-next",
    prevEl: ".swiper__food-button-prev",
  },
});
