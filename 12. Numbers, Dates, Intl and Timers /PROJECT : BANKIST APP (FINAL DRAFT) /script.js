'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-10-12T13:15:33.035Z',
    '2019-11-23T09:48:16.867Z',
    '2019-09-25T06:04:23.907Z',
    '2020-07-25T14:18:46.235Z',
    '2020-04-04T16:33:06.386Z',
    '2020-05-16T14:43:26.374Z',
    '2020-08-18T18:49:59.371Z',
    '2020-03-19T12:01:20.894Z',
  ],
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2019-10-03T13:15:33.035Z',
    '2019-02-22T09:48:16.867Z',
    '2019-08-14T06:04:23.907Z',
    '2020-02-19T14:18:46.235Z',
    '2020-01-11T16:33:06.386Z',
  ],
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// This function adds the userName to each account.
const createUsernames = function () {
  accounts.forEach(acc => {
    const userName = acc.owner
      .split(' ')
      .map(mov => mov.charAt(0))
      .join('')
      .toLowerCase();

    acc.userName = userName;
  });
};

createUsernames();

let timer;

// Add Timer functionality
const addTimer = function () {
  // We first want that out timer shows 2 minutes.
  let time = 120;
  let mins = `${Math.floor(time / 60)}`.padStart(2, 0);
  let secs = `${time % 60}`.padStart(2, 0);

  labelTimer.textContent = `${mins}:${secs}`;

  timer = setInterval(() => {
    // Print each second in the timer.
    mins = `${Math.floor(time / 60)}`.padStart(2, 0);
    secs = `${time % 60}`.padStart(2, 0);

    labelTimer.textContent = `${mins}:${secs}`;

    // When time becomes 0, stop(delete) the timer and set the currentUser to undefined and make the UI blurred.
    if (time === 0) {
      clearTimeout(timer);
      currentUser = '';
      containerApp.style.opacity = 0;
      // Reset the welcome message as well.
      labelWelcome.textContent = 'Login to set started';
    }

    time--;
  }, 1000);
};

const updateUI = function (acc) {
  addElements(acc);
  accountTotal(acc);
  summarizeAccount(acc);
};
// This function will add the html rows for the transactions in the application.
const addElements = function (acc, sorted = false) {
  containerMovements.innerHTML = '';

  const movs = sorted
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  let dates;
  movs.forEach((movs, idx) => {
    dates = acc.movementsDates[idx];

    // Convert this date to proper format
    const fulldate = new Date(dates);
    const year = `${fulldate.getFullYear()}`.slice(-2);
    const month = `${fulldate.getMonth() + 1}`.padStart(2, 0);
    const date = `${fulldate.getDate()}`.padStart(2, 0);

    const displayDate = `${date}/${month}/${year}`;
    // Now, add corrsponding transactions to the currentUser transactions.
    const typeOfTransaction = movs > 0 ? `deposit` : `withdrawal`;
    const html = `
 <div class="movements__row">
       <div class="movements__type movements__type--${typeOfTransaction}">${
      idx + 1
    } ${typeOfTransaction}</div>
    <div class="movements__date">${displayDate}</div>
       <div class="movements__value">${movs.toFixed(2)}💶</div>
     </div>
 `;

    containerMovements.innerHTML = html + containerMovements.innerHTML;
  });
};

let total = 0;

// This function will calculate the total transactional sum of the account.
const accountTotal = function (acc) {
  let sum = 0;
  total = acc.movements.reduce((acc, mov) => acc + mov, 0);

  // Add another property to the account called the accountBalance
  currentUser.accountBalance = total;
  labelBalance.textContent = `${total.toFixed(2)}💶`;
};

// This function will calculate the total transactioanl deposits, withdrawls and interest of the currentAccout
// and add it to the webpage.
const summarizeAccount = function (acc) {
  const deposits = acc.movements.reduce(
    (acc, mov) => (mov > 0 ? acc + mov : acc + 0),
    0
  );

  let withdrawls = acc.movements.reduce(
    (acc, mov) => (mov < 0 ? acc + mov : acc + 0),
    0
  );
  withdrawls = -withdrawls;

  const interest = total * 0.1;

  labelSumInterest.textContent = `${interest.toFixed(2)}💶`;
  labelSumIn.textContent = `${deposits.toFixed(2)}💶`;
  labelSumOut.textContent = `${withdrawls.toFixed(2)}💶`;
};

let currentUser;

// LOGIN Functionality
btnLogin.addEventListener('click', function (e) {
  // This function stops the form from submitting and refreshing the whole page.
  e.preventDefault();

  sorted = 0;

  // The movements array must return to it's original state.

  // Now, read the entries from the user and PIN fields and check if they are correct

  const userName = inputLoginUsername.value;
  const pin = Number(inputLoginPin.value);

  console.log(`${userName} tried to login with ${pin}`);

  // Now, get the currentUser, find method returns the array element that matches the condition
  currentUser = accounts.find(
    acc => acc.userName === userName && acc.pin === pin
  );

  // console.log(currentUser, pin);

  // If the userName and pin matches an account in the accounts array, then make the app elements visible.
  if (accounts.includes(currentUser) && pin === currentUser.pin) {
    // Display welcome message.
    labelWelcome.textContent = `Welcome back, ${
      currentUser.owner.split(' ')[0]
    }`;

    // Make the color of login, normal again
    labelWelcome.removeAttribute('style');

    // Make the app visible
    containerApp.style.opacity = 100;

    // Add the current date here
    const fulldate = new Date();
    const year = fulldate.getFullYear();
    const month = `${fulldate.getMonth()}`.padStart(2, 0);
    const date = `${fulldate.getDate()}`.padStart(2, 0);

    const hours = `${fulldate.getHours()}`.padStart(2, 0);
    const minutes = `${fulldate.getMinutes()}`.padStart(2, 0);

    labelDate.textContent = `${date}/${month}/${year} ${hours}:${minutes}`;

    // First check if any timer exists previosly, if it does clear it first, so that when we login to another account
    // while the first one is still in progress, then two timers will be runnoing at the same time and
    // that will be problematic.
    if (timer) clearInterval(timer);
    addTimer();

    // This function adds elements to the current account, calculates total,in, out and interest for the current account.
    updateUI(currentUser);
  }
  // If login credentials are wrong, hide the app, set the current user to empty and set welcome message to
  // 'Uh oh! Your credentials are incorrect.'.
  else {
    labelWelcome.textContent = `Incorrect Login Credentials!`;
    labelWelcome.style.color = 'red';

    currentUser = ' ';

    // Make the app invisible
    containerApp.style.opacity = 0;

    // give a warning popup.setTimeout(alert('Uh oh! Login credentials are incorrect.'), 1000);
  }

  // We also want to clear out the contents of the input elements.
  inputLoginUsername.value = '';
  inputLoginPin.value = '';

  // Also, remove focus from the pin field.
  inputLoginPin.blur();
});

// AMOUNT TRANSFER FUNCTIONALITY
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  // find traverses the array and returns the first value that matches the criteria.
  const accountTransfer = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );

  const transferAmount = Math.floor(inputTransferAmount.value);

  // If the transfer user is correct and the accountBalance is greater than the to vbe transferred amount
  // and transfer money is not the account itself , then send the money.
  if (
    accountTransfer &&
    accountTransfer !== currentUser &&
    currentUser.accountBalance >= transferAmount
  ) {
    // Add this negative amount to the current User's movements and also add it to the transferAccount's movements

    currentUser.movements.push(-transferAmount);
    currentUser.accountBalance -= transferAmount;
    accountTransfer.movements.push(transferAmount);

    // Once the loan gets approved, add that date to the existing user's movementDates array and to the
    // transfer Account's movementDates array.
    const now = new Date().toISOString();
    currentUser.movementsDates.push(now);
    accountTransfer.movementsDates.push(now);

    // First check if any timer exists previosly, if it does clear it first, so that when we login to another account
    // while the first one is still in progress, then two timers will be runnoing at the same time and
    // that will be problematic.
    if (timer) clearInterval(timer);
    addTimer();

    // Also, update the UI of the current Account and clear the input fields.
    updateUI(currentUser);
  }

  inputTransferTo.value = '';
  inputTransferAmount.value = '';
  inputTransferAmount.blur();
});

// Loan Functionality
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loanAmount = Math.floor(Number(inputLoanAmount.value));

  const findMax = currentUser.movements.reduce(
    (max, mov) => (max > mov ? max : mov),
    0
  );

  // If the maxAmount of the currentAccount is >= 10% of the requested loan amount , then the loan will be approved.
  if (loanAmount * 0.1 <= findMax) {
    // Loan Amount will be added to the movements array of the currentUser and the UI will be updated.
    currentUser.movements.push(loanAmount);

    // Once the loan gets approved, add that date to the existing user's movementDates array.
    const now = new Date().toISOString();
    currentUser.movementsDates.push(now);

    // Clear the input field
    inputLoanAmount.value = '';

    // Remove focus from the input field
    inputLoanAmount.blur();

    // First check if any timer exists previosly, if it does clear it first, so that when we login to another account
    // while the first one is still in progress, then two timers will be runnoing at the same time and
    // that will be problematic.
    if (timer) clearInterval(timer);
    addTimer();

    setTimeout(() => {
      updateUI(currentUser);
    }, 2500);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const closeUserName = inputCloseUsername.value;
  const closePin = Number(inputClosePin.value);

  // Check if the entered username and pin are equal to the currentUser credentials
  // then proceed to delete it.
  if (closeUserName === currentUser.userName && closePin === currentUser.pin) {
    const index = accounts.findIndex(
      mov => mov.userName === currentUser.userName
    );

    // will remove only the currentAccount from the accounts array.
    accounts.splice(index, 1);
    console.log(index);

    // Make the UI as invisible
    containerApp.style.opacity = 0;
    currentUser = '';
    labelWelcome.textContent = 'Login to set started';
  }

  // Now,clear the input fields and make the app blur
  inputCloseUsername.value = '';
  inputClosePin.value = '';
});

// Assume sort is false initially
let sorted = false;
// Functionality to Sort the transactions
btnSort.addEventListener('click', function (e) {
  // First check, if the sort is enabled or disabled nby using a global variable.

  // What we are doing is that we are setting the sorted to false by default and then in the addElements function
  // we are checking if the sorted is passed true or false. I fit is false, then pass the original array to movs and
  // then add elements to the containerApp element according to it, else we are creating a sorted copy of movements
  // array and then adding elements as per that.
  addElements(currentUser, !sorted);

  // We are also toggling the sorted variable here, so that if it is true, then it becomes false and the next time
  // we click on sort button after the element is already sorted, we will get our original array in the result.
  sorted = !sorted;

  // Also, if we login to any other account and then come back to our account, then we will get the original array sequence
  // displayed in containerApp element as by default, the sorted element is set to false in the addElement function.
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// STEPS TO CREATE THE BANKIST APP FROM SCRATCH

// Step 1.
// Add the login functionality i.e.when a user enters his credentials, then the
// containerApp element should become visible.

// For that we need to first create and add usernames to each account.
// Username = 'Jonas Schmedtmann' = js

// forEach function passes three argumments to the callback function, the value, the index and the whole array
// as arguments which can be used in our callback function.
// -- DONE.

// Now. add eventListener to the login button and then log the user in if the credentials are correct. - DONE

// STEP 2.
// Create an updateUI function which displays the transactions on the application. - DONE

// Step 3.
// Now, add the functionality to transfer amount to a different account and also to get loan from the
// bank account. - DONE

// Step 4.
// Add functionality to close the account - DONE

// First, find a way so that the pin gets entered secretely, in ... format and it is not shown as typed. - DONE
// Also on successfull login, the welcome message must be in place of 'Login to get started' -- DONE
// and if the password is wrong, then the app should give a pop-up saying that 'Credentials are not correct'. -- DONE

// Step 5.
// Add functionality to sort the transactions. -- DONE

// Step 6.
// Round off the numbers.-- DONE

// In loan approval functionality, round off the loan amount to one less to make transactions clearer.-- DONE
// Only used Math.round() and toFixed() functions.

// Step 7.
// On loggin in, first display the current date. -- DONE
// Add dates to the application. -- Added to existing transactions -- DONE
// Add dates to the transferAmount functionality and add to Loan functionality. -- DONE

// Step 9.
// Also add the functionality that the loan gets approved and added after 3 seconds to the current account
// -- Had problem in it, search it.

// Solution - I wrapped my callback updateUI() function in an arraow function.
// Why was it not working before and why it worked now -- DONE

// This has something to do with the this keyword.The arrow function takes the this from the
// nearest lexical scope and thus it is more predictable while being used as a callback function
// while the regular functions do not have their own this keyword. So, when the setTimeOut uses them as
// callbacks, the this keyword of the regular function points to the global object (i.e. window in case)
// of browser, which makes it's behaviour unexpected.

// Step 8.
// Add timer to application.

// In the updateUI functionality, add the timer functionality using the setInterval function.
// So that whenever, we login to an account or make any transaction, the timer restarts.
// On reaching 0, user must be logged out.
