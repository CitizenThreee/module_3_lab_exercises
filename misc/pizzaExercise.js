function pizzaPrepStarted() { 
    return new Promise((resolve) => setTimeout(() => resolve("Started preparing pizza ..."), 500)); 
}
function pizzaBaseMade() { 
    return new Promise((resolve) => setTimeout(() => resolve("Made the base"), 2000));
}
function pizzaSauceAndCheeseAdded() { 
    return new Promise((resolve) => setTimeout(() => resolve("Added the sauce and cheese"), 1000));
}
function pizzaToppingsAdded() { 
    return new Promise((resolve) => setTimeout(() => resolve("Added the pizza toppings"), 2000));
}
function pizzaCooked() { 
    return new Promise((resolve) => setTimeout(() => resolve("Cooked the pizza"), 5000));

}
function pizzaReady() { 
    return new Promise((resolve) => setTimeout(() => resolve("Pizza is ready"), 1000));
}

const startPizza = async () => { 
    //new Promise((resolve) => {return pizzaPrepStarted()}).then(() => {pizzaBaseMade()})
    let num1 = await pizzaPrepStarted();
    console.log(num1);
    let num2 = await pizzaBaseMade();
    console.log(num2);
    let num3 = await pizzaSauceAndCheeseAdded();
    console.log(num3);
    let num4 = await pizzaToppingsAdded();
    console.log(num4);
    let num5 = await pizzaCooked();
    console.log(num5);
    let num6 = await pizzaReady();
    console.log(num6);

 }
startPizza();