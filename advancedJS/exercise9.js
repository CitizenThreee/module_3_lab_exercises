function randomDelay() {
    return new Promise((resolve, reject) => {
        let randomNum = Math.ceil(Math.random() * 2 * 10) * 1000;
        setTimeout(() => {
            if(randomNum/1000 % 2 == 0)
                resolve(randomNum)
            else
                reject(randomNum)
        }, randomNum)
    })
}
randomDelay()
.then((result) => console.log('There appears to have been a successfully even delay of ' + result / 1000 + " seconds"))
.catch((result) => console.log('There appears to have been an unfortunately odd delay of ' + result / 1000 + " seconds"));