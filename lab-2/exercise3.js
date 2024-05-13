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
    const newArray = [];
    for(let i = 0; i < animals.length; i++){
        if(animals[i].toLowerCase().startsWith(beginsWith.toLowerCase())){
            newArray.push(animals[i])
        }
    }
    return newArray;
}

console.log(FindMatchingAnimals("K"))