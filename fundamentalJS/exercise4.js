//Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?

/*<---------------------------------------------------------------------------------------------------->*/

let a = 5, b = 7;
let result = `${a} + ${b} is ` + (a + b < 10 ? 'less than 10' : 'greater than 10');
console.log(result); // "2 + 3 is less than 10" "5 + 10 is greater than 10"

//'+=' appends the right side of the statement onto the variable on the left side

/*if (a + b < 10) {
    result += 'less than 10';
} else {
    result += 'greater than 10';
}*/