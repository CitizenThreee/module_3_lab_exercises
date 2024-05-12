//Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

/*<---------------------------------------------------------------------------------------------------->*/

function getGreeting(name) {
    return 'Hello ' + name + '!';
}
console.log(getGreeting("Aedan"));
let getGreeting2 = function(name){
    return 'Hello ' + name + '!';
}
console.log(getGreeting2("Aedan"));
let getGreeting3 = (name) => 'Hello ' + name + '!';
console.log(getGreeting3("Aedan"));

// All work as expected, returning "Hello Aedan!"