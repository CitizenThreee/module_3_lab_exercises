const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const animals = ['kiwi', 'kiwi', 'tiger', 'gorilla', 'lion', 'tiger', 'elephant', 'kangaroo', 'lion']
const animals2 = ['Kiwi', 'kiwi', 'tiger', 'gorilla', 'lion', 'Tiger', 'elephant', 'kangaroo', 'lion']
console.log(Unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(Unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(Unique(animals)) // [ 'kiwi', 'tiger', 'gorilla', 'lion', 'elephant', 'kangaroo' ]
console.log(Unique2(animals2)) // [ 'kiwi', 'tiger', 'gorilla', 'lion', 'elephant', 'kangaroo' ]
console.log(Unique3(animals2)) // [ 'kiwi', 'tiger', 'gorilla', 'lion', 'elephant', 'kangaroo' ]

function Unique(dupArray){
    let newSet = new Set(dupArray);
    return [...newSet];
}

//Also works with different capitalization
function Unique2(dupArray){
    const newArray = [...dupArray];
    newArray.forEach((item, index) => newArray[index] = item.toLowerCase())
    let newSet = new Set(newArray);
    return [...newSet];
}

//Works with different capitalization, but keeps capitalization of the items how they are in the first instance of the item in the array. Also orderes the array alphabetically
function Unique3(dupArray){
    const newArray = [...dupArray];
    newArray.sort((a, b) => a.toLowerCase() >= b.toLowerCase() ? 1 : -1);
    const endArray = [];
    newArray.forEach((item, index) => {
        if(index == 0) endArray.push(item);
        if(item.toLowerCase() != newArray[index == 0 ? index : index - 1].toLowerCase()){
            endArray.push(item);
        }
    })
    return endArray;
}