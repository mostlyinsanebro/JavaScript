// The while loop should be used when we do not know the number of iterations that are going 
// to be there, beforehand.


let i= 1;
while(i<=10)
{
    console.log(i);
    i++;
}


let dice = Math.trunc(Math.random()*6)+1;

while(dice != 6)
{
    console.log(`Dice rolled. You rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6)+1;

    if(dice == 6)
    {
       console.log(`You rolled a ${dice}. Loop is about to end.`);
    }

}
