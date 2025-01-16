
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.header__link').forEach(link => {

        let id = link.getAttribute('href').replace('#', '');
        if (id === entry.target.id) {
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      })
    }
  })
}, {
  threshold: 0.9
})

document.querySelectorAll('.section').forEach(section => { observer.observe(section) });


// --tabs--

const tabs = document.querySelectorAll('.offers__tabs');
const tabsContent = document.querySelectorAll('.offers__content');

tabs.forEach(item => {

  item.addEventListener('click', () => {

    tabs.forEach(item => item.classList.remove('active'))
    tabsContent.forEach(el => el.classList.add('hidden'));

    item.classList.add('active');

    let activeTab = item.dataset.tab;
    document.querySelector(activeTab).classList.remove('hidden');

  })
})

// --mob-navigation--

let burger = document.querySelector('.burger');
let mobNav = document.querySelector('.header__nav');
let stopBody = document.body;


burger.addEventListener('click', () => {

  burger.classList.toggle('active');
  mobNav.classList.toggle('active');
  stopBody.classList.toggle('stop');

})

mobNav.addEventListener('click', function (e) {
  if (e.target.classList.contains('header__nav')) {
    burger.classList.remove('active');
    mobNav.classList.remove('active');
    stopBody.classList.remove('stop');
  }
})

// --popup

let btnCall = document.querySelector('.home__btn');
let popup = document.querySelector('.home__popup');
let header = document.querySelector('.header');

let scrollController = {
  scrollOpen() {
    popup.classList.add('active');

    let offSet = window.innerWidth - document.body.offsetWidth + 'px';
    document.body.style.paddingRight = offSet;
    header.style.paddingRight = offSet;

    stopBody.classList.add('stop');
  },
  scollClose(event) {
    if (event.target == popup || event.target.closest('.home__popup-close')) {
      popup.classList.remove('active');

      header.style.paddingRight = 'unset';
      document.body.style.paddingRight = 'unset';
      stopBody.classList.remove('stop');
    }
  }
};

btnCall.addEventListener('click', scrollController.scrollOpen);
popup.addEventListener('click', scrollController.scollClose);


// --remove navigation

const link = document.querySelectorAll('.header__link');

link.forEach(item => {

  item.addEventListener('click', () => {
    burger.classList.remove('active');
    mobNav.classList.remove('active');
    stopBody.classList.remove('stop')

  })
})


// --swiper--

const swiper = new Swiper('.swiper', {

  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    360: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1.5,
    },
    840: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 3,
    },
  },

});

