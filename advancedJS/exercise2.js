const delayMsg = (msg) => console.log(`This message will be printed after a delay: ${msg}`);

const longTimeout = setTimeout(delayMsg, 10000, '#0: Delayed by 10000ms');
setTimeout(() => clearTimeout(longTimeout), 5000);

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

//they will print in reverse order, because 4 is sync, 3 is async, but no delay, 2 is more delay, and 1 more still