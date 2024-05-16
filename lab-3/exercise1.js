function makeCounter(startFrom, incrementBy) {
    let currentCount = startFrom;
    return function () {
        currentCount += incrementBy;
        console.log(currentCount)
        return currentCount;
    };
}
let counter1 = makeCounter(0, 1);
let counter2 = makeCounter(5, 5);
counter1(); // 1
counter2(); // 10
counter2(); // 15
counter2(); // 20
counter1(); // 2
