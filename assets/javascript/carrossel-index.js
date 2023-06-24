var swiperEngenharia = new Swiper(".SwiperEngenharia", {
  slidesPerView: 1,
  spaceBetween: 10,
  rewind: true,
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
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }
});

var swiperArquitetura = new Swiper(".SwiperArquitetura", {
  slidesPerView: 1,
  spaceBetween: 10,
  rewind: true,
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
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }
});

var swiperObras = new Swiper(".SwiperObras", {
  slidesPerView: 1,
  spaceBetween: 10,
  rewind: true,
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
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }
});

let swipers = document.getElementsByClassName('swiper')
let areas = document.getElementsByClassName('solutions__navegation__link')
for (area of areas){
  console.log(area)
  area.addEventListener('click',function(){
      if(this.classList[1] != 'bold'){
        if(this == areas[0]){
          areas[0].classList.add('bold')
          areas[1].classList.remove('bold')
          areas[2].classList.remove('bold')

          swipers[0].classList.remove('none')
          swipers[1].classList.add('none')
          swipers[2].classList.add('none')
        }
        else if(this == areas[1]){
          areas[0].classList.remove('bold')
          areas[1].classList.add('bold')
          areas[2].classList.remove('bold')

          swipers[0].classList.add('none')
          swipers[1].classList.remove('none')
          swipers[2].classList.add('none')
        }
        else{
          areas[0].classList.remove('bold')
          areas[1].classList.remove('bold')
          areas[2].classList.add('bold')

          swipers[0].classList.add('none')
          swipers[1].classList.add('none')
          swipers[2].classList.remove('none')
        }
      }
  })
}

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});