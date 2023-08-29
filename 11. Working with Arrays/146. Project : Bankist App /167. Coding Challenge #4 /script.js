const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];


// Challenge 1.
dogs.forEach((dog) => {
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
});

console.log(dogs);

// Challenge 2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  }`
);

// Challenge 3.
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

// Challenge 4.
const eatTooMuchString = ownersEatTooMuch.join(" and ");
console.log(`${eatTooMuchString}'s dogs eat too much!`);

const eatTooLittleString = ownersEatTooLittle.join(" and ");
console.log(`${eatTooLittleString}'s dogs eat too little!`);

// Challenge 5.
console.log(dogs.some((dog) => dog.recFood === dog.curFood));

// Challenge 6.
// any means some()

const checkEatingOkay = (dog) =>
  dog.curFood <= dog.recFood * 1.1 && dog.curFood >= dog.recFood * 0.9;

console.log(dogs.some(checkEatingOkay));

// Challenge 7.
const eatingOkayList = dogs.filter(checkEatingOkay);
console.log(eatingOkayList);

// Challenge 8.

const sortedDogs = dogs.slice().sort((a, b) => {
  if (a.recFood < b.recFood) return -1;
  if (b.recFood > a.recFood) return 1;
});

console.log(sortedDogs);
