'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
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
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
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
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

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

/////////////////////////////////////////////////
// MY CODE

// Now, we want that at the beginning all the transactions that are there in the account becomes
// visible on the webpage.

// Now, we also want to add sorted functionality in the addElemennts functions.
// We want to first sort the movements of an account and then add Elements in that order.

// Set sort to false by default.
const addElements = function (acc, sort = false) {
  // make a copy of original array and sort it if sort is true
  const movs = sort
    ? acc.movements.slice().sort((a, b) => {
        if (a > b) return 1;
        else return -1;
      })
    : acc.movements;

  // We want that the previous transaction are no more visible on the container.
  containerMovements.innerHTML = '';

  // Now, we want the the account array is traversed and all the elements get added
  // to the container element from bottom-to-top one-by-one.
  // Use forEach for that purpose.
  movs.forEach(function (movement, i) {
    // Now, get the corresponding date of the existing element from the movementDates
    // array of that same function.
    const now = new Date(acc.movementsDates[i]);
    const Year = now.getFullYear();
    const Month = `${now.getMonth()}`.padStart(2, 0);
    const Day = `${now.getDate()}`.padStart(2, 0);

    const displayDate = `${Day}/${Month}/${Year}`;

    // Add the div section to the container.
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = ` 
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${movement.toFixed(2)}💶</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcAndPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);

  labelBalance.textContent = `${acc.balance.toFixed(2)} 💶`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes.toFixed(2)}💶`;

  const outgoings = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(outgoings.toFixed(2))}💶`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(interest => interest >= 1)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = `${interest.toFixed(2)}💶`;
};

// Create a function which creates usernames taking the accounts array as input.
const createUserNames = function (accs) {
  // Traverse through that array and add a propert username to each acoount
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(val => val[0])
      .join('');
  });
};

createUserNames(accounts);

// UpdateUI function
const updateUI = function (acc) {
  // Display movements for current account
  addElements(acc);

  // Display Balance for current account
  calcAndPrintBalance(acc);

  // Display Summary for current account
  //calcDisplaySummary(currentUser.movements);

  // Now, we also want to calculate interest as per interestRate of each account
  calcDisplaySummary(acc);
};

// Implementing Login
let userName;
let currentUser;

// Now, we want to add eventListener to our submit button for username and pin.
btnLogin.addEventListener('click', function (e) {
  // Prevents the form from submitting and refreshing the page
  e.preventDefault();

  console.log('LOGIN');
  // For the time being, login is being logged  to the console but for a veryt short amount of time
  // before the form submits again and refreshes the log and page.We will have to stop it.

  // Now, we want to get the values entered in username and pin fields.
  userName = inputLoginUsername.value;

  const pin = inputLoginPin.value;

  // Found the current User
  currentUser = accounts.find(acc => acc.username === userName);

  // Now, make the opacity of app class 0 by default and on submitting username and pin
  // we want that a welcome message and the page content is displayed.

  if (currentUser && currentUser.pin === Number(pin)) {
    // Made page visible on successfull login
    containerApp.style.opacity = 100;

    // Display welcome message

    labelWelcome.textContent = `Welcome back, ${
      currentUser.owner.split(' ')[0]
    }`;

    // Now, we want that on successful login, the username and pin fields become blank
    inputLoginUsername.value = inputLoginPin.value = '';

    // We also want to loose focus from the pin field.
    inputLoginPin.blur();

    // Calculate the current date and make the date of current balance element as Current Date
    const now = new Date();
    const Year = now.getFullYear();
    const Month = `${now.getMonth()}`.padStart(2, 0);
    const Day = `${now.getDate()}`.padStart(2, 0);

    const Hour = `${now.getHours()}`.padStart(2, 0);
    const Minute = `${now.getMinutes()}`.padStart(2, 0);

    labelDate.textContent = `${Year}/${Month}/${Day} ${Hour}:${Minute}`;

    updateUI(currentUser);
  }
});

// Implementing Transfers from one account to another

// Add event Listener to transfer money button
btnTransfer.addEventListener('click', function (e) {
  // prevents the default behaviour of form which refreshes the page on submitting
  e.preventDefault();

  // Now, we want to get the amount of money entered in the transfer to field
  const amount = Math.floor(inputTransferAmount.value);

  // Now, get the user object whose username is passed in the 'transfer to'field.
  const transferAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  // Empty the input fields and remove focus from amount field
  inputTransferAmount.value = inputTransferTo.value = '';

  inputTransferTo.blur();

  // Now, go and add balance to the current account in the calcAndPrintBalance function()

  // Keep in mind that all the variables that are referencing to the objects actually are
  // pointing to the same memory location that has the original object and thus in turn all of
  // them point to the same object and make change to the original object only which is
  // displayed wherever we call the object later.

  // Now, check if the enetered amount is > 0 and also <= balance of current account
  // also check if the account exists and if the transfer to account is not same as
  // that of currentAccount.
  if (
    amount > 0 &&
    amount <= currentUser.balance &&
    transferAccount &&
    transferAccount.username !== currentUser.username
  ) {
    // Add the transferred money to the tranfer account
    transferAccount.movements.push(amount);

    // Remove the transferred (money from the current account
    currentUser.movements.push(-amount);

    // Add date to the movementDates of currentUser and the receiver as well.
    currentUser.movementsDates.push(new Date().toISOString());

    // Add date to the movementDates of the receiver.
    transferAccount.movementsDates.push(new Date().toISOString());

    // Now, update the UI
    updateUI(currentUser);
  }
});

// Add functionality to request a loan from the bank.
// We can request an amount from the bank if a deposit that equals or exceeds 10% of
// that amount exists in the currentAccount
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  // If entered amount >0 and  if a deposit that equals or exceeds 10% of
  // that amount exists in the currentAccount, then loan will be approved.
  if (amount > 0 && currentUser.movements.some(mov => mov >= amount * 0.1)) {
    // Add loan amount to the currentUser
    currentUser.movements.push(amount);

    // Add date to the movementDates of currentUser and the receiver as well.
    currentUser.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentUser);
  }

  // Remove value from the input field
  inputLoanAmount.value = '';
});

// Adding functionality to delete an account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  // Now, check if the user and pin match the current user or not.
  if (
    currentUser.username === inputCloseUsername.value &&
    currentUser.pin === Number(inputClosePin.value)
  ) {
    // If it does then we need to remove that account from the accounts array.

    // for that we need to use the splice method which will remove the element from that
    // index and make that change in the original array.But first, we will need the index of
    // the object that has that username.

    // We will use findIndex for that.
    const idx = accounts.findIndex(
      acc => acc.username === currentUser.username
    );

    // Removes 1 element starting from idx
    accounts.splice(idx, 1);

    // hide the UI Now and empty the fields.
    inputCloseUsername.value = inputClosePin.value = '';
    containerApp.style.opacity = 0;
  }
});

// Add eventListener to Sort button
let sorted = false;

// On clicking this button,if the movements are not sorted then they will get sorted
// else they will go the original state.
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  addElements(currentUser, !sorted);
  sorted = !sorted;
});

// ADDING DATES TO 'BANKIST' APP

// We will now add dates to the current balance element and all of the deposits
// and withdrawls

// For that, first implement a fake login so that we do not have to login again and again
// for testing.

currentUser = accounts[0]; // Make current as the first account
updateUI(currentUser); // Update the UI of the page for that user
containerApp.style.opacity = 100; // Make the opacity as 100 i.e. make movements visible.

// Now,we also want to add dates to each movement of the account. For that, use the
// new movement dates to array of each account and then add it to the movement element's HTML as well.

// We have added dates to the all the existing movements. But we also need to add those to the new
// transactions.
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
