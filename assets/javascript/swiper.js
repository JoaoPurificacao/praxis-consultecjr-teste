var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
});


// const swiperEl = document.getElementsByClassName('.solutions__carrossel--engenharia')
// Object.assign(swiperEl, {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     pagination: {
//     clickable: true,
//     },
//     breakpoints: {
//     640: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//     },
//     768: {
//         slidesPerView: 3,
//         spaceBetween: 10,
//     },
//     1024: {
//         slidesPerView: 3,
//         spaceBetween: 50,
//     },
//     },
// });
// swiperEl.initialize();