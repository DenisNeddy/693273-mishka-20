var formModal = document.querySelector('.modal-basket');
var buttonModalOpen = document.querySelector('.product-cart__button');
var bgOverlay = document.querySelector('.overlay');
var buttonModalClose = document.querySelector('.modal-basket__button');

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
