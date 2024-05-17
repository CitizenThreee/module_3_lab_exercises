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