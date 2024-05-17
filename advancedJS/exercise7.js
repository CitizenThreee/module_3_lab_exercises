function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.toString = function() { 
        return "name: " + this.name + " | age: " + this.age + " | gender: " + this.gender; 
    }
}
const person1 = new Person('James Brown', 73, 'male')
const person2 = new Person('Josh Jones', 52, 'male')
console.log('person1: ' + person1)
console.log('person2: ' + person2) 

function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender)
    this.cohort = cohort;
    this.toString = function() { 
        return "name: " + this.name + " | age: " + this.age + " | gender: " + this.gender + " | cohort: " + cohort; 
    }
}
const student1 = new Student('Julie Adams', 19, 'female', 'SEANZ')
const student2 = new Student('James Eliot', 21, 'male', 'SEANZ')
console.log('student1: ' + student1)
console.log('student2: ' + student2) 