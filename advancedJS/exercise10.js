//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",
import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
    let fetchPromise = fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }

    });
    return fetchPromise;
}
fetchURLData('https://jsonplacholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.error(error.message));

async function asyncFetch() {
    let response = await fetch(url);
    if (response.status === 200) {
        return response.json();
    } else {
        return new Error(`Request failed with status ${response.status}`);
    }
}
    
asyncFetch('https://jsonplaceholder.typicode.com/todos/1').then(response => console.log(response)).catch(error => console.log(error.message))

async function asyncFetchAll() {
    let promises = [];
    for(let i = 0; i < arguments.length; i++) promises[i] = fetch(arguments[i]);

    let allPromises = Promise.all(promises).then(response => response).catch(error => error.message);
    return allPromises;
    
    
}

asyncFetchAll('https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/1').then(response => console.log(response))