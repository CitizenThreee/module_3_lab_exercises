//Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

/*<---------------------------------------------------------------------------------------------------->*/

let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition = three + four; /*I expect "34"  */ console.log( addition ); // "34"
let multiplication = three * four; /*I expect 12  */ console.log( multiplication ); // 12
let division = three / four; /*I expect 0.75  */ console.log( division ); // 0.75
let subtraction = three - four; /*I expect -1  */ console.log( subtraction ); // -1
let lessThan1 = three < four; /*I expect true  */ console.log( lessThan1 ); // true
let lessThan2 = thirty < four; /*I expect true  */ console.log( lessThan2 ); // true

// addition and lessThan2 are not what we would expect if the variables were numbers, we can fix them using the following: 
let addition2 = Number(three) + Number(four); /* I expect 7  */ console.log( addition2 ); // 7
let lessThan3 = Number(thirty) < Number(four); /* I expect false  */ console.log( lessThan3 ); // false

console.log("|");
console.log("|");
console.log("|");