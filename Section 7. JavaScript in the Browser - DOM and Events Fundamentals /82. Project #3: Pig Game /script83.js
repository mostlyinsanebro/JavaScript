// 83.Rolling the dice

'use strict';

// Selecting the elements

const score0El = document.querySelector('#score--0');

// we can also get an element by Id like this
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll= document.querySelector('.btn--roll');
const btnHold= document.querySelector('.btn--hold');

const current0El = document.getElementById('current--0');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore0 = 0;
let currentScore1 = 0;

// Add dice on the screen when we click the roll dice button

btnRoll.addEventListener('click',function(){

    //1. Generating a random dice number
    let dice = Math.trunc(Math.random()*6)+1;
    
    // 2. Making the dice pic visible aby removing hodden class from it.
    diceEl.classList.remove('hidden');


    //3. Displaying the dice according to random generated number
    diceEl.src = `dice-${dice}.png`;


    // 4. If dice roll is not 1 , then
    if(dice !==1){
      // keep adding to the current score
      currentScore0 = currentScore + dice;
      current0El.textContent = currentScore0;
    }
    else{
       // Reset the currentScore 
        currentScore0 = 0;
        current0El.textContent = currentScore0;

       // Switch player
       

    }

});
