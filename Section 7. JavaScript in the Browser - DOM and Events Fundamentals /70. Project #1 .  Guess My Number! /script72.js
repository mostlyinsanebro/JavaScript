// 72. Selecting and Manipulating Events

// We can play around with DOM using js and can get and set the values of the
// elements using js.

document.querySelector('.number').textContent = 20;

// We can change the text in the message using the below query from 'Start Guessing...'
// to '🎉 Correct Number!'

// For elements having some value already in the text content, we use textContent to manipulate that value.
document.querySelector('.message').textContent = '🎉 Correct Number!';

// For manipulating some input value element's text content, we use .value property

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

console.log(document.querySelector('.label-score').textContent);
