// 84. Switching the Active Player


'use strict';

// Selecting the elements

const player0El= document.querySelector('.player--0');
const player1El= document.querySelector('.player--1');

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

let totalScrore = [0,0];
let currentScore = 0;
let activePlayer = 0;

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
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else{
       // Reset the currentScore 

        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
   
       // Switch player
        activePlayer = activePlayer===0 ? 1:0;

       // We can add and remove the ui component of active element by toggling the class 
       // associated to it by elements.
       player0El.classList.toggle('player--active');
       player1El.classList.toggle('player--active');


    }

});
