let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {

        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};
car.description(); //works
setTimeout(car.description.bind(car), 200); //fails
//setTimeout fails because it looses the context when passing as a property, rather than calling the function directly

let car2 = {...car, year: 1967};
car = car2;
car.description();

//delayed function uses old details, because it has the context of the original car object

let car3 = {...car, model: '1042'};
car = car3;
car.description();

//timeout still uses old bound values

//When the exercise mentioned "create a clome of the original and override it", it was meaning
//something like this:
//car = {...car, year: 2024}
//So the expected code would look like this:
/*

let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {

        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

setTimeout(() => car.description(), 200)

car = {...car, year: 2000}

setTimeout(car.description.bind(car), 500)

car = {...car, year: 2024}
*/
//That code above would have the setTimeout log the car with year 2024, and the bound function
//would log the car with year 2000. This is because when the function inside the first setTimeout
//is called, the car variable gets read at the time the function gets called. At the time it is getting
//called, the year change to 2024 has been made, so the car will have year be 2024.

//With the bound function, it is binding to the car variable. When the car variable gets changed
//the object the variable is pointing to changes, but the reference for the car object with
//the bound function is the same. So the bound function will log the car object that it was
//bound to, while the first setTimeout would log the most up to date car value.