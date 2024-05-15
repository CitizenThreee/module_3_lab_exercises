let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //0.200.20 | why is this not working? 
//It isn't working because using toFixed converts the number to a string.


function CurrencyAddition(num1, num2){
    return (num1 + num2).toFixed(2);
}

console.log("--------------------Testing CurrenctyAddition--------------------")
console.log(0.3 == CurrencyAddition(twentyCents, tenCents));
console.log(0.57 == CurrencyAddition(0.11, 0.46));

function CurrencyOperation(num1, num2, operation){
    switch(operation){
        case "+" :
            return (num1 + num2).toFixed(2);
        case "*" :
            return (num1 * num2).toFixed(2);
        case "-" :
            return (num1 - num2).toFixed(2);
        case "/" : 
            return (num1 / num2).toFixed(2);
    }
}

console.log("--------------------Testing CurrenctyOperation--------------------")
console.log(0.3 == CurrencyOperation(0.1, 0.2, '+'))
console.log(1.06 == CurrencyOperation(0.15, 0.91, '+'))
console.log(0.8 == CurrencyOperation(0.4, 2, '*'))
console.log(1.25 == CurrencyOperation(2.50, 2, '/'))
console.log(-0.1 == CurrencyOperation(0.1, 0.2, '-'))

function CurrencyOperation2(num1, num2, operation, numOfDecimals){
    switch(operation){
        case "+" :
            return (num1 + num2).toFixed(numOfDecimals);
        case "*" :
            return (num1 * num2).toFixed(numOfDecimals);
        case "-" :
            return (num1 - num2).toFixed(numOfDecimals);
        case "/" : 
            return (num1 / num2).toFixed(numOfDecimals);
    }
}

console.log("--------------------Testing CurrenctyOperation2--------------------")
console.log(0.3687 == CurrencyOperation2(0.1523, 0.2164, '+', 4))
console.log(1.062 == CurrencyOperation2(0.151, 0.911, '+', 3))
console.log(0.8 == CurrencyOperation2(0.4, 2, '*', 2))
console.log(0.384 == CurrencyOperation2(0.4224, 1.1, '/', 3))
console.log(-0.08889 == CurrencyOperation2(0.11111, 0.2, '-', 5))