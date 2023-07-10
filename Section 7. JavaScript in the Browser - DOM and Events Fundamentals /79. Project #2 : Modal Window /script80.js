// 80. Working with classes

'use strict';

// If we want to display or remove some style with clicking buttons
// then put that style in a class in css and then we can add or remove that style
// from that element by adding or removing that class from element using js and DOM.

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  // using classList to remove the hidden class from modal-window i.e. when
  // the button is clicked, the hidden class from modal window is removed,
  // which enables the modal-window to be displayed.

  modal.classList.remove('hidden');

  // also remove the hidden class from the overlay so that it will be displayed on button click
  // and background becomes blurred.

  overlay.classList.remove('hidden');
};

const closeModal = function () {
  // close modal-window
  modal.classList.add('hidden');

  // close-overlay
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  // Adding eventListener to each button which opens the modal-window when one
  // of the button is clicked.

  btnsOpenModal[i].addEventListener('click', openModal);
}

// Now, add eventListener to the modal-close button as well.
// It will close the modal-window and also remove the overlay by adding the classes back.
btnCloseModal.addEventListener('click', closeModal);

// addEventListener on overlay element as well,so that when we click on it
// modal window and overlay is hidden again.
overlay.addEventListener('click', closeModal);

// The js engine calls the eventListener function as soon as the click event happens.

// Summary:-
// In this lesson, we learned that we can add or remove styles from an element on the occurence of an event
// by removing or adding css classes from that element using js and DOM. Those classes basically were used to add
// a particular style.

// We can also associate a selected element from DOM to a variable and then use it in our code.

// We can also name the eventHandlers and then use them in eventListeners again and again.
