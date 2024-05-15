const animals = ['Tiger', 'Giraffe'];
const LogAnimals = () => console.log(animals);

animals.push('Lemur');
animals.push('Rhino');
animals.unshift('Kangaroo');
animals.unshift('Kiwi');

LogAnimals();

animals.sort();

LogAnimals();

function ReplaceMiddleAnimal(newValue){
    let middle = Math.floor((animals.length-1) / 2);
    animals[middle] = newValue;
}

ReplaceMiddleAnimal("Koala")
LogAnimals();

function FindMatchingAnimals(beginsWith) {
    const newArray = animals.filter(animals => animals.toLowerCase().startsWith(beginsWith.toLowerCase()));
    return newArray;
}

console.log(FindMatchingAnimals("K"))