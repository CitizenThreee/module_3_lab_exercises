function CamelCase(cssProp){
    const nameArray = cssProp.split("-");
    if(nameArray.length < 2) return cssProp;
    for(let i = 1; i < nameArray.length; i++){
        nameArray[i] = nameArray[i][0].toUpperCase() + nameArray[i].slice(1);
    }

    return nameArray.join("");
}
console.log("func 1: " + CamelCase("some-property"));

function CamelCase2(cssProp){
    const nameArray = cssProp.split("-");
    if(nameArray.length < 2) return cssProp;
    nameArray.forEach((element, index) => nameArray[index] = index > 0 ? element[0].toUpperCase() + element.slice(1) : element)

    return nameArray.join("");
}
console.log("func 2: " + CamelCase2("some-property"));

function CamelCase3(cssProp){
    const nameArray = cssProp.split("-");
    if(nameArray.length < 2) return cssProp;
    for(index in nameArray){
        nameArray[index] = index > 0 ? nameArray[index][0].toUpperCase() + nameArray[index].slice(1) : nameArray[index];
    }
    
    return nameArray.join("");
}
console.log("func 3: " + CamelCase3("some-property"));

function CamelCase4(cssProp){
    const nameArray = cssProp.split("-");
    if(nameArray.length < 2) return cssProp;
    for(element of nameArray){
        if(nameArray.indexOf(element) > 0){
            nameArray[nameArray.indexOf(element)] = element[0].toUpperCase() + element.slice(1);
        }
    }
    
    return nameArray.join("");
}
console.log("func 4: " + CamelCase4("some-property"));