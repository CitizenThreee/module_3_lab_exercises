function printMe(msg) {
    console.log(msg)
}

function debounce(func, ms){
    const timeWaited = 0;
    let timer;
    return function (msg) {
        clearTimeout(timer);
        timer = setTimeout(() => func(msg), ms);
    }
    
}

printMe = debounce(printMe, 500); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout(printMe, 100, "printing message 1");
setTimeout(printMe, 200, "printing message 2");
setTimeout(printMe, 300, "printing message 3");