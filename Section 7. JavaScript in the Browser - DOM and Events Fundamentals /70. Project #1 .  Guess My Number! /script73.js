// 73. Handling Click Events

// First, we need to add an Event Listener to the Check button

// function inside addEventListener is known as eventHandler.

// The function inside the addEventListener will get executed as sson as the event happens on
// that element.

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // if guess ===0 , it is a falsy statement
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
});
