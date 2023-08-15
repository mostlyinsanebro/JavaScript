"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// MY CODE

// Now, we want that at the beginning all the transactions that are there in the account becomes
// visible on the webpage.

const addElements = function (movements) {
  // We want that the previous transaction are not visible on the container.
  containerMovements.innerHTML = "";

  // Now, we want the the account array is traversed and all the elements get added
  // to the container element from bottom-to-top one-by-one.
  // Use forEach for that purpose.
  movements.forEach(function (movement, i) {
    // Add the div section to the container.
    const type = movement > 0 ? "deposit" : "withdrawal";
    const html = ` 
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${movement}💶</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

addElements(account1.movements);

const calcAndPrintBalance = function (movements) {
  const accountBalance = movements.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);

  labelBalance.textContent = `${accountBalance} 💶`;
};
calcAndPrintBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}💶`;

  const outgoings = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(outgoings)}💶`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .filter((interest) => interest >= 1)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = `${interest}💶`;
};

calcDisplaySummary(account1.movements);

/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// THE find Method

// The find method is used to find the an element from an array.
// It is similar to filter function but unlike filter which returns an array
// containing the elements that satisfy a condition, the find function
// returns the first element that matches the specified consition.

// Write find on movement to get the first withdrawl of an account.
const firstWithdrawl = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawl);

// Write a function which returns the account object from accounts array
// whose owner's name is 'Jessica Davis'.
console.log(accounts);
const getAccount = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(getAccount);

// Write same logic using for of loop
let matchedAccount;
for (const acc of accounts) {
  if (acc.owner === "Sarah Smith") matchedAccount = acc;
}

console.log(matchedAccount);
