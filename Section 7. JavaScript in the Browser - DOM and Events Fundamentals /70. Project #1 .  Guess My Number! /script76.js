// 76. Coding Challenge #1

// We can change the CSS of a webpage using js by using DOM with syle property.
// It will add inline sytle to the HTML document and will not change the CSS file.

// Generating a random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // If user presses check, without giving any input.
  if (!guess) {
    // Setting message to No Number
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
  // When player wins
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 Correct Number';

    // Add CSS Style here...
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  // When guess is too high
  else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too High!';
    score--;

    // Condition to change the result text to game lost if score becomes 0.
    if (score > 0) {
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // When guess is too low
  else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too Low!';
    score--;
    if (score > 0) {
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Adding event listener for click event on again button
document.querySelector('.again').addEventListener('click', function () {
  // Restore initial values of score and secretNumber
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Restoring the scretNumber back to question mark
  document.querySelector('.number').textContent = '?';

  // Restoring value of score back to original
  document.querySelector('.score').textContent = score;

  // Change the bg color to original and width to original

  // Setting bgcolor to original
  document.querySelector('body').style.backgroundColor = '#222';

  // Setting width to original
  document.querySelector('.number').style.width = '15rem';

  //Setting message to original
  document.querySelector('.message').textContent = 'Start guessing...';

  // Restore input field
  document.querySelector('.guess').value = '';
});
