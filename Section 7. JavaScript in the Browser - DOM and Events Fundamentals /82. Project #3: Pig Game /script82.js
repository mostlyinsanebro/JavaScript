// 82. Project #3: Pig Game
'use strict';

// Selecting the elements

const score0El = document.querySelector('#score--0');

// we can also get an element by Id like this
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
