var formModal = document.querySelector('.modal-basket');
var buttonModalOpen = document.querySelector('.product-cart__button');
var bgOverlay = document.querySelector('.overlay');
var buttonModalClose = document.querySelector('.modal-basket__button');
var mainNav = document.querySelector('.main-nav');
var menuButton = document.querySelector('.main-nav__toggle');

buttonModalOpen.addEventListener('click', function(evt) {
  if (!formModal.classList.contains('modal-basket--opened')) {
    evt.preventDefault();
    formModal.classList.add('modal-basket--opened');
    bgOverlay.classList.add('overlay--opened');
  }
})

buttonModalClose.addEventListener('click', function(evt) {
  if (formModal.classList.contains('modal-basket--opened')) {
    evt.preventDefault();
    formModal.classList.remove('modal-basket--opened');
    bgOverlay.classList.remove('overlay--opened');
  }
})

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
