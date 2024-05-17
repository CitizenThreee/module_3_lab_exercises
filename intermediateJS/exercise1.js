function CapitalizeString(str){
    let strArray = str.split(" ");
    for(let i = 0; i < strArray.length; i++){
        strArray[i] = strArray[i][0].toUpperCase() + strArray[i].slice(1);
    }

    return strArray.join(" ");
}

console.log(CapitalizeString("los angeles"))
console.log(CapitalizeString("all these words should have capitals"))
console.log(CapitalizeString("numbers and symbols shouldn't change : 12 34 903883"))