var mainNav = document.querySelector('.main-nav');
var menuButton = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');

menuButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  mainNav.classList.add('main-nav--opened');
  if(mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  }
  else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
})
