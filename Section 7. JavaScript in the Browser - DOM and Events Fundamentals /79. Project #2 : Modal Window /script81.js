// 81. Handling an "Esc" Keypress Event

'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// When an event happens, javascript creates an object which contains all the information
// about the event which can be accessed in the eventHandler function.

// A button click event can not be listened for a particular element, we have to listen for
// it on the whole document.

// keydown event is when a key is pressed.

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    // If escape key is pressed, then check if the modal window is open or not
    // by checking if hidden class exists on it or not.

    // Remove the modal window
    closeModal();
  }
});
