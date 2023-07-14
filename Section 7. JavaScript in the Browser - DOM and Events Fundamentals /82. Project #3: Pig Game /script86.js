// 86. Resetting the game


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
const current1El = document.getElementById('current--1');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let score,currentScore,activePlayer,playing;

const init = function(){

    
 score = [0,0];
 currentScore = 0;
 activePlayer = 0;
 playing = true;

    // Reset the currentScore to 0 
    currentScore = 0;
    
    // Reset scores of both the current and total score elements to 0

    // Reset total scores elements to 0.
    score0El.textContent = 0;
    score1El.textContent = 0;


    // Reset current scores elements to 0.
    current0El.textContent = 0;
    current1El.textContent = 0;

    // Remove the dice i.e. add hidden class to dice
    diceEl.classList.add('hidden');

    
    // If there is win element on the active element, remove it from that element

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');


    // Make the total-score to 0.
    score = [0,0];

    playing = true;
    activePlayer = 0;
}

//  Initializing everything
init();

// Switch player function
const switchPlayer = function(){
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;

   // Switch player
    activePlayer = activePlayer===0 ? 1:0;

   // We can add and remove the ui component of active element by toggling the class 
   // associated to it by elements.
   player0El.classList.toggle('player--active');
   player1El.classList.toggle('player--active');
}

// Add dice on the screen when we click the roll dice button

btnRoll.addEventListener('click',function(){
   if(playing){
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
        switchPlayer();

    }
}

});


// If someone clicks hold score
btnHold.addEventListener('click',function(){
   if(playing){
    // Add currentScore to total score of the active player
    score[activePlayer] = currentScore + score[activePlayer];

    // Display that score
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

    // If total score is > 100, finish the game
    if(score[activePlayer] >= 20)
    {
        // Make p;laying stop by disabling both the buttons
        playing = false;

        // add winner class to the active player
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

        // remove active class from active player as well
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        

        // Remove the dice image
        diceEl.classList.add('hidden');
    }
    else
    {
        // Switch player
        switchPlayer();
    }

   
}

});


// Add functionality to rest the game when reset button gets clicked
btnNew.addEventListener('click',init);
