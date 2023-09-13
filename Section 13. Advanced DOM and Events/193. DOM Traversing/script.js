'use strict';

// GOING DOWNWARDS : SELECTING CHILDREN
// Important Methods : querySelector() and children()

// We can select elements directly using querySelector.
const h1 = document.querySelector('h1');

// We can also query in the elements of an element rather than the document.
// This will retuen a NodeList of length two.

// Using this query, we will be able to search for an element having a particular class
// in the children of a specific element.
const highlightedParts = h1.querySelectorAll('.highlight');
console.log(highlightedParts);

// This will give us the NodeList of aall the child nodes of h1
console.log(h1.childNodes);

// This will give us the collection of all the HTML children of an element. Collection is live.
console.log(h1.children);

// We can also get the firstChild element of an element and make changes to it
h1.firstElementChild.style.color = 'white';

// // We can also get the lastChild element of an element and make changes to it
h1.lastElementChild.style.color = 'orangered';

/////////////////////////////////////////////////////////////////////////////////

// GOING UPWARGS : SELECTING PARENTS
// Important Methods : closest() and parentElement()

// We can select the parent element of an element by using parentNode
console.log(h1.parentElement);

// We can also select parentNode by using parentNode
console.log(h1.parentNode);

// In this case, both these will be same since header is also a node.

// Now, when we want to select the parent element from the DOM tree for an element , we use closest().
// This method is just opprosite of querySelector as querySelecvtor finds the element in the children of an element
// with the given class no matter how deep it is, closest() finds the element with the given class in the parents of our
// current element no matter how far in the DOM tree it is.

h1.closest('.header').style.backgroundColor = 'lightgreen';

h1.closest('h1').style.backgroundColor = 'lightblue';

// GOING SIDEWAYS : SIBLINGS
// previousElementSibling and nextElementSibling

// Get the previous sibling element of h1
console.log(h1.previousElementSibling); // gives null b/c h1 is the first child element in h1

console.log(h1.nextElementSibling);

// To get the previosSibling and nextSibling node, use previousSibling and nextSibling
console.log(h1.previousSibling);
console.log(h1.nextSibling);

// To get all the sibling elements of an element, do this
console.log(h1.parentElement.children);

// Traverse through all the siblings of an element and change their colors except itself.
// This will change the bgColor of all the 3 sibling elements to red.
[...h1.parentElement.children].forEach(function (el) {
  if (el != h1) el.style.backgroundColor = 'orange';
});
