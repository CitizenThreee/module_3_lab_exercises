function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = () => this.age >= 18;
}

const Aedan = new Person('Aedan', 22);
const Phoebe = new Person('Phoebe', 24);

console.log(Aedan.name + " : " + Aedan.age);
console.log(Phoebe.name + " : " + Phoebe.age);

class PersonClass{
    name

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    canDrive = () => this.age >= 18;
}

const Toby = new Person('Toby', 24);
console.log(Toby.name + " : " + Toby.age);

console.log(Toby.canDrive());
console.log(Aedan.canDrive());