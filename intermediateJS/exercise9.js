let salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
};

function sumSalaries(salaries){
    let total = 0;
    for(let employee in salaries){ total += salaries[employee]; } 
    return total;
}

console.log(sumSalaries(salaries));

function topEarner(salaries){
    let top;
    for(let employee in salaries){ top = salaries[employee] < salaries[top] ? top : employee } 
    return top;
}

console.log(topEarner(salaries));