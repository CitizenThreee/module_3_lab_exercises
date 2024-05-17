const today = new Date();
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
console.log('Current time is ' + today.toLocaleTimeString());
console.log(hours + ' hours have passed so far today');
console.log(hours * 60 + minutes + ' minutes have passed so far today');
console.log(hours * 60 * 60 + minutes * 60 + seconds + ' seconds have passed so far today');

//I am not sure if there is an easier way that is 100% accurate, but this will work with whatever the birth date and current date are
function timeFromBirth(year, month, day){
    let yearsFromBirth = today.getFullYear() - year;
    let daysFromBirth = today.getDate() - day;
    let monthsFromBirth = (today.getMonth() + 1 + (12-month)) % 12;
    if(daysFromBirth < 0){
        const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        console.log(daysInLastMonth);
        monthsFromBirth -= 1;
        daysFromBirth = daysInLastMonth - daysFromBirth;
    }

    console.log("I am: " + yearsFromBirth + " years, " + monthsFromBirth + " months, " + daysFromBirth + " days old")
}

timeFromBirth(2002, 3, 2);

function daysInBetween(date1, date2){
    const milliseconds = Math.abs(date1 - date2);
    return Math.floor(milliseconds / 1000 / 60 / 60 / 24)
}

console.log(daysInBetween(new Date(2004, 1, 16), new Date(2006, 8, 21)));





