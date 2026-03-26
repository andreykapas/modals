'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const showClickHandler = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalHandler = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let index = 0; index < btnOpenModal.length; index++) {
  btnOpenModal[index].addEventListener('click', showClickHandler);
}

btnCloseModal.addEventListener('click', closeModalHandler);
overlay.addEventListener('click', closeModalHandler);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModalHandler();
});
