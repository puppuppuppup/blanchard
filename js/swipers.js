// Swiper 1

var swiper1 = new Swiper('.swiper1', {
  breakpoints: {
    1550: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50
    },
    930: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 34
    },
    680: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 38
    },
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    }
  },
  direction: 'horizontal',
  loop: false,

  navigation: {
    nextEl: '.swiper-button-prev1',
    prevEl: '.swiper-button-next1',
  },
})

const navNext = document.querySelector('.gallery__btn-next');
const navPrev = document.querySelector('.gallery__btn-prev');
const slidesPagesCounter = document.querySelector('.gallery__slides-counter');

let slides = document.querySelectorAll('.swiper-slide1').length;
let pagesCount;
let slideCounter = 1;

const updateCounter = () => {
  slidesPagesCounter.textContent = `${slideCounter} / ${pagesCount}`;
}

const updatePages = (width) => {
  if (width > 1550) {
    pagesCount = Number(slides / 3);
    updateCounter();
  }

  if (width > 680 && width <= 1550) {
    pagesCount = Number(slides / 2);
    updateCounter();
  }

  if (width > 320 && width <= 680) {
    pagesCount = Number(slides / 1);
    updateCounter();
  }
}

updatePages(window.innerWidth);

window.onresize = () => {
  slideCounter = 1;
  swiper1.slideTo(1);
  updatePages(window.innerWidth);
}

navNext.addEventListener('click', () => {
  document.querySelector('.swiper-button-prev1').click();
  navNext.classList.add('nav-btn-disabled');
  navPrev.classList.remove('nav-btn-disabled');

  if (slideCounter < pagesCount) {
    slideCounter += 1;
  }

  updateCounter();
})

navPrev.addEventListener('click', () => {
  document.querySelector('.swiper-button-next1').click();
  navPrev.classList.add('nav-btn-disabled');
  navNext.classList.remove('nav-btn-disabled');

  if (slideCounter > 1) {
    slideCounter -= 1;
  }

  updateCounter();
})





//Swiper2

var swiper2 = new Swiper('.swiper2', {
  breakpoints: {
    1550: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50
    },
    930: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 27
    },
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1
    }
  },
  direction: 'horizontal',
  loop: false,

  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },

  pagination: {
    el: '.swiper-pagination2',

    clickable: true
  }
})

const eventBtnPrev = document.querySelector('.events__slider-btn-prev');
const eventBtnNext = document.querySelector('.events__slider-btn-next');
const swiper2BtnPrev = document.querySelector('.swiper-button-prev2');
const swiper2BtnNext = document.querySelector('.swiper-button-next2');

eventBtnPrev.addEventListener('click', () => {
  swiper2BtnPrev.click();
  if (swiper2BtnPrev.classList.contains('swiper-button-disabled')) {
    eventBtnPrev.classList.add('event-btn-disabled');
  }
  if (eventBtnNext.classList.contains('event-btn-disabled')) {
    eventBtnNext.classList.remove('event-btn-disabled');
  }
})

eventBtnNext.addEventListener('click', () => {
  swiper2BtnNext.click();
  if (swiper2BtnNext.classList.contains('swiper-button-disabled')) {
    eventBtnNext.classList.add('event-btn-disabled');
  }
  if (eventBtnPrev.classList.contains('event-btn-disabled')) {
    eventBtnPrev.classList.remove('event-btn-disabled');
  }
})





// Swiper3

var swiper3 = new Swiper('.swiper3', {
  breakpoints: {
    1550: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50,
    },
    930: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 50,
    },
    680: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 34,
    },
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    }
  },

  direction: 'horizontal',
  loop: false,

  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },
});

const partnersBtnPrev = document.querySelector('.projects-partners__btn-prev');
const partnersBtnNext = document.querySelector('.projects-partners__btn-next');
const swiper3BtnPrev = document.querySelector('.swiper-button-prev3');
const swiper3BtnNext = document.querySelector('.swiper-button-next3');

partnersBtnPrev.addEventListener('click', () => {
  swiper3BtnPrev.click();
  if (swiper3BtnPrev.classList.contains('swiper-button-disabled')) {
    partnersBtnPrev.classList.add('partners-btn-disabled');
  }
  if (partnersBtnNext.classList.contains('partners-btn-disabled')) {
    partnersBtnNext.classList.remove('partners-btn-disabled');
  }
})

partnersBtnNext.addEventListener('click', () => {
  swiper3BtnNext.click();
  if (swiper3BtnNext.classList.contains('swiper-button-disabled')) {
    partnersBtnNext.classList.add('partners-btn-disabled');
  }
  if (partnersBtnPrev.classList.contains('partners-btn-disabled')) {
    partnersBtnPrev.classList.remove('partners-btn-disabled');
  }
})
