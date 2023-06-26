/* Write your code below. Good luck! 🙂 */

const calcAverage = (firstScore,secondScore,thirdScore) => 
 (firstScore+secondScore+thirdScore)/3;

const scoreDolphins = calcAverage();
const scoreKoalas =   calcAverage();


const checkWinner = function(avgDolphins,avgKoalas)
{
    if(avgKoalas>2*avgDolphins)
    {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else if(avgDolphins > 2*avgKoalas)
    {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else
    {
        console.log(`No team wins...`);
    }
}

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas   = calcAverage(23, 34, 27);

checkWinner(avgDolphins,avgKoalas);


