const today = new Date();
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
console.log('Current time is ' + today.toLocaleTimeString());
console.log(hours + ' hours have passed so far today');
console.log(hours * 60 + minutes + ' minutes have passed so far today');
console.log(hours * 60 * 60 + minutes * 60 + seconds + ' seconds have passed so far today');

//I am not sure if there is an easier way that is 100% accurate, but this will work with whatever the birth date and current date are
//This is very close to being 100% accurate. Explanation is below:
function timeFromBirth(year, month, day){
    let yearsFromBirth = today.getFullYear() - year;
    let daysFromBirth = today.getDate() - day;
    let monthsFromBirth = (today.getMonth() + 1 + (12-month)) % 12;
    if(daysFromBirth < 0){
        const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        console.log(daysInLastMonth);
        monthsFromBirth -= 1;
        //This should be daysInLastMonth + daysFromBirth instead of subtracting.
        //daysFromBirth is negative if the date is before the birthdate so that's making
        //days go past 31 days in a month
        daysFromBirth = daysInLastMonth - daysFromBirth;
    }
    //If daysFromBirth was less than 0, then monthsFromBirth is getting 1 taken away from it.
    //This means that months has the possibility to be negative. Here we'd want to check
    //if months is negative, and if it is, take away 1 from years and add 12 to months
    //At the bottom of this file is my version of this that modified your function to do this.

    console.log("I am: " + yearsFromBirth + " years, " + monthsFromBirth + " months, " + daysFromBirth + " days old")
}

timeFromBirth(2002, 3, 2);

function daysInBetween(date1, date2){
    const milliseconds = Math.abs(date1 - date2);
    return Math.floor(milliseconds / 1000 / 60 / 60 / 24)
}

console.log(daysInBetween(new Date(2004, 1, 16), new Date(2006, 8, 21)));

/*
const today = new Date('2024-07-24');

function timeFromBirth(year, month, day){
  let yearsFromBirth = today.getFullYear() - year;
  let daysFromBirth = today.getDate() - day;
  let monthsFromBirth = (today.getMonth() + 1 + (12-month)) % 12;
  if(daysFromBirth < 0){
      const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      monthsFromBirth -= 1;
      daysFromBirth = daysInLastMonth + daysFromBirth;
  }
  if (monthsFromBirth < 0) {
    yearsFromBirth -= 1
    monthsFromBirth += 12
  }

  console.log("I am: " + yearsFromBirth + " years, " + monthsFromBirth + " months, " + daysFromBirth + " days old")
}

timeFromBirth(2023, 7, 22);
*/



