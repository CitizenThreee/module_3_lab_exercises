let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };


let moreSports = teamSports;
moreSports.push('Rugby');
moreSports.push('Mountaineering');
moreSports.unshift('Snowboarding');
let dog2 = dog1;
dog2 = 'Jake';
let cat2 = cat1;
cat2.name = 'Winky';

console.log(teamSports); // changed because an array is a reference type, so moreSports is only copying the reference, then editing the referenced array
console.log(dog1); // didn't change because it is a primitive, not a reference type, and so dog2 just copied the value
console.log(cat1); // changed because cat1 is a reference type, so we are just editing the referenced object

