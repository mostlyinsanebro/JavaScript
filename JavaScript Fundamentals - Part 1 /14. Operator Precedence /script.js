// Operators are basically used to  determine the order of the execution in the
// matheatical expression.

// We can refer mdn docs table for this.

const now = 2045;
const ageAbhi = now - 2000;
const ageNidhi = now - 1995;

console.log(now-2000 > now - 1995);
// this is evaluated through opearator precedence.
// - is evaluated first and > is evaluated later.
// it means 45 > 50

let x,y;
x = y = 25 - 10 - 5;// x = y = 10
console.log(x , y);
// = has associativity from right-to-left and - has ass. from left to right.

const averageAge = (ageAbhi + ageNidhi) / 2;
console.log(averageAge);
// () are evaluated first and then / is evaluated.
