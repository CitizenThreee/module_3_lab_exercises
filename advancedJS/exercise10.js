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
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.error(error.message));

async function asyncFetch(url) {
    let response = await fetch(url);
    if (response.status === 200) {
        //response.json() returns a Promise, so to get the JSON data you'd have to first await it
        //before returning it like this:
        //return await response.json()
        return response.json();
    } else {
        //If an error were to occur, this would make the asyncFetch call crash the program even though
        //you have a .catch attached to it. The error will be because the error will not have a .then property.
        //To fix this, instead of "return", it should be "throw". This will allow the .catch part
        //of this function call to catch that error and not catch the program.
        return new Error(`Request failed with status ${response.status}`);
    }
}
    
asyncFetch('https://jsonplaceholder.typicode.com/todos/1').then(response => console.log(response)).catch(error => console.log(error.message))

async function asyncFetchAll() {
    let promises = [];
    //To get the JSON data, you'd have to await response.json() after fetching.
    //There is only one Promise.all in this function, so the "response" parameter in the .then
    //after the Promise.all would be a Promise.
    //Further up in the file you have the asyncFetch function that is a single Promise that
    //awaits both the fetch and the response.json() call. So to prevent the "response" parameter
    //from being a Promise, instead of calling fetch and adding the Promise it returns to the promises
    //array, it would be better to call your asyncFetch function.
    for(let i = 0; i < arguments.length; i++) promises[i] = fetch(arguments[i]);

    let allPromises = Promise.all(promises).then(response => response).catch(error => error.message);
    return allPromises;
    
    
}

asyncFetchAll('https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/1').then(response => console.log(response))