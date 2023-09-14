'use strict';

const btnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const openAccount = document.querySelectorAll('.btn--show-modal');
const modalWindow = document.querySelector('.modal');
const overlayWindow = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal');
const buttons = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const operationContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////////////////////////////////////////////////

// MODAL WINDOW

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
openAccount.forEach(btn => {
  btn.addEventListener('click', showModalFunction);
});

// When the overlay gets clicked, the modal window should get closed and the overlay should also
// get back to original state from blurred.
overlayWindow.addEventListener('click', hideModalFunction);

// Also add an event listener to the x sign of the modal window, when it gets clicked
// modal window and overlay should be hidden again.
btnCloseModalWindow.addEventListener('click', hideModalFunction);
///////////////////////////////////////////////////////////////////////////////

// There are two ways of scrolling onto an element by clicking the button
// Second one, window.scrollTo is somewhat deprecated.

// Way 1. == Element.scrollIntoView

btnScroll.addEventListener('click', function (e) {
  // It will scroll to the section1 smoothly without any offSet problem or something like that.
  section1.scrollIntoView({ behavior: 'smooth' });
});
///////////////////////////////////////////////////////////////////////////////////

// Page Navigation - using Event Delegation

// First, we will do page navigation w/o event delegation.
// We will add event Listener to all the nav--link buttons which will scroll to respective element on page.

// We added the eventListener to each of the nav__link element but the problem is that in case if we have 1000 such elements
// then we will scrollto each element and add eventListener to each of the element which is not an optimal approach.

// const navLink = document.querySelectorAll('.nav__link').forEach(function (el) {
//   // Traverse each element and add eventListener to each element using forEach.
//   el.addEventListener('click', function (e) {
//     // prevent Deafult event from happening.
//     e.preventDefault();

//     // Get the href of an element, we will scroll to that element.
//     const id = el.getAttribute('href');

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// The solution to this problem is to add eventListener to the parent element of all those elements. When an element is
// clicked, then the event will propagate top the parent element due to event propagation and we will handle that event
// in the parent only.This woll be an optimal approach as we will have to add eventListenr to only one element and if an
// event is still not rendered on the webpage due to being dynamic, this approach will work in that case as well.
document.querySelector('.nav__links').addEventListener('click', function (e) {
  // Prevent the default behaviour.
  e.preventDefault();

  // Check if the clicked element is a nav__link element.
  if (e.target.classList.contains('nav__link')) {
    // Get the href of the target element to which it is supposed to scroll to
    const id = document.querySelector(e.target.getAttribute('href'));

    // scroll to the corresponding element.
    id.scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////////////////////////////////////

// Adding Tabbed Component

// First of all, select the elements -> buttons, the element that show the content and
// parent element of the buttons.

// Instead of adding eventListener to every button, do event delegation.
// buttons.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('CLICKED');
//   });
// });

// Event delegation
tabContainer.addEventListener('click', function (e) {
  // This line is imp. We are adding eventListener to the tabsContainer element first. Then we are coming
  // on the event and going to the next greater parent of both span and button element, so that they will be
  // considered as one.
  const targetElem = e.target.closest('.operations__tab');

  // It will retuen immediately if clicked element is not target element and thus nothing will happen then.
  // Wrote to handle if the user clicks on the tabsContainer.
  if (!targetElem) return;

  // First , make all the three tabs come to normal form and not levitated form.
  buttons.forEach(function (el) {
    el.classList.remove('operations__tab--active');
  });

  // Now, add the levivating class to the clicked component.
  targetElem.classList.add('operations__tab--active');

  // Remove, active class from all the textContents so that that none is displayed at first.
  operationContent.forEach(function (c) {
    c.classList.remove('operations__content--active');
  });

  // Now, get the corresponding display for the clicked button and then display it.

  // Use the data- tab of the target element to display the textcontent accordingly.
  const displayTextContent = document.querySelector(
    `.operations__content--${targetElem.dataset.tab}`
  );

  displayTextContent.classList.add('operations__content--active');
});
///////////////////////////////////////////////////////////////////////
// Menu fade animations

// Now, our requirement is that when we hover over a link in the menu tab, then all the other
// elements get faded out and when we move the mouse away from that link, then all the elements
// come back to normal.

const nav = document.querySelector('.nav');
const navLinks = nav.querySelectorAll('.nav__links');

const test = function (e) {
  console.log(e);
};
const handleHover = function (e, opacity) {
  // Get the target
  const link = e.target;

  // Return if the target element is anything other than nav__link.
  if (!link.classList.contains('nav__link')) return;

  // First, find all the siblings of the current element
  const siblings = link.closest('.nav').querySelectorAll('.nav__link');

  // Query over all tthe siblings of the current element and then make them fade except the current element.
  siblings.forEach(el => {
    if (el != link) el.style.opacity = opacity;
  });
  nav.querySelector('img').style.opacity = opacity;
};

// Adding the callback fyunction with arguments directly in the eventHandler function will not work
// beacuse 1. it will not take the event as input and also it will be executed immediately before the event even happens.
// Solution. Wrap the callback function with arguments in another standard function , which will first take the
// event as input when it happens and then pass it to the function and calls that function.

//nav.addEventListener('mouseover', test(e));

// Fade the elements except the current element
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});

// Unfade when mouse if out of the element.
nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1.0);
});

///////////////////////////////////////////////////////////////////////

// SELECT DOM ELEMENTS

// // For selecting the whole html document
// console.log(document.documentElement);

// // For selecting the head or body of the html document of the WebPage or DOM Element.
// console.log(document.head);
// console.log(document.body);

// // This will select the first element with a given class.
// const header = document.querySelector('.header');

// // This will select all the elements with a given class in a NodeList.
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// // to get an element by id, use
// document.getElementById('section--1');

// // We can also get all the elements of a type like of button type, by using tag Name
// const buttons = document.getElementsByTagName('button');
// console.log(buttons);
// // It will give the dynamic HTMLCollection of all the buttons there are in the webpage.If I remove a button from the
// // webpage in the browser and then query buttons, now I will see the list of only 8 remaining buttons.

// // NodeList is static while HTMLCollection is dynamic.

// // HTMLCollection is a live collection.

// // get elements by class name
// console.log(document.getElementsByClassName('btn'));

// //////////////////////////////////////////////////////////////

// // CREATING AND INSERTING ELEMENTS
// // This will create a div element
// const divElem = document.createElement('div');

// // Add css class to the element for adding the style to it.
// divElem.classList.add('cookie-message');

// divElem.innerHTML =
//   'We added cookies for improved performance and analytics.<button class ="btn btn--close-cookie">Got it!</button>';

// // Now, add this element to the webpage
// // header.prepend(divElem);
// //header.append(divElem);

// // This basically adds the div element to the webpage and prepend will add it as the first element of header
// // but append moves it as makes it the last element of the header element.

// // Only one unique element exists in the webpage, if you want two then will have to create a clone of it.

// // Append the copy
// // header.append(divElem.cloneNode(true));

// // Will add the divElem to the html document as a sibling before the header element.
// //header.before(divElem);

// // Will add the divElem to the html document as a sibling after the header element.
// header.after(divElem);
// ///////////////////////////////////////////////////////////////////////////////////////

// // DELETING ELEMENTS

// // This will remove the cookie element from the webpage once the button 'Got it!' gets clicked.
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // With this line, cookie will be removed from the webpage.
//     divElem.remove();
//   });

// // alternative for remove() method -- older way before remove
// // divElem.parentElement.removeChild(divElem);

// ///////////////////////////////////////////////////////////////////////////////////

// // CSS STYLES

// // Element.style.property and getComputedStyle(Element).property
// // We can add inline styles to an element on the webpage using js
// divElem.style.backgroundColor = '#37383d';

// divElem.style.width = '100%';

// // We can only access the inline styles of an element using element.style but we will not be able to
// // access all the styles that are there in the element in the css file.

// console.log(divElem.style.height); // We will get nothing here.

// // We can only get the inline attributes that we have defined in our js file.
// console.log(divElem.style.backgroundColor);

// // For accessing the css styles of a file, we will have to use getComputed() function.

// console.log(getComputedStyle(divElem).height);

// // We can also add to the attribues then, by first accessing them through getComputed().

// divElem.style.height =
//   Number.parseFloat(getComputedStyle(divElem).height) + 15 + 'px';

// ////////////////////////////////////////////////////////////////////////
// // ATTRIBUTES

// // There are two ways to get the attributes of an element
// // 1. Element.attributeName
// // 2. getAttribute

// const logo = document.querySelector('.nav__logo');

// console.log(logo.src); // gives the absolute path
// console.log(logo.alt);

// console.log(logo.getAttribute('src')); // gives the relative path
// console.log(logo.getAttribute('alt'));

// // There is 1 way to set the attributes using setAttribute
// logo.setAttribute('alt', 'Minimalist app logo');

// ///////////////////////////////////////////////////////////////////////////

// // DATA VERSION
// console.log(logo.dataset.versionNumber);

// // Different methods to add or remove classes from an element
// logo.classList.add('class1', 'class2');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // not includes

// // DO NOT USE
// //logo.className = 'class1';
// //////////////////////////////////////////////////////////////////////////////

// // There are two ways of scrolling onto an element by clicking the button
// // Second one, window.scrollTo is somewhat deprecated.

// // Way 1. == Element.scrollIntoView
// const btnScroll = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScroll.addEventListener('click', function (e) {
//   // It will scroll to the section1 smoothly without any offSet problem or something like that.
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// ////////////////////////////////////////////////////////////////////////////////////////////////////

// // Handling events in JavaScript
// // There are three ways to handle events in js

// // Way 1. Use addeventListener on an element and we can handle multiple types of events that happen
// // on an element. Whether we handle an event generated from an element or not, it is created nonetheless.

// const elemH1 = document.querySelector('h1'); // an html selected directly

// // We can also remove a function from an event but for that we will have to put the function seperate from addEventListener.
// const alertFunction = function (e) {
//   alert('H1 element is entered');

//   elemH1.removeEventListener('mouseenter', alertFunction);
// };

// elemH1.addEventListener('mouseenter', alertFunction);

// // Way 2. By adding the event directly to the element.

// // elemH1.onmouseenter = alertFunction;

// // Way 3. By adding the js directly to the element in it's HTML - not recommended.
// // IGNORE

// /////////////////////////////////////////////////////////////////////////////////////////////

// // EVENT PROPAGATION IN PRACTICE
// // We will do this by adding eventListeners to one of the buttons in one of the nav-links, the whole nav-links element
// // that has the all the nav-links in it and then the whole navbar.
// // This will show bubbling.

// // First write a function to create a random number between 0 and 255 to create a random color.

// const createRandomNumber = function (min, max) {
//   const randomNumber = Math.floor(Math.random() * (max - min + 1));
//   return randomNumber;
// };

// console.log(createRandomNumber(0, 255));

// // Now, add event listener to nav-link such that on clicking it, it's bgColor gets changed to a random number

// // eventListener listens for an event on an element in the bulling phase only and not the capturing phase by default.
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = `rgb(
//     ${createRandomNumber(0, 255)},
//     ${createRandomNumber(0, 255)},
//     ${createRandomNumber(0, 255)}
//   )`;

//   console.log('NAV-LINK', e.target, e.currentTarget);
//   // e.target will show us the target of the event which will be nav-link here and
//   // e.currentTarget will give the current element.

//   // e.currentTarget == this where this points to the current element
//   console.log(e.currentTarget == this);

//   // Stopped the propagation of the event to tghe parent elements.
//   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = `rgb(
//     ${createRandomNumber(0, 255)},
//     ${createRandomNumber(0, 255)},
//     ${createRandomNumber(0, 255)}
//   )`;

//     console.log('NAV-LINKS', e.target, e.currentTarget);
//     // e.target will show us the target of the event which will be nav-link here
//     // and e.currentTarget will give the current element.
//   },
//   true
// );

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = `rgb(
//     ${createRandomNumber(0, 255)},
//     ${createRandomNumber(0, 255)},
//     ${createRandomNumber(0, 255)}
//   )`;
//     console.log('NAV', e.target, e.currentTarget);
//     // e.target will show us the target of the event which will be nav-link here
//     // and e.currentTarget will give the current element
//   },
//   true
// );

// // Now, when we click only on the nav-link tab, color for all the parents elements changes as well because
// // due to bubbling they also have the same event in them and we have added the eventHandlers for them as well.So, when the
// // event occurs on the target element due to bubbling the parent elements also think that it has happend for them
// // and eventListener gets called for them as well.

// // So, when an event happens on the child element, it also happens for the parent elements.

// // We can also stop the eventPropagation from the target element to the parent elements and then the eventHandlers
// // of the parent elements will not be triggered.

// // But the stopPropagation() function only stops the propation of an event to the parent elements during the bubbling phase.
// // We can still use the same event to trigger eventHandlers in the parent elements by adding true as the third argument in the
// // addEventListenet function of the parent elements.It will make the pareents handle the event during the capturing phase only,
// // when the event is traversing from top to bottom in the DOM tree.
// //////////////////////////////////////////////////////////////////////////////////////////////////
