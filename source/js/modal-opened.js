var formModal = document.querySelector('.modal-basket');
var buttonModalOpen = document.querySelector('.product-cart__button');

buttonModalOpen.addEventListener('click', function(evt) {
  if (!formModal.classList.contains('modal-basket--opened')) {
     formModal.classList.add('modal-basket--opened');
  }

  else {
    formModal.classList.remove('modal-basket--opened');
  }

})
