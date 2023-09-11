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

///////////////////////////////////////////////////////////////////////

// SELECT DOM ELEMENTS

// For selecting the whole html document
console.log(document.documentElement);

// For selecting the head or body of the html document of the WebPage or DOM Element.
console.log(document.head);
console.log(document.body);

// This will select the first element with a given class.
const header = document.querySelector('.header');

// This will select all the elements with a given class in a NodeList.
const allSections = document.querySelectorAll('.section');
console.log(allSections);

// to get an element by id, use
document.getElementById('section--1');

// We can also get all the elements of a type like of button type, by using tag Name
const buttons = document.getElementsByTagName('button');
console.log(buttons);
// It will give the dynamic HTMLCollection of all the buttons there are in the webpage.If I remove a button from the
// webpage in the browser and then query buttons, now I will see the list of only 8 remaining buttons.

// NodeList is static while HTMLCollection is dynamic.

// HTMLCollection is a live collection.

// get elements by class name
console.log(document.getElementsByClassName('btn'));

//////////////////////////////////////////////////////////////

// CREATING AND INSERTING ELEMENTS
// This will create a div element
const divElem = document.createElement('div');

// Add css class to the element for adding the style to it.
divElem.classList.add('cookie-message');

divElem.innerHTML =
  'We added cookies for improved performance and analytics.<button class ="btn btn--close-cookie">Got it!</button>';

// Now, add this element to the webpage
// header.prepend(divElem);
//header.append(divElem);

// This basically adds the div element to the webpage and prepend will add it as the first element of header
// but append moves it as makes it the last element of the header element.

// Only one unique element exists in the webpage, if you want two then will have to create a clone of it.

// Append the copy
// header.append(divElem.cloneNode(true));

// Will add the divElem to the html document as a sibling before the header element.
//header.before(divElem);

// Will add the divElem to the html document as a sibling after the header element.
header.after(divElem);
///////////////////////////////////////////////////////////////////////////////////////

// DELETING ELEMENTS

// This will remove the cookie element from the webpage once the button 'Got it!' gets clicked.
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // With this line, cookie will be removed from the webpage.
    divElem.remove();
  });

// alternative for remove() method -- older way before remove
// divElem.parentElement.removeChild(divElem);

///////////////////////////////////////////////////////////////////////////////////

// CSS STYLES

// Element.style.property and getComputedStyle(Element).property
// We can add inline styles to an element on the webpage using js
divElem.style.backgroundColor = '#37383d';

divElem.style.width = '100%';

// We can only access the inline styles of an element using element.style but we will not be able to
// access all the styles that are there in the element in the css file.

console.log(divElem.style.height); // We will get nothing here.

// We can only get the inline attributes that we have defined in our js file.
console.log(divElem.style.backgroundColor);

// For accessing the css styles of a file, we will have to use getComputed() function.

console.log(getComputedStyle(divElem).height);

// We can also add to the attribues then, by first accessing them through getComputed().

divElem.style.height =
  Number.parseFloat(getComputedStyle(divElem).height) + 15 + 'px';

////////////////////////////////////////////////////////////////////////
// ATTRIBUTES

// There are two ways to get the attributes of an element
// 1. Element.attributeName
// 2. getAttribute

const logo = document.querySelector('.nav__logo');

console.log(logo.src); // gives the absolute path
console.log(logo.alt);

console.log(logo.getAttribute('src')); // gives the relative path
console.log(logo.getAttribute('alt'));

// There is 1 way to set the attributes using setAttribute
logo.setAttribute('alt', 'Minimalist app logo');

///////////////////////////////////////////////////////////////////////////

// DATA VERSION
console.log(logo.dataset.versionNumber);

// Different methods to add or remove classes from an element
logo.classList.add('class1', 'class2');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// DO NOT USE
//logo.className = 'class1';
