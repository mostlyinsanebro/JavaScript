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
const headerElem = document.querySelector('.header');

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

// Make the nav component sticky
// Our requirement is that whenever we reach the section of the wepage, then the navbar must become sticky
// we will simply add the sticky class to it based on scroll position on the window.

// Get the scrollCoordinates of section1
// const posSection1 = section1.getBoundingClientRect();
// console.log(posSection1); // It is relative to the position where we are currently on the screen

// // This event will be fired everytime we scroll on the screen
// window.addEventListener('scroll', function (e) {
//   //When we scroll to the relative position of section1 in our browser, then add sticky class to the nav element.
//   if (this.window.scrollY >= posSection1.top) nav.classList.add('sticky');
//   // When we again go to the position before section 1, make the navbar unsticky again.
//   else if (this.window.scrollY < posSection1.top)
//     nav.classList.remove('sticky');
// });
//////////////////////////////////////////////////////////////////////////

// Sticky Navigation - Intersection OObserver API

// This API allows our code to make some changes when a certain target element intersects another element
// or it intersects the viewport.
// It is better than the scroll functionality because unlike the scroll functionality, this API will not be triggered
// everytime we scroll o0n the screen and is thus will give a better performance.

// Creating observer callback
// This callback will be called everytime when the target element will intersect the root element at the threshold value.

// It is called with two arguments, entries and the observer object.
// entries -> are an array of the threshold entries for which the intersection will be checked.

// This callback will be called for this case, whenever the 10% of the target element is visible or is intersecting with the
// root element -> no matter the starting potion of it or the ending portion of it. We just need the intersection at 10%.

// TEMPLATE CODE

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     //  console.log(entry);
//   });
// };

// // Creating options object
// const obsOptions = {
//   root: null, // this is the element with which we want to check the intersection with the target element , (null  == viewport)
//   threshold: 0.1, // threshold stores the percentage of intersection of the current element needed with the
//   // target element to call the callback function.

//   // If we pass an array to the threshold [a,b..n], then the callback will be called everytime the intersection is equal to
//   // either of the values passed in array.
// };

// // new IntersectionObserver(callback, objectOfOptions);
// const observer = new IntersectionObserver(obsCallback, obsOptions);

// // To observe an eolement, give the target element to it.
// observer.observe(section1);

// Our requirement is that whenever our header element moves completely out of the view, then we want
// our navbar to become sticky.

const navHeight = nav.getBoundingClientRect().height;

const navObsCallback = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
  });
};

const navObsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, // rootMargin will basically decreade the target element by this value, then the callback will
  // be called when the target intersects with the root element when the intersection of threshold - rootMargin is reached.
};

const observerNav = new IntersectionObserver(navObsCallback, navObsOptions);

observerNav.observe(headerElem);
////////////////////////////////////////////////////////////////////////
// REVEALING ELEMENETS ON SCROLL

// The goal is to first make all the elements hidden in js only and then observer each and every section
// using the intersection observer API, that whether it has intersected with the viewport x% and if it has then,
// remove the section hidden class from the particular section using the target element.

// In the section- hidden class, we do nothing apart from making the opacity as 0 and sliding the section to 8rem
// along the Y-axis, so that when we remove that class, the element becomes visible and it is also adjusted to 8 rems
// up along the Y-axis and it will give the effect like the element became slided a bit and became visible when we scrolled
// onto it. Do, it only the firs time we are scrolling from top-to-bottom in our webpage.

// CALLBACK
// Takes two inputs, elements and observer

// entries is basically the event that happens everytime the intersection meets threshold and this
// callback is called and observer is the original observer object here.
const sectionObserverCallback = function (entries, observer) {
  // Each entry describes an intersection change for one observed
  // target element.

  // Add logic, make the element visible by removing the section--hidden class
  // and then also remove the observer from the element.

  // By default, the IntersectionObserver returns an entry when we are on the starting on the page and thus
  // the sction 1 is alredy there is is not then can not be revealed.

  // To handle thus
  // First, take the entry as input

  const entry = entries[0];

  // Also, if the element is not intersecting, the do not remove the section--hidden class from it.
  if (!entry.isIntersecting) return;

  // Remove-hidden class from the target element.
  entry.target.classList.remove('section--hidden');

  // Close the observer for that element
  sectionObserver.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(sectionObserverCallback, {
  root: null, // root === null, means viewport is the root.
  threshold: 0.15, // will call the callback when section becomes 15% visible.
});
// takes two inputs, first is the callback function and section is the options array.

// Add observer on all the sections.
document.querySelectorAll('.section').forEach(sec => {
  // First add tyhe section hidden class to every section
  sec.classList.add('section--hidden'); // COMMET FOR SLIDER COMPONENT

  // Now, add observer to each section
  // This will trigger the cb function everytime each section intersects with the root element equal to threshold %.
  sectionObserver.observe(sec);
});

//////////////////////////////////////////////////////////////////////////////////
// LAZY LOADING IMAGES

// Here, we are going to add a functionality to lazy load the images, meaning if the browser of the user
// slow, then the images will be loaded after some time and for the time being we will display the same image
// with a very low-resolution and will keep it blurred until, the image with high resolution is loaded on the webpage.

// First, get all the images that have a data-set attribute on them. After that, we will use the intersection onserver API
// to load the original image and then remove blur style from the image, once it becomes visible in the viewport.
const imgCallback = function (entries, observer) {
  const entry = entries[0];

  if (!entry.isIntersecting) return;

  // Replace the target's image as the target's data source.
  entry.target.src = entry.target.dataset.src;

  // Thyis line will make the image unblur by first replacing the pic witgh newer pic.
  // Problem ststement:-  What if user;s++'s internet connection is slow and then the image is replaced
  // by new image but it is still not loaded in the browser and it becomes visible first and that will reveal the
  // blurred image which is bad.
  //entry.target.classList.remove('lazy-img');

  // Solution, add an eventListener which will listen to the load event on the target element and on loading being
  // successfull first, will make the image unblurred.

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  imageObserver.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(imgCallback, {
  root: null,
  threshold: 0,
});

// Only the images with the data-src attribue will be selected.
const images = document.querySelectorAll('img[data-src]');

images.forEach(img => imageObserver.observe(img));

//////////////////////////////////////////////////////////////////////////////////////

//  BUILDING A SLIDER COMPONENT

// First of all, we have changed the slider pages in the slider by images for simplicity in html file.

// Now, we will select each page and set it's X asis to i*100 %, this way they will be displayed
// one after the other in horizontal fashion.

const sliderComponent = function () {
  // SELECTORS
  const sliderImages = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotsContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = sliderImages.length;

  // Make the slider small in size so that it becomes easier for development
  // slider.style.overflow = 'visible';
  // slider.style.transform = 'scale(0.4) translateX(-1200px)';

  // FUNCTIONS

  const goToSlide = function (slide) {
    sliderImages.forEach((s, i) => {
      s.style.transform = `translateX(${(i - slide) * 100}%)`;
    });
  };

  // Add dots for each page to the dotsContainer component
  const addDots = function () {
    sliderImages.forEach((_, i) => {
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `
  <button class ='dots__dot' data-slide = ${i}></button>`
      );
    });
  };

  // Now, we want to make the dot of the current-slide visible
  // For that first remove the dost__dot--active class from all the dots
  const activeDot = function (slide) {
    document.querySelectorAll('.dots__dot').forEach((s, i) => {
      s.classList.remove('dots__dot--active');
    });

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');

    // Now, add the active class to only the current-slide
  };

  const init = function () {
    goToSlide(0);
    addDots();
    activeDot(0);
  };
  init();

  const nextSlide = function () {
    // If the sliderreaches the last slide, go back to first slide else increase the slide by 1
    // which will shift the slider to the next image on the right.

    if (curSlide == maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    // When we click the right button, we want that every image is shifted to the right.
    goToSlide(curSlide);
    activeDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide == 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    // When we click the right button, we want that every image is shifted to the right.
    goToSlide(curSlide);
    activeDot(curSlide);
  };

  // EVENT LISTENERS

  // Now, on clicking the right button, we want that our slider goes to next slide
  // which will mean that the translateX will be shifted by a 100 for all the images.
  btnRight.addEventListener('click', nextSlide);

  // Now, add functionality for images on the btnLeft.
  btnLeft.addEventListener('click', prevSlide);

  // Now , add functionality to dots that on clicking a dot, the corresponding
  // image will be traversed to.

  // Add eventlistener to the dotContainer using event delegation.
  dotsContainer.addEventListener('click', function (e) {
    // If target is one of the dots, then go to the dataset-slide corresponding to that dot.
    if (e.target.classList.contains('dots__dot')) {
      // GO TO THE DATASLIDE OF THAT DOT
      curSlide = Number(e.target.dataset.slide);

      goToSlide(curSlide);
      activeDot(curSlide);
    }
  });

  // slide images on basis of keydown.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
      nextSlide();
    }
    if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  });
};

sliderComponent();
//////////////////////////////////////////////////////////////////////////////////////

// LIFECYCLE DOM EVENTS

// Events that occur in the DOM during a webpage's lifecycle.

// DomContentLoaded
// This event is fired by the document as soon the HTML is completely parsed which means the HTML has been downloaded
// and been converted to the DOM tree.
// Also, all scripts must be downloaded and loaded before the DomContenetLoaded event can happen.

// so, for this event to fire, first the HTML and js must be loaded and executed in the document.

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('DOM Contenet Loaded', e);
});

// Next is the load event that is triggered by the window object once the HTML and CSS of the webpage is fully loaded.
// When the complete page is finished loading is when this event is fired.
window.addEventListener('load', function (e) {
  console.log('Fully loaded!', e);
});

// beforeunload : this event is triggered on windows object right before we try to unload i.e. close the page
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  e.returnValue = ' ';
});
