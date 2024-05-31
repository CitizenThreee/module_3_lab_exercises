//Complete the inigo object

/*<---------------------------------------------------------------------------------------------------->*/

const westley = {
    name: 'Westley',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}
const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    //An arrow function version of this method for part c would be like this:
    /*
    getCatchPhrase: (person) => person.numFingers == 6 ? "You killed my father. Prepare to die." : "Nice to meet you."
    */
    getCatchPhrase(person) {
        return person.numFingers == 6 ? "You killed my father. Prepare to die." : "Nice to meet you.";
    }
}
inigo.greeting(westley)
inigo.greeting(rugen)