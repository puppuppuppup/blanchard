// Menu filter

const categories = document.querySelectorAll('.hero__filter-category');

categories.forEach((category => {
  category.addEventListener('mouseover', () => {
    category.classList.add('category-active');
  })
  category.addEventListener('mouseout', () => {
    category.classList.remove('category-active');
  })
}))

//ymap

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map('ymap', {
    center: [55.760208, 37.614316],
    zoom: 15,
  })

  var myPlacemark = new ymaps.Placemark([55.760208, 37.614316], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/ymap/ymap-placemark.svg',
    iconImageSize: [20, 20]
  });
  myMap.geoObjects.add(myPlacemark);
};

// Inputmask

var phoneInput = document.getElementById('phone');


var im = new Inputmask("+7 (999) 999 99-99");

im.mask(phoneInput);

// Validate

const validate = new JustValidate('#contacts-form');

validate.addField('#name', [
  {
    rule: 'minLength',
    value: 3,
  },
  {
    rule: 'maxLength',
    value: 20,
  },
  {
    rule: 'required',
  }
]).addField('#phone', [
  {
    rule: 'required'
  },
  {
    validator: (value, fields) => {
      var flag = false;
      if (Number(phoneInput.inputmask.unmaskedvalue()) && phoneInput.inputmask.unmaskedvalue().length === 10) {
        flag = true;
      }
      if (flag) {
        return true;
      }
      else {
        return false;
      }
    }
  }
])

// Custom Select

customSelect('#mySelect');

// Custom Scroll

var filters = document.querySelectorAll('.hero__filter-menu');

filters.forEach(el => {
  new SimpleBar(el, {
    autoHide: false,
    scrollbarMaxSize: 28
  });
});


// BURGER

const burgerMenu = document.querySelector('.burger-menu')

burgerMenu.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('burger-menu--active');
  document.querySelector('.header__menu').classList.toggle('header__menu--active');
  document.body.classList.toggle('body--active');
  document.body.style = `--top-offset: ${window.scrollY}px;`
  document.querySelector('.burger-menu-blocker').classList.toggle('burger-menu-blocker--active');
})

document.querySelectorAll('.header__link').forEach(el => {
  el.addEventListener('click', () => {
    if (burgerMenu.classList.contains('burger-menu--active')) {
      burgerMenu.click();
    }
})
})

// Search on tablets

const headerSearch = document.querySelector('.header__search');
const headerSearchBtn = document.querySelector('.header__search-btn');
const closeSearchBtn = document.querySelector('.header__search-close');

const changeSearchBtn = () => {
  headerSearchBtn.classList.toggle('header__search-btn--opened')
  headerSearch.classList.toggle('header__search--opened')
}

headerSearchBtn.addEventListener('click', (e) => {
  if (!e.currentTarget.classList.contains('header__search-btn--opened')){
    changeSearchBtn();
  }
  else {
    // Do a search
  }
})

closeSearchBtn.addEventListener('click', () => {
  if (headerSearchBtn.classList.contains('header__search-btn--opened')){
    changeSearchBtn();
  }
})

