function multiply(a, b, c, d) {
    console.log(a * b * c * d);
}

Function.prototype.delay = function(delay){
    let func = this;
    return function(...args) {
        setTimeout(function() {func(null, args)}, delay);
    }
    
}
multiply.delay(500)(5, 5, 5, 5); // prints 25 after 500 milliseconds
