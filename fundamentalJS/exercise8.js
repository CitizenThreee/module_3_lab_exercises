const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}
const queenstown = {
    name: 'Queenstown',
    population: 29_000,
    state: 'Otago',
    founded: 'January 1863',
    timezone: 'New Zealand/Auckland'
}

function LogProperties(obj){
    for(prop in obj){
        console.log(prop + ": " + obj[prop]);
    }
}

LogProperties(sydney);
LogProperties(queenstown);