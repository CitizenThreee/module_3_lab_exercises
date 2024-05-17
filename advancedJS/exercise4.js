function printFibonacci() {
    let previousNum = 0;
    let currentNum = 1;
    return setInterval(() => {
        let nextNum = previousNum + currentNum;
        previousNum = currentNum;
        currentNum = nextNum;
        console.log("Next fibonacci number is: " + nextNum)
    }, 1000)
}

// setting this to a var lets us cancel the interval if we want
//let fib = printFibonacci();

function printFibonacciTimeouts(previousNum = 0, currentNum = 1) {
    setTimeout(() => {
        let nextNum = previousNum + currentNum;
        previousNum = currentNum;
        currentNum = nextNum;
        console.log("Next fibonacci number is: " + nextNum)
        printFibonacciTimeouts(previousNum, currentNum);
    }, 1000)
}

// we can't stop this one
//printFibonacciTimeouts();

function printFibonacciTimeouts2(repeatCount) {
    setTimeout(function repeat(counter = 1, previousNum = 0, currentNum = 1) {
        let nextNum = previousNum + currentNum;
        previousNum = currentNum;
        currentNum = nextNum;
        console.log("Next fibonacci number is: " + nextNum)
        if(counter < repeatCount) setTimeout(repeat, 1000, counter+1, previousNum, currentNum);
    }, 1000, 1)
}

// stops after x times
printFibonacciTimeouts2(10);