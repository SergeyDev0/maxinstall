let header = document.querySelector('header');
let btnHamburger = document.querySelector('.header__hamburger-button');
let hamburgerList = document.querySelector('.header-nav__list');

btnHamburger.addEventListener('click', function() {
  hamburgerList.classList.toggle('open');
  header.classList.toggle('open');
});