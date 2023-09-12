'use strict';

///////////////////////////////////////////////////////////////////////////////////

// MODAL WINDOW
const openAccount = document.querySelectorAll('.btn--show-modal');
const modalWindow = document.querySelector('.modal');
const overlayWindow = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal');

// Apply DRY
const showModalFunction = function () {
  // When this button gets clicked, hidden class should get removed from the modal window
  modalWindow.classList.remove('hidden');

  // Also, remove the hidden from overlay element
  overlayWindow.classList.remove('hidden');
};

const hideModalFunction = function () {
  // Make the background unblurred.
  overlayWindow.classList.add('hidden');

  // Make the modal window hidden again.
  modalWindow.classList.add('hidden');
};

// Now, we want that on clicking this button, our modal window gets displayed on screen and the background gets blurred.
openAccount.forEach(btn => btn.addEventListener('click', showModalFunction));

// When the overlay gets clicked, the modal window should get closed and the overlay should also
// get back to original state from blurred.
overlayWindow.addEventListener('click', hideModalFunction);

// Also add an event listener to the x sign of the modal window, when it gets clicked
// modal window and overlay should be hidden again.
btnCloseModalWindow.addEventListener('click', hideModalFunction);

//////////////////////////////////////////////////////////////////////////////

// There are two ways of scrolling onto an element by clicking the button
// Second one, window.scrollTo is somewhat deprecated.

// Way 1. == Element.scrollIntoView
const btnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScroll.addEventListener('click', function (e) {
  // It will scroll to the section1 smoothly without any offSet problem or something like that.
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////////////////////////////////////////////////////////////////////

// Handling events in JavaScript
// There are three ways to handle events in js

// Way 1. Use addeventListener on an element and we can handle multiple types of events that happen
// on an element. Whether we handle an event generated from an element or not, it is created nonetheless.

const elemH1 = document.querySelector('h1'); // an html selected directly

// We can also remove a function from an event but for that we will have to put the function seperate from addEventListener.
const alertFunction = function (e) {
  alert('H1 element is entered');

  elemH1.removeEventListener('mouseenter', alertFunction);
};

elemH1.addEventListener('mouseenter', alertFunction);

// Way 2. By adding the event directly to the element.

// elemH1.onmouseenter = alertFunction;

// Way 3. By adding the js directly to the element in it's HTML - not recommended.
// IGNORE
